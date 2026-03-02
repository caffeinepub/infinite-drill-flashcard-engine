import type { ReactNode } from "react";
import { useInternetIdentity } from "../hooks/useInternetIdentity";
import { useUserProfile } from "../hooks/useUserProfile";
import Login from "../pages/Login";
import Onboarding from "../pages/Onboarding";

interface AuthGuardProps {
  children: ReactNode;
}

export function AuthGuard({ children }: AuthGuardProps) {
  const { identity, isInitializing, loginStatus } = useInternetIdentity();
  const { profile, loading } = useUserProfile();

  // Show nothing during initialization
  if (isInitializing || loginStatus === "initializing") {
    return (
      <div className="min-h-screen bg-mesh-dark flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 rounded-full border-2 border-neon-purple/40 border-t-neon-purple animate-spin" />
          <p className="text-sm text-muted-foreground font-mono-custom">
            Initializing...
          </p>
        </div>
      </div>
    );
  }

  // Not authenticated → show Login
  if (!identity) {
    return <Login />;
  }

  // Authenticated but loading profile
  if (loading) {
    return (
      <div className="min-h-screen bg-mesh-dark flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 rounded-full border-2 border-neon-green/40 border-t-neon-green animate-spin" />
          <p className="text-sm text-muted-foreground font-mono-custom">
            Loading profile...
          </p>
        </div>
      </div>
    );
  }

  // Authenticated but no profile → show Onboarding
  if (!profile) {
    return <Onboarding />;
  }

  // Authenticated + profile → render children
  return <>{children}</>;
}
