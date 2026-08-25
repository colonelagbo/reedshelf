import { Link } from "react-router-dom";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { getRecentPosts } from "../data/posts";
import { Reveal } from "./Reveal";

export const BlogPreviewSection = () => {
  const posts = getRecentPosts(3);

  return (
    <section className="bg-[#f6f4ee] px-6 py-20 transition-colors duration-300 dark:bg-[#0b1619] lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#009689] dark:text-[#5fc4b8]">From the blog</p>
            <h2 className="font-display mt-3 text-4xl font-bold tracking-tight text-[#0b1619] dark:text-white sm:text-5xl">
              Ideas worth reading.
            </h2>
          </div>
          <Link to="/blog" className="font-semibold text-[#0b1619] transition hover:text-[#009689] dark:text-white dark:hover:text-[#5fc4b8]">
            View all posts →
          </Link>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 90}>
              <article className="group flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-[#e4e1d6] bg-white transition hover:-translate-y-1 hover:border-[#009689]/40 hover:shadow-lg hover:shadow-[#0b1619]/8 dark:border-white/10 dark:bg-[#12232a]">
                <div>
                  {post.coverImage ? (
                    <div className="overflow-hidden">
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        className="aspect-[16/9] w-full object-cover transition duration-300 group-hover:scale-105"
                      />
                    </div>
                  ) : (
                    <div className="flex aspect-[16/9] items-center justify-center bg-[#e6f4f2] transition group-hover:bg-[#d6a84a]/15 dark:bg-white/5">
                      <div className="flex items-center gap-2 rounded-full border border-[#bfe3de] bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#007268]">
                        <BookOpen size={14} />
                        <span>{post.category}</span>
                      </div>
                    </div>
                  )}

                  <div className="p-7">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#009689] dark:text-[#5fc4b8]">
                      {post.category} • {post.date}
                    </p>
                    <h3 className="font-display mt-3 text-2xl font-bold text-[#0b1619] transition group-hover:text-[#009689] dark:text-white dark:group-hover:text-[#5fc4b8]">
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p className="mt-3 line-clamp-2 leading-7 text-[#5c6b68] dark:text-white/50">{post.summary}</p>
                  </div>
                </div>

                <div className="p-7 pt-0">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0b1619] transition group-hover:gap-2.5 group-hover:text-[#009689] dark:text-white dark:group-hover:text-[#5fc4b8]"
                  >
                    Read more <ArrowUpRight size={16} />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
