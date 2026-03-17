import { u as useActor, a as useQuery } from "./useActor-CIu2Gs_w.js";
import { a as useUserProfileContext, c as useQueryClient } from "./index-BoZe1Uww.js";
import { u as useMutation } from "./useMutation-Bpb7sMIu.js";
function numericLevelToString(level) {
  const n = Number(level);
  if (n === 4) return "Champion";
  if (n === 3) return "Expert";
  if (n === 2) return "Scholar";
  return "Beginner";
}
function useLeaderboard() {
  const { actor, isFetching } = useActor();
  return useQuery({
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
            isCurrentUser: false
          }));
        }
      } catch {
      }
      return [];
    },
    initialData: [],
    staleTime: 1e3 * 60 * 5
  });
}
function useSubmitQuiz() {
  const { actor } = useActor();
  const { profile } = useUserProfileContext();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      topicId,
      score
    }) => {
      const userId = profile == null ? void 0 : profile.displayName;
      if (!userId) {
        return [BigInt(score * 10), BigInt(1)];
      }
      if (actor) {
        try {
          return await actor.submitQuizResult(
            userId,
            BigInt(topicId),
            BigInt(score)
          );
        } catch {
          return [BigInt(score * 10), BigInt(1)];
        }
      }
      return [BigInt(score * 10), BigInt(1)];
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["leaderboard"] });
    }
  });
}
function useMarkFlashcardMastered() {
  const { actor } = useActor();
  const { profile } = useUserProfileContext();
  return useMutation({
    mutationFn: async (flashcardId) => {
      if (actor) {
        try {
          const userId = (profile == null ? void 0 : profile.displayName) ?? "guest";
          await actor.markFlashcardMastered(userId, BigInt(flashcardId));
        } catch {
        }
      }
    }
  });
}
function useGenerateContent() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async ({
      topicId,
      rawText
    }) => {
      if (actor) {
        try {
          const result = await actor.simulateAIContentGeneration(
            BigInt(topicId),
            rawText
          );
          return {
            mcqCount: Number(result.mcqCount),
            flashcardCount: Number(result.flashcardCount),
            cheatsheetCount: Number(result.cheatsheetCount),
            generatedAt: Number(result.generatedAt)
          };
        } catch {
        }
      }
      const wordCount = rawText.split(/\s+/).length;
      return {
        mcqCount: Math.min(20, Math.max(5, Math.floor(wordCount / 30))),
        flashcardCount: Math.min(15, Math.max(4, Math.floor(wordCount / 40))),
        cheatsheetCount: Math.min(10, Math.max(3, Math.floor(wordCount / 60))),
        generatedAt: Date.now()
      };
    }
  });
}
export {
  useGenerateContent as a,
  useLeaderboard as b,
  useSubmitQuiz as c,
  useMarkFlashcardMastered as u
};
