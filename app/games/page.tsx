'use client';

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Brain, Puzzle, Gamepad2, ChevronRight as ChessKnight, Target, Zap, Crown } from "lucide-react";
import Link from "next/link";
import { motion } from 'framer-motion';

const games = [
  {
    title: "Memory Match",
    description: "Test and improve your memory with this classic card matching game",
    icon: Brain,
    image: "https://images.unsplash.com/photo-1606167668584-78701c57f13d?auto=format&fit=crop&q=80&w=2000",
    link: "https://www.memozor.com/memory-games",
    color: "bg-blue-50 dark:bg-blue-950",
    iconColor: "text-blue-600 dark:text-blue-400"
  },
  {
    title: "Puzzle Quest",
    description: "Challenge your mind with various puzzle types and difficulties",
    icon: Puzzle,
    image: "https://images.unsplash.com/photo-1618331833071-ce81ea97ca5f?auto=format&fit=crop&q=80&w=2000",
    link: "https://www.jigsawplanet.com/",
    color: "bg-purple-50 dark:bg-purple-950",
    iconColor: "text-purple-600 dark:text-purple-400"
  },
  {
    title: "Word Master",
    description: "Expand your vocabulary and improve cognitive skills",
    icon: Gamepad2,
    image: "https://images.unsplash.com/photo-1632501641765-e568d28b0015?auto=format&fit=crop&q=80&w=2000",
    link: "https://www.wordgameworld.com/",
    color: "bg-green-50 dark:bg-green-950",
    iconColor: "text-green-600 dark:text-green-400"
  },
  {
    title: "Chess Challenge",
    description: "Strategic thinking and planning with classic chess",
    icon: ChessKnight,
    image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&q=80&w=2000",
    link: "https://www.chess.com/play/online",
    color: "bg-amber-50 dark:bg-amber-950",
    iconColor: "text-amber-600 dark:text-amber-400"
  },
  {
    title: "Focus Trainer",
    description: "Improve concentration and attention span",
    icon: Target,
    image: "https://images.unsplash.com/photo-1489850846882-35ef10a4b480?auto=format&fit=crop&q=80&w=2000",
    link: "https://www.brainturk.com/",
    color: "bg-rose-50 dark:bg-rose-950",
    iconColor: "text-rose-600 dark:text-rose-400"
  },
  {
    title: "Quick Reflex",
    description: "Test and enhance your reaction time",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2000",
    link: "https://humanbenchmark.com/",
    color: "bg-teal-50 dark:bg-teal-950",
    iconColor: "text-teal-600 dark:text-teal-400"
  },
  {
    title: "Logic Master",
    description: "Solve challenging logic puzzles and riddles",
    icon: Crown,
    image: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?auto=format&fit=crop&q=80&w=2000",
    link: "https://logic.puzzlebaron.com/",
    color: "bg-indigo-50 dark:bg-indigo-950",
    iconColor: "text-indigo-600 dark:text-indigo-400"
  }
];

export default function GamesPage() {
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
            Mind Games & Puzzles
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            Exercise your brain with our collection of engaging mental games and puzzles.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game, index) => (
            <motion.div
              key={game.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className={`${game.color} border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden`}>
                <div className="relative h-48">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <game.icon className="w-12 h-12 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {game.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {game.description}
                  </p>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <a href={game.link} target="_blank" rel="noopener noreferrer">
                      <Button 
                        variant="ghost" 
                        className="w-full justify-center bg-white/50 dark:bg-gray-800/50 hover:bg-white/80 dark:hover:bg-gray-800/80"
                      >
                        Play Now
                      </Button>
                    </a>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}