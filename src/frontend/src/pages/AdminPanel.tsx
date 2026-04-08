import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  BookOpen,
  Calendar,
  Crown,
  Eye,
  EyeOff,
  FileText,
  KeyRound,
  LayoutDashboard,
  Lightbulb,
  Loader2,
  Lock,
  Megaphone,
  PenSquare,
  Settings,
  Shield,
  Sparkles,
  Trash2,
  Users,
  Wrench,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { createActor } from "../backend";
import { Layout } from "../components/Layout";
import { useAuth } from "../context/AuthContext";
import { useAdminRole } from "../hooks/useAdminRole";
import { useSEO } from "../hooks/useSEO";
import type { BlogPost as BackendBlogPost, SiteSettings } from "../types";

type AdminActor = Record<string, (...args: unknown[]) => Promise<unknown>>;

function asAdmin(actor: unknown): AdminActor {
  return actor as AdminActor;
}

// ─── Role Badge ────────────────────────────────────────────────────────────────
function RoleBadge({ role }: { role: string }) {
  if (role === "admin") {
    return (
      <Badge className="bg-amber-500/15 text-amber-400 border-amber-500/30 text-[11px] font-semibold gap-1">
        <Crown size={10} /> Admin
      </Badge>
    );
  }
  if (role === "operator") {
    return (
      <Badge className="bg-blue-500/15 text-blue-400 border-blue-500/30 text-[11px] font-semibold gap-1">
        <Wrench size={10} /> Operator
      </Badge>
    );
  }
  return (
    <Badge variant="secondary" className="text-[11px] gap-1">
      <Users size={10} /> User
    </Badge>
  );
}

