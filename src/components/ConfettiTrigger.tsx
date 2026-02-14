import { useEffect, useRef } from "react";
import { fireConfetti } from "../utils/confetti";

/** Fires confetti once on mount */
export default function ConfettiTrigger() {
  const fired = useRef(false);

  useEffect(() => {
    if (fired.current) return;
    fired.current = true;

    // Small delay so the hero is visible first
    const timer = setTimeout(() => {
      fireConfetti();
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  return null;
}
