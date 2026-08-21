export const AboutSection = () => (
  <section id="about" className="px-6 py-20 lg:px-8 lg:py-28">
    <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
      <div className="rounded-[2rem] bg-[#d9f26c] p-8 sm:p-12">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#50622c]">About ReedShelf</p>
        <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#18332b] sm:text-5xl">
          Reading should feel simple.
        </h2>
        <p className="mt-6 max-w-xl text-lg leading-8 text-[#3f5436]">
          ReedShelf was created around a simple idea: your books should not just
          sit on a shelf. They should help you build a reading life.
        </p>
      </div>

      <div>
        <p className="text-lg leading-8 text-[#60756d]">
          Whether you are trying to finish more books, follow a reading plan,
          or simply remember what you are currently reading, ReedShelf gives you
          a home for your reading journey.
        </p>
        <p className="mt-6 text-lg leading-8 text-[#60756d]">
          We are building ReedShelf to make reading more organized, intentional,
          and enjoyable — without taking away the simple pleasure of opening a book.
        </p>
      </div>
    </div>
  </section>
);
