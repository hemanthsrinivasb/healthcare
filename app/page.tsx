'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Heart, Users, BookOpen, Headphones, Calendar, Clipboard, Activity } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Therapy Sessions",
    description: "Connect with licensed therapists for one-on-one counseling sessions",
    icon: Brain,
    href: "/therapy",
    color: "bg-blue-50 dark:bg-blue-950",
    iconColor: "text-blue-600 dark:text-blue-400"
  },
  {
    title: "Mental Wellness",
    description: "Explore techniques and resources for maintaining mental well-being",
    icon: Heart,
    href: "/wellness",
    color: "bg-rose-50 dark:bg-rose-950",
    iconColor: "text-rose-600 dark:text-rose-400"
  },
  {
    title: "Support Groups",
    description: "Join community support groups and share experiences",
    icon: Users,
    href: "/groups",
    color: "bg-green-50 dark:bg-green-950",
    iconColor: "text-green-600 dark:text-green-400"
  },
  {
    title: "Resources",
    description: "Access educational materials and self-help guides",
    icon: BookOpen,
    href: "/resources",
    color: "bg-purple-50 dark:bg-purple-950",
    iconColor: "text-purple-600 dark:text-purple-400"
  },
  {
    title: "Crisis Support",
    description: "24/7 emergency support and crisis intervention",
    icon: Headphones,
    href: "/crisis",
    color: "bg-red-50 dark:bg-red-950",
    iconColor: "text-red-600 dark:text-red-400"
  },
  {
    title: "Appointments",
    description: "Schedule and manage your therapy appointments",
    icon: Calendar,
    href: "/appointments",
    color: "bg-amber-50 dark:bg-amber-950",
    iconColor: "text-amber-600 dark:text-amber-400"
  },
  {
    title: "Assessment",
    description: "Take mental health assessments and track your progress",
    icon: Clipboard,
    href: "/assessment",
    color: "bg-teal-50 dark:bg-teal-950",
    iconColor: "text-teal-600 dark:text-teal-400"
  },
  {
    title: "Wellness Tracking",
    description: "Monitor your mental health journey and progress",
    icon: Activity,
    href: "/tracking",
    color: "bg-indigo-50 dark:bg-indigo-950",
    iconColor: "text-indigo-600 dark:text-indigo-400"
  }
];

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in (implement proper auth check)
    const isLoggedIn = false; // Replace with actual auth check
    if (!isLoggedIn) {
      router.push('/login');
    }
  }, [router]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl md:text-6xl mb-6">
            Your Mental Health Matters
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Access professional mental health services, resources, and support from the comfort of your home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service) => (
            <Link href={service.href} key={service.title} className="transform transition-all duration-300 hover:scale-105">
              <Card className={`h-full ${service.color} border-none shadow-lg hover:shadow-xl transition-shadow duration-300`}>
                <div className="p-6">
                  <div className={`w-12 h-12 rounded-lg ${service.iconColor} bg-white dark:bg-gray-800 flex items-center justify-center mb-4`}>
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {service.description}
                  </p>
                  <Button 
                    variant="ghost" 
                    className="mt-4 w-full justify-center bg-white/50 dark:bg-gray-800/50 hover:bg-white/80 dark:hover:bg-gray-800/80"
                  >
                    Learn More
                  </Button>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}