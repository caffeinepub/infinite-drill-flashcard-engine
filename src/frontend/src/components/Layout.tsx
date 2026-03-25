import { Link } from "@tanstack/react-router";
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
      <footer className="border-t border-border/30 py-6 px-6">
        <div className="max-w-[1600px] mx-auto space-y-4">
          {/* Page links */}
          <nav
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
            aria-label="Footer navigation"
          >
            <Link
              to="/about"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors hover:underline underline-offset-4"
              data-ocid="footer.link"
            >
              About Us
            </Link>
            <span className="text-border/50 hidden sm:inline">|</span>
            <Link
              to="/contact"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors hover:underline underline-offset-4"
              data-ocid="footer.link"
            >
              Contact Us
            </Link>
            <span className="text-border/50 hidden sm:inline">|</span>
            <Link
              to="/privacy-policy"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors hover:underline underline-offset-4"
              data-ocid="footer.link"
            >
              Privacy Policy
            </Link>
          </nav>

          {/* Copyright + caffeine */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
            <span>
              © {new Date().getFullYear()} NCERT Bhaiya — Your complete study
              companion
            </span>
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "ncertbhaiya-8d1.caffeine.xyz")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              Built with ❤️ using caffeine.ai
            </a>
          </div>
        </div>
      </footer>

      {/* AI Teacher floating widget — lazy-loaded after main content is interactive */}
      <Suspense fallback={null}>
        <AITeacher />
      </Suspense>
    </div>
  );
}
