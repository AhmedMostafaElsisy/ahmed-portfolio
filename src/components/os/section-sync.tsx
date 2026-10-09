"use client";

import { useEffect } from "react";
import type { ScreenId } from "@/data/apps";
import { useOs } from "./os-context";

/**
 * Watches every element with a data-screen attribute. Whichever one crosses the
 * middle band of the viewport decides what the phone shows.
 */
export function SectionSync() {
  const { syncFromScroll } = useOs();

  useEffect(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-screen]"));
    if (targets.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const hit = entries.find((e) => e.isIntersecting);
        if (hit) syncFromScroll(hit.target.getAttribute("data-screen") as ScreenId);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, [syncFromScroll]);

  return null;
}
