"use client";

import { motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { useOs } from "@/components/os/os-context";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { skillGroups } from "@/data/profile";

const RE_ENABLE_MS = 1200;

const dangerZone = [
  { id: "bugs", label: "Writing bugs", note: "Managed by your organization", refusal: "Blocked by 80% test coverage." },
  { id: "friday", label: "Skip tests on Friday", note: "Never", refusal: "Nice try. The CI pipeline said no." },
] as const;

export function Settings() {
  return (
    <Section id="settings" title="Skills" sub="Everything is switched on. Try switching something off.">
      <div className="columns-1 gap-4 md:columns-2 [&>*]:mb-4 [&>*]:break-inside-avoid">
        {skillGroups.map((g, i) => (
          <Reveal key={g.title} delay={(i % 2) * 0.06}>
            <Group title={g.title}>
              {g.items.map((s) => (
                <SkillRow key={s} label={s} />
              ))}
            </Group>
          </Reveal>
        ))}
        <Reveal>
          <Group title="Danger zone">
            {dangerZone.map((d) => (
              <DangerRow key={d.id} label={d.label} note={d.note} refusal={d.refusal} />
            ))}
          </Group>
        </Reveal>
      </div>
    </Section>
  );
}

function Group({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-3xl bg-surface shadow-[var(--shadow)]">
      <h3 className="px-5 pb-2 pt-4 font-mono text-xs font-semibold uppercase text-muted">{title}</h3>
      <ul className="divide-y divide-line">{children}</ul>
    </div>
  );
}

function SkillRow({ label }: { label: string }) {
  const { showToast } = useOs();
  const [on, setOn] = useState(true);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  useEffect(() => () => clearTimeout(timer.current), []);

  const flip = () => {
    if (!on) return;
    setOn(false);
    showToast(`You can switch off ${label}. Ahmed still knows it.`);
    timer.current = setTimeout(() => setOn(true), RE_ENABLE_MS);
  };
  return (
    <li className="flex items-center justify-between gap-4 px-5 py-3.5 text-[16px]">
      {label}
      <Switch checked={on} label={label} onClick={flip} />
    </li>
  );
}

function DangerRow({ label, note, refusal }: { label: string; note: string; refusal: string }) {
  const { showToast } = useOs();
  const reduce = useReducedMotion();
  const [shakes, setShakes] = useState(0);
  return (
    <li className="flex items-center justify-between gap-4 px-5 py-3.5 text-[16px]">
      <span>
        {label}
        <span className="block text-sm text-muted">{note}</span>
      </span>
      <motion.span key={shakes} animate={reduce || shakes === 0 ? {} : { x: [0, -6, 6, -6, 6, 0] }} transition={{ duration: 0.4 }}>
        <Switch
          checked={false}
          label={label}
          onClick={() => {
            setShakes((n) => n + 1);
            showToast(refusal);
          }}
        />
      </motion.span>
    </li>
  );
}

function Switch({ checked, label, onClick }: { checked: boolean; label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={onClick}
      className={`relative h-[31px] w-[51px] shrink-0 rounded-full transition-colors ${checked ? "bg-[#34c759]" : "bg-line"}`}
    >
      <span
        className={`absolute top-[2px] h-[27px] w-[27px] rounded-full bg-white shadow transition-[left] ${checked ? "left-[22px]" : "left-[2px]"}`}
      />
    </button>
  );
}
