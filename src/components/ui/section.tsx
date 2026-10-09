"use client";

import { gridApps, dockApps, type SectionId } from "@/data/apps";
import { Reveal } from "./reveal";

const allApps = [...gridApps, ...dockApps];

/**
 * A page section that the phone mirrors. The app tile next to the title ties the
 * readable section back to the icon on the phone.
 */
export function Section({
  id,
  title,
  sub,
  children,
}: {
  id: SectionId;
  title: string;
  sub: string;
  children: React.ReactNode;
}) {
  const app = allApps.find((a) => a.section === id && a.id === id) ?? allApps.find((a) => a.section === id);
  const Icon = app?.icon;
  return (
    <section id={id} data-screen={id} className="scroll-mt-6 py-20 lg:py-28" aria-labelledby={`${id}-title`}>
      <Reveal>
        <div className="mb-10 flex items-center gap-4">
          {Icon && app ? (
            <span
              aria-hidden
              className="grid h-14 w-14 shrink-0 place-items-center rounded-[22%] shadow-[0_10px_24px_-12px_rgb(0_0_0/0.5)]"
              style={{ background: app.tile, color: app.dark ? "#1c1c1e" : "#fff" }}
            >
              <Icon size={30} weight="fill" />
            </span>
          ) : null}
          <div>
            <h2 id={`${id}-title`} className="text-4xl font-extrabold tracking-tighter md:text-5xl">
              {title}
            </h2>
            <p className="mt-1 max-w-[60ch] text-lg text-muted">{sub}</p>
          </div>
        </div>
      </Reveal>
      {children}
    </section>
  );
}
