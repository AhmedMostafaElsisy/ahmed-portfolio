"use client";

import { motion, useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";
import { chat } from "@/data/profile";
import { useOs } from "./os-context";

/**
 * The same conversation renders inside the phone (compact) and in the Messages
 * section (full size). Both read and write the shared OS state.
 */
export function ChatThread({ compact = false }: { compact?: boolean }) {
  const { messages, typing, asked, ask } = useOs();
  const reduce = useReducedMotion();
  const listRef = useRef<HTMLDivElement>(null);

  // Keep the newest message visible without scrolling the page itself.
  useEffect(() => {
    const scroller = listRef.current?.closest<HTMLElement>("[data-scroll]") ?? listRef.current;
    if (scroller) scroller.scrollTop = scroller.scrollHeight;
  }, [messages.length, typing]);

  const bubble = compact ? "max-w-[82%] px-3 py-2 text-[13.5px]" : "max-w-[75%] px-4 py-2.5 text-[16px]";
  const remaining = chat.map((c, i) => ({ ...c, i })).filter((c) => !asked.has(c.i));

  return (
    <div className="flex h-full flex-col">
      <div ref={listRef} data-scroll={compact ? undefined : ""} className={`flex flex-col gap-1.5 ${compact ? "" : "max-h-[440px] min-h-[260px] overflow-y-auto pr-1"}`} aria-live="polite">
        {messages.map((m) => (
          <motion.p
            key={m.id}
            initial={reduce ? false : { opacity: 0, y: 8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 26 }}
            className={`${bubble} rounded-[20px] leading-snug ${
              m.from === "me" ? "self-end rounded-br-md bg-accent text-accent-ink" : "self-start rounded-bl-md bg-surface-2 text-ink"
            }`}
          >
            {m.text}
          </motion.p>
        ))}
        {typing && (
          <p className={`${bubble} inline-flex gap-1 self-start rounded-[20px] rounded-bl-md bg-surface-2`} aria-label="Ahmed is typing">
            {[0, 1, 2].map((d) => (
              <span key={d} className="h-2 w-2 animate-pulse rounded-full bg-muted" style={{ animationDelay: `${d * 150}ms` }} />
            ))}
          </p>
        )}
      </div>

      {remaining.length > 0 ? (
        <div className={`mt-3 flex flex-wrap gap-1.5 border-t border-line pt-3 ${compact ? "" : "gap-2"}`}>
          {remaining.map((c) => (
            <button
              key={c.i}
              type="button"
              disabled={typing}
              onClick={() => ask(c.i)}
              className={`rounded-full border-[1.5px] border-accent-text font-medium text-accent-text transition active:scale-95 disabled:opacity-40 ${
                compact ? "px-3 py-1.5 text-[12.5px]" : "px-4 py-2 text-[15px] hover:bg-accent hover:text-accent-ink hover:border-accent"
              }`}
            >
              {c.q}
            </button>
          ))}
        </div>
      ) : (
        <p className="mt-3 border-t border-line pt-3 text-[13px] text-muted">That&apos;s everything. Email me any time.</p>
      )}
    </div>
  );
}
