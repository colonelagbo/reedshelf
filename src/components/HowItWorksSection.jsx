import { BookPlus, ListChecks, Play, TrendingUp } from "lucide-react";
import { Reveal } from "./Reveal";

const steps = [
  { icon: BookPlus, number: "01", title: "Add your books", text: "Bring your reading list into one simple digital shelf." },
  { icon: ListChecks, number: "02", title: "Create a plan", text: "Decide what you want to read and build a plan around your goals." },
  { icon: Play, number: "03", title: "Start reading", text: "Pick up your next book and keep your place as you go." },
  { icon: TrendingUp, number: "04", title: "Track your journey", text: "See your progress and keep building your reading habit." },
];

export const HowItWorksSection = () => (
  <section id="how-it-works" className="relative overflow-hidden bg-[#063b5c] px-6 py-20 text-white lg:px-8 lg:py-28">
    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#0b1619_0%,#063b5c_28%,#063b5c_100%)]" />
    <div className="relative mx-auto max-w-7xl">
      <Reveal className="max-w-2xl">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d6a84a]">How it works</p>
        <h2 className="font-display mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          From “I want to read” to “I finished it.”
        </h2>
        <p className="mt-5 text-lg leading-8 text-white/65">
          ReedShelf gives your reading life a little more structure without making it complicated.
        </p>
      </Reveal>

      <div className="relative mt-16">
        <div className="absolute left-0 right-0 top-[38px] hidden h-px bg-gradient-to-r from-transparent via-white/15 to-transparent lg:block" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, number, title, text }, index) => (
            <Reveal key={number} delay={index * 120}>
              <div className="group relative flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-7 transition hover:border-[#d6a84a]/40 hover:bg-white/[0.08]">
                <div className="flex items-center justify-between">
                  <span className="font-display text-sm font-bold text-[#d6a84a]">{number}</span>
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#009689]/20 text-[#5fc4b8] transition group-hover:bg-[#d6a84a] group-hover:text-[#0b1619]">
                    <Icon size={20} />
                  </span>
                </div>
                <h3 className="font-display mt-8 text-xl font-bold">{title}</h3>
                <p className="mt-3 leading-7 text-white/60">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);
