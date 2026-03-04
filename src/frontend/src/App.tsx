import { Toaster } from "@/components/ui/sonner";
import {
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Suspense, lazy } from "react";
import { AuthGuard } from "./components/AuthGuard";
import { ThemeProvider } from "./components/ThemeProvider";
import { UserProfileProvider } from "./context/UserProfileContext";

// Lazy-load all pages to enable code splitting
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

// Minimal page-level loading fallback
function PageLoader() {
  return (
    <div className="min-h-screen bg-mesh-dark flex items-center justify-center">
      <div className="w-8 h-8 rounded-full border-2 border-neon-purple/40 border-t-neon-purple animate-spin" />
    </div>
  );
}

// ─── Root Route ───────────────────────────────────────────────────────────────

const rootRoute = createRootRoute();

// ─── Routes ───────────────────────────────────────────────────────────────────

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const ncertRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/ncert",
  component: NCERT,
});

const quizRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/quiz/$topicId",
  component: Quiz,
});

const flashcardsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/flashcards/$topicId",
  component: Flashcards,
});

const cheatsheetRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/cheatsheet/$topicId",
  component: CheatSheet,
});

const generateRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/generate",
  component: Generate,
});

const leaderboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/leaderboard",
  component: Leaderboard,
});

const iitRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/iit",
  component: IIT,
});

const blogRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/blog",
  component: Blog,
});

const blogPostRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/blog/$slug",
  component: BlogPost,
});

// ─── Router ───────────────────────────────────────────────────────────────────

const routeTree = rootRoute.addChildren([
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
      <UserProfileProvider>
        <AuthGuard>
          <Suspense fallback={<PageLoader />}>
            <RouterProvider router={router} />
          </Suspense>
        </AuthGuard>
      </UserProfileProvider>
      <Toaster richColors position="top-right" />
    </ThemeProvider>
  );
}
