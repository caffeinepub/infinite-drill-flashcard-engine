import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useActor } from "@caffeineai/core-infrastructure";
import { useNavigate } from "@tanstack/react-router";
import {
  BookOpen,
  CheckCircle,
  Eye,
  EyeOff,
  GraduationCap,
  Loader2,
  LogIn,
  ShieldCheck,
  Sparkles,
  Star,
  User,
  XCircle,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { createActor } from "../backend";
import { useAuth } from "../context/AuthContext";

type UsernameStatus = "idle" | "checking" | "available" | "taken";

type AuthActor = {
  checkUsernameAvailability: (username: string) => Promise<boolean>;
  login: (
    username: string,
    password: string,
  ) => Promise<{
    ok: boolean;
    fullName: string;
    email: string;
    message?: string;
  }>;
  signUp: (
    username: string,
    password: string,
    fullName: string,
    email: string,
  ) => Promise<{ ok: boolean; message?: string }>;
};

export default function Auth() {
  const { loginUser } = useAuth();
  const { actor: rawActor } = useActor(createActor);
  const actor = rawActor as unknown as AuthActor | null;
  const navigate = useNavigate();

  // ─── Login state ─────────────────────────────────────────────────
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [showLoginPw, setShowLoginPw] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  // ─── Signup state ─────────────────────────────────────────────────
  const [fullName, setFullName] = useState("");
  const [signupUsername, setSignupUsername] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [showSignupPw, setShowSignupPw] = useState(false);
  const [signupErrors, setSignupErrors] = useState<Record<string, string>>({});
  const [signupError, setSignupError] = useState("");
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [usernameStatus, setUsernameStatus] = useState<UsernameStatus>("idle");
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Live username availability check
  useEffect(() => {
    if (
      !signupUsername.trim() ||
      signupUsername.length < 3 ||
      !/^[a-zA-Z0-9_]+$/.test(signupUsername)
    ) {
      setUsernameStatus("idle");
      return;
    }
    if (debounceRef.current) clearTimeout(debounceRef.current);
    setUsernameStatus("checking");
    debounceRef.current = setTimeout(async () => {
      if (!actor) {
        setUsernameStatus("idle");
        return;
      }
      try {
        const available = await actor.checkUsernameAvailability(
          signupUsername.trim(),
        );
        setUsernameStatus(available ? "available" : "taken");
      } catch {
        setUsernameStatus("idle");
      }
    }, 500);
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [signupUsername, actor]);

  // ─── Login handler ───────────────────────────────────────────────────
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");
    if (!loginUsername.trim()) {
      setLoginError("Please enter your username.");
      return;
    }
    if (!loginPassword) {
      setLoginError("Please enter your password.");
      return;
    }
    if (!actor) {
      setLoginError("Connecting to server, please wait...");
      return;
    }
    setIsLoggingIn(true);
    try {
      const result = await actor.login(loginUsername.trim(), loginPassword);
      if (result.ok) {
        loginUser({
          username: loginUsername.trim(),
          fullName: result.fullName,
          email: result.email,
        });
        toast.success(`Welcome back, ${result.fullName}!`);
        navigate({ to: "/" });
      } else {
        setLoginError(result.message || "Invalid username or password.");
      }
    } catch {
      setLoginError("Login failed. Please try again.");
    } finally {
      setIsLoggingIn(false);
    }
  };

  // ─── Signup validation ──────────────────────────────────────────────────
  const validateSignup = () => {
    const errors: Record<string, string> = {};
    if (!fullName.trim()) errors.fullName = "Full name is required.";
    if (!signupUsername.trim()) {
      errors.username = "Username is required.";
    } else if (signupUsername.length < 3) {
      errors.username = "Username must be at least 3 characters.";
    } else if (/\s/.test(signupUsername)) {
      errors.username = "Username cannot contain spaces.";
    } else if (!/^[a-zA-Z0-9_]+$/.test(signupUsername)) {
      errors.username = "Only letters, numbers, and underscores allowed.";
    } else if (usernameStatus === "taken") {
      errors.username = "This username is already in use.";
    }
    if (!signupEmail.trim()) {
      errors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(signupEmail)) {
      errors.email = "Enter a valid email address.";
    }
    if (!signupPassword || signupPassword.length < 5) {
      errors.password = "Password must be at least 5 characters.";
    }
    return errors;
  };

  // ─── Signup handler ───────────────────────────────────────────────────
  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateSignup();
    if (Object.keys(errors).length > 0) {
      setSignupErrors(errors);
      return;
    }
    setSignupErrors({});
    setSignupError("");
    if (!actor) {
      setSignupError("Connecting to server, please wait...");
      return;
    }
    setIsSigningUp(true);
    try {
      const result = await actor.signUp(
        signupUsername.trim(),
        signupPassword,
        fullName.trim(),
        signupEmail.trim(),
      );
      if (result.ok) {
        // Auto-login after signup
        const loginResult = await actor.login(
          signupUsername.trim(),
          signupPassword,
        );
        loginUser({
          username: signupUsername.trim(),
          fullName: loginResult.ok ? loginResult.fullName : fullName.trim(),
          email: loginResult.ok ? loginResult.email : signupEmail.trim(),
        });
        toast.success("Account created! Welcome to NCERT Bhaiya! 🎉");
        navigate({ to: "/" });
      } else {
        setSignupError(result.message || "Sign up failed. Please try again.");
      }
    } catch {
      setSignupError("Something went wrong. Please try again.");
    } finally {
      setIsSigningUp(false);
    }
  };

  return (
    <div className="min-h-screen bg-mesh-dark flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Decorative blobs — pure CSS, no JS needed */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 rounded-full bg-neon-purple/8 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 rounded-full bg-neon-blue/8 blur-3xl pointer-events-none" />
      <div className="absolute top-3/4 left-1/3 w-64 h-64 rounded-full bg-neon-amber/5 blur-3xl pointer-events-none" />

      {/*
        PERFORMANCE: Plain div instead of motion.div with initial opacity:0.
        The original motion.div kept the entire form invisible until framer-motion
        hydrated and ran the entrance animation, which directly delayed FCP/LCP
        (the 'Welcome back!' heading was the LCP element but started hidden).
        A simple CSS fade-in via Tailwind animation is used instead — it starts
        from the CSS engine immediately, with no JS dependency.
      */}
      <div className="w-full max-w-md relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-300">
        {/* Brand header */}
        <div className="flex items-center gap-3 mb-7">
          <div className="relative">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-purple to-neon-blue flex items-center justify-center shadow-neon-purple">
              <BookOpen size={22} className="text-white" />
            </div>
            <div className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-neon-amber flex items-center justify-center">
              <Sparkles size={10} className="text-background" />
            </div>
          </div>
          <div>
            <div className="font-display font-bold text-xl text-foreground leading-tight flex items-center gap-1.5">
              NCERT Bhaiya
              <Star size={13} className="text-neon-amber fill-neon-amber" />
            </div>
            <div className="text-xs text-muted-foreground">
              India's #1 Free NCERT Platform
            </div>
          </div>
        </div>

        {/* Card */}
        <div className="glass-dark rounded-2xl border border-border/40 overflow-hidden shadow-card-dark">
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="w-full rounded-none border-b border-border/40 bg-background/20 p-0 h-12">
              <TabsTrigger
                value="login"
                data-ocid="auth.login.tab"
                className="flex-1 h-full rounded-none data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary text-sm font-medium transition-all"
              >
                Login
              </TabsTrigger>
              <TabsTrigger
                value="signup"
                data-ocid="auth.signup.tab"
                className="flex-1 h-full rounded-none data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary text-sm font-medium transition-all"
              >
                Sign Up
              </TabsTrigger>
            </TabsList>

            {/* ─── LOGIN TAB ────────────────────────────────────────────── */}
            <TabsContent value="login" className="p-6 space-y-5 mt-0">
              <div className="text-center">
                <h1 className="font-display text-xl font-bold text-foreground mb-1">
                  Welcome back!
                </h1>
                <p className="text-sm text-muted-foreground">
                  Sign in with your username and password
                </p>
              </div>

              <form onSubmit={handleLogin} className="space-y-4">
                {/* Username */}
                <div className="space-y-1.5">
                  <Label
                    htmlFor="login-username"
                    className="text-sm font-medium text-foreground/80 flex items-center gap-1.5"
                  >
                    <User size={13} className="text-neon-purple" />
                    Username
                  </Label>
                  <Input
                    id="login-username"
                    type="text"
                    value={loginUsername}
                    onChange={(e) => {
                      setLoginUsername(e.target.value);
                      setLoginError("");
                    }}
                    placeholder="Your username"
                    data-ocid="auth.login.input"
                    className="bg-background/50 border-border/50 focus:border-neon-purple/60 h-10"
                    autoComplete="username"
                    disabled={isLoggingIn}
                  />
                </div>

                {/* Password */}
                <div className="space-y-1.5">
                  <Label
                    htmlFor="login-password"
                    className="text-sm font-medium text-foreground/80"
                  >
                    Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="login-password"
                      type={showLoginPw ? "text" : "password"}
                      value={loginPassword}
                      onChange={(e) => {
                        setLoginPassword(e.target.value);
                        setLoginError("");
                      }}
                      placeholder="Your password"
                      data-ocid="auth.login.password_input"
                      className="bg-background/50 border-border/50 focus:border-neon-purple/60 h-10 pr-10"
                      autoComplete="current-password"
                      disabled={isLoggingIn}
                    />
                    <button
                      type="button"
                      onClick={() => setShowLoginPw((s) => !s)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                      tabIndex={-1}
                    >
                      {showLoginPw ? <EyeOff size={15} /> : <Eye size={15} />}
                    </button>
                  </div>
                </div>

                {/* Error */}
                <AnimatePresence>
                  {loginError && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-xs text-destructive bg-destructive/10 rounded-lg px-3 py-2"
                      data-ocid="auth.login.error_state"
                    >
                      {loginError}
                    </motion.p>
                  )}
                </AnimatePresence>

                <Button
                  type="submit"
                  disabled={isLoggingIn}
                  data-ocid="auth.login.submit_button"
                  className="w-full h-11 font-bold bg-gradient-to-r from-neon-purple to-neon-blue text-white hover:opacity-90 transition-all rounded-xl"
                >
                  {isLoggingIn ? (
                    <span className="flex items-center gap-2">
                      <Loader2 size={16} className="animate-spin" />
                      Signing in...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <LogIn size={16} />
                      Login
                    </span>
                  )}
                </Button>
              </form>
            </TabsContent>

            {/* ─── SIGNUP TAB ─────────────────────────────────────────────── */}
            <TabsContent value="signup" className="p-6 space-y-4 mt-0">
              <div className="text-center">
                <h1 className="font-display text-xl font-bold text-foreground mb-1">
                  Create Your Account
                </h1>
                <p className="text-sm text-muted-foreground mb-2">
                  It's free — start learning today!
                </p>
                {/* Persistence reassurance */}
                <div className="inline-flex items-center gap-1.5 text-xs text-green-400 bg-green-500/10 border border-green-500/20 rounded-full px-3 py-1">
                  <ShieldCheck size={12} />
                  Your account is permanently saved — log in from any device,
                  anytime.
                </div>
              </div>

              <form onSubmit={handleSignup} className="space-y-4">
                {/* Full Name */}
                <div className="space-y-1.5">
                  <Label
                    htmlFor="signup-fullname"
                    className="text-sm font-medium text-foreground/80"
                  >
                    Full Name
                  </Label>
                  <Input
                    id="signup-fullname"
                    type="text"
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
                      if (signupErrors.fullName)
                        setSignupErrors((p) => ({ ...p, fullName: "" }));
                    }}
                    placeholder="e.g., Rahul Sharma"
                    data-ocid="auth.signup.input"
                    className="bg-background/50 border-border/50 focus:border-neon-purple/60 h-10"
                    autoComplete="name"
                    disabled={isSigningUp}
                  />
                  {signupErrors.fullName && (
                    <p className="text-xs text-destructive">
                      {signupErrors.fullName}
                    </p>
                  )}
                </div>

                {/* Username */}
                <div className="space-y-1.5">
                  <Label
                    htmlFor="signup-username"
                    className="text-sm font-medium text-foreground/80"
                  >
                    Choose a Username
                  </Label>
                  <div className="relative">
                    <Input
                      id="signup-username"
                      type="text"
                      value={signupUsername}
                      onChange={(e) => {
                        setSignupUsername(e.target.value);
                        if (signupErrors.username)
                          setSignupErrors((p) => ({ ...p, username: "" }));
                      }}
                      placeholder="e.g., rahul_99"
                      data-ocid="auth.signup.username_input"
                      className="bg-background/50 border-border/50 focus:border-neon-purple/60 h-10 pr-28"
                      autoComplete="username"
                      disabled={isSigningUp}
                    />
                    {/* Availability indicator */}
                    {usernameStatus !== "idle" && (
                      <span
                        className={`absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full ${
                          usernameStatus === "checking"
                            ? "text-muted-foreground bg-muted/30"
                            : usernameStatus === "available"
                              ? "text-green-400 bg-green-500/10"
                              : "text-red-400 bg-red-500/10"
                        }`}
                      >
                        {usernameStatus === "checking" && (
                          <Loader2 size={10} className="animate-spin" />
                        )}
                        {usernameStatus === "available" && (
                          <CheckCircle size={10} />
                        )}
                        {usernameStatus === "taken" && <XCircle size={10} />}
                        {usernameStatus === "checking"
                          ? "Checking..."
                          : usernameStatus === "available"
                            ? "Available"
                            : "Taken"}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Letters, numbers, and underscores only. No spaces.
                  </p>
                  {signupErrors.username && (
                    <p
                      className="text-xs text-destructive"
                      data-ocid="auth.signup.error_state"
                    >
                      {signupErrors.username}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <Label
                    htmlFor="signup-email"
                    className="text-sm font-medium text-foreground/80"
                  >
                    Email Address{" "}
                    <span className="text-muted-foreground font-normal">
                      (for recovery)
                    </span>
                  </Label>
                  <Input
                    id="signup-email"
                    type="email"
                    value={signupEmail}
                    onChange={(e) => {
                      setSignupEmail(e.target.value);
                      if (signupErrors.email)
                        setSignupErrors((p) => ({ ...p, email: "" }));
                    }}
                    placeholder="you@gmail.com"
                    data-ocid="auth.signup.email_input"
                    className="bg-background/50 border-border/50 focus:border-neon-purple/60 h-10"
                    autoComplete="email"
                    disabled={isSigningUp}
                  />
                  {signupErrors.email && (
                    <p className="text-xs text-destructive">
                      {signupErrors.email}
                    </p>
                  )}
                </div>

                {/* Password */}
                <div className="space-y-1.5">
                  <Label
                    htmlFor="signup-password"
                    className="text-sm font-medium text-foreground/80"
                  >
                    Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="signup-password"
                      type={showSignupPw ? "text" : "password"}
                      value={signupPassword}
                      onChange={(e) => {
                        setSignupPassword(e.target.value);
                        if (signupErrors.password)
                          setSignupErrors((p) => ({ ...p, password: "" }));
                      }}
                      placeholder="At least 5 characters"
                      data-ocid="auth.signup.password_input"
                      className="bg-background/50 border-border/50 focus:border-neon-purple/60 h-10 pr-10"
                      autoComplete="new-password"
                      disabled={isSigningUp}
                    />
                    <button
                      type="button"
                      onClick={() => setShowSignupPw((s) => !s)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                      tabIndex={-1}
                    >
                      {showSignupPw ? <EyeOff size={15} /> : <Eye size={15} />}
                    </button>
                  </div>
                  {signupErrors.password && (
                    <p className="text-xs text-destructive">
                      {signupErrors.password}
                    </p>
                  )}
                </div>

                {/* Global signup error */}
                <AnimatePresence>
                  {signupError && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-xs text-destructive bg-destructive/10 rounded-lg px-3 py-2"
                      data-ocid="auth.signup.global_error_state"
                    >
                      {signupError}
                    </motion.p>
                  )}
                </AnimatePresence>

                <Button
                  type="submit"
                  disabled={
                    isSigningUp ||
                    usernameStatus === "taken" ||
                    usernameStatus === "checking"
                  }
                  data-ocid="auth.signup.submit_button"
                  className="w-full h-11 font-bold bg-gradient-to-r from-neon-purple to-neon-blue text-white hover:opacity-90 transition-all rounded-xl"
                >
                  {isSigningUp ? (
                    <span className="flex items-center gap-2">
                      <Loader2 size={16} className="animate-spin" />
                      Creating account...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <GraduationCap size={17} />
                      Create Account
                    </span>
                  )}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </div>

        <p className="text-xs text-muted-foreground text-center mt-5">
          © {new Date().getFullYear()} NCERT Bhaiya — Built with ❤️ using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors underline"
          >
            caffeine.ai
          </a>
        </p>
      </div>
    </div>
  );
}
