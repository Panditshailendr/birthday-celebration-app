import { useEffect } from "react";

export default function FloatingHearts() {
  useEffect(() => {
    const createFloatingHeart = () => {
      const heart = document.createElement("div");
      heart.className = "heart";
      heart.innerHTML = ["💕", "💖", "💗", "💝"][Math.floor(Math.random() * 4)];
      heart.style.left = Math.random() * window.innerWidth + "px";
      heart.style.animationDuration = Math.random() * 3 + 3 + "s";
      heart.style.fontSize = Math.random() * 20 + 15 + "px";
      
      const container = document.getElementById("floating-hearts");
      if (container) {
        container.appendChild(heart);
        
        setTimeout(() => {
          heart.remove();
        }, 6000);
      }
    };

    // Create initial hearts
    for (let i = 0; i < 3; i++) {
      setTimeout(createFloatingHeart, i * 1000);
    }

    // Continue creating hearts
    const interval = setInterval(createFloatingHeart, 3000);

    return () => clearInterval(interval);
  }, []);

  return <div id="floating-hearts" className="floating-hearts" />;
}
