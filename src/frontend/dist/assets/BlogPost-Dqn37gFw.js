import { u as useParams, j as jsxRuntimeExports, L as Link, r as reactExports, _ as __vitePreload, a as useUserProfileContext, b as ue } from "./index-Byw4S5DT.js";
import { B as Badge } from "./badge-DBzHLTLx.js";
import { B as Button } from "./button-DkpHnvfj.js";
import { c as createLucideIcon, a as cn } from "./createLucideIcon-qxRjawbb.js";
import { L as Layout } from "./Layout-BTtxtuwS.js";
import { c as useSubmitQuiz } from "./useQueries-Cds2NUKY.js";
import { u as useSEO } from "./useSEO-C-sFxTuH.js";
import { B as BookOpen } from "./book-open-BJJSygIM.js";
import { A as ArrowLeft } from "./arrow-left-DeCvX1E6.js";
import { H as House } from "./house-C-3LkXOU.js";
import { C as ChevronRight } from "./chevron-right-D1QzPmf0.js";
import { C as Calendar } from "./calendar-BHLtjCmn.js";
import { C as Clock } from "./clock-FixGxeLI.js";
import { L as Lightbulb } from "./lightbulb-CJrzpkde.js";
import "./useActor-BOi-VfDd.js";
import "./flask-conical-BU5f2W8A.js";
import "./trophy-cDPC_nl0.js";
import "./circle-user-BAAGSBv3.js";
import "./log-in-Ji1WGegL.js";
import "./useMutation-DoAppQZS.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
const Info = createLucideIcon("info", __iconNode);
function useBlogPost(slug) {
  const [blogModule, setBlogModule] = reactExports.useState(null);
  reactExports.useEffect(() => {
    __vitePreload(() => import("./blogData-BFibPc0d.js"), true ? [] : void 0).then(setBlogModule);
  }, []);
  const post = (blogModule == null ? void 0 : blogModule.getBlogPostBySlug(slug)) ?? null;
  const allPosts = (blogModule == null ? void 0 : blogModule.blogPosts) ?? [];
  return {
    post,
    allPosts,
    isLoaded: blogModule !== null
  };
}
function renderSection(section, index) {
  var _a, _b, _c, _d;
  switch (section.type) {
    case "h2":
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-xl mt-8 mb-3 text-foreground border-l-2 border-neon-purple pl-3", children: section.heading }),
        section.text && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: section.text })
      ] }, index);
    case "h3":
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-base mt-5 mb-2 text-foreground/90", children: section.heading }),
        section.text && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: section.text })
      ] }, index);
    case "p":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        "p",
        {
          className: "text-sm text-muted-foreground leading-relaxed mt-3",
          children: section.text
        },
        index
      );
    case "ul":
      return /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-3 space-y-1.5 pl-1", children: (_a = section.items) == null ? void 0 : _a.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "li",
        {
          className: "flex items-start gap-2 text-sm text-muted-foreground",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1.5 w-1.5 h-1.5 rounded-full bg-neon-purple/60 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "leading-relaxed", children: item })
          ]
        },
        item
      )) }, index);
    case "ol":
      return /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "mt-3 space-y-2 pl-1", children: (_b = section.items) == null ? void 0 : _b.map((item, itemIdx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "li",
        {
          className: "flex items-start gap-3 text-sm text-muted-foreground",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-0.5 w-5 h-5 rounded-full bg-neon-purple/15 border border-neon-purple/30 text-neon-purple text-[10px] font-bold flex items-center justify-center shrink-0", children: itemIdx + 1 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "leading-relaxed", children: item })
          ]
        },
        item
      )) }, index);
    case "table":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "mt-4 overflow-x-auto rounded-xl border border-border/50",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "bg-neon-purple/10 border-b border-border/50", children: (_c = section.headers) == null ? void 0 : _c.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "th",
              {
                className: "px-4 py-2.5 text-left font-semibold text-foreground/80",
                children: h
              },
              h
            )) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: (_d = section.rows) == null ? void 0 : _d.map((row) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "tr",
              {
                className: cn(
                  "border-b border-border/30 transition-colors",
                  "odd:bg-muted/20 even:bg-transparent",
                  "hover:bg-neon-purple/5"
                ),
                children: row.cells.map((cell, ci) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "td",
                  {
                    className: "px-4 py-2.5 text-muted-foreground leading-relaxed",
                    children: ci === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground/80", children: cell }) : cell
                  },
                  cell
                ))
              },
              row.cells[0]
            )) })
          ] })
        },
        index
      );
    case "tip":
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "mt-4 flex gap-3 p-4 rounded-xl bg-neon-amber/10 border border-neon-amber/30",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Lightbulb, { size: 16, className: "text-neon-amber shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground/80 leading-relaxed", children: section.text })
          ]
        },
        index
      );
    case "note":
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "mt-4 flex gap-3 p-4 rounded-xl bg-neon-blue/10 border border-neon-blue/30",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { size: 16, className: "text-neon-blue shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground/80 leading-relaxed", children: section.text })
          ]
        },
        index
      );
    default:
      return null;
  }
}
function RelatedPosts({
  current,
  allPosts
}) {
  const related = allPosts.filter(
    (p) => p.slug !== current.slug && (p.category === current.category || p.classTag === current.classTag)
  ).slice(0, 3);
  if (related.length === 0) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-12 pt-8 border-t border-border/30", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-lg mb-4", children: "Related Articles" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4", children: related.map((post, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Link,
      {
        to: "/blog/$slug",
        params: { slug: post.slug },
        "data-ocid": `blog.related_card.${index + 1}`,
        className: "glass-dark rounded-xl p-4 border border-border/40 hover:border-neon-purple/30 transition-all group",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Badge,
            {
              variant: "outline",
              className: "text-[9px] px-2 py-0.5 mb-2 border-border/50 text-muted-foreground",
              children: post.classTag
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold leading-snug group-hover:text-neon-purple transition-colors line-clamp-2", children: post.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-muted-foreground mt-1 flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 9 }),
            post.readTime,
            " min read"
          ] })
        ]
      },
      post.slug
    )) })
  ] });
}
function ArticleSchema({ post }) {
  reactExports.useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.metaTitle,
      description: post.metaDescription,
      author: {
        "@type": "Organization",
        name: "NCERT Bhaiya",
        url: "https://ncertbhaiya-8d1.caffeine.xyz"
      },
      publisher: {
        "@type": "Organization",
        name: "NCERT Bhaiya",
        url: "https://ncertbhaiya-8d1.caffeine.xyz"
      },
      datePublished: post.publishedAt,
      dateModified: post.publishedAt,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `https://ncertbhaiya-8d1.caffeine.xyz/blog/${post.slug}`
      },
      keywords: post.keywords.join(", ")
    };
    const existing = document.querySelector('script[data-schema="article"]');
    if (existing) existing.remove();
    const el = document.createElement("script");
    el.type = "application/ld+json";
    el.setAttribute("data-schema", "article");
    el.textContent = JSON.stringify(schema);
    document.head.appendChild(el);
    return () => {
      var _a;
      (_a = document.querySelector('script[data-schema="article"]')) == null ? void 0 : _a.remove();
    };
  }, [post]);
  return null;
}
function BlogPostSkeleton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "max-w-[780px] mx-auto px-4 py-8 lg:py-12",
      "data-ocid": "blog.loading_state",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 w-40 bg-muted/30 rounded animate-pulse mb-6" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 w-24 bg-muted/30 rounded animate-pulse" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-full bg-muted/40 rounded animate-pulse" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-3/4 bg-muted/30 rounded animate-pulse" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 w-full bg-muted/20 rounded animate-pulse mt-2" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: Array.from({ length: 6 }, (_, i) => `sk-${i}`).map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "h-4 bg-muted/20 rounded animate-pulse w-3/4"
          },
          k
        )) })
      ]
    }
  );
}
function useBlogXP(slug, isLoaded) {
  const { profile } = useUserProfileContext();
  const { mutate: submitQuiz } = useSubmitQuiz();
  const readTimerRef = reactExports.useRef(null);
  const milestonesHitRef = reactExports.useRef(/* @__PURE__ */ new Set());
  reactExports.useEffect(() => {
    if (!isLoaded || !profile) return;
    const key = `blog_read_${slug}`;
    if (localStorage.getItem(key)) return;
    readTimerRef.current = setTimeout(() => {
      submitQuiz(
        { topicId: "0", score: 2 },
        {
          onSuccess: () => {
            localStorage.setItem(key, "1");
            ue.success("+20 XP — Thanks for reading!", {
              icon: "📚",
              duration: 3e3
            });
          },
          onError: () => {
            localStorage.setItem(key, "1");
          }
        }
      );
    }, 3e4);
    return () => {
      if (readTimerRef.current) clearTimeout(readTimerRef.current);
    };
  }, [isLoaded, profile, slug, submitQuiz]);
  reactExports.useEffect(() => {
    if (!isLoaded || !profile) return;
    const scrollKey = `blog_scroll_xp_${slug}`;
    const alreadyHit = Number(sessionStorage.getItem(scrollKey) ?? "0");
    milestonesHitRef.current = new Set(
      Array.from({ length: alreadyHit }, (_, i) => i)
    );
    const sentinels = document.querySelectorAll("[data-blog-milestone]");
    if (!sentinels.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const idx = Number(
            entry.target.dataset.blogMilestone
          );
          if (milestonesHitRef.current.has(idx)) continue;
          milestonesHitRef.current.add(idx);
          sessionStorage.setItem(
            scrollKey,
            String(milestonesHitRef.current.size)
          );
          ue.success("+5 XP earned for reading!", {
            icon: "⭐",
            duration: 2e3
          });
        }
      },
      { threshold: 0.5 }
    );
    for (const s of Array.from(sentinels)) {
      observer.observe(s);
    }
    return () => observer.disconnect();
  }, [isLoaded, profile, slug]);
}
function BlogPost() {
  const { slug } = useParams({ from: "/protected/blog/$slug" });
  const { post, allPosts, isLoaded } = useBlogPost(slug);
  useBlogXP(slug, isLoaded && !!post);
  useSEO(
    post ? {
      title: post.metaTitle,
      description: post.metaDescription,
      keywords: post.keywords.join(", "),
      canonical: `/blog/${post.slug}`
    } : isLoaded ? {
      title: "Article Not Found | NCERT Bhaiya",
      description: "This article could not be found."
    } : {
      title: "Loading Article | NCERT Bhaiya",
      description: "Loading article content..."
    }
  );
  if (!isLoaded) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(BlogPostSkeleton, {}) });
  }
  if (!post) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        "data-ocid": "blog.error_state",
        className: "max-w-2xl mx-auto px-4 py-20 text-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { size: 40, className: "mx-auto mb-4 opacity-40" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-2xl mb-2", children: "Article Not Found" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mb-6", children: "This article doesn't exist or may have been moved." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/blog", "data-ocid": "blog.back_button", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", className: "gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 14 }),
            "Back to Blog"
          ] }) })
        ]
      }
    ) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ArticleSchema, { post }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[780px] mx-auto px-4 py-8 lg:py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "nav",
        {
          "aria-label": "Breadcrumb",
          className: "flex items-center gap-1.5 text-[11px] text-muted-foreground mb-6",
          "data-ocid": "blog.breadcrumb",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/",
                "data-ocid": "blog.home_link",
                className: "flex items-center gap-1 hover:text-foreground transition-colors",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(House, { size: 10 }),
                  "Home"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 10 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/blog",
                "data-ocid": "blog.blog_link",
                className: "hover:text-foreground transition-colors",
                children: "Blog"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 10 }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-foreground/60 truncate max-w-[200px]", children: [
              post.classTag,
              " — ",
              post.subject
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3 flex-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold px-2.5 py-1 rounded-full bg-neon-purple/15 border border-neon-purple/30 text-neon-purple", children: post.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Badge,
            {
              variant: "outline",
              className: "text-[10px] px-2.5 py-1 border-border/50 text-muted-foreground",
              children: post.classTag
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Badge,
            {
              variant: "outline",
              className: "text-[10px] px-2.5 py-1 border-border/50 text-muted-foreground",
              children: post.subject
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h1",
          {
            "data-ocid": "blog.post_h1",
            className: "font-display font-bold text-2xl lg:text-3xl leading-snug mb-4",
            children: post.title
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed mb-4", children: post.excerpt }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 text-xs text-muted-foreground pt-4 border-t border-border/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { size: 12 }),
            "NCERT Bhaiya Editorial"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 12 }),
            new Date(post.publishedAt).toLocaleDateString("en-IN", {
              day: "numeric",
              month: "long",
              year: "numeric"
            })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 12 }),
            post.readTime,
            " min read"
          ] })
        ] })
      ] }),
      post.heroImage && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl overflow-hidden mb-6 border border-border/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: post.heroImage,
          alt: post.title,
          className: "w-full h-48 lg:h-64 object-cover",
          loading: "lazy"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("article", { "data-ocid": "blog.article_content", className: "prose-custom", children: post.content.map((section, i) => {
        const total = post.content.length;
        const milestone33 = Math.floor(total * 0.33);
        const milestone66 = Math.floor(total * 0.66);
        const milestone100 = total - 1;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          renderSection(section, i),
          i === milestone33 && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              "data-blog-milestone": "0",
              "aria-hidden": "true",
              className: "h-0 overflow-hidden"
            }
          ),
          i === milestone66 && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              "data-blog-milestone": "1",
              "aria-hidden": "true",
              className: "h-0 overflow-hidden"
            }
          ),
          i === milestone100 && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              "data-blog-milestone": "2",
              "aria-hidden": "true",
              className: "h-0 overflow-hidden"
            }
          )
        ] }, `section-${section.type}-${i}`);
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 p-5 glass-dark rounded-2xl border border-neon-purple/20 bg-gradient-to-r from-neon-purple/10 to-neon-blue/10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-base mb-1", children: "Practice this topic with MCQ Quiz & Flashcards" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-3", children: "Reinforce what you just read with free quizzes and flashcards on NCERT Bhaiya." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/ncert", "data-ocid": "blog.ncert_cta_link", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              className: "bg-gradient-to-r from-neon-purple to-neon-blue text-white hover:opacity-90 gap-1.5 rounded-lg text-xs",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { size: 12 }),
                "Browse NCERT"
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/blog", "data-ocid": "blog.back_to_blog_link", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "outline",
              size: "sm",
              className: "gap-1.5 rounded-lg text-xs border-border/50",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 12 }),
                "More Articles"
              ]
            }
          ) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(RelatedPosts, { current: post, allPosts })
    ] })
  ] });
}
export {
  BlogPost as default
};
