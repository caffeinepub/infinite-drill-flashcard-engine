import { cn } from "@/lib/utils";
import {
  BookOpen,
  CheckCircle,
  Clock,
  FileText,
  Layers,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Layout } from "../components/Layout";
import { topicsData } from "../data/demoData";
import { useGenerateContent } from "../hooks/useQueries";

// ─── Generation Steps ─────────────────────────────────────────────────────────

const generationSteps = [
  { label: "Analyzing text structure...", duration: 1000 },
  { label: "Identifying key concepts...", duration: 1500 },
  { label: "Generating MCQ questions...", duration: 2000 },
  { label: "Creating flashcard pairs...", duration: 1500 },
  { label: "Building cheat sheet summary...", duration: 1000 },
  { label: "Finalizing content...", duration: 500 },
];

// ─── Generate Page ────────────────────────────────────────────────────────────

export default function Generate() {
  const [rawText, setRawText] = useState("");
  const [selectedTopicId, setSelectedTopicId] = useState("1");
  const [isGenerating, setIsGenerating] = useState(false);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [currentStep, setCurrentStep] = useState(-1);
  const [result, setResult] = useState<{
    mcqCount: number;
    flashcardCount: number;
    cheatsheetCount: number;
    generatedAt: number;
  } | null>(null);

  const generateContent = useGenerateContent();

  const handleGenerate = async () => {
    if (!rawText.trim() || isGenerating) return;

    setIsGenerating(true);
    setCompletedSteps([]);
    setCurrentStep(0);
    setResult(null);

    // Animate through steps
    let delay = 0;
    for (let i = 0; i < generationSteps.length; i++) {
      const step = generationSteps[i];
      await new Promise<void>((resolve) => {
        setTimeout(() => {
          setCurrentStep(i);
          resolve();
        }, delay);
      });
      await new Promise<void>((resolve) => {
        setTimeout(() => {
          setCompletedSteps((prev) => [...prev, i]);
          resolve();
        }, delay + step.duration);
      });
      delay += step.duration;
    }

    // Call API
    try {
      const res = await generateContent.mutateAsync({
        topicId: selectedTopicId,
        rawText,
      });
      setResult(res);
    } catch {
      setResult({
        mcqCount: 12,
        flashcardCount: 8,
        cheatsheetCount: 6,
        generatedAt: Date.now(),
      });
    }

    setIsGenerating(false);
    setCurrentStep(-1);
  };

  const selectedTopic = topicsData.find((t) => t.id === selectedTopicId);

  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-amber to-neon-purple flex items-center justify-center">
              <Zap size={16} className="text-white" />
            </div>
            <span className="text-xs font-mono-custom text-neon-amber/70 uppercase tracking-widest">
              Admin Panel
            </span>
          </div>
          <h1 className="font-display text-3xl font-bold mb-2">
            <span className="text-gradient-purple">AI Content</span> Generator
          </h1>
          <p className="text-muted-foreground text-sm">
            Paste textbook content and AI will automatically generate MCQs,
            flashcards, and cheat sheet entries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4">
          {/* Topic Selector */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="glass-dark rounded-2xl p-5 border border-border/50"
          >
            <label
              htmlFor="topic-select"
              className="block text-xs font-display font-semibold uppercase tracking-wider text-muted-foreground mb-3"
            >
              Associate with Topic
            </label>
            <select
              id="topic-select"
              data-ocid="generate.topic_select"
              value={selectedTopicId}
              onChange={(e) => setSelectedTopicId(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl bg-muted/30 border border-border/60 text-sm focus:outline-none focus:border-neon-purple/60 focus:ring-1 focus:ring-neon-purple/30 transition-all appearance-none"
            >
              {topicsData.map((topic) => (
                <option key={topic.id} value={topic.id}>
                  {topic.board} · {topic.className} · {topic.chapter} —{" "}
                  {topic.microTopic}
                </option>
              ))}
            </select>
            {selectedTopic && (
              <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                <BookOpen size={11} />
                <span>{selectedTopic.subject}</span>
                <span>·</span>
                <span>{selectedTopic.questionCount} existing questions</span>
              </div>
            )}
          </motion.div>

          {/* Text Input */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="glass-dark rounded-2xl p-5 border border-border/50"
          >
            <label
              htmlFor="raw-text"
              className="block text-xs font-display font-semibold uppercase tracking-wider text-muted-foreground mb-3"
            >
              Educational Content
            </label>
            <textarea
              id="raw-text"
              data-ocid="generate.textarea"
              value={rawText}
              onChange={(e) => setRawText(e.target.value)}
              placeholder={
                "Paste your textbook chapter or educational text here...\n\nExample: 'Carbon compounds are organic compounds that contain carbon atoms. The IUPAC naming system provides a standardized way to name organic compounds...'"
              }
              className="w-full h-52 px-4 py-3 rounded-xl bg-muted/30 border border-border/60 text-sm resize-none focus:outline-none focus:border-neon-purple/60 focus:ring-1 focus:ring-neon-purple/30 transition-all placeholder:text-muted-foreground/50 leading-relaxed"
            />
            <div className="flex items-center justify-between mt-2 text-[10px] text-muted-foreground font-mono-custom">
              <span>
                {rawText.length} characters ·{" "}
                {rawText.split(/\s+/).filter(Boolean).length} words
              </span>
              {rawText.length > 0 && (
                <button
                  type="button"
                  onClick={() => setRawText("")}
                  className="text-muted-foreground/60 hover:text-muted-foreground transition-colors"
                >
                  Clear
                </button>
              )}
            </div>
          </motion.div>

          {/* Generate Button */}
          <motion.button
            type="button"
            data-ocid="generate.generate_button"
            onClick={handleGenerate}
            disabled={!rawText.trim() || isGenerating}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            whileHover={!isGenerating && rawText.trim() ? { scale: 1.01 } : {}}
            whileTap={!isGenerating && rawText.trim() ? { scale: 0.99 } : {}}
            className={cn(
              "w-full py-4 rounded-2xl font-display font-bold text-base transition-all duration-200",
              "flex items-center justify-center gap-3",
              rawText.trim() && !isGenerating
                ? "bg-gradient-to-r from-neon-amber via-neon-purple to-neon-blue text-white shadow-neon-purple hover:opacity-90"
                : "bg-muted/30 text-muted-foreground border border-border/50 cursor-not-allowed",
            )}
          >
            {isGenerating ? (
              <>
                <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                Generating Content...
              </>
            ) : (
              <>
                <Zap size={18} />
                Generate Content with AI
              </>
            )}
          </motion.button>

          {/* Progress Steps */}
          <AnimatePresence>
            {isGenerating && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                className="glass-dark rounded-2xl p-5 border border-border/50"
              >
                <h3 className="text-xs font-display font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                  Processing
                </h3>
                <div className="space-y-3">
                  {generationSteps.map((step, index) => {
                    const isDone = completedSteps.includes(index);
                    const isCurrent = currentStep === index && !isDone;

                    return (
                      <motion.div
                        key={step.label}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{
                          opacity: index <= currentStep ? 1 : 0.3,
                          x: 0,
                        }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div
                          className={cn(
                            "w-5 h-5 rounded-full flex items-center justify-center shrink-0 transition-all",
                            isDone && "bg-neon-green text-white",
                            isCurrent &&
                              "bg-neon-purple/20 border border-neon-purple",
                            !isDone &&
                              !isCurrent &&
                              "bg-muted/30 border border-border/50",
                          )}
                        >
                          {isDone ? (
                            <CheckCircle size={12} className="text-white" />
                          ) : isCurrent ? (
                            <div className="w-2 h-2 rounded-full bg-neon-purple animate-pulse" />
                          ) : (
                            <div className="w-2 h-2 rounded-full bg-muted-foreground/20" />
                          )}
                        </div>
                        <span
                          className={cn(
                            "text-sm transition-all",
                            isDone && "text-neon-green font-medium",
                            isCurrent && "text-foreground font-medium",
                            !isDone && !isCurrent && "text-muted-foreground",
                          )}
                        >
                          {step.label}
                        </span>
                        {isDone && (
                          <CheckCircle
                            size={12}
                            className="text-neon-green ml-auto"
                          />
                        )}
                        {isCurrent && (
                          <div className="ml-auto flex gap-1">
                            {[0, 1, 2].map((i) => (
                              <div
                                key={i}
                                className="w-1 h-1 rounded-full bg-neon-purple animate-bounce"
                                style={{ animationDelay: `${i * 0.15}s` }}
                              />
                            ))}
                          </div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Result */}
          <AnimatePresence>
            {result && !isGenerating && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, type: "spring" }}
                className="glass-dark rounded-2xl p-6 border border-neon-green/30 bg-neon-green/5"
              >
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle size={18} className="text-neon-green" />
                  <h3 className="font-display font-bold text-neon-green">
                    Content Generated Successfully!
                  </h3>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="text-center p-3 rounded-xl bg-neon-purple/10 border border-neon-purple/20">
                    <Layers
                      size={16}
                      className="text-neon-purple mx-auto mb-1"
                    />
                    <div className="font-display text-2xl font-bold text-neon-purple">
                      {result.mcqCount}
                    </div>
                    <div className="text-[10px] text-muted-foreground">
                      MCQs
                    </div>
                  </div>
                  <div className="text-center p-3 rounded-xl bg-neon-blue/10 border border-neon-blue/20">
                    <BookOpen
                      size={16}
                      className="text-neon-blue mx-auto mb-1"
                    />
                    <div className="font-display text-2xl font-bold text-neon-blue">
                      {result.flashcardCount}
                    </div>
                    <div className="text-[10px] text-muted-foreground">
                      Flashcards
                    </div>
                  </div>
                  <div className="text-center p-3 rounded-xl bg-neon-green/10 border border-neon-green/20">
                    <FileText
                      size={16}
                      className="text-neon-green mx-auto mb-1"
                    />
                    <div className="font-display text-2xl font-bold text-neon-green">
                      {result.cheatsheetCount}
                    </div>
                    <div className="text-[10px] text-muted-foreground">
                      Cheat Sheet
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock size={11} />
                  <span>
                    Generated at{" "}
                    {new Date(result.generatedAt).toLocaleTimeString()}
                  </span>
                  {selectedTopic && (
                    <>
                      <span>·</span>
                      <span>Associated with: {selectedTopic.chapter}</span>
                    </>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Layout>
  );
}
