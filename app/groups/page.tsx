'use client';

import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, Users, Heart, MessageCircle, Calendar, Shield } from "lucide-react";
import Link from "next/link";

const medications = [
  {
    name: "Sertraline",
    description: "Antidepressant medication - Take with food",
    timing: "Morning, 8:00 AM"
  },
  {
    name: "Alprazolam",
    description: "Anti-anxiety medication - Take as needed",
    timing: "As needed"
  },
  {
    name: "Trazodone",
    description: "Sleep aid - Take before bedtime",
    timing: "Night, 10:00 PM"
  }
];

const supportGroups = [
  {
    title: "Anxiety Support",
    description: "Connect with others managing anxiety and share coping strategies",
    icon: Heart,
    color: "bg-blue-50 dark:bg-blue-950",
    iconColor: "text-blue-600 dark:text-blue-400"
  },
  {
    title: "Depression Support",
    description: "Find understanding and hope in our depression support community",
    icon: Users,
    color: "bg-purple-50 dark:bg-purple-950",
    iconColor: "text-purple-600 dark:text-purple-400"
  },
  {
    title: "Grief & Loss",
    description: "Share experiences and find comfort in our grief support group",
    icon: MessageCircle,
    color: "bg-rose-50 dark:bg-rose-950",
    iconColor: "text-rose-600 dark:text-rose-400"
  },
  {
    title: "PTSD Recovery",
    description: "A safe space for individuals dealing with trauma and PTSD",
    icon: Shield,
    color: "bg-emerald-50 dark:bg-emerald-950",
    iconColor: "text-emerald-600 dark:text-emerald-400"
  }
];

export default function GroupsPage() {
  const [showMedications, setShowMedications] = useState(false);
  const [takenMedications, setTakenMedications] = useState<string[]>([]);

  const toggleMedication = (medicationName: string) => {
    setTakenMedications(prev => 
      prev.includes(medicationName)
        ? prev.filter(name => name !== medicationName)
        : [...prev, medicationName]
    );
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
            Support Groups
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            Join our supportive communities where you can connect with others who understand your journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {supportGroups.map((group) => (
            <Card key={group.title} className={`${group.color} border-none shadow-lg hover:shadow-xl transition-all duration-300`}>
              <div className="p-6">
                <div className={`w-12 h-12 rounded-lg ${group.iconColor} bg-white dark:bg-gray-800 flex items-center justify-center mb-4`}>
                  <group.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {group.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {group.description}
                </p>
                <Button 
                  variant="ghost" 
                  className="w-full justify-center bg-white/50 dark:bg-gray-800/50 hover:bg-white/80 dark:hover:bg-gray-800/80"
                  onClick={() => setShowMedications(true)}
                >
                  Learn More
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {showMedications && (
          <Card className="p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Daily Medication Tracker</h2>
            <div className="space-y-4">
              {medications.map((medication) => (
                <div key={medication.name} className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <Checkbox
                    checked={takenMedications.includes(medication.name)}
                    onCheckedChange={() => toggleMedication(medication.name)}
                  />
                  <div>
                    <h3 className="font-medium">{medication.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{medication.description}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">{medication.timing}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        )}

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Upcoming Group Sessions
          </h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Anxiety Support Group</h3>
                  <p className="text-gray-600 dark:text-gray-300">Thursday, 7:00 PM EST</p>
                </div>
                <Button>
                  <Calendar className="mr-2 h-4 w-4" />
                  Register
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}