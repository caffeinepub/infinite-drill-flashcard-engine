import {
  type ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import type { UserProfile } from "../backend.d";
import { useActor } from "../hooks/useActor";
import { useInternetIdentity } from "../hooks/useInternetIdentity";

interface UserProfileContextValue {
  profile: UserProfile | null;
  loading: boolean;
  refetch: () => Promise<void>;
  setProfile: (profile: UserProfile | null) => void;
}

const UserProfileContext = createContext<UserProfileContextValue | null>(null);

export function UserProfileProvider({ children }: { children: ReactNode }) {
  const { identity } = useInternetIdentity();
  const { actor, isFetching } = useActor();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchProfile = useCallback(async () => {
    if (!actor || isFetching || !identity) return;
    setLoading(true);
    try {
      const result = await actor.getCallerUserProfile();
      setProfile(result ?? null);
    } catch {
      setProfile(null);
    } finally {
      setLoading(false);
    }
  }, [actor, isFetching, identity]);

  useEffect(() => {
    if (identity && actor && !isFetching) {
      void fetchProfile();
    } else if (!identity) {
      setProfile(null);
    }
  }, [identity, actor, isFetching, fetchProfile]);

  return (
    <UserProfileContext.Provider
      value={{ profile, loading, refetch: fetchProfile, setProfile }}
    >
      {children}
    </UserProfileContext.Provider>
  );
}

export function useUserProfileContext(): UserProfileContextValue {
  const ctx = useContext(UserProfileContext);
  if (!ctx) {
    throw new Error(
      "useUserProfileContext must be used inside UserProfileProvider",
    );
  }
  return ctx;
}
