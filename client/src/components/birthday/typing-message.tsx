import { useState, useEffect } from "react";

const messages = [
  "Dear Annu, today is all about celebrating YOU! 💕",
  "Your smile lights up my world like the stars above ✨",
  "Every moment with you feels like a beautiful dream 🌙",
  "Here's to another year of being Success Partners! 🚀",
  "'Tere chehre ka noor, meri duniya ka rang, Har pal tere saath, jaise khushi ka sang.' 💖"
];

export default function TypingMessage() {
  const [displayText, setDisplayText] = useState("");
  const [messageIndex, setMessageIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typeMessage = () => {
      if (charIndex < messages[messageIndex].length) {
        setDisplayText(prev => prev + messages[messageIndex].charAt(charIndex));
        setCharIndex(prev => prev + 1);
      } else {
        setTimeout(() => {
          setDisplayText("");
          setCharIndex(0);
          setMessageIndex(prev => (prev + 1) % messages.length);
        }, 3000);
      }
    };

    const timeout = setTimeout(typeMessage, 50);
    return () => clearTimeout(timeout);
  }, [charIndex, messageIndex]);

  return (
    <div className="text-lg md:text-xl font-inter max-w-2xl mx-auto leading-relaxed min-h-[3rem]">
      {displayText}
    </div>
  );
}
