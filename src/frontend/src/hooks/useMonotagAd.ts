import { useEffect, useRef } from "react";

const MONETAG_SRC = "https://nap5k.com/tag.min.js";
const MONETAG_ZONE = "10808945";

export function useMonotagAd() {
  const scriptRef = useRef<HTMLScriptElement | null>(null);

  useEffect(() => {
    // Guard against double injection
    if (document.querySelector(`script[src="${MONETAG_SRC}"]`)) return;

    const script = document.createElement("script");
    script.src = MONETAG_SRC;
    script.dataset.zone = MONETAG_ZONE;
    script.async = true;
    document.body.appendChild(script);
    scriptRef.current = script;

    return () => {
      if (scriptRef.current && document.body.contains(scriptRef.current)) {
        document.body.removeChild(scriptRef.current);
        scriptRef.current = null;
      }
    };
  }, []);
}
