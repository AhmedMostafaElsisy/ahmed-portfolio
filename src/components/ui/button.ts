// Radius rule for the whole site: buttons and chips are full pills, cards are rounded-3xl (24px),
// small inner tiles are rounded-2xl (16px).
export const buttonBase =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full px-6 py-3.5 text-[15px] font-semibold transition active:translate-y-px active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export const buttonPrimary = `${buttonBase} bg-accent text-accent-ink hover:-translate-y-0.5 shadow-[0_12px_28px_-14px_var(--accent)]`;
export const buttonGhost = `${buttonBase} text-ink ring-[1.5px] ring-inset ring-line hover:ring-ink`;
