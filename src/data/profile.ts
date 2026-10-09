// Single source of truth for the site. Facts come from Ahmed's CV and the Mudawy repos.
// Nothing here is invented: no fake metrics, reviews or clients.

export type Job = {
  id: string;
  role: string;
  company: string;
  where: string;
  period: string;
  wins: readonly string[];
};

export type Project = {
  id: string;
  name: string;
  tag: string;
  oneLiner: string;
  problem: string;
  fix: string;
  stack: readonly string[];
  link?: string;
};

export type Achievement = { title: string; by: string };

export type SkillGroup = { title: string; items: readonly string[] };

export const profile = {
  name: "Ahmed Mostafa",
  title: "Senior Flutter Developer",
  location: "Cairo, Egypt",
  years: "4+",
  appsShipped: "15+",
  avatar: "https://avatars.githubusercontent.com/u/33898506?v=4",
  links: {
    email: "mailto:ahmedmostafacc@gmail.com",
    emailText: "ahmedmostafacc@gmail.com",
    linkedin: "https://www.linkedin.com/in/ahmed-mostafa-cc/",
    github: "https://github.com/AhmedMostafaElsisy",
    mudawy: "https://mudawy.com",
  },
} as const;

export const releaseNotes = [
  { kind: "New", text: "Founder mode. Ships Mudawy, a clinic app that works offline." },
  { kind: "Improved", text: "Test coverage, now 80%+ on the identity wallet." },
  { kind: "Fixed", text: "Release-day anxiety. Fastlane does it now." },
  { kind: "Known issue", text: "Will refactor your codebase if left alone with it." },
] as const;

export const about = [
  `I'm Ahmed, a senior Flutter developer from Cairo with ${profile.years} years and ${profile.appsShipped} production apps behind me.`,
  "Right now I'm building a digital identity wallet at Iden2. My job there is keeping sensitive data locked up, tests green and releases boring.",
  "On the side I founded Mudawy, a clinic product for doctors in Egypt, so I also write TypeScript, NestJS and PostgreSQL.",
] as const;

export const jobs: readonly Job[] = [
  {
    id: "iden2",
    role: "Mobile Engineer",
    company: "Iden2",
    where: "Remote",
    period: "Jun 2025 - Now",
    wins: [
      "Took test coverage from 0% to 80%+, cutting regression bugs by more than 60%",
      "Built an encrypted offline-first credential store with FlutterSecureStorage and Android Keystore",
      "Found and fixed critical Android security vulnerabilities",
      "Refactored the whole codebase to Clean Architecture",
      "Built a Remote Config rendering engine, so credential fields change with no release",
      "Automated Android and iOS releases with Fastlane and GitHub Actions",
    ],
  },
  {
    id: "mudawy",
    role: "Founder & Builder",
    company: "Mudawy",
    where: "Side venture",
    period: "2026 - Now",
    wins: [
      "Offline-first Flutter desktop app for clinics, doctor and reception synced over the local network",
      "Multi-tenant SaaS on NestJS and PostgreSQL row-level security, with a React 19 web app",
      "Admin console and a Next.js landing site with a live pricing configurator",
    ],
  },
  {
    id: "nuwas",
    role: "Senior Flutter Developer",
    company: "Nuwas",
    where: "Cairo",
    period: "Oct 2023 - Jun 2025",
    wins: [
      "Shipped Nuwas (AI diagnostics), Kera (real estate) and K-Wealth (stock trading)",
      "Led a team of 4 developers, set coding standards and mentored 2 juniors",
    ],
  },
  {
    id: "queen-mid",
    role: "Mid-level Flutter Developer",
    company: "Queen Tech Solutions",
    where: "Cairo",
    period: "Jan 2023 - Oct 2023",
    wins: ["Built 5+ apps with Firebase, BLoC and Provider", "Reviewed code for 3 junior developers"],
  },
  {
    id: "queen-junior",
    role: "Junior Flutter Developer",
    company: "Queen Tech Solutions",
    where: "Cairo",
    period: "Oct 2021 - Jan 2023",
    wins: ["Shipped 6+ production apps in e-commerce, transportation and service booking"],
  },
];

