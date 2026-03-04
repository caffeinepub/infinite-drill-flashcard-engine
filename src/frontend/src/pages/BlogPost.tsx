import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link, useParams } from "@tanstack/react-router";
import {
  ArrowLeft,
  BookOpen,
  Calendar,
  ChevronRight,
  Clock,
  Home,
  Info,
  Lightbulb,
} from "lucide-react";
import { useEffect } from "react";
import { Layout } from "../components/Layout";
import {
  type BlogPost as BlogPostType,
  type BlogSection,
  blogPosts,
  getBlogPostBySlug,
} from "../data/blogData";
import { useSEO } from "../hooks/useSEO";

// ─── Section Renderers ────────────────────────────────────────────────────────

function renderSection(section: BlogSection, index: number) {
  switch (section.type) {
    case "h2":
      return (
        <div key={index}>
          <h2 className="font-display font-bold text-xl mt-8 mb-3 text-foreground border-l-2 border-neon-purple pl-3">
            {section.heading}
          </h2>
          {section.text && (
            <p className="text-sm text-muted-foreground leading-relaxed">
              {section.text}
            </p>
          )}
        </div>
      );

    case "h3":
      return (
        <div key={index}>
          <h3 className="font-display font-semibold text-base mt-5 mb-2 text-foreground/90">
            {section.heading}
          </h3>
          {section.text && (
            <p className="text-sm text-muted-foreground leading-relaxed">
              {section.text}
            </p>
          )}
        </div>
      );

    case "p":
      return (
        <p
          key={index}
          className="text-sm text-muted-foreground leading-relaxed mt-3"
        >
          {section.text}
        </p>
      );

    case "ul":
      return (
        <ul key={index} className="mt-3 space-y-1.5 pl-1">
          {section.items?.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-sm text-muted-foreground"
            >
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neon-purple/60 shrink-0" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      );

    case "ol":
      return (
        <ol key={index} className="mt-3 space-y-2 pl-1">
          {section.items?.map((item, itemIdx) => (
            <li
              key={item}
              className="flex items-start gap-3 text-sm text-muted-foreground"
            >
              <span className="mt-0.5 w-5 h-5 rounded-full bg-neon-purple/15 border border-neon-purple/30 text-neon-purple text-[10px] font-bold flex items-center justify-center shrink-0">
                {itemIdx + 1}
              </span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ol>
      );

    case "table":
      return (
        <div
          key={index}
          className="mt-4 overflow-x-auto rounded-xl border border-border/50"
        >
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-neon-purple/10 border-b border-border/50">
                {section.headers?.map((h) => (
                  <th
                    key={h}
                    className="px-4 py-2.5 text-left font-semibold text-foreground/80"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.rows?.map((row) => (
                <tr
                  key={row.cells[0]}
                  className={cn(
                    "border-b border-border/30 transition-colors",
                    "odd:bg-muted/20 even:bg-transparent",
                    "hover:bg-neon-purple/5",
                  )}
                >
                  {row.cells.map((cell, ci) => (
                    <td
                      key={cell}
                      className="px-4 py-2.5 text-muted-foreground leading-relaxed"
                    >
                      {ci === 0 ? (
                        <span className="font-medium text-foreground/80">
                          {cell}
                        </span>
                      ) : (
                        cell
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case "tip":
      return (
        <div
          key={index}
          className="mt-4 flex gap-3 p-4 rounded-xl bg-neon-amber/10 border border-neon-amber/30"
        >
          <Lightbulb size={16} className="text-neon-amber shrink-0 mt-0.5" />
          <p className="text-sm text-foreground/80 leading-relaxed">
            {section.text}
          </p>
        </div>
      );

    case "note":
      return (
        <div
          key={index}
          className="mt-4 flex gap-3 p-4 rounded-xl bg-neon-blue/10 border border-neon-blue/30"
        >
          <Info size={16} className="text-neon-blue shrink-0 mt-0.5" />
          <p className="text-sm text-foreground/80 leading-relaxed">
            {section.text}
          </p>
        </div>
      );

    default:
      return null;
  }
}

// ─── Related Posts ─────────────────────────────────────────────────────────────

function RelatedPosts({ current }: { current: BlogPostType }) {
  const related = blogPosts
    .filter(
      (p) =>
        p.slug !== current.slug &&
        (p.category === current.category || p.classTag === current.classTag),
    )
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section className="mt-12 pt-8 border-t border-border/30">
      <h2 className="font-display font-bold text-lg mb-4">Related Articles</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {related.map((post, index) => (
          <Link
            key={post.slug}
            to="/blog/$slug"
            params={{ slug: post.slug }}
            data-ocid={`blog.related_card.${index + 1}`}
            className="glass-dark rounded-xl p-4 border border-border/40 hover:border-neon-purple/30 transition-all group"
          >
            <Badge
              variant="outline"
              className="text-[9px] px-2 py-0.5 mb-2 border-border/50 text-muted-foreground"
            >
              {post.classTag}
            </Badge>
            <p className="text-xs font-semibold leading-snug group-hover:text-neon-purple transition-colors line-clamp-2">
              {post.title}
            </p>
            <p className="text-[10px] text-muted-foreground mt-1 flex items-center gap-1">
              <Clock size={9} />
              {post.readTime} min read
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}

// ─── Article JSON-LD Schema ───────────────────────────────────────────────────

function ArticleSchema({ post }: { post: BlogPostType }) {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.metaTitle,
      description: post.metaDescription,
      author: {
        "@type": "Organization",
        name: "NCERT Bhaiya",
        url: "https://ncrtbhaiya-8d1.caffeine.xyz",
      },
      publisher: {
        "@type": "Organization",
        name: "NCERT Bhaiya",
        url: "https://ncrtbhaiya-8d1.caffeine.xyz",
      },
      datePublished: post.publishedAt,
      dateModified: post.publishedAt,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `https://ncrtbhaiya-8d1.caffeine.xyz/blog/${post.slug}`,
      },
      keywords: post.keywords.join(", "),
    };

    const existing = document.querySelector('script[data-schema="article"]');
    if (existing) existing.remove();
    const el = document.createElement("script");
    el.type = "application/ld+json";
    el.setAttribute("data-schema", "article");
    el.textContent = JSON.stringify(schema);
    document.head.appendChild(el);
    return () => {
      document.querySelector('script[data-schema="article"]')?.remove();
    };
  }, [post]);

  return null;
}

// ─── Blog Post Page ───────────────────────────────────────────────────────────

export default function BlogPost() {
  const { slug } = useParams({ from: "/blog/$slug" });
  const post = getBlogPostBySlug(slug);

  useSEO(
    post
      ? {
          title: post.metaTitle,
          description: post.metaDescription,
          keywords: post.keywords.join(", "),
          canonical: `/blog/${post.slug}`,
        }
      : {
          title: "Article Not Found | NCERT Bhaiya",
          description: "This article could not be found.",
        },
  );

  if (!post) {
    return (
      <Layout>
        <div
          data-ocid="blog.error_state"
          className="max-w-2xl mx-auto px-4 py-20 text-center"
        >
          <BookOpen size={40} className="mx-auto mb-4 opacity-40" />
          <h1 className="font-display font-bold text-2xl mb-2">
            Article Not Found
          </h1>
          <p className="text-muted-foreground text-sm mb-6">
            This article doesn't exist or may have been moved.
          </p>
          <Link to="/blog" data-ocid="blog.back_button">
            <Button variant="outline" size="sm" className="gap-2">
              <ArrowLeft size={14} />
              Back to Blog
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <ArticleSchema post={post} />
      <div className="max-w-[780px] mx-auto px-4 py-8 lg:py-12">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-1.5 text-[11px] text-muted-foreground mb-6"
          data-ocid="blog.breadcrumb"
        >
          <Link
            to="/"
            data-ocid="blog.home_link"
            className="flex items-center gap-1 hover:text-foreground transition-colors"
          >
            <Home size={10} />
            Home
          </Link>
          <ChevronRight size={10} />
          <Link
            to="/blog"
            data-ocid="blog.blog_link"
            className="hover:text-foreground transition-colors"
          >
            Blog
          </Link>
          <ChevronRight size={10} />
          <span className="text-foreground/60 truncate max-w-[200px]">
            {post.classTag} — {post.subject}
          </span>
        </nav>

        {/* Article Header */}
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-3 flex-wrap">
            <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-neon-purple/15 border border-neon-purple/30 text-neon-purple">
              {post.category}
            </span>
            <Badge
              variant="outline"
              className="text-[10px] px-2.5 py-1 border-border/50 text-muted-foreground"
            >
              {post.classTag}
            </Badge>
            <Badge
              variant="outline"
              className="text-[10px] px-2.5 py-1 border-border/50 text-muted-foreground"
            >
              {post.subject}
            </Badge>
          </div>

          <h1
            data-ocid="blog.post_h1"
            className="font-display font-bold text-2xl lg:text-3xl leading-snug mb-4"
          >
            {post.title}
          </h1>

          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            {post.excerpt}
          </p>

          <div className="flex items-center gap-4 text-xs text-muted-foreground pt-4 border-t border-border/30">
            <span className="flex items-center gap-1.5">
              <BookOpen size={12} />
              NCERT Bhaiya Editorial
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={12} />
              {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={12} />
              {post.readTime} min read
            </span>
          </div>
        </header>

        {/* Article Content */}
        <article data-ocid="blog.article_content" className="prose-custom">
          {post.content.map((section, i) => renderSection(section, i))}
        </article>

        {/* CTA block */}
        <div className="mt-10 p-5 glass-dark rounded-2xl border border-neon-purple/20 bg-gradient-to-r from-neon-purple/10 to-neon-blue/10">
          <h3 className="font-display font-bold text-base mb-1">
            Practice this topic with MCQ Quiz & Flashcards
          </h3>
          <p className="text-xs text-muted-foreground mb-3">
            Reinforce what you just read with free quizzes and flashcards on
            NCERT Bhaiya.
          </p>
          <div className="flex gap-2">
            <Link to="/ncert" data-ocid="blog.ncert_cta_link">
              <Button
                size="sm"
                className="bg-gradient-to-r from-neon-purple to-neon-blue text-white hover:opacity-90 gap-1.5 rounded-lg text-xs"
              >
                <BookOpen size={12} />
                Browse NCERT
              </Button>
            </Link>
            <Link to="/blog" data-ocid="blog.back_to_blog_link">
              <Button
                variant="outline"
                size="sm"
                className="gap-1.5 rounded-lg text-xs border-border/50"
              >
                <ArrowLeft size={12} />
                More Articles
              </Button>
            </Link>
          </div>
        </div>

        {/* Related Posts */}
        <RelatedPosts current={post} />
      </div>
    </Layout>
  );
}
