"use client";

import type { AppDef } from "@/data/apps";
import { useOs } from "./os-context";

export function AppIcon({ app, showLabel = true }: { app: AppDef; showLabel?: boolean }) {
  const { openSection } = useOs();
  const Icon = app.icon;
  const tile = (
    <span
      className="relative grid aspect-square w-full max-w-[60px] place-items-center rounded-[22%] shadow-[inset_0_1px_0_rgb(255_255_255/0.25),0_6px_14px_-6px_rgb(0_0_0/0.5)] transition-transform group-active:scale-90"
      style={{ background: app.tile, color: app.dark ? "#1c1c1e" : "#fff" }}
    >
      <Icon size={28} weight="fill" />
      {app.badge ? (
        <span className="absolute -right-1.5 -top-1.5 grid h-5 min-w-5 place-items-center rounded-full bg-[#ff3b30] px-1 text-[11px] font-semibold text-white">
          {app.badge}
        </span>
      ) : null}
    </span>
  );
  const label = showLabel ? <span className="text-[11px] font-medium text-white drop-shadow">{app.name}</span> : null;
  const className = "group grid justify-items-center gap-1.5 outline-offset-4";

  if (app.href) {
    const external = !app.href.startsWith("mailto:");
    return (
      <a href={app.href} className={className} aria-label={app.name} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {tile}
        {label}
      </a>
    );
  }
  return (
    <button type="button" className={className} aria-label={`Open ${app.name}`} onClick={() => app.section && openSection(app.section)}>
      {tile}
      {label}
    </button>
  );
}
