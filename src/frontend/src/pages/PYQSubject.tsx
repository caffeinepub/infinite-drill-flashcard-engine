import { cn } from "@/lib/utils";
import { Link, useParams } from "@tanstack/react-router";
import { ArrowLeft, BookOpen, ChevronDown, ChevronUp } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Layout } from "../components/Layout";
import type { PYQQuestion, PYQSubjectData } from "../data/pyqData";
import { useSEO } from "../hooks/useSEO";

// ─── Dynamic data loader ──────────────────────────────────────────────────────

type PYQModule = typeof import("../data/pyqData");

function usePYQSubjectData(slug: string) {
  const [mod, setMod] = useState<PYQModule | null>(null);
  useEffect(() => {
    import("../data/pyqData").then(setMod);
  }, []);
  return {
    subject: mod?.getPYQBySlug(slug) ?? null,
    isLoaded: mod !== null,
  };
}

// ─── Color helpers ────────────────────────────────────────────────────────────

const subjectColorMap: Record<
  string,
  { bg: string; text: string; border: string }
> = {
  "neon-green": {
    bg: "bg-neon-green/10",
    text: "text-neon-green",
    border: "border-neon-green/30",
  },
  "neon-blue": {
    bg: "bg-neon-blue/10",
    text: "text-neon-blue",
    border: "border-neon-blue/30",
  },
  "neon-amber": {
    bg: "bg-neon-amber/10",
    text: "text-neon-amber",
    border: "border-neon-amber/30",
  },
  "neon-purple": {
    bg: "bg-neon-purple/10",
    text: "text-neon-purple",
    border: "border-neon-purple/30",
  },
};

const marksColors: Record<string, string> = {
  "1mark": "bg-muted/50 text-muted-foreground border-border/40",
  "2mark": "bg-neon-blue/10 text-neon-blue border-neon-blue/30",
  "3mark": "bg-neon-amber/10 text-neon-amber border-neon-amber/30",
  "5mark": "bg-neon-green/10 text-neon-green border-neon-green/30",
};

// ─── JSON-LD FAQ schema ───────────────────────────────────────────────────────

function SubjectFAQSchema({ subject }: { subject: PYQSubjectData }) {
  const faqs = subject.questions.slice(0, 8).map((q) => ({
    "@type": "Question",
    name: q.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: q.answer,
    },
  }));

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs,
  };

  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD schema
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ─── Question Card ────────────────────────────────────────────────────────────

function QuestionCard({
  question,
  subject,
  index,
}: {
  question: PYQQuestion;
  subject: PYQSubjectData;
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const colors =
    subjectColorMap[subject.color] ?? subjectColorMap["neon-purple"];
  const marksLabel = question.marks === 1 ? "1M" : `${question.marks}M`;

  return (
    <div
      data-ocid={`pyq.question.item.${index + 1}`}
      className={cn(
        "glass-dark rounded-xl border p-4 transition-all duration-200",
        "border-border/50 hover:border-opacity-60",
        open && colors.border,
      )}
    >
      {/* Header row */}
      <div className="flex items-center gap-2 mb-3 flex-wrap">
        <span
          className={cn(
            "text-[10px] font-mono-custom px-2 py-0.5 rounded-full border",
            "bg-muted/30 text-muted-foreground border-border/40",
          )}
        >
          {question.year}
        </span>
        <span
          className={cn(
            "text-[10px] font-bold px-2 py-0.5 rounded-full border",
            marksColors[question.type] ?? marksColors["1mark"],
          )}
        >
          {marksLabel}
        </span>
      </div>

      {/* Question text */}
      <p className="text-sm font-medium leading-relaxed mb-3">
        {question.question}
      </p>

      {/* Toggle answer */}
      <button
        type="button"
        data-ocid={`pyq.answer.toggle.${index + 1}`}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "flex items-center gap-1.5 text-xs font-semibold transition-colors",
          open ? colors.text : "text-muted-foreground hover:text-foreground",
        )}
      >
        {open ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
        {open ? "Hide Answer" : "Show Answer"}
      </button>

      {/* Answer */}
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

// ─── Loading skeleton ─────────────────────────────────────────────────────────

function SubjectSkeleton() {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 gap-4"
      data-ocid="pyq.subject.loading_state"
    >
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div
          key={i}
          className="glass-dark rounded-xl border border-border/40 p-4 h-28 animate-pulse"
        >
          <div className="flex gap-2 mb-3">
            <div className="h-3 w-12 bg-muted/40 rounded-full" />
            <div className="h-3 w-8 bg-muted/30 rounded-full" />
          </div>
          <div className="h-4 w-full bg-muted/30 rounded mb-2" />
          <div className="h-3 w-3/4 bg-muted/20 rounded" />
        </div>
      ))}
    </div>
  );
}

// ─── PYQSubject Page ──────────────────────────────────────────────────────────

