import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, a as cn, B as BookOpen, _ as __vitePreload, h as useActor, i as useQuery, L as Link, U as User } from "./index-VyNBnJo7.js";
import { B as Badge } from "./badge-TLHvbo0W.js";
import { L as Layout } from "./Layout-BAg3Q5Zp.js";
import { u as useMonotagAd } from "./useMonotagAd--yv2Ztjf.js";
import { u as useSEO } from "./useSEO-BnecrqLu.js";
import { C as Calendar } from "./calendar-D2U2CEBk.js";
import { C as Clock } from "./clock-DA-gpiMH.js";
import "./NavBar-DhLmtET-.js";
import "./house-C24w4l_7.js";
import "./flask-conical-B3tohXym.js";
import "./trophy-CoPUK7qC.js";
import "./circle-user-HrSrZ3wj.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
];
const Search = createLucideIcon("search", __iconNode);
function useBlogData() {
  const [blogModule, setBlogModule] = reactExports.useState(null);
  reactExports.useEffect(() => {
    __vitePreload(() => import("./blogData-nebPDESr.js"), true ? [] : void 0).then(setBlogModule);
  }, []);
  return {
    blogPosts: (blogModule == null ? void 0 : blogModule.blogPosts) ?? [],
    blogCategories: (blogModule == null ? void 0 : blogModule.blogCategories) ?? ["All"],
    isLoaded: blogModule !== null
  };
}
function useDynamicBlogPosts() {
  const { actor, isFetching } = useActor();
  return useQuery({
    queryKey: ["dynamicBlogPosts"],
    queryFn: async () => {
      if (!actor) return [];
      const result = await actor.getAllBlogPosts();
      return result.filter((p) => p.published);
    },
    enabled: !isFetching,
    staleTime: 1e3 * 60
  });
}
const categoryColors = {
  Science: "bg-neon-green/15 text-neon-green border-neon-green/30",
  Mathematics: "bg-neon-blue/15 text-neon-blue border-neon-blue/30",
  "Social Science": "bg-neon-amber/15 text-neon-amber border-neon-amber/30",
  "Study Tips": "bg-neon-purple/15 text-neon-purple border-neon-purple/30"
};
function BlogSkeleton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5",
      "data-ocid": "blog.loading_state",
      children: Array.from({ length: 6 }, (_, i) => `sk-${i}`).map((k) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "glass-dark rounded-2xl p-5 border border-border/50 h-52 animate-pulse",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 w-20 bg-muted/40 rounded mb-3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-5 w-full bg-muted/30 rounded mb-2" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 w-3/4 bg-muted/20 rounded mb-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 bg-muted/15 rounded" })
          ]
        },
        k
      ))
    }
  );
}
function BlogPostCard({ post, index }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Link,
    {
      to: "/blog/$slug",
      params: { slug: post.slug },
      "data-ocid": `blog.post_card.${index + 1}`,
      className: "group glass-dark rounded-2xl p-5 border border-border/50 hover:border-neon-purple/30 hover:shadow-card-glow transition-all duration-200 flex flex-col",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3 flex-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: cn(
                "text-[10px] font-bold px-2 py-0.5 rounded-full border",
                categoryColors[post.category] || "bg-muted/40 text-muted-foreground border-border"
              ),
              children: post.category
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Badge,
            {
              variant: "outline",
              className: "text-[10px] px-2 py-0.5 border-border/50 text-muted-foreground",
              children: post.classTag
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-sm leading-snug mb-2 group-hover:text-neon-purple transition-colors line-clamp-3", children: post.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed line-clamp-3 flex-1 mb-4", children: post.excerpt }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-[10px] text-muted-foreground pt-3 border-t border-border/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 10 }),
            post.readTime,
            " min read"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 10 }),
            new Date(post.publishedAt).toLocaleDateString("en-IN", {
              day: "numeric",
              month: "short",
              year: "numeric"
            })
          ] })
        ] })
      ]
    }
  );
}
function DynamicBlogPostCard({
  post,
  index
}) {
  const date = new Date(Number(post.createdAt) / 1e6);
  const dateStr = date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric"
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Link,
    {
      to: "/blog/$slug",
      params: { slug: `dynamic-${String(post.id)}` },
      "data-ocid": `blog.post_card.${index + 1}`,
      className: "group glass-dark rounded-2xl p-5 border border-neon-purple/20 hover:border-neon-purple/50 hover:shadow-card-glow transition-all duration-200 flex flex-col relative overflow-hidden",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 right-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-bold px-2 py-0.5 rounded-full bg-neon-purple/20 border border-neon-purple/40 text-neon-purple", children: "NEW" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold px-2 py-0.5 rounded-full border bg-neon-purple/15 text-neon-purple border-neon-purple/30", children: "Blog Post" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-sm leading-snug mb-2 group-hover:text-neon-purple transition-colors line-clamp-3 pr-8", children: post.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed line-clamp-3 flex-1 mb-4", children: post.description }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-[10px] text-muted-foreground pt-3 border-t border-border/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(User, { size: 10 }),
            post.authorName || post.authorUsername
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 10 }),
            dateStr
          ] })
        ] })
      ]
    }
  );
}
function Blog() {
  const [search, setSearch] = reactExports.useState("");
  const [activeCategory, setActiveCategory] = reactExports.useState("All");
  const { blogPosts, blogCategories, isLoaded } = useBlogData();
  const { data: dynamicPosts = [] } = useDynamicBlogPosts();
  useMonotagAd();
  useSEO({
    title: "NCERT Blog — Free Study Notes & Chapter Summaries",
    description: "Free NCERT blog with chapter notes, study tips, concept explanations and important questions for Class 6 to 12 CBSE. Covers Science, Maths, Social Science and more.",
    keywords: "NCERT notes blog, CBSE study notes, class 9 science notes, class 10 science notes, NCERT chapter summary, CBSE board exam tips, NCERT important questions",
    canonical: "/blog"
  });
  const filtered = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const q = search.toLowerCase();
    const matchesSearch = !q || post.title.toLowerCase().includes(q) || post.excerpt.toLowerCase().includes(q) || post.classTag.toLowerCase().includes(q) || post.subject.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });
  const filteredDynamic = dynamicPosts.filter((post) => {
    if (activeCategory !== "All") return false;
    const q = search.toLowerCase();
    return !q || post.title.toLowerCase().includes(q) || post.description.toLowerCase().includes(q);
  });
  const totalCount = filteredDynamic.length + filtered.length;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1100px] mx-auto px-4 py-8 lg:py-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-mono-custom text-neon-purple/70 uppercase tracking-widest", children: "NCERT Bhaiya" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "h1",
        {
          "data-ocid": "blog.page_h1",
          className: "font-display text-3xl lg:text-4xl font-bold mb-3",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-purple", children: "Free NCERT" }),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "Study Blog" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm max-w-xl leading-relaxed", children: "Chapter notes, concept explanations, comparison tables, and exam tips — written to help you score high in CBSE. Searchable and free." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3 mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1", "data-ocid": "blog.search_input", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Search,
          {
            size: 14,
            className: "absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            value: search,
            onChange: (e) => setSearch(e.target.value),
            placeholder: "Search chapters, topics, classes...",
            className: "w-full pl-9 pr-4 py-2.5 text-sm bg-muted/40 border border-border/50 rounded-xl placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-neon-purple/40 transition-all"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1.5 flex-wrap", children: blogCategories.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          "data-ocid": "blog.category_tab",
          onClick: () => setActiveCategory(cat),
          className: cn(
            "px-3 py-2 rounded-lg text-xs font-medium border transition-all",
            activeCategory === cat ? "bg-neon-purple/20 border-neon-purple/40 text-neon-purple" : "bg-muted/30 border-border/40 text-muted-foreground hover:text-foreground hover:bg-muted/50"
          ),
          children: cat
        },
        cat
      )) })
    ] }),
    isLoaded && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mb-5 font-mono-custom", children: [
      totalCount,
      " article",
      totalCount !== 1 ? "s" : "",
      " found",
      dynamicPosts.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-2 text-neon-purple/70", children: [
        "· ",
        dynamicPosts.length,
        " new from editors"
      ] })
    ] }),
    !isLoaded && /* @__PURE__ */ jsxRuntimeExports.jsx(BlogSkeleton, {}),
    isLoaded && totalCount === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        "data-ocid": "blog.empty_state",
        className: "text-center py-16 text-muted-foreground",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { size: 32, className: "mx-auto mb-3 opacity-40" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "No articles match your search." })
        ]
      }
    ) : isLoaded ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5", children: [
      filteredDynamic.map((post, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        DynamicBlogPostCard,
        {
          post,
          index
        },
        `dynamic-${String(post.id)}`
      )),
      filtered.map((post, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        BlogPostCard,
        {
          post,
          index: filteredDynamic.length + index
        },
        post.slug
      ))
    ] }) : null
  ] }) });
}
export {
  Blog as default
};
