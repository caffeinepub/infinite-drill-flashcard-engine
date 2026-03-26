import { d as useAuth, i as useNavigate, r as reactExports, j as jsxRuntimeExports, b as ue } from "./index-Byw4S5DT.js";
import { B as Button } from "./button-DkpHnvfj.js";
import { I as Input } from "./index-LxvqYrMU.js";
import { L as Label } from "./label-CQKBJlrb.js";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent, E as EyeOff, d as Eye } from "./tabs-CWP7r61Q.js";
import { u as useActor } from "./useActor-BOi-VfDd.js";
import { m as motion } from "./proxy-4Idy-Vh5.js";
import { B as BookOpen } from "./book-open-BJJSygIM.js";
import { S as Sparkles } from "./sparkles-B_aYk3uC.js";
import { S as Star } from "./star-Z3ytvqyy.js";
import { U as User } from "./user-Cpez7SZu.js";
import { L as LoaderCircle } from "./loader-circle-BKLliVGN.js";
import { L as LogIn } from "./log-in-Ji1WGegL.js";
import { c as createLucideIcon } from "./createLucideIcon-qxRjawbb.js";
import { C as CircleCheckBig } from "./circle-check-big-CIbhzrJH.js";
import { C as CircleX } from "./circle-x-ye4tXbzj.js";
import { G as GraduationCap } from "./graduation-cap-Cvj5XJOb.js";
import { A as AnimatePresence } from "./index-BPOfjV_G.js";
import "./index-DkUX1CtS.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const ShieldCheck = createLucideIcon("shield-check", __iconNode);
function Auth() {
  const { loginUser } = useAuth();
  const { actor } = useActor();
  const navigate = useNavigate();
  const [loginUsername, setLoginUsername] = reactExports.useState("");
  const [loginPassword, setLoginPassword] = reactExports.useState("");
  const [showLoginPw, setShowLoginPw] = reactExports.useState(false);
  const [loginError, setLoginError] = reactExports.useState("");
  const [isLoggingIn, setIsLoggingIn] = reactExports.useState(false);
  const [fullName, setFullName] = reactExports.useState("");
  const [signupUsername, setSignupUsername] = reactExports.useState("");
  const [signupEmail, setSignupEmail] = reactExports.useState("");
  const [signupPassword, setSignupPassword] = reactExports.useState("");
  const [showSignupPw, setShowSignupPw] = reactExports.useState(false);
  const [signupErrors, setSignupErrors] = reactExports.useState({});
  const [signupError, setSignupError] = reactExports.useState("");
  const [isSigningUp, setIsSigningUp] = reactExports.useState(false);
  const [usernameStatus, setUsernameStatus] = reactExports.useState("idle");
  const debounceRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (!signupUsername.trim() || signupUsername.length < 3 || !/^[a-zA-Z0-9_]+$/.test(signupUsername)) {
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
          signupUsername.trim()
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
  const handleLogin = async (e) => {
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
          email: result.email
        });
        ue.success(`Welcome back, ${result.fullName}!`);
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
  const validateSignup = () => {
    const errors = {};
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
  const handleSignup = async (e) => {
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
        signupEmail.trim()
      );
      if (result.ok) {
        const loginResult = await actor.login(
          signupUsername.trim(),
          signupPassword
        );
        loginUser({
          username: signupUsername.trim(),
          fullName: loginResult.ok ? loginResult.fullName : fullName.trim(),
          email: loginResult.ok ? loginResult.email : signupEmail.trim()
        });
        ue.success("Account created! Welcome to NCERT Bhaiya! 🎉");
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-mesh-dark flex flex-col items-center justify-center px-4 relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/4 -left-40 w-96 h-96 rounded-full bg-neon-purple/8 blur-3xl pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-1/4 -right-40 w-96 h-96 rounded-full bg-neon-blue/8 blur-3xl pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3/4 left-1/3 w-64 h-64 rounded-full bg-neon-amber/5 blur-3xl pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.4, ease: "easeOut" },
        className: "w-full max-w-md relative z-10",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-7", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-gradient-to-br from-neon-purple to-neon-blue flex items-center justify-center shadow-neon-purple", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { size: 22, className: "text-white" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-neon-amber flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 10, className: "text-background" }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display font-bold text-xl text-foreground leading-tight flex items-center gap-1.5", children: [
                "NCERT Bhaiya",
                /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 13, className: "text-neon-amber fill-neon-amber" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "India's #1 Free NCERT Platform" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass-dark rounded-2xl border border-border/40 overflow-hidden shadow-card-dark", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "login", className: "w-full", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "w-full rounded-none border-b border-border/40 bg-background/20 p-0 h-12", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                TabsTrigger,
                {
                  value: "login",
                  "data-ocid": "auth.login.tab",
                  className: "flex-1 h-full rounded-none data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary text-sm font-medium transition-all",
                  children: "Login"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                TabsTrigger,
                {
                  value: "signup",
                  "data-ocid": "auth.signup.tab",
                  className: "flex-1 h-full rounded-none data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary text-sm font-medium transition-all",
                  children: "Sign Up"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "login", className: "p-6 space-y-5 mt-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-xl font-bold text-foreground mb-1", children: "Welcome back!" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Sign in with your username and password" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleLogin, className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Label,
                    {
                      htmlFor: "login-username",
                      className: "text-sm font-medium text-foreground/80 flex items-center gap-1.5",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(User, { size: 13, className: "text-neon-purple" }),
                        "Username"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "login-username",
                      type: "text",
                      value: loginUsername,
                      onChange: (e) => {
                        setLoginUsername(e.target.value);
                        setLoginError("");
                      },
                      placeholder: "Your username",
                      "data-ocid": "auth.login.input",
                      className: "bg-background/50 border-border/50 focus:border-neon-purple/60 h-10",
                      autoComplete: "username",
                      disabled: isLoggingIn
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Label,
                    {
                      htmlFor: "login-password",
                      className: "text-sm font-medium text-foreground/80",
                      children: "Password"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "login-password",
                        type: showLoginPw ? "text" : "password",
                        value: loginPassword,
                        onChange: (e) => {
                          setLoginPassword(e.target.value);
                          setLoginError("");
                        },
                        placeholder: "Your password",
                        "data-ocid": "auth.login.password_input",
                        className: "bg-background/50 border-border/50 focus:border-neon-purple/60 h-10 pr-10",
                        autoComplete: "current-password",
                        disabled: isLoggingIn
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => setShowLoginPw((s) => !s),
                        className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors",
                        tabIndex: -1,
                        children: showLoginPw ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { size: 15 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { size: 15 })
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: loginError && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.p,
                  {
                    initial: { opacity: 0, height: 0 },
                    animate: { opacity: 1, height: "auto" },
                    exit: { opacity: 0, height: 0 },
                    className: "text-xs text-destructive bg-destructive/10 rounded-lg px-3 py-2",
                    "data-ocid": "auth.login.error_state",
                    children: loginError
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    type: "submit",
                    disabled: isLoggingIn,
                    "data-ocid": "auth.login.submit_button",
                    className: "w-full h-11 font-bold bg-gradient-to-r from-neon-purple to-neon-blue text-white hover:opacity-90 transition-all rounded-xl",
                    children: isLoggingIn ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { size: 16, className: "animate-spin" }),
                      "Signing in..."
                    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(LogIn, { size: 16 }),
                      "Login"
                    ] })
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "signup", className: "p-6 space-y-4 mt-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-xl font-bold text-foreground mb-1", children: "Create Your Account" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-2", children: "It's free — start learning today!" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-1.5 text-xs text-green-400 bg-green-500/10 border border-green-500/20 rounded-full px-3 py-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { size: 12 }),
                  "Your account is permanently saved — log in from any device, anytime."
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSignup, className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Label,
                    {
                      htmlFor: "signup-fullname",
                      className: "text-sm font-medium text-foreground/80",
                      children: "Full Name"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "signup-fullname",
                      type: "text",
                      value: fullName,
                      onChange: (e) => {
                        setFullName(e.target.value);
                        if (signupErrors.fullName)
                          setSignupErrors((p) => ({ ...p, fullName: "" }));
                      },
                      placeholder: "e.g., Rahul Sharma",
                      "data-ocid": "auth.signup.input",
                      className: "bg-background/50 border-border/50 focus:border-neon-purple/60 h-10",
                      autoComplete: "name",
                      disabled: isSigningUp
                    }
                  ),
                  signupErrors.fullName && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-destructive", children: signupErrors.fullName })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Label,
                    {
                      htmlFor: "signup-username",
                      className: "text-sm font-medium text-foreground/80",
                      children: "Choose a Username"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "signup-username",
                        type: "text",
                        value: signupUsername,
                        onChange: (e) => {
                          setSignupUsername(e.target.value);
                          if (signupErrors.username)
                            setSignupErrors((p) => ({ ...p, username: "" }));
                        },
                        placeholder: "e.g., rahul_99",
                        "data-ocid": "auth.signup.username_input",
                        className: "bg-background/50 border-border/50 focus:border-neon-purple/60 h-10 pr-28",
                        autoComplete: "username",
                        disabled: isSigningUp
                      }
                    ),
                    usernameStatus !== "idle" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "span",
                      {
                        className: `absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full ${usernameStatus === "checking" ? "text-muted-foreground bg-muted/30" : usernameStatus === "available" ? "text-green-400 bg-green-500/10" : "text-red-400 bg-red-500/10"}`,
                        children: [
                          usernameStatus === "checking" && /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { size: 10, className: "animate-spin" }),
                          usernameStatus === "available" && /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { size: 10 }),
                          usernameStatus === "taken" && /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { size: 10 }),
                          usernameStatus === "checking" ? "Checking..." : usernameStatus === "available" ? "Available" : "Taken"
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Letters, numbers, and underscores only. No spaces." }),
                  signupErrors.username && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "text-xs text-destructive",
                      "data-ocid": "auth.signup.error_state",
                      children: signupErrors.username
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Label,
                    {
                      htmlFor: "signup-email",
                      className: "text-sm font-medium text-foreground/80",
                      children: [
                        "Email Address",
                        " ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground font-normal", children: "(for recovery)" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "signup-email",
                      type: "email",
                      value: signupEmail,
                      onChange: (e) => {
                        setSignupEmail(e.target.value);
                        if (signupErrors.email)
                          setSignupErrors((p) => ({ ...p, email: "" }));
                      },
                      placeholder: "you@gmail.com",
                      "data-ocid": "auth.signup.email_input",
                      className: "bg-background/50 border-border/50 focus:border-neon-purple/60 h-10",
                      autoComplete: "email",
                      disabled: isSigningUp
                    }
                  ),
                  signupErrors.email && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-destructive", children: signupErrors.email })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Label,
                    {
                      htmlFor: "signup-password",
                      className: "text-sm font-medium text-foreground/80",
                      children: "Password"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "signup-password",
                        type: showSignupPw ? "text" : "password",
                        value: signupPassword,
                        onChange: (e) => {
                          setSignupPassword(e.target.value);
                          if (signupErrors.password)
                            setSignupErrors((p) => ({ ...p, password: "" }));
                        },
                        placeholder: "At least 5 characters",
                        "data-ocid": "auth.signup.password_input",
                        className: "bg-background/50 border-border/50 focus:border-neon-purple/60 h-10 pr-10",
                        autoComplete: "new-password",
                        disabled: isSigningUp
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => setShowSignupPw((s) => !s),
                        className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors",
                        tabIndex: -1,
                        children: showSignupPw ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { size: 15 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { size: 15 })
                      }
                    )
                  ] }),
                  signupErrors.password && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-destructive", children: signupErrors.password })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: signupError && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.p,
                  {
                    initial: { opacity: 0, height: 0 },
                    animate: { opacity: 1, height: "auto" },
                    exit: { opacity: 0, height: 0 },
                    className: "text-xs text-destructive bg-destructive/10 rounded-lg px-3 py-2",
                    "data-ocid": "auth.signup.global_error_state",
                    children: signupError
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    type: "submit",
                    disabled: isSigningUp || usernameStatus === "taken" || usernameStatus === "checking",
                    "data-ocid": "auth.signup.submit_button",
                    className: "w-full h-11 font-bold bg-gradient-to-r from-neon-purple to-neon-blue text-white hover:opacity-90 transition-all rounded-xl",
                    children: isSigningUp ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { size: 16, className: "animate-spin" }),
                      "Creating account..."
                    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { size: 17 }),
                      "Create Account"
                    ] })
                  }
                )
              ] })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground text-center mt-5", children: [
            "© ",
            (/* @__PURE__ */ new Date()).getFullYear(),
            " NCERT Bhaiya — Built with ❤️ using",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "hover:text-foreground transition-colors underline",
                children: "caffeine.ai"
              }
            )
          ] })
        ]
      }
    )
  ] });
}
export {
  Auth as default
};
