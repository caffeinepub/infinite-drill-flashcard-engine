import { Toaster } from "@/components/ui/sonner";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
  redirect,
} from "@tanstack/react-router";
import { Suspense, lazy } from "react";
import { ThemeProvider } from "./components/ThemeProvider";
import { WebVitals } from "./components/WebVitals";
import { AuthProvider } from "./context/AuthContext";
import { UserProfileProvider } from "./context/UserProfileContext";
// Auth is imported eagerly (NOT lazy) because it is the first page every
// unauthenticated visitor sees. Lazy-loading it would add an extra network
// round-trip before the login form appears, directly hurting FCP and LCP.
import AuthPage from "./pages/Auth";

// All other pages are lazy-loaded for code splitting
const CheatSheet = lazy(() => import("./pages/CheatSheet"));
const Flashcards = lazy(() => import("./pages/Flashcards"));
const Generate = lazy(() => import("./pages/Generate"));
const Home = lazy(() => import("./pages/Home"));
const IIT = lazy(() => import("./pages/IIT"));
const Leaderboard = lazy(() => import("./pages/Leaderboard"));
const NCERT = lazy(() => import("./pages/NCERT"));
const Quiz = lazy(() => import("./pages/Quiz"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const AdminPanel = lazy(() => import("./pages/AdminPanel"));
const PYQ = lazy(() => import("./pages/PYQ"));
const PYQSubject = lazy(() => import("./pages/PYQSubject"));
const Profile = lazy(() => import("./pages/Profile"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Community = lazy(() => import("./pages/Community"));
const ClassChat = lazy(() => import("./pages/ClassChat"));

// Minimal page-level loading fallback
function PageLoader() {
  return (
    <div className="min-h-screen bg-mesh-dark flex items-center justify-center">
      <div className="w-8 h-8 rounded-full border-2 border-neon-purple/40 border-t-neon-purple animate-spin" />
    </div>
  );
}

const STORAGE_KEY = "ncertbhaiya_user";

function isLoggedIn(): boolean {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return !!raw;
  } catch {
    return false;
  }
}

// ─── Root Route ───────────────────────────────────────────────────────────────

const rootRoute = createRootRoute({
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <Outlet />
    </Suspense>
  ),
});

// ─── Protected layout — redirects to /auth if not logged in ──────────────────

const protectedLayout = createRoute({
  getParentRoute: () => rootRoute,
  id: "protected",
  beforeLoad: () => {
    if (!isLoggedIn()) {
      throw redirect({ to: "/auth" });
    }
  },
  component: () => <Outlet />,
});

// ─── Public routes ─────────────────────────────────────────────────────────────

const authRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/auth",
  // Eagerly imported — no Suspense fallback delay for the login page
  component: AuthPage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: About,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: Contact,
});

const privacyPolicyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/privacy-policy",
  component: PrivacyPolicy,
});

// ─── Protected Routes ─────────────────────────────────────────────────────────

const indexRoute = createRoute({
  getParentRoute: () => protectedLayout,
  path: "/",
  component: Home,
});

const ncertRoute = createRoute({
  getParentRoute: () => protectedLayout,
  path: "/ncert",
  component: NCERT,
});

const quizRoute = createRoute({
  getParentRoute: () => protectedLayout,
  path: "/quiz/$topicId",
  component: Quiz,
});

const flashcardsRoute = createRoute({
  getParentRoute: () => protectedLayout,
  path: "/flashcards/$topicId",
  component: Flashcards,
});

const cheatsheetRoute = createRoute({
  getParentRoute: () => protectedLayout,
  path: "/cheatsheet/$topicId",
  component: CheatSheet,
});

const generateRoute = createRoute({
  getParentRoute: () => protectedLayout,
  path: "/generate",
  component: Generate,
});

const leaderboardRoute = createRoute({
  getParentRoute: () => protectedLayout,
  path: "/leaderboard",
  component: Leaderboard,
});

const iitRoute = createRoute({
  getParentRoute: () => protectedLayout,
  path: "/iit",
  component: IIT,
});

const blogRoute = createRoute({
  getParentRoute: () => protectedLayout,
  path: "/blog",
  component: Blog,
});

const blogPostRoute = createRoute({
  getParentRoute: () => protectedLayout,
  path: "/blog/$slug",
  component: BlogPost,
});

const adminRoute = createRoute({
  getParentRoute: () => protectedLayout,
  path: "/admin",
  component: AdminPanel,
});

const pyqRoute = createRoute({
  getParentRoute: () => protectedLayout,
  path: "/pyq",
  component: PYQ,
});

const pyqSubjectRoute = createRoute({
  getParentRoute: () => protectedLayout,
  path: "/pyq/$subject",
  component: PYQSubject,
});

const profileRoute = createRoute({
  getParentRoute: () => protectedLayout,
  path: "/profile",
  component: Profile,
});

const communityRoute = createRoute({
  getParentRoute: () => protectedLayout,
  path: "/community",
  component: Community,
});

const classChatRoute = createRoute({
  getParentRoute: () => protectedLayout,
  path: "/community/$roomId",
  component: ClassChat,
});

// 404 catch-all — redirect unknown URLs to homepage to avoid 4XX errors
const notFoundRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "*",
  beforeLoad: () => {
    throw redirect({ to: "/" });
  },
  component: () => null,
});

// ─── Router ───────────────────────────────────────────────────────────────────

const routeTree = rootRoute.addChildren([
  protectedLayout.addChildren([
    indexRoute,
    ncertRoute,
    quizRoute,
    flashcardsRoute,
    cheatsheetRoute,
    generateRoute,
    leaderboardRoute,
    iitRoute,
    blogRoute,
    blogPostRoute,
    adminRoute,
    pyqRoute,
    pyqSubjectRoute,
    profileRoute,
    communityRoute,
    classChatRoute,
  ]),
  authRoute,
  aboutRoute,
  contactRoute,
  privacyPolicyRoute,
  notFoundRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <ThemeProvider>
      <WebVitals />
      <AuthProvider>
        <UserProfileProvider>
          <RouterProvider router={router} />
        </UserProfileProvider>
      </AuthProvider>
      <Toaster richColors position="top-right" />
    </ThemeProvider>
  );
}
