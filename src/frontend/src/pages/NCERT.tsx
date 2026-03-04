import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  BookMarked,
  BookOpen,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  GraduationCap,
  Lightbulb,
  PlayCircle,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Layout } from "../components/Layout";
import {
  type NCERTChapter,
  type NCERTClass,
  type NCERTSubject,
  getSubjectsForClass,
  ncertClasses,
} from "../data/ncertContent";
import { getVideoByContext } from "../data/videoLinks";
import { useSEO } from "../hooks/useSEO";

// ─── Class Selector ───────────────────────────────────────────────────────────

function ClassSelector({
  selected,
  onSelect,
}: {
  selected: number | null;
  onSelect: (c: number) => void;
}) {
  const allClasses = Array.from({ length: 12 }, (_, i) => i + 1);
  const hasData = (c: number) => ncertClasses.some((nc) => nc.classNum === c);

  return (
    <div>
      <div className="mb-6">
        <h2 className="font-display text-2xl font-bold mb-1">
          <span className="text-gradient-purple">Browse</span> by Class
        </h2>
        <p className="text-muted-foreground text-sm">
          Select a class to explore NCERT chapters, explanations, and animated
          videos
        </p>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
        {allClasses.map((c) => {
          const available = hasData(c);
          return (
            <motion.button
              key={c}
              type="button"
              whileHover={{ scale: available ? 1.04 : 1 }}
              whileTap={{ scale: available ? 0.96 : 1 }}
              onClick={() => available && onSelect(c)}
              data-ocid={`ncert.class_card.${c}`}
              className={cn(
                "relative rounded-2xl p-4 border text-center transition-all duration-200",
                selected === c
                  ? "border-neon-purple/60 bg-neon-purple/20 shadow-neon-purple"
                  : available
                    ? "glass-dark hover:border-neon-purple/40 hover:bg-muted/20 cursor-pointer"
                    : "glass-dark opacity-40 cursor-not-allowed",
              )}
            >
              <div
                className={cn(
                  "font-display text-xl font-bold mb-1",
                  selected === c ? "text-neon-purple" : "text-foreground",
                )}
              >
                {c}
              </div>
              <div className="text-[10px] text-muted-foreground">Class</div>
              {!available && (
                <div className="absolute inset-0 flex items-center justify-center rounded-2xl">
                  <span className="text-[9px] text-muted-foreground/60 rotate-[-15deg]">
                    Soon
                  </span>
                </div>
              )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

// ─── Subject Selector ─────────────────────────────────────────────────────────

function SubjectSelector({
  classData,
  selected,
  onSelect,
  classNum,
}: {
  classData: NCERTClass;
  selected: string | null;
  onSelect: (s: string) => void;
  classNum: number;
}) {
  const availableSubjects = classData.subjects;
  const allSubjects = getSubjectsForClass(classNum);

  const subjectIcons: Record<string, string> = {
    Science: "🔬",
    Mathematics: "🔢",
    "Social Science": "🗺️",
    English: "📖",
    Hindi: "🔤",
    EVS: "🌿",
    Physics: "⚛️",
    Chemistry: "⚗️",
    Biology: "🧬",
    History: "🏛️",
    Economics: "📊",
  };

  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <button
          type="button"
          onClick={() => onSelect("")}
          className="text-muted-foreground hover:text-foreground text-sm transition-colors"
        >
          All Classes
        </button>
        <ChevronRight size={14} className="text-muted-foreground" />
        <span className="text-sm font-medium">Class {classNum}</span>
      </div>
      <h2 className="font-display text-xl font-bold mb-4">Choose a Subject</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {allSubjects.map((subjectName, index) => {
          const subjectData = availableSubjects.find(
            (s) => s.name === subjectName,
          );
          const available = !!subjectData;
          const isActive = selected === subjectName;

          return (
            <motion.button
              key={subjectName}
              type="button"
              whileHover={{ scale: available ? 1.03 : 1 }}
              whileTap={{ scale: available ? 0.97 : 1 }}
              onClick={() => available && onSelect(subjectName)}
              data-ocid={`ncert.subject_tab.${index + 1}`}
              className={cn(
                "rounded-xl p-4 border text-left transition-all duration-200",
                isActive
                  ? "border-neon-blue/60 bg-neon-blue/15 shadow-neon-blue"
                  : available
                    ? "glass-dark hover:border-neon-blue/30 cursor-pointer"
                    : "glass-dark opacity-40 cursor-not-allowed",
              )}
            >
              <div className="text-2xl mb-2">
                {subjectIcons[subjectName] ?? "📚"}
              </div>
              <div
                className={cn(
                  "text-sm font-semibold",
                  isActive ? "text-neon-blue" : "text-foreground",
                )}
              >
                {subjectName}
              </div>
              {available && subjectData && (
                <div className="text-[10px] text-muted-foreground mt-1">
                  {subjectData.chapters.length} chapter
                  {subjectData.chapters.length !== 1 ? "s" : ""}
                </div>
              )}
              {!available && (
                <div className="text-[10px] text-muted-foreground mt-1">
                  Coming soon
                </div>
              )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

// ─── Chapter Card ─────────────────────────────────────────────────────────────

function ChapterCard({
  chapter,
  index,
}: { chapter: NCERTChapter; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const video = getVideoByContext(chapter.subject, chapter.name);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06 }}
      data-ocid={`ncert.chapter_card.${index + 1}`}
      className="glass-dark rounded-2xl border border-border/40 overflow-hidden"
    >
      {/* Chapter Header */}
      <button
        type="button"
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left p-5 flex items-start gap-4 hover:bg-muted/10 transition-colors group"
      >
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neon-purple/30 to-neon-blue/30 flex items-center justify-center font-display font-bold text-sm text-neon-purple shrink-0">
          {chapter.number}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <Badge
              variant="secondary"
              className="text-[10px] bg-muted/50 text-muted-foreground border-border/50 font-mono-custom"
            >
              Chapter {chapter.number}
            </Badge>
          </div>
          <h3 className="font-display font-bold text-base leading-tight group-hover:text-neon-purple transition-colors">
            {chapter.name}
          </h3>
          <p className="text-xs text-muted-foreground mt-1 line-clamp-1">
            {chapter.explanation[0].substring(0, 100)}...
          </p>
        </div>
        <div className="shrink-0 text-muted-foreground group-hover:text-foreground transition-colors">
          {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>
      </button>

      {/* Expanded Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            data-ocid={`ncert.chapter_detail.${index + 1}`}
            className="border-t border-border/30"
          >
            <div className="p-5 space-y-5">
              {/* Explanation paragraphs */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-widest text-neon-purple/80 flex items-center gap-1.5">
                  <BookOpen size={11} />
                  Chapter Overview
                </h4>
                {chapter.explanation.map((para) => (
                  <p
                    key={para.substring(0, 40)}
                    className="text-sm text-foreground/85 leading-relaxed"
                  >
                    {para}
                  </p>
                ))}
              </div>

              {/* Key Concepts */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-neon-blue/80 flex items-center gap-1.5 mb-3">
                  <Lightbulb size={11} />
                  Key Concepts
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {chapter.keyConcepts.map((concept) => (
                    <div
                      key={concept.title}
                      className="flex items-start gap-2 p-2.5 rounded-lg bg-neon-blue/10 border border-neon-blue/20"
                    >
                      <span className="text-neon-blue font-bold text-xs mt-0.5 shrink-0">
                        →
                      </span>
                      <div>
                        <div className="text-xs font-semibold text-foreground">
                          {concept.title}
                        </div>
                        <div className="text-[11px] text-muted-foreground mt-0.5 leading-snug">
                          {concept.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Important Terms */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-neon-green/80 flex items-center gap-1.5 mb-3">
                  <BookMarked size={11} />
                  Important Terms
                </h4>
                <div className="space-y-2">
                  {chapter.importantTerms.map((term) => (
                    <div key={term.term} className="flex items-start gap-2">
                      <span className="text-neon-green text-xs font-bold shrink-0 mt-0.5">
                        ▸
                      </span>
                      <div className="text-sm">
                        <span className="font-semibold text-foreground">
                          {term.term}:
                        </span>{" "}
                        <span className="text-muted-foreground">
                          {term.definition}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Video Section */}
              {video && (
                <div className="pt-2">
                  {!showVideo ? (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setShowVideo(true)}
                      data-ocid={`ncert.video_button.${index + 1}`}
                      className="w-full border-neon-amber/40 text-neon-amber hover:bg-neon-amber/10 hover:border-neon-amber/60 gap-2"
                    >
                      <PlayCircle size={16} />
                      Watch Animated Concept Video: {video.title}
                    </Button>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.97 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="relative"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-medium text-neon-amber flex items-center gap-1.5">
                          <PlayCircle size={12} />
                          {video.title}
                        </span>
                        <button
                          type="button"
                          onClick={() => setShowVideo(false)}
                          className="p-1 rounded-md hover:bg-muted/50 text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <X size={14} />
                        </button>
                      </div>
                      <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-border/30">
                        <iframe
                          src={video.embedUrl}
                          title={video.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full"
                        />
                      </div>
                    </motion.div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── Chapter List ─────────────────────────────────────────────────────────────

function ChapterList({
  subjectData,
  classNum,
  subjectName,
  onBack,
}: {
  subjectData: NCERTSubject;
  classNum: number;
  subjectName: string;
  onBack: () => void;
}) {
  return (
    <div>
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-4 text-sm">
        <button
          type="button"
          onClick={() => onBack()}
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          All Classes
        </button>
        <ChevronRight size={14} className="text-muted-foreground" />
        <button
          type="button"
          onClick={onBack}
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          Class {classNum}
        </button>
        <ChevronRight size={14} className="text-muted-foreground" />
        <span className="font-medium text-foreground">{subjectName}</span>
      </div>

      <div className="flex items-center gap-3 mb-6">
        <span className="text-3xl">{subjectData.icon}</span>
        <div>
          <h2 className="font-display text-2xl font-bold">{subjectName}</h2>
          <p className="text-muted-foreground text-sm">
            Class {classNum} · {subjectData.chapters.length} chapter
            {subjectData.chapters.length !== 1 ? "s" : ""} available
          </p>
        </div>
      </div>

      <div className="space-y-3">
        {subjectData.chapters.map((chapter, i) => (
          <ChapterCard key={chapter.id} chapter={chapter} index={i} />
        ))}
      </div>
    </div>
  );
}

// ─── NCERT Page ───────────────────────────────────────────────────────────────

export default function NCERT() {
  const [selectedClass, setSelectedClass] = useState<number | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);

  // Dynamic SEO based on selected class/subject
  const seoTitle =
    selectedClass && selectedSubject
      ? `Class ${selectedClass} ${selectedSubject} NCERT Notes, Chapter Explanations & Key Concepts`
      : selectedClass
        ? `Class ${selectedClass} NCERT Chapters — Science, Maths, Social Science, English, Hindi`
        : "NCERT Solutions Class 1 to 12 — All Chapters, Subjects & Explanations | NCERT Bhaiya";

  const seoDescription =
    selectedClass && selectedSubject
      ? `Free NCERT Class ${selectedClass} ${selectedSubject} chapter-wise notes, key concepts, important terms, definitions and step-by-step explanations. Best study resource for CBSE Class ${selectedClass} ${selectedSubject} board exam preparation on NCERT Bhaiya.`
      : selectedClass
        ? `Browse all NCERT subjects for Class ${selectedClass} on NCERT Bhaiya — Science, Maths, Social Science, English, Hindi. Chapter-wise explanations, key concepts, important formulas and free MCQ quizzes for CBSE board exam.`
        : "Free NCERT chapter notes, explanations and key concepts for Class 1 to 12 on NCERT Bhaiya. All CBSE subjects covered — Science, Maths, Social Science, English, Hindi, Physics, Chemistry, Biology. Download-free, ad-supported study resource for CBSE students in India.";

  const seoKeywords =
    selectedClass && selectedSubject
      ? `NCERT Class ${selectedClass} ${selectedSubject}, Class ${selectedClass} ${selectedSubject} chapter names, NCERT Class ${selectedClass} ${selectedSubject} notes, CBSE Class ${selectedClass} ${selectedSubject} solutions, Class ${selectedClass} ${selectedSubject} important questions, NCERT ${selectedSubject} Class ${selectedClass} PDF`
      : selectedClass
        ? `NCERT Class ${selectedClass}, Class ${selectedClass} chapter names, NCERT Class ${selectedClass} notes, CBSE Class ${selectedClass} solutions, Class ${selectedClass} science chapters, Class ${selectedClass} maths chapters, Class ${selectedClass} important questions`
        : "NCERT solutions class 1 to 12, NCERT chapter notes, CBSE NCERT notes, free NCERT explanations, NCERT class 9 10 11 12, NCERT Science Maths Social Science, CBSE board exam preparation, NCERT Bhaiya";

  useSEO({
    title: seoTitle,
    description: seoDescription,
    keywords: seoKeywords,
  });

  const classData = selectedClass
    ? ncertClasses.find((c) => c.classNum === selectedClass)
    : null;
  const subjectData =
    classData && selectedSubject
      ? classData.subjects.find((s) => s.name === selectedSubject)
      : null;

  const handleClassSelect = (c: number) => {
    setSelectedClass(c);
    setSelectedSubject(null);
  };

  const handleSubjectSelect = (s: string) => {
    if (!s) {
      setSelectedClass(null);
      setSelectedSubject(null);
    } else {
      setSelectedSubject(s);
    }
  };

  const handleBackToSubjects = () => {
    setSelectedSubject(null);
  };

  return (
    <Layout>
      <div className="max-w-[1200px] mx-auto px-4 lg:px-6 py-6">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neon-purple to-neon-blue flex items-center justify-center">
            <GraduationCap size={20} className="text-white" />
          </div>
          <div>
            <h1 className="font-display text-2xl font-bold">
              <span className="text-gradient-purple">NCERT</span> Content
              Browser
            </h1>
            <p className="text-xs text-muted-foreground">
              Class 1–12 · All subjects · Chapter explanations + animated videos
            </p>
          </div>
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {!selectedClass && (
            <motion.div
              key="class-selector"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
            >
              <ClassSelector
                selected={selectedClass}
                onSelect={handleClassSelect}
              />
            </motion.div>
          )}

          {selectedClass && !selectedSubject && classData && (
            <motion.div
              key="subject-selector"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <SubjectSelector
                classData={classData}
                selected={selectedSubject}
                onSelect={handleSubjectSelect}
                classNum={selectedClass}
              />
            </motion.div>
          )}

          {selectedClass && selectedSubject && subjectData && (
            <motion.div
              key="chapter-list"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <ChapterList
                subjectData={subjectData}
                classNum={selectedClass}
                subjectName={selectedSubject}
                onBack={handleBackToSubjects}
              />
            </motion.div>
          )}

          {selectedClass && selectedSubject && !subjectData && (
            <motion.div
              key="no-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
              data-ocid="ncert.empty_state"
            >
              <div className="text-4xl mb-4">📚</div>
              <h3 className="font-display text-lg font-bold mb-2">
                Content Coming Soon
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                We're adding chapters for {selectedSubject} Class{" "}
                {selectedClass} soon!
              </p>
              <Button
                variant="outline"
                onClick={handleBackToSubjects}
                className="border-neon-purple/40 text-neon-purple hover:bg-neon-purple/10"
              >
                Choose Another Subject
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Layout>
  );
}
