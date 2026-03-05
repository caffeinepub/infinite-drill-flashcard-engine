import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  BookMarked,
  BookOpen,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  FlaskConical,
  FunctionSquare,
  Lightbulb,
  PlayCircle,
  Sigma,
  X,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { Layout } from "../components/Layout";
import type { IITSubject, IITTopic, IITUnit } from "../data/iitData";
import { getVideoByContext } from "../data/videoLinks";
import { useSEO } from "../hooks/useSEO";

// ─── Dynamic data loader ──────────────────────────────────────────────────────

type IITModule = typeof import("../data/iitData");

function useIITData() {
  const [iitModule, setIitModule] = useState<IITModule | null>(null);

  useEffect(() => {
    import("../data/iitData").then(setIitModule);
  }, []);

  return {
    iitSubjects: iitModule?.iitSubjects ?? [],
    isLoaded: iitModule !== null,
  };
}

// ─── Subject Icons ────────────────────────────────────────────────────────────

const subjectIconMap: Record<string, React.ReactNode> = {
  Physics: <Zap size={20} className="text-white" />,
  Chemistry: <FlaskConical size={20} className="text-white" />,
  Mathematics: <FunctionSquare size={20} className="text-white" />,
};

const subjectGradientMap: Record<string, string> = {
  Physics: "from-neon-blue to-neon-purple",
  Chemistry: "from-neon-green to-neon-blue",
  Mathematics: "from-neon-purple to-neon-amber",
};

const subjectBorderMap: Record<string, string> = {
  Physics: "border-neon-blue/40 hover:border-neon-blue/70",
  Chemistry: "border-neon-green/40 hover:border-neon-green/70",
  Mathematics: "border-neon-purple/40 hover:border-neon-purple/70",
};

const subjectBgMap: Record<string, string> = {
  Physics: "bg-neon-blue/10",
  Chemistry: "bg-neon-green/10",
  Mathematics: "bg-neon-purple/10",
};

const subjectTextMap: Record<string, string> = {
  Physics: "text-neon-blue",
  Chemistry: "text-neon-green",
  Mathematics: "text-neon-purple",
};

// ─── Loading Skeleton ─────────────────────────────────────────────────────────

function IITSkeleton() {
  return (
    <div className="space-y-4" data-ocid="iit.loading_state">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {Array.from({ length: 3 }, (_, i) => `sk-${i}`).map((k) => (
          <div key={k} className="h-40 bg-muted/30 rounded-2xl animate-pulse" />
        ))}
      </div>
    </div>
  );
}

// ─── Subject Selector ────────────────────────────────────────────────────────

