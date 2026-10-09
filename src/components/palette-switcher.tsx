"use client";

import { useEffect, useState } from "react";
import { PaletteIcon } from "@phosphor-icons/react";
import { DEFAULT_PALETTE, PALETTE_STORAGE_KEY, palettes, type PaletteId } from "@/lib/palettes";

/** TEMPORARY: lets Ahmed compare color themes live. Remove once a palette is chosen. */
export function PaletteSwitcher() {
  const [current, setCurrent] = useState<PaletteId>(DEFAULT_PALETTE);

  useEffect(() => {
    const fromDom = document.documentElement.dataset.palette as PaletteId | undefined;
    if (fromDom && palettes.some((p) => p.id === fromDom)) setCurrent(fromDom);
  }, []);

  const choose = (id: PaletteId) => {
    setCurrent(id);
    document.documentElement.dataset.palette = id;
    try {
      localStorage.setItem(PALETTE_STORAGE_KEY, id);
    } catch {
      // Storage can be blocked (private mode). The theme still applies for this visit.
    }
  };

  const active = palettes.find((p) => p.id === current);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-full border border-line bg-surface/90 py-2 pl-3 pr-2 shadow-[var(--shadow)] backdrop-blur">
      <PaletteIcon size={18} className="text-muted" aria-hidden />
      <span className="hidden text-xs font-medium sm:inline">{active?.name}</span>
      <div className="flex gap-1.5" role="radiogroup" aria-label="Color theme">
        {palettes.map((p) => (
          <button
            key={p.id}
            type="button"
            role="radio"
            aria-checked={p.id === current}
            aria-label={p.name}
            title={p.name}
            onClick={() => choose(p.id)}
            className={`h-7 w-7 rounded-full ring-offset-2 ring-offset-surface transition ${p.id === current ? "ring-2 ring-ink" : "hover:scale-110"}`}
            style={{ background: p.swatch }}
          />
        ))}
      </div>
    </div>
  );
}
