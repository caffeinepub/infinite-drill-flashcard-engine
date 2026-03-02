import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bot, GraduationCap, Send, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { fallbackResponse, findAIResponse } from "../data/aiTeacherResponses";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

function renderMarkdown(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\n/g, "<br/>")
    .replace(/• /g, "• ");
}

export function AITeacher() {
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "👋 Hi! I'm your **AI Teacher**! Ask me anything from your NCERT syllabus.\n\nTry asking about: *photosynthesis*, *Newton's laws*, *quadratic equations*, *French Revolution*, *cell structure*, or any other NCERT topic!",
      timestamp: new Date(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // biome-ignore lint/correctness/useExhaustiveDependencies: scrollAreaRef is stable
  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector(
        "[data-radix-scroll-area-viewport]",
      );
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const handleAsk = async () => {
    if (!question.trim() || isTyping) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: question.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setQuestion("");
    setIsTyping(true);

    // Simulate typing delay
    await new Promise((r) => setTimeout(r, 1200));

    const response = findAIResponse(question.trim());
    const answer = response ? response.answer : fallbackResponse;

    const assistantMessage: Message = {
      id: (Date.now() + 1).toString(),
      role: "assistant",
      content: answer,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, assistantMessage]);
    setIsTyping(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      void handleAsk();
    }
  };

  return (
    <>
      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            data-ocid="ai_teacher.panel"
            className="fixed bottom-20 right-4 z-50 w-80 md:w-96 rounded-2xl overflow-hidden border border-border/50"
            style={{
              background: "oklch(0.13 0.03 272 / 0.95)",
              backdropFilter: "blur(20px)",
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 border-b border-border/30">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-neon-purple to-neon-blue flex items-center justify-center">
                  <Bot size={16} className="text-white" />
                </div>
                <div>
                  <div className="text-sm font-display font-bold text-foreground">
                    AI Teacher
                  </div>
                  <div className="text-[10px] text-neon-green flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-neon-green inline-block pulse-dot" />
                    Online — Ask anything NCERT
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                data-ocid="ai_teacher.close_button"
                className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all"
                aria-label="Close AI Teacher"
              >
                <X size={16} />
              </button>
            </div>

            {/* Messages */}
            <ScrollArea ref={scrollAreaRef} className="h-80">
              <div className="p-4 space-y-3">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex gap-2 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
                  >
                    {/* Avatar */}
                    {msg.role === "assistant" && (
                      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-neon-purple to-neon-blue flex items-center justify-center shrink-0 mt-0.5">
                        <Bot size={13} className="text-white" />
                      </div>
                    )}

                    {/* Bubble */}
                    <div
                      className={`max-w-[85%] rounded-2xl px-3 py-2 text-xs leading-relaxed ${
                        msg.role === "user"
                          ? "bg-neon-purple/20 border border-neon-purple/30 text-foreground rounded-tr-sm"
                          : "bg-card/80 border border-border/30 text-foreground rounded-tl-sm"
                      }`}
                      // biome-ignore lint/security/noDangerouslySetInnerHtml: sanitized content
                      dangerouslySetInnerHTML={{
                        __html: renderMarkdown(msg.content),
                      }}
                    />
                  </div>
                ))}

                {/* Typing indicator */}
                {isTyping && (
                  <div className="flex gap-2 items-start">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-neon-purple to-neon-blue flex items-center justify-center shrink-0">
                      <Bot size={13} className="text-white" />
                    </div>
                    <div className="bg-card/80 border border-border/30 rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-1">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          className="w-1.5 h-1.5 rounded-full bg-muted-foreground"
                          animate={{ y: [0, -5, 0] }}
                          transition={{
                            duration: 0.6,
                            delay: i * 0.15,
                            repeat: Number.POSITIVE_INFINITY,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>

            {/* Input area */}
            <div className="p-3 border-t border-border/30 flex gap-2">
              <Input
                ref={inputRef}
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about any NCERT topic..."
                data-ocid="ai_teacher.input"
                className="h-9 text-xs bg-background/50 border-border/40 focus:border-neon-purple/40"
                disabled={isTyping}
              />
              <Button
                size="sm"
                onClick={() => void handleAsk()}
                disabled={!question.trim() || isTyping}
                data-ocid="ai_teacher.submit_button"
                className="h-9 w-9 p-0 bg-gradient-to-r from-neon-purple to-neon-blue text-white hover:opacity-90 shrink-0"
              >
                <Send size={14} />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating trigger button */}
      <motion.button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        data-ocid="ai_teacher.open_button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-4 right-4 z-50 w-14 h-14 rounded-2xl bg-gradient-to-br from-neon-purple to-neon-blue flex items-center justify-center shadow-neon-purple glow-purple text-white"
        aria-label="Open AI Teacher"
        title="Ask AI Teacher"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X size={22} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <GraduationCap size={24} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulse ring */}
        {!isOpen && (
          <motion.div
            className="absolute inset-0 rounded-2xl border-2 border-neon-purple/50"
            animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
        )}
      </motion.button>
    </>
  );
}
