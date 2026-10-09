import { IslandToast } from "@/components/os/island-toast";
import { OsProvider } from "@/components/os/os-context";
import { Phone } from "@/components/os/phone";
import { SectionSync } from "@/components/os/section-sync";
import { Hero } from "@/components/sections/hero";
import { Messages } from "@/components/sections/messages";
import { Mudawy } from "@/components/sections/mudawy";
import { Notes } from "@/components/sections/notes";
import { Settings } from "@/components/sections/settings";
import { Store } from "@/components/sections/store";
import { Trophies } from "@/components/sections/trophies";
import { Wallet } from "@/components/sections/wallet";

export default function Home() {
  return (
    <OsProvider>
      <SectionSync />
      <IslandToast />

      {/* Desktop: phone pinned on the left spanning both rows, content on the right.
          Mobile: hero, then the phone, then the sections, in normal flow. */}
      <div className="mx-auto flex max-w-[1400px] flex-col px-4 sm:px-8 lg:grid lg:grid-cols-[auto_minmax(0,1fr)] lg:grid-rows-[auto_1fr] lg:gap-x-16 xl:gap-x-24">
        <div className="order-1 lg:col-start-2 lg:row-start-1">
          <Hero />
        </div>

        <aside className="order-2 flex justify-center py-6 lg:sticky lg:top-0 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:h-dvh lg:items-center lg:py-6">
          <Phone />
        </aside>

        <main className="order-3 lg:col-start-2 lg:row-start-2">
          <Notes />
          <Wallet />
          <Store />
          <Mudawy />
          <Settings />
          <Trophies />
          <Messages />
          <footer className="flex flex-wrap justify-between gap-4 border-t border-line py-10 text-sm text-muted">
            <span>Built with Next.js. No tokens were stored in plain text.</span>
            <span>&copy; {new Date().getFullYear()} Ahmed Mostafa</span>
          </footer>
        </main>
      </div>
    </OsProvider>
  );
}
