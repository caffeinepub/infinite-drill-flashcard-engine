import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowLeft,
  BookOpen,
  Brain,
  Eye,
  EyeOff,
  GraduationCap,
  Loader2,
  Sparkles,
  Star,
  User,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { useInternetIdentity } from "../hooks/useInternetIdentity";

const features = [
  {
    icon: BookOpen,
    label: "Full NCERT Coverage",
    desc: "Class 1–12, all subjects",
    color: "text-neon-purple",
  },
  {
    icon: Brain,
    label: "AI Teacher",
    desc: "Ask anything, get answers instantly",
    color: "text-neon-blue",
  },
  {
    icon: Zap,
    label: "Interactive Quizzes",
    desc: "Gamified learning with XP & ranks",
    color: "text-neon-amber",
  },
  {
    icon: GraduationCap,
    label: "Concept Videos",
    desc: "Animated video explanations",
    color: "text-neon-green",
  },
];

const classes = [
  ...Array.from({ length: 12 }, (_, i) => ({
    value: `Class ${i + 1}`,
    label: `Class ${i + 1}`,
  })),
  { value: "JEE", label: "JEE (IIT Entrance)" },
];

const countries = [
  "India",
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "UAE",
  "Singapore",
  "Nepal",
  "Bangladesh",
  "Pakistan",
  "Sri Lanka",
  "Germany",
  "France",
  "Japan",
  "China",
  "Brazil",
  "Nigeria",
  "South Africa",
  "Others",
];

