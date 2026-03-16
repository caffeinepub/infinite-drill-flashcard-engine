import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
import { Principal } from "@icp-sdk/core/principal";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  KeyRound,
  Loader2,
  Settings,
  Shield,
  ShieldAlert,
  Users,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import type { SiteSettings, UserWithRole } from "../backend.d";
import { Layout } from "../components/Layout";
import { useActor } from "../hooks/useActor";
import { useAdminRole } from "../hooks/useAdminRole";
import { useSEO } from "../hooks/useSEO";

// Helper to call backend methods
function adminActor(actor: unknown) {
  return actor as Record<string, (...args: unknown[]) => Promise<unknown>>;
}

function RoleBadge({ role }: { role: string }) {
  if (role === "admin") {
    return (
      <Badge className="bg-neon-amber/20 text-neon-amber border-neon-amber/40 text-[11px] font-semibold">
        👑 Admin
      </Badge>
    );
  }
  if (role === "operator") {
    return (
      <Badge className="bg-neon-blue/20 text-neon-blue border-neon-blue/40 text-[11px] font-semibold">
        🔧 Operator
      </Badge>
    );
  }
  return (
    <Badge variant="secondary" className="text-[11px]">
      👤 User
    </Badge>
  );
}

function ClaimAdminSection() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  const [secret, setSecret] = useState("");
  const [showSecret, setShowSecret] = useState(false);

  const claimMutation = useMutation({
    mutationFn: async () => {
      if (!actor) throw new Error("Not connected");
      await adminActor(actor)._initializeAccessControlWithSecret(secret);
    },
    onSuccess: () => {
      toast.success("Admin access granted! Refreshing...");
      queryClient.invalidateQueries({ queryKey: ["callerRole"] });
      setSecret("");
      // Reload after short delay so role query re-fetches
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
    <div className="max-w-md mx-auto mt-8 p-6 rounded-2xl border border-neon-amber/30 bg-neon-amber/5">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-neon-amber/20 flex items-center justify-center">
          <KeyRound size={20} className="text-neon-amber" />
        </div>
        <div>
          <h2 className="font-display font-bold text-foreground">
            Claim Admin Access
          </h2>
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
          className="text-neon-blue hover:underline"
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
              className="bg-background/50 border-border/50 focus:border-neon-amber/50 h-10 pr-20"
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
          className="w-full bg-neon-amber/80 hover:bg-neon-amber text-background font-bold border-0"
        >
          {claimMutation.isPending ? (
            <span className="flex items-center gap-2">
              <Loader2 size={15} className="animate-spin" />
              Claiming...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <KeyRound size={15} />
              Claim Admin
            </span>
          )}
        </Button>
      </div>
    </div>
  );
}

function UsersTab({ isAdmin }: { isAdmin: boolean }) {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  const { data: users, isLoading } = useQuery<UserWithRole[]>({
    queryKey: ["allUsersWithRoles"],
    queryFn: async () => {
      if (!actor) return [];
      const result = await adminActor(actor).getAllUsersWithRoles();
      return result as UserWithRole[];
    },
    enabled: !!actor,
    staleTime: 0,
  });

  const makeOperator = useMutation({
    mutationFn: async (principalStr: string) => {
      if (!actor) throw new Error("No actor");
      await adminActor(actor).assignOperatorRole(
        Principal.fromText(principalStr),
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["allUsersWithRoles"] });
      toast.success("User promoted to Operator");
    },
    onError: () => toast.error("Failed to assign operator role"),
  });

  const dismissOperator = useMutation({
    mutationFn: async (principalStr: string) => {
      if (!actor) throw new Error("No actor");
      await adminActor(actor).dismissOperator(Principal.fromText(principalStr));
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["allUsersWithRoles"] });
      toast.success("Operator dismissed");
    },
    onError: () => toast.error("Failed to dismiss operator"),
  });

  const deleteUser = useMutation({
    mutationFn: async (principalStr: string) => {
      if (!actor) throw new Error("No actor");
      await adminActor(actor).deleteUserProfile(
        Principal.fromText(principalStr),
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["allUsersWithRoles"] });
      toast.success("User deleted");
    },
    onError: () => toast.error("Failed to delete user"),
  });

  if (isLoading) {
    return (
      <div
        data-ocid="users.loading_state"
        className="flex justify-center py-16"
      >
        <Loader2 className="w-8 h-8 animate-spin text-neon-purple" />
      </div>
    );
  }

  if (!users || users.length === 0) {
    return (
      <div
        data-ocid="users.empty_state"
        className="text-center py-16 text-muted-foreground"
      >
        <Users size={40} className="mx-auto mb-3 opacity-30" />
        <p>No users found</p>
      </div>
    );
  }

  return (
    <div>
      {!isAdmin && (
        <div className="mb-4 px-4 py-3 rounded-xl bg-neon-blue/10 border border-neon-blue/30 text-neon-blue text-sm">
          🔒 Only admins can manage roles.
        </div>
      )}
      <div className="rounded-xl border border-border/40 overflow-hidden">
        <Table data-ocid="users.table">
          <TableHeader>
            <TableRow className="border-border/40 hover:bg-transparent">
              <TableHead className="text-muted-foreground">Name</TableHead>
              <TableHead className="text-muted-foreground">Class</TableHead>
              <TableHead className="text-muted-foreground">Role</TableHead>
              {isAdmin && (
                <TableHead className="text-muted-foreground text-right">
                  Actions
                </TableHead>
              )}
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user, i) => (
              <TableRow
                key={user.principal}
                data-ocid={`users.item.${i + 1}`}
                className="border-border/30"
              >
                <TableCell className="font-medium text-foreground">
                  {user.displayName || "—"}
                </TableCell>
                <TableCell className="text-muted-foreground text-sm">
                  {user.studentClass || "—"}
                </TableCell>
                <TableCell>
                  <RoleBadge role={user.role} />
                </TableCell>
                {isAdmin && (
                  <TableCell className="text-right">
                    <div className="flex items-center gap-2 justify-end">
                      {user.role === "user" && (
                        <Button
                          size="sm"
                          variant="outline"
                          data-ocid={`users.secondary_button.${i + 1}`}
                          className="h-7 text-xs border-neon-blue/40 text-neon-blue hover:bg-neon-blue/15"
                          disabled={makeOperator.isPending}
                          onClick={() => makeOperator.mutate(user.principal)}
                        >
                          {makeOperator.isPending &&
                          makeOperator.variables === user.principal ? (
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
                          className="h-7 text-xs border-neon-amber/40 text-neon-amber hover:bg-neon-amber/15"
                          disabled={dismissOperator.isPending}
                          onClick={() => dismissOperator.mutate(user.principal)}
                        >
                          {dismissOperator.isPending &&
                          dismissOperator.variables === user.principal ? (
                            <Loader2 className="w-3 h-3 animate-spin" />
                          ) : (
                            "Dismiss"
                          )}
                        </Button>
                      )}
                      {user.role !== "admin" && (
                        <Button
                          size="sm"
                          variant="outline"
                          data-ocid={`users.delete_button.${i + 1}`}
                          className="h-7 text-xs border-destructive/40 text-destructive hover:bg-destructive/15"
                          disabled={deleteUser.isPending}
                          onClick={() => {
                            if (
                              confirm(
                                `Delete user "${user.displayName}"? This cannot be undone.`,
                              )
                            ) {
                              deleteUser.mutate(user.principal);
                            }
                          }}
                        >
                          {deleteUser.isPending &&
                          deleteUser.variables === user.principal ? (
                            <Loader2 className="w-3 h-3 animate-spin" />
                          ) : (
                            "Delete"
                          )}
                        </Button>
                      )}
                    </div>
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

function SettingsTab() {
  const { actor } = useActor();

  const { data: settings, isLoading } = useQuery<SiteSettings | null>({
    queryKey: ["siteSettings"],
    queryFn: async () => {
      if (!actor) return null;
      const result = await adminActor(actor).getSiteSettings();
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
      return adminActor(actor).updateSiteSettings(
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
      <div
        data-ocid="settings.loading_state"
        className="flex justify-center py-16"
      >
        <Loader2 className="w-8 h-8 animate-spin text-neon-purple" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {settings && (
        <div className="text-xs text-muted-foreground flex flex-wrap gap-x-4 gap-y-1">
          <span>Last updated: {formatDate(settings.lastUpdated)}</span>
          <span>By: {settings.updatedBy || "—"}</span>
        </div>
      )}

      <div className="space-y-3 p-5 rounded-xl border border-border/40 bg-card/30">
        <div className="flex items-center justify-between">
          <Label className="text-base font-semibold text-foreground">
            Site Announcement
          </Label>
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
        <Textarea
          data-ocid="settings.textarea"
          placeholder="Enter announcement text shown to all users..."
          value={announcement}
          onChange={(e) => setAnnouncement(e.target.value)}
          rows={3}
          className="resize-none bg-background/50"
        />
        <p className="text-xs text-muted-foreground">
          When enabled, this message will be displayed as a banner to all users.
        </p>
      </div>

      <div className="space-y-3 p-5 rounded-xl border border-border/40 bg-card/30">
        <Label className="text-base font-semibold text-foreground">
          Featured Message
        </Label>
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
      </div>

      <Button
        data-ocid="settings.submit_button"
        onClick={() => saveMutation.mutate()}
        disabled={saveMutation.isPending}
        className="bg-neon-purple/80 hover:bg-neon-purple text-white border-0"
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
          className="text-sm text-neon-green"
        >
          ✓ Settings saved successfully.
        </div>
      )}
    </div>
  );
}

export default function AdminPanel() {
  useSEO({
    title: "Admin Panel | NCERT Bhaiya",
    description:
      "Administrative control panel for NCERT Bhaiya site management.",
  });

  const { isAdmin, isOperator, loading } = useAdminRole();
  const hasAccess = isAdmin || isOperator;

  if (loading) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-[60vh]">
          <Loader2 className="w-10 h-10 animate-spin text-neon-purple" />
        </div>
      </Layout>
    );
  }

  // Not an admin/operator — show Claim Admin option
  if (!hasAccess) {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center min-h-[60vh] gap-2 px-4">
          <div className="w-16 h-16 rounded-full bg-neon-amber/10 flex items-center justify-center mb-2">
            <ShieldAlert size={30} className="text-neon-amber" />
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
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-purple/30 to-neon-blue/30 border border-neon-purple/40 flex items-center justify-center shrink-0">
            <Shield size={22} className="text-neon-purple" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 flex-wrap">
              <h1 className="text-2xl font-display font-bold text-foreground">
                Admin Panel
              </h1>
              {isAdmin ? (
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-neon-amber/20 text-neon-amber border border-neon-amber/40">
                  👑 Admin
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-neon-blue/20 text-neon-blue border border-neon-blue/40">
                  🔧 Operator
                </span>
              )}
            </div>
            <p className="text-sm text-muted-foreground mt-0.5">
              {isAdmin
                ? "Full control — manage users, roles, and site settings."
                : "Manage site content and settings. Role management is admin-only."}
            </p>
          </div>
        </div>

        <Tabs defaultValue="users">
          <TabsList
            data-ocid="admin.tab"
            className="mb-6 bg-card/50 border border-border/40"
          >
            <TabsTrigger value="users" className="gap-2">
              <Users size={14} /> Users
            </TabsTrigger>
            <TabsTrigger value="settings" className="gap-2">
              <Settings size={14} /> Site Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="users">
            <UsersTab isAdmin={isAdmin} />
          </TabsContent>

          <TabsContent value="settings">
            <SettingsTab />
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