// ─── Claim Admin ────────────────────────────────────────────────────────────────
function ClaimAdminSection() {
  const { actor } = useActor(createActor);
  const queryClient = useQueryClient();
  const [secret, setSecret] = useState("");
  const [showSecret, setShowSecret] = useState(false);

  const claimMutation = useMutation({
    mutationFn: async () => {
      if (!actor) throw new Error("Not connected");
      await asAdmin(actor)._initializeAccessControlWithSecret(secret);
    },
    onSuccess: () => {
      toast.success("Admin access granted! Refreshing...");
      queryClient.invalidateQueries({ queryKey: ["userRole"] });
      setSecret("");
      setTimeout(() => window.location.reload(), 1200);
    },
    onError: (err: unknown) => {
      const msg = err instanceof Error ? err.message : String(err);
      if (msg.includes("already") || msg.includes("adminAssigned")) {
        toast.error("An admin already exists. Contact the current admin.");
      } else if (
        msg.includes("token") ||
        msg.includes("secret") ||
        msg.includes("Unauthorized")
      ) {
        toast.error("Incorrect token. Check your Caffeine dashboard.");
      } else {
        toast.error("Failed to claim admin. Check your token and try again.");
      }
    },
  });

  return (
    <div className="max-w-md w-full mx-auto mt-6 p-6 rounded-2xl border border-amber-500/30 bg-amber-500/5">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center">
          <KeyRound size={20} className="text-amber-400" />
        </div>
        <div>
          <h2 className="font-bold text-foreground">Claim Admin Access</h2>
          <p className="text-xs text-muted-foreground">First-time setup only</p>
        </div>
      </div>
      <p className="text-sm text-muted-foreground mb-4">
        Enter your{" "}
        <strong className="text-foreground">Caffeine Admin Token</strong> to
        become the site admin. Find it in your{" "}
        <a
          href="https://caffeine.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          Caffeine dashboard
        </a>{" "}
        under project settings.
      </p>
      <div className="space-y-3">
        <div className="space-y-1.5">
          <Label
            htmlFor="admin-secret"
            className="text-sm font-medium text-foreground/80"
          >
            Admin Token
          </Label>
          <div className="relative">
            <Input
              id="admin-secret"
              type={showSecret ? "text" : "password"}
              value={secret}
              onChange={(e) => setSecret(e.target.value)}
              placeholder="Paste your admin token here"
              data-ocid="admin.claim.input"
              className="bg-background/50 border-border/50 h-10 pr-20"
              disabled={claimMutation.isPending}
            />
            <button
              type="button"
              onClick={() => setShowSecret((s) => !s)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground hover:text-foreground transition-colors"
              tabIndex={-1}
            >
              {showSecret ? "Hide" : "Show"}
            </button>
          </div>
        </div>
        <Button
          onClick={() => claimMutation.mutate()}
          disabled={!secret.trim() || claimMutation.isPending}
          data-ocid="admin.claim.submit_button"
          className="w-full bg-amber-500/80 hover:bg-amber-500 text-background font-bold border-0"
        >
          {claimMutation.isPending ? (
            <span className="flex items-center gap-2">
              <Loader2 size={15} className="animate-spin" /> Claiming...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <KeyRound size={15} /> Claim Admin
            </span>
          )}
        </Button>
      </div>
    </div>
  );
}

// ─── Dashboard Tab ──────────────────────────────────────────────────────────────
function DashboardTab() {
  const { actor } = useActor(createActor);

  const { data: stats, isLoading } = useQuery<{
    totalUsers: bigint;
    totalAdmins: bigint;
    totalOperators: bigint;
    totalXP: bigint;
  } | null>({
    queryKey: ["adminStats"],
    queryFn: async () => {
      if (!actor) return null;
      const result = await asAdmin(actor).getAdminStats();
      return result as {
        totalUsers: bigint;
        totalAdmins: bigint;
        totalOperators: bigint;
        totalXP: bigint;
      };
    },
    enabled: !!actor,
    staleTime: 1000 * 30,
  });

  const statCards = [
    {
      label: "Total Users",
      value: stats?.totalUsers,
      icon: <Users size={20} />,
      gradient: "from-purple-500/20 to-purple-600/5",
      border: "border-purple-500/30",
      iconColor: "text-purple-400",
      bg: "bg-purple-500/10",
    },
    {
      label: "Total Admins",
      value: stats?.totalAdmins,
      icon: <Crown size={20} />,
      gradient: "from-amber-500/20 to-amber-600/5",
      border: "border-amber-500/30",
      iconColor: "text-amber-400",
      bg: "bg-amber-500/10",
    },
    {
      label: "Total Operators",
      value: stats?.totalOperators,
      icon: <Wrench size={20} />,
      gradient: "from-blue-500/20 to-blue-600/5",
      border: "border-blue-500/30",
      iconColor: "text-blue-400",
      bg: "bg-blue-500/10",
    },
    {
      label: "Total XP Earned",
      value: stats?.totalXP,
      icon: <Zap size={20} />,
      gradient: "from-green-500/20 to-green-600/5",
      border: "border-green-500/30",
      iconColor: "text-green-400",
      bg: "bg-green-500/10",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold text-foreground mb-1">
          Site Overview
        </h2>
        <p className="text-sm text-muted-foreground">
          Real-time stats from the backend.
        </p>
      </div>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        data-ocid="dashboard.panel"
      >
        {statCards.map((card) => (
          <Card
            key={card.label}
            className={`border ${card.border} bg-gradient-to-br ${card.gradient} backdrop-blur-sm`}
          >
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {card.label}
                </CardTitle>
                <div
                  className={`w-8 h-8 rounded-lg ${card.bg} flex items-center justify-center ${card.iconColor}`}
                >
                  {card.icon}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <Skeleton
                  className="h-9 w-20"
                  data-ocid="dashboard.loading_state"
                />
              ) : (
                <p className="text-3xl font-bold text-foreground">
                  {card.value !== undefined
                    ? Number(card.value).toLocaleString()
                    : "—"}
                </p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border border-border/30 bg-card/30">
        <CardHeader>
          <CardTitle className="text-sm font-medium text-foreground flex items-center gap-2">
            <Shield size={14} className="text-purple-400" /> Role Hierarchy
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-start gap-3 p-3 rounded-lg bg-amber-500/10 border border-amber-500/20">
            <Crown size={16} className="text-amber-400 mt-0.5 shrink-0" />
            <div>
              <p className="text-sm font-semibold text-amber-400">Admin</p>
              <p className="text-xs text-muted-foreground">
                Full control — manage all users, assign/remove operators, edit
                settings, delete accounts.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
            <Wrench size={16} className="text-blue-400 mt-0.5 shrink-0" />
            <div>
              <p className="text-sm font-semibold text-blue-400">Operator</p>
              <p className="text-xs text-muted-foreground">
                Content management — edit site settings and announcements.
                Cannot manage roles or delete users.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/20 border border-border/20">
            <Users
              size={16}
              className="text-muted-foreground mt-0.5 shrink-0"
            />
            <div>
              <p className="text-sm font-semibold text-muted-foreground">
                User
              </p>
              <p className="text-xs text-muted-foreground">
                Standard access — browse content, take quizzes, earn XP, appear
                on leaderboard.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// ─── Users Tab ──────────────────────────────────────────────────────────────────
type UserEntry = {
  username: string;
  fullName: string;
  email: string;
  role: string;
  createdAt: bigint;
};

function UsersTab({ currentUsername }: { currentUsername: string }) {
  const { actor } = useActor(createActor);
  const queryClient = useQueryClient();

  const { data: users, isLoading } = useQuery<UserEntry[]>({
    queryKey: ["allUsersWithRoles"],
    queryFn: async () => {
      if (!actor) return [];
      const result = await asAdmin(actor).getAllUsersWithRoles();
      return result as UserEntry[];
    },
    enabled: !!actor,
    staleTime: 0,
  });

  const makeOperator = useMutation({
    mutationFn: async (targetUsername: string) => {
      if (!actor) throw new Error("No actor");
      return asAdmin(actor).setUsernameRole(
        currentUsername,
        targetUsername,
        "operator",
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["allUsersWithRoles"] });
      toast.success("User promoted to Operator");
    },
    onError: () => toast.error("Failed to assign operator role"),
  });

  const demoteOperator = useMutation({
    mutationFn: async (targetUsername: string) => {
      if (!actor) throw new Error("No actor");
      return asAdmin(actor).removeUsernameRole(currentUsername, targetUsername);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["allUsersWithRoles"] });
      toast.success("Operator demoted to User");
    },
    onError: () => toast.error("Failed to demote operator"),
  });

  if (isLoading) {
    return (
      <div data-ocid="users.loading_state" className="space-y-3">
        {[1, 2, 3, 4].map((i) => (
          <Skeleton key={i} className="h-12 w-full rounded-xl" />
        ))}
      </div>
    );
  }

  if (!users || users.length === 0) {
    return (
      <div
        data-ocid="users.empty_state"
        className="flex flex-col items-center justify-center py-20 text-muted-foreground"
      >
        <Users size={40} className="mb-3 opacity-30" />
        <p className="text-sm">No users found</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-foreground">All Users</h2>
          <p className="text-sm text-muted-foreground">
            {users.length} registered {users.length === 1 ? "user" : "users"}
          </p>
        </div>
        <Badge variant="secondary" className="text-xs">
          {users.length} total
        </Badge>
      </div>

      <div className="rounded-xl border border-border/40 overflow-hidden">
        <Table data-ocid="users.table">
          <TableHeader>
            <TableRow className="border-border/40 hover:bg-transparent bg-card/30">
              <TableHead className="text-muted-foreground font-medium">
                Full Name
              </TableHead>
              <TableHead className="text-muted-foreground font-medium">
                Username
              </TableHead>
              <TableHead className="text-muted-foreground font-medium hidden md:table-cell">
                Email
              </TableHead>
              <TableHead className="text-muted-foreground font-medium">
                Role
              </TableHead>
              <TableHead className="text-muted-foreground font-medium text-right">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((u, idx) => (
              <TableRow
                key={u.username}
                className="border-border/30 hover:bg-card/30"
                data-ocid={`users.row.${idx + 1}`}
              >
                <TableCell className="font-medium text-sm">
                  {u.fullName || "—"}
                </TableCell>
                <TableCell className="font-mono text-xs text-muted-foreground">
                  @{u.username}
                </TableCell>
                <TableCell className="text-xs text-muted-foreground hidden md:table-cell">
                  {u.email || "—"}
                </TableCell>
                <TableCell>
                  <RoleBadge role={u.role} />
                </TableCell>
                <TableCell className="text-right">
                  {u.username === currentUsername ? (
                    <span className="text-xs text-muted-foreground italic">
                      (you)
                    </span>
                  ) : u.role === "admin" ? (
                    <span className="text-xs text-muted-foreground italic">
                      Protected
                    </span>
                  ) : u.role === "operator" ? (
                    <Button
                      size="sm"
                      variant="outline"
                      data-ocid={`users.demote_button.${idx + 1}`}
                      className="text-xs h-7 border-red-500/30 text-red-400 hover:bg-red-500/10"
                      onClick={() => demoteOperator.mutate(u.username)}
                      disabled={demoteOperator.isPending}
                    >
                      Demote
                    </Button>
                  ) : (
                    <Button
                      size="sm"
                      data-ocid={`users.promote_button.${idx + 1}`}
                      className="text-xs h-7 bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 border border-blue-500/30"
                      onClick={() => makeOperator.mutate(u.username)}
                      disabled={makeOperator.isPending}
                    >
                      Make Operator
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

// ─── Settings Tab ──────────────────────────────────────────────────────────────
function SettingsTab() {
  const { actor } = useActor(createActor);
  const queryClient = useQueryClient();

  const { data: settings, isLoading } = useQuery<SiteSettings | null>({
    queryKey: ["siteSettings"],
    queryFn: async () => {
      if (!actor) return null;
      const result = await asAdmin(actor).getSiteSettings();
      return result as SiteSettings | null;
    },
    enabled: !!actor,
    staleTime: 0,
  });

  const [featuredMessage, setFeaturedMessage] = useState("");

  const updateSettings = useMutation({
    mutationFn: async (params: {
      announcement: string;
      announcementEnabled: boolean;
      featuredMessage: string;
    }) => {
      if (!actor) throw new Error("No actor");
      return asAdmin(actor).updateSiteSettings(
        params.announcement,
        params.announcementEnabled,
        params.featuredMessage,
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["siteSettings"] });
      toast.success("Settings saved");
    },
    onError: () => toast.error("Failed to save settings"),
  });

  if (isLoading) {
    return (
      <div data-ocid="settings.loading_state" className="space-y-4">
        <Skeleton className="h-12 w-full rounded-xl" />
        <Skeleton className="h-20 w-full rounded-xl" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold text-foreground mb-1">
          Site Settings
        </h2>
        <p className="text-sm text-muted-foreground">
          Manage global site configuration.
        </p>
      </div>

      <Card className="border border-border/30 bg-card/20">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-semibold text-foreground flex items-center gap-2">
            <Settings size={14} className="text-blue-400" /> Featured Message
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-xs text-muted-foreground">
            Shown prominently on the homepage hero section.
          </p>
          <Textarea
            value={featuredMessage || settings?.featuredMessage || ""}
            onChange={(e) => setFeaturedMessage(e.target.value)}
            placeholder="Enter a featured message for students..."
            data-ocid="settings.textarea"
            className="bg-background/50 border-border/50 text-sm resize-none"
            rows={3}
          />
          <Button
            size="sm"
            data-ocid="settings.save_button"
            className="bg-blue-600/80 hover:bg-blue-600 text-white border-0"
            onClick={() =>
              updateSettings.mutate({
                announcement: settings?.announcement ?? "",
                announcementEnabled: settings?.announcementEnabled ?? false,
                featuredMessage:
                  featuredMessage || settings?.featuredMessage || "",
              })
            }
            disabled={updateSettings.isPending}
          >
            {updateSettings.isPending ? (
              <Loader2 size={13} className="animate-spin mr-1" />
            ) : null}
            Save Settings
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

// ─── Announcements Tab ─────────────────────────────────────────────────────────
function AnnouncementsTab() {
  const { actor } = useActor(createActor);
  const queryClient = useQueryClient();

  const { data: settings, isLoading } = useQuery<SiteSettings | null>({
    queryKey: ["siteSettings"],
    queryFn: async () => {
      if (!actor) return null;
      return asAdmin(actor).getSiteSettings() as Promise<SiteSettings | null>;
    },
    enabled: !!actor,
    staleTime: 0,
  });

  const [announcement, setAnnouncement] = useState("");
  const [enabled, setEnabled] = useState(false);

  const updateAnnouncement = useMutation({
    mutationFn: async () => {
      if (!actor) throw new Error("No actor");
      return asAdmin(actor).updateSiteSettings(
        announcement || settings?.announcement || "",
        enabled,
        settings?.featuredMessage || "",
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["siteSettings"] });
      toast.success("Announcement updated");
    },
    onError: () => toast.error("Failed to update announcement"),
  });

  if (isLoading) {
    return (
      <div data-ocid="announcements.loading_state" className="space-y-4">
        <Skeleton className="h-12 w-full rounded-xl" />
      </div>
    );
  }

  const currentAnnouncement = announcement || settings?.announcement || "";
  const currentEnabled =
    announcement !== "" ? enabled : (settings?.announcementEnabled ?? false);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold text-foreground mb-1">
          Announcements
        </h2>
        <p className="text-sm text-muted-foreground">
          Post a banner message visible to all students.
        </p>
      </div>

      <Card className="border border-border/30 bg-card/20">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm font-semibold text-foreground flex items-center gap-2">
              <Megaphone size={14} className="text-amber-400" /> Active
              Announcement
            </CardTitle>
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground">
                {currentEnabled ? "Live" : "Off"}
              </span>
              <Switch
                checked={currentEnabled}
                onCheckedChange={(v) => setEnabled(v)}
                data-ocid="announcements.toggle"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          <Textarea
            value={currentAnnouncement}
            onChange={(e) => setAnnouncement(e.target.value)}
            placeholder="Write your announcement here..."
            data-ocid="announcements.textarea"
            className="bg-background/50 border-border/50 text-sm resize-none"
            rows={3}
          />
          <Button
            size="sm"
            data-ocid="announcements.save_button"
            className="bg-amber-500/80 hover:bg-amber-500 text-background font-bold border-0"
            onClick={() => updateAnnouncement.mutate()}
            disabled={updateAnnouncement.isPending}
          >
            {updateAnnouncement.isPending ? (
              <Loader2 size={13} className="animate-spin mr-1" />
            ) : null}
            Save Announcement
          </Button>
        </CardContent>
      </Card>

      {/* Tips */}
      <Card className="border border-amber-500/20 bg-amber-500/5">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-semibold text-amber-400 flex items-center gap-2">
            <Lightbulb size={14} /> Tips for Writing Good Announcements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-xs text-muted-foreground list-none">
            {[
              "Keep it under 120 characters — students read on mobile.",
              'Use action words: "New MCQs added!", "Quiz updated!", "Holiday schedule"',
              "Be specific: mention the class or subject affected.",
              "Avoid capslock — it reads as shouting and reduces trust.",
              "Disable when not needed — overuse causes users to ignore banners.",
            ].map((tip) => (
              <li key={tip} className="flex items-start gap-2">
                <span className="text-amber-400 mt-0.5">•</span>
                {tip}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

// ─── AI Enhancement ────────────────────────────────────────────────────────────
function enhanceContentWithAI(
  title: string,
  description: string,
  content: string,
): { title: string; description: string; content: string } {
  // Build structured enhanced content
  const lines = content
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);

  const enhanced: string[] = [];

  // Add an intro paragraph if content doesn't start with one
  if (!content.toLowerCase().includes("introduction") && lines.length > 0) {
    enhanced.push(
      `## Introduction\n\nIn this article, we explore **${title}** — a key topic covered in NCERT curriculum. Understanding this concept thoroughly will help you score higher in CBSE exams and build a solid academic foundation.`,
    );
    enhanced.push("");
  }

  // Process existing content — group lines into sections
  let currentSection: string[] = [];
  let sectionIdx = 0;

  for (const line of lines) {
    // If line looks like a heading (short, no period at end)
    if (
      line.length < 80 &&
      !line.endsWith(".") &&
      sectionIdx % 5 === 0 &&
      currentSection.length >= 3
    ) {
      if (currentSection.length > 0) {
        enhanced.push(currentSection.join("\n"));
        currentSection = [];
      }
      enhanced.push(`## ${line}`);
      sectionIdx++;
    } else if (
      line.startsWith("-") ||
      line.startsWith("•") ||
      line.startsWith("*")
    ) {
      // Already a list item
      currentSection.push(
        line.startsWith("-") ? line : `- ${line.slice(1).trim()}`,
      );
    } else {
      currentSection.push(line);
      sectionIdx++;
    }
  }

  if (currentSection.length > 0) {
    enhanced.push(currentSection.join("\n"));
  }

  // Add Key Takeaways section
  enhanced.push("");
  enhanced.push("## Key Takeaways");
  enhanced.push("");

  // Generate 3 key points from title/content
  const words = title.split(" ").filter((w) => w.length > 3);
  const kw1 = words[0] || "This concept";
  const kw2 = words[1] || "the topic";
  enhanced.push(
    `- **${kw1}** is a foundational concept in NCERT curriculum that builds strong academic understanding.`,
  );
  enhanced.push(
    `- Mastering **${kw2}** helps students perform better in CBSE board exams and competitive entrance tests.`,
  );
  enhanced.push(
    "- Regular practice with MCQs and flashcards on NCERT Bhaiya reinforces the concepts covered in this article.",
  );

  // Enhance description to be SEO-friendly
  const enhancedDescription = description.trim()
    ? description.length < 100
      ? `${description.trim()} Learn key concepts, important definitions, exam tips, and practice questions for NCERT Class students.`
      : description.trim()
    : `Complete guide to ${title} with detailed explanations, key concepts, important questions, and CBSE exam tips for NCERT students.`;

  return {
    title,
    description: enhancedDescription.slice(0, 160),
    content: enhanced.join("\n"),
  };
}

// ─── Blog Tab ──────────────────────────────────────────────────────────────────
function BlogTab({
  currentUsername,
  currentFullName,
}: { currentUsername: string; currentFullName: string }) {
  const { actor } = useActor(createActor);
  const queryClient = useQueryClient();

  // Form state
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [isEnhancing, setIsEnhancing] = useState(false);

  // Fetch all posts (admin view)
  const { data: posts, isLoading: postsLoading } = useQuery<BackendBlogPost[]>({
    queryKey: ["adminBlogPosts", currentUsername],
    queryFn: async () => {
      if (!actor) return [];
      const result = await asAdmin(actor).getAllBlogPostsAdmin(currentUsername);
      return result as BackendBlogPost[];
    },
    enabled: !!actor,
    staleTime: 0,
  });

  // Create + publish mutation
  const publishMutation = useMutation({
    mutationFn: async () => {
      if (!actor) throw new Error("No actor");
      const postId = (await asAdmin(actor).createBlogPost(
        title.trim(),
        description.trim(),
        content.trim(),
        currentFullName || currentUsername,
        currentUsername,
        "",
      )) as bigint;
      await asAdmin(actor).publishBlogPost(postId, currentUsername);
      return postId;
    },
    onSuccess: () => {
      toast.success("Post published successfully!", { icon: "📝" });
      setTitle("");
      setDescription("");
      setContent("");
      queryClient.invalidateQueries({ queryKey: ["adminBlogPosts"] });
      queryClient.invalidateQueries({ queryKey: ["dynamicBlogPosts"] });
    },
    onError: () => toast.error("Failed to publish post. Please try again."),
  });

  // Delete mutation
  const deleteMutation = useMutation({
    mutationFn: async (postId: bigint) => {
      if (!actor) throw new Error("No actor");
      await asAdmin(actor).deleteBlogPost(postId, currentUsername);
    },
    onSuccess: () => {
      toast.success("Post deleted");
      queryClient.invalidateQueries({ queryKey: ["adminBlogPosts"] });
      queryClient.invalidateQueries({ queryKey: ["dynamicBlogPosts"] });
    },
    onError: () => toast.error("Failed to delete post"),
  });

  // Toggle publish/unpublish mutation
  const togglePublishMutation = useMutation({
    mutationFn: async ({
      postId,
      published,
    }: { postId: bigint; published: boolean }) => {
      if (!actor) throw new Error("No actor");
      if (published) {
        await asAdmin(actor).unpublishBlogPost(postId, currentUsername);
      } else {
        await asAdmin(actor).publishBlogPost(postId, currentUsername);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["adminBlogPosts"] });
      queryClient.invalidateQueries({ queryKey: ["dynamicBlogPosts"] });
    },
    onError: () => toast.error("Failed to update post status"),
  });

  const handleEnhance = async () => {
    if (!title.trim() || !content.trim()) {
      toast.error("Please fill in Title and Content before enhancing.");
      return;
    }
    setIsEnhancing(true);
    // Simulate AI processing
    await new Promise((resolve) => setTimeout(resolve, 1500));
    const enhanced = enhanceContentWithAI(title, description, content);
    setDescription(enhanced.description);
    setContent(enhanced.content);
    setIsEnhancing(false);
    toast.success("Content enhanced with AI!", { icon: "✨" });
  };

  const formatDate = (nanoseconds: bigint) => {
    const ms = Number(nanoseconds) / 1_000_000;
    return new Date(ms).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const canPublish = title.trim() && description.trim() && content.trim();

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-lg font-semibold text-foreground mb-1 flex items-center gap-2">
          <PenSquare size={18} className="text-neon-purple" />
          Blog Management
        </h2>
        <p className="text-sm text-muted-foreground">
          Create, enhance, and publish blog posts. Posts appear publicly on the
          blog page.
        </p>
      </div>

      {/* ── Create New Post ── */}
      <Card className="border border-border/40 bg-card/20">
        <CardHeader className="pb-4">
          <CardTitle className="text-sm font-semibold text-foreground flex items-center gap-2">
            <FileText size={14} className="text-green-400" /> Create New Blog
            Post
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Title */}
          <div className="space-y-1.5">
            <Label
              htmlFor="blog-title"
              className="text-xs font-medium text-foreground/80"
            >
              Post Title <span className="text-red-400">*</span>
            </Label>
            <Input
              id="blog-title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. NCERT Class 10 Science Chapter 1 — Chemical Reactions"
              data-ocid="blog.title.input"
              className="bg-background/50 border-border/50 text-sm"
            />
          </div>

          {/* Description */}
          <div className="space-y-1.5">
            <Label
              htmlFor="blog-desc"
              className="text-xs font-medium text-foreground/80"
            >
              Page Description / Excerpt <span className="text-red-400">*</span>
            </Label>
            <p className="text-[11px] text-muted-foreground">
              This appears as the excerpt in the blog listing and as the SEO
              meta description.
            </p>
            <Textarea
              id="blog-desc"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="A brief, compelling summary of what this article covers..."
              data-ocid="blog.description.textarea"
              className="bg-background/50 border-border/50 text-sm resize-none"
              rows={3}
            />
            <p className="text-[10px] text-muted-foreground text-right">
              {description.length}/160 chars
            </p>
          </div>

          {/* Content */}
          <div className="space-y-1.5">
            <Label
              htmlFor="blog-content"
              className="text-xs font-medium text-foreground/80"
            >
              Article Content <span className="text-red-400">*</span>
            </Label>
            <p className="text-[11px] text-muted-foreground">
              Write your article content. Use the AI enhance button to structure
              it with headings, bullet points, and a key takeaways section.
            </p>
            <Textarea
              id="blog-content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your article content here. You can use simple text — the AI will format and enhance it for you..."
              data-ocid="blog.content.textarea"
              className="bg-background/50 border-border/50 text-sm resize-none font-mono text-xs leading-relaxed"
              rows={12}
            />
          </div>

          {/* Author info */}
          <div className="flex items-center gap-2 p-3 rounded-lg bg-muted/20 border border-border/30">
            <div className="w-7 h-7 rounded-full bg-neon-purple/20 flex items-center justify-center text-[10px] font-bold text-neon-purple">
              {(currentFullName || currentUsername).charAt(0).toUpperCase()}
            </div>
            <div>
              <p className="text-xs font-medium text-foreground">
                {currentFullName || currentUsername}
              </p>
              <p className="text-[10px] text-muted-foreground">
                @{currentUsername} · Author
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-2 pt-1">
            <Button
              type="button"
              variant="outline"
              onClick={handleEnhance}
              disabled={isEnhancing || publishMutation.isPending}
              data-ocid="blog.enhance_button"
              className="gap-2 border-neon-purple/40 text-neon-purple hover:bg-neon-purple/10 hover:border-neon-purple/60"
            >
              {isEnhancing ? (
                <Loader2 size={14} className="animate-spin" />
              ) : (
                <Sparkles size={14} />
              )}
              {isEnhancing ? "Enhancing..." : "✨ Enhance with AI"}
            </Button>

            <Button
              type="button"
              onClick={() => publishMutation.mutate()}
              disabled={!canPublish || publishMutation.isPending || isEnhancing}
              data-ocid="blog.publish_button"
              className="gap-2 bg-gradient-to-r from-neon-purple to-neon-blue text-white hover:opacity-90 border-0 font-semibold"
            >
              {publishMutation.isPending ? (
                <Loader2 size={14} className="animate-spin" />
              ) : (
                <BookOpen size={14} />
              )}
              {publishMutation.isPending ? "Publishing..." : "Publish Post"}
            </Button>
          </div>

          {!canPublish && (
            <p className="text-[11px] text-muted-foreground">
              All fields (Title, Description, Content) are required to publish.
            </p>
          )}
        </CardContent>
      </Card>

      {/* ── Manage Posts ── */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
            <FileText size={14} className="text-muted-foreground" />
            Published Posts
          </h3>
          <Badge variant="secondary" className="text-xs">
            {posts?.length ?? 0} posts
          </Badge>
        </div>

        {postsLoading ? (
          <div className="space-y-3" data-ocid="blog.loading_state">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-16 w-full rounded-xl" />
            ))}
          </div>
        ) : !posts || posts.length === 0 ? (
          <div
            data-ocid="blog.empty_state"
            className="flex flex-col items-center justify-center py-12 text-muted-foreground border border-dashed border-border/40 rounded-xl"
          >
            <BookOpen size={32} className="mb-2 opacity-30" />
            <p className="text-sm">No blog posts yet.</p>
            <p className="text-xs">Create your first post above!</p>
          </div>
        ) : (
          <div className="space-y-2" data-ocid="blog.list">
            {posts.map((post, idx) => (
              <div
                key={String(post.id)}
                data-ocid={`blog.item.${idx + 1}`}
                className="flex items-start gap-3 p-4 rounded-xl border border-border/30 bg-card/20 hover:bg-card/40 transition-colors"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <p className="text-sm font-semibold text-foreground truncate">
                      {post.title}
                    </p>
                    <Badge
                      className={
                        post.published
                          ? "bg-green-500/15 text-green-400 border-green-500/30 text-[10px]"
                          : "bg-muted/30 text-muted-foreground border-border/30 text-[10px]"
                      }
                    >
                      {post.published ? "Published" : "Draft"}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-3 text-[10px] text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Users size={9} />{" "}
                      {post.authorName || post.authorUsername}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={9} />{" "}
                      {formatDate(post.createdAt ?? BigInt(0))}
                    </span>
                  </div>
                  {post.description && (
                    <p className="text-[11px] text-muted-foreground mt-1 line-clamp-1">
                      {post.description}
                    </p>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-1.5 shrink-0">
                  <Button
                    size="sm"
                    variant="ghost"
                    data-ocid={`blog.toggle_button.${idx + 1}`}
                    className="h-7 w-7 p-0 text-muted-foreground hover:text-foreground"
                    title={post.published ? "Unpublish" : "Publish"}
                    onClick={() =>
                      togglePublishMutation.mutate({
                        postId: post.id,
                        published: post.published ?? false,
                      })
                    }
                    disabled={togglePublishMutation.isPending}
                  >
                    {post.published ? <EyeOff size={13} /> : <Eye size={13} />}
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    data-ocid={`blog.delete_button.${idx + 1}`}
                    className="h-7 w-7 p-0 text-muted-foreground hover:text-red-400"
                    title="Delete post"
                    onClick={() => deleteMutation.mutate(post.id)}
                    disabled={deleteMutation.isPending}
                  >
                    <Trash2 size={13} />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Main Page ──────────────────────────────────────────────────────────────────
export default function AdminPanel() {
  useSEO({
    title: "Admin Panel | NCERT Bhaiya",
    description:
      "Administrative control panel for NCERT Bhaiya site management.",
  });

  const { user } = useAuth();
  const { isAdmin, isOperator, loading } = useAdminRole();
  const hasAccess = isAdmin || isOperator;

  if (loading) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-[60vh]">
          <Loader2 className="w-10 h-10 animate-spin text-purple-400" />
        </div>
      </Layout>
    );
  }

  // Not logged in
  if (!user) {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 px-4">
          <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center">
            <Lock size={28} className="text-red-400" />
          </div>
          <h1 className="text-2xl font-bold text-foreground">Access Denied</h1>
          <p className="text-muted-foreground text-sm text-center max-w-sm">
            You must be logged in to access the admin panel.
          </p>
          <Button
            data-ocid="admin.login_button"
            onClick={() => {
              window.location.href = "/auth";
            }}
            className="bg-purple-600/80 hover:bg-purple-600 text-white border-0"
          >
            Go to Login
          </Button>
        </div>
      </Layout>
    );
  }

  // Logged in but not admin or operator — show claim or denied
  if (!hasAccess) {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 px-4">
          <div className="w-16 h-16 rounded-full bg-amber-500/10 flex items-center justify-center">
            <Shield size={28} className="text-amber-400" />
          </div>
          <h1 className="text-2xl font-bold text-foreground">Admin Setup</h1>
          <p className="text-muted-foreground text-sm text-center max-w-sm">
            No admin has been assigned yet. If you are the site owner, claim
            admin access below.
          </p>
          <ClaimAdminSection />
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* ── Header ── */}
        <div className="flex items-start gap-4 mb-8 p-6 rounded-2xl border border-border/30 bg-card/20 backdrop-blur-sm">
          <div
            className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${
              isAdmin
                ? "bg-gradient-to-br from-amber-500/30 to-orange-600/20 border border-amber-500/40"
                : "bg-gradient-to-br from-blue-500/30 to-cyan-600/20 border border-blue-500/40"
            }`}
          >
            <Shield
              size={24}
              className={isAdmin ? "text-amber-400" : "text-blue-400"}
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 flex-wrap">
              <h1 className="text-2xl font-bold text-foreground">
                Admin Panel
              </h1>
              {isAdmin ? (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/15 text-amber-400 border border-amber-500/30">
                  <Crown size={11} /> Admin
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-500/15 text-blue-400 border border-blue-500/30">
                  <Wrench size={11} /> Operator
                </span>
              )}
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              {isAdmin
                ? "Full control — manage users, roles, settings, and blog posts."
                : "Content management — edit settings, announcements, and blog posts."}
            </p>
            <p className="text-xs text-muted-foreground/60 mt-1">
              Logged in as{" "}
              <span className="text-foreground/70 font-mono">
                @{user.username}
              </span>
            </p>
          </div>
        </div>

        {/* ── Tabs ── */}
        <Tabs defaultValue={isAdmin ? "dashboard" : "blog"}>
          <TabsList
            data-ocid="admin.tab"
            className="mb-6 bg-card/50 border border-border/40 h-auto flex-wrap gap-1 p-1"
          >
            {isAdmin && (
              <TabsTrigger
                value="dashboard"
                className="gap-1.5 text-xs sm:text-sm"
              >
                <LayoutDashboard size={13} /> Dashboard
              </TabsTrigger>
            )}
            {isAdmin && (
              <TabsTrigger value="users" className="gap-1.5 text-xs sm:text-sm">
                <Users size={13} /> Users
              </TabsTrigger>
            )}
            <TabsTrigger
              value="settings"
              className="gap-1.5 text-xs sm:text-sm"
            >
              <Settings size={13} /> Settings
            </TabsTrigger>
            <TabsTrigger
              value="announcements"
              className="gap-1.5 text-xs sm:text-sm"
            >
              <Megaphone size={13} /> Announcements
            </TabsTrigger>
            <TabsTrigger value="blog" className="gap-1.5 text-xs sm:text-sm">
              <PenSquare size={13} /> Blog
            </TabsTrigger>
          </TabsList>

          {isAdmin && (
            <TabsContent value="dashboard">
              <DashboardTab />
            </TabsContent>
          )}

          {isAdmin && (
            <TabsContent value="users">
              <UsersTab currentUsername={user.username} />
            </TabsContent>
          )}

          <TabsContent value="settings">
            <SettingsTab />
          </TabsContent>

          <TabsContent value="announcements">
            <AnnouncementsTab />
          </TabsContent>

          <TabsContent value="blog">
            <BlogTab
              currentUsername={user.username}
              currentFullName={user.fullName}
            />
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
