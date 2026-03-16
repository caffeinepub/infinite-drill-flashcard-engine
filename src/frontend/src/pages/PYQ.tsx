import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  ChevronDown,
  ChevronUp,
  FileQuestion,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Layout } from "../components/Layout";
import type { PYQSubjectData } from "../data/pyqData";
import { useSEO } from "../hooks/useSEO";

// ─── Dynamic data loader ──────────────────────────────────────────────────────

type PYQModule = typeof import("../data/pyqData");

function usePYQData() {
  const [mod, setMod] = useState<PYQModule | null>(null);
  useEffect(() => {
    import("../data/pyqData").then(setMod);
  }, []);
  return {
    subjects: mod?.pyqSubjects ?? [],
    isLoaded: mod !== null,
  };
}

// ─── JSON-LD FAQ schema ───────────────────────────────────────────────────────

function PYQFAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Where can I find CBSE Class 10 previous year question papers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can find CBSE Class 10 previous year questions (PYQ) for Science, Maths, Social Science and English free on NCERT Bhaiya. Questions from 2021, 2022 and 2023 board exams are available with detailed answers.",
        },
      },
      {
        "@type": "Question",
        name: "Are CBSE Class 10 PYQs important for board exam preparation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, solving CBSE Class 10 previous year question papers is one of the best ways to prepare for board exams. PYQs help you understand the exam pattern, important topics, and types of questions asked every year.",
        },
      },
      {
        "@type": "Question",
        name: "How many marks are the questions in CBSE Class 10 Science PYQ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "CBSE Class 10 Science paper includes 1-mark, 2-mark, 3-mark and 5-mark questions. The total paper is of 80 marks. Our PYQ section categorises questions by marks so you can practise accordingly.",
        },
      },
      {
        "@type": "Question",
        name: "Which chapters are most important for CBSE Class 10 Maths board exam?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Based on PYQ analysis, the most important chapters for Class 10 Maths are: Real Numbers, Polynomials, Quadratic Equations, Arithmetic Progressions, Triangles, Trigonometry, and Probability. Questions from these chapters appear every year.",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD schema
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ─── Color helpers ────────────────────────────────────────────────────────────

const subjectColorMap: Record<
  string,
  { bg: string; text: string; border: string; dot: string }
> = {
  "neon-green": {
    bg: "bg-neon-green/10",
    text: "text-neon-green",
    border: "border-neon-green/30",
    dot: "bg-neon-green",
  },
  "neon-blue": {
    bg: "bg-neon-blue/10",
    text: "text-neon-blue",
    border: "border-neon-blue/30",
    dot: "bg-neon-blue",
  },
  "neon-amber": {
    bg: "bg-neon-amber/10",
    text: "text-neon-amber",
    border: "border-neon-amber/30",
    dot: "bg-neon-amber",
  },
  "neon-purple": {
    bg: "bg-neon-purple/10",
    text: "text-neon-purple",
    border: "border-neon-purple/30",
    dot: "bg-neon-purple",
  },
};

// ─── Featured Question Card ───────────────────────────────────────────────────

function FeaturedQuestionCard({
  question,
  subject,
}: {
  question: {
    id: string;
    year: number;
    question: string;
    answer: string;
    marks: number;
  };
  subject: PYQSubjectData;
}) {
  const [open, setOpen] = useState(false);
  const colors =
    subjectColorMap[subject.color] ?? subjectColorMap["neon-purple"];

  return (
    <div
      data-ocid="pyq.question.card"
      className={cn(
        "glass-dark rounded-xl border p-4 transition-all duration-200",
        colors.border,
        "hover:shadow-card-glow",
      )}
    >
      <div className="flex items-start gap-3 mb-3">
        <span
          className={cn(
            "shrink-0 text-[10px] font-bold px-2 py-0.5 rounded-full border mt-0.5",
            colors.bg,
            colors.text,
            colors.border,
          )}
        >
          {subject.label}
        </span>
        <span className="text-[10px] font-mono-custom text-muted-foreground border border-border/40 rounded-full px-2 py-0.5">
          {question.year}
        </span>
        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-muted/40 text-muted-foreground border border-border/30 ml-auto">
          {question.marks}M
        </span>
      </div>

      <p className="text-sm font-medium leading-relaxed mb-3">
        {question.question}
      </p>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "flex items-center gap-1.5 text-xs font-medium transition-colors",
          open ? colors.text : "text-muted-foreground hover:text-foreground",
        )}
      >
        {open ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
        {open ? "Hide Answer" : "Show Answer"}
      </button>

      {open && (
        <div
          className={cn(
            "mt-3 pt-3 border-t text-xs text-muted-foreground leading-relaxed",
            "border-border/30",
          )}
        >
          {question.answer}
        </div>
      )}
    </div>
  );
}

