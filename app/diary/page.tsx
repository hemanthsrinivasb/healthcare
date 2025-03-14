'use client';

import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Book, Calendar, Smile, Cloud, Star } from "lucide-react";
import Link from "next/link";
import { motion } from 'framer-motion';

type DiaryEntry = {
  id: string;
  date: string;
  content: string;
  mood: string;
  weather: string;
};

const moods = ['😊 Happy', '😔 Sad', '😌 Calm', '😤 Angry', '😴 Tired'];
const weatherTypes = ['☀️ Sunny', '☁️ Cloudy', '🌧️ Rainy', '⛈️ Stormy', '❄️ Snowy'];

export default function DiaryPage() {
  const [entries, setEntries] = useState<DiaryEntry[]>([]);
  const [newEntry, setNewEntry] = useState('');
  const [selectedMood, setSelectedMood] = useState('');
  const [selectedWeather, setSelectedWeather] = useState('');

  const handleSaveEntry = () => {
    if (!newEntry.trim() || !selectedMood || !selectedWeather) return;

    const entry: DiaryEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      content: newEntry,
      mood: selectedMood,
      weather: selectedWeather
    };

    setEntries([entry, ...entries]);
    setNewEntry('');
    setSelectedMood('');
    setSelectedWeather('');
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
            My Daily Diary
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            Write about your day, thoughts, and feelings in your personal diary.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="p-6 mb-8">
            <div className="flex items-center space-x-4 mb-4">
              <Book className="h-6 w-6 text-blue-600" />
              <h2 className="text-2xl font-semibold">New Entry</h2>
            </div>

            <div className="space-y-4">
              <div className="flex space-x-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-2">How are you feeling?</label>
                  <div className="flex flex-wrap gap-2">
                    {moods.map((mood) => (
                      <motion.button
                        key={mood}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setSelectedMood(mood)}
                        className={`px-4 py-2 rounded-full ${
                          selectedMood === mood
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-100 dark:bg-gray-800'
                        }`}
                      >
                        {mood}
                      </motion.button>
                    ))}
                  </div>
                </div>

                <div className="flex-1">
                  <label className="block text-sm font-medium mb-2">Weather Today</label>
                  <div className="flex flex-wrap gap-2">
                    {weatherTypes.map((weather) => (
                      <motion.button
                        key={weather}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setSelectedWeather(weather)}
                        className={`px-4 py-2 rounded-full ${
                          selectedWeather === weather
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-100 dark:bg-gray-800'
                        }`}
                      >
                        {weather}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>

              <Textarea
                placeholder="How was your day? Share your thoughts and feelings..."
                className="min-h-[200px] transition-all duration-200 focus:scale-[1.01]"
                value={newEntry}
                onChange={(e) => setNewEntry(e.target.value)}
              />

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  onClick={handleSaveEntry}
                  className="w-full"
                  disabled={!newEntry.trim() || !selectedMood || !selectedWeather}
                >
                  Save Entry
                </Button>
              </motion.div>
            </div>
          </Card>
        </motion.div>

        {entries.map((entry, index) => (
          <motion.div
            key={entry.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
          >
            <Card className="p-6 mb-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-gray-500" />
                  <span className="text-sm text-gray-500">{entry.date}</span>
                </div>
                <div className="flex space-x-2">
                  <span title="Mood">{entry.mood}</span>
                  <span title="Weather">{entry.weather}</span>
                </div>
              </div>
              <p className="whitespace-pre-wrap">{entry.content}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </main>
  );
}