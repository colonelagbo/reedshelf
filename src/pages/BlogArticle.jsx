import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowLeft, Clock, Calendar, Tag, ArrowUpRight, BookOpen } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { getPostBySlug, getAllPosts } from "../data/posts";

export const BlogArticle = () => {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#f8f7f2] text-[#18332b]">
        <Navbar />
        <main className="px-6 pb-20 pt-36 lg:px-8 lg:pt-44">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#6d853d]">Blog Post</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Article Not Found</h1>
            <p className="mt-5 text-lg leading-8 text-[#60756d]">
              The article you're looking for doesn't exist or has been moved.
            </p>
            <Link
              to="/blog"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#18332b] px-6 py-3 font-semibold text-white transition hover:bg-[#26483d]"
            >
              <ArrowLeft size={18} /> Back to all articles
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Get other posts for the "Read next" section
  const relatedPosts = getAllPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  return (
    <div className="min-h-screen bg-[#f8f7f2] text-[#18332b]">
      <Navbar />
      <main className="px-6 pb-24 pt-32 lg:px-8 lg:pt-40">
        <article className="mx-auto max-w-3xl">
          {/* Back link */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#60756d] transition hover:text-[#18332b]"
          >
            <ArrowLeft size={16} /> Back to all articles
          </Link>

          {/* Meta header */}
          <div className="mt-8 flex flex-wrap items-center gap-4 text-xs font-semibold uppercase tracking-wider text-[#6d853d]">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#edf1e9] px-3.5 py-1 text-[#4e6425]">
              <Tag size={13} /> {post.category}
            </span>
            <span className="inline-flex items-center gap-1.5 text-[#60756d]">
              <Calendar size={13} /> {post.date}
            </span>
            {post.readTime && (
              <span className="inline-flex items-center gap-1.5 text-[#60756d]">
                <Clock size={13} /> {post.readTime}
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-[2.75rem] lg:leading-[1.15]">
            {post.title}
          </h1>

          {/* Summary / Lead */}
          {post.summary && (
            <p className="mt-6 border-l-2 border-[#6d853d]/40 pl-4 text-xl leading-relaxed text-[#526a61] italic">
              {post.summary}
            </p>
          )}

          {/* Cover image or visual header */}
          {post.coverImage ? (
            <div className="mt-10 overflow-hidden rounded-3xl border border-[#dfe5dc]">
              <img
                src={post.coverImage}
                alt={post.title}
                className="aspect-[16/8] w-full object-cover"
              />
            </div>
          ) : (
            <div className="mt-10 flex aspect-[16/7] items-center justify-center rounded-3xl border border-dashed border-[#cbd5c6] bg-[#edf1e9]">
              <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#7a8e83]">
                <BookOpen size={20} className="text-[#6d853d]" />
                <span>ReedShelf Journal</span>
              </div>
            </div>
          )}

          {/* Markdown Article Content */}
          <div className="mt-12 text-[#30483f]">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h2: ({ node, ...props }) => (
                  <h2 className="mt-12 mb-4 text-2xl font-bold tracking-tight text-[#18332b] sm:text-3xl" {...props} />
                ),
                h3: ({ node, ...props }) => (
                  <h3 className="mt-8 mb-3 text-xl font-bold text-[#18332b]" {...props} />
                ),
                p: ({ node, ...props }) => (
                  <p className="mb-6 text-lg leading-relaxed text-[#40584f]" {...props} />
                ),
                ul: ({ node, ...props }) => (
                  <ul className="mb-6 list-disc space-y-2 pl-6 text-lg text-[#40584f]" {...props} />
                ),
                ol: ({ node, ...props }) => (
                  <ol className="mb-6 list-decimal space-y-2 pl-6 text-lg text-[#40584f]" {...props} />
                ),
                li: ({ node, ...props }) => <li className="leading-relaxed" {...props} />,
                blockquote: ({ node, ...props }) => (
                  <blockquote
                    className="my-8 rounded-2xl border-l-4 border-[#6d853d] bg-[#edf1e9]/60 p-6 text-lg italic text-[#264136]"
                    {...props}
                  />
                ),
                hr: ({ node, ...props }) => <hr className="my-10 border-[#dfe5dc]" {...props} />,
                a: ({ node, ...props }) => (
                  <a className="font-semibold text-[#6d853d] underline underline-offset-4 hover:text-[#4e6425]" {...props} />
                ),
                strong: ({ node, ...props }) => <strong className="font-semibold text-[#18332b]" {...props} />,
                code: ({ node, inline, ...props }) =>
                  inline ? (
                    <code className="rounded bg-[#edf1e9] px-1.5 py-0.5 font-mono text-sm text-[#18332b]" {...props} />
                  ) : (
                    <pre className="my-6 overflow-x-auto rounded-2xl bg-[#18332b] p-5 font-mono text-sm text-[#e2ede4]">
                      <code {...props} />
                    </pre>
                  ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>

          {/* Author/Footer callout */}
          <div className="mt-16 rounded-3xl border border-[#dfe5dc] bg-white p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#6d853d]">Written for Readers</p>
                <h3 className="mt-1 text-xl font-bold text-[#18332b]">Enjoyed this article?</h3>
                <p className="mt-1 text-sm text-[#60756d]">
                  Track books, set reading paces, and build your mindful reading library on ReedShelf.
                </p>
              </div>
              <Link
                to="/#get-started"
                className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#18332b] px-6 py-3 font-semibold text-white transition hover:bg-[#26483d]"
              >
                Get started
              </Link>
            </div>
          </div>

          {/* Related Articles */}
          {relatedPosts.length > 0 && (
            <div className="mt-20 border-t border-[#dfe5dc] pt-14">
              <h2 className="text-2xl font-bold text-[#18332b]">Continue reading</h2>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.slug}
                    to={`/blog/${related.slug}`}
                    className="group flex flex-col justify-between rounded-3xl border border-[#dfe5dc] bg-white p-6 transition hover:border-[#b8c6b4] hover:shadow-sm"
                  >
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-[#6d853d]">
                        {related.category} · {related.readTime || related.date}
                      </p>
                      <h3 className="mt-3 text-xl font-bold text-[#18332b] group-hover:text-[#6d853d] transition">
                        {related.title}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[#60756d]">
                        {related.summary}
                      </p>
                    </div>
                    <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-[#18332b] group-hover:text-[#6d853d]">
                      Read post <ArrowUpRight size={16} />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>
      </main>
      <Footer />
    </div>
  );
};

