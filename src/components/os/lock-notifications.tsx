"use client";

import { motion, useReducedMotion } from "motion/react";
import { FirstAidIcon, HeartIcon, RocketLaunchIcon, ShieldCheckIcon, type Icon } from "@phosphor-icons/react";

type Notif = { icon: Icon; bg: string; app: string; text: string; time: string };

const notifs: readonly Notif[] = [
  { icon: ShieldCheckIcon, bg: "#0a84ff", app: "Iden2", text: "Test coverage hit 80%. Regressions down 60%.", time: "now" },
  { icon: FirstAidIcon, bg: "#22a06b", app: "Mudawy", text: "A clinic lost internet. Nobody noticed.", time: "2m" },
  { icon: RocketLaunchIcon, bg: "#1c1c1e", app: "GitHub Actions", text: "Shipped to both stores. You did nothing.", time: "1h" },
  { icon: HeartIcon, bg: "#ff375f", app: "Mom", text: "Did you eat?", time: "3h" },
];

export function LockNotifications() {
  const reduce = useReducedMotion();
  return (
    <ul className="mt-auto grid w-full gap-2">
      {notifs.map((n, i) => {
        const Icon = n.icon;
        return (
          <motion.li
            key={n.app}
            className="glass grid grid-cols-[36px_1fr_auto] items-start gap-2.5 rounded-[20px] px-3.5 py-3 text-[13px] leading-snug"
            initial={reduce ? false : { opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.3 + i * 0.3, type: "spring", stiffness: 220, damping: 24 }}
          >
            <span className="grid h-9 w-9 place-items-center rounded-[9px] text-white" style={{ background: n.bg }}>
              <Icon size={20} weight="fill" />
            </span>
            <span>
              <b className="block text-[13px]">{n.app}</b>
              {n.text}
            </span>
            <time className="text-[11px] opacity-70">{n.time}</time>
          </motion.li>
        );
      })}
    </ul>
  );
}
