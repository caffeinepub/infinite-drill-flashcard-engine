import { type ReactNode, createContext, useContext } from "react";
import type { UserProfile } from "../backend.d";

interface UserProfileContextValue {
  profile: UserProfile | null;
  loading: boolean;
  refetch: () => Promise<void>;
  setProfile: (profile: UserProfile | null) => void;
}

const UserProfileContext = createContext<UserProfileContextValue | null>(null);

export function UserProfileProvider({ children }: { children: ReactNode }) {
  const value: UserProfileContextValue = {
    profile: null,
    loading: false,
    refetch: async () => {},
    setProfile: () => {},
  };

  return (
    <UserProfileContext.Provider value={value}>
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
