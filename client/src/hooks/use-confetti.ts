import { useCallback } from "react";

interface ConfettiOptions {
  particleCount?: number;
  spread?: number;
  origin?: { x?: number; y?: number };
}

export function useConfetti() {
  const triggerConfetti = useCallback((options: ConfettiOptions = {}) => {
    // Import confetti dynamically to avoid SSR issues
    import("canvas-confetti").then((confetti) => {
      confetti.default({
        particleCount: options.particleCount || 100,
        spread: options.spread || 70,
        origin: options.origin || { y: 0.6 }
      });
    }).catch(() => {
      // Fallback if confetti library is not available
      console.log("Confetti celebration! 🎉");
    });
  }, []);

  return { triggerConfetti };
}
