import { useEffect } from "react";

/**
 * Lightweight Core Web Vitals observer.
 * Reports LCP, CLS, and INP to Google Analytics (if available).
 * Zero npm dependencies — uses native PerformanceObserver API.
 *
 * Targets:
 *   LCP < 2500ms  → "good"
 *   CLS < 0.1     → "good"
 *   INP < 200ms   → "good"
 */
export function WebVitals() {
  useEffect(() => {
    // Only run in browser with PerformanceObserver support
    if (typeof window === "undefined" || !("PerformanceObserver" in window))
      return;

    function sendToGA(name: string, value: number, rating: string) {
      if (typeof window.gtag === "function") {
        window.gtag("event", name, {
          value: Math.round(name === "CLS" ? value * 1000 : value),
          metric_rating: rating,
          non_interaction: true,
        });
      }
    }

    // ── LCP (Largest Contentful Paint) ────────────────────────────────────────
    try {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const last = entries[entries.length - 1] as PerformanceEntry & {
          startTime: number;
        };
        const lcp = last.startTime;
        const rating =
          lcp < 2500 ? "good" : lcp < 4000 ? "needs-improvement" : "poor";
        sendToGA("LCP", lcp, rating);
      });
      lcpObserver.observe({ type: "largest-contentful-paint", buffered: true });
    } catch {
      // PerformanceObserver not supported for this entry type
    }

    // ── CLS (Cumulative Layout Shift) ─────────────────────────────────────────
    try {
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const e = entry as PerformanceEntry & {
            hadRecentInput: boolean;
            value: number;
          };
          if (!e.hadRecentInput) clsValue += e.value;
        }
        const rating =
          clsValue < 0.1
            ? "good"
            : clsValue < 0.25
              ? "needs-improvement"
              : "poor";
        sendToGA("CLS", clsValue, rating);
      });
      clsObserver.observe({ type: "layout-shift", buffered: true });
    } catch {
      // PerformanceObserver not supported for this entry type
    }

    // ── INP (Interaction to Next Paint) ───────────────────────────────────────
    try {
      const inpObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const e = entry as PerformanceEntry & {
            duration: number;
            interactionId?: number;
          };
          if (e.interactionId) {
            const inp = e.duration;
            const rating =
              inp < 200 ? "good" : inp < 500 ? "needs-improvement" : "poor";
            sendToGA("INP", inp, rating);
          }
        }
      });
      inpObserver.observe({
        type: "event",
        // durationThreshold is a non-standard extension; cast to avoid strict TS error
        ...({ durationThreshold: 16 } as object),
        buffered: true,
      } as PerformanceObserverInit);
    } catch {
      // PerformanceObserver not supported for this entry type
    }
  }, []);

  return null;
}

// Extend window to accept gtag (injected by Google Analytics script)
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}
