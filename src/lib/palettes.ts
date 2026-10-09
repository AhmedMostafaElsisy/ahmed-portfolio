// Candidate color themes. The actual values live in globals.css under [data-palette="..."].
// Temporary: once Ahmed picks one, keep it, delete the rest and the switcher.
export const palettes = [
  { id: "lime", name: "Midnight Lime", swatch: "#c6f432" },
  { id: "cobalt", name: "Cobalt", swatch: "#2f54ff" },
  { id: "mint", name: "Graphite Mint", swatch: "#2fd4a7" },
  { id: "rose", name: "Rose", swatch: "#ff3d71" },
  { id: "sunset", name: "Sunset (original)", swatch: "#ff5a1f" },
] as const;

export type PaletteId = (typeof palettes)[number]["id"];

export const DEFAULT_PALETTE: PaletteId = "lime";
export const PALETTE_STORAGE_KEY = "ahmedos-palette";
