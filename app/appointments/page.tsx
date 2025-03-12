'use client';

import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, VideoIcon, MessageSquare, Clock, Calendar } from "lucide-react";
import Link from "next/link";

const doctors = [
  {
    name: "Dr. Sarah Johnson",
    specialty: "Clinical Psychologist",
    availability: "Mon, Wed, Fri",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300"
  },
  {
    name: "Dr. Michael Chen",
    specialty: "Psychiatrist",
    availability: "Tue, Thu, Sat",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300"
  },
  {
    name: "Dr. Emily Rodriguez",
    specialty: "Therapist",
    availability: "Mon, Thu, Fri",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300"
  }
];

const appointmentTypes = [
  {
    title: "Video Session",
    description: "Connect with your therapist through secure video call",
    icon: VideoIcon,
    color: "bg-blue-50 dark:bg-blue-950",
    iconColor: "text-blue-600 dark:text-blue-400"
  },
  {
    title: "Chat Session",
    description: "Text-based therapy sessions for convenient support",
    icon: MessageSquare,
    color: "bg-green-50 dark:bg-green-950",
    iconColor: "text-green-600 dark:text-green-400"
  },
  {
    title: "Urgent Care",
    description: "Same-day appointments for urgent mental health needs",
    icon: Clock,
    color: "bg-red-50 dark:bg-red-950",
    iconColor: "text-red-600 dark:text-red-400"
  },
  {
    title: "Regular Check-in",
    description: "Scheduled recurring sessions with your therapist",
    icon: Calendar,
    color: "bg-purple-50 dark:bg-purple-950",
    iconColor: "text-purple-600 dark:text-purple-400"
  }
];

export default function AppointmentsPage() {
  const [showDoctors, setShowDoctors] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<string | null>(null);

  const handleBookAppointment = (doctorName: string) => {
    setSelectedDoctor(doctorName);
    // Handle appointment booking logic
    console.log(`Booking appointment with ${doctorName}`);
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
            Schedule Appointments
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            Book and manage your therapy sessions with our licensed professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {appointmentTypes.map((type) => (
            <Card key={type.title} className={`${type.color} border-none shadow-lg hover:shadow-xl transition-all duration-300`}>
              <div className="p-6">
                <div className={`w-12 h-12 rounded-lg ${type.iconColor} bg-white dark:bg-gray-800 flex items-center justify-center mb-4`}>
                  <type.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {type.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {type.description}
                </p>
                <Button 
                  variant="ghost" 
                  className="w-full justify-center bg-white/50 dark:bg-gray-800/50 hover:bg-white/80 dark:hover:bg-gray-800/80"
                  onClick={() => setShowDoctors(true)}
                >
                  Learn More
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {showDoctors && (
          <Card className="p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Available Healthcare Professionals</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {doctors.map((doctor) => (
                <Card key={doctor.name} className="overflow-hidden">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg">{doctor.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{doctor.specialty}</p>
                    <p className="text-sm text-gray-500 mb-4">Available: {doctor.availability}</p>
                    <Button
                      className="w-full"
                      onClick={() => handleBookAppointment(doctor.name)}
                    >
                      Book Appointment
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </Card>
        )}
      </div>
    </main>
  );
}