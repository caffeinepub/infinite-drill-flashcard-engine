import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, y as Label, I as Input, d as Button, f as ue } from "./index-C2oN9xVs.js";
import { T as Textarea } from "./textarea-gkdAtu8V.js";
import { L as Layout } from "./Layout-Bnu_BgSV.js";
import { u as useSEO } from "./useSEO-E7a9pmvJ.js";
import { M as Mail } from "./mail-CyZsUkDv.js";
import { Y as Youtube } from "./youtube-D-y9b4z6.js";
import { S as Send } from "./send-C4Uevjmz.js";
import "./NavBar-Dv2nwU6k.js";
import "./house-BwR4wSbm.js";
import "./flask-conical-DAXbTka2.js";
import "./trophy-BGWpSb1X.js";
import "./circle-user-IpaWucwH.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
];
const MessageSquare = createLucideIcon("message-square", __iconNode);
function Contact() {
  useSEO({
    title: "Contact NCERT Bhaiya | Get Help with NCERT & CBSE",
    description: "Get in touch with NCERT Bhaiya for questions about NCERT solutions, CBSE study material, or platform support. Email us at ncertbhaiya2504@gmail.com.",
    keywords: "contact NCERT Bhaiya, NCERT help, CBSE study help India, contact ncertbhaiya",
    canonical: "/contact"
  });
  const [form, setForm] = reactExports.useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = reactExports.useState(false);
  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setForm({ name: "", email: "", message: "" });
      ue.success("Message sent! We'll get back to you soon.");
    }, 800);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-mesh-dark", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-20 px-6 text-center overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-neon-blue/10 to-transparent pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-2xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neon-blue/30 bg-neon-blue/10 text-neon-blue text-xs font-medium mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "w-3 h-3" }),
          "We'd love to hear from you"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h1",
          {
            className: "text-4xl md:text-5xl font-bold mb-4",
            "data-ocid": "contact.page",
            children: "Contact Us"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Have a question, suggestion, or just want to say hi? Drop us a message below." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pb-20 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto grid md:grid-cols-5 gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2 space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-dark border border-border/30 rounded-2xl p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground", children: "Get In Touch" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-lg bg-neon-purple/15 flex items-center justify-center flex-shrink-0 mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-4 h-4 text-neon-purple" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: "Email" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: "mailto:ncertbhaiya2504@gmail.com",
                    className: "text-sm text-neon-purple hover:underline break-all",
                    "data-ocid": "contact.link",
                    children: "ncertbhaiya2504@gmail.com"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Youtube, { className: "w-4 h-4 text-red-400" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: "YouTube" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: "https://www.youtube.com/@Ncertbhaiya",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "text-sm text-red-400 hover:underline",
                    children: "@Ncertbhaiya"
                  }
                )
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass-dark border border-border/30 rounded-2xl p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground leading-relaxed", children: [
          "For inquiries, contact us at:",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "mailto:ncertbhaiya2504@gmail.com",
              className: "text-neon-purple hover:underline font-medium",
              children: "ncertbhaiya2504@gmail.com"
            }
          )
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-dark border border-border/30 rounded-2xl p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-bold text-xl mb-6", children: "Send a Message" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "form",
          {
            onSubmit: handleSubmit,
            className: "space-y-5",
            "data-ocid": "contact.modal",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "name", children: "Name" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "name",
                    name: "name",
                    placeholder: "Your full name",
                    value: form.name,
                    onChange: handleChange,
                    required: true,
                    className: "bg-background/50",
                    "data-ocid": "contact.input"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "email", children: "Email" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "email",
                    name: "email",
                    type: "email",
                    placeholder: "your@email.com",
                    value: form.email,
                    onChange: handleChange,
                    required: true,
                    className: "bg-background/50",
                    "data-ocid": "contact.input"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "message", children: "Message" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Textarea,
                  {
                    id: "message",
                    name: "message",
                    placeholder: "Write your message here...",
                    value: form.message,
                    onChange: handleChange,
                    required: true,
                    rows: 5,
                    className: "bg-background/50 resize-none",
                    "data-ocid": "contact.textarea"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  type: "submit",
                  disabled: submitting,
                  className: "w-full",
                  "data-ocid": "contact.submit_button",
                  children: submitting ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" }),
                    "Sending..."
                  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-4 h-4" }),
                    "Send Message"
                  ] })
                }
              )
            ]
          }
        )
      ] }) })
    ] }) })
  ] }) });
}
export {
  Contact as default
};
