import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  BookOpen,
  ChevronRight,
  GraduationCap,
  Loader2,
  User,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { useActor } from "../hooks/useActor";
import { useUserProfile } from "../hooks/useUserProfile";

export default function Onboarding() {
  const { actor } = useActor();
  const { refetch, setProfile } = useUserProfile();
  const [displayName, setDisplayName] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [nameError, setNameError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setNameError("");

    if (!displayName.trim()) {
      setNameError("Please enter your name");
      return;
    }
    if (!studentClass) {
      toast.error("Please select your class");
      return;
    }

    setIsSubmitting(true);
    try {
      if (actor) {
        await actor.saveCallerUserProfile(displayName.trim(), studentClass);
        // Directly set the profile so AuthGuard navigates immediately
        setProfile({
          displayName: displayName.trim(),
          studentClass,
          principal: "",
          createdAt: BigInt(0),
        });
        toast.success("Welcome to NCERT Learn! 🎉");
        // Also refetch in background to sync with backend
        refetch().catch(() => {});
      } else {
        toast.error("Not connected yet. Please wait a moment and try again.");
      }
    } catch (err) {
      console.error("Profile save error:", err);
      toast.error("Couldn't save your profile. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const classes = [
    ...Array.from({ length: 12 }, (_, i) => ({
      value: `Class ${i + 1}`,
      label: `Class ${i + 1}`,
    })),
    { value: "JEE", label: "JEE (IIT Entrance)" },
  ];

  return (
    <div className="min-h-screen bg-mesh-dark flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-neon-purple/10 blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md relative z-10"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-neon-purple to-neon-blue flex items-center justify-center mx-auto mb-4 glow-purple">
            <GraduationCap size={28} className="text-white" />
          </div>
          <h1 className="font-display text-3xl font-bold mb-2">
            <span className="text-gradient-purple">Set Up</span>{" "}
            <span className="text-foreground">Your Profile</span>
          </h1>
          <p className="text-muted-foreground text-sm">
            Tell us your name and class to personalize your learning journey
          </p>
        </div>

        {/* Form Card */}
        <div className="glass-dark rounded-2xl p-6 border border-border/40">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Input */}
            <div className="space-y-2">
              <Label
                htmlFor="displayName"
                className="text-sm font-medium text-foreground/80 flex items-center gap-2"
              >
                <User size={14} className="text-neon-purple" />
                Your Name
              </Label>
              <Input
                id="displayName"
                type="text"
                value={displayName}
                onChange={(e) => {
                  setDisplayName(e.target.value);
                  if (nameError) setNameError("");
                }}
                placeholder="e.g., Rahul Sharma"
                data-ocid="onboarding.input"
                className="bg-background/50 border-border/50 focus:border-neon-purple/50 focus:ring-neon-purple/20 h-11"
                autoComplete="name"
                autoFocus
              />
              {nameError && (
                <p
                  className="text-xs text-neon-red mt-1"
                  data-ocid="onboarding.error_state"
                >
                  {nameError}
                </p>
              )}
            </div>

            {/* Class Selector */}
            <div className="space-y-2">
              <Label className="text-sm font-medium text-foreground/80 flex items-center gap-2">
                <BookOpen size={14} className="text-neon-blue" />
                Your Class
              </Label>
              <Select value={studentClass} onValueChange={setStudentClass}>
                <SelectTrigger
                  data-ocid="onboarding.select"
                  className="bg-background/50 border-border/50 focus:border-neon-blue/50 h-11"
                >
                  <SelectValue placeholder="Select your class..." />
                </SelectTrigger>
                <SelectContent>
                  {classes.map(({ value, label }) => (
                    <SelectItem key={value} value={value}>
                      {label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Submit */}
            <Button
              type="submit"
              disabled={isSubmitting}
              data-ocid="onboarding.submit_button"
              className="w-full h-12 font-display font-bold bg-gradient-to-r from-neon-purple to-neon-blue text-white hover:opacity-90 transition-all rounded-xl mt-2"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <Loader2 size={16} className="animate-spin" />
                  Saving...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  Start Learning
                  <ChevronRight size={18} />
                </span>
              )}
            </Button>
          </form>
        </div>

        {/* Preview */}
        {(displayName || studentClass) && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 glass-dark rounded-xl px-4 py-3 border border-neon-purple/20 flex items-center gap-3"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-neon-purple to-neon-blue flex items-center justify-center text-white text-sm font-bold">
              {displayName.charAt(0).toUpperCase() || "?"}
            </div>
            <div>
              <div className="text-sm font-medium text-foreground">
                {displayName || "Your Name"}
              </div>
              <div className="text-xs text-muted-foreground">
                {studentClass || "Select class"}
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
