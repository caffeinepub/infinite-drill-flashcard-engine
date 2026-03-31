import { b as useUserProfileContext, j as jsxRuntimeExports, m as motion, a as cn, e as Star } from "./index-C7lj-2mW.js";
import { L as Layout } from "./Layout-CNAY9YdH.js";
import { levelColors } from "./demoData-CavBEtvU.js";
import { b as useLeaderboard } from "./useQueries-CYNSHCPE.js";
import { u as useSEO } from "./useSEO-C9pMRvrP.js";
import { T as Trophy } from "./trophy-DYK9YNrL.js";
import { C as Crown } from "./crown-BeUfp45h.js";
import { F as Flame } from "./flame-vj8WdBgT.js";
import { U as Users } from "./users-D-cjPlUs.js";
import "./NavBar-CfOo71OI.js";
import "./house-DO1Ap8bw.js";
import "./flask-conical-03q95LpV.js";
import "./circle-user-CC1vfEO5.js";
import "./useMutation-CnaOvstt.js";
function RankBadge({ rank }) {
  if (rank === 1) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-full bg-neon-amber/20 border border-neon-amber/50 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Crown, { size: 14, className: "text-neon-amber", fill: "currentColor" }) });
  }
  if (rank === 2) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-full bg-gray-400/20 border border-gray-400/40 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-sm text-gray-400", children: "2" }) });
  }
  if (rank === 3) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-full bg-orange-600/20 border border-orange-600/40 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-sm text-orange-600", children: "3" }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-full bg-muted/30 border border-border/40 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-sm text-muted-foreground", children: rank }) });
}
const avatarColors = [
  "from-neon-purple to-neon-blue",
  "from-neon-blue to-neon-green",
  "from-neon-amber to-neon-red",
  "from-neon-green to-neon-blue",
  "from-neon-purple to-neon-amber"
];
function UserAvatar({ username, rank }) {
  var _a;
  const initials = username.split(" ").slice(0, 2).map((w) => w[0] ?? "").join("").toUpperCase().slice(0, 2) || ((_a = username[0]) == null ? void 0 : _a.toUpperCase()) || "?";
  const colorIndex = rank % avatarColors.length;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: cn(
        "w-9 h-9 rounded-full bg-gradient-to-br flex items-center justify-center text-white text-xs font-display font-bold shrink-0",
        avatarColors[colorIndex]
      ),
      children: initials
    }
  );
}
function EmptyLeaderboard() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      "data-ocid": "leaderboard.empty_state",
      className: "flex flex-col items-center justify-center py-16 px-4 text-center",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full bg-neon-amber/10 border border-neon-amber/30 flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { size: 28, className: "text-neon-amber/60" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-lg mb-2 text-foreground", children: "No rankings yet" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm max-w-xs leading-relaxed", children: "Be the first on the leaderboard! Complete a quiz to earn XP and claim the top spot." })
      ]
    }
  );
}
function Leaderboard() {
  useSEO({
    title: "NCERT Bhaiya Leaderboard — Top CBSE Students & XP Rankings",
    description: "See who's topping the NCERT Bhaiya leaderboard! Weekly rankings of top CBSE students by XP earned from MCQ quizzes, flashcards and lessons. Compete, earn points and win rewards on NCERT Bhaiya.",
    keywords: "NCERT Bhaiya leaderboard, CBSE student rankings, NCERT quiz XP leaderboard, best CBSE students, online study competition, gamified CBSE learning, NCERT Bhaiya top students",
    canonical: "/leaderboard"
  });
  const { data: rawData, isLoading } = useLeaderboard();
  const { profile } = useUserProfileContext();
  const displayData = (rawData ?? []).map((user) => ({
    ...user,
    isCurrentUser: !!(profile == null ? void 0 : profile.displayName) && user.username === profile.displayName
  }));
  const hasData = displayData.length > 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-4 py-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.4 },
        className: "mb-8",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { size: 20, className: "text-neon-amber" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-mono-custom text-neon-amber/70 uppercase tracking-widest", children: "Global Rankings" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h1",
            {
              "data-ocid": "leaderboard.page_h1",
              className: "font-display text-3xl font-bold mb-2",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-fire", children: "Leaderboard" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "Top performers ranked by XP. Complete quizzes to earn XP and climb the ranks!" })
        ]
      }
    ),
    hasData && displayData.length >= 2 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.4, delay: 0.1 },
        className: "flex items-end justify-center gap-3 mb-8",
        children: [
          displayData[1] && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(UserAvatar, { username: displayData[1].username, rank: 1 }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-xs", children: displayData[1].username }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-muted-foreground font-mono-custom", children: [
                displayData[1].xp.toLocaleString(),
                " XP"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-16 rounded-t-xl bg-gray-500/20 border border-gray-500/30 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-2xl text-gray-400", children: "2" }) })
          ] }),
          displayData[0] && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(UserAvatar, { username: displayData[0].username, rank: 0 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Crown,
                {
                  size: 14,
                  className: "text-neon-amber absolute -top-2 -right-1",
                  fill: "currentColor"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-sm", children: displayData[0].username }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-neon-amber font-mono-custom font-bold", children: [
                displayData[0].xp.toLocaleString(),
                " XP"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-24 rounded-t-xl bg-neon-amber/15 border border-neon-amber/40 flex items-center justify-center shadow-neon-amber", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Crown,
              {
                size: 24,
                className: "text-neon-amber",
                fill: "currentColor"
              }
            ) })
          ] }),
          displayData[2] && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(UserAvatar, { username: displayData[2].username, rank: 2 }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-xs", children: displayData[2].username }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-muted-foreground font-mono-custom", children: [
                displayData[2].xp.toLocaleString(),
                " XP"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-10 rounded-t-xl bg-orange-600/15 border border-orange-600/30 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-xl text-orange-600", children: "3" }) })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        "data-ocid": "leaderboard.table",
        className: "glass-dark rounded-2xl border border-border/50 overflow-hidden",
        children: [
          hasData && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[auto_1fr_auto_auto] gap-0 text-[10px] font-mono-custom font-semibold uppercase tracking-widest text-muted-foreground/60 px-4 py-2.5 border-b border-border/40", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-8", children: "Rank" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-12", children: "Player" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-right pr-4", children: "XP" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-right", children: "Streak" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border/30", children: isLoading ? (
            // Loading skeleton rows
            Array.from({ length: 5 }, (_, i) => `skel-${i}`).map((k) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                "data-ocid": "leaderboard.loading_state",
                className: "grid grid-cols-[auto_1fr_auto_auto] gap-0 px-4 py-3 items-center",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-full bg-muted/30 animate-pulse" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 ml-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-full bg-muted/30 animate-pulse" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 w-24 bg-muted/30 rounded animate-pulse" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-16 bg-muted/20 rounded animate-pulse" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pr-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 w-12 bg-muted/30 rounded animate-pulse ml-auto" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 w-8 bg-muted/20 rounded animate-pulse ml-auto" }) })
                ]
              },
              k
            ))
          ) : !hasData ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyLeaderboard, {}) : displayData.map((user, index) => {
            const isTop3 = user.rank <= 3;
            const isCurrentUser = user.isCurrentUser;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, x: -16 },
                animate: { opacity: 1, x: 0 },
                transition: { duration: 0.35, delay: index * 0.05 },
                "data-ocid": `leaderboard.row.${index + 1}`,
                className: cn(
                  "grid grid-cols-[auto_1fr_auto_auto] gap-0 px-4 py-3 items-center transition-colors hover:bg-muted/20",
                  isCurrentUser && "bg-neon-purple/8 border-l-2 border-neon-purple",
                  isTop3 && !isCurrentUser && "bg-neon-amber/4"
                ),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(RankBadge, { rank: user.rank }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 ml-2 min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(UserAvatar, { username: user.username, rank: index }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "span",
                          {
                            className: cn(
                              "font-display font-semibold text-sm",
                              isCurrentUser && "text-neon-purple"
                            ),
                            children: [
                              user.username,
                              isCurrentUser && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1 text-[10px] font-mono-custom text-neon-purple/70", children: "(You)" })
                            ]
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: cn(
                              "text-[10px] font-mono-custom font-bold px-1.5 py-0.5 rounded-full",
                              user.level === "Champion" && "bg-neon-amber/15 text-neon-amber border border-neon-amber/30",
                              user.level === "Expert" && "bg-neon-purple/15 text-neon-purple border border-neon-purple/30",
                              user.level === "Scholar" && "bg-neon-blue/15 text-neon-blue border border-neon-blue/30",
                              user.level === "Beginner" && "bg-neon-green/15 text-neon-green border border-neon-green/30"
                            ),
                            children: user.level
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 flex-wrap mt-0.5", children: user.badges.slice(0, 2).map((badge) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "text-[10px] text-muted-foreground",
                          children: badge
                        },
                        badge
                      )) })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-right pr-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 justify-end", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Star,
                      {
                        size: 11,
                        className: "text-neon-amber",
                        fill: "currentColor"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: cn(
                          "font-display font-bold text-sm tabular-nums",
                          levelColors[user.level] || "text-foreground"
                        ),
                        children: user.xp.toLocaleString()
                      }
                    )
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 justify-end", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { size: 11, className: "text-neon-amber" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono-custom font-bold text-xs text-neon-amber", children: user.streak })
                  ] }) })
                ]
              },
              user.username
            );
          }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-xs text-muted-foreground/50 mt-4 font-mono-custom", children: "Rankings updated in real-time · Complete quizzes to earn XP and climb the ranks" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 glass-dark rounded-2xl p-6 border border-border/40", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-lg font-bold mb-3 text-foreground", children: "How the NCERT Bhaiya Leaderboard Works" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-muted-foreground space-y-3 leading-relaxed", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The NCERT Bhaiya leaderboard ranks students based on XP (experience points) earned by completing MCQ quizzes, flashcard sessions, and reading chapter notes. Every correct answer in a quiz earns you XP, and longer streaks multiply your score — so consistent daily practice is the fastest way to climb the rankings." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "CBSE students from Class 6 to Class 12 compete on the same leaderboard. Whether you are preparing for your Class 10 board exam, revising Class 9 Science chapters, or working through Class 12 Physics — every session you complete adds to your total score. IIT JEE aspirants can also earn XP by practicing JEE Main and Advanced level topics in the IIT JEE Hub." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Gamified learning has been shown to improve retention and study consistency. When you can see your rank rising alongside other students, it creates a healthy motivation to keep practicing. NCERT Bhaiya rewards the students who practice the most, not just the ones who already know the most — so even beginners can climb quickly by putting in regular effort." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Keep completing quizzes and flashcards every day to earn streak bonuses, unlock higher levels, and rise through the ranks. The top performers each week are highlighted on the podium — your name could be next." })
      ] })
    ] })
  ] }) });
}
export {
  Leaderboard as default
};
