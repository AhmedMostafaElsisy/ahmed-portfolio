"use client";

import { GlobeHemisphereEastIcon, MedalIcon, RocketIcon, TrophyIcon, type Icon } from "@phosphor-icons/react";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { achievements } from "@/data/profile";

const icons: readonly Icon[] = [GlobeHemisphereEastIcon, TrophyIcon, MedalIcon, RocketIcon];

export function Trophies() {
  return (
    <Section id="trophies" title="Achievements" sub="Unlocked in real life. The Google one was for E-Owl, my graduation project.">
      <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {achievements.map((a, i) => {
          const Icon = icons[i];
          const featured = i === 0;
          return (
            <Reveal
              as="li"
              key={a.title}
              delay={i * 0.06}
              className={`flex flex-col justify-between gap-10 rounded-3xl p-6 ${
                featured ? "bg-accent text-accent-ink" : "bg-surface shadow-[var(--shadow)]"
              }`}
            >
              <Icon size={40} weight="fill" className={featured ? "" : "text-accent-text"} />
              <div>
                <p className="text-2xl font-bold tracking-tight">{a.title}</p>
                <p className={`mt-1 text-sm ${featured ? "opacity-80" : "text-muted"}`}>{a.by}</p>
              </div>
            </Reveal>
          );
        })}
      </ul>
    </Section>
  );
}
