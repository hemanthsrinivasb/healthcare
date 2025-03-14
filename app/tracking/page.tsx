'use client';

import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, LineChart, Calendar, Brain, Clipboard } from "lucide-react";
import Link from "next/link";

type HealthMetric = {
  name: string;
  value: string;
  unit: string;
  normal: string;
};

const healthMetrics: HealthMetric[] = [
  { name: "Blood Pressure", value: "", unit: "mmHg", normal: "120/80" },
  { name: "Heart Rate", value: "", unit: "bpm", normal: "60-100" },
  { name: "Blood Sugar", value: "", unit: "mg/dL", normal: "70-100" },
  { name: "Cholesterol", value: "", unit: "mg/dL", normal: "<200" }
];

const trackingFeatures = [
  {
    title: "Mood Tracking",
    description: "Monitor your daily mood patterns and emotional well-being",
    icon: LineChart,
    color: "bg-blue-50 dark:bg-blue-950",
    iconColor: "text-blue-600 dark:text-blue-400"
  },
  {
    title: "Activity Log",
    description: "Record daily activities and their impact on your mental health",
    icon: Calendar,
    color: "bg-green-50 dark:bg-green-950",
    iconColor: "text-green-600 dark:text-green-400"
  },
  {
    title: "Symptom Journal",
    description: "Track symptoms and identify patterns over time",
    icon: Brain,
    color: "bg-purple-50 dark:bg-purple-950",
    iconColor: "text-purple-600 dark:text-purple-400"
  },
  {
    title: "Progress Notes",
    description: "Document your therapy progress and personal insights",
    icon: Clipboard,
    color: "bg-amber-50 dark:bg-amber-950",
    iconColor: "text-amber-600 dark:text-amber-400"
  }
];

export default function TrackingPage() {
  const [showHealthCheck, setShowHealthCheck] = useState(false);
  const [metrics, setMetrics] = useState<HealthMetric[]>(healthMetrics);
  const [showResults, setShowResults] = useState(false);

  const handleMetricChange = (index: number, value: string) => {
    const newMetrics = [...metrics];
    newMetrics[index] = { ...newMetrics[index], value };
    setMetrics(newMetrics);
  };

  const handleSubmit = () => {
    setShowResults(true);
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
            Wellness Tracking
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            Monitor your mental health journey and track your progress over time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {trackingFeatures.map((feature) => (
            <Card key={feature.title} className={`${feature.color} border-none shadow-lg hover:shadow-xl transition-all duration-300`}>
              <div className="p-6">
                <div className={`w-12 h-12 rounded-lg ${feature.iconColor} bg-white dark:bg-gray-800 flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {feature.description}
                </p>
                <Button 
                  variant="ghost" 
                  className="w-full justify-center bg-white/50 dark:bg-gray-800/50 hover:bg-white/80 dark:hover:bg-gray-800/80"
                  onClick={() => setShowHealthCheck(true)}
                >
                  Learn More
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {showHealthCheck && (
          <Card className="p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Health Metrics Check</h2>
            <div className="space-y-6">
              {metrics.map((metric, index) => (
                <div key={metric.name} className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                  <div>
                    <label className="text-sm font-medium">{metric.name}</label>
                    <p className="text-sm text-gray-500">Normal range: {metric.normal}</p>
                  </div>
                  <Input
                    type="text"
                    placeholder={`Enter ${metric.name.toLowerCase()}`}
                    value={metric.value}
                    onChange={(e) => handleMetricChange(index, e.target.value)}
                  />
                  <span className="text-sm text-gray-500">{metric.unit}</span>
                </div>
              ))}
              <Button
                className="w-full mt-6"
                onClick={handleSubmit}
                disabled={metrics.some(m => !m.value)}
              >
                Submit Health Check
              </Button>
            </div>

            {showResults && (
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Results Summary</h3>
                <div className="space-y-4">
                  {metrics.map((metric) => (
                    <div key={metric.name} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{metric.name}</span>
                        <span className="text-lg">
                          {metric.value} {metric.unit}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        Normal range: {metric.normal}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </Card>
        )}
      </div>
    </main>
  );
}