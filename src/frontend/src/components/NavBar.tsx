import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  FlaskConical,
  GraduationCap,
  Home,
  Library,
  LogOut,
  Moon,
  Sun,
  Trophy,
  Zap,
} from "lucide-react";
import logoImg from "/assets/generated/ncrtbhaiya-logo-transparent.dim_512x512.png";
import { useInternetIdentity } from "../hooks/useInternetIdentity";
import { useUserProfile } from "../hooks/useUserProfile";
import { useTheme } from "./ThemeProvider";

export function NavBar() {
  const { theme, setTheme } = useTheme();
  const routerState = useRouterState();
  const pathname = routerState.location.pathname;
  const { clear } = useInternetIdentity();
  const { profile } = useUserProfile();

  const navLinks = [
    { href: "/", label: "Home", icon: Home, ocid: "nav.home_link" },
    {
      href: "/ncert",
      label: "NCERT",
      icon: Library,
      ocid: "nav.ncert_link",
    },
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
            alt="NCRT Bhaiya Logo"
            className="w-8 h-8 rounded-lg object-contain"
            fetchPriority="high"
            loading="eager"
            width={32}
            height={32}
            decoding="async"
          />
          <span className="font-display font-bold text-lg tracking-tight hidden sm:block">
            <span className="text-gradient-purple">NCRT</span>
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
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <button
            type="button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            data-ocid="nav.theme_toggle"
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* User profile badge */}
          {profile && (
            <div className="hidden sm:flex items-center gap-2 glass-dark rounded-full pl-2 pr-3 py-1.5 border border-border/40">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-neon-purple to-neon-blue flex items-center justify-center text-white text-[10px] font-bold shrink-0">
                {profile.displayName.charAt(0).toUpperCase()}
              </div>
              <span className="text-xs font-medium text-foreground truncate max-w-[100px]">
                {profile.displayName}
              </span>
              <Badge
                variant="secondary"
                className="text-[9px] px-1.5 py-0.5 bg-neon-purple/15 text-neon-purple border-neon-purple/30 font-mono-custom shrink-0"
              >
                <GraduationCap size={8} className="mr-1" />
                {profile.studentClass === "JEE"
                  ? "JEE"
                  : profile.studentClass.replace("Class ", "Cl.")}
              </Badge>
            </div>
          )}

          {/* Logout button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={clear}
            data-ocid="nav.logout_button"
            className="p-2 h-8 w-8 rounded-lg text-muted-foreground hover:text-neon-red hover:bg-neon-red/10 transition-all"
            aria-label="Logout"
            title="Logout"
          >
            <LogOut size={15} />
          </Button>
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
      </nav>
    </header>
  );
}
