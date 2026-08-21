import { Link } from "react-router-dom";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { getRecentPosts } from "../data/posts";

export const BlogPreviewSection = () => {
  const posts = getRecentPosts(3);

  return (
    <section className="px-6 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#6d853d]">From the blog</p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight text-[#18332b] sm:text-5xl">
              Ideas worth reading.
            </h2>
          </div>
          <Link to="/blog" className="font-semibold text-[#18332b] hover:text-[#6d853d] transition">
            View all posts →
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-[#dfe5dc] bg-white transition hover:border-[#b8c6b4] hover:shadow-md"
            >
              <div>
                {post.coverImage ? (
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="aspect-[16/9] w-full object-cover"
                  />
                ) : (
                  <div className="flex aspect-[16/9] items-center justify-center bg-[#edf1e9] transition group-hover:bg-[#e4ebd7]/60">
                    <div className="flex items-center gap-2 rounded-full border border-[#cbd5c6] bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#6d853d]">
                      <BookOpen size={14} />
                      <span>{post.category}</span>
                    </div>
                  </div>
                )}

                <div className="p-7">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#6d853d]">
                    {post.category} • {post.date}
                  </p>
                  <h3 className="mt-3 text-2xl font-bold text-[#18332b] group-hover:text-[#6d853d] transition">
                    <Link to={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-3 line-clamp-2 leading-7 text-[#6b7d76]">
                    {post.summary}
                  </p>
                </div>
              </div>

              <div className="p-7 pt-0">
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1.5 font-semibold text-sm text-[#18332b] group-hover:text-[#6d853d] transition"
                >
                  Read more <ArrowUpRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

