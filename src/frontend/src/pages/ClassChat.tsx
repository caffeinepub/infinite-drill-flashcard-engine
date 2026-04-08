import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { useActor } from "@caffeineai/core-infrastructure";
import { Link, useParams } from "@tanstack/react-router";
import {
  ArrowLeft,
  ImageIcon,
  MessageCircle,
  Mic,
  Send,
  Trash2,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { createActor } from "../backend";
import { NavBar } from "../components/NavBar";
import { useAuth } from "../context/AuthContext";
import { useAdminRole } from "../hooks/useAdminRole";

export interface ChatMessage {
  id: bigint;
  roomId: string;
  senderUsername: string;
  senderName: string;
  messageType: string;
  content: string;
  timestamp: bigint;
}

interface ChatActor {
  getChatMessages(roomId: string, limit: bigint): Promise<ChatMessage[]>;
  sendChatMessage(
    roomId: string,
    senderUsername: string,
    senderName: string,
    messageType: string,
    content: string,
  ): Promise<bigint>;
  deleteChatMessage(id: bigint, callerUsername: string): Promise<void>;
}

const roomLabels: Record<string, string> = {
  "class-1": "Class 1",
  "class-2": "Class 2",
  "class-3": "Class 3",
  "class-4": "Class 4",
  "class-5": "Class 5",
  "class-6": "Class 6",
  "class-7": "Class 7",
  "class-8": "Class 8",
  "class-9": "Class 9",
  "class-10": "Class 10",
  "class-11": "Class 11",
  "class-12": "Class 12",
  "iit-jee": "IIT JEE",
};

const roomDescriptions: Record<string, string> = {
  "class-1":
    "a space for Class 1 students to discuss numbers, alphabets, shapes, and EVS topics with each other.",
  "class-2":
    "a community for Class 2 students to share notes on rhymes, basic maths, and general knowledge.",
  "class-3":
    "a chat room for Class 3 students covering Maths, EVS, and language basics from the NCERT syllabus.",
  "class-4":
    "a live study room for Class 4 students to discuss fractions, science experiments, and social studies.",
  "class-5":
    "a community room for Class 5 students working through EVS, Maths, and grammar fundamentals.",
  "class-6":
    "a live chat for Class 6 CBSE students covering History, Science, and Algebra basics from NCERT textbooks.",
  "class-7":
    "a study community for Class 7 students discussing Geography, Biology, Decimals, and NCERT exercises.",
  "class-8":
    "a chat room for Class 8 CBSE students covering Civics, Physics basics, Linear Equations, and more.",
  "class-9":
    "a live study room for Class 9 students discussing Coordinate Geometry, Laws of Motion, and board prep.",
  "class-10":
    "a board exam preparation community for Class 10 CBSE students covering Science, Maths, Social Science, English, and Hindi.",
  "class-11":
    "a community for Class 11 students diving deep into Physics, Chemistry, Mathematics, and Biology.",
  "class-12":
    "a board and entrance exam strategy room for Class 12 CBSE students preparing for finals and competitive exams.",
  "iit-jee":
    "an advanced study community for IIT JEE aspirants tackling Physics, Chemistry, and Mathematics at JEE Main and Advanced level.",
};

function formatTime(timestamp: bigint): string {
  const ms = Number(timestamp) / 1_000_000;
  const date = new Date(ms);
  const now = Date.now();
  const diff = now - date.getTime();
  if (diff < 60_000) return "just now";
  if (diff < 3_600_000) return `${Math.floor(diff / 60_000)}m ago`;
  if (diff < 86_400_000) return `${Math.floor(diff / 3_600_000)}h ago`;
  return date.toLocaleDateString("en-IN", { day: "numeric", month: "short" });
}

function MessageBubble({
  msg,
  isOwn,
  onDelete,
  canDelete,
}: {
  msg: ChatMessage;
  isOwn: boolean;
  onDelete: (id: bigint) => void;
  canDelete: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className={cn(
        "flex gap-2 mb-3 group",
        isOwn ? "flex-row-reverse" : "flex-row",
      )}
    >
      {/* Avatar */}
      <div
        className={cn(
          "w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-1",
          isOwn
            ? "bg-primary/30 text-primary"
            : "bg-muted text-muted-foreground",
        )}
      >
        {msg.senderName.charAt(0).toUpperCase()}
      </div>

      <div
        className={cn(
          "max-w-[72%] flex flex-col",
          isOwn ? "items-end" : "items-start",
        )}
      >
        {/* Sender name + time */}
        <div
          className={cn(
            "flex items-center gap-2 mb-1",
            isOwn ? "flex-row-reverse" : "flex-row",
          )}
        >
          <span className="text-[11px] font-semibold text-foreground/70">
            {isOwn ? "You" : msg.senderName}
          </span>
          <span className="text-[10px] text-muted-foreground">
            {formatTime(msg.timestamp)}
          </span>
        </div>

        {/* Bubble */}
        <div
          className={cn(
            "rounded-2xl px-3 py-2 text-sm relative",
            isOwn
              ? "bg-primary/20 border border-primary/30 text-foreground rounded-tr-sm"
              : "bg-muted/50 border border-border/40 text-foreground rounded-tl-sm",
          )}
        >
          {msg.messageType === "text" && (
            <p className="leading-relaxed break-words whitespace-pre-wrap">
              {msg.content}
            </p>
          )}
          {msg.messageType === "image" && (
            <img
              src={msg.content}
              alt="Shared media"
              className="max-w-[220px] max-h-[220px] rounded-lg object-cover"
              loading="lazy"
            />
          )}
          {msg.messageType === "audio" && (
            // biome-ignore lint/a11y/useMediaCaption: user-generated audio
            <audio controls src={msg.content} className="max-w-[220px]" />
          )}

          {/* Delete button */}
          {canDelete && (
            <button
              type="button"
              onClick={() => onDelete(msg.id)}
              data-ocid="chat.delete_button"
              className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity w-5 h-5 rounded-full bg-destructive/80 hover:bg-destructive flex items-center justify-center"
              aria-label="Delete message"
            >
              <Trash2 size={10} className="text-white" />
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function ClassChat() {
  const params = useParams({ from: "/protected/community/$roomId" });
  const roomId = params.roomId as string;
  const roomLabel = roomLabels[roomId] ?? roomId;
  const roomDesc =
    roomDescriptions[roomId] ??
    `a live study community for ${roomLabel} students.`;

  const { user } = useAuth();
  const { actor: rawActor } = useActor(createActor);
  const actor = rawActor as unknown as ChatActor | null;
  const { isAdmin, isOperator } = useAdminRole();

  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState("");
  const [sending, setSending] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const fileImgRef = useRef<HTMLInputElement>(null);
  const fileAudioRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = useCallback(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, []);

  const fetchMessages = useCallback(async () => {
    if (!actor) return;
    try {
      const msgs = await actor.getChatMessages(roomId, BigInt(100));
      setMessages(msgs);
    } catch {
      // silently fail on poll
    } finally {
      setLoading(false);
    }
  }, [actor, roomId]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: scroll after messages update
  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  useEffect(() => {
    if (!actor) return;
    fetchMessages();
    intervalRef.current = setInterval(fetchMessages, 3000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [actor, fetchMessages]);

  const sendMessage = async (
    type: "text" | "image" | "audio",
    content: string,
  ) => {
    if (!actor || !user) return;
    if (!content.trim() && type === "text") return;
    setSending(true);
    try {
      await actor.sendChatMessage(
        roomId,
        user.username,
        user.fullName,
        type,
        content,
      );
      await fetchMessages();
    } catch {
      toast.error("Failed to send message. Try again.");
    } finally {
      setSending(false);
    }
  };

  const handleSendText = async () => {
    if (!text.trim()) return;
    const msg = text.trim();
    setText("");
    await sendMessage("text", msg);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendText();
    }
  };

  const handleFileUpload =
    (type: "image" | "audio") => (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;

      const maxSize = 500 * 1024; // 500KB
      if (file.size > maxSize) {
        toast.error("File too large. Please upload files under 500KB.");
        e.target.value = "";
        return;
      }

      const reader = new FileReader();
      reader.onload = async () => {
        const dataUrl = reader.result as string;
        await sendMessage(type, dataUrl);
      };
      reader.readAsDataURL(file);
      e.target.value = "";
    };

  const handleDelete = async (id: bigint) => {
    if (!actor || !user) return;
    try {
      await actor.deleteChatMessage(id, user.username);
      await fetchMessages();
      toast.success("Message deleted.");
    } catch {
      toast.error("Could not delete message.");
    }
  };

  const canDeleteMsg = (msg: ChatMessage) =>
    isAdmin || isOperator || user?.username === msg.senderUsername;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <NavBar />

      {/* Chat header */}
      <div className="sticky top-14 z-10 border-b border-border/50 bg-background/95 backdrop-blur-sm px-4 py-3 flex items-center gap-3">
        <Link
          to="/community"
          data-ocid="chat.back_link"
          className="p-1.5 rounded-lg hover:bg-muted/60 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft size={18} />
        </Link>
        <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0">
          <MessageCircle size={15} className="text-primary" />
        </div>
        <div>
          <h1 className="font-bold text-sm text-foreground">
            {roomLabel} Community Chat — NCERT Bhaiya
          </h1>
          <p className="text-[11px] text-muted-foreground">
            Live • Share notes, ask doubts
          </p>
        </div>
      </div>

      {/* Messages area */}
      <div className="flex-1 overflow-hidden">
        <ScrollArea className="h-[calc(100vh-200px)]" ref={scrollRef}>
          <div className="px-4 py-4 max-w-3xl mx-auto">
            {loading ? (
              <div className="space-y-4" data-ocid="chat.loading_state">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className={cn(
                      "flex gap-2",
                      i % 2 === 0 ? "flex-row-reverse" : "flex-row",
                    )}
                  >
                    <Skeleton className="w-7 h-7 rounded-full shrink-0" />
                    <div className="space-y-1.5">
                      <Skeleton className="h-3 w-16" />
                      <Skeleton
                        className={cn(
                          "h-10 rounded-2xl",
                          i === 1 ? "w-48" : "w-36",
                        )}
                      />
                    </div>
                  </div>
                ))}
              </div>
            ) : messages.length === 0 ? (
              <div
                className="flex flex-col items-center justify-center py-20 text-center"
                data-ocid="chat.empty_state"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                  <MessageCircle size={24} className="text-primary/50" />
                </div>
                <p className="font-semibold text-foreground/70 mb-1">
                  No messages yet
                </p>
                <p className="text-xs text-muted-foreground">
                  Be the first to chat in {roomLabel}!
                </p>
              </div>
            ) : (
              <AnimatePresence initial={false}>
                {messages.map((msg) => (
                  <MessageBubble
                    key={String(msg.id)}
                    msg={msg}
                    isOwn={msg.senderUsername === user?.username}
                    onDelete={handleDelete}
                    canDelete={canDeleteMsg(msg)}
                  />
                ))}
              </AnimatePresence>
            )}
          </div>
        </ScrollArea>
      </div>

      {/* Send bar */}
      <div className="border-t border-border/50 bg-background/95 backdrop-blur-sm px-4 py-3">
        <div className="max-w-3xl mx-auto flex items-center gap-2">
          {/* Hidden file inputs */}
          <input
            ref={fileImgRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileUpload("image")}
            aria-label="Upload image"
          />
          <input
            ref={fileAudioRef}
            type="file"
            accept="audio/*"
            className="hidden"
            onChange={handleFileUpload("audio")}
            aria-label="Upload audio"
          />

          {/* Image upload */}
          <Button
            type="button"
            variant="ghost"
            size="sm"
            disabled={sending}
            onClick={() => fileImgRef.current?.click()}
            data-ocid="chat.upload_button"
            className="h-9 w-9 p-0 rounded-xl text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors shrink-0"
            aria-label="Upload image"
          >
            <ImageIcon size={16} />
          </Button>

          {/* Audio upload */}
          <Button
            type="button"
            variant="ghost"
            size="sm"
            disabled={sending}
            onClick={() => fileAudioRef.current?.click()}
            data-ocid="chat.upload_button"
            className="h-9 w-9 p-0 rounded-xl text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors shrink-0"
            aria-label="Upload audio"
          >
            <Mic size={16} />
          </Button>

          {/* Text input */}
          <Input
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={`Message ${roomLabel}...`}
            disabled={sending}
            data-ocid="chat.input"
            className="flex-1 h-9 rounded-xl bg-muted/40 border-border/50 focus:border-primary/50 text-sm"
          />

          {/* Send */}
          <Button
            type="button"
            size="sm"
            disabled={sending || !text.trim()}
            onClick={handleSendText}
            data-ocid="chat.submit_button"
            className="h-9 w-9 p-0 rounded-xl bg-primary hover:bg-primary/80 shrink-0"
            aria-label="Send message"
          >
            {sending ? (
              <div className="w-4 h-4 rounded-full border-2 border-white/40 border-t-white animate-spin" />
            ) : (
              <Send size={15} className="text-primary-foreground" />
            )}
          </Button>
        </div>
        <p className="text-[10px] text-muted-foreground text-center mt-1.5">
          📷 Images &amp; 🎵 audio under 500KB. Press Enter to send.
        </p>
      </div>

      {/* SEO Content Section */}
      <div className="max-w-3xl mx-auto w-full px-4 pb-8 mt-4">
        <div className="glass-dark rounded-2xl p-5 border border-border/40">
          <h2 className="font-display text-base font-bold mb-2 text-foreground">
            {roomLabel} Chat Room — Free CBSE Study Community
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            This is {roomDesc} Share your doubts, upload photos of textbook
            pages, post audio notes, and get help from peers who are studying
            the same NCERT curriculum. NCERT Bhaiya's community chat is
            completely free and available 24/7 — just sign in and start a
            conversation. Combine this chat with the{" "}
            <Link to="/" className="text-primary hover:underline">
              quizzes, flashcards, and cheat sheets
            </Link>{" "}
            on NCERT Bhaiya for a complete CBSE study system.
          </p>
        </div>
      </div>
    </div>
  );
}
