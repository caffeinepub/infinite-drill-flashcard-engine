import type { UserProfile } from "../backend.d";
import { useUserProfileContext } from "../context/UserProfileContext";

export interface UseUserProfileResult {
  profile: UserProfile | null;
  loading: boolean;
  refetch: () => Promise<void>;
  setProfile: (profile: UserProfile | null) => void;
}

// Thin wrapper that reads from the shared context so all components
// (AuthGuard, Onboarding, etc.) share the same profile state.
export function useUserProfile(): UseUserProfileResult {
  return useUserProfileContext();
}
