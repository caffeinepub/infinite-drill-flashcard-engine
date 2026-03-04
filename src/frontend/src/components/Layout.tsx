import { Suspense, lazy } from "react";
import { NavBar } from "./NavBar";

// Lazy-load AITeacher — it imports motion/react + aiTeacherResponses data.
// Deferring this keeps the critical JS bundle lean and speeds up LCP/TTI.
const AITeacher = lazy(() =>
  import("./AITeacher").then((m) => ({ default: m.AITeacher })),
);

interface LayoutProps {
  children: React.ReactNode;
  hideNav?: boolean;
}

export function Layout({ children, hideNav = false }: LayoutProps) {
  if (hideNav) {
    return (
      <div className="min-h-screen bg-mesh-dark dark:bg-mesh-dark">
        {children}
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col dark:bg-mesh-dark bg-mesh-light">
      {/* Top Navigation */}
      <NavBar />

      {/* Main content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="border-t border-border/30 py-4 px-6">
        <div className="max-w-[1600px] mx-auto flex items-center justify-between text-xs text-muted-foreground">
          <span>
            © {new Date().getFullYear()} NCERT Learn — Your complete study
            companion
          </span>
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            Built with ❤️ using caffeine.ai
          </a>
        </div>
      </footer>

      {/* AI Teacher floating widget — lazy-loaded after main content is interactive */}
      <Suspense fallback={null}>
        <AITeacher />
      </Suspense>
    </div>
  );
}
