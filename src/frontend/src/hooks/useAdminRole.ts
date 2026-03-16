import { useQuery } from "@tanstack/react-query";
import { useActor } from "./useActor";

type ActorWithAdminMethods = {
  getCallerRole: () => Promise<string>;
};

export function useAdminRole() {
  const { actor, isFetching } = useActor();

  const { data: role, isLoading } = useQuery<string>({
    queryKey: ["callerRole", !!actor],
    queryFn: async () => {
      if (!actor) return "guest";
      try {
        const a = actor as unknown as ActorWithAdminMethods;
        if (typeof a.getCallerRole === "function") {
          return await a.getCallerRole();
        }
        return "guest";
      } catch {
        return "guest";
      }
    },
    enabled: !!actor && !isFetching,
    staleTime: 1000 * 60 * 5,
  });

  return {
    role: role ?? null,
    isAdmin: role === "admin",
    isOperator: role === "operator",
    loading: isLoading || isFetching,
  };
}
