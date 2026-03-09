import { cn } from "@/lib/utils";
import { Crown, Flame, Star, Trophy, Users } from "lucide-react";
import { motion } from "motion/react";
import { Layout } from "../components/Layout";
import { useUserProfileContext } from "../context/UserProfileContext";
import { levelColors } from "../data/demoData";
import { useLeaderboard } from "../hooks/useQueries";
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
  const initials =
    username
      .split(" ")
      .slice(0, 2)
      .map((w) => w[0] ?? "")
      .join("")
      .toUpperCase()
      .slice(0, 2) ||
    username[0]?.toUpperCase() ||
    "?";

  const colorIndex = rank % avatarColors.length;

  return (
    <div
      className={cn(
        "w-9 h-9 rounded-full bg-gradient-to-br flex items-center justify-center text-white text-xs font-display font-bold shrink-0",
        avatarColors[colorIndex],
      )}
    >
      {initials}
    </div>
  );
}

// ─── Empty State ──────────────────────────────────────────────────────────────

function EmptyLeaderboard() {
  return (
    <div
      data-ocid="leaderboard.empty_state"
      className="flex flex-col items-center justify-center py-16 px-4 text-center"
    >
      <div className="w-16 h-16 rounded-full bg-neon-amber/10 border border-neon-amber/30 flex items-center justify-center mb-4">
        <Users size={28} className="text-neon-amber/60" />
      </div>
      <h3 className="font-display font-bold text-lg mb-2 text-foreground">
        No rankings yet
      </h3>
      <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
        Be the first on the leaderboard! Complete a quiz to earn XP and claim
        the top spot.
      </p>
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

  const { data: rawData, isLoading } = useLeaderboard();
  const { profile } = useUserProfileContext();

  // Only show real users — mark current user row
  const displayData = (rawData ?? []).map((user) => ({
    ...user,
    isCurrentUser:
      !!profile?.displayName && user.username === profile.displayName,
  }));

  const hasData = displayData.length > 0;

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
          <h1
            data-ocid="leaderboard.page_h1"
            className="font-display text-3xl font-bold mb-2"
          >
            <span className="text-gradient-fire">Leaderboard</span>
          </h1>
          <p className="text-muted-foreground text-sm">
            Top performers ranked by XP. Complete quizzes to earn XP and climb
            the ranks!
          </p>
        </motion.div>

        {/* Top 3 Podium — only when we have real data */}
        {hasData && displayData.length >= 2 && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex items-end justify-center gap-3 mb-8"
          >
            {/* 2nd place */}
            {displayData[1] && (
              <div className="flex flex-col items-center gap-2">
                <UserAvatar username={displayData[1].username} rank={1} />
                <div className="text-center">
                  <p className="font-display font-bold text-xs">
                    {displayData[1].username}
                  </p>
                  <p className="text-[10px] text-muted-foreground font-mono-custom">
                    {displayData[1].xp.toLocaleString()} XP
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
            {displayData[0] && (
              <div className="flex flex-col items-center gap-2">
                <div className="relative">
                  <UserAvatar username={displayData[0].username} rank={0} />
                  <Crown
                    size={14}
                    className="text-neon-amber absolute -top-2 -right-1"
                    fill="currentColor"
                  />
                </div>
                <div className="text-center">
                  <p className="font-display font-bold text-sm">
                    {displayData[0].username}
                  </p>
                  <p className="text-[10px] text-neon-amber font-mono-custom font-bold">
                    {displayData[0].xp.toLocaleString()} XP
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
            {displayData[2] && (
              <div className="flex flex-col items-center gap-2">
                <UserAvatar username={displayData[2].username} rank={2} />
                <div className="text-center">
                  <p className="font-display font-bold text-xs">
                    {displayData[2].username}
                  </p>
                  <p className="text-[10px] text-muted-foreground font-mono-custom">
                    {displayData[2].xp.toLocaleString()} XP
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
        )}

        {/* Full Table */}
        <div
          data-ocid="leaderboard.table"
          className="glass-dark rounded-2xl border border-border/50 overflow-hidden"
        >
          {hasData && (
            <div className="grid grid-cols-[auto_1fr_auto_auto] gap-0 text-[10px] font-mono-custom font-semibold uppercase tracking-widest text-muted-foreground/60 px-4 py-2.5 border-b border-border/40">
              <span className="w-8">Rank</span>
              <span className="ml-12">Player</span>
              <span className="text-right pr-4">XP</span>
              <span className="text-right">Streak</span>
            </div>
          )}

          <div className="divide-y divide-border/30">
            {isLoading ? (
              // Loading skeleton rows
              Array.from({ length: 5 }, (_, i) => `skel-${i}`).map((k) => (
                <div
                  key={k}
                  data-ocid="leaderboard.loading_state"
                  className="grid grid-cols-[auto_1fr_auto_auto] gap-0 px-4 py-3 items-center"
                >
                  <div className="w-8 h-8 rounded-full bg-muted/30 animate-pulse" />
                  <div className="flex items-center gap-3 ml-2">
                    <div className="w-9 h-9 rounded-full bg-muted/30 animate-pulse" />
                    <div className="space-y-1.5">
                      <div className="h-3 w-24 bg-muted/30 rounded animate-pulse" />
                      <div className="h-2 w-16 bg-muted/20 rounded animate-pulse" />
                    </div>
                  </div>
                  <div className="pr-4">
                    <div className="h-3 w-12 bg-muted/30 rounded animate-pulse ml-auto" />
                  </div>
                  <div>
                    <div className="h-3 w-8 bg-muted/20 rounded animate-pulse ml-auto" />
                  </div>
                </div>
              ))
            ) : !hasData ? (
              <EmptyLeaderboard />
            ) : (
              displayData.map((user, index) => {
                const isTop3 = user.rank <= 3;
                const isCurrentUser = user.isCurrentUser;

                return (
                  <motion.div
                    key={user.username}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35, delay: index * 0.05 }}
                    data-ocid={`leaderboard.row.${index + 1}`}
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
              })
            )}
          </div>
        </div>

        {/* Footer note */}
        <p className="text-center text-xs text-muted-foreground/50 mt-4 font-mono-custom">
          Rankings updated in real-time · Complete quizzes to earn XP and climb
          the ranks
        </p>

        {/* SEO content section */}
        <div className="mt-10 glass-dark rounded-2xl p-6 border border-border/40">
          <h2 className="font-display text-lg font-bold mb-3 text-foreground">
            How the NCERT Bhaiya Leaderboard Works
          </h2>
          <div className="text-sm text-muted-foreground space-y-3 leading-relaxed">
            <p>
              The NCERT Bhaiya leaderboard ranks students based on XP
              (experience points) earned by completing MCQ quizzes, flashcard
              sessions, and reading chapter notes. Every correct answer in a
              quiz earns you XP, and longer streaks multiply your score — so
              consistent daily practice is the fastest way to climb the
              rankings.
            </p>
            <p>
              CBSE students from Class 6 to Class 12 compete on the same
              leaderboard. Whether you are preparing for your Class 10 board
              exam, revising Class 9 Science chapters, or working through Class
              12 Physics — every session you complete adds to your total score.
              IIT JEE aspirants can also earn XP by practicing JEE Main and
              Advanced level topics in the IIT JEE Hub.
            </p>
            <p>
              Gamified learning has been shown to improve retention and study
              consistency. When you can see your rank rising alongside other
              students, it creates a healthy motivation to keep practicing.
              NCERT Bhaiya rewards the students who practice the most, not just
              the ones who already know the most — so even beginners can climb
              quickly by putting in regular effort.
            </p>
            <p>
              Keep completing quizzes and flashcards every day to earn streak
              bonuses, unlock higher levels, and rise through the ranks. The top
              performers each week are highlighted on the podium — your name
              could be next.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
