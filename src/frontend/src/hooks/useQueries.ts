import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useUserProfileContext } from "../context/UserProfileContext";
import { topicsData } from "../data/demoData";
import type { LeaderboardUser, TopicData } from "../data/demoData";
import { useActor } from "./useActor";

// ─── Topics ─────────────────────────────────────────────────────────────────────────

export function useTopics() {
  const { actor, isFetching } = useActor();
  return useQuery<TopicData[]>({
    queryKey: ["topics"],
    queryFn: async () => {
      try {
        if (actor && !isFetching) {
          await actor.getAllTopics();
        }
      } catch {
        // ignore
      }
      return topicsData;
    },
    initialData: topicsData,
    staleTime: 1000 * 60 * 5,
  });
}

export function useTopic(id: string) {
  const { actor, isFetching } = useActor();
  return useQuery<TopicData | null>({
    queryKey: ["topic", id],
    queryFn: async () => {
      try {
        if (actor && !isFetching) {
          await actor.getTopicById(BigInt(id));
        }
      } catch {
        // ignore
      }
      return topicsData.find((t) => t.id === id) ?? null;
    },
    initialData: topicsData.find((t) => t.id === id) ?? null,
    staleTime: 1000 * 60 * 5,
  });
}

// ─── Level mapping ──────────────────────────────────────────────────────────────

function numericLevelToString(level: bigint): string {
  const n = Number(level);
  if (n === 4) return "Champion";
  if (n === 3) return "Expert";
  if (n === 2) return "Scholar";
  return "Beginner";
}

// ─── Leaderboard ─────────────────────────────────────────────────────────────────

export function useLeaderboard() {
  const { actor, isFetching } = useActor();
  return useQuery<LeaderboardUser[]>({
    queryKey: ["leaderboard"],
    queryFn: async () => {
      try {
        if (actor && !isFetching) {
          const entries = await actor.getLeaderboard();
          return entries.map((entry) => ({
            rank: Number(entry.rank),
            username: entry.username,
            xp: Number(entry.xp),
            level: numericLevelToString(entry.level),
            streak: Number(entry.streak),
            badges: entry.badges,
            isCurrentUser: false,
          }));
        }
      } catch {
        // If backend call fails, return empty
      }
      return [];
    },
    initialData: [],
    staleTime: 1000 * 60 * 5,
  });
}

// ─── Quiz submission ─────────────────────────────────────────────────────────

export function useSubmitQuiz() {
  const { actor } = useActor();
  const { profile } = useUserProfileContext();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ score }: { topicId: string; score: number }) => {
      const userId = profile?.displayName;
      if (!userId) {
        return [BigInt(score * 10), BigInt(1)] as [bigint, bigint];
      }
      if (actor) {
        try {
          const earnedXP = score * 10;
          await actor.addBlogXP(BigInt(earnedXP));
          return [BigInt(earnedXP), BigInt(1)] as [bigint, bigint];
        } catch {
          return [BigInt(score * 10), BigInt(1)] as [bigint, bigint];
        }
      }
      return [BigInt(score * 10), BigInt(1)] as [bigint, bigint];
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["leaderboard"] });
    },
  });
}

// ─── Blog XP ──────────────────────────────────────────────────────────────────────────

export function useAddBlogXP() {
  const { actor } = useActor();
  const { profile } = useUserProfileContext();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (xpAmount: number) => {
      const userId = profile?.displayName;
      if (!userId || !actor) return 0;
      try {
        const result = await actor.addBlogXP(BigInt(xpAmount));
        return Number(result);
      } catch {
        return 0;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["leaderboard"] });
    },
  });
}

// ─── Flashcard mastery ─────────────────────────────────────────────────────────────

export function useMarkFlashcardMastered() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (flashcardId: number) => {
      if (actor) {
        try {
          await actor.markFlashcardMastered(BigInt(flashcardId));
        } catch {
          // ignore
        }
      }
    },
  });
}

// ─── AI Content Generation ──────────────────────────────────────────────────────────

export function useGenerateContent() {
  return useMutation({
    mutationFn: async ({ rawText }: { topicId: string; rawText: string }) => {
      const wordCount = rawText.split(/\s+/).length;
      return {
        mcqCount: Math.min(20, Math.max(5, Math.floor(wordCount / 30))),
        flashcardCount: Math.min(15, Math.max(4, Math.floor(wordCount / 40))),
        cheatsheetCount: Math.min(10, Math.max(3, Math.floor(wordCount / 60))),
        generatedAt: Date.now(),
      };
    },
  });
}
