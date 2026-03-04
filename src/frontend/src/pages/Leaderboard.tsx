import { cn } from "@/lib/utils";
import { Crown, Flame, Star, Trophy } from "lucide-react";
import { motion } from "motion/react";
import { useEffect } from "react";
import { Layout } from "../components/Layout";
import { leaderboardData, levelColors } from "../data/demoData";
import { useSEO } from "../hooks/useSEO";

// ─── Rank Badge ────────────────────────────────────────────────────────────────

function RankBadge({ rank }: { rank: number }) {
  if (rank === 1) {
    return (
      <div className="w-8 h-8 rounded-full bg-neon-amber/20 border border-neon-amber/50 flex items-center justify-center">
        <Crown size={14} className="text-neon-amber" fill="currentColor" />
      </div>
    );
  }
  if (rank === 2) {
    return (
      <div className="w-8 h-8 rounded-full bg-gray-400/20 border border-gray-400/40 flex items-center justify-center">
        <span className="font-display font-bold text-sm text-gray-400">2</span>
      </div>
    );
  }
  if (rank === 3) {
    return (
      <div className="w-8 h-8 rounded-full bg-orange-600/20 border border-orange-600/40 flex items-center justify-center">
        <span className="font-display font-bold text-sm text-orange-600">
          3
        </span>
      </div>
    );
  }
  return (
    <div className="w-8 h-8 rounded-full bg-muted/30 border border-border/40 flex items-center justify-center">
      <span className="font-display font-bold text-sm text-muted-foreground">
        {rank}
      </span>
    </div>
  );
}

// ─── Avatar ────────────────────────────────────────────────────────────────────

const avatarColors = [
  "from-neon-purple to-neon-blue",
  "from-neon-blue to-neon-green",
  "from-neon-amber to-neon-red",
  "from-neon-green to-neon-blue",
  "from-neon-purple to-neon-amber",
];

