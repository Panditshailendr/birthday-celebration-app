import { useState } from "react";

const memories = [
  { id: 1, emoji: "💭", memory: "First time you made me laugh till my stomach hurt 😂" },
  { id: 2, emoji: "💕", memory: "The way you scrunch your nose when you're thinking 🤔" },
  { id: 3, emoji: "⭐", memory: "Our late-night conversations about conquering the world 🌎" },
  { id: 4, emoji: "🌙", memory: "Your sleepy voice in the morning - pure magic ✨" },
  { id: 5, emoji: "🎵", memory: "How you dance when you think no one's watching 💃" }
];

export default function MemoryJar() {
  const [revealedMemories, setRevealedMemories] = useState<number[]>([]);
  const [selectedMemory, setSelectedMemory] = useState("");

  const handleJarClick = () => {
    setRevealedMemories(memories.map(m => m.id));
  };

  const handleMemoryClick = (memory: string) => {
    setSelectedMemory(memory);
  };

  return (
    <section id="memory-jar" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-dancing text-white mb-8">Memory Jar 🫙</h2>
        <p className="text-white/80 mb-12">Click the jar to reveal special moments and memories</p>
        
        <div className="relative mx-auto w-80 h-96 mb-8">
          <div 
            className="w-full h-full bg-gradient-to-b from-transparent via-white/20 to-white/30 rounded-b-full border-4 border-white/40 cursor-pointer relative overflow-hidden"
            onClick={handleJarClick}
          >
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-8 bg-rose-gold rounded-b-lg"></div>
            
            {memories.map((memory, index) => (
              <div 
                key={memory.id}
                className={`memory-jar-note absolute cursor-pointer ${
                  revealedMemories.includes(memory.id) ? 'revealed' : ''
                }`}
                style={{
                  top: `${64 + index * 48}px`,
                  left: index % 2 === 0 ? '32px' : 'auto',
                  right: index % 2 === 1 ? '48px' : 'auto'
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleMemoryClick(memory.memory);
                }}
              >
                <div className="bg-rose-gold text-burgundy p-3 rounded-lg text-sm max-w-24 text-center">
                  {memory.emoji}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-white text-lg font-vibes min-h-16">
          {selectedMemory}
        </div>
      </div>
    </section>
  );
}
