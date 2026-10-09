"use client";

import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { about, profile } from "@/data/profile";

const facts = [
  { k: "Based in", v: profile.location },
  { k: "Experience", v: `${profile.years} years` },
  { k: "Apps shipped", v: profile.appsShipped },
  { k: "Side quest", v: "Founder of Mudawy" },
];

export function Notes() {
  return (
    <Section id="notes" title="About me" sub="From the Notes app. Unedited, mostly.">
      <div className="grid gap-6 xl:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <article className="h-full rounded-3xl bg-surface p-8 shadow-[var(--shadow)] md:p-10">
            <p className="font-mono text-xs text-muted">Last edited today</p>
            <div className="mt-5 grid gap-5 text-lg leading-relaxed">
              {about.map((p) => (
                <p key={p}>{p}</p>
              ))}
              <p className="text-muted">Groceries: coffee, more coffee, a new mechanical keyboard (do not tell anyone).</p>
            </div>
          </article>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="grid h-full gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={profile.avatar}
              alt="Ahmed Mostafa"
              className="aspect-[4/3] w-full rotate-[1.5deg] rounded-3xl border-8 border-surface object-cover shadow-[var(--shadow)] xl:aspect-square"
            />
            <dl className="grid grid-cols-2 gap-3">
              {facts.map((f) => (
                <div key={f.k} className="rounded-2xl bg-surface-2 p-4">
                  <dt className="text-xs text-muted">{f.k}</dt>
                  <dd className="mt-1 font-semibold">{f.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
