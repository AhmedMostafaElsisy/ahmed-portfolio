"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { BatteryHighIcon, CaretLeftIcon, CellSignalFullIcon, CodeIcon, LockSimpleOpenIcon } from "@phosphor-icons/react";
import { dockApps, gridApps, screenTitles, type SectionId } from "@/data/apps";
import { profile } from "@/data/profile";
import { AppIcon } from "./app-icon";
import { LockNotifications } from "./lock-notifications";
import { useOs } from "./os-context";
import { PhoneScreen } from "./phone-screens";

const SPRING = { type: "spring", stiffness: 260, damping: 28 } as const;

function useClock() {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    setNow(new Date());
    const t = setInterval(() => setNow(new Date()), 15_000);
    return () => clearInterval(t);
  }, []);
  return now;
}

function useCodingTimer() {
  const [secs, setSecs] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setSecs((s) => s + 1), 1000);
    return () => clearInterval(t);
  }, []);
  return `${String(Math.floor(secs / 60)).padStart(2, "0")}:${String(secs % 60).padStart(2, "0")}`;
}

export function Phone() {
  const { screen, unlock, goHome, showToast } = useOs();
  const reduce = useReducedMotion();
  const now = useClock();
  const timer = useCodingTimer();
  const time = now ? now.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }) : "09:41";
  const date = now ? now.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" }) : "";
  const inApp = screen !== "lock" && screen !== "home";

  return (
    <div
      className="relative aspect-[390/844] h-[min(780px,calc(100dvh-48px))] max-lg:h-[min(680px,84dvh)] rounded-[56px] bg-[#1b1b1d] p-[11px] shadow-[0_0_0_2px_#3a3a3e,0_50px_90px_-30px_rgb(0_0_0/0.55)]"
      aria-label="AhmedOS phone"
    >
      <div className="wallpaper relative h-full w-full overflow-hidden rounded-[45px] [container-type:size]">
        {/* Status bar */}
        <div className={`pointer-events-none absolute inset-x-0 top-0 z-30 flex h-[52px] items-center justify-between pl-7 pr-6 text-[14px] font-semibold transition-colors ${inApp ? "text-ink" : "text-white"}`}>
          <span suppressHydrationWarning>{time}</span>
          <span className="flex items-center gap-1.5">
            <CellSignalFullIcon size={16} weight="bold" />
            <BatteryHighIcon size={20} weight="fill" />
          </span>
        </div>

        {/* Dynamic island: live coding activity */}
        <button
          type="button"
          onClick={() => showToast("Live activity: still coding. Probably refactoring something.")}
          className="absolute left-1/2 top-[10px] z-40 flex h-[32px] min-w-[132px] -translate-x-1/2 items-center justify-between gap-2 rounded-full bg-black px-3 text-[11px] text-white"
          aria-label="Live activity: Ahmed is coding"
        >
          <span className="flex items-center gap-1"><CodeIcon size={14} weight="fill" className="text-accent" />Coding</span>
          <span className="font-mono text-accent" suppressHydrationWarning>{timer}</span>
        </button>

        <AnimatePresence initial={false} mode="popLayout">
          {screen === "lock" && (
            <motion.div
              key="lock"
              className="absolute inset-0 z-10 flex flex-col items-center px-3.5 pb-7 pt-[64px] text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { y: "-100%", opacity: 0, transition: { duration: 0.5, ease: [0.7, 0, 0.2, 1] } }}
            >
              <p className="mt-2 text-[15px] font-semibold opacity-90" suppressHydrationWarning>{date}</p>
              <p className="text-[clamp(56px,22cqw,88px)] font-bold leading-none tracking-tight" suppressHydrationWarning>{time}</p>
              <LockNotifications />
              <button type="button" onClick={unlock} className="glass mt-4 inline-flex items-center gap-2 rounded-full px-6 py-3 text-[14px] font-semibold active:scale-95">
                <LockSimpleOpenIcon size={18} weight="bold" />
                Unlock
              </button>
            </motion.div>
          )}

          {screen === "home" && (
            <motion.div
              key="home"
              className="absolute inset-0 z-10 flex flex-col px-5 pb-6 pt-[64px]"
              initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1, transition: SPRING }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.94 }}
            >
              <div className="glass grid grid-cols-[auto_1fr] items-center gap-3 rounded-3xl p-3.5 text-white">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={profile.avatar} alt="" width={56} height={56} className="h-14 w-14 rounded-full border-2 border-white/50 object-cover" />
                <div>
                  <p className="text-[15px] font-semibold">{profile.name}</p>
                  <p className="text-[12px] opacity-85">Senior Flutter Developer. Founder of Mudawy.</p>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-4 gap-x-3 gap-y-5">
                {gridApps.map((a) => <AppIcon key={a.id} app={a} />)}
              </div>
              <div className="glass mt-auto grid grid-cols-4 gap-3 rounded-[28px] p-3">
                {dockApps.map((a) => <AppIcon key={a.id} app={a} showLabel={false} />)}
              </div>
            </motion.div>
          )}

          {inApp && (
            <motion.section
              key={screen}
              className="absolute inset-0 z-20 flex flex-col bg-surface text-ink"
              initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.86, borderRadius: 40 }}
              animate={{ opacity: 1, scale: 1, borderRadius: 0, transition: SPRING }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.92 }}
              aria-label={screenTitles[screen as SectionId]}
            >
              <div className="flex items-center px-4 pb-1 pt-[56px]">
                <button type="button" onClick={goHome} className="inline-flex items-center gap-0.5 py-1 text-[15px] text-accent-text">
                  <CaretLeftIcon size={18} weight="bold" />Home
                </button>
              </div>
              <h3 className="px-4 pb-2 text-[28px] font-extrabold tracking-tight">{screenTitles[screen as SectionId]}</h3>
              <div data-scroll className="flex-1 overflow-y-auto px-4 pb-10 [scrollbar-width:none]">
                <PhoneScreen id={screen as SectionId} />
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        <button
          type="button"
          onClick={goHome}
          aria-label="Go to home screen"
          className={`absolute bottom-2 left-1/2 z-40 h-[5px] w-[36%] -translate-x-1/2 rounded-full ${inApp ? "bg-ink" : "bg-white/85"}`}
        />
      </div>
    </div>
  );
}
