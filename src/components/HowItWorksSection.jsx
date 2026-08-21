import { ArrowDown, BookPlus, ListChecks, Play, TrendingUp } from "lucide-react";

const steps = [
  { icon: BookPlus, number: "01", title: "Add your books", text: "Bring your reading list into one simple digital shelf." },
  { icon: ListChecks, number: "02", title: "Create a plan", text: "Decide what you want to read and build a plan around your goals." },
  { icon: Play, number: "03", title: "Start reading", text: "Pick up your next book and keep your place as you go." },
  { icon: TrendingUp, number: "04", title: "Track your journey", text: "See your progress and keep building your reading habit." },
];

export const HowItWorksSection = () => (
  <section id="how-it-works" className="bg-[#18332b] px-6 py-20 text-white lg:px-8 lg:py-28">
    <div className="mx-auto max-w-7xl">
      <div className="max-w-2xl">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d9f26c]">How it works</p>
        <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          From “I want to read” to “I finished it.”
        </h2>
        <p className="mt-5 text-lg leading-8 text-[#b8c8c0]">
          ReedShelf gives your reading life a little more structure without making it complicated.
        </p>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {steps.map(({ icon: Icon, number, title, text }, index) => (
          <div key={number} className="relative rounded-3xl border border-white/10 bg-white/5 p-7">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-[#d9f26c]">{number}</span>
              <Icon size={22} className="text-[#d9f26c]" />
            </div>
            <h3 className="mt-10 text-xl font-bold">{title}</h3>
            <p className="mt-3 leading-7 text-[#b8c8c0]">{text}</p>
            {index < steps.length - 1 && (
              <ArrowDown className="absolute -bottom-8 left-1/2 hidden text-white/20 lg:block lg:rotate-[-90deg]" size={22} />
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);
