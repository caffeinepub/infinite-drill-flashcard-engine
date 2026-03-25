import { j as jsxRuntimeExports, r as reactExports, d as useAuth, c as useQueryClient, b as ue } from "./index-Bbq5rxHW.js";
import { B as Badge } from "./badge-65w9gLN3.js";
import { u as useComposedRefs, B as Button } from "./button-D9R7ixeo.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-DalleVL2.js";
import { P as Primitive, I as Input } from "./index-AMXmT8eK.js";
import { L as Label } from "./label-B6YIeAGT.js";
import { c as createLucideIcon, a as cn } from "./createLucideIcon-DMUEz8Md.js";
import { u as useLayoutEffect2, c as createContextScope, a as composeEventHandlers } from "./index-Cl4uh61l.js";
import { u as useControllableState, T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-Dz8_jQ5S.js";
import { T as Textarea } from "./textarea-DN3fcBkX.js";
import { u as useActor, a as useQuery } from "./useActor-DDAPfcaH.js";
import { u as useMutation } from "./useMutation-BIrhbvgh.js";
import { u as useAdminRole, L as Layout, S as Shield, Z as Zap } from "./Layout-Btdmc4YK.js";
import { u as useSEO } from "./useSEO-COHw2mGd.js";
import { L as LoaderCircle } from "./loader-circle-CIph7jkB.js";
import { C as Crown } from "./crown-BxjP8B-5.js";
import { U as Users } from "./users-CW9qX6xB.js";
import { L as Lightbulb } from "./lightbulb-CWX-qBuo.js";
import "./house-Ca4o7RoR.js";
import "./flask-conical-DoEwdfHt.js";
import "./trophy-34qCknLe.js";
import "./circle-user-DflwE9M_.js";
import "./log-in-Cfhlx4uJ.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$5 = [
  [
    "path",
    {
      d: "M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",
      key: "1s6t7t"
    }
  ],
  ["circle", { cx: "16.5", cy: "7.5", r: ".5", fill: "currentColor", key: "w0ekpg" }]
];
const KeyRound = createLucideIcon("key-round", __iconNode$5);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$4 = [
  ["rect", { width: "7", height: "9", x: "3", y: "3", rx: "1", key: "10lvy0" }],
  ["rect", { width: "7", height: "5", x: "14", y: "3", rx: "1", key: "16une8" }],
  ["rect", { width: "7", height: "9", x: "14", y: "12", rx: "1", key: "1hutg5" }],
  ["rect", { width: "7", height: "5", x: "3", y: "16", rx: "1", key: "ldoo1y" }]
];
const LayoutDashboard = createLucideIcon("layout-dashboard", __iconNode$4);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
];
const Lock = createLucideIcon("lock", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "m3 11 18-5v12L3 14v-3z", key: "n962bs" }],
  ["path", { d: "M11.6 16.8a3 3 0 1 1-5.8-1.6", key: "1yl0tm" }]
];
const Megaphone = createLucideIcon("megaphone", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
      key: "1qme2f"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
];
const Settings = createLucideIcon("settings", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
      key: "cbrjhi"
    }
  ]
];
const Wrench = createLucideIcon("wrench", __iconNode);
function Skeleton({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "skeleton",
      className: cn("bg-accent animate-pulse rounded-md", className),
      ...props
    }
  );
}
function usePrevious(value) {
  const ref = reactExports.useRef({ value, previous: value });
  return reactExports.useMemo(() => {
    if (ref.current.value !== value) {
      ref.current.previous = ref.current.value;
      ref.current.value = value;
    }
    return ref.current.previous;
  }, [value]);
}
function useSize(element) {
  const [size, setSize] = reactExports.useState(void 0);
  useLayoutEffect2(() => {
    if (element) {
      setSize({ width: element.offsetWidth, height: element.offsetHeight });
      const resizeObserver = new ResizeObserver((entries) => {
        if (!Array.isArray(entries)) {
          return;
        }
        if (!entries.length) {
          return;
        }
        const entry = entries[0];
        let width;
        let height;
        if ("borderBoxSize" in entry) {
          const borderSizeEntry = entry["borderBoxSize"];
          const borderSize = Array.isArray(borderSizeEntry) ? borderSizeEntry[0] : borderSizeEntry;
          width = borderSize["inlineSize"];
          height = borderSize["blockSize"];
        } else {
          width = element.offsetWidth;
          height = element.offsetHeight;
        }
        setSize({ width, height });
      });
      resizeObserver.observe(element, { box: "border-box" });
      return () => resizeObserver.unobserve(element);
    } else {
      setSize(void 0);
    }
  }, [element]);
  return size;
}
var SWITCH_NAME = "Switch";
var [createSwitchContext] = createContextScope(SWITCH_NAME);
var [SwitchProvider, useSwitchContext] = createSwitchContext(SWITCH_NAME);
var Switch$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeSwitch,
      name,
      checked: checkedProp,
      defaultChecked,
      required,
      disabled,
      value = "on",
      onCheckedChange,
      form,
      ...switchProps
    } = props;
    const [button, setButton] = reactExports.useState(null);
    const composedRefs = useComposedRefs(forwardedRef, (node) => setButton(node));
    const hasConsumerStoppedPropagationRef = reactExports.useRef(false);
    const isFormControl = button ? form || !!button.closest("form") : true;
    const [checked, setChecked] = useControllableState({
      prop: checkedProp,
      defaultProp: defaultChecked ?? false,
      onChange: onCheckedChange,
      caller: SWITCH_NAME
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(SwitchProvider, { scope: __scopeSwitch, checked, disabled, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Primitive.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": checked,
          "aria-required": required,
          "data-state": getState(checked),
          "data-disabled": disabled ? "" : void 0,
          disabled,
          value,
          ...switchProps,
          ref: composedRefs,
          onClick: composeEventHandlers(props.onClick, (event) => {
            setChecked((prevChecked) => !prevChecked);
            if (isFormControl) {
              hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
              if (!hasConsumerStoppedPropagationRef.current) event.stopPropagation();
            }
          })
        }
      ),
      isFormControl && /* @__PURE__ */ jsxRuntimeExports.jsx(
        SwitchBubbleInput,
        {
          control: button,
          bubbles: !hasConsumerStoppedPropagationRef.current,
          name,
          value,
          checked,
          required,
          disabled,
          form,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
Switch$1.displayName = SWITCH_NAME;
var THUMB_NAME = "SwitchThumb";
var SwitchThumb = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSwitch, ...thumbProps } = props;
    const context = useSwitchContext(THUMB_NAME, __scopeSwitch);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.span,
      {
        "data-state": getState(context.checked),
        "data-disabled": context.disabled ? "" : void 0,
        ...thumbProps,
        ref: forwardedRef
      }
    );
  }
);
SwitchThumb.displayName = THUMB_NAME;
var BUBBLE_INPUT_NAME = "SwitchBubbleInput";
var SwitchBubbleInput = reactExports.forwardRef(
  ({
    __scopeSwitch,
    control,
    checked,
    bubbles = true,
    ...props
  }, forwardedRef) => {
    const ref = reactExports.useRef(null);
    const composedRefs = useComposedRefs(ref, forwardedRef);
    const prevChecked = usePrevious(checked);
    const controlSize = useSize(control);
    reactExports.useEffect(() => {
      const input = ref.current;
      if (!input) return;
      const inputProto = window.HTMLInputElement.prototype;
      const descriptor = Object.getOwnPropertyDescriptor(
        inputProto,
        "checked"
      );
      const setChecked = descriptor.set;
      if (prevChecked !== checked && setChecked) {
        const event = new Event("click", { bubbles });
        setChecked.call(input, checked);
        input.dispatchEvent(event);
      }
    }, [prevChecked, checked, bubbles]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type: "checkbox",
        "aria-hidden": true,
        defaultChecked: checked,
        ...props,
        tabIndex: -1,
        ref: composedRefs,
        style: {
          ...props.style,
          ...controlSize,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }
    );
  }
);
SwitchBubbleInput.displayName = BUBBLE_INPUT_NAME;
function getState(checked) {
  return checked ? "checked" : "unchecked";
}
var Root = Switch$1;
var Thumb = SwitchThumb;
function Switch({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Root,
    {
      "data-slot": "switch",
      className: cn(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Thumb,
        {
          "data-slot": "switch-thumb",
          className: cn(
            "bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0"
          )
        }
      )
    }
  );
}
function Table({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "table-container",
      className: "relative w-full overflow-x-auto",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "table",
        {
          "data-slot": "table",
          className: cn("w-full caption-bottom text-sm", className),
          ...props
        }
      )
    }
  );
}
function TableHeader({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "thead",
    {
      "data-slot": "table-header",
      className: cn("[&_tr]:border-b", className),
      ...props
    }
  );
}
function TableBody({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "tbody",
    {
      "data-slot": "table-body",
      className: cn("[&_tr:last-child]:border-0", className),
      ...props
    }
  );
}
function TableRow({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "tr",
    {
      "data-slot": "table-row",
      className: cn(
        "hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",
        className
      ),
      ...props
    }
  );
}
function TableHead({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "th",
    {
      "data-slot": "table-head",
      className: cn(
        "text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      ),
      ...props
    }
  );
}
function TableCell({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "td",
    {
      "data-slot": "table-cell",
      className: cn(
        "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      ),
      ...props
    }
  );
}
function asAdmin(actor) {
  return actor;
}
function RoleBadge({ role }) {
  if (role === "admin") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-amber-500/15 text-amber-400 border-amber-500/30 text-[11px] font-semibold gap-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Crown, { size: 10 }),
      " Admin"
    ] });
  }
  if (role === "operator") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-blue-500/15 text-blue-400 border-blue-500/30 text-[11px] font-semibold gap-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Wrench, { size: 10 }),
      " Operator"
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", className: "text-[11px] gap-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { size: 10 }),
    " User"
  ] });
}
function ClaimAdminSection() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  const [secret, setSecret] = reactExports.useState("");
  const [showSecret, setShowSecret] = reactExports.useState(false);
  const claimMutation = useMutation({
    mutationFn: async () => {
      if (!actor) throw new Error("Not connected");
      await asAdmin(actor)._initializeAccessControlWithSecret(secret);
    },
    onSuccess: () => {
      ue.success("Admin access granted! Refreshing...");
      queryClient.invalidateQueries({ queryKey: ["userRole"] });
      setSecret("");
      setTimeout(() => window.location.reload(), 1200);
    },
    onError: (err) => {
      const msg = err instanceof Error ? err.message : String(err);
      if (msg.includes("already") || msg.includes("adminAssigned")) {
        ue.error("An admin already exists. Contact the current admin.");
      } else if (msg.includes("token") || msg.includes("secret") || msg.includes("Unauthorized")) {
        ue.error("Incorrect token. Check your Caffeine dashboard.");
      } else {
        ue.error("Failed to claim admin. Check your token and try again.");
      }
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md w-full mx-auto mt-6 p-6 rounded-2xl border border-amber-500/30 bg-amber-500/5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(KeyRound, { size: 20, className: "text-amber-400" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-bold text-foreground", children: "Claim Admin Access" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "First-time setup only" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mb-4", children: [
      "Enter your",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Caffeine Admin Token" }),
      " to become the site admin. Find it in your",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "https://caffeine.ai",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "text-blue-400 hover:underline",
          children: "Caffeine dashboard"
        }
      ),
      " ",
      "under project settings."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Label,
          {
            htmlFor: "admin-secret",
            className: "text-sm font-medium text-foreground/80",
            children: "Admin Token"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "admin-secret",
              type: showSecret ? "text" : "password",
              value: secret,
              onChange: (e) => setSecret(e.target.value),
              placeholder: "Paste your admin token here",
              "data-ocid": "admin.claim.input",
              className: "bg-background/50 border-border/50 h-10 pr-20",
              disabled: claimMutation.isPending
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setShowSecret((s) => !s),
              className: "absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground hover:text-foreground transition-colors",
              tabIndex: -1,
              children: showSecret ? "Hide" : "Show"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          onClick: () => claimMutation.mutate(),
          disabled: !secret.trim() || claimMutation.isPending,
          "data-ocid": "admin.claim.submit_button",
          className: "w-full bg-amber-500/80 hover:bg-amber-500 text-background font-bold border-0",
          children: claimMutation.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { size: 15, className: "animate-spin" }),
            " Claiming..."
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(KeyRound, { size: 15 }),
            " Claim Admin"
          ] })
        }
      )
    ] })
  ] });
}
function DashboardTab() {
  const { actor } = useActor();
  const { data: stats, isLoading } = useQuery({
    queryKey: ["adminStats"],
    queryFn: async () => {
      if (!actor) return null;
      const result = await asAdmin(actor).getAdminStats();
      return result;
    },
    enabled: !!actor,
    staleTime: 1e3 * 30
  });
  const statCards = [
    {
      label: "Total Users",
      value: stats == null ? void 0 : stats.totalUsers,
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { size: 20 }),
      gradient: "from-purple-500/20 to-purple-600/5",
      border: "border-purple-500/30",
      iconColor: "text-purple-400",
      bg: "bg-purple-500/10"
    },
    {
      label: "Total Admins",
      value: stats == null ? void 0 : stats.totalAdmins,
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Crown, { size: 20 }),
      gradient: "from-amber-500/20 to-amber-600/5",
      border: "border-amber-500/30",
      iconColor: "text-amber-400",
      bg: "bg-amber-500/10"
    },
    {
      label: "Total Operators",
      value: stats == null ? void 0 : stats.totalOperators,
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Wrench, { size: 20 }),
      gradient: "from-blue-500/20 to-blue-600/5",
      border: "border-blue-500/30",
      iconColor: "text-blue-400",
      bg: "bg-blue-500/10"
    },
    {
      label: "Total XP Earned",
      value: stats == null ? void 0 : stats.totalXP,
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { size: 20 }),
      gradient: "from-green-500/20 to-green-600/5",
      border: "border-green-500/30",
      iconColor: "text-green-400",
      bg: "bg-green-500/10"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold text-foreground mb-1", children: "Site Overview" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Real-time stats from the backend." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
        "data-ocid": "dashboard.panel",
        children: statCards.map((card) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Card,
          {
            className: `border ${card.border} bg-gradient-to-br ${card.gradient} backdrop-blur-sm`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-medium text-muted-foreground", children: card.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: `w-8 h-8 rounded-lg ${card.bg} flex items-center justify-center ${card.iconColor}`,
                    children: card.icon
                  }
                )
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                Skeleton,
                {
                  className: "h-9 w-20",
                  "data-ocid": "dashboard.loading_state"
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-bold text-foreground", children: card.value !== void 0 ? Number(card.value).toLocaleString() : "—" }) })
            ]
          },
          card.label
        ))
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border border-border/30 bg-card/30", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-sm font-medium text-foreground flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { size: 14, className: "text-purple-400" }),
        " Role Hierarchy"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 p-3 rounded-lg bg-amber-500/10 border border-amber-500/20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Crown, { size: 16, className: "text-amber-400 mt-0.5 shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-amber-400", children: "Admin" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Full control — manage all users, assign/remove operators, edit settings, delete accounts." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 p-3 rounded-lg bg-blue-500/10 border border-blue-500/20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Wrench, { size: 16, className: "text-blue-400 mt-0.5 shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-blue-400", children: "Operator" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Content management — edit site settings and announcements. Cannot manage roles or delete users." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 p-3 rounded-lg bg-muted/20 border border-border/20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Users,
            {
              size: 16,
              className: "text-muted-foreground mt-0.5 shrink-0"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-muted-foreground", children: "User" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Standard access — browse content, take quizzes, earn XP, appear on leaderboard." })
          ] })
        ] })
      ] })
    ] })
  ] });
}
function UsersTab({ currentUsername }) {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  const { data: users, isLoading } = useQuery({
    queryKey: ["allUsersWithRoles"],
    queryFn: async () => {
      if (!actor) return [];
      const result = await asAdmin(actor).getAllUsersWithRoles();
      return result;
    },
    enabled: !!actor,
    staleTime: 0
  });
  const makeOperator = useMutation({
    mutationFn: async (targetUsername) => {
      if (!actor) throw new Error("No actor");
      return asAdmin(actor).setUsernameRole(
        currentUsername,
        targetUsername,
        "operator"
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["allUsersWithRoles"] });
      ue.success("User promoted to Operator");
    },
    onError: () => ue.error("Failed to assign operator role")
  });
  const demoteOperator = useMutation({
    mutationFn: async (targetUsername) => {
      if (!actor) throw new Error("No actor");
      return asAdmin(actor).removeUsernameRole(currentUsername, targetUsername);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["allUsersWithRoles"] });
      ue.success("Operator demoted to User");
    },
    onError: () => ue.error("Failed to demote operator")
  });
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-ocid": "users.loading_state", className: "space-y-3", children: [1, 2, 3, 4].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-12 w-full rounded-xl" }, i)) });
  }
  if (!users || users.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        "data-ocid": "users.empty_state",
        className: "flex flex-col items-center justify-center py-20 text-muted-foreground",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { size: 40, className: "mb-3 opacity-30" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "No users found" })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold text-foreground", children: "All Users" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
          users.length,
          " registered ",
          users.length === 1 ? "user" : "users"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", className: "text-xs", children: [
        users.length,
        " total"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border border-border/40 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { "data-ocid": "users.table", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: "border-border/40 hover:bg-transparent bg-card/30", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-muted-foreground font-medium", children: "Full Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-muted-foreground font-medium", children: "Username" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-muted-foreground font-medium hidden md:table-cell", children: "Email" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-muted-foreground font-medium", children: "Role" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-muted-foreground font-medium text-right", children: "Actions" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: users.map((user, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        TableRow,
        {
          "data-ocid": `users.item.${i + 1}`,
          className: "border-border/30 hover:bg-card/30 transition-colors",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-medium text-foreground", children: user.fullName || "—" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { className: "text-muted-foreground text-sm font-mono", children: [
              "@",
              user.username
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-muted-foreground text-sm hidden md:table-cell", children: user.email || "—" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(RoleBadge, { role: user.role }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-right", children: user.role === "admin" ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground italic", children: "Protected" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 justify-end flex-wrap", children: [
              user.role === "user" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "sm",
                  variant: "outline",
                  "data-ocid": `users.secondary_button.${i + 1}`,
                  className: "h-7 text-xs border-blue-500/40 text-blue-400 hover:bg-blue-500/15 hover:text-blue-300",
                  disabled: makeOperator.isPending,
                  onClick: () => makeOperator.mutate(user.username),
                  children: makeOperator.isPending && makeOperator.variables === user.username ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-3 h-3 animate-spin" }) : "Make Operator"
                }
              ),
              user.role === "operator" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "sm",
                  variant: "outline",
                  "data-ocid": `users.edit_button.${i + 1}`,
                  className: "h-7 text-xs border-amber-500/40 text-amber-400 hover:bg-amber-500/15 hover:text-amber-300",
                  disabled: demoteOperator.isPending,
                  onClick: () => demoteOperator.mutate(user.username),
                  children: demoteOperator.isPending && demoteOperator.variables === user.username ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-3 h-3 animate-spin" }) : "Demote"
                }
              )
            ] }) })
          ]
        },
        user.username
      )) })
    ] }) })
  ] });
}
function SettingsTab() {
  const { actor } = useActor();
  const { data: settings, isLoading } = useQuery({
    queryKey: ["siteSettings"],
    queryFn: async () => {
      if (!actor) return null;
      const result = await asAdmin(actor).getSiteSettings();
      return result ?? null;
    },
    enabled: !!actor
  });
  const [announcement, setAnnouncement] = reactExports.useState("");
  const [announcementEnabled, setAnnouncementEnabled] = reactExports.useState(false);
  const [featuredMessage, setFeaturedMessage] = reactExports.useState("");
  const [initialized, setInitialized] = reactExports.useState(false);
  if (settings && !initialized) {
    setAnnouncement(settings.announcement);
    setAnnouncementEnabled(settings.announcementEnabled);
    setFeaturedMessage(settings.featuredMessage);
    setInitialized(true);
  }
  const saveMutation = useMutation({
    mutationFn: async () => {
      if (!actor) throw new Error("No actor");
      return asAdmin(actor).updateSiteSettings(
        announcement,
        announcementEnabled,
        featuredMessage
      );
    },
    onSuccess: () => ue.success("Site settings saved!"),
    onError: () => ue.error("Failed to save settings")
  });
  const formatDate = (ns) => {
    const ms = Number(ns / BigInt(1e6));
    return new Date(ms).toLocaleString();
  };
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-ocid": "settings.loading_state", className: "space-y-4", children: [1, 2, 3].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-24 w-full rounded-xl" }, i)) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold text-foreground", children: "Site Settings" }),
      settings && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-1", children: [
        "Last updated: ",
        formatDate(settings.lastUpdated),
        settings.updatedBy ? ` by ${settings.updatedBy}` : ""
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border border-border/40 bg-card/30", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-base font-semibold text-foreground flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Megaphone, { size: 15, className: "text-purple-400" }),
          " Site Announcement"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: announcementEnabled ? "Enabled" : "Disabled" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Switch,
            {
              "data-ocid": "settings.switch",
              checked: announcementEnabled,
              onCheckedChange: setAnnouncementEnabled
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Textarea,
          {
            "data-ocid": "settings.textarea",
            placeholder: "Enter announcement text shown to all users...",
            value: announcement,
            onChange: (e) => setAnnouncement(e.target.value),
            rows: 3,
            className: "resize-none bg-background/50"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "When enabled, this message will be displayed as a banner to all users across the site." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border border-border/40 bg-card/30", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base font-semibold text-foreground", children: "Featured Message" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            "data-ocid": "settings.input",
            placeholder: "Short message shown on the home page...",
            value: featuredMessage,
            onChange: (e) => setFeaturedMessage(e.target.value),
            className: "bg-background/50"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Appears as a highlighted callout on the homepage." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        "data-ocid": "settings.submit_button",
        onClick: () => saveMutation.mutate(),
        disabled: saveMutation.isPending,
        className: "bg-purple-600/80 hover:bg-purple-600 text-white border-0",
        children: saveMutation.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 mr-2 animate-spin" }),
          " Saving..."
        ] }) : "Save Settings"
      }
    ),
    saveMutation.isSuccess && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "data-ocid": "settings.success_state",
        className: "text-sm text-green-400 flex items-center gap-2",
        children: "✓ Settings saved successfully."
      }
    )
  ] });
}
function AnnouncementsTab() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  const { data: settings } = useQuery({
    queryKey: ["siteSettings"],
    queryFn: async () => {
      if (!actor) return null;
      const result = await asAdmin(actor).getSiteSettings();
      return result ?? null;
    },
    enabled: !!actor
  });
  const toggleMutation = useMutation({
    mutationFn: async (enabled) => {
      if (!actor || !settings) throw new Error("No actor or settings");
      return asAdmin(actor).updateSiteSettings(
        settings.announcement,
        enabled,
        settings.featuredMessage
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["siteSettings"] });
      ue.success("Announcement updated!");
    },
    onError: () => ue.error("Failed to toggle announcement")
  });
  const isEnabled = (settings == null ? void 0 : settings.announcementEnabled) ?? false;
  const announcementText = (settings == null ? void 0 : settings.announcement) ?? "";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold text-foreground", children: "Announcement Management" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Control what users see at the top of every page." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border border-border/40 bg-card/30", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base font-semibold text-foreground", children: "Quick Toggle" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: `text-xs font-semibold ${isEnabled ? "text-green-400" : "text-muted-foreground"}`,
              children: isEnabled ? "● Live" : "○ Paused"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Switch,
            {
              "data-ocid": "announcements.switch",
              checked: isEnabled,
              disabled: !settings || toggleMutation.isPending,
              onCheckedChange: (val) => toggleMutation.mutate(val)
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Toggle the announcement on or off instantly without editing the full settings form." }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-medium text-foreground", children: "Live Preview" }),
      announcementText ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: `p-4 rounded-xl border text-sm transition-all ${isEnabled ? "bg-purple-500/15 border-purple-500/30 text-purple-200" : "bg-muted/20 border-border/30 text-muted-foreground line-through opacity-50"}`,
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Megaphone, { size: 14, className: "mt-0.5 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: announcementText })
          ] })
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 rounded-xl border border-border/30 bg-muted/10 text-muted-foreground text-sm text-center", children: "No announcement set. Go to Site Settings to write one." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border border-amber-500/20 bg-amber-500/5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-sm font-semibold text-amber-400 flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Lightbulb, { size: 14 }),
        " Tips for Writing Good Announcements"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 text-xs text-muted-foreground list-none", children: [
        "Keep it under 120 characters — students read on mobile.",
        'Use action words: "New MCQs added!", "Quiz updated!", "Holiday schedule"',
        "Be specific: mention the class or subject affected.",
        "Avoid capslock — it reads as shouting and reduces trust.",
        "Disable when not needed — overuse causes users to ignore banners."
      ].map((tip) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-400 mt-0.5", children: "•" }),
        tip
      ] }, tip)) }) })
    ] })
  ] });
}
function AdminPanel() {
  useSEO({
    title: "Admin Panel | NCERT Bhaiya",
    description: "Administrative control panel for NCERT Bhaiya site management."
  });
  const { user } = useAuth();
  const { isAdmin, isOperator, loading } = useAdminRole();
  const hasAccess = isAdmin || isOperator;
  if (loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center min-h-[60vh]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-10 h-10 animate-spin text-purple-400" }) }) });
  }
  if (!user) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center min-h-[60vh] gap-4 px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { size: 28, className: "text-red-400" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold text-foreground", children: "Access Denied" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm text-center max-w-sm", children: "You must be logged in to access the admin panel." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          "data-ocid": "admin.login_button",
          onClick: () => {
            window.location.href = "/auth";
          },
          className: "bg-purple-600/80 hover:bg-purple-600 text-white border-0",
          children: "Go to Login"
        }
      )
    ] }) });
  }
  if (!hasAccess) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center min-h-[60vh] gap-4 px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full bg-amber-500/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { size: 28, className: "text-amber-400" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold text-foreground", children: "Admin Setup" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm text-center max-w-sm", children: "No admin has been assigned yet. If you are the site owner, claim admin access below." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ClaimAdminSection, {})
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto px-4 py-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4 mb-8 p-6 rounded-2xl border border-border/30 bg-card/20 backdrop-blur-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: `w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${isAdmin ? "bg-gradient-to-br from-amber-500/30 to-orange-600/20 border border-amber-500/40" : "bg-gradient-to-br from-blue-500/30 to-cyan-600/20 border border-blue-500/40"}`,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Shield,
            {
              size: 24,
              className: isAdmin ? "text-amber-400" : "text-blue-400"
            }
          )
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 flex-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold text-foreground", children: "Admin Panel" }),
          isAdmin ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/15 text-amber-400 border border-amber-500/30", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Crown, { size: 11 }),
            " Admin"
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-500/15 text-blue-400 border border-blue-500/30", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Wrench, { size: 11 }),
            " Operator"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: isAdmin ? "Full control — manage users, roles, and site settings." : "Content management — edit settings and announcements." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground/60 mt-1", children: [
          "Logged in as",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-foreground/70 font-mono", children: [
            "@",
            user.username
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: isAdmin ? "dashboard" : "settings", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        TabsList,
        {
          "data-ocid": "admin.tab",
          className: "mb-6 bg-card/50 border border-border/40 h-auto flex-wrap gap-1 p-1",
          children: [
            isAdmin && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              TabsTrigger,
              {
                value: "dashboard",
                className: "gap-1.5 text-xs sm:text-sm",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutDashboard, { size: 13 }),
                  " Dashboard"
                ]
              }
            ),
            isAdmin && /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "users", className: "gap-1.5 text-xs sm:text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { size: 13 }),
              " Users"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              TabsTrigger,
              {
                value: "settings",
                className: "gap-1.5 text-xs sm:text-sm",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Settings, { size: 13 }),
                  " Settings"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              TabsTrigger,
              {
                value: "announcements",
                className: "gap-1.5 text-xs sm:text-sm",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Megaphone, { size: 13 }),
                  " Announcements"
                ]
              }
            )
          ]
        }
      ),
      isAdmin && /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "dashboard", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DashboardTab, {}) }),
      isAdmin && /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "users", children: /* @__PURE__ */ jsxRuntimeExports.jsx(UsersTab, { currentUsername: user.username }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "settings", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SettingsTab, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "announcements", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnnouncementsTab, {}) })
    ] })
  ] }) });
}
export {
  AdminPanel as default
};
