'use client';

import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Brain, Smile, Frown, Meh, Heart, Star } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from 'framer-motion';

const questions = [
  {
    id: 1,
    question: "How have you been feeling lately?",
    options: [
      { text: "Very good", score: 4 },
      { text: "Good", score: 3 },
      { text: "Okay", score: 2 },
      { text: "Not so good", score: 1 }
    ]
  },
  {
    id: 2,
    question: "How is your sleep quality?",
    options: [
      { text: "Excellent", score: 4 },
      { text: "Good", score: 3 },
      { text: "Fair", score: 2 },
      { text: "Poor", score: 1 }
    ]
  },
  {
    id: 3,
    question: "How would you rate your energy levels?",
    options: [
      { text: "Very energetic", score: 4 },
      { text: "Moderately energetic", score: 3 },
      { text: "Somewhat tired", score: 2 },
      { text: "Very tired", score: 1 }
    ]
  },
  {
    id: 4,
    question: "How well can you concentrate on tasks?",
    options: [
      { text: "Very well", score: 4 },
      { text: "Well", score: 3 },
      { text: "With some difficulty", score: 2 },
      { text: "With great difficulty", score: 1 }
    ]
  },
  {
    id: 5,
    question: "How do you feel about the future?",
    options: [
      { text: "Very optimistic", score: 4 },
      { text: "Somewhat optimistic", score: 3 },
      { text: "Neutral", score: 2 },
      { text: "Pessimistic", score: 1 }
    ]
  }
];

type Result = {
  emoji: string;
  mood: string;
  description: string;
  color: string;
  icon: typeof Smile | typeof Meh | typeof Frown;
};

const results: { [key: string]: Result } = {
  excellent: {
    emoji: "😊",
    mood: "Excellent",
    description: "Your mental well-being seems to be in a great place! Keep up the positive momentum!",
    color: "bg-green-100 dark:bg-green-900",
    icon: Smile
  },
  good: {
    emoji: "🙂",
    mood: "Good",
    description: "You're doing well! Remember to maintain your healthy habits and self-care routines.",
    color: "bg-blue-100 dark:bg-blue-900",
    icon: Smile
  },
  okay: {
    emoji: "😐",
    mood: "Okay",
    description: "You're managing, but there might be room for improvement in your mental well-being.",
    color: "bg-yellow-100 dark:bg-yellow-900",
    icon: Meh
  },
  needsAttention: {
    emoji: "😔",
    mood: "Needs Attention",
    description: "Consider reaching out to a mental health professional to discuss your feelings.",
    color: "bg-red-100 dark:bg-red-900",
    icon: Frown
  }
};

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (score: number) => {
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const calculateResult = (): Result => {
    const average = answers.reduce((a, b) => a + b, 0) / answers.length;
    if (average >= 3.5) return results.excellent;
    if (average >= 2.8) return results.good;
    if (average >= 2) return results.okay;
    return results.needsAttention;
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Mental Health Check-In
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            Take a quick quiz to assess your current mental well-being.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!showResult ? (
            <motion.div
              key="question"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="p-6 mb-8">
                <div className="flex items-center space-x-4 mb-6">
                  <Brain className="h-6 w-6 text-blue-600" />
                  <h2 className="text-2xl font-semibold">
                    Question {currentQuestion + 1} of {questions.length}
                  </h2>
                </div>

                <h3 className="text-xl mb-6">{questions[currentQuestion].question}</h3>

                <div className="space-y-4">
                  {questions[currentQuestion].options.map((option, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        variant="outline"
                        className="w-full text-left justify-start h-auto py-4 px-6"
                        onClick={() => handleAnswer(option.score)}
                      >
                        {option.text}
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card className={`p-6 mb-8 ${calculateResult().color}`}>
                <div className="text-center">
                  <div className="text-6xl mb-4">{calculateResult().emoji}</div>
                  <h2 className="text-2xl font-bold mb-2">{calculateResult().mood}</h2>
                  <p className="text-lg mb-6">{calculateResult().description}</p>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button onClick={resetQuiz}>
                      Take Quiz Again
                    </Button>
                  </motion.div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Recommendations</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Heart className="h-5 w-5 text-red-500" />
                    <p>Practice daily self-care activities</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Star className="h-5 w-5 text-yellow-500" />
                    <p>Maintain a regular sleep schedule</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Brain className="h-5 w-5 text-blue-500" />
                    <p>Try mindfulness or meditation exercises</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}