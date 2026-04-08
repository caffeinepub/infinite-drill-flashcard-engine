import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, m as motion, C as CircleCheckBig, A as AnimatePresence } from "./index-CCl8XRyv.js";
import { c as captureDescriptor, C as Camera, T as TriangleAlert } from "./Quiz-C3qYjmlG.js";
import { X } from "./x-CDY8v4iw.js";
import "./AdZone-BhlnV9IF.js";
import "./demoData-CavBEtvU.js";
import "./useQueries-DCb-VeO_.js";
import "./useMutation-BPsY_dJR.js";
import "./useSEO-B0UXza4O.js";
import "./rotate-ccw-Qa62ew6I.js";
import "./log-out-Bm_UBMd0.js";
import "./arrow-left-CxrUX-Wa.js";
import "./flame-CfRWPRZo.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
];
const RefreshCw = createLucideIcon("refresh-cw", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  [
    "path",
    {
      d: "M5 5a1 1 0 0 0-1 1v7c0 5 3.5 7.5 7.67 8.94a1 1 0 0 0 .67.01c2.35-.82 4.48-1.97 5.9-3.71",
      key: "1jlk70"
    }
  ],
  [
    "path",
    {
      d: "M9.309 3.652A12.252 12.252 0 0 0 11.24 2.28a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v7a9.784 9.784 0 0 1-.08 1.264",
      key: "18rp1v"
    }
  ]
];
const ShieldOff = createLucideIcon("shield-off", __iconNode);
function FocusModeCapture({ onConfirm, onCancel }) {
  const videoRef = reactExports.useRef(null);
  const streamRef = reactExports.useRef(null);
  const [isActive, setIsActive] = reactExports.useState(false);
  const [isLoading, setIsLoading] = reactExports.useState(false);
  const [step, setStep] = reactExports.useState("preview");
  const [cameraError, setCameraError] = reactExports.useState(null);
  const snapshotRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    let mounted = true;
    setIsLoading(true);
    const start = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: "user",
            width: { ideal: 640 },
            height: { ideal: 480 }
          }
        });
        if (!mounted) {
          for (const t of stream.getTracks()) t.stop();
          return;
        }
        streamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          await videoRef.current.play();
        }
        setIsActive(true);
      } catch (err) {
        if (!mounted) return;
        const e = err;
        if (e.name === "NotAllowedError") {
          setCameraError(
            "Camera permission denied. Please allow camera access in your browser settings."
          );
        } else if (e.name === "NotFoundError") {
          setCameraError("No camera found on this device.");
        } else {
          setCameraError("Could not access camera. Please try again.");
        }
      } finally {
        if (mounted) setIsLoading(false);
      }
    };
    start();
    return () => {
      mounted = false;
      if (streamRef.current) {
        for (const t of streamRef.current.getTracks()) t.stop();
      }
    };
  }, []);
  const stopCamera = reactExports.useCallback(() => {
    if (streamRef.current) {
      for (const t of streamRef.current.getTracks()) t.stop();
    }
    streamRef.current = null;
    setIsActive(false);
  }, []);
  const handleCapture = reactExports.useCallback(async () => {
    if (!videoRef.current || !isActive) return;
    setStep("processing");
    try {
      const descriptor = await captureDescriptor(videoRef.current);
      if (!descriptor) {
        setStep("no-face");
        return;
      }
      snapshotRef.current = descriptor;
      setStep("captured");
    } catch {
      setStep("no-face");
    }
  }, [isActive]);
  const handleConfirm = () => {
    if (snapshotRef.current) {
      stopCamera();
      onConfirm(snapshotRef.current);
    }
  };
  const handleRetake = () => {
    snapshotRef.current = null;
    setStep("preview");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, scale: 0.95, y: 16 },
      animate: { opacity: 1, scale: 1, y: 0 },
      exit: { opacity: 0, scale: 0.95, y: 16 },
      transition: { duration: 0.25, type: "spring" },
      className: "w-full max-w-sm glass-dark rounded-2xl border border-border/50 overflow-hidden shadow-2xl",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-5 py-4 border-b border-border/40", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { size: 16, className: "text-emerald-400" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-sm", children: "Focus Mode Setup" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              "aria-label": "Cancel Focus Mode",
              onClick: () => {
                stopCamera();
                onCancel();
              },
              className: "p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 15 })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mb-4 leading-relaxed", children: [
            "Position your face in the frame. When ready, click",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-400 font-semibold", children: "Capture" }),
            ". Only you will earn XP during this quiz session."
          ] }),
          cameraError && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 p-4 rounded-xl bg-destructive/10 border border-destructive/30 text-destructive mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldOff, { size: 16, className: "shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs leading-relaxed", children: cameraError })
          ] }),
          !cameraError && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-xl overflow-hidden bg-muted/30 border border-border/40 aspect-video w-full mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "video",
              {
                ref: videoRef,
                autoPlay: true,
                playsInline: true,
                muted: true,
                className: "w-full h-full object-cover",
                style: { transform: "scaleX(-1)" }
              }
            ),
            isLoading && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center bg-background/70", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-7 h-7 rounded-full border-2 border-emerald-400/40 border-t-emerald-400 animate-spin" }) }),
            isActive && step === "preview" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "rounded-full border-2 border-emerald-400/60",
                style: { width: "55%", aspectRatio: "1 / 1.2" }
              }
            ) }),
            step === "processing" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 flex flex-col items-center justify-center bg-background/60 backdrop-blur-sm gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-7 h-7 rounded-full border-2 border-emerald-400/40 border-t-emerald-400 animate-spin" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-emerald-400", children: "Scanning face…" })
            ] }),
            step === "captured" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 flex flex-col items-center justify-center bg-emerald-500/20 backdrop-blur-sm gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { size: 32, className: "text-emerald-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-emerald-300 font-semibold", children: "Face captured!" })
            ] }),
            step === "no-face" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 flex flex-col items-center justify-center bg-amber-500/15 backdrop-blur-sm gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { size: 28, className: "text-amber-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-amber-300 font-semibold text-center px-4", children: "No face detected. Make sure your face is well-lit and visible." })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: step === "preview" || step === "no-face" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.button,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              type: "button",
              "data-ocid": "focus-mode.capture_button",
              onClick: handleCapture,
              disabled: !isActive || isLoading,
              className: "w-full py-2.5 rounded-xl font-display font-bold text-sm transition-all\n                  bg-gradient-to-r from-emerald-500 to-cyan-500 text-white\n                  hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed\n                  flex items-center justify-center gap-2",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { size: 14 }),
                step === "no-face" ? "Try Again" : "Capture My Face"
              ]
            },
            "capture"
          ) : step === "captured" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              className: "flex gap-3",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    "data-ocid": "focus-mode.retake_button",
                    onClick: handleRetake,
                    className: "flex-1 py-2.5 rounded-xl font-display font-bold text-sm border border-border/50 bg-muted/30 hover:bg-muted/60 text-muted-foreground hover:text-foreground transition-all flex items-center justify-center gap-2",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { size: 13 }),
                      "Retake"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    "data-ocid": "focus-mode.confirm_button",
                    onClick: handleConfirm,
                    className: "flex-1 py-2.5 rounded-xl font-display font-bold text-sm transition-all\n                    bg-gradient-to-r from-emerald-500 to-cyan-500 text-white hover:opacity-90\n                    flex items-center justify-center gap-2",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { size: 13 }),
                      "Start Quiz"
                    ]
                  }
                )
              ]
            },
            "confirm"
          ) : null })
        ] })
      ]
    }
  ) });
}
export {
  FocusModeCapture as default
};
