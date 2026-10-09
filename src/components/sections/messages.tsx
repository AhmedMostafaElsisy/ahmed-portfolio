"use client";

import { EnvelopeSimpleIcon, GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";
import { ChatThread } from "@/components/os/chat-thread";
import { buttonBase } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { profile } from "@/data/profile";

export function Messages() {
  return (
    <Section id="messages" title="Let's talk" sub="Ask me something below, or skip the small talk and send an email.">
      <div className="grid gap-4 xl:grid-cols-[1.5fr_1fr]">
        <Reveal className="rounded-3xl bg-surface p-5 shadow-[var(--shadow)] md:p-7">
          <div className="mb-5 flex items-center gap-3 border-b border-line pb-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={profile.avatar} alt="" width={44} height={44} className="h-11 w-11 rounded-full object-cover" />
            <div>
              <p className="font-semibold">{profile.name}</p>
              <p className="text-sm text-muted">Usually replies instantly. Suspicious.</p>
            </div>
          </div>
          <ChatThread />
        </Reveal>

        <Reveal delay={0.08} className="flex flex-col justify-between gap-8 rounded-3xl bg-accent p-7 text-accent-ink">
          <div>
            <p className="text-3xl font-extrabold tracking-tight">Hiring, or building something?</p>
            <p className="mt-3 opacity-80">Email is the fastest way to reach me.</p>
          </div>
          <div className="grid gap-3">
            <a href={profile.links.email} className={`${buttonBase} bg-accent-ink text-accent hover:-translate-y-0.5`}>
              <EnvelopeSimpleIcon size={20} weight="bold" />
              Email me
            </a>
            <div className="grid grid-cols-2 gap-3">
              <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className={`${buttonBase} px-4 text-accent-ink ring-[1.5px] ring-inset ring-accent-ink/30 hover:ring-accent-ink`}>
                <LinkedinLogoIcon size={20} />
                LinkedIn
              </a>
              <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className={`${buttonBase} px-4 text-accent-ink ring-[1.5px] ring-inset ring-accent-ink/30 hover:ring-accent-ink`}>
                <GithubLogoIcon size={20} />
                GitHub
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
