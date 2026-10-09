import {
  CameraIcon,
  ChatCircleDotsIcon,
  CompassIcon,
  EnvelopeSimpleIcon,
  FirstAidIcon,
  GearSixIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
  NotePencilIcon,
  StorefrontIcon,
  TrophyIcon,
  WalletIcon,
  type Icon,
} from "@phosphor-icons/react";
import { profile } from "./profile";

// "home" and "lock" are phone states, every other id maps to a page section.
export type ScreenId = "lock" | "home" | "notes" | "wallet" | "store" | "mudawy" | "settings" | "trophies" | "messages";
export type SectionId = Exclude<ScreenId, "lock" | "home">;

export type AppDef = {
  id: string;
  name: string;
  icon: Icon;
  // Tile colors are diegetic (real phones have colorful icons), kept to a small fixed set.
  tile: string;
  dark?: boolean;
  section?: SectionId;
  href?: string;
  badge?: number;
};

export const gridApps: readonly AppDef[] = [
  { id: "notes", name: "Notes", icon: NotePencilIcon, tile: "linear-gradient(160deg,#fff4c2,#ffd54f)", dark: true, section: "notes" },
  { id: "wallet", name: "Wallet", icon: WalletIcon, tile: "linear-gradient(160deg,#2d2d31,#0b0b0c)", section: "wallet" },
  { id: "store", name: "App Store", icon: StorefrontIcon, tile: "linear-gradient(160deg,#5aa9ff,#1d5fe0)", section: "store" },
  { id: "mudawy", name: "Mudawy", icon: FirstAidIcon, tile: "linear-gradient(160deg,#3ccf98,#11805c)", section: "mudawy" },
  { id: "settings", name: "Settings", icon: GearSixIcon, tile: "linear-gradient(160deg,#a1a1a8,#5d5d64)", section: "settings" },
  { id: "trophies", name: "Trophies", icon: TrophyIcon, tile: "linear-gradient(160deg,#ffd966,#e9a400)", dark: true, section: "trophies", badge: 4 },
  { id: "camera", name: "Camera", icon: CameraIcon, tile: "linear-gradient(160deg,#4a4a52,#1c1c1f)", section: "notes" },
  { id: "github", name: "GitHub", icon: GithubLogoIcon, tile: "linear-gradient(160deg,#2d2d31,#0b0b0c)", href: profile.links.github },
];

export const dockApps: readonly AppDef[] = [
  { id: "messages", name: "Messages", icon: ChatCircleDotsIcon, tile: "linear-gradient(160deg,#6ef08f,#20b049)", section: "messages", badge: 1 },
  { id: "mail", name: "Mail", icon: EnvelopeSimpleIcon, tile: "linear-gradient(160deg,#6cc8ff,#0a7cff)", href: profile.links.email },
  { id: "linkedin", name: "LinkedIn", icon: LinkedinLogoIcon, tile: "linear-gradient(160deg,#3593e0,#0a66c2)", href: profile.links.linkedin },
  { id: "safari", name: "Safari", icon: CompassIcon, tile: "linear-gradient(160deg,#ffffff,#d5e5ff)", dark: true, href: profile.links.mudawy },
];

export const screenTitles: Record<SectionId, string> = {
  notes: "Notes",
  wallet: "Wallet",
  store: "App Store",
  mudawy: "Mudawy",
  settings: "Settings",
  trophies: "Trophies",
  messages: "Messages",
};
