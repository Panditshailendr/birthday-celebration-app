import { useState } from "react";
import { useConfetti } from "@/hooks/use-confetti";

export default function GiftBox() {
  const [isOpened, setIsOpened] = useState(false);
  const { triggerConfetti } = useConfetti();

  const handleGiftClick = () => {
    if (!isOpened) {
      setIsOpened(true);
      setTimeout(() => {
        triggerConfetti({
          particleCount: 200,
          spread: 100,
          origin: { y: 0.5 }
        });
      }, 400);
    }
  };

  return (
    <section id="gift-section" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-dancing text-white mb-8">Virtual Gift Box 🎁</h2>
        <p className="text-white/80 mb-12">Click to open your special surprise!</p>
        
        <div 
          className={`gift-box mx-auto w-48 h-48 cursor-pointer mb-8 ${isOpened ? 'opened' : ''}`}
          onClick={handleGiftClick}
        >
          <div className="w-full h-full bg-gradient-to-br from-rose-deep to-burgundy rounded-lg shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-transparent to-transparent opacity-30"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl">🎁</div>
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-yellow-400 rounded-full"></div>
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-4 h-8 bg-yellow-400 rounded-lg"></div>
          </div>
        </div>

        {isOpened && (
          <div className="animate-in slide-in-from-bottom-4 duration-800">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-3xl font-dancing text-rose-gold mb-4">Your Gift 💝</h3>
              <p className="text-white text-lg mb-6">
                A promise to make every day as special as today, to be your partner in all adventures, 
                and to love you more with each passing moment.
              </p>
              <div className="text-2xl font-vibes text-rose-gold">
                "Tum meri duniya ho, aur main tumhara forever Success Partner" 💕
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
