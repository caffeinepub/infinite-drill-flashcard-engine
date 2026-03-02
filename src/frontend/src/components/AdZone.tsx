import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

interface AdZoneProps {
  variant: "leaderboard" | "rectangle" | "interstitial";
  className?: string;
}

export function AdZone({ variant, className }: AdZoneProps) {
  const [dismissed, setDismissed] = useState(false);
  const [canDismiss, setCanDismiss] = useState(false);

  useEffect(() => {
    if (variant === "interstitial") {
      const timer = setTimeout(() => setCanDismiss(true), 3000);
      return () => clearTimeout(timer);
    }
  }, [variant]);

  if (dismissed) return null;

  if (variant === "leaderboard") {
    return (
      <div
        className={cn(
          "ad-zone relative flex items-center justify-center rounded-lg overflow-hidden",
          "w-full max-w-[728px] h-[90px] mx-auto",
          className,
        )}
      >
        <div className="flex flex-col items-center gap-1">
          <span className="text-[10px] font-mono-custom font-medium uppercase tracking-widest text-muted-foreground opacity-60">
            Advertisement
          </span>
          <span className="text-xs text-muted-foreground opacity-40">
            728 × 90
          </span>
        </div>
      </div>
    );
  }

  if (variant === "rectangle") {
    return (
      <div
        className={cn(
          "ad-zone relative flex items-center justify-center rounded-lg overflow-hidden",
          "w-[300px] h-[250px]",
          className,
        )}
      >
        <div className="flex flex-col items-center gap-1">
          <span className="text-[10px] font-mono-custom font-medium uppercase tracking-widest text-muted-foreground opacity-60">
            Advertisement
          </span>
          <span className="text-xs text-muted-foreground opacity-40">
            300 × 250
          </span>
        </div>
      </div>
    );
  }

  if (variant === "interstitial") {
    return (
      <div
        className={cn(
          "ad-zone relative flex items-center justify-center rounded-xl overflow-hidden mx-auto",
          "w-full max-w-[600px] h-[200px]",
          className,
        )}
      >
        <div className="flex flex-col items-center gap-1">
          <span className="text-[10px] font-mono-custom font-medium uppercase tracking-widest text-muted-foreground opacity-60">
            Advertisement
          </span>
          <span className="text-xs text-muted-foreground opacity-40">
            600 × 200
          </span>
        </div>
        {canDismiss && (
          <button
            type="button"
            onClick={() => setDismissed(true)}
            className="absolute top-2 right-2 p-1 rounded-full bg-background/80 hover:bg-background text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Dismiss ad"
          >
            <X size={14} />
          </button>
        )}
        {!canDismiss && (
          <div className="absolute top-2 right-2 text-xs text-muted-foreground opacity-60 font-mono-custom">
            Close in 3s
          </div>
        )}
      </div>
    );
  }

  return null;
}
