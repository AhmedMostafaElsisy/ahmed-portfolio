"use client";

import { CheckCircleIcon, GlobeHemisphereEastIcon, MedalIcon, RocketIcon, TrophyIcon } from "@phosphor-icons/react";
import type { SectionId } from "@/data/apps";
import { about, achievements, jobs, mudawy, profile, projects, skillGroups } from "@/data/profile";
import { ChatThread } from "./chat-thread";
import { jobGradients, projectTiles } from "./visuals";

// Compact, glanceable versions of each app. The full readable content lives in the page sections.
export function PhoneScreen({ id }: { id: SectionId }) {
  switch (id) {
    case "notes":
      return <NotesMini />;
    case "wallet":
      return <WalletMini />;
    case "store":
      return <StoreMini />;
    case "mudawy":
      return <MudawyMini />;
    case "settings":
      return <SettingsMini />;
    case "trophies":
      return <TrophiesMini />;
    case "messages":
      return <ChatThread compact />;
  }
}

function NotesMini() {
  return (
    <div className="grid gap-3 text-[14px] leading-relaxed">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={profile.avatar} alt="Ahmed Mostafa" className="aspect-[4/3] w-full rounded-2xl object-cover" />
      <p>{about[0]}</p>
    </div>
  );
}

function WalletMini() {
  return (
    <div className="grid">
      {jobs.map((j, i) => (
        <div
          key={j.id}
          className="relative h-[120px] rounded-2xl p-3.5 text-white shadow-[0_-8px_20px_-10px_rgb(0_0_0/0.45)]"
          style={{ background: jobGradients[i % jobGradients.length], marginTop: i === 0 ? 0 : -62, zIndex: i }}
        >
          <div className="flex justify-between text-[15px] font-bold">
            {j.company}
            <span className="font-mono text-[10.5px] font-normal opacity-85">{j.period}</span>
          </div>
          <p className="text-[12px] opacity-90">{j.role}</p>
        </div>
      ))}
    </div>
  );
}

function StoreMini() {
  return (
    <ul className="divide-y divide-line">
      {projects.map((p) => {
        const t = projectTiles[p.id];
        const Icon = t.icon;
        return (
          <li key={p.id} className="grid grid-cols-[44px_1fr_auto] items-center gap-3 py-2.5">
            <span className="grid h-11 w-11 place-items-center rounded-xl text-white" style={{ background: t.bg }}>
              <Icon size={22} weight="fill" />
            </span>
            <span className="min-w-0">
              <b className="block truncate text-[14px]">{p.name}</b>
              <span className="text-[12px] text-muted">{p.tag}</span>
            </span>
            <span className="rounded-full bg-surface-2 px-3 py-1 text-[12px] font-bold text-accent-text">VIEW</span>
          </li>
        );
      })}
    </ul>
  );
}

function MudawyMini() {
  return (
    <div className="grid gap-2">
      <div className="rounded-2xl bg-[#0f6e55] p-4 text-white">
        <p className="text-[24px] font-extrabold leading-tight">{mudawy.arabic}</p>
        <p className="text-[12px] opacity-90">{mudawy.oneLiner}</p>
      </div>
      {mudawy.pieces.map((p) => (
        <div key={p.title} className="rounded-xl bg-surface-2 px-3 py-2.5 text-[13px]">
          <b>{p.title}</b>
          <span className="block text-[11.5px] text-muted">{p.stack}</span>
        </div>
      ))}
    </div>
  );
}

function SettingsMini() {
  return (
    <div className="grid gap-3">
      {skillGroups.slice(0, 3).map((g) => (
        <div key={g.title} className="overflow-hidden rounded-xl bg-surface-2">
          <p className="px-3 pb-1 pt-2 font-mono text-[10.5px] text-muted">{g.title.toUpperCase()}</p>
          {g.items.slice(0, 3).map((s) => (
            <div key={s} className="flex items-center justify-between border-t border-line px-3 py-2 text-[13px]">
              {s}
              <span className="relative h-[22px] w-[38px] rounded-full bg-[#34c759]">
                <span className="absolute right-0.5 top-0.5 h-[18px] w-[18px] rounded-full bg-white" />
              </span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

const trophyIcons = [GlobeHemisphereEastIcon, TrophyIcon, MedalIcon, RocketIcon];

function TrophiesMini() {
  return (
    <ul className="grid gap-2">
      {achievements.map((a, i) => {
        const Icon = trophyIcons[i] ?? CheckCircleIcon;
        return (
          <li key={a.title} className="grid grid-cols-[34px_1fr] items-center gap-2.5 rounded-xl bg-surface-2 p-3 text-[13px]">
            <Icon size={26} weight="fill" className="text-accent-text" />
            <span><b className="block">{a.title}</b><span className="text-muted">{a.by}</span></span>
          </li>
        );
      })}
    </ul>
  );
}
