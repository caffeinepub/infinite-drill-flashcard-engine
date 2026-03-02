import { useMutation, useQuery } from "@tanstack/react-query";
import { leaderboardData, topicsData } from "../data/demoData";
import type { LeaderboardUser, TopicData } from "../data/demoData";
import { useActor } from "./useActor";

// ─── Topics ───────────────────────────────────────────────────────────────────

export function useTopics() {
  const { actor, isFetching } = useActor();
  return useQuery<TopicData[]>({
    queryKey: ["topics"],
    queryFn: async () => {
      // Try backend, fall back to demo data
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

// ─── Leaderboard ─────────────────────────────────────────────────────────────

export function useLeaderboard() {
  const { actor, isFetching } = useActor();
  return useQuery<LeaderboardUser[]>({
    queryKey: ["leaderboard"],
    queryFn: async () => {
      try {
        if (actor && !isFetching) {
          await actor.getLeaderboard();
        }
      } catch {
        // ignore
      }
      return leaderboardData;
    },
    initialData: leaderboardData,
    staleTime: 1000 * 60 * 5,
  });
}

// ─── Quiz submission ──────────────────────────────────────────────────────────

export function useSubmitQuiz() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async ({
      topicId,
      score,
    }: { topicId: string; score: number }) => {
      if (actor) {
        try {
          return await actor.submitQuizResult(
            "demo-user",
            BigInt(topicId),
            BigInt(score),
          );
        } catch {
          return [BigInt(score * 10), BigInt(1)] as [bigint, bigint];
        }
      }
      return [BigInt(score * 10), BigInt(1)] as [bigint, bigint];
    },
  });
}

// ─── Flashcard mastery ────────────────────────────────────────────────────────

export function useMarkFlashcardMastered() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (flashcardId: number) => {
      if (actor) {
        try {
          await actor.markFlashcardMastered("demo-user", BigInt(flashcardId));
        } catch {
          // ignore
        }
      }
    },
  });
}

// ─── AI Content Generation ────────────────────────────────────────────────────

export function useGenerateContent() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async ({
      topicId,
      rawText,
    }: { topicId: string; rawText: string }) => {
      if (actor) {
        try {
          const result = await actor.simulateAIContentGeneration(
            BigInt(topicId),
            rawText,
          );
          return {
            mcqCount: Number(result.mcqCount),
            flashcardCount: Number(result.flashcardCount),
            cheatsheetCount: Number(result.cheatsheetCount),
            generatedAt: Number(result.generatedAt),
          };
        } catch {
          // Fall through to mock
        }
      }
      // Mock response
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
