import { useState } from "react";
import { useConfetti } from "@/hooks/use-confetti";

const quizQuestions = [
  {
    question: "What was the first thing that sparked our connection?",
    options: ["A small comment", "A shared laugh", "A deep conversation", "A look"],
    correct: 0
  },
  {
    question: "What do we call ourselves?",
    options: ["Soulmates", "Success Partners", "Dream Team", "Lovers"],
    correct: 1
  },
  {
    question: "What makes Annu's smile special?",
    options: ["It's contagious", "It lights up the world", "It's my reason to live", "All of the above"],
    correct: 3
  }
];

export default function InteractiveQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const { triggerConfetti } = useConfetti();

  const handleAnswerClick = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setShowResult(true);
    
    if (answerIndex === quizQuestions[currentQuestion].correct) {
      triggerConfetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 }
      });
    }
  };

  const handleNextQuestion = () => {
    setCurrentQuestion((prev) => (prev + 1) % quizQuestions.length);
    setSelectedAnswer(null);
    setShowResult(false);
  };

  const question = quizQuestions[currentQuestion];

  return (
    <section id="quiz-section" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-dancing text-center text-white mb-8">How Well Do You Know Us? 🧠</h2>
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-8">
          <div className="text-white text-xl mb-6 text-center">
            {question.question}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(index)}
                disabled={showResult}
                className="bg-white/20 hover:bg-white/30 text-white p-4 rounded-lg transition-colors text-left disabled:opacity-50"
              >
                {option}
              </button>
            ))}
          </div>
          
          {showResult && (
            <div className="text-center">
              <div className="text-lg font-dancing mb-4">
                {selectedAnswer === question.correct ? (
                  <span className="text-rose-gold">💕 Correct! You know us so well!</span>
                ) : (
                  <span className="text-soft-pink">💖 Almost! But every moment with you is perfect anyway!</span>
                )}
              </div>
              <button
                onClick={handleNextQuestion}
                className="bg-rose-deep hover:bg-burgundy text-white font-semibold py-2 px-6 rounded-full"
              >
                Next Question
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
