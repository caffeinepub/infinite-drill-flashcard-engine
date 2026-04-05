import { r as reactExports } from "./index-CYzhHhj9.js";
const MONETAG_SRC = "https://nap5k.com/tag.min.js";
const MONETAG_ZONE = "10808945";
function useMonotagAd() {
  const scriptRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
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
export {
  useMonotagAd as u
};
