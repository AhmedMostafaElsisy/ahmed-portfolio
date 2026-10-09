"use client";

import { useState } from "react";
import { ArrowRightIcon, CaretDownIcon, FirstAidIcon } from "@phosphor-icons/react";
import { useOs } from "@/components/os/os-context";
import { projectTiles } from "@/components/os/visuals";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { moreApps, mudawy, projects, type Project } from "@/data/profile";

export function Store() {
  const { openSection } = useOs();
  return (
    <Section id="store" title="Projects" sub="Apps I've shipped, laid out like the App Store. Tap one for the full story.">
      <Reveal>
        <button
          type="button"
          onClick={() => openSection("mudawy")}
          className="group relative mb-6 grid w-full overflow-hidden rounded-3xl bg-[#0f6e55] p-8 text-left text-white md:grid-cols-[1fr_auto] md:items-end md:p-10"
        >
          <span>
            <span className="text-sm font-semibold text-white/75">Editors&apos; choice, built by the developer</span>
            <span className="mt-2 block text-4xl font-extrabold tracking-tight md:text-5xl">Mudawy</span>
            <span className="mt-2 block max-w-[46ch] text-lg text-white/85">{mudawy.oneLiner}</span>
          </span>
          <span className="mt-6 inline-flex items-center gap-2 font-semibold md:mt-0">
            See the full product
            <ArrowRightIcon size={18} weight="bold" className="transition-transform group-hover:translate-x-1" />
          </span>
          <FirstAidIcon aria-hidden size={220} weight="fill" className="pointer-events-none absolute -right-10 -top-10 opacity-10" />
        </button>
      </Reveal>

      <ul className="grid gap-4 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal as="li" key={p.id} delay={(i % 2) * 0.06}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </ul>

      <p className="mt-6 text-muted">
        Also shipped: <span className="text-ink">{moreApps.join(", ")}</span>.
      </p>
    </Section>
  );
}

function ProjectCard({ project: p }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const tile = projectTiles[p.id];
  const Icon = tile.icon;
  return (
    <article className="h-full rounded-3xl bg-surface p-6 shadow-[var(--shadow)]">
      <div className="grid grid-cols-[64px_1fr_auto] items-center gap-4">
        <span className="grid h-16 w-16 place-items-center rounded-2xl text-white" style={{ background: tile.bg }}>
          <Icon size={32} weight="fill" />
        </span>
        <span className="min-w-0">
          <h3 className="truncate text-xl font-bold tracking-tight">{p.name}</h3>
          <span className="text-sm text-muted">{p.tag}</span>
        </span>
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls={`${p.id}-details`}
          className="inline-flex items-center gap-1 rounded-full bg-surface-2 px-4 py-2 text-sm font-bold text-accent-text transition active:scale-95"
        >
          {open ? "CLOSE" : "VIEW"}
          <CaretDownIcon size={14} weight="bold" className={`transition-transform ${open ? "rotate-180" : ""}`} />
        </button>
      </div>
      <p className="mt-4 leading-relaxed">{p.oneLiner}</p>
      <div id={`${p.id}-details`} hidden={!open} className="mt-4 grid gap-3 border-t border-line pt-4 text-[15px]">
        <p><b>The problem.</b> <span className="text-muted">{p.problem}</span></p>
        <p><b>What I did.</b> <span className="text-muted">{p.fix}</span></p>
      </div>
      <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tech stack">
        {p.stack.map((s) => (
          <li key={s} className="rounded-full bg-surface-2 px-3 py-1 font-mono text-xs">{s}</li>
        ))}
      </ul>
    </article>
  );
}