// ─── Subject card ─────────────────────────────────────────────────────────────

function SubjectCard({
  subject,
  index,
}: { subject: PYQSubjectData; index: number }) {
  const colors =
    subjectColorMap[subject.color] ?? subjectColorMap["neon-purple"];
  const years = [...new Set(subject.questions.map((q) => q.year))].sort(
    (a, b) => b - a,
  );

  return (
    <Link
      to="/pyq/$subject"
      params={{ subject: subject.slug }}
      data-ocid={`pyq.subject_card.${index + 1}`}
      className={cn(
        "glass-dark rounded-2xl p-5 border transition-all duration-200 flex flex-col gap-4",
        colors.border,
        "hover:shadow-card-glow",
      )}
    >
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-1.5">
          <span
            className={cn(
              "text-[10px] font-bold px-2.5 py-1 rounded-full border w-fit",
              colors.bg,
              colors.text,
              colors.border,
            )}
          >
            Class 10
          </span>
          <h2 className={cn("font-display font-bold text-xl", colors.text)}>
            {subject.label}
          </h2>
        </div>
        <div
          className={cn(
            "w-10 h-10 rounded-xl flex items-center justify-center",
            colors.bg,
          )}
        >
          <FileQuestion size={20} className={colors.text} />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="text-center">
          <div className={cn("text-2xl font-display font-bold", colors.text)}>
            {subject.questions.length}
          </div>
          <div className="text-[10px] text-muted-foreground">Questions</div>
        </div>
        <div className="h-8 w-px bg-border/40" />
        <div className="flex flex-wrap gap-1">
          {years.map((y) => (
            <span
              key={y}
              className="text-[10px] font-mono-custom px-2 py-0.5 rounded bg-muted/40 text-muted-foreground border border-border/30"
            >
              {y}
            </span>
          ))}
        </div>
      </div>

      <div
        className={cn(
          "flex items-center gap-1.5 text-xs font-semibold",
          colors.text,
        )}
      >
        View Questions <ArrowRight size={13} />
      </div>
    </Link>
  );
}

// ─── Loading skeleton ─────────────────────────────────────────────────────────

function PYQSkeleton() {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      data-ocid="pyq.loading_state"
    >
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="glass-dark rounded-2xl p-5 border border-border/40 h-40 animate-pulse"
        >
          <div className="h-3 w-16 bg-muted/40 rounded mb-3" />
          <div className="h-6 w-28 bg-muted/30 rounded mb-4" />
          <div className="h-3 w-20 bg-muted/20 rounded" />
        </div>
      ))}
    </div>
  );
}

// ─── Main PYQ Page ────────────────────────────────────────────────────────────

