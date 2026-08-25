import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

export const CTASection = () => (
  <section id="get-started" className="bg-[#f6f4ee] px-6 pb-20 transition-colors duration-300 dark:bg-[#0b1619] lg:px-8 lg:pb-28">
    <Reveal>
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#0b1619] px-7 py-14 text-center sm:px-12 lg:py-20">
        <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-[#009689]/20 blur-[90px]" />
        <div className="pointer-events-none absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-[#d6a84a]/15 blur-[90px]" />

        <p className="relative text-sm font-bold uppercase tracking-[0.2em] text-[#d6a84a]">Start your journey</p>
        <h2 className="font-display relative mx-auto mt-4 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Make room for more good books.
        </h2>
        <p className="relative mx-auto mt-5 max-w-xl text-lg leading-8 text-white/60">
          ReedShelf is being built for readers who want a better way to organize,
          plan, and keep track of their reading.
        </p>
        <a
          href={`${import.meta.env.VITE_WEBAPP_URL || "http://localhost:5174"}/register`}
          className="group relative mt-8 inline-flex items-center gap-2 rounded-full bg-[#009689] px-7 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#d6a84a] hover:text-[#0b1619]"
        >
          Explore ReedShelf <ArrowRight size={18} className="transition group-hover:translate-x-1" />
        </a>
      </div>
    </Reveal>
  </section>
);
