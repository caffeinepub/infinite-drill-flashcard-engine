import { h as useActor, i as useQuery, b as useUserProfileContext, k as useQueryClient } from "./index-BHGjSnc4.js";
import { u as useMutation } from "./useMutation-DtdfgN9T.js";
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
    mutationFn: async ({ score }) => {
      const userId = profile == null ? void 0 : profile.displayName;
      if (!userId) {
        return [BigInt(score * 10), BigInt(1)];
      }
      if (actor) {
        try {
          const earnedXP = score * 10;
          await actor.addBlogXP(BigInt(earnedXP));
          return [BigInt(earnedXP), BigInt(1)];
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
  return useMutation({
    mutationFn: async (flashcardId) => {
      if (actor) {
        try {
          await actor.markFlashcardMastered(BigInt(flashcardId));
        } catch {
        }
      }
    }
  });
}
function useGenerateContent() {
  return useMutation({
    mutationFn: async ({ rawText }) => {
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
