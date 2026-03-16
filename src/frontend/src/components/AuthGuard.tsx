import type { ReactNode } from "react";
import { useEffect } from "react";
import { toast } from "sonner";
import { useActor } from "../hooks/useActor";
import { useInternetIdentity } from "../hooks/useInternetIdentity";
import { useUserProfile } from "../hooks/useUserProfile";
import Login from "../pages/Login";
import Onboarding from "../pages/Onboarding";
import { saveCredentials } from "../utils/credentialStore";

interface AuthGuardProps {
  children: ReactNode;
}

export function AuthGuard({ children }: AuthGuardProps) {
  const { identity, isInitializing, loginStatus } = useInternetIdentity();
  const { profile, loading, setProfile } = useUserProfile();
  const { actor } = useActor();

  // Auto-complete signup when II login succeeds and pending signup data exists
  useEffect(() => {
    if (!identity || loading || profile !== null) return;
    const pending = sessionStorage.getItem("pendingSignup");
    if (!pending || !actor) return;

    let data: {
      name: string;
      studentClass: string;
      country: string;
      password: string;
    };
    try {
      data = JSON.parse(pending);
    } catch {
      sessionStorage.removeItem("pendingSignup");
      return;
    }

    actor
      .saveCallerUserProfile(data.name, data.studentClass)
      .then((result) => {
        localStorage.setItem(
          "userExtendedProfile",
          JSON.stringify({ country: data.country }),
        );
        sessionStorage.removeItem("pendingSignup");
        setProfile(result);
        // Save credentials so the user can log in with username+password next time
        saveCredentials(data.name.trim(), data.password).catch(() => {
          // Credential saving is best-effort; ignore failures
        });
        toast.success("Welcome to NCERT Bhaiya! 🎉");
      })
      .catch(() => {
        sessionStorage.removeItem("pendingSignup");
      });
  }, [identity, loading, profile, actor, setProfile]);

  // Show nothing during initialization
  if (isInitializing || loginStatus === "initializing") {
    return (
      <div className="min-h-screen bg-mesh-dark flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 rounded-full border-2 border-neon-purple/40 border-t-neon-purple animate-spin" />
          <p className="text-sm text-muted-foreground font-mono">
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
          <p className="text-sm text-muted-foreground font-mono">
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
