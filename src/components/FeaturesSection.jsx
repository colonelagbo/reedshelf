import { BookMarked, CalendarCheck, TrendingUp, Flame } from "lucide-react";
import { Reveal } from "./Reveal";

const features = [
  {
    icon: BookMarked,
    title: "Your digital bookshelf",
    text: "Keep the books you own, want to read, or are currently reading neatly organized in one calm place.",
    bgColor: "bg-[#e6f4f2]",
    textColor: "text-[#007268]",
    borderColor: "border-[#bfe3de]",
    badge: "Organize",
  },
  {
    icon: CalendarCheck,
    title: "Gentle reading plans",
    text: "Turn your reading goals into simple, flexible plans that calculate your daily pages without stress.",
    bgColor: "bg-[#fbf1de]",
    textColor: "text-[#8a6a25]",
    borderColor: "border-[#efdcae]",
    badge: "Schedule",
  },
  {
    icon: TrendingUp,
    title: "Track your progress",
    text: "Watch your finish dates update in real time and celebrate every chapter you complete.",
    bgColor: "bg-[#e5eef3]",
    textColor: "text-[#063b5c]",
    borderColor: "border-[#c4d9e4]",
    badge: "Insights",
  },
  {
    icon: Flame,
    title: "Build daily habits",
    text: "Stay motivated with friendly reading streaks and gentle reminders tailored to your lifestyle.",
    bgColor: "bg-[#fdece5]",
    textColor: "text-[#ad4e35]",
    borderColor: "border-[#f6d2c4]",
    badge: "Consistency",
  },
];

export const FeaturesSection = () => (
  <section id="features" className="bg-[#f6f4ee] px-6 py-20 transition-colors duration-300 dark:bg-[#0b1619] lg:px-8 lg:py-28">
    <div className="mx-auto max-w-7xl">
      <Reveal className="max-w-2xl">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#009689] dark:text-[#5fc4b8]">Why ReedShelf</p>
        <h2 className="font-display mt-3 text-4xl font-bold tracking-tight text-[#0b1619] dark:text-white sm:text-5xl">
          Everything you need to make reading easier.
        </h2>
        <p className="mt-5 text-lg leading-8 text-[#4a5a58] dark:text-white/60">
          ReedShelf keeps the simple things together, so you can spend less time
          organizing your books and more time reading them.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ icon: Icon, title, text, bgColor, textColor, borderColor, badge }, i) => (
          <Reveal key={title} delay={i * 90}>
            <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-[#e4e1d6] bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#009689]/40 hover:shadow-xl hover:shadow-[#0b1619]/8 dark:border-white/10 dark:bg-[#12232a] dark:hover:border-[#5fc4b8]/40">
              <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#d6a84a]/0 transition group-hover:bg-[#d6a84a]/10" />
              <div>
                <div className="flex items-center justify-between">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl border ${borderColor} ${bgColor} ${textColor} shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
                  >
                    <Icon size={26} strokeWidth={2.2} />
                  </div>
                  <span className="rounded-full bg-[#f0efe6] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#8b8a7c] dark:bg-white/10 dark:text-white/50">
                    {badge}
                  </span>
                </div>

                <h3 className="font-display mt-6 text-xl font-bold text-[#0b1619] transition-colors group-hover:text-[#009689] dark:text-white dark:group-hover:text-[#5fc4b8]">
                  {title}
                </h3>
                <p className="mt-3 leading-7 text-[#5c6b68] dark:text-white/50">{text}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
