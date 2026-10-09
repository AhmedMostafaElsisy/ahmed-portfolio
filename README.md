# AhmedOS

Portfolio of **Ahmed Mostafa**, Senior Flutter Developer and founder of [Mudawy](https://mudawy.com).

The portfolio is a phone. On desktop the phone stays pinned on the left and opens the app for
whatever section you're reading. On mobile it's the hero, followed by normal sections.

## Stack

Next.js 15 (App Router, static) · Tailwind CSS v4 · Motion · Phosphor Icons · deployed on Vercel.

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
npm run lint
```

## Where things live

- `src/data/profile.ts`: all content (experience, projects, skills, chat answers). Edit this to update the site.
- `src/data/apps.ts`: phone apps and which section each one opens.
- `src/components/os/`: the phone, its compact app screens and the shared OS state.
- `src/components/sections/`: the full-size readable sections.
- `src/app/globals.css`: color tokens (Midnight Lime) for light and dark mode.
