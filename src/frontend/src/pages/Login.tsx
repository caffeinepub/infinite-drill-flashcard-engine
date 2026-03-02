import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Brain,
  GraduationCap,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { useInternetIdentity } from "../hooks/useInternetIdentity";

// Floating particle component
function FloatingParticle({
  x,
  y,
  delay,
  color,
}: { x: number; y: number; delay: number; color: string }) {
  return (
    <motion.div
      className={`absolute w-1.5 h-1.5 rounded-full ${color}`}
      style={{ left: `${x}%`, top: `${y}%` }}
      animate={{
        y: [0, -20, 0],
        opacity: [0.3, 0.8, 0.3],
        scale: [1, 1.3, 1],
      }}
      transition={{
        duration: 3 + Math.random() * 2,
        delay,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
    />
  );
}

const particles = [
  { x: 10, y: 20, delay: 0, color: "bg-neon-purple/60" },
  { x: 85, y: 15, delay: 0.5, color: "bg-neon-blue/60" },
  { x: 20, y: 80, delay: 1.0, color: "bg-neon-green/60" },
  { x: 75, y: 70, delay: 1.5, color: "bg-neon-amber/60" },
  { x: 50, y: 10, delay: 2.0, color: "bg-neon-purple/40" },
  { x: 35, y: 60, delay: 0.7, color: "bg-neon-blue/40" },
  { x: 90, y: 45, delay: 1.3, color: "bg-neon-green/40" },
  { x: 5, y: 50, delay: 0.3, color: "bg-neon-amber/40" },
];

const features = [
  {
    icon: BookOpen,
    label: "Full NCERT Coverage",
    desc: "Class 1-12 all subjects",
    color: "text-neon-purple",
  },
  {
    icon: Brain,
    label: "AI Teacher",
    desc: "Ask questions, get instant answers",
    color: "text-neon-blue",
  },
  {
    icon: Zap,
    label: "Interactive Quizzes",
    desc: "Gamified learning with XP",
    color: "text-neon-amber",
  },
  {
    icon: GraduationCap,
    label: "Concept Videos",
    desc: "Animated explanations",
    color: "text-neon-green",
  },
];

export default function Login() {
  const { login, isLoggingIn } = useInternetIdentity();

  return (
    <div className="min-h-screen bg-mesh-dark flex flex-col overflow-hidden relative">
      {/* Particle background */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p) => (
          <FloatingParticle key={`particle-${p.x}-${p.y}`} {...p} />
        ))}
      </div>

      {/* Large decorative orbs */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 rounded-full bg-neon-purple/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 rounded-full bg-neon-blue/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-neon-purple/5 blur-3xl pointer-events-none" />

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-12 relative z-10">
        {/* Logo + Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-10"
        >
          <div className="relative mb-6">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-neon-purple to-neon-blue flex items-center justify-center shadow-neon-purple glow-purple">
              <BookOpen size={36} className="text-white" />
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-neon-amber flex items-center justify-center"
            >
              <Sparkles size={12} className="text-background" />
            </motion.div>
          </div>

          <div className="flex items-center gap-2 mb-3">
            <Star size={14} className="text-neon-amber fill-neon-amber" />
            <span className="text-xs font-mono-custom text-neon-amber uppercase tracking-widest">
              India's #1 NCERT Platform
            </span>
            <Star size={14} className="text-neon-amber fill-neon-amber" />
          </div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-display text-5xl md:text-6xl font-bold text-center leading-tight mb-4"
          >
            <span className="text-gradient-purple">NCERT</span>
            <br />
            <span className="text-foreground">Learn</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-muted-foreground text-center text-base md:text-lg max-w-md leading-relaxed"
          >
            Complete NCERT content for Classes 1–12, AI-powered teacher,
            animated concept videos, and gamified quizzes — all in one place.
          </motion.p>
        </motion.div>

        {/* Feature cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="grid grid-cols-2 gap-3 mb-10 max-w-md w-full"
        >
          {features.map(({ icon: Icon, label, desc, color }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + i * 0.1 }}
              className="glass-dark rounded-xl p-3 flex items-start gap-2.5"
            >
              <Icon size={18} className={`${color} shrink-0 mt-0.5`} />
              <div>
                <div className="text-xs font-semibold text-foreground leading-tight">
                  {label}
                </div>
                <div className="text-[11px] text-muted-foreground mt-0.5 leading-tight">
                  {desc}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Login button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex flex-col items-center gap-4 w-full max-w-sm"
        >
          <Button
            onClick={login}
            disabled={isLoggingIn}
            data-ocid="login.primary_button"
            size="lg"
            className="w-full h-14 text-base font-display font-bold bg-gradient-to-r from-neon-purple to-neon-blue hover:opacity-90 text-white shadow-neon-purple transition-all duration-200 hover:shadow-lg hover:scale-[1.02] rounded-xl"
          >
            {isLoggingIn ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                Connecting...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <GraduationCap size={20} />
                Login to Start Learning
              </span>
            )}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            Uses Internet Identity — secure, private, no passwords needed
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="flex items-center gap-8 mt-10"
        >
          {[
            { value: "12", label: "Classes" },
            { value: "40+", label: "Chapters" },
            { value: "AI", label: "Teacher" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="font-display text-2xl font-bold text-gradient-purple">
                {value}
              </div>
              <div className="text-xs text-muted-foreground">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="py-4 text-center text-xs text-muted-foreground relative z-10">
        © {new Date().getFullYear()} NCERT Learn — Built with ❤️ using{" "}
        <a
          href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground transition-colors underline"
        >
          caffeine.ai
        </a>
      </footer>
    </div>
  );
}
