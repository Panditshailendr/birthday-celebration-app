import { useEffect } from "react";

export function useGSAP() {
  useEffect(() => {
    // Import GSAP dynamically
    import("gsap").then(({ gsap }) => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);

        // Timeline animations
        gsap.from('.timeline-item', {
          x: -100,
          opacity: 0,
          duration: 1,
          stagger: 0.3,
          scrollTrigger: {
            trigger: '#timeline',
            start: 'top 80%'
          }
        });

        // Gallery animations
        gsap.from('.gallery-item', {
          y: 50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          scrollTrigger: {
            trigger: '#gallery',
            start: 'top 80%'
          }
        });

        // Section fade-ins
        gsap.from('#memory-jar, #gift-section, #quiz-section, #wishes', {
          y: 100,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: '#memory-jar',
            start: 'top 90%'
          }
        });
      });
    }).catch(() => {
      console.log("GSAP animations not available");
    });
  }, []);
}
