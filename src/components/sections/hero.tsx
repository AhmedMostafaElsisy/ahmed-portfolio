"use client";

import { motion, useReducedMotion } from "motion/react";
import { ChatCircleDotsIcon, LockSimpleOpenIcon } from "@phosphor-icons/react";
import { useOs } from "@/components/os/os-context";
import { buttonGhost, buttonPrimary } from "@/components/ui/button";
import { releaseNotes } from "@/data/profile";

export function Hero() {
  const { openSection } = useOs();
  const reduce = useReducedMotion();
  const enter = (delay: number) =>
    reduce ? {} : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const } };

  return (
    <section data-screen="home" className="flex min-h-[100dvh] flex-col justify-center pb-10 pt-16 max-lg:min-h-0 max-lg:pt-14" aria-labelledby="hero-title">
      <motion.h1 id="hero-title" className="text-6xl font-extrabold leading-[0.95] tracking-tighter md:text-7xl xl:text-8xl" {...enter(0)}>
        AhmedOS<span className="text-accent-text">.</span>
      </motion.h1>
      <motion.p className="mt-6 max-w-[38ch] text-xl leading-relaxed text-muted" {...enter(0.1)}>
        I&apos;m Ahmed, a senior Flutter developer and founder of Mudawy. This portfolio is a phone. Tap it, or just scroll.
      </motion.p>
      <motion.div className="mt-9 flex flex-wrap gap-3" {...enter(0.2)}>
        <button type="button" className={buttonPrimary} onClick={() => openSection("notes")}>
          <LockSimpleOpenIcon size={20} weight="bold" />
          Unlock
        </button>
        <button type="button" className={buttonGhost} onClick={() => openSection("messages")}>
          <ChatCircleDotsIcon size={20} />
          Message me
        </button>
      </motion.div>

      <motion.div className="mt-16 max-w-xl border-t border-line pt-6" {...enter(0.35)}>
        <h2 className="font-mono text-xs font-semibold text-muted">WHAT&apos;S NEW IN AHMEDOS 4.0</h2>
        <ul className="mt-4 grid gap-3">
          {releaseNotes.map((n) => (
            <li key={n.kind} className="grid grid-cols-[100px_1fr] gap-3 text-[15px]">
              <span className="pt-0.5 font-mono text-xs font-semibold uppercase text-accent-text">{n.kind}</span>
              <span>{n.text}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