function SubjectSelector({
  onSelect,
  iitSubjects,
}: {
  onSelect: (s: IITSubject) => void;
  iitSubjects: IITSubject[];
}) {
  return (
    <div>
      <div className="mb-8">
        <h2 className="font-display text-2xl font-bold mb-2">
          <span className="text-gradient-purple">Choose</span> a Subject
        </h2>
        <p className="text-muted-foreground text-sm">
          Select Physics, Chemistry, or Mathematics to browse the full IIT JEE
          syllabus
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {iitSubjects.map((subject, i) => (
          <motion.button
            key={subject.name}
            type="button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelect(subject)}
            data-ocid={`iit.subject_card.${i + 1}`}
            className={cn(
              "glass-dark rounded-2xl p-6 border text-left transition-all duration-200 group",
              subjectBorderMap[subject.name],
            )}
          >
            <div
              className={cn(
                "w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center mb-4",
                subjectGradientMap[subject.name],
              )}
            >
              {subjectIconMap[subject.name]}
            </div>
            <h3
              className={cn(
                "font-display text-xl font-bold mb-1",
                subjectTextMap[subject.name],
              )}
            >
              {subject.name}
            </h3>
            <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
              {subject.description}
            </p>
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>{subject.units.length} units</span>
              <span>
                {subject.units.reduce((acc, u) => acc + u.topics.length, 0)}{" "}
                topics
              </span>
              <ChevronRight
                size={14}
                className={cn(
                  "opacity-50 group-hover:opacity-100 transition-opacity",
                  subjectTextMap[subject.name],
                )}
              />
            </div>
          </motion.button>
        ))}
      </div>

      {/* JEE Info Banner */}
      <div className="mt-8 p-5 glass-dark rounded-2xl border border-neon-amber/30 bg-gradient-to-r from-neon-amber/10 to-neon-purple/10 fade-in">
        <div className="flex items-start gap-3">
          <Sigma size={20} className="text-neon-amber shrink-0 mt-0.5" />
          <div>
            <h3 className="font-display font-bold text-sm mb-1 text-neon-amber">
              About IIT JEE Syllabus
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              IIT JEE (Joint Entrance Examination) is India's most prestigious
              engineering entrance exam. JEE Main is the qualifying exam for JEE
              Advanced, which is required for admission to the 23 IITs. This
              syllabus covers all topics from JEE Main and JEE Advanced for
              Physics, Chemistry, and Mathematics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Unit Browser ────────────────────────────────────────────────────────────

function UnitBrowser({
  subject,
  onSelectUnit,
  onBack,
}: {
  subject: IITSubject;
  onSelectUnit: (u: IITUnit) => void;
  onBack: () => void;
}) {
  return (
    <div>
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-6 text-sm">
        <button
          type="button"
          onClick={onBack}
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          IIT JEE
        </button>
        <ChevronRight size={14} className="text-muted-foreground" />
        <span className={cn("font-medium", subjectTextMap[subject.name])}>
          {subject.name}
        </span>
      </div>

      <div className="flex items-center gap-3 mb-6">
        <div
          className={cn(
            "w-10 h-10 rounded-xl bg-gradient-to-br flex items-center justify-center",
            subjectGradientMap[subject.name],
          )}
        >
          {subjectIconMap[subject.name]}
        </div>
        <div>
          <h2 className="font-display text-2xl font-bold">{subject.name}</h2>
          <p className="text-muted-foreground text-sm">{subject.description}</p>
        </div>
      </div>

      <div className="space-y-3">
        {subject.units.map((unit, i) => (
          <motion.button
            key={unit.id}
            type="button"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            onClick={() => onSelectUnit(unit)}
            data-ocid={`iit.unit_card.${i + 1}`}
            className={cn(
              "w-full glass-dark rounded-xl p-4 border text-left transition-all group",
              subjectBorderMap[subject.name],
            )}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className={cn(
                    "w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold",
                    subjectBgMap[subject.name],
                    subjectTextMap[subject.name],
                  )}
                >
                  {unit.number}
                </div>
                <div>
                  <div className="font-semibold text-sm text-foreground group-hover:text-neon-purple transition-colors">
                    Unit {unit.number}: {unit.name}
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    {unit.topics.length} topic
                    {unit.topics.length !== 1 ? "s" : ""}
                  </div>
                </div>
              </div>
              <ChevronRight
                size={16}
                className="text-muted-foreground opacity-50 group-hover:opacity-100 transition-opacity"
              />
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}

// ─── Topic Card ───────────────────────────────────────────────────────────────

function TopicCard({
  topic,
  index,
  subjectName,
}: {
  topic: IITTopic;
  index: number;
  subjectName: string;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const video = getVideoByContext(
    subjectName,
    `${topic.name} ${topic.videoKeyword}`,
  );

  return (
    <div
      data-ocid={`iit.topic_card.${index + 1}`}
      className="glass-dark rounded-2xl border border-border/40 overflow-hidden fade-in"
    >
      {/* Header */}
      <button
        type="button"
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left p-5 flex items-start gap-4 hover:bg-muted/10 transition-colors group"
      >
        <div
          className={cn(
            "w-9 h-9 rounded-xl flex items-center justify-center font-display font-bold text-sm shrink-0",
            subjectBgMap[subjectName],
            subjectTextMap[subjectName],
          )}
        >
          {index + 1}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-display font-bold text-base leading-tight group-hover:text-neon-purple transition-colors">
            {topic.name}
          </h3>
          <p className="text-xs text-muted-foreground mt-1 line-clamp-1">
            {topic.description.substring(0, 100)}...
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
            data-ocid={`iit.topic_detail.${index + 1}`}
            className="border-t border-border/30"
          >
            <div className="p-5 space-y-5">
              {/* Description */}
              <p className="text-sm text-foreground/85 leading-relaxed">
                {topic.description}
              </p>

              {/* Key Concepts */}
              <div>
                <h4
                  className={cn(
                    "text-xs font-bold uppercase tracking-widest flex items-center gap-1.5 mb-3",
                    subjectTextMap[subjectName],
                  )}
                >
                  <Lightbulb size={11} />
                  Key Concepts
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {topic.keyConcepts.map((concept) => (
                    <div
                      key={concept.title}
                      className={cn(
                        "flex items-start gap-2 p-2.5 rounded-lg border",
                        subjectBgMap[subjectName],
                        `border-${subjectTextMap[subjectName].replace("text-", "")}/20`,
                      )}
                    >
                      <span
                        className={cn(
                          "font-bold text-xs mt-0.5 shrink-0",
                          subjectTextMap[subjectName],
                        )}
                      >
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

              {/* Important Formulas */}
              {topic.importantFormulas.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-neon-amber/80 flex items-center gap-1.5 mb-3">
                    <Sigma size={11} />
                    Important Formulas
                  </h4>
                  <div className="space-y-2">
                    {topic.importantFormulas.map((formula) => (
                      <div
                        key={formula.name}
                        className="flex items-start gap-3 p-3 rounded-lg bg-neon-amber/10 border border-neon-amber/20"
                      >
                        <div className="flex-1">
                          <div className="text-xs font-semibold text-foreground mb-1">
                            {formula.name}
                          </div>
                          <code className="text-sm font-mono text-neon-amber bg-neon-amber/10 px-2 py-0.5 rounded">
                            {formula.formula}
                          </code>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Video Section */}
              {video && (
                <div className="pt-2">
                  {!showVideo ? (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setShowVideo(true)}
                      data-ocid={`iit.video_button.${index + 1}`}
                      className="w-full border-neon-amber/40 text-neon-amber hover:bg-neon-amber/10 hover:border-neon-amber/60 gap-2"
                    >
                      <PlayCircle size={16} />
                      Watch Concept Video: {video.title}
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
                          loading="lazy"
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
    </div>
  );
}

// ─── Topic List ───────────────────────────────────────────────────────────────

function TopicList({
  unit,
  subject,
  onBack,
}: {
  unit: IITUnit;
  subject: IITSubject;
  onBack: () => void;
}) {
  return (
    <div>
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-6 text-sm flex-wrap">
        <button
          type="button"
          onClick={() => onBack()}
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          IIT JEE
        </button>
        <ChevronRight size={14} className="text-muted-foreground" />
        <button
          type="button"
          onClick={onBack}
          className={cn(
            "hover:text-foreground transition-colors",
            subjectTextMap[subject.name],
          )}
        >
          {subject.name}
        </button>
        <ChevronRight size={14} className="text-muted-foreground" />
        <span className="font-medium text-foreground">
          Unit {unit.number}: {unit.name}
        </span>
      </div>

      <div className="flex items-center gap-3 mb-6">
        <div
          className={cn(
            "w-10 h-10 rounded-xl bg-gradient-to-br flex items-center justify-center",
            subjectGradientMap[subject.name],
          )}
        >
          <BookOpen size={18} className="text-white" />
        </div>
        <div>
          <h2 className="font-display text-xl font-bold">
            Unit {unit.number}: {unit.name}
          </h2>
          <p className="text-muted-foreground text-sm">
            {subject.name} · {unit.topics.length} topic
            {unit.topics.length !== 1 ? "s" : ""}
          </p>
        </div>
      </div>

      <div className="space-y-3">
        {unit.topics.map((topic, i) => (
          <TopicCard
            key={topic.id}
            topic={topic}
            index={i}
            subjectName={subject.name}
          />
        ))}
      </div>
    </div>
  );
}

// ─── IIT JEE Page ─────────────────────────────────────────────────────────────

export default function IIT() {
  const [selectedSubject, setSelectedSubject] = useState<IITSubject | null>(
    null,
  );
  const [selectedUnit, setSelectedUnit] = useState<IITUnit | null>(null);

  // Lazy-loaded IIT data
  const { iitSubjects, isLoaded } = useIITData();

  const seoTitle =
    selectedSubject && selectedUnit
      ? `IIT JEE ${selectedSubject.name} — ${selectedUnit.name}: Notes, Formulas & Concept Videos | NCERT Bhaiya`
      : selectedSubject
        ? `IIT JEE ${selectedSubject.name} Syllabus 2025 — Complete Notes, Formulas & Key Concepts | NCERT Bhaiya`
        : "IIT JEE Syllabus 2025 — Free Physics, Chemistry, Maths Notes, Formulas & Concept Videos | NCERT Bhaiya";

  const seoDescription =
    selectedSubject && selectedUnit
      ? `Free IIT JEE ${selectedSubject.name} notes for ${selectedUnit.name}. Covers all key concepts, important formulas, solved examples and concept videos for JEE Main and JEE Advanced 2025. Study smart on NCERT Bhaiya.`
      : selectedSubject
        ? `Free IIT JEE ${selectedSubject.name} complete syllabus on NCERT Bhaiya — chapter-wise notes, important formulas, key concepts and concept videos for JEE Main and JEE Advanced 2025 preparation.`
        : "Free IIT JEE 2025 preparation on NCERT Bhaiya — complete syllabus for Physics, Chemistry and Mathematics. Chapter-wise notes, important formulas, key concepts and concept videos for JEE Main and JEE Advanced. Best free resource for IIT JEE aspirants in India.";

  const seoKeywords =
    selectedSubject && selectedUnit
      ? `IIT JEE ${selectedSubject.name} ${selectedUnit.name}, JEE ${selectedSubject.name} notes, JEE ${selectedSubject.name} formulas, IIT JEE ${selectedUnit.name} key concepts, JEE Main ${selectedSubject.name} syllabus, JEE Advanced ${selectedSubject.name}`
      : selectedSubject
        ? `IIT JEE ${selectedSubject.name} syllabus 2025, JEE ${selectedSubject.name} notes, JEE ${selectedSubject.name} formulas, IIT JEE ${selectedSubject.name} important topics, JEE Main ${selectedSubject.name}, JEE Advanced ${selectedSubject.name}`
        : "IIT JEE syllabus 2025, JEE Main syllabus, JEE Advanced syllabus, IIT JEE Physics notes, IIT JEE Chemistry notes, IIT JEE Maths formulas, JEE preparation free, IIT entrance exam 2025, JEE Physics Chemistry Maths, NCERT Bhaiya IIT JEE";

  useSEO({
    title: seoTitle,
    description: seoDescription,
    keywords: seoKeywords,
    canonical: "/iit",
  });

  const handleSubjectSelect = (s: IITSubject) => {
    setSelectedSubject(s);
    setSelectedUnit(null);
  };

  const handleUnitSelect = (u: IITUnit) => {
    setSelectedUnit(u);
  };

  const handleBackToSubjects = () => {
    setSelectedSubject(null);
    setSelectedUnit(null);
  };

  const handleBackToUnits = () => {
    setSelectedUnit(null);
  };

  return (
    <Layout>
      <div className="max-w-[1200px] mx-auto px-4 lg:px-6 py-6">
        {/* Page Header — CSS fade-in instead of motion for LCP element */}
        <div className="flex items-center gap-3 mb-8 fade-in">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neon-amber to-neon-purple flex items-center justify-center">
            <BookMarked size={20} className="text-white" />
          </div>
          <div>
            <h1 className="font-display text-2xl font-bold">
              <span className="text-gradient-purple">IIT JEE</span> Exam Hub
            </h1>
            <p className="text-xs text-muted-foreground">
              Complete Syllabus · JEE Main + Advanced · Notes, Formulas & Videos
            </p>
          </div>
        </div>

        {/* Stats Bar — only rendered when data is loaded to avoid CLS */}
        {isLoaded && iitSubjects.length > 0 && (
          <div className="grid grid-cols-3 gap-3 mb-8">
            {[
              { label: "Subjects", value: "3", color: "text-neon-purple" },
              {
                label: "Total Units",
                value: `${iitSubjects.reduce((a, s) => a + s.units.length, 0)}`,
                color: "text-neon-blue",
              },
              {
                label: "Topics",
                value: `${iitSubjects.reduce((a, s) => a + s.units.reduce((b, u) => b + u.topics.length, 0), 0)}+`,
                color: "text-neon-green",
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="glass-dark rounded-xl p-3 border border-border/40 text-center"
              >
                <div
                  className={cn("font-display text-xl font-bold", stat.color)}
                >
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Loading skeleton */}
        {!isLoaded && <IITSkeleton />}

        {/* Content — only shown once data is loaded */}
        {isLoaded && (
          <AnimatePresence mode="wait">
            {!selectedSubject && (
              <motion.div
                key="subject-selector"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
              >
                <SubjectSelector
                  onSelect={handleSubjectSelect}
                  iitSubjects={iitSubjects}
                />
              </motion.div>
            )}

            {selectedSubject && !selectedUnit && (
              <motion.div
                key="unit-browser"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <UnitBrowser
                  subject={selectedSubject}
                  onSelectUnit={handleUnitSelect}
                  onBack={handleBackToSubjects}
                />
              </motion.div>
            )}

            {selectedSubject && selectedUnit && (
              <motion.div
                key="topic-list"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <TopicList
                  unit={selectedUnit}
                  subject={selectedSubject}
                  onBack={handleBackToUnits}
                />
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>
    </Layout>
  );
}
