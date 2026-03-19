import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import {
  BookText,
  FileQuestion,
  FlaskConical,
  Home,
  Library,
  LogIn,
  LogOut,
  Moon,
  Shield,
  Sun,
  Trophy,
  User,
  Zap,
} from "lucide-react";
import logoImg from "/assets/generated/ncertbhaiya-logo-transparent.dim_512x512.png";
import { useAuth } from "../context/AuthContext";
import { useAdminRole } from "../hooks/useAdminRole";
import { useTheme } from "./ThemeProvider";

export function NavBar() {
  const { theme, setTheme } = useTheme();
  const routerState = useRouterState();
  const pathname = routerState.location.pathname;
  const { isAdmin, isOperator } = useAdminRole();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate({ to: "/auth" });
  };

  const navLinks = [
    { href: "/", label: "Home", icon: Home, ocid: "nav.home_link" },
    { href: "/ncert", label: "NCERT", icon: Library, ocid: "nav.ncert_link" },
    {
      href: "/iit",
      label: "IIT JEE",
      icon: FlaskConical,
      ocid: "nav.iit_link",
    },
    {
      href: "/leaderboard",
      label: "Leaderboard",
      icon: Trophy,
      ocid: "nav.leaderboard_link",
    },
    { href: "/blog", label: "Blog", icon: BookText, ocid: "nav.blog_link" },
    { href: "/pyq", label: "PYQ", icon: FileQuestion, ocid: "nav.pyq_link" },
    {
      href: "/generate",
      label: "Generate",
      icon: Zap,
      ocid: "nav.generate_link",
    },
  ];

  return (
    <header className="sticky top-0 z-50 glass-dark border-b border-border/50">
      <div className="flex items-center justify-between h-14 px-4 lg:px-6 max-w-[1600px] mx-auto">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2.5 group shrink-0"
          data-ocid="nav.home_link"
        >
          <img
            src={logoImg}
            alt="NCERT Bhaiya Logo"
            className="w-8 h-8 rounded-lg object-contain"
            fetchPriority="high"
            loading="eager"
            width={32}
            height={32}
            decoding="async"
          />
          <span className="font-display font-bold text-lg tracking-tight hidden sm:block">
            <span className="text-gradient-purple">NCERT</span>
            <span className="text-foreground/80"> Bhaiya</span>
          </span>
        </Link>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(({ href, label, icon: Icon, ocid }) => {
            const isActive =
              pathname === href || (href !== "/" && pathname.startsWith(href));
            return (
              <Link
                key={href}
                to={href}
                data-ocid={ocid}
                className={cn(
                  "flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                  isActive
                    ? "bg-primary/15 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
                )}
              >
                <Icon size={15} />
                {label}
              </Link>
            );
          })}
          {(isAdmin || isOperator) && (
            <Link
              to="/admin"
              data-ocid="nav.admin_link"
              className={cn(
                "flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                pathname === "/admin"
                  ? "bg-neon-amber/15 text-neon-amber"
                  : "text-neon-amber/70 hover:text-neon-amber hover:bg-neon-amber/10",
              )}
            >
              <Shield size={15} />
              Admin
            </Link>
          )}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <Button
            variant="ghost"
            size="sm"
            type="button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            data-ocid="nav.theme_toggle"
            className="p-2 h-8 w-8 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </Button>

          {/* Auth section */}
          {user ? (
            <div className="flex items-center gap-2">
              <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20">
                <User size={13} className="text-primary" />
                <span className="text-xs font-medium text-primary max-w-[100px] truncate">
                  {user.username}
                </span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                type="button"
                onClick={handleLogout}
                data-ocid="nav.logout_button"
                className="p-2 h-8 w-8 rounded-lg text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-all"
                aria-label="Logout"
              >
                <LogOut size={15} />
              </Button>
            </div>
          ) : (
            <Link
              to="/auth"
              data-ocid="nav.login_link"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-neon-purple border border-neon-purple/30 hover:bg-neon-purple/10 transition-all"
            >
              <LogIn size={13} />
              Login
            </Link>
          )}
        </div>
      </div>

      {/* Mobile nav */}
      <nav className="md:hidden flex items-center gap-1 px-4 pb-2 overflow-x-auto scrollbar-thin">
        {navLinks.map(({ href, label, icon: Icon, ocid }) => {
          const isActive =
            pathname === href || (href !== "/" && pathname.startsWith(href));
          return (
            <Link
              key={href}
              to={href}
              data-ocid={ocid}
              className={cn(
                "flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 shrink-0",
                isActive
                  ? "bg-primary/15 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
              )}
            >
              <Icon size={13} />
              {label}
            </Link>
          );
        })}
        {(isAdmin || isOperator) && (
          <Link
            to="/admin"
            data-ocid="nav.admin_link"
            className={cn(
              "flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 shrink-0",
              pathname === "/admin"
                ? "bg-neon-amber/15 text-neon-amber"
                : "text-neon-amber/70 hover:text-neon-amber hover:bg-neon-amber/10",
            )}
          >
            <Shield size={13} />
            Admin
          </Link>
        )}
        {/* Mobile auth */}
        {user ? (
          <button
            type="button"
            onClick={handleLogout}
            data-ocid="nav.logout_button"
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-all shrink-0"
          >
            <LogOut size={13} />
            Logout
          </button>
        ) : (
          <Link
            to="/auth"
            data-ocid="nav.login_link"
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium text-neon-purple hover:bg-neon-purple/10 transition-all shrink-0"
          >
            <LogIn size={13} />
            Login
          </Link>
        )}
      </nav>
    </header>
  );
}
