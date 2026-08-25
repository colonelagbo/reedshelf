import { Reveal } from "./Reveal";

const stats = [
  { value: "12", label: "Books on an average shelf" },
  { value: "4", label: "Daily pages, calculated for you" },
  { value: "1", label: "Calm place for it all" },
];

export const AboutSection = () => (
  <section id="about" className="bg-[#f6f4ee] px-6 py-20 transition-colors duration-300 dark:bg-[#0b1619] lg:px-8 lg:py-28">
    <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] bg-[#d6a84a] p-8 sm:p-12">
          <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-white/10" />
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0b1619]/70">About ReedShelf</p>
          <h2 className="font-display mt-4 text-4xl font-bold tracking-tight text-[#0b1619] sm:text-5xl">
            READING CAN BECOME A HABIT.
          </h2>
          <p className="font-accent mt-6 max-w-xl text-xl leading-8 text-[#0b1619]/80">
            Plan it. Read it. Track it.
          </p>
          <p className="mt-4 max-w-xl text-lg leading-8 text-[#0b1619]/70">
            ReedShelf was created around a simple idea: your books should not just
            sit on a shelf. They should help you build a reading life.
          </p>
        </div>
      </Reveal>

      <div>
        <Reveal delay={100}>
          <p className="text-lg leading-8 text-[#4a5a58] dark:text-white/60">
            Whether you are trying to finish more books, follow a reading plan,
            or simply remember what you are currently reading, ReedShelf gives you
            a home for your reading journey.
          </p>
          <p className="mt-6 text-lg leading-8 text-[#4a5a58] dark:text-white/60">
            We are building ReedShelf to make reading more organized, intentional,
            and enjoyable — without taking away the simple pleasure of opening a book.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-9 grid grid-cols-3 gap-4 border-t border-[#e4e1d6] pt-8 dark:border-white/10">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl font-bold text-[#009689] dark:text-[#5fc4b8]">{stat.value}</p>
                <p className="mt-1 text-sm leading-5 text-[#6b7a77] dark:text-white/40">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);
