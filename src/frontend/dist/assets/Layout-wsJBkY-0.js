const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AITeacher-C0LTch_T.js","assets/index-CYzhHhj9.js","assets/index-DsyLN-sL.css","assets/scroll-area-KUCB1R4q.js","assets/x-0JDFfIGT.js","assets/send-BSRMJLpn.js"])))=>i.map(i=>d[i]);
import { j as jsxRuntimeExports, L as Link, r as reactExports, _ as __vitePreload } from "./index-CYzhHhj9.js";
import { N as NavBar } from "./NavBar-C1rYIL8c.js";
const AITeacher = reactExports.lazy(
  () => __vitePreload(() => import("./AITeacher-C0LTch_T.js"), true ? __vite__mapDeps([0,1,2,3,4,5]) : void 0).then((m) => ({ default: m.AITeacher }))
);
function Layout({ children, hideNav = false }) {
  if (hideNav) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-mesh-dark dark:bg-mesh-dark", children });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col dark:bg-mesh-dark bg-mesh-light", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(NavBar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1", children }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "border-t border-border/30 py-6 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1600px] mx-auto space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "nav",
        {
          className: "flex flex-wrap items-center justify-center gap-x-6 gap-y-2",
          "aria-label": "Footer navigation",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/about",
                className: "text-sm text-muted-foreground hover:text-foreground transition-colors hover:underline underline-offset-4",
                "data-ocid": "footer.link",
                children: "About Us"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-border/50 hidden sm:inline", children: "|" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/contact",
                className: "text-sm text-muted-foreground hover:text-foreground transition-colors hover:underline underline-offset-4",
                "data-ocid": "footer.link",
                children: "Contact Us"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-border/50 hidden sm:inline", children: "|" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/privacy-policy",
                className: "text-sm text-muted-foreground hover:text-foreground transition-colors hover:underline underline-offset-4",
                "data-ocid": "footer.link",
                children: "Privacy Policy"
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " NCERT Bhaiya — Your complete study companion"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "ncertbhaiya-8d1.caffeine.xyz")}`,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "hover:text-foreground transition-colors",
            children: "Built with ❤️ using caffeine.ai"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: null, children: /* @__PURE__ */ jsxRuntimeExports.jsx(AITeacher, {}) })
  ] });
}
export {
  Layout as L
};
