import { useCallback, useEffect, useState } from "react";
import type { UserProfile } from "../backend.d";
import { useActor } from "./useActor";
import { useInternetIdentity } from "./useInternetIdentity";

export interface UseUserProfileResult {
  profile: UserProfile | null;
  loading: boolean;
  refetch: () => Promise<void>;
  setProfile: (profile: UserProfile | null) => void;
}

export function useUserProfile(): UseUserProfileResult {
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

  return { profile, loading, refetch: fetchProfile, setProfile };
}
