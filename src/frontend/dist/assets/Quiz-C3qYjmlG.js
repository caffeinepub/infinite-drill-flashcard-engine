const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FocusModeCapture-XfJFvo1r.js","assets/index-CCl8XRyv.js","assets/index-Bs8Uw2wJ.css","assets/x-CDY8v4iw.js","assets/AdZone-BhlnV9IF.js","assets/demoData-CavBEtvU.js","assets/useQueries-DCb-VeO_.js","assets/useMutation-BPsY_dJR.js","assets/useSEO-B0UXza4O.js","assets/rotate-ccw-Qa62ew6I.js","assets/log-out-Bm_UBMd0.js","assets/arrow-left-CxrUX-Wa.js","assets/flame-CfRWPRZo.js"])))=>i.map(i=>d[i]);
import { c as createLucideIcon, r as reactExports, u as useParams, f as ue, j as jsxRuntimeExports, m as motion, g as ShieldCheck, L as Link, A as AnimatePresence, e as Star, a as cn, C as CircleCheckBig, h as CircleX, _ as __vitePreload } from "./index-CCl8XRyv.js";
import { A as AdZone } from "./AdZone-BhlnV9IF.js";
import { topicsData, getLevel, getLevelProgress } from "./demoData-CavBEtvU.js";
import { c as useSubmitQuiz } from "./useQueries-DCb-VeO_.js";
import { u as useSEO } from "./useSEO-B0UXza4O.js";
import { R as RotateCcw } from "./rotate-ccw-Qa62ew6I.js";
import { H as House, L as LogOut } from "./log-out-Bm_UBMd0.js";
import { A as ArrowLeft } from "./arrow-left-CxrUX-Wa.js";
import { F as Flame } from "./flame-CfRWPRZo.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  [
    "path",
    {
      d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",
      key: "1tc9qg"
    }
  ],
  ["circle", { cx: "12", cy: "13", r: "3", key: "1vg3eu" }]
];
const Camera = createLucideIcon("camera", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }],
  ["circle", { cx: "6", cy: "12", r: "3", key: "w7nqdw" }],
  ["circle", { cx: "18", cy: "19", r: "3", key: "1xt0gg" }],
  ["line", { x1: "8.59", x2: "15.42", y1: "13.51", y2: "17.49", key: "47mynk" }],
  ["line", { x1: "15.41", x2: "8.59", y1: "6.51", y2: "10.49", key: "1n3mei" }]
];
const Share2 = createLucideIcon("share-2", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
];
const TriangleAlert = createLucideIcon("triangle-alert", __iconNode);
const MODEL_CDN = "https://cdn.jsdelivr.net/gh/justadudewhohacks/face-api.js@0.22.2/weights";
const FACEAPI_CDN = "https://cdn.jsdelivr.net/npm/face-api.js@0.22.2/dist/face-api.min.js";
const MATCH_THRESHOLD = 0.45;
let modelsLoaded = false;
let modelsLoading = null;
async function loadFaceApi() {
  if (!window.faceapi) {
    await new Promise((resolve, reject) => {
      if (document.querySelector(`script[src="${FACEAPI_CDN}"]`)) {
        const poll = setInterval(() => {
          if (window.faceapi) {
            clearInterval(poll);
            resolve();
          }
        }, 100);
        setTimeout(() => {
          clearInterval(poll);
          reject(new Error("face-api.js load timeout"));
        }, 15e3);
        return;
      }
      const script = document.createElement("script");
      script.src = FACEAPI_CDN;
      script.crossOrigin = "anonymous";
      script.onload = () => resolve();
      script.onerror = () => reject(new Error("Failed to load face-api.js"));
      document.head.appendChild(script);
    });
  }
  if (!window.faceapi) throw new Error("face-api.js not available");
  return window.faceapi;
}
async function ensureModels() {
  const faceapi = await loadFaceApi();
  if (modelsLoaded) return faceapi;
  if (!modelsLoading) {
    modelsLoading = Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_CDN),
      faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_CDN),
      faceapi.nets.faceLandmark68TinyNet.loadFromUri(MODEL_CDN)
    ]).then(() => {
      modelsLoaded = true;
    });
  }
  await modelsLoading;
  return faceapi;
}
function useFocusMode() {
  const [status, setStatus] = reactExports.useState("idle");
  const [errorMessage, setErrorMessage] = reactExports.useState(null);
  const [isCapturing, setIsCapturing] = reactExports.useState(false);
  const studyUserRef = reactExports.useRef(null);
  const enableFocusMode = reactExports.useCallback(async () => {
    setStatus("loading");
    setErrorMessage(null);
    try {
      await ensureModels();
      setStatus("capturing");
      setIsCapturing(true);
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Failed to load face detection";
      setErrorMessage(msg);
      setStatus("error");
    }
  }, []);
  const confirmReference = reactExports.useCallback((descriptor) => {
    studyUserRef.current = descriptor;
    setStatus("active");
    setIsCapturing(false);
  }, []);
  const reset = reactExports.useCallback(() => {
    studyUserRef.current = null;
    setStatus("idle");
    setErrorMessage(null);
    setIsCapturing(false);
  }, []);
  const verifyFace = reactExports.useCallback(
    async (videoEl) => {
      if (!studyUserRef.current) return true;
      try {
        const faceapi = await ensureModels();
        const opts = new faceapi.TinyFaceDetectorOptions({
          scoreThreshold: 0.4,
          inputSize: 224
        });
        const detection = await faceapi.detectSingleFace(videoEl, opts).withFaceLandmarks(true).withFaceDescriptor();
        if (!detection) return false;
        const dist = faceapi.euclideanDistance(
          studyUserRef.current,
          detection.descriptor
        );
        return dist < MATCH_THRESHOLD;
      } catch {
        return true;
      }
    },
    []
  );
  return {
    status,
    errorMessage,
    enableFocusMode,
    confirmReference,
    reset,
    verifyFace,
    studyUserRef,
    isCapturing,
    setIsCapturing
  };
}
async function captureDescriptor(videoEl) {
  const faceapi = await ensureModels();
  const opts = new faceapi.TinyFaceDetectorOptions({
    scoreThreshold: 0.4,
    inputSize: 224
  });
  const detection = await faceapi.detectSingleFace(videoEl, opts).withFaceLandmarks(true).withFaceDescriptor();
  return (detection == null ? void 0 : detection.descriptor) ?? null;
}
const FocusModeCapture = reactExports.lazy(() => __vitePreload(() => import("./FocusModeCapture-XfJFvo1r.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]) : void 0));
function TimerRing({ timeLeft, total }) {
  const radius = 26;
  const circumference = 2 * Math.PI * radius;
  const progress = timeLeft / total;
  const strokeDashoffset = circumference * (1 - progress);
  const isWarning = timeLeft <= 10;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-16 h-16 flex items-center justify-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "svg",
      {
        width: "64",
        height: "64",
        className: "absolute inset-0 -rotate-90",
        "aria-hidden": "true",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "circle",
            {
              cx: "32",
              cy: "32",
              r: radius,
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "3",
              className: "text-muted/30"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "circle",
            {
              cx: "32",
              cy: "32",
              r: radius,
              fill: "none",
              strokeWidth: "3",
              strokeLinecap: "round",
              strokeDasharray: circumference,
              strokeDashoffset,
              className: cn(
                "timer-ring-circle",
                isWarning ? "stroke-neon-red" : "stroke-neon-purple"
              ),
              style: {
                stroke: isWarning ? "oklch(var(--neon-red))" : "oklch(var(--neon-purple))"
              }
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        className: cn(
          "text-sm font-display font-bold tabular-nums z-10",
          isWarning ? "text-neon-red" : "text-foreground",
          isWarning && "animate-pulse"
        ),
        children: timeLeft
      }
    )
  ] });
}
function XPPopup({ xp, show }) {
  if (!show) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 1, y: 0, scale: 1 },
      animate: { opacity: 0, y: -60, scale: 1.3 },
      transition: { duration: 1.5, ease: "easeOut" },
      className: "fixed top-20 right-8 z-50 pointer-events-none",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neon-purple/20 border border-neon-purple/50 text-neon-purple font-display font-bold text-sm shadow-neon-purple", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 12, fill: "currentColor" }),
        "+",
        xp,
        " XP"
      ] })
    }
  );
}
function FaceMismatchWarning({
  onResume,
  onExit
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, scale: 0.92 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 0.2, type: "spring" },
      className: "w-full max-w-sm glass-dark rounded-2xl border border-amber-500/50 shadow-2xl overflow-hidden",
      style: { boxShadow: "0 0 32px oklch(var(--neon-amber) / 0.2)" },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-full bg-amber-500/15 border border-amber-500/30 flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { size: 24, className: "text-amber-400" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-bold mb-2", children: "Quiz Paused" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed mb-6", children: "A different person was detected. Focus Mode requires the same person who set up the session to submit answers. Please verify it's you." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              "data-ocid": "focus-mode.exit_quiz_button",
              onClick: onExit,
              className: "flex-1 py-2.5 rounded-xl font-display font-bold text-sm border border-border/50 bg-muted/30 hover:bg-muted/60 text-muted-foreground hover:text-foreground transition-all flex items-center justify-center gap-2",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { size: 13 }),
                "Exit Quiz"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              "data-ocid": "focus-mode.resume_button",
              onClick: onResume,
              className: "flex-1 py-2.5 rounded-xl font-display font-bold text-sm bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:opacity-90 transition-all flex items-center justify-center gap-2",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { size: 13 }),
                "Try Again"
              ]
            }
          )
        ] })
      ] })
    }
  ) });
}
function useVerifyCamera() {
  const videoRef = reactExports.useRef(null);
  const streamRef = reactExports.useRef(null);
  const startCamera = reactExports.useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: "user",
          width: { ideal: 320 },
          height: { ideal: 240 }
        }
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
      }
      return true;
    } catch {
      return false;
    }
  }, []);
  const stopCamera = reactExports.useCallback(() => {
    if (streamRef.current) {
      for (const t of streamRef.current.getTracks()) t.stop();
      streamRef.current = null;
    }
    if (videoRef.current) videoRef.current.srcObject = null;
  }, []);
  return { videoRef, startCamera, stopCamera };
}
function Quiz() {
  const { topicId } = useParams({ from: "/protected/quiz/$topicId" });
  const topic = topicsData.find((t) => t.id === topicId) ?? topicsData[0];
  const questions = topic.questions;
  useSEO({
    title: `${topic.chapter} MCQ Quiz — ${topic.className} ${topic.subject} NCERT | NCERT Bhaiya`,
    description: `Practice free MCQ questions on ${topic.chapter} for ${topic.className} ${topic.subject} NCERT on NCERT Bhaiya. Timed quiz with detailed answer explanations, XP rewards and instant feedback. Best online MCQ practice for CBSE board exam ${topic.className}.`,
    keywords: `${topic.chapter} MCQ, ${topic.className} ${topic.subject} MCQ quiz, NCERT ${topic.chapter} questions, CBSE ${topic.className} practice test, ${topic.chapter} important questions, ${topic.chapter} objective questions, ${topic.className} ${topic.subject} online test, NCERT Bhaiya quiz`,
    canonical: `/quiz/${topicId}`
  });
  const [currentIndex, setCurrentIndex] = reactExports.useState(0);
  const [selectedOption, setSelectedOption] = reactExports.useState(null);
  const [submitted, setSubmitted] = reactExports.useState(false);
  const [timeLeft, setTimeLeft] = reactExports.useState(30);
  const [xp, setXP] = reactExports.useState(0);
  const [streak, setStreak] = reactExports.useState(0);
  const [correctCount, setCorrectCount] = reactExports.useState(0);
  const [showXPPopup, setShowXPPopup] = reactExports.useState(false);
  const [xpEarned, setXPEarned] = reactExports.useState(0);
  const [quizComplete, setQuizComplete] = reactExports.useState(false);
  const [showMismatch, setShowMismatch] = reactExports.useState(false);
  const [isVerifying, setIsVerifying] = reactExports.useState(false);
  const timerRef = reactExports.useRef(null);
  const pendingSubmitRef = reactExports.useRef(false);
  const submitQuiz = useSubmitQuiz();
  const currentQuestion = questions[currentIndex];
  const focusMode = useFocusMode();
  const verifyCamera = useVerifyCamera();
  reactExports.useEffect(() => {
    return () => {
      focusMode.reset();
      verifyCamera.stopCamera();
    };
  }, [focusMode.reset, verifyCamera.stopCamera]);
  const clearTimer = reactExports.useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
  }, []);
  const doSubmit = reactExports.useCallback(() => {
    if (submitted) return;
    clearTimer();
    setSubmitted(true);
    verifyCamera.stopCamera();
    let earned = 2;
    if (selectedOption === currentQuestion.correctIndex) {
      earned = 10;
      setCorrectCount((c) => c + 1);
      setStreak((s) => s + 1);
      ue.success("🎉 Correct!", { duration: 1500 });
    } else {
      setStreak(0);
    }
    setXP((x) => x + earned);
    setXPEarned(earned);
    setShowXPPopup(true);
    setTimeout(() => setShowXPPopup(false), 1600);
  }, [
    submitted,
    selectedOption,
    currentQuestion,
    clearTimer,
    verifyCamera.stopCamera
  ]);
  const handleSubmit = reactExports.useCallback(async () => {
    if (submitted) return;
    if (focusMode.status === "active") {
      setIsVerifying(true);
      pendingSubmitRef.current = true;
      const started = await verifyCamera.startCamera();
      if (!started) {
        setIsVerifying(false);
        doSubmit();
        return;
      }
      setTimeout(async () => {
        if (verifyCamera.videoRef.current) {
          const match = await focusMode.verifyFace(
            verifyCamera.videoRef.current
          );
          setIsVerifying(false);
          verifyCamera.stopCamera();
          if (match) {
            doSubmit();
          } else {
            setShowMismatch(true);
          }
        } else {
          setIsVerifying(false);
          doSubmit();
        }
        pendingSubmitRef.current = false;
      }, 800);
      return;
    }
    doSubmit();
  }, [submitted, focusMode, verifyCamera, doSubmit]);
  reactExports.useEffect(() => {
    if (submitted || quizComplete) return;
    setTimeLeft(30);
    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(timerRef.current);
          doSubmit();
          return 0;
        }
        return t - 1;
      });
    }, 1e3);
    return clearTimer;
  }, [currentIndex, submitted, quizComplete, doSubmit, clearTimer]);
  const handleNext = () => {
    if (currentIndex + 1 >= questions.length) {
      setQuizComplete(true);
      submitQuiz.mutate({ topicId, score: correctCount });
    } else {
      setCurrentIndex((i) => i + 1);
      setSelectedOption(null);
      setSubmitted(false);
    }
  };
  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setSubmitted(false);
    setXP(0);
    setStreak(0);
    setCorrectCount(0);
    setQuizComplete(false);
    focusMode.reset();
  };
  const scorePercent = Math.round(correctCount / questions.length * 100);
  const level = getLevel(xp);
  const levelProgress = getLevelProgress(xp);
  if (quizComplete) {
    const badgeEarned = scorePercent >= 80 ? "🏆 High Scorer" : scorePercent >= 60 ? "✅ Passed" : "📚 Keep Studying";
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen dark:bg-mesh-dark bg-mesh-light flex items-center justify-center p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.9 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.5, type: "spring" },
        className: "w-full max-w-lg",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-dark rounded-3xl p-8 border border-border/50 shadow-card-glow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-6xl mb-2", children: scorePercent >= 80 ? "🎉" : scorePercent >= 60 ? "👍" : "📖" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold mb-1", children: "Quiz Complete!" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-sm", children: [
              topic.chapter,
              " · ",
              topic.microTopic
            ] }),
            focusMode.status === "active" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-1.5 mt-2 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-semibold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { size: 11 }),
              "Focus Mode Active"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-28 h-28", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "svg",
              {
                viewBox: "0 0 120 120",
                className: "w-full h-full -rotate-90",
                "aria-hidden": "true",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "circle",
                    {
                      cx: "60",
                      cy: "60",
                      r: "50",
                      fill: "none",
                      stroke: "oklch(var(--muted))",
                      strokeWidth: "8"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "circle",
                    {
                      cx: "60",
                      cy: "60",
                      r: "50",
                      fill: "none",
                      strokeWidth: "8",
                      strokeLinecap: "round",
                      strokeDasharray: 314,
                      strokeDashoffset: 314 * (1 - scorePercent / 100),
                      style: {
                        stroke: scorePercent >= 80 ? "oklch(var(--neon-green))" : scorePercent >= 60 ? "oklch(var(--neon-amber))" : "oklch(var(--neon-red))",
                        transition: "stroke-dashoffset 1s ease"
                      }
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 flex flex-col items-center justify-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-2xl font-bold", children: [
                scorePercent,
                "%"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground", children: "Score" })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-3 mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-3 rounded-xl bg-neon-purple/10 border border-neon-purple/20", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-xl font-bold text-neon-purple", children: xp }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground", children: "XP Earned" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-3 rounded-xl bg-neon-green/10 border border-neon-green/20", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-xl font-bold text-neon-green", children: [
                correctCount,
                "/",
                questions.length
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground", children: "Correct" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-3 rounded-xl bg-neon-amber/10 border border-neon-amber/20", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-xl font-bold text-neon-amber", children: [
                streak,
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "fire-anim inline-block", children: "🔥" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground", children: "Best Streak" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 p-3 rounded-xl bg-muted/30 border border-border/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium", children: level }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
                xp,
                " / ",
                levelProgress.next,
                " XP"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 rounded-full bg-muted overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { width: "0%" },
                animate: { width: `${levelProgress.progress}%` },
                transition: { duration: 1, delay: 0.3 },
                className: "h-full rounded-full progress-shimmer"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground mt-1", children: badgeEarned })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AdZone, { variant: "interstitial" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: handleRestart,
                className: "flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-primary/15 hover:bg-primary/25 text-primary border border-primary/30 hover:border-primary/60 text-sm font-semibold transition-all",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { size: 14 }),
                  "Play Again"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  navigator.clipboard.writeText(
                    `I scored ${scorePercent}% on ${topic.chapter}! 🎯`
                  );
                  ue.success("Score copied to clipboard!");
                },
                className: "p-2.5 rounded-xl bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground border border-border/50 transition-all",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { size: 16 })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/",
                className: "flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-muted/30 hover:bg-muted/50 text-muted-foreground hover:text-foreground border border-border/50 text-sm font-semibold transition-all",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(House, { size: 14 }),
                  "Topics"
                ]
              }
            )
          ] })
        ] })
      }
    ) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen dark:bg-mesh-dark bg-mesh-light flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(XPPopup, { xp: xpEarned, show: showXPPopup }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: focusMode.isCapturing && /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: null, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      FocusModeCapture,
      {
        onConfirm: (descriptor) => {
          focusMode.confirmReference(descriptor);
          ue.success("🛡️ Focus Mode active — only you earn XP!", {
            duration: 2500
          });
        },
        onCancel: () => {
          focusMode.reset();
        }
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: showMismatch && /* @__PURE__ */ jsxRuntimeExports.jsx(
      FaceMismatchWarning,
      {
        onResume: () => setShowMismatch(false),
        onExit: () => {
          setShowMismatch(false);
          focusMode.reset();
          doSubmit();
        }
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "video",
      {
        ref: verifyCamera.videoRef,
        autoPlay: true,
        playsInline: true,
        muted: true,
        className: "hidden"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "sticky top-0 z-40 glass-dark border-b border-border/50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-4 py-3 flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/",
          "data-ocid": "quiz.back_button",
          className: "p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 16 })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-1 text-[10px] text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono-custom", children: [
            currentIndex + 1,
            " / ",
            questions.length
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate max-w-[140px]", children: topic.chapter })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 bg-muted rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            className: "h-full rounded-full bg-gradient-to-r from-neon-purple to-neon-blue",
            initial: { width: "0%" },
            animate: {
              width: `${(currentIndex + 1) / questions.length * 100}%`
            },
            transition: { duration: 0.3 }
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-xs shrink-0", children: [
        focusMode.status === "active" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            "data-ocid": "quiz.focus_mode_badge",
            className: "flex items-center gap-1 px-2 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 text-[10px] font-semibold",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { size: 9 }),
              "Focus"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-neon-purple font-display font-bold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 12, fill: "currentColor" }),
          xp
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-0.5 text-neon-amber font-display font-bold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "fire-anim", children: streak > 0 ? "🔥" : "💤" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: streak })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col items-center justify-start px-4 py-8 max-w-3xl mx-auto w-full", children: [
      !submitted && currentIndex === 0 && (focusMode.status === "idle" || focusMode.status === "loading") && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: -8 },
          animate: { opacity: 1, y: 0 },
          className: "w-full mb-4",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                "data-ocid": "quiz.focus_mode_button",
                onClick: focusMode.enableFocusMode,
                disabled: focusMode.status === "loading",
                className: "w-full py-2.5 rounded-xl font-display font-semibold text-sm transition-all\n                border border-emerald-500/30 bg-emerald-500/8 hover:bg-emerald-500/15 hover:border-emerald-500/50\n                text-emerald-400 flex items-center justify-center gap-2",
                children: focusMode.status === "loading" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3.5 h-3.5 rounded-full border-2 border-emerald-400/40 border-t-emerald-400 animate-spin" }),
                  "Loading face detection…"
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { size: 14 }),
                  "Enable Focus Mode",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-emerald-400/60 font-normal ml-1", children: "Only you earn XP" })
                ] })
              }
            ),
            focusMode.errorMessage && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-destructive mt-2 text-center", children: focusMode.errorMessage })
          ]
        }
      ),
      focusMode.status === "active" && !submitted && /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: -8 },
          animate: { opacity: 1, y: 0 },
          className: "w-full mb-4",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-emerald-400 text-xs font-semibold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { size: 13 }),
              "Focus Mode active — face verification on submit"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: focusMode.reset,
                className: "text-[10px] text-muted-foreground hover:text-foreground transition-colors",
                children: "Disable"
              }
            )
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: 30 },
          animate: { opacity: 1, x: 0 },
          exit: { opacity: 0, x: -30 },
          transition: { duration: 0.3 },
          className: "w-full",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass-dark rounded-2xl p-6 border border-border/50 shadow-card-glow mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TimerRing, { timeLeft, total: 30 }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] font-mono-custom text-neon-purple/70 uppercase tracking-widest mb-2", children: [
                  "Question ",
                  currentIndex + 1
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-lg font-semibold leading-snug", children: currentQuestion.question })
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-3 mb-4", children: currentQuestion.options.map((option, idx) => {
              const isSelected = selectedOption === idx;
              const isCorrect = idx === currentQuestion.correctIndex;
              const isWrong = submitted && isSelected && !isCorrect;
              const showCorrect = submitted && isCorrect;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.button,
                {
                  "data-ocid": `quiz.option_button.${idx + 1}`,
                  onClick: () => !submitted && setSelectedOption(idx),
                  whileHover: !submitted ? { scale: 1.01 } : {},
                  whileTap: !submitted ? { scale: 0.99 } : {},
                  className: cn(
                    "relative w-full text-left px-4 py-3.5 rounded-xl border text-sm font-medium transition-all duration-200",
                    "flex items-center gap-3",
                    !submitted && !isSelected && "glass-dark border-border/50 hover:border-primary/40 hover:bg-primary/5 hover:shadow-neon-purple",
                    !submitted && isSelected && "bg-neon-purple/15 border-neon-purple/60 text-neon-purple shadow-neon-purple",
                    showCorrect && "bg-neon-green/15 border-neon-green/60 text-neon-green shadow-neon-green",
                    isWrong && "bg-neon-red/15 border-neon-red/60 text-neon-red shadow-neon-red",
                    submitted && !isSelected && !isCorrect && "glass-dark border-border/30 opacity-50"
                  ),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: cn(
                          "w-7 h-7 rounded-lg flex items-center justify-center text-xs font-display font-bold shrink-0 border",
                          !submitted && !isSelected && "border-border/50 text-muted-foreground",
                          !submitted && isSelected && "border-neon-purple/60 text-neon-purple bg-neon-purple/20",
                          showCorrect && "border-neon-green/60 text-neon-green bg-neon-green/20",
                          isWrong && "border-neon-red/60 text-neon-red bg-neon-red/20",
                          submitted && !isSelected && !isCorrect && "border-border/30 text-muted-foreground/50"
                        ),
                        children: ["A", "B", "C", "D"][idx]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1", children: option }),
                    showCorrect && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      CircleCheckBig,
                      {
                        size: 16,
                        className: "text-neon-green shrink-0"
                      }
                    ),
                    isWrong && /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { size: 16, className: "text-neon-red shrink-0" })
                  ]
                },
                option
              );
            }) }),
            !submitted ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                "data-ocid": "quiz.submit_button",
                onClick: handleSubmit,
                disabled: selectedOption === null || isVerifying,
                className: cn(
                  "w-full py-3 rounded-xl font-display font-bold text-sm transition-all flex items-center justify-center gap-2",
                  selectedOption !== null && !isVerifying ? focusMode.status === "active" ? "bg-gradient-to-r from-emerald-500 to-cyan-500 text-white hover:opacity-90" : "bg-gradient-to-r from-neon-purple to-neon-blue text-white shadow-neon-purple hover:opacity-90" : "bg-muted/30 text-muted-foreground border border-border/50 cursor-not-allowed"
                ),
                children: isVerifying ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" }),
                  "Verifying face…"
                ] }) : focusMode.status === "active" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { size: 14 }),
                  "Submit & Verify"
                ] }) : "Submit Answer"
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 12 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.3 },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-dark rounded-xl p-4 border border-border/50 mb-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 mb-2", children: selectedOption === currentQuestion.correctIndex ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { size: 14, className: "text-neon-green" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-display font-bold text-neon-green", children: "Correct! +10 XP" })
                    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { size: 14, className: "text-neon-red" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-display font-bold text-neon-red", children: "Wrong answer +2 XP" })
                    ] }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: currentQuestion.explanation })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AdZone, { variant: "leaderboard" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      "data-ocid": "quiz.next_button",
                      onClick: handleNext,
                      className: "w-full py-3 rounded-xl font-display font-bold text-sm bg-gradient-to-r from-neon-purple to-neon-blue text-white shadow-neon-purple hover:opacity-90 transition-opacity flex items-center justify-center gap-2",
                      children: currentIndex + 1 >= questions.length ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { size: 14 }),
                        "See Results"
                      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                        "Next Question",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 14, className: "rotate-180" })
                      ] })
                    }
                  )
                ]
              }
            )
          ]
        },
        currentIndex
      ) })
    ] })
  ] });
}
const Quiz$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Quiz
}, Symbol.toStringTag, { value: "Module" }));
export {
  Camera as C,
  Quiz$1 as Q,
  TriangleAlert as T,
  captureDescriptor as c
};
