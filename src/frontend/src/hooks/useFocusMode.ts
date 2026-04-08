/**
 * useFocusMode — Face-recognition hook for quiz Focus Mode.
 *
 * Uses face-api.js loaded dynamically from CDN so the large model weights are
 * never bundled. Models are fetched from jsDelivr on first use.
 */
import { useCallback, useRef, useState } from "react";

// ── Types ─────────────────────────────────────────────────────────────────────

export type FocusModeStatus =
  | "idle" // not enabled
  | "loading" // loading face-api models
  | "capturing" // capture modal open
  | "active" // reference captured, monitoring on submit
  | "error"; // camera or model error

// face-api.js is loaded dynamically; type shape we need
interface FaceApiLib {
  nets: {
    tinyFaceDetector: { loadFromUri: (url: string) => Promise<void> };
    faceRecognitionNet: { loadFromUri: (url: string) => Promise<void> };
    faceLandmark68TinyNet: { loadFromUri: (url: string) => Promise<void> };
  };
  TinyFaceDetectorOptions: new (opts?: {
    scoreThreshold?: number;
    inputSize?: number;
  }) => unknown;
  detectSingleFace: (
    input: HTMLVideoElement | HTMLCanvasElement,
    options?: unknown,
  ) => {
    withFaceLandmarks: (useTinyLandmarkModel?: boolean) => {
      withFaceDescriptor: () => Promise<{
        descriptor: Float32Array;
      } | null>;
    };
  };
  euclideanDistance: (a: Float32Array, b: Float32Array) => number;
}

declare global {
  interface Window {
    faceapi?: FaceApiLib;
  }
}

const MODEL_CDN =
  "https://cdn.jsdelivr.net/gh/justadudewhohacks/face-api.js@0.22.2/weights";
const FACEAPI_CDN =
  "https://cdn.jsdelivr.net/npm/face-api.js@0.22.2/dist/face-api.min.js";

// Match threshold — lower = stricter
const MATCH_THRESHOLD = 0.45;

// ── Singleton load state ───────────────────────────────────────────────────────

let modelsLoaded = false;
let modelsLoading: Promise<void> | null = null;

async function loadFaceApi(): Promise<FaceApiLib> {
  // Inject script if not already on page
  if (!window.faceapi) {
    await new Promise<void>((resolve, reject) => {
      if (document.querySelector(`script[src="${FACEAPI_CDN}"]`)) {
        // Script tag exists but window.faceapi not set yet — wait
        const poll = setInterval(() => {
          if (window.faceapi) {
            clearInterval(poll);
            resolve();
          }
        }, 100);
        setTimeout(() => {
          clearInterval(poll);
          reject(new Error("face-api.js load timeout"));
        }, 15000);
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

async function ensureModels(): Promise<FaceApiLib> {
  const faceapi = await loadFaceApi();
  if (modelsLoaded) return faceapi;
  if (!modelsLoading) {
    modelsLoading = Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_CDN),
      faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_CDN),
      faceapi.nets.faceLandmark68TinyNet.loadFromUri(MODEL_CDN),
    ]).then(() => {
      modelsLoaded = true;
    });
  }
  await modelsLoading;
  return faceapi;
}

// ── Hook ──────────────────────────────────────────────────────────────────────

export interface UseFocusModeReturn {
  status: FocusModeStatus;
  errorMessage: string | null;
  /** Call to start loading models & open the capture modal */
  enableFocusMode: () => Promise<void>;
  /** Called by FocusModeCapture when user confirms the reference photo */
  confirmReference: (descriptor: Float32Array) => void;
  /** Reset everything (on quiz end / navigate away) */
  reset: () => void;
  /** Check webcam frame against stored reference. Returns true if same person. */
  verifyFace: (
    videoEl: HTMLVideoElement | HTMLCanvasElement,
  ) => Promise<boolean>;
  studyUserRef: React.MutableRefObject<Float32Array | null>;
  isCapturing: boolean;
  setIsCapturing: (v: boolean) => void;
}

export function useFocusMode(): UseFocusModeReturn {
  const [status, setStatus] = useState<FocusModeStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isCapturing, setIsCapturing] = useState(false);
  const studyUserRef = useRef<Float32Array | null>(null);

  const enableFocusMode = useCallback(async () => {
    setStatus("loading");
    setErrorMessage(null);
    try {
      await ensureModels();
      setStatus("capturing");
      setIsCapturing(true);
    } catch (err) {
      const msg =
        err instanceof Error ? err.message : "Failed to load face detection";
      setErrorMessage(msg);
      setStatus("error");
    }
  }, []);

  const confirmReference = useCallback((descriptor: Float32Array) => {
    studyUserRef.current = descriptor;
    setStatus("active");
    setIsCapturing(false);
  }, []);

  const reset = useCallback(() => {
    studyUserRef.current = null;
    setStatus("idle");
    setErrorMessage(null);
    setIsCapturing(false);
  }, []);

  const verifyFace = useCallback(
    async (videoEl: HTMLVideoElement | HTMLCanvasElement): Promise<boolean> => {
      if (!studyUserRef.current) return true; // no reference = always pass
      try {
        const faceapi = await ensureModels();
        const opts = new faceapi.TinyFaceDetectorOptions({
          scoreThreshold: 0.4,
          inputSize: 224,
        });
        const detection = await faceapi
          .detectSingleFace(videoEl, opts)
          .withFaceLandmarks(true)
          .withFaceDescriptor();
        if (!detection) return false; // no face detected
        const dist = faceapi.euclideanDistance(
          studyUserRef.current,
          detection.descriptor,
        );
        return dist < MATCH_THRESHOLD;
      } catch {
        return true; // on error, don't block the quiz
      }
    },
    [],
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
    setIsCapturing,
  };
}

/**
 * Capture a face descriptor from a live video element.
 * Returns null if no face found.
 */
export async function captureDescriptor(
  videoEl: HTMLVideoElement,
): Promise<Float32Array | null> {
  const faceapi = await ensureModels();
  const opts = new faceapi.TinyFaceDetectorOptions({
    scoreThreshold: 0.4,
    inputSize: 224,
  });
  const detection = await faceapi
    .detectSingleFace(videoEl, opts)
    .withFaceLandmarks(true)
    .withFaceDescriptor();
  return detection?.descriptor ?? null;
}
