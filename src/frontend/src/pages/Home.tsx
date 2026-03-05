import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import {
  Activity,
  BookOpen,
  BookText,
  CheckCircle,
  ChevronDown,
  ChevronRight,
  FileText,
  FlaskConical,
  GraduationCap,
  Library,
  Sparkles,
  Target,
  Users,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { AdZone } from "../components/AdZone";
import { Layout } from "../components/Layout";
import { useSEO } from "../hooks/useSEO";
import { useUserProfile } from "../hooks/useUserProfile";

// ─── Dynamic data loader ──────────────────────────────────────────────────────

type DemoModule = typeof import("../data/demoData");

function useDemoData() {
  const [demoModule, setDemoModule] = useState<DemoModule | null>(null);

  useEffect(() => {
    import("../data/demoData").then(setDemoModule);
  }, []);

  return {
    topicsData: demoModule?.topicsData ?? [],
    subjectColors: demoModule?.subjectColors ?? {},
    difficultyColors: demoModule?.difficultyColors ?? {},
    isLoaded: demoModule !== null,
  };
}

// ─── Animated Counter ─────────────────────────────────────────────────────────

function AnimatedCounter({
  target,
  duration = 2000,
}: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !startedRef.current) {
          startedRef.current = true;
          const start = Date.now();
          const tick = () => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - (1 - progress) ** 3;
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

// ─── Topic Tree Node ──────────────────────────────────────────────────────────

interface TreeNode {
  label: string;
  children?: TreeNode[];
  topicId?: string;
  leaf?: boolean;
}

const topicTree: TreeNode[] = [
  {
    label: "CBSE",
    children: [
      {
        label: "Class 10",
        children: [
          {
            label: "Science",
            children: [
              {
                label: "Carbon Compounds",
                children: [
                  {
                    label: "IUPAC Naming & Reactions",
                    topicId: "1",
                    leaf: true,
                  },
                ],
              },
            ],
          },
          {
            label: "Mathematics",
            children: [
              {
                label: "Quadratic Equations",
                children: [
                  { label: "Discriminant & Roots", topicId: "2", leaf: true },
                ],
              },
            ],
          },
        ],
      },
      {
        label: "Class 9",
        children: [
          {
            label: "Social Science",
            children: [
              {
                label: "French Revolution",
                children: [
                  { label: "Causes & Consequences", topicId: "3", leaf: true },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

function TreeNodeItem({ node, depth = 0 }: { node: TreeNode; depth?: number }) {
  const [open, setOpen] = useState(depth < 2);

  if (node.leaf && node.topicId) {
    return (
      <Link
        to="/quiz/$topicId"
        params={{ topicId: node.topicId }}
        className="flex items-center gap-2 py-1.5 pl-3 pr-2 rounded-md text-xs text-neon-purple hover:bg-neon-purple/10 transition-colors group"
      >
        <Target size={10} className="shrink-0 opacity-60" />
        <span className="truncate">{node.label}</span>
        <ChevronRight
          size={10}
          className="ml-auto opacity-0 group-hover:opacity-60 transition-opacity"
        />
      </Link>
    );
  }

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-2 py-1.5 px-2 rounded-md text-xs font-medium text-foreground/70 hover:text-foreground hover:bg-muted/50 transition-all"
      >
        {open ? (
          <ChevronDown size={10} className="shrink-0" />
        ) : (
          <ChevronRight size={10} className="shrink-0" />
        )}
        <span className="truncate text-left">{node.label}</span>
      </button>
      {open && node.children && (
        <div className="ml-3 border-l border-border/40 pl-1 mt-0.5">
          {node.children.map((child) => (
            <TreeNodeItem key={child.label} node={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Stats Section ────────────────────────────────────────────────────────────

const stats = [
  {
    label: "Total Questions",
    value: 450,
    icon: Target,
    color: "text-neon-purple",
  },
  { label: "Topics", value: 12, icon: BookOpen, color: "text-neon-blue" },
  {
    label: "Daily Active Users",
    value: 1247,
    icon: Users,
    color: "text-neon-green",
  },
  {
    label: "Questions Today",
    value: 8342,
    icon: Activity,
    color: "text-neon-amber",
  },
];

// ─── Topic Card Skeleton ─────────────────────────────────────────────────────

function TopicCardSkeleton() {
  return (
    <div className="glass-dark rounded-2xl p-5 border border-border/40 h-52 animate-pulse">
      <div className="h-3 w-24 bg-muted/30 rounded mb-2" />
      <div className="h-5 w-full bg-muted/40 rounded mb-1" />
      <div className="h-4 w-2/3 bg-muted/30 rounded mb-4" />
      <div className="h-3 w-full bg-muted/20 rounded mb-5" />
      <div className="grid grid-cols-3 gap-2">
        <div className="h-10 bg-muted/20 rounded-xl" />
        <div className="h-10 bg-muted/15 rounded-xl" />
        <div className="h-10 bg-muted/15 rounded-xl" />
      </div>
    </div>
  );
}

// ─── Home Page ────────────────────────────────────────────────────────────────

export default function Home() {
  const { profile } = useUserProfile();
  const { topicsData, subjectColors, difficultyColors, isLoaded } =
    useDemoData();

  const studentClass = profile?.studentClass ?? null;

  useSEO({
    title: "Free NCERT Solutions, MCQ Quiz & Notes — Class 1 to 12 CBSE",
    description:
      "NCERT Bhaiya — India's best free NCERT study platform. Get NCERT solutions, chapter notes, MCQ practice tests, flashcards and AI explanations for Class 1 to 12 CBSE. Covers Science, Maths, Social Science, English, Hindi, Physics, Chemistry, Biology and IIT JEE.",
    keywords:
      "NCERT solutions Class 1 to 12, free NCERT notes, CBSE study material, NCERT Bhaiya, class 9 science chapter names, class 9 science MCQ, class 10 maths chapters, class 10 science chapters, class 11 physics notes, class 12 chemistry notes, NCERT MCQ quiz, NCERT flashcards, CBSE board exam preparation 2024, NCERT cheat sheet, NCERT chapter explanation, free CBSE online study, gamified learning CBSE, NCERT class 9 10 11 12",
    canonical: "/",
  });

  // Filter topics by class if possible
  const filteredTopics = studentClass
    ? topicsData.filter(
        (t) =>
          t.className.toLowerCase().includes(studentClass.toLowerCase()) ||
          t.className
            .toLowerCase()
            .includes(studentClass.replace("Class ", "").toLowerCase()),
      )
    : topicsData;

  const displayedTopics =
    filteredTopics.length > 0 ? filteredTopics : topicsData;

  return (
    <Layout>
      <div className="max-w-[1600px] mx-auto px-4 lg:px-6 py-6">
        <div className="flex gap-6">
          {/* Left Sidebar: Topic Tree */}
          <aside className="hidden lg:flex flex-col w-64 shrink-0">
            <div className="glass-dark rounded-2xl p-4 sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto scrollbar-thin">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen size={14} className="text-neon-purple" />
                <h2 className="text-xs font-display font-semibold uppercase tracking-wider text-muted-foreground">
                  Topic Browser
                </h2>
              </div>
              {topicTree.map((node) => (
                <TreeNodeItem key={node.label} node={node} depth={0} />
              ))}

              {/* NCERT Browse link */}
              <div className="mt-4 pt-4 border-t border-border/30">
                <Link
                  to="/ncert"
                  data-ocid="nav.ncert_link"
                  className="flex items-center gap-2 py-2 px-3 rounded-xl bg-neon-purple/10 hover:bg-neon-purple/20 border border-neon-purple/20 hover:border-neon-purple/40 transition-all text-xs font-medium text-neon-purple"
                >
                  <Library size={12} />
                  <span>Browse All NCERT</span>
                  <ChevronRight size={10} className="ml-auto" />
                </Link>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            {/* Personalized Hero — no animation so LCP element renders immediately */}
            <div className="mb-8">
              {profile ? (
                <div className="flex items-start gap-3 mb-4 p-4 glass-dark rounded-2xl border border-neon-green/20">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neon-purple to-neon-blue flex items-center justify-center text-white font-bold shrink-0">
                    {profile.displayName.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <Sparkles size={12} className="text-neon-amber" />
                      <span className="text-xs text-muted-foreground">
                        Good to see you!
                      </span>
                    </div>
                    <h1 className="font-display font-bold text-lg leading-tight">
                      Welcome back,{" "}
                      <span className="text-gradient-purple">
                        {profile.displayName}
                      </span>
                      !{" "}
                      <span className="text-foreground/70 text-base">
                        {profile.studentClass} — Ready to learn today?
                      </span>
                    </h1>
                  </div>
                </div>
              ) : (
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-mono-custom text-neon-purple/70 uppercase tracking-widest">
                      K-12 + Competitive Exams
                    </span>
                  </div>
                  <h1 className="font-display text-3xl lg:text-4xl font-bold leading-tight mb-3">
                    <span className="text-gradient-purple">Infinite Drill</span>
                    <br />
                    <span className="text-foreground">& Flashcard Engine</span>
                  </h1>
                </div>
              )}

              <p className="text-muted-foreground text-sm max-w-xl leading-relaxed">
                AI-powered quiz engine with spaced repetition. Master any topic
                through gamified practice — earn XP, climb the leaderboard, and
                track your mastery.
              </p>
            </div>

            {/* NCERT Browse CTA */}
            <div className="mb-4 p-5 glass-dark rounded-2xl border border-neon-blue/20 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center shrink-0">
                    <GraduationCap size={20} className="text-white" />
                  </div>
                  <div>
                    <h2 className="font-display font-bold text-base mb-1">
                      Explore Full NCERT Content
                    </h2>
                    <p className="text-xs text-muted-foreground">
                      Browse all chapters with detailed explanations, key
                      concepts, and animated concept videos — Class 1 to 12
                    </p>
                  </div>
                </div>
                <Link to="/ncert" data-ocid="home.ncert_link">
                  <Button
                    size="sm"
                    className="shrink-0 bg-gradient-to-r from-neon-blue to-neon-purple text-white hover:opacity-90 gap-1.5 rounded-lg"
                  >
                    <Library size={14} />
                    Browse NCERT
                  </Button>
                </Link>
              </div>
            </div>

            {/* Blog CTA */}
            <div className="mb-4 p-5 glass-dark rounded-2xl border border-neon-green/20 bg-gradient-to-r from-neon-green/10 to-neon-blue/10">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neon-green to-neon-blue flex items-center justify-center shrink-0">
                    <BookText size={20} className="text-white" />
                  </div>
                  <div>
                    <h2 className="font-display font-bold text-base mb-1">
                      Free NCERT Study Blog
                    </h2>
                    <p className="text-xs text-muted-foreground">
                      Chapter notes, comparison tables, exam tips — Class 6 to
                      12. Searchable and free.
                    </p>
                  </div>
                </div>
                <Link to="/blog" data-ocid="home.blog_link">
                  <Button
                    size="sm"
                    className="shrink-0 bg-gradient-to-r from-neon-green to-neon-blue text-white hover:opacity-90 gap-1.5 rounded-lg"
                  >
                    <BookText size={14} />
                    Read Blog
                  </Button>
                </Link>
              </div>
            </div>

            {/* IIT JEE CTA */}
            <div className="mb-8 p-5 glass-dark rounded-2xl border border-neon-amber/20 bg-gradient-to-r from-neon-amber/10 to-neon-purple/10">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neon-amber to-neon-purple flex items-center justify-center shrink-0">
                    <FlaskConical size={20} className="text-white" />
                  </div>
                  <div>
                    <h2 className="font-display font-bold text-base mb-1">
                      IIT JEE Exam Preparation
                    </h2>
                    <p className="text-xs text-muted-foreground">
                      Full JEE Main + Advanced syllabus — Physics, Chemistry,
                      Maths with key formulas and concept videos
                    </p>
                  </div>
                </div>
                <Link to="/iit" data-ocid="home.iit_link">
                  <Button
                    size="sm"
                    className="shrink-0 bg-gradient-to-r from-neon-amber to-neon-purple text-white hover:opacity-90 gap-1.5 rounded-lg"
                  >
                    <FlaskConical size={14} />
                    IIT JEE Hub
                  </Button>
                </Link>
              </div>
            </div>

            {/* Featured Topics */}
            <section className="mb-10">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-display font-semibold text-lg">
                  {studentClass ? `${studentClass} Topics` : "Featured Topics"}
                </h2>
                {isLoaded && (
                  <span className="text-xs text-muted-foreground font-mono-custom">
                    {displayedTopics.length} topics available
                  </span>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {!isLoaded
                  ? Array.from({ length: 6 }, (_, i) => `sk-${i}`).map((k) => (
                      <TopicCardSkeleton key={k} />
                    ))
                  : displayedTopics.map((topic, index) => (
                      <div
                        key={topic.id}
                        data-ocid={`home.topic_card.${index + 1}`}
                        className={cn(
                          "glass-dark rounded-2xl p-5 border bg-gradient-to-br",
                          subjectColors[topic.subject] ||
                            "from-primary/10 to-secondary/10 border-border",
                          "hover:scale-[1.01] transition-transform duration-200 shadow-card-glow group",
                        )}
                      >
                        {/* Header */}
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-[10px] font-mono-custom text-muted-foreground uppercase tracking-widest">
                                {topic.board} · {topic.className}
                              </span>
                            </div>
                            <h3 className="font-display font-bold text-base leading-tight truncate">
                              {topic.chapter}
                            </h3>
                            <p className="text-xs text-neon-purple mt-0.5 font-medium truncate">
                              {topic.microTopic}
                            </p>
                          </div>
                          <span
                            className={cn(
                              "text-[10px] font-bold px-2 py-0.5 rounded-full ml-2 shrink-0",
                              difficultyColors[topic.difficulty],
                            )}
                          >
                            {topic.difficulty}
                          </span>
                        </div>

                        {/* Description */}
                        <p className="text-xs text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                          {topic.description}
                        </p>

                        {/* Meta */}
                        <div className="flex items-center gap-3 mb-4 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Target size={10} />
                            {topic.questionCount} questions
                          </span>
                          <span className="flex items-center gap-1">
                            <BookOpen size={10} />
                            {topic.flashcards.length} flashcards
                          </span>
                        </div>

                        {/* Mode buttons */}
                        <div className="grid grid-cols-3 gap-2">
                          <Link
                            to="/quiz/$topicId"
                            params={{ topicId: topic.id }}
                            data-ocid={`home.quiz_button.${index + 1}`}
                            className="flex flex-col items-center gap-1 py-2 px-1 rounded-xl bg-neon-purple/15 hover:bg-neon-purple/25 border border-neon-purple/30 hover:border-neon-purple/60 text-neon-purple transition-all hover:shadow-neon-purple group/btn"
                          >
                            <Zap size={14} />
                            <span className="text-[10px] font-bold">Quiz</span>
                          </Link>
                          <Link
                            to="/flashcards/$topicId"
                            params={{ topicId: topic.id }}
                            data-ocid={`home.flashcard_button.${index + 1}`}
                            className="flex flex-col items-center gap-1 py-2 px-1 rounded-xl bg-neon-blue/15 hover:bg-neon-blue/25 border border-neon-blue/30 hover:border-neon-blue/60 text-neon-blue transition-all hover:shadow-neon-blue"
                          >
                            <BookOpen size={14} />
                            <span className="text-[10px] font-bold">Cards</span>
                          </Link>
                          <Link
                            to="/cheatsheet/$topicId"
                            params={{ topicId: topic.id }}
                            data-ocid={`home.cheatsheet_button.${index + 1}`}
                            className="flex flex-col items-center gap-1 py-2 px-1 rounded-xl bg-neon-green/15 hover:bg-neon-green/25 border border-neon-green/30 hover:border-neon-green/60 text-neon-green transition-all hover:shadow-neon-green"
                          >
                            <FileText size={14} />
                            <span className="text-[10px] font-bold">Sheet</span>
                          </Link>
                        </div>
                      </div>
                    ))}
              </div>
            </section>

            {/* Database Stats */}
            <section className="mb-6 content-below-fold">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="font-display font-semibold text-lg">
                  Platform Stats
                </h2>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-neon-green/15 border border-neon-green/30">
                  <span className="pulse-dot w-2 h-2 rounded-full bg-neon-green inline-block" />
                  <span className="text-[10px] font-mono-custom text-neon-green font-medium">
                    Auto-populate overnight
                  </span>
                  <CheckCircle size={10} className="text-neon-green" />
                </div>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="glass-dark rounded-xl p-4 border border-border/50"
                  >
                    <stat.icon size={18} className={cn("mb-2", stat.color)} />
                    <div
                      className={cn(
                        "font-display text-2xl font-bold tabular-nums",
                        stat.color,
                      )}
                    >
                      <AnimatedCounter target={stat.value} />
                    </div>
                    <div className="text-xs text-muted-foreground mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </main>

          {/* Right Sidebar: Ad Zone */}
          <aside className="hidden xl:flex flex-col w-[300px] shrink-0">
            <div className="sticky top-20">
              <div className="mb-2">
                <AdZone variant="rectangle" />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </Layout>
  );
}
