/**
 * ReedShelf Blog Posts Data
 * 
 * To add a new blog post:
 * 1. Add a new post object to the `blogPosts` array below.
 * 2. Set a unique `slug` (used in the URL, e.g. '/blog/my-post-title').
 * 3. Write your article in standard Markdown format inside the `content` field.
 */

export const blogPosts = [
  {
    id: "1",
    slug: "our-story-built-for-readers",
    title: "Our Story: Built for Readers Who Want More From Their Books",
    category: "ReedShelf",
    date: "August 20, 2026",
    readTime: "4 min read",
    summary: "Why we built ReedShelf: a mindful book tracking and reading habit companion designed to help you rediscover the joy of focused reading.",
    coverImage: "/images/blog/our-story.jpg",
    content: `
Reading is one of the most rewarding habits you can build, yet in a world of endless digital distractions, finding the time and focus to finish books has never been harder.

That's why we created **ReedShelf**.

## The Problem with Traditional Trackers

Most reading apps turn books into numbers and metrics. They treat reading like a chore with aggressive streak counters, gamified stress, and endless clutter that pulls you away from the actual reading experience.

We wanted something different:

- **Mindful tracking**: Focus on what you learn and feel, not just raw page counts.
- **Realistic planning**: Set gentle, achievable reading goals that fit around your real life.
- **Beautiful simplicity**: A calm, distraction-free space for your bookshelf.

> *"A reader lives a thousand lives before he dies. The man who never reads lives only one."* — George R.R. Martin

## What Makes ReedShelf Different?

ReedShelf is built around three core pillars:

### 1. Smart Reading Plans
Instead of hoping you'll find time to read, ReedShelf calculates a gentle daily pace based on your selected target date. Whether you read 5 pages over morning coffee or 30 minutes before sleep, you're always in control.

### 2. Meaningful Notes & Quotes
Easily capture insights, memorable quotes, and reflections while reading so you retain the knowledge long after closing the back cover.

### 3. Your Personal Digital Library
Organize your "Currently Reading", "Want to Read", and "Finished" shelves with intuitive sorting and custom collections.

---

### Start Your Journey Today

We are just getting started on this journey, and we'd love for you to be part of our growing community of readers. 

Explore ReedShelf, set up your first reading goal, and let's read great books together!
    `.trim()
  },
  {
    id: "2",
    slug: "building-a-consistent-daily-reading-habit",
    title: "How to Build a Consistent Daily Reading Habit in 15 Minutes a Day",
    category: "Reading Habits",
    date: "August 15, 2026",
    readTime: "5 min read",
    summary: "Simple, science-backed strategies to read 20+ books a year without disrupting your busy schedule.",
    coverImage: "/images/blog/reading-habit.jpg",
    content: `
Many people assume that reading dozens of books every year requires hours of free time every single day. The truth is much simpler: **consistency always beats intensity**.

Reading just 15 to 20 minutes a day at an average reading speed equates to around **15 to 25 full books finished every year**.

Here are four actionable techniques to help you make reading a daily ritual.

---

## 1. Habit Stacking: Anchor Reading to an Existing Routine

The easiest way to form a new habit is to attach it to an established one (a concept popularized by James Clear in *Atomic Habits*).

- **After** I brew my morning coffee, **I will** read 5 pages.
- **After** I get into bed, **I will** read for 10 minutes before turning off the light.
- **When** I ride the train or bus, **I will** open my book instead of scrolling social media.

## 2. Eliminate Friction

Keep your current book where you can easily reach it:

- Place a book on your nightstand or coffee table.
- Keep the ReedShelf app on your phone's home screen.
- Carry a lightweight paperback or e-reader in your bag.

\`\`\`
Rule of thumb: The fewer clicks or steps between you and your book, the more likely you are to read.
\`\`\`

## 3. Practice the 50-Page Rule

Life is too short to force yourself through books that don't capture your interest. If a book hasn't engaged you after 50 pages, feel free to put it down and pick up another one.

> Reading should feel like an adventure or an oasis, not homework.

## 4. Track Your Progress Visually

Seeing your progress accumulate provides an immediate dopamine boost that reinforces the habit. Using a companion like **ReedShelf** lets you see your percentage completed and estimated finish date in real time.

---

What book are you going to start reading today?
    `.trim()
  },
  {
    id: "3",
    slug: "5-must-read-books-to-transform-your-mindset",
    title: "5 Must-Read Books That Will Completely Transform Your Mindset",
    category: "Books",
    date: "August 8, 2026",
    readTime: "6 min read",
    summary: "Our curated selection of transformative books spanning psychology, productivity, and personal growth.",
    coverImage: "/images/blog/book-stack.jpg",
    content: `
Looking for your next life-changing read? Here are 5 outstanding books that offer fresh perspectives on thinking, focus, and purposeful living.

---

### 1. Atomic Habits by James Clear
A masterclass on how small, 1% incremental changes compound into massive personal and professional transformations.

**Key takeaway:** *You do not rise to the level of your goals. You fall to the level of your systems.*

### 2. Deep Work by Cal Newport
In an age of constant notifications and fragmented attention, the ability to focus deeply on demanding tasks is becoming a superpower.

**Key takeaway:** *Clarity about what matters provides clarity about what does not.*

### 3. Essentialism by Greg McKeown
A guide to the disciplined pursuit of less. Essentialism isn't about getting more things done; it's about getting only the right things done.

### 4. Thinking, Fast and Slow by Daniel Kahneman
A deep dive by Nobel laureate Daniel Kahneman into the two systems that drive the way we think: the intuitive System 1, and the deliberate System 2.

### 5. The Psychology of Money by Morgan Housel
Doing well with money isn't necessarily about what you know. It's about how you behave. A fascinating look at the human relationship with wealth and happiness.

---

Add these titles to your **ReedShelf** reading list and start planning your reading journey!
    `.trim()
  },
  {
    id: "4",
    slug: "the-art-of-taking-notes-while-reading",
    title: "The Art of Taking Notes While Reading: Retain What You Learn",
    category: "Learning",
    date: "July 29, 2026",
    readTime: "4 min read",
    summary: "Stop forgetting what you read. Learn practical marginalia and digital note-taking methods.",
    coverImage: "/images/blog/journal-notetaking.jpg",
    content: `
Have you ever finished a wonderful non-fiction book, only to realize a month later that you barely remember the main concepts?

You are not alone. Retaining knowledge requires active engagement.

## Why Passive Reading Fails

When we simply scan text, our brains recognize words without creating strong neural associations. To truly internalize knowledge, we must process, question, and summarize ideas in our own words.

### Practical Tips for Note-Taking:

1. **Highlight sparingly**: Limit highlights to 1–2 key sentences per chapter to force yourself to identify the core message.
2. **Write margin notes**: Summarize ideas in your own words in the margins or in your note app.
3. **Capture key quotes**: Save memorable quotes into ReedShelf so you can review them whenever you want inspiration.
    `.trim()
  }
];

// Helper functions for easy access across the app
export const getAllPosts = () => blogPosts;

export const getPostBySlug = (slug) => {
  if (!slug) return undefined;
  return blogPosts.find((p) => p.slug.toLowerCase() === slug.toLowerCase());
};

export const getRecentPosts = (limit = 3) => {
  return blogPosts.slice(0, limit);
};

export const getCategories = () => {
  const categories = new Set(blogPosts.map((p) => p.category));
  return ["All", ...Array.from(categories)];
};
