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
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  Crown,
  KeyRound,
  LayoutDashboard,
  Lightbulb,
  Loader2,
  Lock,
  Megaphone,
  Settings,
  Shield,
  Users,
  Wrench,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import type { SiteSettings } from "../backend.d";
import { Layout } from "../components/Layout";
import { useAuth } from "../context/AuthContext";
import { useActor } from "../hooks/useActor";
import { useAdminRole } from "../hooks/useAdminRole";
import { useSEO } from "../hooks/useSEO";

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
  const { actor } = useActor();
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
  const { actor } = useActor();

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
  const { actor } = useActor();
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
            {users.map((user, i) => (
              <TableRow
                key={user.username}
                data-ocid={`users.item.${i + 1}`}
                className="border-border/30 hover:bg-card/30 transition-colors"
              >
                <TableCell className="font-medium text-foreground">
                  {user.fullName || "—"}
                </TableCell>
                <TableCell className="text-muted-foreground text-sm font-mono">
                  @{user.username}
                </TableCell>
                <TableCell className="text-muted-foreground text-sm hidden md:table-cell">
                  {user.email || "—"}
                </TableCell>
                <TableCell>
                  <RoleBadge role={user.role} />
                </TableCell>
                <TableCell className="text-right">
                  {user.role === "admin" ? (
                    <span className="text-xs text-muted-foreground italic">
                      Protected
                    </span>
                  ) : (
                    <div className="flex items-center gap-2 justify-end flex-wrap">
                      {user.role === "user" && (
                        <Button
                          size="sm"
                          variant="outline"
                          data-ocid={`users.secondary_button.${i + 1}`}
                          className="h-7 text-xs border-blue-500/40 text-blue-400 hover:bg-blue-500/15 hover:text-blue-300"
                          disabled={makeOperator.isPending}
                          onClick={() => makeOperator.mutate(user.username)}
                        >
                          {makeOperator.isPending &&
                          makeOperator.variables === user.username ? (
                            <Loader2 className="w-3 h-3 animate-spin" />
                          ) : (
                            "Make Operator"
                          )}
                        </Button>
                      )}
                      {user.role === "operator" && (
                        <Button
                          size="sm"
                          variant="outline"
                          data-ocid={`users.edit_button.${i + 1}`}
                          className="h-7 text-xs border-amber-500/40 text-amber-400 hover:bg-amber-500/15 hover:text-amber-300"
                          disabled={demoteOperator.isPending}
                          onClick={() => demoteOperator.mutate(user.username)}
                        >
                          {demoteOperator.isPending &&
                          demoteOperator.variables === user.username ? (
                            <Loader2 className="w-3 h-3 animate-spin" />
                          ) : (
                            "Demote"
                          )}
                        </Button>
                      )}
                    </div>
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

// ─── Settings Tab ───────────────────────────────────────────────────────────────
function SettingsTab() {
  const { actor } = useActor();

  const { data: settings, isLoading } = useQuery<SiteSettings | null>({
    queryKey: ["siteSettings"],
    queryFn: async () => {
      if (!actor) return null;
      const result = await asAdmin(actor).getSiteSettings();
      return (result as SiteSettings) ?? null;
    },
    enabled: !!actor,
  });

  const [announcement, setAnnouncement] = useState("");
  const [announcementEnabled, setAnnouncementEnabled] = useState(false);
  const [featuredMessage, setFeaturedMessage] = useState("");
  const [initialized, setInitialized] = useState(false);

  if (settings && !initialized) {
    setAnnouncement(settings.announcement);
    setAnnouncementEnabled(settings.announcementEnabled);
    setFeaturedMessage(settings.featuredMessage);
    setInitialized(true);
  }

  const saveMutation = useMutation({
    mutationFn: async () => {
      if (!actor) throw new Error("No actor");
      return asAdmin(actor).updateSiteSettings(
        announcement,
        announcementEnabled,
        featuredMessage,
      );
    },
    onSuccess: () => toast.success("Site settings saved!"),
    onError: () => toast.error("Failed to save settings"),
  });

  const formatDate = (ns: bigint) => {
    const ms = Number(ns / BigInt(1_000_000));
    return new Date(ms).toLocaleString();
  };

  if (isLoading) {
    return (
      <div data-ocid="settings.loading_state" className="space-y-4">
        {[1, 2, 3].map((i) => (
          <Skeleton key={i} className="h-24 w-full rounded-xl" />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold text-foreground">Site Settings</h2>
        {settings && (
          <p className="text-xs text-muted-foreground mt-1">
            Last updated: {formatDate(settings.lastUpdated)}
            {settings.updatedBy ? ` by ${settings.updatedBy}` : ""}
          </p>
        )}
      </div>

      <Card className="border border-border/40 bg-card/30">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base font-semibold text-foreground flex items-center gap-2">
              <Megaphone size={15} className="text-purple-400" /> Site
              Announcement
            </CardTitle>
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground">
                {announcementEnabled ? "Enabled" : "Disabled"}
              </span>
              <Switch
                data-ocid="settings.switch"
                checked={announcementEnabled}
                onCheckedChange={setAnnouncementEnabled}
              />
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          <Textarea
            data-ocid="settings.textarea"
            placeholder="Enter announcement text shown to all users..."
            value={announcement}
            onChange={(e) => setAnnouncement(e.target.value)}
            rows={3}
            className="resize-none bg-background/50"
          />
          <p className="text-xs text-muted-foreground">
            When enabled, this message will be displayed as a banner to all
            users across the site.
          </p>
        </CardContent>
      </Card>

      <Card className="border border-border/40 bg-card/30">
        <CardHeader className="pb-3">
          <CardTitle className="text-base font-semibold text-foreground">
            Featured Message
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Input
            data-ocid="settings.input"
            placeholder="Short message shown on the home page..."
            value={featuredMessage}
            onChange={(e) => setFeaturedMessage(e.target.value)}
            className="bg-background/50"
          />
          <p className="text-xs text-muted-foreground">
            Appears as a highlighted callout on the homepage.
          </p>
        </CardContent>
      </Card>

      <Button
        data-ocid="settings.submit_button"
        onClick={() => saveMutation.mutate()}
        disabled={saveMutation.isPending}
        className="bg-purple-600/80 hover:bg-purple-600 text-white border-0"
      >
        {saveMutation.isPending ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Saving...
          </>
        ) : (
          "Save Settings"
        )}
      </Button>

      {saveMutation.isSuccess && (
        <div
          data-ocid="settings.success_state"
          className="text-sm text-green-400 flex items-center gap-2"
        >
          ✓ Settings saved successfully.
        </div>
      )}
    </div>
  );
}

// ─── Announcements Tab ──────────────────────────────────────────────────────────
function AnnouncementsTab() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  const { data: settings } = useQuery<SiteSettings | null>({
    queryKey: ["siteSettings"],
    queryFn: async () => {
      if (!actor) return null;
      const result = await asAdmin(actor).getSiteSettings();
      return (result as SiteSettings) ?? null;
    },
    enabled: !!actor,
  });

  const toggleMutation = useMutation({
    mutationFn: async (enabled: boolean) => {
      if (!actor || !settings) throw new Error("No actor or settings");
      return asAdmin(actor).updateSiteSettings(
        settings.announcement,
        enabled,
        settings.featuredMessage,
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["siteSettings"] });
      toast.success("Announcement updated!");
    },
    onError: () => toast.error("Failed to toggle announcement"),
  });

  const isEnabled = settings?.announcementEnabled ?? false;
  const announcementText = settings?.announcement ?? "";

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold text-foreground">
          Announcement Management
        </h2>
        <p className="text-sm text-muted-foreground">
          Control what users see at the top of every page.
        </p>
      </div>

      {/* Quick toggle */}
      <Card className="border border-border/40 bg-card/30">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base font-semibold text-foreground">
              Quick Toggle
            </CardTitle>
            <div className="flex items-center gap-3">
              <span
                className={`text-xs font-semibold ${isEnabled ? "text-green-400" : "text-muted-foreground"}`}
              >
                {isEnabled ? "● Live" : "○ Paused"}
              </span>
              <Switch
                data-ocid="announcements.switch"
                checked={isEnabled}
                disabled={!settings || toggleMutation.isPending}
                onCheckedChange={(val) => toggleMutation.mutate(val)}
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-xs text-muted-foreground">
            Toggle the announcement on or off instantly without editing the full
            settings form.
          </p>
        </CardContent>
      </Card>

      {/* Preview */}
      <div className="space-y-2">
        <Label className="text-sm font-medium text-foreground">
          Live Preview
        </Label>
        {announcementText ? (
          <div
            className={`p-4 rounded-xl border text-sm transition-all ${
              isEnabled
                ? "bg-purple-500/15 border-purple-500/30 text-purple-200"
                : "bg-muted/20 border-border/30 text-muted-foreground line-through opacity-50"
            }`}
          >
            <div className="flex items-start gap-2">
              <Megaphone size={14} className="mt-0.5 shrink-0" />
              <span>{announcementText}</span>
            </div>
          </div>
        ) : (
          <div className="p-4 rounded-xl border border-border/30 bg-muted/10 text-muted-foreground text-sm text-center">
            No announcement set. Go to Site Settings to write one.
          </div>
        )}
      </div>

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
                ? "Full control — manage users, roles, and site settings."
                : "Content management — edit settings and announcements."}
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
        <Tabs defaultValue={isAdmin ? "dashboard" : "settings"}>
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
        </Tabs>
      </div>
    </Layout>
  );
}
