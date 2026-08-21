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
    <div className="min-h-screen bg-[#f8f7f2] text-[#18332b]">
      <Navbar />
      <main className="px-6 pb-24 pt-36 lg:px-8 lg:pt-44">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#6d853d]">ReedShelf Blog</p>
            <h1 className="mt-3 text-5xl font-bold tracking-tight sm:text-6xl text-[#18332b]">
              Stories & insights for readers.
            </h1>
            <p className="mt-5 text-lg leading-8 text-[#60756d]">
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
                    ? "bg-[#18332b] text-white shadow-sm"
                    : "border border-[#dfe5dc] bg-white text-[#557067] hover:border-[#18332b] hover:text-[#18332b]"
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
                className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-[#dfe5dc] bg-white transition duration-200 hover:border-[#b8c6b4] hover:shadow-md"
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
                    <div className="flex aspect-[16/10] items-center justify-center bg-[#edf1e9] transition duration-200 group-hover:bg-[#e4ebd7]/60">
                      <div className="flex items-center gap-2 rounded-full border border-[#cbd5c6] bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#6d853d]">
                        <BookOpen size={14} />
                        <span>{post.category}</span>
                      </div>
                    </div>
                  )}

                  {/* Card Content */}
                  <div className="p-7 pb-4">
                    <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-[#6d853d]">
                      <span>{post.category}</span>
                      <span>•</span>
                      <span className="inline-flex items-center gap-1 text-[#82948c]">
                        <Calendar size={12} /> {post.date}
                      </span>
                    </div>

                    <h2 className="mt-4 text-2xl font-bold leading-tight text-[#18332b] group-hover:text-[#6d853d] transition">
                      <Link to={`/blog/${post.slug}`} className="focus:outline-none">
                        {post.title}
                      </Link>
                    </h2>

                    <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-[#6b7d76]">
                      {post.summary}
                    </p>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="p-7 pt-0 flex items-center justify-between">
                  <span className="text-xs font-medium text-[#82948c] inline-flex items-center gap-1">
                    <Clock size={13} /> {post.readTime || "3 min read"}
                  </span>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 font-semibold text-sm text-[#18332b] group-hover:text-[#6d853d] transition"
                  >
                    Read article <ArrowUpRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="mt-16 rounded-3xl border border-[#dfe5dc] bg-white p-12 text-center">
              <p className="text-lg font-medium text-[#60756d]">No articles found in this category yet.</p>
              <button
                onClick={() => setSelectedCategory("All")}
                className="mt-4 text-sm font-semibold text-[#6d853d] underline hover:text-[#4e6425]"
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
