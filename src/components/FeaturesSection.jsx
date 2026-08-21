import { BookMarked, CalendarCheck, TrendingUp, Flame } from "lucide-react";

const features = [
  {
    icon: BookMarked,
    title: "Your digital bookshelf",
    text: "Keep the books you own, want to read, or are currently reading neatly organized in one calm place.",
    bgColor: "bg-[#edf5e8]",
    textColor: "text-[#4b6b2e]",
    borderColor: "border-[#d8e8cc]",
    badge: "Organize",
  },
  {
    icon: CalendarCheck,
    title: "Gentle reading plans",
    text: "Turn your reading goals into simple, flexible plans that calculate your daily pages without stress.",
    bgColor: "bg-[#fef6e5]",
    textColor: "text-[#a06b1b]",
    borderColor: "border-[#fbebc2]",
    badge: "Schedule",
  },
  {
    icon: TrendingUp,
    title: "Track your progress",
    text: "Watch your finish dates update in real time and celebrate every chapter you complete.",
    bgColor: "bg-[#e8f6f2]",
    textColor: "text-[#286f62]",
    borderColor: "border-[#ccece3]",
    badge: "Insights",
  },
  {
    icon: Flame,
    title: "Build daily habits",
    text: "Stay motivated with friendly reading streaks and gentle reminders tailored to your lifestyle.",
    bgColor: "bg-[#fdf1ec]",
    textColor: "text-[#ad4e35]",
    borderColor: "border-[#f8d7cc]",
    badge: "Consistency",
  },
];

export const FeaturesSection = () => (
  <section id="features" className="px-6 py-20 lg:px-8 lg:py-28">
    <div className="mx-auto max-w-7xl">
      <div className="max-w-2xl">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#6d853d]">Why ReedShelf</p>
        <h2 className="mt-3 text-4xl font-bold tracking-tight text-[#18332b] sm:text-5xl">
          Everything you need to make reading easier.
        </h2>
        <p className="mt-5 text-lg leading-8 text-[#60756d]">
          ReedShelf keeps the simple things together, so you can spend less time
          organizing your books and more time reading them.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ icon: Icon, title, text, bgColor, textColor, borderColor, badge }) => (
          <article
            key={title}
            className="group relative flex flex-col justify-between rounded-3xl border border-[#dfe5dc] bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#b8c6b4] hover:shadow-xl hover:shadow-[#18332b]/8"
          >
            <div>
              {/* Friendly Icon with soft background and interactive micro-animation */}
              <div className="flex items-center justify-between">
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl border ${borderColor} ${bgColor} ${textColor} shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-2`}
                >
                  <Icon size={26} strokeWidth={2.2} />
                </div>
                <span className="rounded-full bg-[#f4f6f0] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#82948c]">
                  {badge}
                </span>
              </div>

              <h3 className="mt-6 text-xl font-bold text-[#18332b] group-hover:text-[#6d853d] transition-colors">
                {title}
              </h3>
              <p className="mt-3 leading-7 text-[#6b7d76]">
                {text}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

