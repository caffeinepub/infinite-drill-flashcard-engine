import { useActor } from "@caffeineai/core-infrastructure";
import { useQuery } from "@tanstack/react-query";
import { createActor } from "../backend";
import { useAuth } from "../context/AuthContext";

type ActorWithAdminMethods = {
  getUserRole: (username: string) => Promise<string>;
};

export function useAdminRole() {
  const { actor, isFetching } = useActor(createActor);
  const { user } = useAuth();

  const { data: role, isLoading } = useQuery<string>({
    queryKey: ["userRole", user?.username],
    queryFn: async () => {
      if (!actor || !user?.username) return "user";
      try {
        const a = actor as unknown as ActorWithAdminMethods;
        return await a.getUserRole(user.username);
      } catch {
        return "user";
      }
    },
    enabled: !!actor && !!user?.username && !isFetching,
    staleTime: 1000 * 60 * 5,
  });

  const effectiveRole = role ?? "user";

  return {
    role: effectiveRole,
    isAdmin: effectiveRole === "admin",
    isOperator: effectiveRole === "operator",
    loading: isLoading || isFetching,
  };
}
