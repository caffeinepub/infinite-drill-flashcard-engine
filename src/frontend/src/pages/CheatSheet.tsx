import { cn } from "@/lib/utils";
import { Link, useParams } from "@tanstack/react-router";
import {
  ArrowLeft,
  Beaker,
  BookOpen,
  FlaskConical,
  Lightbulb,
  Printer,
} from "lucide-react";
import { motion } from "motion/react";
import { topicsData } from "../data/demoData";
import type { CheatsheetEntry } from "../data/demoData";
import { useSEO } from "../hooks/useSEO";

// ─── Type config ──────────────────────────────────────────────────────────────

const typeConfig = {
  Definition: {
    label: "Definition",
    color: "border-neon-blue/50 bg-neon-blue/5",
    badge: "bg-neon-blue/15 text-neon-blue border border-neon-blue/30",
    icon: BookOpen,
  },
  Formula: {
    label: "Formula",
    color: "border-neon-purple/50 bg-neon-purple/5",
    badge: "bg-neon-purple/15 text-neon-purple border border-neon-purple/30",
    icon: FlaskConical,
  },
  Example: {
    label: "Example",
    color: "border-neon-green/50 bg-neon-green/5",
    badge: "bg-neon-green/15 text-neon-green border border-neon-green/30",
    icon: Beaker,
  },
  Tip: {
    label: "Tip",
    color: "border-neon-amber/50 bg-neon-amber/5",
    badge: "bg-neon-amber/15 text-neon-amber border border-neon-amber/30",
    icon: Lightbulb,
  },
};

// ─── Entry Card ────────────────────────────────────────────────────────────────

function EntryCard({
  entry,
  index,
}: { entry: CheatsheetEntry; index: number }) {
  const config = typeConfig[entry.type];
  const Icon = config.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
      className={cn(
        "print-card rounded-2xl border-2 p-5 transition-all hover:scale-[1.01]",
        config.color,
        "dark:glass-dark dark:border-opacity-70",
      )}
    >
      <div className="flex items-start gap-3">
        <div
          className={cn(
            "p-2 rounded-xl shrink-0",
            config.badge.split(" bg-")[0],
          )}
        >
          <Icon
            size={16}
            className={
              entry.type === "Definition"
                ? "text-neon-blue"
                : entry.type === "Formula"
                  ? "text-neon-purple"
                  : entry.type === "Example"
                    ? "text-neon-green"
                    : "text-neon-amber"
            }
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1.5 flex-wrap">
            <span
              className={cn(
                "text-[10px] font-mono-custom font-bold px-2 py-0.5 rounded-full uppercase tracking-wider",
                config.badge,
              )}
            >
              {config.label}
            </span>
            <h3 className="font-display font-bold text-sm">{entry.title}</h3>
          </div>
          <p className="text-xs text-foreground/80 leading-relaxed whitespace-pre-line">
            {entry.content}
          </p>
        </div>
        <span className="text-xl shrink-0 opacity-60">{entry.icon}</span>
      </div>
    </motion.div>
  );
}

// ─── Cheat Sheet Page ─────────────────────────────────────────────────────────

export default function CheatSheet() {
  const { topicId } = useParams({ from: "/cheatsheet/$topicId" });
  const topic = topicsData.find((t) => t.id === topicId) ?? topicsData[0];

  useSEO({
    title: `${topic.chapter} Cheat Sheet — ${topic.className} ${topic.subject} NCERT`,
    description: `Quick reference cheat sheet for ${topic.chapter} (${topic.className} ${topic.subject} NCERT). Definitions, formulas, key examples and tips for CBSE board exam preparation.`,
    keywords: `${topic.chapter} cheat sheet, ${topic.className} ${topic.subject} notes, NCERT ${topic.chapter}, CBSE ${topic.className} ${topic.subject} cheat sheet, ${topic.chapter} important points`,
    canonical: `/cheatsheet/${topicId}`,
  });

  return (
    <div className="min-h-screen dark:bg-mesh-dark bg-mesh-light print:bg-white">
      {/* Header */}
      <header className="sticky top-0 z-40 glass-dark border-b border-border/50 no-print print:hidden">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all"
            >
              <ArrowLeft size={16} />
            </Link>
            <div>
              <div className="text-[10px] font-mono-custom text-muted-foreground uppercase tracking-widest">
                {topic.board} · {topic.className} · {topic.subject}
              </div>
              <h1 className="font-display font-bold text-sm">
                {topic.chapter} — Cheat Sheet
              </h1>
            </div>
          </div>

          <button
            type="button"
            data-ocid="cheatsheet.print_button"
            onClick={() => window.print()}
            className="flex items-center gap-2 px-3 py-2 rounded-xl bg-muted/30 hover:bg-muted/50 border border-border/50 text-sm font-medium text-muted-foreground hover:text-foreground transition-all"
          >
            <Printer size={14} />
            <span className="hidden sm:inline">Print</span>
          </button>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Print title */}
        <div className="hidden print:block mb-8">
          <h1 className="text-2xl font-bold">{topic.chapter} — Cheat Sheet</h1>
          <p className="text-sm text-gray-600 mt-1">
            {topic.board} · {topic.className} · {topic.subject} ·{" "}
            {topic.microTopic}
          </p>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-3 mb-6 flex-wrap no-print">
          {(Object.keys(typeConfig) as Array<keyof typeof typeConfig>).map(
            (type) => {
              const config = typeConfig[type];
              return (
                <span
                  key={type}
                  className={cn(
                    "text-[10px] font-mono-custom font-bold px-2.5 py-1 rounded-full uppercase tracking-wider",
                    config.badge,
                  )}
                >
                  {config.label}
                </span>
              );
            },
          )}
        </div>

        {/* All entries in a 2-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {topic.cheatsheet.map((entry, index) => (
            <EntryCard key={entry.id} entry={entry} index={index} />
          ))}
        </div>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-border/30 flex items-center justify-between text-xs text-muted-foreground no-print">
          <span>
            {topic.cheatsheet.length} entries · {topic.microTopic}
          </span>
          <div className="flex gap-2">
            <Link
              to="/quiz/$topicId"
              params={{ topicId: topic.id }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neon-purple/15 hover:bg-neon-purple/25 border border-neon-purple/30 text-neon-purple text-[11px] font-semibold transition-all"
            >
              Practice Quiz
            </Link>
            <Link
              to="/flashcards/$topicId"
              params={{ topicId: topic.id }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neon-blue/15 hover:bg-neon-blue/25 border border-neon-blue/30 text-neon-blue text-[11px] font-semibold transition-all"
            >
              Flashcards
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
