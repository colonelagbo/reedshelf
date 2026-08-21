import { ArrowRight, BookOpen, Check } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-36 lg:px-8 lg:pb-28 lg:pt-44">
      <div className="absolute -right-32 top-20 h-72 w-72 rounded-full bg-[#d9f26c]/30 blur-3xl" />
      <div className="absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-[#dce9df]/70 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d5ddd1] bg-white px-4 py-2 text-sm font-medium text-[#557067] shadow-sm">
            <BookOpen size={16} />
            Read Consistently
          </div>

          <h1 className="max-w-3xl text-5xl font-bold leading-[1.02] tracking-[-0.04em] text-[#18332b] sm:text-6xl lg:text-7xl">
            Your books.
            <span className="block text-[#6d853d]">Your plan.</span>
            <span className="block">Your progress.</span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-[#60756d]">
            ReedShelf is your personal Online bookshelf for organizing books, creating
            reading plans, and keeping track of your reading journey.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="/register"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#18332b] px-7 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#26483d]"
            >
              Start reading <ArrowRight size={18} />
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-full border border-[#cfd8ca] bg-white px-7 py-3.5 font-semibold text-[#18332b] transition hover:bg-[#f0f2ec]"
            >
              Explore features
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#60756d]">
            {["Organize your books", "Plan your reading", "Track your progress"].map((item) => (
              <span key={item} className="inline-flex items-center gap-2">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-[#d9f26c] text-[#18332b]">
                  <Check size={13} strokeWidth={3} />
                </span>
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute -inset-5 rounded-[2rem] bg-[#dce9df] rotate-2" />
          <div className="relative rounded-[2rem] border border-[#d7dfd3] bg-white p-5 shadow-2xl shadow-[#18332b]/10">
            <div className="flex items-center justify-between border-b border-[#edf0eb] pb-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#82948c]">
                  My bookshelf
                </p>
                <h3 className="mt-1 text-xl font-bold text-[#18332b]">Whatever You want to Read</h3>
              </div>
              <span className="rounded-full bg-[#eff5df] px-3 py-1 text-xs font-semibold text-[#607631]">
                12 books tracked
              </span>
            </div>

            {/* Classic Bookshelf Image with visible book spines */}
            <div className="mt-5 overflow-hidden rounded-2xl border border-[#dfe5dc] shadow-inner">
              <img
                src="/images/bookshelf-classic.jpg"
                alt="Classic wooden bookshelf with books standing upright with visible spine titles"
                className="aspect-[4/3] w-full object-cover transition duration-300 hover:scale-[1.02]"
              />
            </div>

            <div className="mt-5 rounded-2xl bg-[#f4f6f0] p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#82948c]">
                    Reading this week
                  </p>
                  <p className="mt-1 text-sm font-bold text-[#18332b]">3h 42m • On pace</p>
                </div>
                <div className="h-10 w-10 rounded-full border-4 border-[#d9f26c] border-r-[#dfe5dc]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
