import { ArrowRight } from "lucide-react";

export const CTASection = () => (
  <section id="get-started" className="px-6 pb-20 lg:px-8 lg:pb-28">
    <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#dce9df] px-7 py-14 text-center sm:px-12 lg:py-20">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#607631]">Start your journey</p>
      <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-bold tracking-tight text-[#18332b] sm:text-5xl">
        Make room for more good books.
      </h2>
      <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-[#60756d]">
        ReedShelf is being built for readers who want a better way to organize,
        plan, and keep track of their reading.
      </p>
      <a
        href="/register"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#18332b] px-7 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#26483d]"
      >
        Explore ReedShelf <ArrowRight size={18} />
      </a>
    </div>
  </section>
);
