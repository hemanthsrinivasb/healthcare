'use client';

import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ArrowLeft, ClipboardCheck, Brain, Activity, BarChart } from "lucide-react";
import Link from "next/link";

const questions = [
  {
    id: 1,
    question: "Over the past 2 weeks, how often have you felt down, depressed, or hopeless?",
    options: [
      { value: "0", label: "Not at all" },
      { value: "1", label: "Several days" },
      { value: "2", label: "More than half the days" },
      { value: "3", label: "Nearly every day" }
    ]
  },
  {
    id: 2,
    question: "How often have you had trouble falling asleep or staying asleep?",
    options: [
      { value: "0", label: "Not at all" },
      { value: "1", label: "Several days" },
      { value: "2", label: "More than half the days" },
      { value: "3", label: "Nearly every day" }
    ]
  },
  {
    id: 3,
    question: "How often have you felt tired or had little energy?",
    options: [
      { value: "0", label: "Not at all" },
      { value: "1", label: "Several days" },
      { value: "2", label: "More than half the days" },
      { value: "3", label: "Nearly every day" }
    ]
  }
];

const assessmentTypes = [
  {
    title: "Mental Health Screening",
    description: "Quick assessment of your current mental health status",
    icon: ClipboardCheck,
    color: "bg-blue-50 dark:bg-blue-950",
    iconColor: "text-blue-600 dark:text-blue-400"
  },
  {
    title: "Anxiety Assessment",
    description: "Evaluate your anxiety levels and symptoms",
    icon: Brain,
    color: "bg-purple-50 dark:bg-purple-950",
    iconColor: "text-purple-600 dark:text-purple-400"
  },
  {
    title: "Depression Screening",
    description: "Assess signs and symptoms of depression",
    icon: Activity,
    color: "bg-rose-50 dark:bg-rose-950",
    iconColor: "text-rose-600 dark:text-rose-400"
  },
  {
    title: "Progress Tracking",
    description: "Monitor your mental health journey over time",
    icon: BarChart,
    color: "bg-emerald-50 dark:bg-emerald-950",
    iconColor: "text-emerald-600 dark:text-emerald-400"
  }
];

export default function AssessmentPage() {
  const [showQuestions, setShowQuestions] = useState(false);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswer = (questionId: number, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const calculateResults = () => {
    const totalScore = Object.values(answers).reduce((sum, value) => sum + parseInt(value), 0);
    setScore(totalScore);
    setShowResults(true);
  };

  const getAssessmentLevel = (score: number) => {
    if (score <= 2) return { level: "Minimal", color: "text-green-600" };
    if (score <= 5) return { level: "Mild", color: "text-yellow-600" };
    if (score <= 7) return { level: "Moderate", color: "text-orange-600" };
    return { level: "Severe", color: "text-red-600" };
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
            Mental Health Assessment
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            Take our professional assessments to better understand your mental health and get personalized recommendations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {assessmentTypes.map((assessment) => (
            <Card key={assessment.title} className={`${assessment.color} border-none shadow-lg hover:shadow-xl transition-all duration-300`}>
              <div className="p-6">
                <div className={`w-12 h-12 rounded-lg ${assessment.iconColor} bg-white dark:bg-gray-800 flex items-center justify-center mb-4`}>
                  <assessment.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {assessment.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {assessment.description}
                </p>
                <Button 
                  variant="ghost" 
                  className="w-full justify-center bg-white/50 dark:bg-gray-800/50 hover:bg-white/80 dark:hover:bg-gray-800/80"
                  onClick={() => setShowQuestions(true)}
                >
                  Start Assessment
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {showQuestions && !showResults && (
          <Card className="p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Mental Health Assessment</h2>
            <div className="space-y-8">
              {questions.map((q) => (
                <div key={q.id} className="space-y-4">
                  <h3 className="text-lg font-medium">{q.question}</h3>
                  <RadioGroup
                    value={answers[q.id]}
                    onValueChange={(value) => handleAnswer(q.id, value)}
                  >
                    {q.options.map((option) => (
                      <div key={option.value} className="flex items-center space-x-2">
                        <RadioGroupItem value={option.value} id={`q${q.id}-${option.value}`} />
                        <Label htmlFor={`q${q.id}-${option.value}`}>{option.label}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              ))}
              <Button
                className="w-full mt-6"
                onClick={calculateResults}
                disabled={Object.keys(answers).length !== questions.length}
              >
                Submit Assessment
              </Button>
            </div>
          </Card>
        )}

        {showResults && (
          <Card className="p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Assessment Results</h2>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <p className="text-lg">
                  Severity Level:{" "}
                  <span className={getAssessmentLevel(score).color}>
                    {getAssessmentLevel(score).level}
                  </span>
                </p>
                <p className="mt-2">Total Score: {score} out of {questions.length * 3}</p>
              </div>
              <div className="mt-6">
                <h3 className="font-semibold mb-2">Recommendations:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Consider scheduling a consultation with a mental health professional</li>
                  <li>Practice daily self-care and stress management techniques</li>
                  <li>Maintain a regular sleep schedule and exercise routine</li>
                  <li>Stay connected with supportive friends and family</li>
                </ul>
              </div>
              <Button
                className="w-full mt-6"
                onClick={() => {
                  setShowResults(false);
                  setShowQuestions(false);
                  setAnswers({});
                }}
              >
                Take Another Assessment
              </Button>
            </div>
          </Card>
        )}
      </div>
    </main>
  );
}