import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/context/AuthContext";
import { AtSign, CheckCircle2, Loader2, Mail, UserCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useActor } from "../hooks/useActor";

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function Profile() {
  const { user, loginUser } = useAuth();
  const { actor } = useActor();
  const [fullName, setFullName] = useState(user?.fullName ?? "");
  const [email, setEmail] = useState(user?.email ?? "");
  const [isSaving, setIsSaving] = useState(false);
  const [errors, setErrors] = useState<{ fullName?: string; email?: string }>(
    {},
  );

  if (!user) return null;

  function validate() {
    const errs: { fullName?: string; email?: string } = {};
    if (!fullName.trim()) errs.fullName = "Full name cannot be empty.";
    if (email && !validateEmail(email))
      errs.email = "Please enter a valid email address.";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setIsSaving(true);
    try {
      if (actor) {
        const result = await (actor as any).updateUserProfile(
          user!.username,
          fullName.trim(),
          email.trim(),
        );
        if (!result.ok) {
          toast.error(result.message || "Failed to update profile.");
          return;
        }
      }
      loginUser({
        username: user!.username,
        fullName: fullName.trim(),
        email: email.trim(),
      });
      toast.success("Profile updated successfully!");
    } catch {
      toast.error("Failed to update profile. Please try again.");
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <main className="min-h-screen bg-mesh-dark flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md" data-ocid="profile.card">
        {/* Avatar header */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-neon-purple/30 to-neon-blue/30 border-2 border-neon-purple/40 flex items-center justify-center mb-4 shadow-lg shadow-neon-purple/10">
            <span className="text-3xl font-bold text-neon-purple select-none">
              {(user.fullName || user.username).charAt(0).toUpperCase()}
            </span>
          </div>
          <h1 className="text-2xl font-display font-bold text-foreground">
            My Profile
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Manage your account information
          </p>
        </div>

        <Card className="glass-dark border border-border/60 shadow-xl shadow-black/30">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
              <CheckCircle2 size={18} className="text-neon-purple" />
              Account Details
            </CardTitle>
            <CardDescription className="text-muted-foreground text-sm">
              Your username cannot be changed. Update your name or email below.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSave} className="space-y-5" noValidate>
              {/* Username — read-only */}
              <div className="space-y-1.5">
                <Label className="text-sm font-medium text-muted-foreground flex items-center gap-1.5">
                  <AtSign size={13} />
                  Username
                </Label>
                <div
                  className="flex items-center h-10 rounded-lg border border-border/50 bg-muted/30 px-3 text-sm text-muted-foreground select-none cursor-not-allowed"
                  aria-readonly="true"
                  data-ocid="profile.input"
                >
                  {user.username}
                </div>
                <p className="text-xs text-muted-foreground/60">
                  Usernames are permanent and cannot be changed.
                </p>
              </div>

              {/* Full Name */}
              <div className="space-y-1.5">
                <Label
                  htmlFor="fullName"
                  className="text-sm font-medium text-foreground flex items-center gap-1.5"
                >
                  <UserCircle size={13} />
                  Full Name
                </Label>
                <Input
                  id="fullName"
                  type="text"
                  value={fullName}
                  onChange={(e) => {
                    setFullName(e.target.value);
                    if (errors.fullName)
                      setErrors((prev) => ({ ...prev, fullName: undefined }));
                  }}
                  placeholder="Your full name"
                  autoComplete="name"
                  className="bg-muted/20 border-border/60 focus:border-neon-purple/60 focus:ring-neon-purple/20 transition-colors"
                  data-ocid="profile.input"
                />
                {errors.fullName && (
                  <p
                    className="text-xs text-destructive"
                    data-ocid="profile.error_state"
                  >
                    {errors.fullName}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <Label
                  htmlFor="email"
                  className="text-sm font-medium text-foreground flex items-center gap-1.5"
                >
                  <Mail size={13} />
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errors.email)
                      setErrors((prev) => ({ ...prev, email: undefined }));
                  }}
                  placeholder="your@email.com"
                  autoComplete="email"
                  className="bg-muted/20 border-border/60 focus:border-neon-purple/60 focus:ring-neon-purple/20 transition-colors"
                  data-ocid="profile.input"
                />
                {errors.email && (
                  <p
                    className="text-xs text-destructive"
                    data-ocid="profile.error_state"
                  >
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Save button */}
              <Button
                type="submit"
                disabled={isSaving}
                className="w-full bg-neon-purple hover:bg-neon-purple/90 text-white font-semibold transition-all shadow-md shadow-neon-purple/20 mt-2"
                data-ocid="profile.submit_button"
              >
                {isSaving ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Saving...
                  </>
                ) : (
                  "Save Changes"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