export const projects: readonly Project[] = [
  {
    id: "iden2",
    name: "Iden2 Wallet",
    tag: "Digital Identity",
    oneLiner: "A secure wallet for your digital identity credentials.",
    problem: "Sensitive credentials, zero tests and manual releases.",
    fix: "Encrypted offline store, Android hardening, 80%+ test coverage and fully automated releases.",
    stack: ["Flutter", "Keystore", "Remote Config", "Fastlane"],
  },
  {
    id: "kwealth",
    name: "K-Wealth",
    tag: "Fintech",
    oneLiner: "Stock market app with live data and trading.",
    problem: "Prices change every second and users expect zero lag.",
    fix: "Real-time feeds, portfolio tracking and live trading.",
    stack: ["Flutter", "BLoC", "Socket.io"],
  },
  {
    id: "nuwas",
    name: "Nuwas",
    tag: "AI / Industrial",
    oneLiner: "Diagnoses machine errors and walks technicians through the repair.",
    problem: "Broken machines, confused technicians, expensive downtime.",
    fix: "ML inference names the fault, then step-by-step repair guides take over.",
    stack: ["Flutter", "ML inference", "Clean Architecture"],
  },
  {
    id: "kera",
    name: "Kera",
    tag: "Real Estate",
    oneLiner: "Rentals, sales and maintenance requests in one app.",
    problem: "Property owners juggling three apps and a notebook.",
    fix: "One platform for the whole property lifecycle.",
    stack: ["Flutter", "BLoC", "REST"],
  },
  {
    id: "himma",
    name: "Himma & Rashatak",
    tag: "Fitness, freelance",
    oneLiner: "Gym apps with separate member and coach worlds.",
    problem: "Coaches and members need very different apps.",
    fix: "A dual-role system on one shared codebase, with scheduling and chat.",
    stack: ["Flutter", "Firebase"],
  },
  {
    id: "eowl",
    name: "E-Owl",
    tag: "EdTech / ML",
    oneLiner: "Reads student faces to measure engagement in real time.",
    problem: "Online teachers can't tell who is actually paying attention.",
    fix: "Facial emotion recognition. Top 10 worldwide at Google Solution Challenge.",
    stack: ["Flutter", "ML", "Firebase"],
  },
];

export const moreApps = ["Shiprex", "Aram", "My Suez", "InNeed", "Omda", "PMC", "Motamayez"] as const;

export const mudawy = {
  name: "Mudawy",
  arabic: "مُداوي",
  oneLiner: "Clinic management for doctors in Egypt. It keeps working when the internet doesn't.",
  pieces: [
    { title: "Desktop app", body: "Offline-first doctor and reception stations on one codebase, synced over the clinic network.", stack: "Flutter, Drift/SQLite, BLoC" },
    { title: "Web SaaS", body: "Multi-tenant monthly-subscription version. Each clinic's data is isolated by row-level security.", stack: "NestJS, PostgreSQL, React 19" },
    { title: "Admin console", body: "One staff console for customers of both products: accounts, pricing, requests, audit log.", stack: "React, Vite, OpenAPI client" },
    { title: "Landing site", body: "Marketing site with an interactive pricing configurator and a leads flow.", stack: "Next.js, Supabase, Vercel" },
  ],
} as const;

export const achievements: readonly Achievement[] = [
  { title: "Top 10 worldwide", by: "Google Solution Challenge" },
  { title: "1st place", by: "Ministry of Higher Education Science Clubs" },
  { title: "Top 15 of 400+ teams", by: "Edu Hackathon" },
  { title: "Phase 2 qualifier", by: "Dell Envision the Future" },
];

export const skillGroups: readonly SkillGroup[] = [
  { title: "Mobile", items: ["Flutter", "Dart", "Kotlin", "Android SDK"] },
  { title: "Architecture", items: ["Clean Architecture", "BLoC", "Provider", "SOLID"] },
  { title: "Security", items: ["FlutterSecureStorage", "Android Keystore", "Encrypted storage"] },
  { title: "Testing & CI/CD", items: ["Unit & widget tests", "lcov, 80%+ coverage", "GitHub Actions", "Fastlane"] },
  { title: "Web & Backend", items: ["TypeScript", "React", "Next.js", "NestJS", "PostgreSQL"] },
];

export const chat = [
  { q: "Who are you?", a: `Ahmed. Senior Flutter developer in Cairo. ${profile.years} years, ${profile.appsShipped} apps, and one clinic product of my own.` },
  { q: "What do you actually do?", a: "I make Flutter apps secure, tested and boring to release. Boring is good." },
  { q: "Can you do backend too?", a: "Yes. Mudawy's API is NestJS and PostgreSQL with row-level security, with typed contracts all the way to the client." },
  { q: "Are you available?", a: "For the right team, yes. Remote works great for me." },
  { q: "How do I reach you?", a: `Email is fastest: ${profile.links.emailText}. LinkedIn works too.` },
] as const;
