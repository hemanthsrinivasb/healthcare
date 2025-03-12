'use client';

import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, Video, FileText, Download, Play, Pause } from "lucide-react";
import Link from "next/link";

const teluguSongs = [
  {
    title: "Nuvvostanante Nenoddantana",
    artist: "S.P. Balasubrahmanyam",
    url: "https://example.com/song1.mp3"
  },
  {
    title: "Jagadananda Karaka",
    artist: "Ghantasala",
    url: "https://example.com/song2.mp3"
  },
  {
    title: "Suvvi Suvvi",
    artist: "P. Susheela",
    url: "https://example.com/song3.mp3"
  }
];

const educationalResources = [
  {
    title: "Self-Help Guides",
    description: "Comprehensive guides on various mental health topics",
    icon: BookOpen,
    color: "bg-blue-50 dark:bg-blue-950",
    iconColor: "text-blue-600 dark:text-blue-400"
  },
  {
    title: "Video Library",
    description: "Educational videos from mental health professionals",
    icon: Video,
    color: "bg-purple-50 dark:bg-purple-950",
    iconColor: "text-purple-600 dark:text-purple-400"
  },
  {
    title: "Research Articles",
    description: "Latest research and findings in mental health",
    icon: FileText,
    color: "bg-emerald-50 dark:bg-emerald-950",
    iconColor: "text-emerald-600 dark:text-emerald-400"
  },
  {
    title: "Downloadable Tools",
    description: "Worksheets and tools for mental health management",
    icon: Download,
    color: "bg-amber-50 dark:bg-amber-950",
    iconColor: "text-amber-600 dark:text-amber-400"
  }
];

export default function ResourcesPage() {
  const [showMusicPlayer, setShowMusicPlayer] = useState(false);
  const [currentSong, setCurrentSong] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = (index: number) => {
    if (currentSong === index) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentSong(index);
      setIsPlaying(true);
    }
  };

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
            Educational Resources
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            Access our library of mental health resources, tools, and educational materials.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {educationalResources.map((resource) => (
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
                  onClick={() => setShowMusicPlayer(true)}
                >
                  Learn More
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {showMusicPlayer && (
          <Card className="p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Telugu Classical Songs</h2>
            <div className="space-y-4">
              {teluguSongs.map((song, index) => (
                <div key={song.title} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <div>
                    <h3 className="font-medium">{song.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{song.artist}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => togglePlay(index)}
                  >
                    {currentSong === index && isPlaying ? (
                      <Pause className="h-6 w-6" />
                    ) : (
                      <Play className="h-6 w-6" />
                    )}
                  </Button>
                </div>
              ))}
            </div>
          </Card>
        )}
      </div>
    </main>
  );
}