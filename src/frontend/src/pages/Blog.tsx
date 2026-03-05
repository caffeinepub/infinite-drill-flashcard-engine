import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import { BookOpen, Calendar, Clock, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { Layout } from "../components/Layout";
import type { BlogPost as BlogPostType } from "../data/blogData";
import { useSEO } from "../hooks/useSEO";

// ─── Dynamic data loader ──────────────────────────────────────────────────────

type BlogModule = typeof import("../data/blogData");

function useBlogData() {
  const [blogModule, setBlogModule] = useState<BlogModule | null>(null);

  useEffect(() => {
    import("../data/blogData").then(setBlogModule);
  }, []);

  return {
    blogPosts: blogModule?.blogPosts ?? [],
    blogCategories: blogModule?.blogCategories ?? ["All"],
    isLoaded: blogModule !== null,
  };
}

// ─── Category colors ──────────────────────────────────────────────────────────

const categoryColors: Record<string, string> = {
  Science: "bg-neon-green/15 text-neon-green border-neon-green/30",
  Mathematics: "bg-neon-blue/15 text-neon-blue border-neon-blue/30",
  "Social Science": "bg-neon-amber/15 text-neon-amber border-neon-amber/30",
  "Study Tips": "bg-neon-purple/15 text-neon-purple border-neon-purple/30",
};

// ─── Blog Skeleton ────────────────────────────────────────────────────────────

function BlogSkeleton() {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
      data-ocid="blog.loading_state"
    >
      {Array.from({ length: 6 }, (_, i) => `sk-${i}`).map((k) => (
        <div
          key={k}
          className="glass-dark rounded-2xl p-5 border border-border/50 h-52 animate-pulse"
        >
          <div className="h-4 w-20 bg-muted/40 rounded mb-3" />
          <div className="h-5 w-full bg-muted/30 rounded mb-2" />
          <div className="h-4 w-3/4 bg-muted/20 rounded mb-4" />
          <div className="h-12 bg-muted/15 rounded" />
        </div>
      ))}
    </div>
  );
}

// ─── Blog Post Card ───────────────────────────────────────────────────────────

function BlogPostCard({ post, index }: { post: BlogPostType; index: number }) {
  return (
    <Link
      to="/blog/$slug"
      params={{ slug: post.slug }}
      data-ocid={`blog.post_card.${index + 1}`}
      className="group glass-dark rounded-2xl p-5 border border-border/50 hover:border-neon-purple/30 hover:shadow-card-glow transition-all duration-200 flex flex-col"
    >
      {/* Category + Class badges */}
      <div className="flex items-center gap-2 mb-3 flex-wrap">
        <span
          className={cn(
            "text-[10px] font-bold px-2 py-0.5 rounded-full border",
            categoryColors[post.category] ||
              "bg-muted/40 text-muted-foreground border-border",
          )}
        >
          {post.category}
        </span>
        <Badge
          variant="outline"
          className="text-[10px] px-2 py-0.5 border-border/50 text-muted-foreground"
        >
          {post.classTag}
        </Badge>
      </div>

      {/* Title */}
      <h2 className="font-display font-bold text-sm leading-snug mb-2 group-hover:text-neon-purple transition-colors line-clamp-3">
        {post.title}
      </h2>

      {/* Excerpt */}
      <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 flex-1 mb-4">
        {post.excerpt}
      </p>

      {/* Footer meta */}
      <div className="flex items-center gap-3 text-[10px] text-muted-foreground pt-3 border-t border-border/30">
        <span className="flex items-center gap-1">
          <Clock size={10} />
          {post.readTime} min read
        </span>
        <span className="flex items-center gap-1">
          <Calendar size={10} />
          {new Date(post.publishedAt).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </span>
      </div>
    </Link>
  );
}

// ─── Blog Page ────────────────────────────────────────────────────────────────

export default function Blog() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const { blogPosts, blogCategories, isLoaded } = useBlogData();

  useSEO({
    title:
      "NCERT Blog — Free Study Notes, Tips & Chapter Summaries for Class 6 to 12",
    description:
      "Free NCERT blog with chapter notes, study tips, concept explanations and important questions for Class 6 to 12 CBSE. Covers Science, Maths, Social Science and more.",
    keywords:
      "NCERT notes blog, CBSE study notes, class 9 science notes, class 10 science notes, NCERT chapter summary, CBSE board exam tips, NCERT important questions",
    canonical: "/blog",
  });

  const filtered = blogPosts.filter((post) => {
    const matchesCategory =
      activeCategory === "All" || post.category === activeCategory;
    const q = search.toLowerCase();
    const matchesSearch =
      !q ||
      post.title.toLowerCase().includes(q) ||
      post.excerpt.toLowerCase().includes(q) ||
      post.classTag.toLowerCase().includes(q) ||
      post.subject.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout>
      <div className="max-w-[1100px] mx-auto px-4 py-8 lg:py-12">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono-custom text-neon-purple/70 uppercase tracking-widest">
              NCERT Bhaiya
            </span>
          </div>
          <h1
            data-ocid="blog.page_h1"
            className="font-display text-3xl lg:text-4xl font-bold mb-3"
          >
            <span className="text-gradient-purple">Free NCERT</span>{" "}
            <span className="text-foreground">Study Blog</span>
          </h1>
          <p className="text-muted-foreground text-sm max-w-xl leading-relaxed">
            Chapter notes, concept explanations, comparison tables, and exam
            tips — written to help you score high in CBSE. Searchable and free.
          </p>
        </div>

        {/* Search + Filter */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          {/* Search */}
          <div className="relative flex-1" data-ocid="blog.search_input">
            <Search
              size={14}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
            />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search chapters, topics, classes..."
              className="w-full pl-9 pr-4 py-2.5 text-sm bg-muted/40 border border-border/50 rounded-xl placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-neon-purple/40 transition-all"
            />
          </div>

          {/* Category filter */}
          <div className="flex gap-1.5 flex-wrap">
            {blogCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                data-ocid="blog.category_tab"
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-3 py-2 rounded-lg text-xs font-medium border transition-all",
                  activeCategory === cat
                    ? "bg-neon-purple/20 border-neon-purple/40 text-neon-purple"
                    : "bg-muted/30 border-border/40 text-muted-foreground hover:text-foreground hover:bg-muted/50",
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        {isLoaded && (
          <p className="text-xs text-muted-foreground mb-5 font-mono-custom">
            {filtered.length} article{filtered.length !== 1 ? "s" : ""} found
          </p>
        )}

        {/* Loading skeleton */}
        {!isLoaded && <BlogSkeleton />}

        {/* Blog Grid */}
        {isLoaded && filtered.length === 0 ? (
          <div
            data-ocid="blog.empty_state"
            className="text-center py-16 text-muted-foreground"
          >
            <BookOpen size={32} className="mx-auto mb-3 opacity-40" />
            <p className="text-sm">No articles match your search.</p>
          </div>
        ) : isLoaded ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((post, index) => (
              <BlogPostCard key={post.slug} post={post} index={index} />
            ))}
          </div>
        ) : null}
      </div>
    </Layout>
  );
}
