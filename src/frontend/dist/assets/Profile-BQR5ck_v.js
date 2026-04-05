import { c as createLucideIcon, s as useAuth, h as useActor, r as reactExports, j as jsxRuntimeExports, y as Label, I as Input, d as Button, t as LoaderCircle, L as Link, B as BookOpen, e as Star, f as ue } from "./index-CYzhHhj9.js";
import { C as Card, a as CardHeader, b as CardTitle, d as CardDescription, c as CardContent } from "./card-CfAy9o8I.js";
import { C as CircleUser } from "./circle-user-DxUY-Dvv.js";
import { M as Mail } from "./mail-CgBiQrYu.js";
import { T as Trophy } from "./trophy-DmXejJdg.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8", key: "7n84p3" }]
];
const AtSign = createLucideIcon("at-sign", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const CircleCheck = createLucideIcon("circle-check", __iconNode);
function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function Profile() {
  const { user, loginUser } = useAuth();
  const { actor } = useActor();
  const [fullName, setFullName] = reactExports.useState((user == null ? void 0 : user.fullName) ?? "");
  const [email, setEmail] = reactExports.useState((user == null ? void 0 : user.email) ?? "");
  const [isSaving, setIsSaving] = reactExports.useState(false);
  const [errors, setErrors] = reactExports.useState(
    {}
  );
  if (!user) return null;
  function validate() {
    const errs = {};
    if (!fullName.trim()) errs.fullName = "Full name cannot be empty.";
    if (email && !validateEmail(email))
      errs.email = "Please enter a valid email address.";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }
  async function handleSave(e) {
    e.preventDefault();
    if (!validate()) return;
    setIsSaving(true);
    try {
      if (actor) {
        const result = await actor.updateUserProfile(
          user.username,
          fullName.trim(),
          email.trim()
        );
        if (!result.ok) {
          ue.error(result.message || "Failed to update profile.");
          return;
        }
      }
      loginUser({
        username: user.username,
        fullName: fullName.trim(),
        email: email.trim()
      });
      ue.success("Profile updated successfully!");
    } catch {
      ue.error("Failed to update profile. Please try again.");
    } finally {
      setIsSaving(false);
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "min-h-screen bg-mesh-dark px-4 py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-20 rounded-full bg-gradient-to-br from-neon-purple/30 to-neon-blue/30 border-2 border-neon-purple/40 flex items-center justify-center mb-4 shadow-lg shadow-neon-purple/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl font-bold text-neon-purple select-none", children: (user.fullName || user.username).charAt(0).toUpperCase() }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-display font-bold text-foreground", children: "My Profile" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Manage your NCERT Bhaiya account information" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Card,
      {
        className: "glass-dark border border-border/60 shadow-xl shadow-black/30 mb-6",
        "data-ocid": "profile.card",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "pb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-lg font-semibold text-foreground flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 18, className: "text-neon-purple" }),
              "Account Details"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { className: "text-muted-foreground text-sm", children: "Your username cannot be changed. Update your name or email below." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSave, className: "space-y-5", noValidate: true, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-sm font-medium text-muted-foreground flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(AtSign, { size: 13 }),
                "Username"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "flex items-center h-10 rounded-lg border border-border/50 bg-muted/30 px-3 text-sm text-muted-foreground select-none cursor-not-allowed",
                  "aria-readonly": "true",
                  "data-ocid": "profile.input",
                  children: user.username
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground/60", children: "Usernames are permanent and cannot be changed." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Label,
                {
                  htmlFor: "fullName",
                  className: "text-sm font-medium text-foreground flex items-center gap-1.5",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleUser, { size: 13 }),
                    "Full Name"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "fullName",
                  type: "text",
                  value: fullName,
                  onChange: (e) => {
                    setFullName(e.target.value);
                    if (errors.fullName)
                      setErrors((prev) => ({ ...prev, fullName: void 0 }));
                  },
                  placeholder: "Your full name",
                  autoComplete: "name",
                  className: "bg-muted/20 border-border/60 focus:border-neon-purple/60 focus:ring-neon-purple/20 transition-colors",
                  "data-ocid": "profile.input"
                }
              ),
              errors.fullName && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-xs text-destructive",
                  "data-ocid": "profile.error_state",
                  children: errors.fullName
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Label,
                {
                  htmlFor: "email",
                  className: "text-sm font-medium text-foreground flex items-center gap-1.5",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 13 }),
                    "Email Address"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "email",
                  type: "email",
                  value: email,
                  onChange: (e) => {
                    setEmail(e.target.value);
                    if (errors.email)
                      setErrors((prev) => ({ ...prev, email: void 0 }));
                  },
                  placeholder: "your@email.com",
                  autoComplete: "email",
                  className: "bg-muted/20 border-border/60 focus:border-neon-purple/60 focus:ring-neon-purple/20 transition-colors",
                  "data-ocid": "profile.input"
                }
              ),
              errors.email && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-xs text-destructive",
                  "data-ocid": "profile.error_state",
                  children: errors.email
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "submit",
                disabled: isSaving,
                className: "w-full bg-neon-purple hover:bg-neon-purple/90 text-white font-semibold transition-all shadow-md shadow-neon-purple/20 mt-2",
                "data-ocid": "profile.submit_button",
                children: isSaving ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }),
                  "Saving..."
                ] }) : "Save Changes"
              }
            )
          ] }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-dark rounded-2xl p-5 border border-border/40", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-base font-bold mb-3 text-foreground flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { size: 15, className: "text-neon-purple" }),
          "Your NCERT Bhaiya Account"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-muted-foreground space-y-2 leading-relaxed", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            "Your NCERT Bhaiya account tracks your quiz scores, XP points, and streak across all CBSE classes from Class 1 to Class 12, as well as IIT JEE preparation content. Every quiz you complete and every blog post you read adds XP to your profile, which is reflected on the",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/leaderboard",
                className: "text-primary hover:underline",
                children: "Leaderboard"
              }
            ),
            "."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Your account data is stored securely and permanently on the Internet Computer blockchain — it will never be lost between sessions or site updates." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/leaderboard",
            className: "glass-dark rounded-xl p-4 border border-border/40 hover:border-neon-purple/40 transition-all group",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { size: 14, className: "text-neon-purple" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-foreground", children: "Leaderboard" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "See how your XP ranks against other students." })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/ncert",
            className: "glass-dark rounded-xl p-4 border border-border/40 hover:border-neon-blue/40 transition-all group",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { size: 14, className: "text-neon-blue" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-foreground", children: "NCERT Topics" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Browse all chapters, quizzes and flashcards." })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/blog",
            className: "glass-dark rounded-xl p-4 border border-border/40 hover:border-neon-amber/40 transition-all group",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 14, className: "text-neon-amber" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-foreground", children: "Blog" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Read study guides and earn XP rewards." })
            ]
          }
        )
      ] })
    ] })
  ] }) });
}
export {
  Profile as default
};