export default function PYQ() {
  const { subjects, isLoaded } = usePYQData();
  const [yearFilter, setYearFilter] = useState<"All" | 2023 | 2022 | 2021>(
    "All",
  );

  useSEO({
    title: "Class 10 CBSE PYQ 2024 — Previous Year Questions",
    description:
      "Free Class 10 CBSE Previous Year Questions (PYQ) 2021-2023 for Science, Maths, Social Science and English with detailed answers. Best prep for CBSE board exam 2024.",
    keywords:
      "class 10 CBSE PYQ, class 10 previous year questions, CBSE board exam 2024 question paper, class 10 science maths PYQ",
    canonical: "/pyq",
  });

  // Featured questions: 2 from each subject (most recent year, 3-mark)
  const featuredQuestions = subjects.flatMap((sub) => {
    const threeMark = sub.questions
      .filter((q) => q.type === "3mark")
      .sort((a, b) => b.year - a.year)
      .slice(0, 2);
    return threeMark.map((q) => ({ question: q, subject: sub }));
  });

  const filteredFeatured =
    yearFilter === "All"
      ? featuredQuestions
      : featuredQuestions.filter((fq) => fq.question.year === yearFilter);

  const years: ("All" | 2023 | 2022 | 2021)[] = ["All", 2023, 2022, 2021];

  return (
    <Layout>
      <PYQFAQSchema />
      <div
        className="max-w-[1100px] mx-auto px-4 py-8 lg:py-12"
        data-ocid="pyq.page"
      >
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <FileQuestion size={14} className="text-neon-amber" />
            <span className="text-xs font-mono-custom text-neon-amber/70 uppercase tracking-widest">
              CBSE Board Exam
            </span>
          </div>
          <h1 className="font-display text-3xl lg:text-4xl font-bold mb-3">
            <span className="text-gradient-purple">Previous Year</span>{" "}
            <span className="text-foreground">Questions (PYQ)</span>
          </h1>
          <p className="text-muted-foreground text-sm max-w-2xl leading-relaxed">
            Real CBSE Class 10 board exam questions from 2021 to 2023. Click any
            question to reveal the answer. Covers Science, Mathematics, Social
            Science and English.
          </p>
        </div>

        {/* Subject Cards */}
        {!isLoaded && <PYQSkeleton />}
        {isLoaded && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {subjects.map((sub, i) => (
              <SubjectCard key={sub.id} subject={sub} index={i} />
            ))}
          </div>
        )}

        {/* Year filter + Featured questions */}
        {isLoaded && (
          <section>
            <div className="flex items-center justify-between flex-wrap gap-3 mb-5">
              <h2 className="font-display font-bold text-xl">
                Featured Questions
              </h2>
              <div className="flex gap-1.5">
                {years.map((y) => (
                  <button
                    key={String(y)}
                    type="button"
                    data-ocid="pyq.year_tab"
                    onClick={() => setYearFilter(y)}
                    className={cn(
                      "px-3 py-1.5 rounded-lg text-xs font-medium border transition-all",
                      yearFilter === y
                        ? "bg-neon-amber/20 border-neon-amber/40 text-neon-amber"
                        : "bg-muted/30 border-border/40 text-muted-foreground hover:text-foreground hover:bg-muted/50",
                    )}
                  >
                    {y}
                  </button>
                ))}
              </div>
            </div>

            {filteredFeatured.length === 0 ? (
              <div
                className="text-center py-10 text-muted-foreground"
                data-ocid="pyq.empty_state"
              >
                <BookOpen size={28} className="mx-auto mb-2 opacity-30" />
                <p className="text-sm">
                  No featured questions for {yearFilter}.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredFeatured.map((fq) => (
                  <FeaturedQuestionCard
                    key={fq.question.id}
                    question={fq.question}
                    subject={fq.subject}
                  />
                ))}
              </div>
            )}
          </section>
        )}

        {/* CTA to individual subject pages */}
        {isLoaded && (
          <div className="mt-10 p-6 glass-dark rounded-2xl border border-neon-purple/20 text-center">
            <h2 className="font-display font-bold text-lg mb-2">
              Practice Subject-wise PYQs
            </h2>
            <p className="text-sm text-muted-foreground mb-4">
              Filter by marks (1M, 2M, 3M, 5M) and year for focused revision.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {subjects.map((sub) => {
                const colors =
                  subjectColorMap[sub.color] ?? subjectColorMap["neon-purple"];
                return (
                  <Link
                    key={sub.id}
                    to="/pyq/$subject"
                    params={{ subject: sub.slug }}
                    className={cn(
                      "px-4 py-2 rounded-lg text-xs font-semibold border transition-all",
                      colors.bg,
                      colors.text,
                      colors.border,
                      "hover:opacity-80",
                    )}
                  >
                    {sub.label}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
