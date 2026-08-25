import { useEffect, useRef, useState } from "react";
import { ArrowRight, BookOpen, Check } from "lucide-react";

export const HeroSection = () => {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    let raf;
    let start;
    const target = 222; // 3h 42m in minutes
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / 1400, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setMinutes(Math.round(target * eased));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  const handleMouseMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -6, y: px * 8 });
  };
  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  const hrs = Math.floor(minutes / 60);
  const mins = minutes % 60;

  return (
    <section className="relative overflow-hidden bg-[#0b1619] px-6 pb-24 pt-40 lg:px-8 lg:pb-32 lg:pt-48">
      <div className="pointer-events-none absolute -right-24 top-10 h-96 w-96 rounded-full bg-[#009689]/20 blur-[100px]" style={{ animation: "float-slow 9s ease-in-out infinite" }} />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-[#d6a84a]/10 blur-[100px]" style={{ animation: "float-slower 11s ease-in-out infinite" }} />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-[#d6a84a] backdrop-blur-sm">
            <BookOpen size={16} />
            Read consistently
          </div>

          <h1 className="font-display max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Your books.
            <span className="block text-[#5fc4b8]">Your plan.</span>
            <span className="font-accent block text-[#d6a84a]">Your progress.</span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-white/65">
            ReedShelf is your personal online bookshelf for organizing books, creating
            reading plans, and keeping track of your reading journey.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={`${import.meta.env.VITE_WEBAPP_URL || "http://localhost:5174"}/register`}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#009689] px-7 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#d6a84a] hover:text-[#0b1619]"
              style={{ animation: "pulse-ring 2.6s ease-out infinite" }}
            >
              Start reading
              <ArrowRight size={18} className="transition group-hover:translate-x-1" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10"
            >
              Explore features
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/60">
            {["Organize your books", "Plan your reading", "Track your progress"].map((item) => (
              <span key={item} className="inline-flex items-center gap-2">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-[#d6a84a] text-[#0b1619]">
                  <Check size={13} strokeWidth={3} />
                </span>
                {item}
              </span>
            ))}
          </div>
        </div>

        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative mx-auto w-full max-w-xl [perspective:1200px]"
        >
          <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-[#009689]/40 to-[#063b5c] rotate-2" />
          <div
            className="relative rounded-[2rem] border border-white/10 bg-[#12232a] p-5 shadow-2xl shadow-black/40 transition-transform duration-150 ease-out"
            style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                  My bookshelf
                </p>
                <h3 className="font-display mt-1 text-xl font-bold text-white">Whatever you want to read</h3>
              </div>
              <span className="rounded-full bg-[#009689]/20 px-3 py-1 text-xs font-semibold text-[#5fc4b8]">
                12 books tracked
              </span>
            </div>

            <div className="mt-5 overflow-hidden rounded-2xl border border-white/10 shadow-inner">
              <img
                src="/images/bookshelf-classic.jpg"
                alt="Classic wooden bookshelf with books standing upright with visible spine titles"
                className="aspect-[4/3] w-full object-cover transition duration-300 hover:scale-[1.03]"
              />
            </div>

            <div className="mt-5 rounded-2xl bg-white/5 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
                    Reading this week
                  </p>
                  <p className="font-display mt-1 text-sm font-bold text-white">
                    {hrs}h {mins}m • On pace
                  </p>
                </div>
                <div className="relative h-11 w-11">
                  <svg viewBox="0 0 44 44" className="h-11 w-11 -rotate-90">
                    <circle cx="22" cy="22" r="18" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="5" />
                    <circle
                      cx="22"
                      cy="22"
                      r="18"
                      fill="none"
                      stroke="#d6a84a"
                      strokeWidth="5"
                      strokeLinecap="round"
                      strokeDasharray={2 * Math.PI * 18}
                      strokeDashoffset={2 * Math.PI * 18 * (1 - minutes / 300)}
                      style={{ transition: "stroke-dashoffset 0.2s linear" }}
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
