import {
  BookOpen,
  Brain,
  FileText,
  Flame,
  Globe,
  Trophy,
  Youtube,
  Zap,
} from "lucide-react";
import { useEffect } from "react";
import { Layout } from "../components/Layout";
import { useSEO } from "../hooks/useSEO";

const features = [
  {
    icon: BookOpen,
    title: "Free NCERT Content",
    desc: "Complete chapter summaries, notes, and explanations for Classes 1–12 across all subjects.",
  },
  {
    icon: Brain,
    title: "MCQ Quizzes",
    desc: "Practice with timed multiple-choice quizzes for every chapter and earn XP as you learn.",
  },
  {
    icon: Zap,
    title: "Flashcards",
    desc: "3D flip cards covering key terms, definitions, and formulas — perfect for rapid revision.",
  },
  {
    icon: Flame,
    title: "IIT JEE Prep",
    desc: "Dedicated IIT JEE hub with Physics, Chemistry, and Mathematics — completely free.",
  },
  {
    icon: FileText,
    title: "Blog Resources",
    desc: "27+ SEO-optimised articles targeting NCERT and CBSE keywords for deeper understanding.",
  },
  {
    icon: Trophy,
    title: "Leaderboard",
    desc: "Compete with students nationwide, track your XP streak, and climb the weekly rankings.",
  },
];

export default function About() {
  useSEO({
    title: "About NCERT Bhaiya | Free NCERT Study Platform",
    description:
      "Learn about NCERT Bhaiya — a student-built platform simplifying NCERT curriculum for Classes 1–12. Free quizzes, flashcards, IIT JEE prep, and blog resources for every student in India.",
    keywords:
      "about NCERT Bhaiya, free NCERT study platform, CBSE learning platform India, student education platform",
    canonical: "/about",
  });

  // Inject JSON-LD schema via DOM (avoids dangerouslySetInnerHTML lint rule)
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      name: "NCERT Bhaiya",
      url: "https://ncertbhaiya-8d1.caffeine.xyz",
      description:
        "A free educational platform simplifying NCERT curriculum for Classes 1–12 with quizzes, flashcards, IIT JEE prep, and blog resources.",
      foundingDate: "2024",
      contactPoint: {
        "@type": "ContactPoint",
        email: "ncertbhaiya2504@gmail.com",
        contactType: "customer support",
      },
    });
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <Layout>
      <div className="min-h-screen bg-mesh-dark">
        {/* Hero */}
        <section className="relative py-20 px-6 text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-neon-purple/10 to-transparent pointer-events-none" />
          <div className="relative max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neon-purple/30 bg-neon-purple/10 text-neon-purple text-xs font-medium mb-6">
              <Globe className="w-3 h-3" />
              Our Story
            </div>
            <h1
              className="text-4xl md:text-5xl font-bold mb-6 text-gradient-purple"
              data-ocid="about.page"
            >
              About NCERT Bhaiya
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Born from a student's determination to bridge the education gap
              between rural and urban India, NCERT Bhaiya is a free platform
              designed to make quality academic content accessible to every
              learner.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="glass-dark border border-border/30 rounded-2xl p-8">
              <div className="w-10 h-10 rounded-xl bg-neon-purple/20 flex items-center justify-center mb-4">
                <Flame className="w-5 h-5 text-neon-purple" />
              </div>
              <h2 className="text-xl font-bold mb-3">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To simplify the NCERT curriculum and deliver free, high-quality
                study resources — including notes, quizzes, flashcards, and
                cheat sheets — so that every student, regardless of their
                location or economic background, has the tools to excel
                academically.
              </p>
            </div>
            <div className="glass-dark border border-border/30 rounded-2xl p-8">
              <div className="w-10 h-10 rounded-xl bg-neon-blue/20 flex items-center justify-center mb-4">
                <Globe className="w-5 h-5 text-neon-blue" />
              </div>
              <h2 className="text-xl font-bold mb-3">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                A future where no student in India has to pay for NCERT
                solutions or CBSE preparation materials. We envision NCERT
                Bhaiya as the go-to companion for 10 million+ students from
                Class 1 through IIT JEE — truly free, truly comprehensive.
              </p>
            </div>
          </div>
        </section>

        {/* Founder Story */}
        <section className="py-16 px-6 bg-gradient-to-r from-neon-purple/5 to-transparent">
          <div className="max-w-3xl mx-auto">
            <div className="glass-dark border border-border/30 rounded-2xl p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon-purple to-neon-blue flex items-center justify-center text-white font-bold text-lg">
                  A
                </div>
                <div>
                  <p className="font-semibold">Abhinav</p>
                  <p className="text-sm text-muted-foreground">
                    Founder, NCERT Bhaiya
                  </p>
                </div>
              </div>
              <blockquote className="text-lg text-muted-foreground leading-relaxed italic border-l-2 border-neon-purple/50 pl-6">
                "I built NCERT Bhaiya because I saw students around me — in both
                cities and villages — struggling to access the same quality of
                study material. Coaching classes are expensive. Good textbook
                explanations are locked behind paywalls. I wanted to change
                that. Every student deserves access to the same resources, no
                matter where they come from."
              </blockquote>
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-3">What We Offer</h2>
              <p className="text-muted-foreground">
                Everything a student needs — completely free, all in one place.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="glass-dark border border-border/30 rounded-xl p-6 hover:border-neon-purple/40 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-neon-purple/15 flex items-center justify-center mb-4">
                    <f.icon className="w-5 h-5 text-neon-purple" />
                  </div>
                  <h3 className="font-semibold mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="glass-dark border border-border/30 rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "12+", label: "Classes Covered" },
                { value: "27+", label: "Blog Articles" },
                { value: "Free", label: "Always & Forever" },
                { value: "India", label: "Students Served" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-3xl font-bold text-gradient-purple mb-1">
                    {s.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Links */}
        <section className="py-10 px-6 text-center">
          <div className="max-w-sm mx-auto">
            <p className="text-muted-foreground mb-4">
              Follow us for updates and tips:
            </p>
            <a
              href="https://www.youtube.com/@Ncertbhaiya"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 hover:bg-red-500/20 transition-colors text-sm font-medium"
            >
              <Youtube className="w-4 h-4" />
              @Ncertbhaiya on YouTube
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
}
