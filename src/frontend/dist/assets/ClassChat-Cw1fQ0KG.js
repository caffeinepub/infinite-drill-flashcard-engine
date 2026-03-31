import { c as createLucideIcon, u as useParams, s as useAuth, h as useActor, r as reactExports, j as jsxRuntimeExports, L as Link, a as cn, A as AnimatePresence, d as Button, I as Input, f as ue, m as motion } from "./index-C7lj-2mW.js";
import { S as ScrollArea } from "./scroll-area-9ziTJ2VE.js";
import { S as Skeleton, T as Trash2 } from "./skeleton-UP-HIyeK.js";
import { u as useAdminRole, N as NavBar, M as MessageCircle } from "./NavBar-CfOo71OI.js";
import { A as ArrowLeft } from "./arrow-left-DidiXTma.js";
import { S as Send } from "./send-BAqsuv6f.js";
import "./house-DO1Ap8bw.js";
import "./flask-conical-03q95LpV.js";
import "./trophy-DYK9YNrL.js";
import "./circle-user-CC1vfEO5.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
];
const Image = createLucideIcon("image", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z", key: "131961" }],
  ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2", key: "1vc78b" }],
  ["line", { x1: "12", x2: "12", y1: "19", y2: "22", key: "x3vr5v" }]
];
const Mic = createLucideIcon("mic", __iconNode);
const roomLabels = {
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
  "iit-jee": "IIT JEE"
};
function formatTime(timestamp) {
  const ms = Number(timestamp) / 1e6;
  const date = new Date(ms);
  const now = Date.now();
  const diff = now - date.getTime();
  if (diff < 6e4) return "just now";
  if (diff < 36e5) return `${Math.floor(diff / 6e4)}m ago`;
  if (diff < 864e5) return `${Math.floor(diff / 36e5)}h ago`;
  return date.toLocaleDateString("en-IN", { day: "numeric", month: "short" });
}
function MessageBubble({
  msg,
  isOwn,
  onDelete,
  canDelete
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 8 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, scale: 0.95 },
      transition: { duration: 0.2 },
      className: cn(
        "flex gap-2 mb-3 group",
        isOwn ? "flex-row-reverse" : "flex-row"
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: cn(
              "w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-1",
              isOwn ? "bg-primary/30 text-primary" : "bg-muted text-muted-foreground"
            ),
            children: msg.senderName.charAt(0).toUpperCase()
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: cn(
              "max-w-[72%] flex flex-col",
              isOwn ? "items-end" : "items-start"
            ),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: cn(
                    "flex items-center gap-2 mb-1",
                    isOwn ? "flex-row-reverse" : "flex-row"
                  ),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-semibold text-foreground/70", children: isOwn ? "You" : msg.senderName }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground", children: formatTime(msg.timestamp) })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: cn(
                    "rounded-2xl px-3 py-2 text-sm relative",
                    isOwn ? "bg-primary/20 border border-primary/30 text-foreground rounded-tr-sm" : "bg-muted/50 border border-border/40 text-foreground rounded-tl-sm"
                  ),
                  children: [
                    msg.messageType === "text" && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "leading-relaxed break-words whitespace-pre-wrap", children: msg.content }),
                    msg.messageType === "image" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "img",
                      {
                        src: msg.content,
                        alt: "Shared media",
                        className: "max-w-[220px] max-h-[220px] rounded-lg object-cover",
                        loading: "lazy"
                      }
                    ),
                    msg.messageType === "audio" && // biome-ignore lint/a11y/useMediaCaption: user-generated audio
                    /* @__PURE__ */ jsxRuntimeExports.jsx("audio", { controls: true, src: msg.content, className: "max-w-[220px]" }),
                    canDelete && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => onDelete(msg.id),
                        "data-ocid": "chat.delete_button",
                        className: "absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity w-5 h-5 rounded-full bg-destructive/80 hover:bg-destructive flex items-center justify-center",
                        "aria-label": "Delete message",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 10, className: "text-white" })
                      }
                    )
                  ]
                }
              )
            ]
          }
        )
      ]
    }
  );
}
function ClassChat() {
  const params = useParams({ from: "/protected/community/$roomId" });
  const roomId = params.roomId;
  const roomLabel = roomLabels[roomId] ?? roomId;
  const { user } = useAuth();
  const { actor: rawActor } = useActor();
  const actor = rawActor;
  const { isAdmin, isOperator } = useAdminRole();
  const [messages, setMessages] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [text, setText] = reactExports.useState("");
  const [sending, setSending] = reactExports.useState(false);
  const scrollRef = reactExports.useRef(null);
  const intervalRef = reactExports.useRef(null);
  const fileImgRef = reactExports.useRef(null);
  const fileAudioRef = reactExports.useRef(null);
  const scrollToBottom = reactExports.useCallback(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, []);
  const fetchMessages = reactExports.useCallback(async () => {
    if (!actor) return;
    try {
      const msgs = await actor.getChatMessages(roomId, BigInt(100));
      setMessages(msgs);
    } catch {
    } finally {
      setLoading(false);
    }
  }, [actor, roomId]);
  reactExports.useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);
  reactExports.useEffect(() => {
    if (!actor) return;
    fetchMessages();
    intervalRef.current = setInterval(fetchMessages, 3e3);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [actor, fetchMessages]);
  const sendMessage = async (type, content) => {
    if (!actor || !user) return;
    if (!content.trim() && type === "text") return;
    setSending(true);
    try {
      await actor.sendChatMessage(
        roomId,
        user.username,
        user.fullName,
        type,
        content
      );
      await fetchMessages();
    } catch {
      ue.error("Failed to send message. Try again.");
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
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendText();
    }
  };
  const handleFileUpload = (type) => (e) => {
    var _a;
    const file = (_a = e.target.files) == null ? void 0 : _a[0];
    if (!file) return;
    const maxSize = 500 * 1024;
    if (file.size > maxSize) {
      ue.error("File too large. Please upload files under 500KB.");
      e.target.value = "";
      return;
    }
    const reader = new FileReader();
    reader.onload = async () => {
      const dataUrl = reader.result;
      await sendMessage(type, dataUrl);
    };
    reader.readAsDataURL(file);
    e.target.value = "";
  };
  const handleDelete = async (id) => {
    if (!actor || !user) return;
    try {
      await actor.deleteChatMessage(id, user.username);
      await fetchMessages();
      ue.success("Message deleted.");
    } catch {
      ue.error("Could not delete message.");
    }
  };
  const canDeleteMsg = (msg) => isAdmin || isOperator || (user == null ? void 0 : user.username) === msg.senderUsername;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(NavBar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sticky top-14 z-10 border-b border-border/50 bg-background/95 backdrop-blur-sm px-4 py-3 flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/community",
          "data-ocid": "chat.back_link",
          className: "p-1.5 rounded-lg hover:bg-muted/60 text-muted-foreground hover:text-foreground transition-colors",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 18 })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { size: 15, className: "text-primary" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-bold text-sm text-foreground", children: [
          roomLabel,
          " Community Chat"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", children: "Live • Share notes, ask doubts" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollArea, { className: "h-[calc(100vh-200px)]", ref: scrollRef, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-4 max-w-3xl mx-auto", children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", "data-ocid": "chat.loading_state", children: [1, 2, 3].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: cn(
          "flex gap-2",
          i % 2 === 0 ? "flex-row-reverse" : "flex-row"
        ),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "w-7 h-7 rounded-full shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-16" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Skeleton,
              {
                className: cn(
                  "h-10 rounded-2xl",
                  i === 1 ? "w-48" : "w-36"
                )
              }
            )
          ] })
        ]
      },
      i
    )) }) : messages.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex flex-col items-center justify-center py-20 text-center",
        "data-ocid": "chat.empty_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { size: 24, className: "text-primary/50" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground/70 mb-1", children: "No messages yet" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
            "Be the first to chat in ",
            roomLabel,
            "!"
          ] })
        ]
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { initial: false, children: messages.map((msg) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      MessageBubble,
      {
        msg,
        isOwn: msg.senderUsername === (user == null ? void 0 : user.username),
        onDelete: handleDelete,
        canDelete: canDeleteMsg(msg)
      },
      String(msg.id)
    )) }) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border/50 bg-background/95 backdrop-blur-sm px-4 py-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            ref: fileImgRef,
            type: "file",
            accept: "image/*",
            className: "hidden",
            onChange: handleFileUpload("image"),
            "aria-label": "Upload image"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            ref: fileAudioRef,
            type: "file",
            accept: "audio/*",
            className: "hidden",
            onChange: handleFileUpload("audio"),
            "aria-label": "Upload audio"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            type: "button",
            variant: "ghost",
            size: "sm",
            disabled: sending,
            onClick: () => {
              var _a;
              return (_a = fileImgRef.current) == null ? void 0 : _a.click();
            },
            "data-ocid": "chat.upload_button",
            className: "h-9 w-9 p-0 rounded-xl text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors shrink-0",
            "aria-label": "Upload image",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { size: 16 })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            type: "button",
            variant: "ghost",
            size: "sm",
            disabled: sending,
            onClick: () => {
              var _a;
              return (_a = fileAudioRef.current) == null ? void 0 : _a.click();
            },
            "data-ocid": "chat.upload_button",
            className: "h-9 w-9 p-0 rounded-xl text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors shrink-0",
            "aria-label": "Upload audio",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mic, { size: 16 })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            value: text,
            onChange: (e) => setText(e.target.value),
            onKeyDown: handleKeyDown,
            placeholder: `Message ${roomLabel}...`,
            disabled: sending,
            "data-ocid": "chat.input",
            className: "flex-1 h-9 rounded-xl bg-muted/40 border-border/50 focus:border-primary/50 text-sm"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            type: "button",
            size: "sm",
            disabled: sending || !text.trim(),
            onClick: handleSendText,
            "data-ocid": "chat.submit_button",
            className: "h-9 w-9 p-0 rounded-xl bg-primary hover:bg-primary/80 shrink-0",
            "aria-label": "Send message",
            children: sending ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-4 h-4 rounded-full border-2 border-white/40 border-t-white animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { size: 15, className: "text-primary-foreground" })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground text-center mt-1.5", children: "📷 Images & 🎵 audio under 500KB. Press Enter to send." })
    ] })
  ] });
}
export {
  ClassChat as default
};
