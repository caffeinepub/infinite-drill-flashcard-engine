import { c as createLucideIcon, s as useAuth, h as useActor, r as reactExports, j as jsxRuntimeExports, y as Label, I as Input, d as Button, t as LoaderCircle, f as ue } from "./index-DLyQvIg0.js";
import { C as Card, a as CardHeader, b as CardTitle, d as CardDescription, c as CardContent } from "./card-Cbp_hhyP.js";
import { C as CircleUser } from "./circle-user-lGXUCFZ9.js";
import { M as Mail } from "./mail-D6F4FrR9.js";
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "min-h-screen bg-mesh-dark flex items-center justify-center px-4 py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-md", "data-ocid": "profile.card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-20 rounded-full bg-gradient-to-br from-neon-purple/30 to-neon-blue/30 border-2 border-neon-purple/40 flex items-center justify-center mb-4 shadow-lg shadow-neon-purple/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl font-bold text-neon-purple select-none", children: (user.fullName || user.username).charAt(0).toUpperCase() }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-display font-bold text-foreground", children: "My Profile" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Manage your account information" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "glass-dark border border-border/60 shadow-xl shadow-black/30", children: [
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
    ] })
  ] }) });
}
export {
  Profile as default
};
