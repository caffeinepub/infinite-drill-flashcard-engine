import { r as reactExports, j as jsxRuntimeExports, b as ue } from "./index-Byw4S5DT.js";
import { B as Button } from "./button-DkpHnvfj.js";
import { I as Input } from "./index-LxvqYrMU.js";
import { L as Label } from "./label-CQKBJlrb.js";
import { T as Textarea } from "./textarea-C9n5XGec.js";
import { L as Layout } from "./Layout-BTtxtuwS.js";
import { u as useSEO } from "./useSEO-C-sFxTuH.js";
import { c as createLucideIcon } from "./createLucideIcon-qxRjawbb.js";
import { M as Mail } from "./mail-uWVcy7BG.js";
import { Y as Youtube } from "./youtube-ZBynuJ4v.js";
import { S as Send } from "./send-Dj9HNBpk.js";
import "./useActor-BOi-VfDd.js";
import "./house-C-3LkXOU.js";
import "./flask-conical-BU5f2W8A.js";
import "./trophy-cDPC_nl0.js";
import "./circle-user-BAAGSBv3.js";
import "./log-in-Ji1WGegL.js";
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
