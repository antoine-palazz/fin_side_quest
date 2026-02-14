import confetti from "canvas-confetti";

/** Fire a celebratory confetti burst from both sides */
export function fireConfetti() {
  const defaults = {
    spread: 80,
    ticks: 100,
    gravity: 0.8,
    decay: 0.92,
    startVelocity: 35,
    colors: ["#fbbf7c", "#fda4af", "#7dd3fc", "#fde047", "#6ee7b7", "#c4b5fd"],
  };

  // Left side
  confetti({
    ...defaults,
    particleCount: 50,
    origin: { x: 0.15, y: 0.6 },
    angle: 60,
  });

  // Right side
  confetti({
    ...defaults,
    particleCount: 50,
    origin: { x: 0.85, y: 0.6 },
    angle: 120,
  });

  // Center rain
  setTimeout(() => {
    confetti({
      ...defaults,
      particleCount: 80,
      origin: { x: 0.5, y: 0.3 },
      spread: 120,
      startVelocity: 45,
    });
  }, 300);
}
