import { j as jsxRuntimeExports, m as motion, B as BookOpen, L as Link, d as Button } from "./index-C7lj-2mW.js";
import { B as Badge } from "./badge-C2C94TSP.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-CECr4Rmk.js";
import { N as NavBar, M as MessageCircle } from "./NavBar-CfOo71OI.js";
import { U as Users } from "./users-D-cjPlUs.js";
import { F as FlaskConical } from "./flask-conical-03q95LpV.js";
import "./house-DO1Ap8bw.js";
import "./trophy-DYK9YNrL.js";
import "./circle-user-CC1vfEO5.js";
const rooms = [
  {
    id: "class-1",
    label: "Class 1",
    desc: "Primary level — numbers, alphabets, EVS",
    color: "from-pink-500/20 to-rose-500/10",
    border: "border-pink-500/30",
    badge: "bg-pink-500/20 text-pink-300"
  },
  {
    id: "class-2",
    label: "Class 2",
    desc: "Numbers, rhymes, general knowledge",
    color: "from-orange-500/20 to-amber-500/10",
    border: "border-orange-500/30",
    badge: "bg-orange-500/20 text-orange-300"
  },
  {
    id: "class-3",
    label: "Class 3",
    desc: "Maths, EVS, language basics",
    color: "from-yellow-500/20 to-amber-500/10",
    border: "border-yellow-500/30",
    badge: "bg-yellow-500/20 text-yellow-300"
  },
  {
    id: "class-4",
    label: "Class 4",
    desc: "Fractions, science, social studies",
    color: "from-lime-500/20 to-green-500/10",
    border: "border-lime-500/30",
    badge: "bg-lime-500/20 text-lime-300"
  },
  {
    id: "class-5",
    label: "Class 5",
    desc: "EVS, maths, grammar fundamentals",
    color: "from-green-500/20 to-teal-500/10",
    border: "border-green-500/30",
    badge: "bg-green-500/20 text-green-300"
  },
  {
    id: "class-6",
    label: "Class 6",
    desc: "History, science, algebra basics",
    color: "from-teal-500/20 to-cyan-500/10",
    border: "border-teal-500/30",
    badge: "bg-teal-500/20 text-teal-300"
  },
  {
    id: "class-7",
    label: "Class 7",
    desc: "Geography, biology, decimals",
    color: "from-cyan-500/20 to-sky-500/10",
    border: "border-cyan-500/30",
    badge: "bg-cyan-500/20 text-cyan-300"
  },
  {
    id: "class-8",
    label: "Class 8",
    desc: "Civics, physics intro, linear equations",
    color: "from-sky-500/20 to-blue-500/10",
    border: "border-sky-500/30",
    badge: "bg-sky-500/20 text-sky-300"
  },
  {
    id: "class-9",
    label: "Class 9",
    desc: "Coordinate geometry, laws of motion",
    color: "from-blue-500/20 to-indigo-500/10",
    border: "border-blue-500/30",
    badge: "bg-blue-500/20 text-blue-300"
  },
  {
    id: "class-10",
    label: "Class 10",
    desc: "Board exam prep — all subjects",
    color: "from-indigo-500/20 to-violet-500/10",
    border: "border-indigo-500/30",
    badge: "bg-indigo-500/20 text-indigo-300"
  },
  {
    id: "class-11",
    label: "Class 11",
    desc: "Physics, chemistry, maths deep dive",
    color: "from-violet-500/20 to-purple-500/10",
    border: "border-violet-500/30",
    badge: "bg-violet-500/20 text-violet-300"
  },
  {
    id: "class-12",
    label: "Class 12",
    desc: "Board + entrance exam strategy",
    color: "from-purple-500/20 to-fuchsia-500/10",
    border: "border-purple-500/30",
    badge: "bg-purple-500/20 text-purple-300"
  },
  {
    id: "iit-jee",
    label: "IIT JEE",
    desc: "Advanced Physics, Chemistry & Maths",
    color: "from-neon-purple/20 to-neon-blue/10",
    border: "border-neon-purple/40",
    badge: "bg-neon-purple/20 text-neon-purple",
    isSpecial: true
  }
];
function Community() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(NavBar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "max-w-6xl mx-auto px-4 py-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: -16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.4 },
          className: "mb-10 text-center",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { size: 15 }),
              "Live Community Chat"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-3", children: "Class Chat Rooms" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-xl mx-auto text-sm md:text-base", children: "Join your class chat room, ask doubts, share notes, and connect with fellow students. Upload images and audio clips too!" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4", children: rooms.map((room, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.3, delay: i * 0.04 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Card,
            {
              className: `group relative overflow-hidden bg-gradient-to-br ${room.color} border ${room.border} hover:scale-[1.02] transition-all duration-200 cursor-pointer h-full`,
              "data-ocid": `community.item.${i + 1}`,
              children: [
                room.isSpecial && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-2 right-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-neon-purple/30 text-neon-purple border-neon-purple/40 text-[10px]", children: "Special" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "pb-2 pt-4 px-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
                    room.isSpecial ? /* @__PURE__ */ jsxRuntimeExports.jsx(FlaskConical, { size: 18, className: "text-neon-purple" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { size: 18, className: "text-foreground/60" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: `text-xs font-semibold px-2 py-0.5 rounded-full ${room.badge}`,
                        children: room.label
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-base font-bold text-foreground", children: [
                    room.label,
                    " Chat"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "px-4 pb-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-4 leading-relaxed", children: room.desc }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/community/$roomId", params: { roomId: room.id }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      size: "sm",
                      "data-ocid": `community.join_button.${i + 1}`,
                      className: "w-full gap-2 bg-background/60 hover:bg-primary/20 border border-border/60 hover:border-primary/40 text-foreground hover:text-primary transition-all text-xs h-8",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { size: 13 }),
                        "Join Chat"
                      ]
                    }
                  ) })
                ] })
              ]
            }
          )
        },
        room.id
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { delay: 0.6 },
          className: "mt-8 p-4 rounded-xl border border-border/40 bg-muted/20 text-center text-xs text-muted-foreground",
          children: "💡 Keep chats respectful and educational. Share notes, ask questions, and help each other grow!"
        }
      )
    ] })
  ] });
}
export {
  Community as default
};
