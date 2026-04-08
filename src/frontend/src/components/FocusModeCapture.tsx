/**
 * FocusModeCapture — modal for capturing a reference face snapshot.
 *
 * Opens a webcam preview, lets user capture, then confirm or retake.
 * On confirm it passes the Float32Array descriptor back to the parent.
 */
import {
  AlertTriangle,
  Camera,
  CheckCircle,
  RefreshCw,
  ShieldOff,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { captureDescriptor } from "../hooks/useFocusMode";

interface Props {
  onConfirm: (descriptor: Float32Array) => void;
  onCancel: () => void;
}

type Step = "preview" | "captured" | "processing" | "no-face";

export default function FocusModeCapture({ onConfirm, onCancel }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const [isActive, setIsActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState<Step>("preview");
  const [cameraError, setCameraError] = useState<string | null>(null);
  const snapshotRef = useRef<Float32Array | null>(null);

  // Start camera on mount
  useEffect(() => {
    let mounted = true;
    setIsLoading(true);

    const start = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: "user",
            width: { ideal: 640 },
            height: { ideal: 480 },
          },
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
        const e = err as { name?: string };
        if (e.name === "NotAllowedError") {
          setCameraError(
            "Camera permission denied. Please allow camera access in your browser settings.",
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

  const stopCamera = useCallback(() => {
    if (streamRef.current) {
      for (const t of streamRef.current.getTracks()) t.stop();
    }
    streamRef.current = null;
    setIsActive(false);
  }, []);

  const handleCapture = useCallback(async () => {
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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 16 }}
        transition={{ duration: 0.25, type: "spring" }}
        className="w-full max-w-sm glass-dark rounded-2xl border border-border/50 overflow-hidden shadow-2xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-border/40">
          <div className="flex items-center gap-2">
            <Camera size={16} className="text-emerald-400" />
            <span className="font-display font-bold text-sm">
              Focus Mode Setup
            </span>
          </div>
          <button
            type="button"
            aria-label="Cancel Focus Mode"
            onClick={() => {
              stopCamera();
              onCancel();
            }}
            className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all"
          >
            <X size={15} />
          </button>
        </div>

        {/* Body */}
        <div className="p-5">
          {/* Instruction */}
          <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
            Position your face in the frame. When ready, click{" "}
            <span className="text-emerald-400 font-semibold">Capture</span>.
            Only you will earn XP during this quiz session.
          </p>

          {/* Camera permission error */}
          {cameraError && (
            <div className="flex items-start gap-3 p-4 rounded-xl bg-destructive/10 border border-destructive/30 text-destructive mb-4">
              <ShieldOff size={16} className="shrink-0 mt-0.5" />
              <p className="text-xs leading-relaxed">{cameraError}</p>
            </div>
          )}

          {/* Video preview */}
          {!cameraError && (
            <div className="relative rounded-xl overflow-hidden bg-muted/30 border border-border/40 aspect-video w-full mb-4">
              <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                className="w-full h-full object-cover"
                style={{ transform: "scaleX(-1)" }}
              />

              {/* Loading overlay */}
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-background/70">
                  <div className="w-7 h-7 rounded-full border-2 border-emerald-400/40 border-t-emerald-400 animate-spin" />
                </div>
              )}

              {/* Face guide overlay */}
              {isActive && step === "preview" && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div
                    className="rounded-full border-2 border-emerald-400/60"
                    style={{ width: "55%", aspectRatio: "1 / 1.2" }}
                  />
                </div>
              )}

              {/* Processing overlay */}
              {step === "processing" && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/60 backdrop-blur-sm gap-2">
                  <div className="w-7 h-7 rounded-full border-2 border-emerald-400/40 border-t-emerald-400 animate-spin" />
                  <span className="text-xs text-emerald-400">
                    Scanning face…
                  </span>
                </div>
              )}

              {/* Captured success overlay */}
              {step === "captured" && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-emerald-500/20 backdrop-blur-sm gap-2">
                  <CheckCircle size={32} className="text-emerald-400" />
                  <span className="text-xs text-emerald-300 font-semibold">
                    Face captured!
                  </span>
                </div>
              )}

              {/* No face detected overlay */}
              {step === "no-face" && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-amber-500/15 backdrop-blur-sm gap-2">
                  <AlertTriangle size={28} className="text-amber-400" />
                  <span className="text-xs text-amber-300 font-semibold text-center px-4">
                    No face detected. Make sure your face is well-lit and
                    visible.
                  </span>
                </div>
              )}
            </div>
          )}

          {/* Action buttons */}
          <AnimatePresence mode="wait">
            {step === "preview" || step === "no-face" ? (
              <motion.button
                key="capture"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                type="button"
                data-ocid="focus-mode.capture_button"
                onClick={handleCapture}
                disabled={!isActive || isLoading}
                className="w-full py-2.5 rounded-xl font-display font-bold text-sm transition-all
                  bg-gradient-to-r from-emerald-500 to-cyan-500 text-white
                  hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed
                  flex items-center justify-center gap-2"
              >
                <Camera size={14} />
                {step === "no-face" ? "Try Again" : "Capture My Face"}
              </motion.button>
            ) : step === "captured" ? (
              <motion.div
                key="confirm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex gap-3"
              >
                <button
                  type="button"
                  data-ocid="focus-mode.retake_button"
                  onClick={handleRetake}
                  className="flex-1 py-2.5 rounded-xl font-display font-bold text-sm border border-border/50 bg-muted/30 hover:bg-muted/60 text-muted-foreground hover:text-foreground transition-all flex items-center justify-center gap-2"
                >
                  <RefreshCw size={13} />
                  Retake
                </button>
                <button
                  type="button"
                  data-ocid="focus-mode.confirm_button"
                  onClick={handleConfirm}
                  className="flex-1 py-2.5 rounded-xl font-display font-bold text-sm transition-all
                    bg-gradient-to-r from-emerald-500 to-cyan-500 text-white hover:opacity-90
                    flex items-center justify-center gap-2"
                >
                  <CheckCircle size={13} />
                  Start Quiz
                </button>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
