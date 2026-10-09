"use client";

import { AnimatePresence, motion } from "motion/react";
import { InfoIcon } from "@phosphor-icons/react";
import { useOs } from "./os-context";

/** Page-level toast styled like a dynamic island, so it's visible even when the phone isn't. */
export function IslandToast() {
  const { toast } = useOs();
  return (
    <div className="pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center px-4" role="status" aria-live="polite">
      <AnimatePresence>
        {toast && (
          <motion.p
            key={toast}
            initial={{ opacity: 0, y: -20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 380, damping: 28 }}
            className="flex max-w-md items-center gap-2.5 rounded-full bg-[#0b0b0c] px-5 py-3 text-[14px] text-white shadow-[0_20px_40px_-16px_rgb(0_0_0/0.6)]"
          >
            <InfoIcon size={20} weight="fill" className="shrink-0 text-accent" />
            {toast}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
