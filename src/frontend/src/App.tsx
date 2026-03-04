import { Toaster } from "@/components/ui/sonner";
import {
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { AuthGuard } from "./components/AuthGuard";
import { ThemeProvider } from "./components/ThemeProvider";
import { UserProfileProvider } from "./context/UserProfileContext";
import CheatSheet from "./pages/CheatSheet";
import Flashcards from "./pages/Flashcards";
import Generate from "./pages/Generate";
import Home from "./pages/Home";
import IIT from "./pages/IIT";
import Leaderboard from "./pages/Leaderboard";
import NCERT from "./pages/NCERT";
import Quiz from "./pages/Quiz";

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
          <RouterProvider router={router} />
        </AuthGuard>
      </UserProfileProvider>
      <Toaster richColors position="top-right" />
    </ThemeProvider>
  );
}
