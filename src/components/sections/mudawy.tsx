"use client";

import { ArrowUpRightIcon, BrowserIcon, CloudIcon, DesktopIcon, ShieldStarIcon, WifiSlashIcon, type Icon } from "@phosphor-icons/react";
import { buttonBase } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { mudawy, profile } from "@/data/profile";

const pieceIcons: readonly Icon[] = [DesktopIcon, CloudIcon, ShieldStarIcon, BrowserIcon];

export function Mudawy() {
  return (
    <Section id="mudawy" title="Mudawy" sub="My own product. I designed and built every piece of it.">
      <div className="grid gap-4 md:grid-cols-6">
        <Reveal className="relative overflow-hidden rounded-3xl bg-[#0f6e55] p-8 text-white md:col-span-6 md:p-10">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p lang="ar" dir="rtl" className="text-left text-6xl font-extrabold leading-tight md:text-7xl">{mudawy.arabic}</p>
              <p className="mt-3 max-w-[44ch] text-xl text-white/90">{mudawy.oneLiner}</p>
            </div>
            <a href={profile.links.mudawy} target="_blank" rel="noopener noreferrer" className={`${buttonBase} bg-white text-[#0b3d30] hover:-translate-y-0.5`}>
              Visit mudawy.com
              <ArrowUpRightIcon size={18} weight="bold" />
            </a>
          </div>
          <WifiSlashIcon aria-hidden size={260} className="pointer-events-none absolute -bottom-16 -right-10 opacity-10" />
        </Reveal>

        {mudawy.pieces.map((p, i) => {
          const Icon = pieceIcons[i];
          // Asymmetric rhythm: 4+2, then 2+4.
          const span = i === 0 || i === 3 ? "md:col-span-4" : "md:col-span-2";
          return (
            <Reveal key={p.title} delay={i * 0.05} className={`rounded-3xl bg-surface p-7 shadow-[var(--shadow)] ${span}`}>
              <Icon size={30} className="text-accent-text" />
              <h3 className="mt-4 text-xl font-bold tracking-tight">{p.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{p.body}</p>
              <p className="mt-4 font-mono text-xs">{p.stack}</p>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
