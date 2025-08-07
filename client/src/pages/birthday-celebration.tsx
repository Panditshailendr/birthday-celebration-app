import { useEffect, useRef } from "react";
import ParticleBackground from "@/components/birthday/particle-background";
import FloatingHearts from "@/components/birthday/floating-hearts";
import CountdownTimer from "@/components/birthday/countdown-timer";
import TypingMessage from "@/components/birthday/typing-message";
import LoveTimeline from "@/components/birthday/love-timeline";
import PhotoGallery from "@/components/birthday/photo-gallery";
import MemoryJar from "@/components/birthday/memory-jar";
import GiftBox from "@/components/birthday/gift-box";
import InteractiveQuiz from "@/components/birthday/interactive-quiz";
import WishesSection from "@/components/birthday/wishes-section";
import Lightbox from "@/components/birthday/lightbox";
import { useConfetti } from "@/hooks/use-confetti";
import { useGSAP } from "@/hooks/use-gsap";

export default function BirthdayCelebration() {
  const { triggerConfetti } = useConfetti();
  const audioRef = useRef<HTMLAudioElement>(null);
  
  useGSAP();

  useEffect(() => {
    // Initialize smooth scrolling for navigation
    const handleNavClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === "A" && target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    document.addEventListener("click", handleNavClick);
    return () => document.removeEventListener("click", handleNavClick);
  }, []);

  const handleStartJourney = () => {
    triggerConfetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
    
    const timeline = document.getElementById("timeline");
    if (timeline) {
      timeline.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSurprise = () => {
    triggerConfetti({
      particleCount: 150,
      spread: 90,
      origin: { y: 0.4 }
    });
    
    const surpriseMessages = [
      "Surprise! You're the most amazing person in my universe! 🌟",
      "Did you know? Every day with you is Valentine's Day for me! 💕",
      "Fun fact: Your laugh is scientifically proven to make everything better! 😄",
      "Breaking news: You've successfully stolen my heart forever! 💖"
    ];
    
    const randomMessage = surpriseMessages[Math.floor(Math.random() * surpriseMessages.length)];
    alert(randomMessage);
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play().catch(() => console.log("Audio play prevented"));
      } else {
        audioRef.current.pause();
      }
    }
  };

  return (
    <div className="romantic-gradient min-h-screen">
      <ParticleBackground />
      <FloatingHearts />
      
      {/* Floating Navigation */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-white/10 backdrop-blur-md rounded-full px-6 py-3">
        <div className="flex space-x-6 text-white text-sm">
          <a href="#hero" className="hover:text-rose-gold transition-colors">Home</a>
          <a href="#timeline" className="hover:text-rose-gold transition-colors">Our Story</a>
          <a href="#gallery" className="hover:text-rose-gold transition-colors">Memories</a>
          <a href="#wishes" className="hover:text-rose-gold transition-colors">Wishes</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative">
        <div className="text-center text-white z-10 max-w-4xl mx-auto p-6">
          <h1 className="text-6xl md:text-8xl font-dancing font-bold mb-6 animate-pulse">
            Happy Birthday
          </h1>
          <div className="text-5xl md:text-7xl font-dancing text-rose-gold mb-8">
            Annu! 💕
          </div>
          
          <CountdownTimer />
          
          <div className="mb-8">
            <TypingMessage />
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button 
              onClick={handleStartJourney}
              className="bg-rose-deep hover:bg-burgundy text-white font-semibold py-3 px-8 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Begin Our Journey 💕
            </button>
            <button 
              onClick={handleSurprise}
              className="bg-gradient-to-r from-rose-gold to-soft-pink text-burgundy font-semibold py-3 px-8 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Surprise Me! ✨
            </button>
          </div>
        </div>
      </section>

      <LoveTimeline />
      <PhotoGallery />
      <MemoryJar />
      <GiftBox />
      <InteractiveQuiz />
      <WishesSection />

      {/* Footer */}
      <footer className="py-12 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-3xl font-vibes text-rose-gold mb-4">
            "Tere saath har pal ek nayi shayari hai"
          </div>
          <p className="text-white/80 mb-6">Made with infinite love for my Success Partner 💕</p>
          
          <div className="flex justify-center items-center space-x-4">
            <button 
              onClick={toggleMusic}
              className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors"
            >
              🎵
            </button>
            <span className="text-white/60">Background Music</span>
          </div>
          
          <audio ref={audioRef} loop>
            <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mp3" />
          </audio>
        </div>
      </footer>

      <Lightbox />
    </div>
  );
}
