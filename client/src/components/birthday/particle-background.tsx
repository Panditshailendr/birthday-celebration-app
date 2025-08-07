import { useEffect, useRef } from "react";

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();

    // Stars array
    const stars: Array<{
      x: number;
      y: number;
      size: number;
      alpha: number;
      twinkle: number;
    }> = [];

    // Hearts array
    const hearts: Array<{
      x: number;
      y: number;
      size: number;
      speed: number;
      alpha: number;
    }> = [];

    // Initialize stars
    for (let i = 0; i < 150; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        alpha: Math.random() * 155 + 100,
        twinkle: Math.random() * 0.03 + 0.02
      });
    }

    // Initialize hearts
    for (let i = 0; i < 10; i++) {
      hearts.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 8 + 8,
        speed: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 100 + 50
      });
    }

    let frameCount = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frameCount++;

      // Draw twinkling stars
      ctx.fillStyle = "white";
      for (const star of stars) {
        ctx.globalAlpha = (star.alpha + Math.sin(frameCount * star.twinkle) * 50) / 255;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw floating hearts
      ctx.font = `${16}px serif`;
      for (const heart of hearts) {
        ctx.globalAlpha = heart.alpha / 255;
        ctx.fillStyle = `rgba(255, 182, 193, ${heart.alpha / 255})`;
        ctx.fillText("💕", heart.x, heart.y);
        
        heart.y -= heart.speed;
        heart.x += Math.sin(frameCount * 0.01) * 0.5;
        
        if (heart.y < -20) {
          heart.y = canvas.height + 20;
          heart.x = Math.random() * canvas.width;
        }
      }

      ctx.globalAlpha = 1;
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      resizeCanvas();
      // Redistribute stars and hearts on resize
      stars.forEach(star => {
        star.x = Math.random() * canvas.width;
        star.y = Math.random() * canvas.height;
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="particle-canvas"
      style={{ zIndex: -1 }}
    />
  );
}
