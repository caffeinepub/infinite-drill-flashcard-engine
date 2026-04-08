import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useInternetIdentity } from "@caffeineai/core-infrastructure";
import {
  BookOpen,
  CheckCircle,
  Eye,
  EyeOff,
  GraduationCap,
  Loader2,
  LogIn,
  Sparkles,
  Star,
  User,
  XCircle,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  isUsernameTaken,
  saveCredentials,
  verifyCredentials,
} from "../utils/credentialStore";

type View = "login" | "signup";

const REMEMBER_KEY = "ncert_remember_username";

export default function Login() {
  const { login, isLoggingIn } = useInternetIdentity();
  const [view, setView] = useState<View>("login");

  // --- Login state ---
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [forgotVisible, setForgotVisible] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);

  // --- Signup state ---
  const [fullName, setFullName] = useState("");
  const [signupUsername, setSignupUsername] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [showSignupPassword, setShowSignupPassword] = useState(false);
  const [signupErrors, setSignupErrors] = useState<Record<string, string>>({});
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [signupError, setSignupError] = useState("");

  // Username availability
  type Availability = "idle" | "taken" | "available";
  const [usernameAvailability, setUsernameAvailability] =
    useState<Availability>("idle");
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Pre-fill remembered username on mount
  useEffect(() => {
    const saved = localStorage.getItem(REMEMBER_KEY);
    if (saved) {
      setLoginUsername(saved);
      setRememberMe(true);
    }
  }, []);

  // Debounced username availability check
  useEffect(() => {
    if (!signupUsername.trim() || signupUsername.length < 3) {
      setUsernameAvailability("idle");
      return;
    }
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      const taken = isUsernameTaken(signupUsername);
      setUsernameAvailability(taken ? "taken" : "available");
    }, 300);
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [signupUsername]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!loginUsername.trim() || !loginPassword) {
      setLoginError("Please enter your username and password");
      return;
    }
    setLoginError("");
    setIsVerifying(true);
    try {
      const valid = await verifyCredentials(loginUsername, loginPassword);
      if (!valid) {
        setLoginError("Incorrect username or password");
        return;
      }
      if (rememberMe) {
        localStorage.setItem(REMEMBER_KEY, loginUsername.trim());
      } else {
        localStorage.removeItem(REMEMBER_KEY);
      }
      await login();
    } catch {
      setLoginError("Login failed. Please try again.");
    } finally {
      setIsVerifying(false);
    }
  };

  const validateSignup = () => {
    const errors: Record<string, string> = {};
    if (!fullName.trim()) errors.fullName = "Full name is required";
    if (!signupUsername.trim()) {
      errors.signupUsername = "Username is required";
    } else if (signupUsername.length < 3) {
      errors.signupUsername = "Username must be at least 3 characters";
    } else if (/\s/.test(signupUsername)) {
      errors.signupUsername = "Username cannot contain spaces";
    } else if (!/^[a-zA-Z0-9_]+$/.test(signupUsername)) {
      errors.signupUsername = "Only letters, numbers, and underscores allowed";
    } else if (isUsernameTaken(signupUsername)) {
      errors.signupUsername = "This username is already taken";
    }
    if (!signupEmail.trim()) {
      errors.signupEmail = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(signupEmail)) {
      errors.signupEmail = "Enter a valid email address";
    }
    if (!signupPassword || signupPassword.length < 5) {
      errors.signupPassword = "Password must be at least 5 characters";
    }
    return errors;
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateSignup();
    if (Object.keys(errors).length > 0) {
      setSignupErrors(errors);
      return;
    }
    setSignupErrors({});
    setSignupError("");
    setIsSigningUp(true);
    try {
      await saveCredentials(
        signupUsername,
        signupPassword,
        signupEmail,
        fullName,
      );
      sessionStorage.setItem(
        "pendingSignup",
        JSON.stringify({
          name: fullName.trim(),
          studentClass: "",
          country: "",
          password: signupPassword,
        }),
      );
      await login();
    } catch {
      sessionStorage.removeItem("pendingSignup");
      setSignupError("Something went wrong. Please try again.");
    } finally {
      setIsSigningUp(false);
    }
  };

  const isLoginLoading = isLoggingIn || isVerifying;
  const isSignupLoading = isSigningUp || isLoggingIn;

  return (
    <div className="min-h-screen bg-mesh-dark flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Decorative orbs */}
      <div className="absolute top-1/4 -left-32 w-72 h-72 rounded-full bg-neon-purple/10 hidden md:block blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-72 h-72 rounded-full bg-neon-blue/10 hidden md:block blur-3xl pointer-events-none" />
      <div className="absolute top-3/4 left-1/4 w-48 h-48 rounded-full bg-neon-amber/5 hidden md:block blur-3xl pointer-events-none" />

      <div className="w-full max-w-md relative z-10">
        {/* Branding header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="relative">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-purple to-neon-blue flex items-center justify-center shadow-neon-purple">
              <BookOpen size={22} className="text-white" />
            </div>
            <div className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-neon-amber flex items-center justify-center">
              <Sparkles size={10} className="text-background" />
            </div>
          </div>
          <div>
            <div className="font-display font-bold text-lg text-foreground leading-tight flex items-center gap-1.5">
              NCERT Bhaiya
              <Star size={12} className="text-neon-amber fill-neon-amber" />
            </div>
            <div className="text-xs text-muted-foreground">
              India's #1 Free NCERT Platform
            </div>
          </div>
        </div>

        {/* Auth card */}
        <div className="glass-dark rounded-2xl p-6 border border-border/40">
          {view === "login" ? (
            /* ===== LOGIN VIEW ===== */
            <form onSubmit={handleLogin} className="space-y-5">
              <div className="text-center">
                <h2 className="font-display text-xl font-bold text-foreground mb-1">
                  Welcome back!
                </h2>
                <p className="text-sm text-muted-foreground">
                  Enter your username and password to continue
                </p>
              </div>

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
                  data-ocid="auth.login.username_input"
                  className="bg-background/50 border-border/50 focus:border-neon-purple/50 h-10"
                  autoComplete="username"
                  disabled={isLoginLoading}
                />
              </div>

              {/* Password */}
              <div className="space-y-1.5">
                <Label
                  htmlFor="login-password"
                  className="text-sm font-medium text-foreground/80"
                >
                  🔒 Password
                </Label>
                <div className="relative">
                  <Input
                    id="login-password"
                    type={showLoginPassword ? "text" : "password"}
                    value={loginPassword}
                    onChange={(e) => {
                      setLoginPassword(e.target.value);
                      setLoginError("");
                    }}
                    placeholder="Your password"
                    data-ocid="auth.login.password_input"
                    className="bg-background/50 border-border/50 focus:border-neon-purple/50 h-10 pr-10"
                    autoComplete="current-password"
                    disabled={isLoginLoading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowLoginPassword((s) => !s)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    tabIndex={-1}
                  >
                    {showLoginPassword ? (
                      <EyeOff size={15} />
                    ) : (
                      <Eye size={15} />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember me + Forgot password row */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="remember-me"
                    checked={rememberMe}
                    onCheckedChange={(v) => setRememberMe(Boolean(v))}
                    data-ocid="auth.login.remember_checkbox"
                    className="border-border/60"
                  />
                  <Label
                    htmlFor="remember-me"
                    className="text-xs text-muted-foreground cursor-pointer select-none"
                  >
                    Remember My Username
                  </Label>
                </div>
                <button
                  type="button"
                  onClick={() => setForgotVisible((v) => !v)}
                  data-ocid="auth.login.forgot_link"
                  className="text-xs text-neon-purple hover:underline bg-transparent border-0 p-0 cursor-pointer"
                >
                  Forgot Password?
                </button>
              </div>

              {/* Forgot password note */}
              {forgotVisible && (
                <p className="text-xs text-muted-foreground bg-background/40 border border-border/30 rounded-lg px-3 py-2">
                  💡 Contact support at{" "}
                  <a
                    href="mailto:Ncertbhaiya2504@gmail.com"
                    className="text-neon-blue hover:underline"
                  >
                    Ncertbhaiya2504@gmail.com
                  </a>{" "}
                  or create a new account below.
                </p>
              )}

              {/* Error */}
              {loginError && (
                <p
                  className="text-xs text-destructive bg-destructive/10 rounded-lg px-3 py-2"
                  data-ocid="auth.login.error_state"
                >
                  {loginError}
                </p>
              )}

              <Button
                type="submit"
                disabled={isLoginLoading}
                data-ocid="auth.login.submit_button"
                className="w-full h-11 font-bold bg-gradient-to-r from-neon-purple to-neon-blue text-white hover:opacity-90 transition-all rounded-xl"
              >
                {isLoginLoading ? (
                  <span className="flex items-center gap-2">
                    <Loader2 size={16} className="animate-spin" />
                    Signing in...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <LogIn size={17} />
                    Login
                  </span>
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Don't have an account?{" "}
                <button
                  type="button"
                  data-ocid="auth.login.signup_link"
                  className="text-neon-purple hover:underline bg-transparent border-0 p-0 cursor-pointer font-medium"
                  onClick={() => setView("signup")}
                >
                  Sign up free
                </button>
              </p>
            </form>
          ) : (
            /* ===== SIGNUP VIEW ===== */
            <form onSubmit={handleSignup} className="space-y-4">
              <div className="text-center">
                <h2 className="font-display text-xl font-bold text-foreground mb-1">
                  Create Your Account
                </h2>
                <p className="text-sm text-muted-foreground">
                  It's free — start learning today!
                </p>
              </div>

              {/* Full Name */}
              <div className="space-y-1.5">
                <Label
                  htmlFor="signup-fullname"
                  className="text-sm font-medium text-foreground/80 flex items-center gap-1.5"
                >
                  <User size={13} className="text-neon-purple" />
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
                  data-ocid="auth.signup.fullname_input"
                  className="bg-background/50 border-border/50 focus:border-neon-purple/50 h-10"
                  autoComplete="name"
                  disabled={isSignupLoading}
                />
                {signupErrors.fullName && (
                  <p className="text-xs text-destructive">
                    {signupErrors.fullName}
                  </p>
                )}
              </div>

              {/* Username + availability */}
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
                      if (signupErrors.signupUsername)
                        setSignupErrors((p) => ({
                          ...p,
                          signupUsername: "",
                        }));
                    }}
                    placeholder="e.g., rahul_sharma99"
                    data-ocid="auth.signup.username_input"
                    className="bg-background/50 border-border/50 focus:border-neon-purple/50 h-10 pr-28"
                    autoComplete="username"
                    disabled={isSignupLoading}
                  />
                  {/* Availability badge */}
                  {usernameAvailability !== "idle" && (
                    <span
                      className={`absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full ${
                        usernameAvailability === "available"
                          ? "text-green-400 bg-green-500/10"
                          : "text-red-400 bg-red-500/10"
                      }`}
                    >
                      {usernameAvailability === "available" ? (
                        <>
                          <CheckCircle size={11} />
                          Available
                        </>
                      ) : (
                        <>
                          <XCircle size={11} />
                          Taken
                        </>
                      )}
                    </span>
                  )}
                </div>
                <p className="text-xs text-muted-foreground">
                  Letters, numbers and underscores only. No spaces.
                </p>
                {signupErrors.signupUsername && (
                  <p className="text-xs text-destructive">
                    {signupErrors.signupUsername}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <Label
                  htmlFor="signup-email"
                  className="text-sm font-medium text-foreground/80"
                >
                  📧 Email Address{" "}
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
                    if (signupErrors.signupEmail)
                      setSignupErrors((p) => ({ ...p, signupEmail: "" }));
                  }}
                  placeholder="you@example.com"
                  data-ocid="auth.signup.email_input"
                  className="bg-background/50 border-border/50 focus:border-neon-purple/50 h-10"
                  autoComplete="email"
                  disabled={isSignupLoading}
                />
                {signupErrors.signupEmail && (
                  <p className="text-xs text-destructive">
                    {signupErrors.signupEmail}
                  </p>
                )}
              </div>

              {/* Password */}
              <div className="space-y-1.5">
                <Label
                  htmlFor="signup-password"
                  className="text-sm font-medium text-foreground/80"
                >
                  🔒 Password
                </Label>
                <div className="relative">
                  <Input
                    id="signup-password"
                    type={showSignupPassword ? "text" : "password"}
                    value={signupPassword}
                    onChange={(e) => {
                      setSignupPassword(e.target.value);
                      if (signupErrors.signupPassword)
                        setSignupErrors((p) => ({
                          ...p,
                          signupPassword: "",
                        }));
                    }}
                    placeholder="At least 5 characters"
                    data-ocid="auth.signup.password_input"
                    className="bg-background/50 border-border/50 focus:border-neon-purple/50 h-10 pr-10"
                    autoComplete="new-password"
                    disabled={isSignupLoading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowSignupPassword((s) => !s)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    tabIndex={-1}
                  >
                    {showSignupPassword ? (
                      <EyeOff size={15} />
                    ) : (
                      <Eye size={15} />
                    )}
                  </button>
                </div>
                {signupErrors.signupPassword && (
                  <p className="text-xs text-destructive">
                    {signupErrors.signupPassword}
                  </p>
                )}
              </div>

              {/* Signup error */}
              {signupError && (
                <p
                  className="text-xs text-destructive bg-destructive/10 rounded-lg px-3 py-2"
                  data-ocid="auth.signup.error_state"
                >
                  {signupError}
                </p>
              )}

              <Button
                type="submit"
                disabled={isSignupLoading}
                data-ocid="auth.signup.submit_button"
                className="w-full h-11 font-bold bg-gradient-to-r from-neon-purple to-neon-blue text-white hover:opacity-90 transition-all rounded-xl"
              >
                {isSignupLoading ? (
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

              <p className="text-xs text-muted-foreground text-center">
                Already have a username?{" "}
                <button
                  type="button"
                  data-ocid="auth.signup.login_link"
                  className="text-neon-purple hover:underline bg-transparent border-0 p-0 cursor-pointer font-medium"
                  onClick={() => setView("login")}
                >
                  Log in here
                </button>
              </p>
            </form>
          )}
        </div>

        <p className="text-xs text-muted-foreground text-center mt-4">
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
