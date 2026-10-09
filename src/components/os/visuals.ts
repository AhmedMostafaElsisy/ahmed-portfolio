import {
  BarbellIcon,
  ChartLineUpIcon,
  GraduationCapIcon,
  HouseLineIcon,
  IdentificationCardIcon,
  WrenchIcon,
  type Icon,
} from "@phosphor-icons/react";

// Wallet card and app-icon colors. These are "physical objects" inside the OS metaphor,
// so they stay fixed across palettes, like real cards and app icons would.
export const jobGradients = [
  "linear-gradient(140deg,#0a84ff,#0040a8)",
  "linear-gradient(140deg,#22a06b,#0d5c40)",
  "linear-gradient(140deg,#ff7a3d,#b23a06)",
  "linear-gradient(140deg,#5e5ce6,#2c2a8f)",
  "linear-gradient(140deg,#3a3a3c,#111113)",
] as const;

export const projectTiles: Record<string, { bg: string; icon: Icon }> = {
  iden2: { bg: "#0a84ff", icon: IdentificationCardIcon },
  kwealth: { bg: "#1c1c1e", icon: ChartLineUpIcon },
  nuwas: { bg: "#5e5ce6", icon: WrenchIcon },
  kera: { bg: "#ff7a3d", icon: HouseLineIcon },
  himma: { bg: "#ff375f", icon: BarbellIcon },
  eowl: { bg: "#e8a000", icon: GraduationCapIcon },
};
