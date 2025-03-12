'use client';

import { useState, useRef, useCallback } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Radiation as Meditation, Brain, Heart, Leaf, Camera } from "lucide-react";
import Link from "next/link";
import Webcam from 'react-webcam';
import * as faceapi from 'face-api.js';

const wellnessResources = [
  {
    title: "Meditation Guides",
    description: "Discover guided meditation sessions for inner peace and mindfulness",
    icon: Meditation,
    color: "bg-purple-50 dark:bg-purple-950",
    iconColor: "text-purple-600 dark:text-purple-400"
  },
  {
    title: "Mental Exercises",
    description: "Practice cognitive exercises to strengthen your mental well-being",
    icon: Brain,
    color: "bg-blue-50 dark:bg-blue-950",
    iconColor: "text-blue-600 dark:text-blue-400"
  },
  {
    title: "Emotional Balance",
    description: "Learn techniques for managing and understanding your emotions",
    icon: Heart,
    color: "bg-rose-50 dark:bg-rose-950",
    iconColor: "text-rose-600 dark:text-rose-400"
  },
  {
    title: "Holistic Wellness",
    description: "Explore the connection between mental and physical health",
    icon: Leaf,
    color: "bg-green-50 dark:bg-green-950",
    iconColor: "text-green-600 dark:text-green-400"
  }
];

export default function WellnessPage() {
  const [showCamera, setShowCamera] = useState(false);
  const [emotion, setEmotion] = useState('');
  const webcamRef = useRef<Webcam>(null);

  const capture = useCallback(async () => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      // In a real application, you would:
      // 1. Load face-api.js models
      // 2. Process the image
      // 3. Detect emotions
      // For demo purposes, we'll simulate an emotion detection
      const emotions = ['happy', 'neutral', 'sad'];
      const randomEmotion = emotions[Math.floor(Math.random() * emotions.length)];
      setEmotion(randomEmotion);
    }
  }, [webcamRef]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Mental Wellness Resources
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            Explore our comprehensive collection of mental wellness resources designed to help you maintain and improve your mental health.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {wellnessResources.map((resource) => (
            <Card key={resource.title} className={`${resource.color} border-none shadow-lg hover:shadow-xl transition-all duration-300`}>
              <div className="p-6">
                <div className={`w-12 h-12 rounded-lg ${resource.iconColor} bg-white dark:bg-gray-800 flex items-center justify-center mb-4`}>
                  <resource.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {resource.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {resource.description}
                </p>
                <Button 
                  variant="ghost" 
                  className="w-full justify-center bg-white/50 dark:bg-gray-800/50 hover:bg-white/80 dark:hover:bg-gray-800/80"
                  onClick={() => setShowCamera(true)}
                >
                  Learn More
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {showCamera && (
          <Card className="p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Emotion Detection</h2>
            <div className="relative">
              <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                className="w-full rounded-lg"
              />
              <Button 
                className="absolute bottom-4 right-4"
                onClick={capture}
              >
                <Camera className="mr-2 h-4 w-4" />
                Capture
              </Button>
            </div>
            {emotion && (
              <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <p className="text-lg">Detected Emotion: <span className="font-semibold">{emotion}</span></p>
              </div>
            )}
          </Card>
        )}

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Daily Wellness Tips
          </h2>
          <div className="prose dark:prose-invert max-w-none">
            <ul className="space-y-4 text-gray-600 dark:text-gray-300">
              <li>Practice mindful breathing for 5 minutes each day</li>
              <li>Take regular breaks during work to prevent mental fatigue</li>
              <li>Maintain a consistent sleep schedule</li>
              <li>Stay connected with friends and family</li>
              <li>Engage in physical activity to boost mental well-being</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}