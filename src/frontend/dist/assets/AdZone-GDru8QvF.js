import { r as reactExports, j as jsxRuntimeExports } from "./index-QKb68Tce.js";
import { a as cn } from "./createLucideIcon-Zt4_eHV2.js";
import { X } from "./x-gj4IkMQL.js";
function AdZone({ variant, className }) {
  const [dismissed, setDismissed] = reactExports.useState(false);
  const [canDismiss, setCanDismiss] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (variant === "interstitial") {
      const timer = setTimeout(() => setCanDismiss(true), 3e3);
      return () => clearTimeout(timer);
    }
  }, [variant]);
  if (dismissed) return null;
  if (variant === "leaderboard") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: cn(
          "ad-zone relative flex items-center justify-center rounded-lg overflow-hidden",
          "w-full max-w-[728px] h-[90px] mx-auto",
          className
        ),
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-mono-custom font-medium uppercase tracking-widest text-muted-foreground opacity-60", children: "Advertisement" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground opacity-40", children: "728 × 90" })
        ] })
      }
    );
  }
  if (variant === "rectangle") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: cn(
          "ad-zone relative flex items-center justify-center rounded-lg overflow-hidden",
          "w-[300px] h-[250px]",
          className
        ),
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-mono-custom font-medium uppercase tracking-widest text-muted-foreground opacity-60", children: "Advertisement" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground opacity-40", children: "300 × 250" })
        ] })
      }
    );
  }
  if (variant === "interstitial") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: cn(
          "ad-zone relative flex items-center justify-center rounded-xl overflow-hidden mx-auto",
          "w-full max-w-[600px] h-[200px]",
          className
        ),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-mono-custom font-medium uppercase tracking-widest text-muted-foreground opacity-60", children: "Advertisement" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground opacity-40", children: "600 × 200" })
          ] }),
          canDismiss && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setDismissed(true),
              className: "absolute top-2 right-2 p-1 rounded-full bg-background/80 hover:bg-background text-muted-foreground hover:text-foreground transition-colors",
              "aria-label": "Dismiss ad",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 14 })
            }
          ),
          !canDismiss && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-2 right-2 text-xs text-muted-foreground opacity-60 font-mono-custom", children: "Close in 3s" })
        ]
      }
    );
  }
  return null;
}
export {
  AdZone as A
};
