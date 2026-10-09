"use client";

import { CheckIcon, ContactlessPaymentIcon } from "@phosphor-icons/react";
import { jobGradients } from "@/components/os/visuals";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { jobs } from "@/data/profile";

export function Wallet() {
  return (
    <Section id="wallet" title="Experience" sub="Every card in my wallet. The newest one is on top.">
      <ol className="grid gap-5">
        {jobs.map((j, i) => (
          <Reveal
            as="li"
            key={j.id}
            delay={i * 0.05}
            className="relative overflow-hidden rounded-3xl p-7 text-white shadow-[0_24px_50px_-28px_rgb(0_0_0/0.7)] md:p-9"
            style={{ background: jobGradients[i % jobGradients.length] }}
          >
            <ContactlessPaymentIcon aria-hidden size={140} className="pointer-events-none absolute -right-6 -top-6 opacity-10" />
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h3 className="text-2xl font-bold tracking-tight md:text-3xl">{j.company}</h3>
              <p className="font-mono text-sm opacity-85">{j.period}</p>
            </div>
            <p className="mt-1 text-white/85">
              {j.role}, {j.where}
            </p>
            <ul className="mt-6 grid gap-x-8 gap-y-2.5 md:grid-cols-2">
              {j.wins.map((w) => (
                <li key={w} className="flex gap-2.5 text-[15px] leading-snug">
                  <CheckIcon size={18} weight="bold" className="mt-0.5 shrink-0 opacity-80" />
                  {w}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
