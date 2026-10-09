"use client";

import { motion, useReducedMotion } from "motion/react";

type Tag = "div" | "li" | "article";

/** Fades content up once as it enters the viewport. Static under reduced motion. */
export function Reveal({
  children,
  delay = 0,
  className,
  style,
  as = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
  as?: Tag;
}) {
  const reduce = useReducedMotion();
  const Component = motion[as];
  return (
    <Component
      className={className}
      style={style}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Component>
  );
}
