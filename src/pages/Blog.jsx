import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, BookOpen, Clock, Calendar } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { getAllPosts, getCategories } from "../data/posts";

export const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const posts = getAllPosts();
  const categories = getCategories();

  const filteredPosts =
    selectedCategory === "All"
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#0b1619] transition-colors duration-300 dark:bg-[#0b1619] dark:text-[#f6f4ee]">
      <Navbar />
      <main className="px-6 pb-24 pt-36 lg:px-8 lg:pt-44">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#009689] dark:text-[#5fc4b8]">ReedShelf Blog</p>
            <h1 className="font-display mt-3 text-5xl font-bold tracking-tight sm:text-6xl text-[#0b1619] dark:text-white">
              Stories & insights for readers.
            </h1>
            <p className="mt-5 text-lg leading-8 text-[#4a5a58] dark:text-white/60">
              Tips on building reading habits, curated book recommendations, and thoughts on mindful reading.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="mt-10 flex flex-wrap gap-2.5">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition cursor-pointer ${
                  selectedCategory === category
                    ? "bg-[#009689] text-white shadow-sm"
                    : "border border-[#e4e1d6] bg-white text-[#557067] hover:border-[#009689] hover:text-[#009689] dark:border-white/10 dark:bg-white/5 dark:text-white/60 dark:hover:border-[#5fc4b8] dark:hover:text-[#5fc4b8]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Post Grid */}
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-[#e4e1d6] bg-white transition duration-200 hover:border-[#009689]/40 hover:shadow-md dark:border-white/10 dark:bg-[#12232a]"
              >
                <div>
                  {/* Card Image / Placeholder */}
                  {post.coverImage ? (
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="aspect-[16/10] w-full object-cover"
                    />
                  ) : (
                    <div className="flex aspect-[16/10] items-center justify-center bg-[#e6f4f2] transition duration-200 group-hover:bg-[#d6a84a]/15 dark:bg-white/5">
                      <div className="flex items-center gap-2 rounded-full border border-[#cbd5c6] bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#6d853d]">
                        <BookOpen size={14} />
                        <span>{post.category}</span>
                      </div>
                    </div>
                  )}

                  {/* Card Content */}
                  <div className="p-7 pb-4">
                    <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-[#009689] dark:text-[#5fc4b8]">
                      <span>{post.category}</span>
                      <span>•</span>
                      <span className="inline-flex items-center gap-1 text-[#82948c] dark:text-white/40">
                        <Calendar size={12} /> {post.date}
                      </span>
                    </div>

                    <h2 className="font-display mt-4 text-2xl font-bold leading-tight text-[#0b1619] group-hover:text-[#009689] transition dark:text-white dark:group-hover:text-[#5fc4b8]">
                      <Link to={`/blog/${post.slug}`} className="focus:outline-none">
                        {post.title}
                      </Link>
                    </h2>

                    <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-[#5c6b68] dark:text-white/50">
                      {post.summary}
                    </p>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="p-7 pt-0 flex items-center justify-between">
                  <span className="text-xs font-medium text-[#82948c] inline-flex items-center gap-1 dark:text-white/40">
                    <Clock size={13} /> {post.readTime || "3 min read"}
                  </span>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 font-semibold text-sm text-[#0b1619] group-hover:text-[#009689] transition dark:text-white dark:group-hover:text-[#5fc4b8]"
                  >
                    Read article <ArrowUpRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="mt-16 rounded-3xl border border-[#e4e1d6] bg-white p-12 text-center dark:border-white/10 dark:bg-[#12232a]">
              <p className="text-lg font-medium text-[#4a5a58] dark:text-white/60">No articles found in this category yet.</p>
              <button
                onClick={() => setSelectedCategory("All")}
                className="mt-4 text-sm font-semibold text-[#009689] underline hover:text-[#007268] dark:text-[#5fc4b8]"
              >
                View all articles
              </button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};