function UserAvatar({ username, rank }: { username: string; rank: number }) {
  const initials = username
    .split(/(?=[A-Z])/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const colorIndex = rank % avatarColors.length;

  return (
    <div
      className={cn(
        "w-9 h-9 rounded-full bg-gradient-to-br flex items-center justify-center text-white text-xs font-display font-bold shrink-0",
        avatarColors[colorIndex],
      )}
    >
      {initials || username[0].toUpperCase()}
    </div>
  );
}

// ─── Leaderboard Page ─────────────────────────────────────────────────────────

export default function Leaderboard() {
  useSEO({
    title: "NCERT Bhaiya Leaderboard — Top CBSE Students & XP Rankings",
    description:
      "See who's topping the NCERT Bhaiya leaderboard! Weekly rankings of top CBSE students by XP earned from MCQ quizzes, flashcards and lessons. Compete, earn points and win rewards on NCERT Bhaiya.",
    keywords:
      "NCERT Bhaiya leaderboard, CBSE student rankings, NCERT quiz XP leaderboard, best CBSE students, online study competition, gamified CBSE learning, NCERT Bhaiya top students",
    canonical: "/leaderboard",
  });

  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 mb-2">
            <Trophy size={20} className="text-neon-amber" />
            <span className="text-xs font-mono-custom text-neon-amber/70 uppercase tracking-widest">
              Global Rankings
            </span>
          </div>
          <h1 className="font-display text-3xl font-bold mb-2">
            <span className="text-gradient-fire">Leaderboard</span>
          </h1>
          <p className="text-muted-foreground text-sm">
            Top performers ranked by XP. Keep practicing to climb the ranks!
          </p>
        </motion.div>

        {/* Top 3 Podium */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex items-end justify-center gap-3 mb-8"
        >
          {/* 2nd place */}
          {leaderboardData[1] && (
            <div className="flex flex-col items-center gap-2">
              <UserAvatar username={leaderboardData[1].username} rank={1} />
              <div className="text-center">
                <p className="font-display font-bold text-xs">
                  {leaderboardData[1].username}
                </p>
                <p className="text-[10px] text-muted-foreground font-mono-custom">
                  {leaderboardData[1].xp.toLocaleString()} XP
                </p>
              </div>
              <div className="w-20 h-16 rounded-t-xl bg-gray-500/20 border border-gray-500/30 flex items-center justify-center">
                <span className="font-display font-bold text-2xl text-gray-400">
                  2
                </span>
              </div>
            </div>
          )}
          {/* 1st place */}
          {leaderboardData[0] && (
            <div className="flex flex-col items-center gap-2">
              <div className="relative">
                <UserAvatar username={leaderboardData[0].username} rank={0} />
                <Crown
                  size={14}
                  className="text-neon-amber absolute -top-2 -right-1"
                  fill="currentColor"
                />
              </div>
              <div className="text-center">
                <p className="font-display font-bold text-sm">
                  {leaderboardData[0].username}
                </p>
                <p className="text-[10px] text-neon-amber font-mono-custom font-bold">
                  {leaderboardData[0].xp.toLocaleString()} XP
                </p>
              </div>
              <div className="w-20 h-24 rounded-t-xl bg-neon-amber/15 border border-neon-amber/40 flex items-center justify-center shadow-neon-amber">
                <Crown
                  size={24}
                  className="text-neon-amber"
                  fill="currentColor"
                />
              </div>
            </div>
          )}
          {/* 3rd place */}
          {leaderboardData[2] && (
            <div className="flex flex-col items-center gap-2">
              <UserAvatar username={leaderboardData[2].username} rank={2} />
              <div className="text-center">
                <p className="font-display font-bold text-xs">
                  {leaderboardData[2].username}
                </p>
                <p className="text-[10px] text-muted-foreground font-mono-custom">
                  {leaderboardData[2].xp.toLocaleString()} XP
                </p>
              </div>
              <div className="w-20 h-10 rounded-t-xl bg-orange-600/15 border border-orange-600/30 flex items-center justify-center">
                <span className="font-display font-bold text-xl text-orange-600">
                  3
                </span>
              </div>
            </div>
          )}
        </motion.div>

        {/* Full Table */}
        <div
          data-ocid="leaderboard.table"
          className="glass-dark rounded-2xl border border-border/50 overflow-hidden"
        >
          <div className="grid grid-cols-[auto_1fr_auto_auto] gap-0 text-[10px] font-mono-custom font-semibold uppercase tracking-widest text-muted-foreground/60 px-4 py-2.5 border-b border-border/40">
            <span className="w-8">Rank</span>
            <span className="ml-12">Player</span>
            <span className="text-right pr-4">XP</span>
            <span className="text-right">Streak</span>
          </div>

          <div className="divide-y divide-border/30">
            {leaderboardData.map((user, index) => {
              const isTop3 = user.rank <= 3;
              const isCurrentUser = user.isCurrentUser;

              return (
                <motion.div
                  key={user.rank}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  className={cn(
                    "grid grid-cols-[auto_1fr_auto_auto] gap-0 px-4 py-3 items-center transition-colors hover:bg-muted/20",
                    isCurrentUser &&
                      "bg-neon-purple/8 border-l-2 border-neon-purple",
                    isTop3 && !isCurrentUser && "bg-neon-amber/4",
                  )}
                >
                  {/* Rank */}
                  <div className="w-8 shrink-0">
                    <RankBadge rank={user.rank} />
                  </div>

                  {/* User info */}
                  <div className="flex items-center gap-3 ml-2 min-w-0">
                    <UserAvatar username={user.username} rank={index} />
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span
                          className={cn(
                            "font-display font-semibold text-sm",
                            isCurrentUser && "text-neon-purple",
                          )}
                        >
                          {user.username}
                          {isCurrentUser && (
                            <span className="ml-1 text-[10px] font-mono-custom text-neon-purple/70">
                              (You)
                            </span>
                          )}
                        </span>
                        <span
                          className={cn(
                            "text-[10px] font-mono-custom font-bold px-1.5 py-0.5 rounded-full",
                            user.level === "Champion" &&
                              "bg-neon-amber/15 text-neon-amber border border-neon-amber/30",
                            user.level === "Expert" &&
                              "bg-neon-purple/15 text-neon-purple border border-neon-purple/30",
                            user.level === "Scholar" &&
                              "bg-neon-blue/15 text-neon-blue border border-neon-blue/30",
                            user.level === "Beginner" &&
                              "bg-neon-green/15 text-neon-green border border-neon-green/30",
                          )}
                        >
                          {user.level}
                        </span>
                      </div>
                      <div className="flex gap-1 flex-wrap mt-0.5">
                        {user.badges.slice(0, 2).map((badge) => (
                          <span
                            key={badge}
                            className="text-[10px] text-muted-foreground"
                          >
                            {badge}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* XP */}
                  <div className="text-right pr-4">
                    <div className="flex items-center gap-1 justify-end">
                      <Star
                        size={11}
                        className="text-neon-amber"
                        fill="currentColor"
                      />
                      <span
                        className={cn(
                          "font-display font-bold text-sm tabular-nums",
                          levelColors[user.level] || "text-foreground",
                        )}
                      >
                        {user.xp.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  {/* Streak */}
                  <div className="text-right">
                    <div className="flex items-center gap-1 justify-end">
                      <Flame size={11} className="text-neon-amber" />
                      <span className="font-mono-custom font-bold text-xs text-neon-amber">
                        {user.streak}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Footer note */}
        <p className="text-center text-xs text-muted-foreground/50 mt-4 font-mono-custom">
          Rankings updated every hour · Practice to earn XP and climb the ranks
        </p>
      </div>
    </Layout>
  );
}
