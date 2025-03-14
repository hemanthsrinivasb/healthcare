'use client';

import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Brain, Clock, Users, Star, Calendar } from "lucide-react";
import Link from "next/link";

const therapyServices = [
  {
    title: "Individual Therapy",
    description: "One-on-one sessions with licensed therapists tailored to your needs",
    icon: Brain,
    color: "bg-blue-50 dark:bg-blue-950",
    iconColor: "text-blue-600 dark:text-blue-400"
  },
  {
    title: "Flexible Scheduling",
    description: "Book sessions at times that work best for your schedule",
    icon: Clock,
    color: "bg-purple-50 dark:bg-purple-950",
    iconColor: "text-purple-600 dark:text-purple-400"
  },
  {
    title: "Group Sessions",
    description: "Join therapeutic group sessions led by experienced professionals",
    icon: Users,
    color: "bg-green-50 dark:bg-green-950",
    iconColor: "text-green-600 dark:text-green-400"
  },
  {
    title: "Specialized Care",
    description: "Access therapists with expertise in specific areas of mental health",
    icon: Star,
    color: "bg-amber-50 dark:bg-amber-950",
    iconColor: "text-amber-600 dark:text-amber-400"
  }
];

export default function TherapyPage() {
  const [showJournal, setShowJournal] = useState(false);
  const [journalEntry, setJournalEntry] = useState('');

  const handleJournalSubmit = () => {
    // Handle journal submission
    console.log('Journal entry:', journalEntry);
    setJournalEntry('');
    setShowJournal(false);
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
            Professional Therapy Services
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            Connect with licensed therapists and counselors for personalized mental health support and guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {therapyServices.map((service) => (
            <Card key={service.title} className={`${service.color} border-none shadow-lg hover:shadow-xl transition-all duration-300`}>
              <div className="p-6">
                <div className={`w-12 h-12 rounded-lg ${service.iconColor} bg-white dark:bg-gray-800 flex items-center justify-center mb-4`}>
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {service.description}
                </p>
                <Button 
                  variant="ghost" 
                  className="w-full justify-center bg-white/50 dark:bg-gray-800/50 hover:bg-white/80 dark:hover:bg-gray-800/80"
                  onClick={() => setShowJournal(true)}
                >
                  Learn More
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {showJournal && (
          <Card className="p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Daily Feelings Journal</h2>
            <Textarea
              placeholder="How are you feeling today? Share your thoughts and emotions..."
              className="min-h-[200px] mb-4"
              value={journalEntry}
              onChange={(e) => setJournalEntry(e.target.value)}
            />
            <div className="flex justify-end space-x-2">
              <Button variant="outline" onClick={() => setShowJournal(false)}>Cancel</Button>
              <Button onClick={handleJournalSubmit}>Save Entry</Button>
            </div>
          </Card>
        )}

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Schedule Your Session
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">How It Works</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>1. Choose your preferred therapist</li>
                <li>2. Select a convenient time slot</li>
                <li>3. Complete a brief intake form</li>
                <li>4. Connect via secure video call</li>
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <Button className="w-full max-w-sm" size="lg">
                <Calendar className="mr-2 h-5 w-5" />
                Book Appointment
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}