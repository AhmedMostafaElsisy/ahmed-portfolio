"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import type { ScreenId, SectionId } from "@/data/apps";
import { chat } from "@/data/profile";

const TYPING_MS = 900;
const TOAST_MS = 2800;
// While we smooth-scroll to a tapped app, ignore the sections we fly past.
const PROGRAMMATIC_SCROLL_MS = 1100;

export type ChatMessage = { id: string; from: "me" | "ahmed"; text: string };

type OsState = {
  screen: ScreenId;
  unlocked: boolean;
  unlock: () => void;
  goHome: () => void;
  /** Called by the scroll observer when a section reaches the middle of the viewport. */
  syncFromScroll: (screen: ScreenId) => void;
  /** Called when the visitor taps an app: show it on the phone and scroll its section into view. */
  openSection: (id: SectionId) => void;
  messages: readonly ChatMessage[];
  asked: ReadonlySet<number>;
  typing: boolean;
  ask: (index: number) => void;
  toast: string | null;
  showToast: (text: string) => void;
};

const OsContext = createContext<OsState | null>(null);

export function useOs(): OsState {
  const ctx = useContext(OsContext);
  if (!ctx) throw new Error("useOs must be used inside <OsProvider>");
  return ctx;
}

const greeting: ChatMessage = { id: "hello", from: "ahmed", text: "Hey! You unlocked my phone. Ask me anything." };

export function OsProvider({ children }: { children: React.ReactNode }) {
  const [screen, setScreen] = useState<ScreenId>("lock");
  const [unlocked, setUnlocked] = useState(false);
  const [messages, setMessages] = useState<readonly ChatMessage[]>([greeting]);
  const [asked, setAsked] = useState<ReadonlySet<number>>(new Set());
  const [typing, setTyping] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const typingTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const ignoreScrollUntil = useRef(0);

  useEffect(
    () => () => {
      clearTimeout(toastTimer.current);
      clearTimeout(typingTimer.current);
    },
    [],
  );

  const unlock = useCallback(() => {
    setUnlocked(true);
    setScreen((s) => (s === "lock" ? "home" : s));
  }, []);

  const goHome = useCallback(() => {
    setUnlocked(true);
    setScreen("home");
  }, []);

  const syncFromScroll = useCallback(
    (next: ScreenId) => {
      if (Date.now() < ignoreScrollUntil.current) return;
      if (next === "home") {
        setScreen(unlocked ? "home" : "lock");
        return;
      }
      setUnlocked(true);
      setScreen(next);
    },
    [unlocked],
  );

  const openSection = useCallback((id: SectionId) => {
    setUnlocked(true);
    setScreen(id);
    ignoreScrollUntil.current = Date.now() + PROGRAMMATIC_SCROLL_MS;
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const showToast = useCallback((text: string) => {
    setToast(text);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), TOAST_MS);
  }, []);

  const ask = useCallback(
    (index: number) => {
      const entry = chat[index];
      if (!entry || asked.has(index) || typing) return;
      setAsked((prev) => new Set([...prev, index]));
      setMessages((prev) => [...prev, { id: `q${index}`, from: "me", text: entry.q }]);
      setTyping(true);
      typingTimer.current = setTimeout(() => {
        setMessages((prev) => [...prev, { id: `a${index}`, from: "ahmed", text: entry.a }]);
        setTyping(false);
      }, TYPING_MS);
    },
    [asked, typing],
  );

  const value = useMemo<OsState>(
    () => ({ screen, unlocked, unlock, goHome, syncFromScroll, openSection, messages, asked, typing, ask, toast, showToast }),
    [screen, unlocked, unlock, goHome, syncFromScroll, openSection, messages, asked, typing, ask, toast, showToast],
  );

  return <OsContext.Provider value={value}>{children}</OsContext.Provider>;
}