export default function Login() {
  const { login, isLoggingIn } = useInternetIdentity();
  const [showAuth, setShowAuth] = useState(false);

  // Sign up form state
  const [name, setName] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [country, setCountry] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [signupErrors, setSignupErrors] = useState<Record<string, string>>({});
  const [isSigningUp, setIsSigningUp] = useState(false);

  const validateSignup = () => {
    const errors: Record<string, string> = {};
    if (!name.trim()) errors.name = "Name is required";
    if (!studentClass) errors.studentClass = "Please select your class";
    if (!country) errors.country = "Please select your country";
    if (!password || password.length < 6)
      errors.password = "Password must be at least 6 characters";
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
    setIsSigningUp(true);
    try {
      sessionStorage.setItem(
        "pendingSignup",
        JSON.stringify({ name: name.trim(), studentClass, country, password }),
      );
      await login();
    } catch {
      sessionStorage.removeItem("pendingSignup");
    } finally {
      setIsSigningUp(false);
    }
  };

  if (!showAuth) {
    return (
      <div className="min-h-screen bg-mesh-dark flex flex-col overflow-hidden relative">
        {/* Decorative orbs */}
        <div className="absolute top-1/4 -left-32 w-64 h-64 rounded-full bg-neon-purple/10 hidden md:block blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 rounded-full bg-neon-blue/10 hidden md:block blur-3xl pointer-events-none" />

        <div className="flex-1 flex flex-col items-center justify-center px-4 py-12 relative z-10">
          {/* Logo */}
          <div className="flex flex-col items-center mb-10">
            <div className="relative mb-6">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-neon-purple to-neon-blue flex items-center justify-center shadow-neon-purple glow-purple">
                <BookOpen size={36} className="text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-neon-amber flex items-center justify-center">
                <Sparkles size={12} className="text-background" />
              </div>
            </div>

            <div className="flex items-center gap-2 mb-3">
              <Star size={14} className="text-neon-amber fill-neon-amber" />
              <span className="text-xs font-mono text-neon-amber uppercase tracking-widest">
                India's #1 NCERT Platform
              </span>
              <Star size={14} className="text-neon-amber fill-neon-amber" />
            </div>

            <h1 className="font-display text-5xl md:text-6xl font-bold text-center leading-tight mb-4">
              <span className="text-gradient-purple">NCERT</span>
              <br />
              <span className="text-foreground">Bhaiya</span>
            </h1>

            <p className="text-muted-foreground text-center text-base md:text-lg max-w-md leading-relaxed">
              Complete NCERT content for Classes 1–12, AI-powered teacher,
              animated concept videos, and gamified quizzes — all in one place.
            </p>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-2 gap-3 mb-10 max-w-md w-full">
            {features.map(({ icon: Icon, label, desc, color }) => (
              <div
                key={label}
                className="glass-dark rounded-xl p-3 flex items-start gap-2.5"
              >
                <Icon size={18} className={`${color} shrink-0 mt-0.5`} />
                <div>
                  <div className="text-xs font-semibold text-foreground leading-tight">
                    {label}
                  </div>
                  <div className="text-[11px] text-muted-foreground mt-0.5 leading-tight">
                    {desc}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Get Started CTA */}
          <div className="flex flex-col items-center gap-4 w-full max-w-sm">
            <Button
              onClick={() => setShowAuth(true)}
              data-ocid="landing.primary_button"
              size="lg"
              className="w-full h-14 text-base font-bold bg-gradient-to-r from-neon-purple to-neon-blue hover:opacity-90 text-white shadow-neon-purple transition-all duration-200 hover:shadow-lg hover:scale-[1.02] rounded-xl"
            >
              <GraduationCap size={20} className="mr-2" />
              Get Started — It's Free
            </Button>
            <p className="text-xs text-muted-foreground text-center">
              Join thousands of students studying smarter
            </p>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-8 mt-10">
            {[
              { value: "12", label: "Classes" },
              { value: "500+", label: "Chapters" },
              { value: "AI", label: "Teacher" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="font-display text-2xl font-bold text-gradient-purple">
                  {value}
                </div>
                <div className="text-xs text-muted-foreground">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <footer className="py-4 text-center text-xs text-muted-foreground relative z-10">
          © {new Date().getFullYear()} NCERT Bhaiya — Built with ❤️ using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors underline"
          >
            caffeine.ai
          </a>
        </footer>
      </div>
    );
  }

  // Auth panel
  return (
    <div className="min-h-screen bg-mesh-dark flex flex-col items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute top-1/4 -left-32 w-64 h-64 rounded-full bg-neon-purple/10 hidden md:block blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 rounded-full bg-neon-blue/10 hidden md:block blur-3xl pointer-events-none" />

      <div className="w-full max-w-md relative z-10">
        {/* Back button */}
        <button
          type="button"
          onClick={() => setShowAuth(false)}
          data-ocid="auth.back_button"
          className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft size={16} />
          Back
        </button>

        {/* Logo small */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neon-purple to-neon-blue flex items-center justify-center">
            <BookOpen size={20} className="text-white" />
          </div>
          <div>
            <div className="font-display font-bold text-foreground leading-tight">
              NCERT Bhaiya
            </div>
            <div className="text-xs text-muted-foreground">
              India's #1 Free NCERT Platform
            </div>
          </div>
        </div>

        {/* Auth card */}
        <div className="glass-dark rounded-2xl p-6 border border-border/40">
          <Tabs defaultValue="login">
            <TabsList className="w-full mb-6 bg-background/30">
              <TabsTrigger
                value="login"
                className="flex-1"
                data-ocid="auth.login_tab"
              >
                Login
              </TabsTrigger>
              <TabsTrigger
                value="signup"
                className="flex-1"
                data-ocid="auth.signup_tab"
              >
                Sign Up
              </TabsTrigger>
            </TabsList>

            {/* LOGIN TAB */}
            <TabsContent value="login" className="space-y-5">
              <div className="text-center">
                <h2 className="font-display text-xl font-bold text-foreground mb-1">
                  Welcome back!
                </h2>
                <p className="text-sm text-muted-foreground">
                  Continue your learning journey
                </p>
              </div>

              <div className="glass-dark rounded-xl p-4 border border-neon-purple/20 text-center space-y-1">
                <div className="text-sm font-medium text-foreground">
                  🔐 Internet Identity Login
                </div>
                <div className="text-xs text-muted-foreground">
                  Secure, private, no passwords needed
                </div>
              </div>

              <Button
                onClick={login}
                disabled={isLoggingIn}
                data-ocid="auth.login.primary_button"
                className="w-full h-12 font-bold bg-gradient-to-r from-neon-purple to-neon-blue text-white hover:opacity-90 transition-all rounded-xl"
              >
                {isLoggingIn ? (
                  <span className="flex items-center gap-2">
                    <Loader2 size={16} className="animate-spin" />
                    Connecting...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <GraduationCap size={18} />
                    Login with Internet Identity
                  </span>
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Secure, private — no email or phone needed
              </p>
            </TabsContent>

            {/* SIGN UP TAB */}
            <TabsContent value="signup">
              <form onSubmit={handleSignup} className="space-y-4">
                <div className="text-center mb-2">
                  <h2 className="font-display text-xl font-bold text-foreground mb-1">
                    Create your account
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Start learning for free today
                  </p>
                </div>

                {/* Name */}
                <div className="space-y-1.5">
                  <Label className="text-sm font-medium text-foreground/80 flex items-center gap-1.5">
                    <User size={13} className="text-neon-purple" />
                    Full Name
                  </Label>
                  <Input
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (signupErrors.name)
                        setSignupErrors((p) => ({ ...p, name: "" }));
                    }}
                    placeholder="e.g., Rahul Sharma"
                    data-ocid="auth.signup.name_input"
                    className="bg-background/50 border-border/50 focus:border-neon-purple/50 h-10"
                    autoComplete="name"
                  />
                  {signupErrors.name && (
                    <p className="text-xs text-destructive">
                      {signupErrors.name}
                    </p>
                  )}
                </div>

                {/* Class */}
                <div className="space-y-1.5">
                  <Label className="text-sm font-medium text-foreground/80 flex items-center gap-1.5">
                    <BookOpen size={13} className="text-neon-blue" />
                    Class
                  </Label>
                  <Select
                    value={studentClass}
                    onValueChange={(v) => {
                      setStudentClass(v);
                      if (signupErrors.studentClass)
                        setSignupErrors((p) => ({ ...p, studentClass: "" }));
                    }}
                  >
                    <SelectTrigger
                      data-ocid="auth.signup.class_select"
                      className="bg-background/50 border-border/50 h-10"
                    >
                      <SelectValue placeholder="Select your class..." />
                    </SelectTrigger>
                    <SelectContent>
                      {classes.map(({ value, label }) => (
                        <SelectItem key={value} value={value}>
                          {label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {signupErrors.studentClass && (
                    <p className="text-xs text-destructive">
                      {signupErrors.studentClass}
                    </p>
                  )}
                </div>

                {/* Country */}
                <div className="space-y-1.5">
                  <Label className="text-sm font-medium text-foreground/80">
                    🌍 Country
                  </Label>
                  <Select
                    value={country}
                    onValueChange={(v) => {
                      setCountry(v);
                      if (signupErrors.country)
                        setSignupErrors((p) => ({ ...p, country: "" }));
                    }}
                  >
                    <SelectTrigger
                      data-ocid="auth.signup.country_select"
                      className="bg-background/50 border-border/50 h-10"
                    >
                      <SelectValue placeholder="Select your country..." />
                    </SelectTrigger>
                    <SelectContent>
                      {countries.map((c) => (
                        <SelectItem key={c} value={c}>
                          {c}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {signupErrors.country && (
                    <p className="text-xs text-destructive">
                      {signupErrors.country}
                    </p>
                  )}
                </div>

                {/* Password */}
                <div className="space-y-1.5">
                  <Label className="text-sm font-medium text-foreground/80">
                    🔒 Password
                  </Label>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        if (signupErrors.password)
                          setSignupErrors((p) => ({ ...p, password: "" }));
                      }}
                      placeholder="At least 6 characters"
                      data-ocid="auth.signup.password_input"
                      className="bg-background/50 border-border/50 focus:border-neon-purple/50 h-10 pr-10"
                      autoComplete="new-password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((s) => !s)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                      tabIndex={-1}
                    >
                      {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                    </button>
                  </div>
                  {signupErrors.password && (
                    <p className="text-xs text-destructive">
                      {signupErrors.password}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSigningUp || isLoggingIn}
                  data-ocid="auth.signup.submit_button"
                  className="w-full h-12 font-bold bg-gradient-to-r from-neon-purple to-neon-blue text-white hover:opacity-90 transition-all rounded-xl mt-2"
                >
                  {isSigningUp || isLoggingIn ? (
                    <span className="flex items-center gap-2">
                      <Loader2 size={16} className="animate-spin" />
                      Creating account...
                    </span>
                  ) : (
                    "Create Account"
                  )}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By signing up, you agree to our terms. Internet Identity
                  secures your login.
                </p>
              </form>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