export default function PYQSubject() {
  const { subject: slug } = useParams({ strict: false }) as { subject: string };
  const { subject, isLoaded } = usePYQSubjectData(slug);
  const [yearFilter, setYearFilter] = useState<"All" | number>("All");
  const [marksFilter, setMarksFilter] = useState<"All" | string>("All");

  const colors = subject
    ? (subjectColorMap[subject.color] ?? subjectColorMap["neon-purple"])
    : subjectColorMap["neon-purple"];

  useSEO({
    title: subject?.metaTitle ?? "Class 10 CBSE PYQ — Previous Year Questions",
    description:
      subject?.metaDescription ??
      "Free CBSE Class 10 previous year questions with answers.",
    keywords: subject?.keywords.join(", ") ?? "class 10 CBSE PYQ",
    canonical: `/pyq/${slug}`,
  });

  const years = useMemo(() => {
    if (!subject) return [];
    return [...new Set(subject.questions.map((q) => q.year))].sort(
      (a, b) => b - a,
    );
  }, [subject]);

  const marksOptions = ["All", "1mark", "2mark", "3mark", "5mark"];
  const marksLabels: Record<string, string> = {
    All: "All Marks",
    "1mark": "1 Mark",
    "2mark": "2 Marks",
    "3mark": "3 Marks",
    "5mark": "5 Marks",
  };

  const filteredQuestions = useMemo(() => {
    if (!subject) return [];
    return subject.questions.filter((q) => {
      const yearOk = yearFilter === "All" || q.year === yearFilter;
      const marksOk = marksFilter === "All" || q.type === marksFilter;
      return yearOk && marksOk;
    });
  }, [subject, yearFilter, marksFilter]);

  return (
    <Layout>
      {subject && <SubjectFAQSchema subject={subject} />}
      <div
        className="max-w-[900px] mx-auto px-4 py-8 lg:py-12"
        data-ocid="pyq.subject.page"
      >
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-muted-foreground mb-6">
          <Link to="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link to="/pyq" className="hover:text-foreground transition-colors">
            PYQ
          </Link>
          <span>/</span>
          <span className={cn("font-medium", colors.text)}>
            {subject?.label ?? slug}
          </span>
        </nav>

        {/* Back link */}
        <Link
          to="/pyq"
          className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft size={13} />
          Back to all subjects
        </Link>

        {/* Header */}
        {isLoaded && subject && (
          <div className="mb-8">
            <span
              className={cn(
                "text-[10px] font-bold px-2.5 py-1 rounded-full border mb-3 inline-block",
                colors.bg,
                colors.text,
                colors.border,
              )}
            >
              Class 10 CBSE
            </span>
            <h1
              className={cn(
                "font-display text-2xl lg:text-3xl font-bold mb-3",
                colors.text,
              )}
            >
              {subject.h1}
            </h1>
            <p className="text-sm text-muted-foreground">
              {subject.questions.length} questions across {years.join(", ")}{" "}
              board exams. Click any question to reveal the detailed answer.
            </p>
          </div>
        )}

        {/* Filters */}
        {isLoaded && subject && (
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            {/* Year filter */}
            <div className="flex gap-1.5 flex-wrap">
              <button
                type="button"
                data-ocid="pyq.year_tab"
                onClick={() => setYearFilter("All")}
                className={cn(
                  "px-3 py-1.5 rounded-lg text-xs font-medium border transition-all",
                  yearFilter === "All"
                    ? cn(
                        "border-opacity-60",
                        colors.bg,
                        colors.text,
                        colors.border,
                      )
                    : "bg-muted/30 border-border/40 text-muted-foreground hover:text-foreground hover:bg-muted/50",
                )}
              >
                All Years
              </button>
              {years.map((y) => (
                <button
                  key={y}
                  type="button"
                  data-ocid="pyq.year_tab"
                  onClick={() => setYearFilter(y)}
                  className={cn(
                    "px-3 py-1.5 rounded-lg text-xs font-medium border transition-all",
                    yearFilter === y
                      ? cn(colors.bg, colors.text, colors.border)
                      : "bg-muted/30 border-border/40 text-muted-foreground hover:text-foreground hover:bg-muted/50",
                  )}
                >
                  {y}
                </button>
              ))}
            </div>

            <div className="h-px sm:h-auto sm:w-px bg-border/30 my-1 sm:mx-1" />

            {/* Marks filter */}
            <div className="flex gap-1.5 flex-wrap">
              {marksOptions.map((m) => (
                <button
                  key={m}
                  type="button"
                  data-ocid="pyq.marks_tab"
                  onClick={() => setMarksFilter(m)}
                  className={cn(
                    "px-3 py-1.5 rounded-lg text-xs font-medium border transition-all",
                    marksFilter === m
                      ? cn(colors.bg, colors.text, colors.border)
                      : "bg-muted/30 border-border/40 text-muted-foreground hover:text-foreground hover:bg-muted/50",
                  )}
                >
                  {marksLabels[m]}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Results count */}
        {isLoaded && subject && (
          <p className="text-xs text-muted-foreground mb-5 font-mono-custom">
            Showing {filteredQuestions.length} question
            {filteredQuestions.length !== 1 ? "s" : ""}
          </p>
        )}

        {/* Loading */}
        {!isLoaded && <SubjectSkeleton />}

        {/* Not found */}
        {isLoaded && !subject && (
          <div
            className="text-center py-16 text-muted-foreground"
            data-ocid="pyq.subject.error_state"
          >
            <BookOpen size={32} className="mx-auto mb-3 opacity-40" />
            <p className="text-sm">Subject not found. Please check the URL.</p>
            <Link
              to="/pyq"
              className="text-neon-purple text-xs mt-2 inline-block hover:underline"
            >
              Back to PYQ
            </Link>
          </div>
        )}

        {/* Questions grid */}
        {isLoaded && subject && filteredQuestions.length === 0 && (
          <div
            className="text-center py-12 text-muted-foreground"
            data-ocid="pyq.subject.empty_state"
          >
            <BookOpen size={28} className="mx-auto mb-2 opacity-30" />
            <p className="text-sm">No questions match the selected filters.</p>
          </div>
        )}

        {isLoaded && subject && filteredQuestions.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredQuestions.map((q, i) => (
              <QuestionCard
                key={q.id}
                question={q}
                subject={subject}
                index={i}
              />
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}
