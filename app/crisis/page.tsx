'use client';

import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Phone, MessageSquare, Clock, Shield, Send } from "lucide-react";
import Link from "next/link";

const crisisServices = [
  {
    title: "24/7 Crisis Hotline",
    description: "Immediate support available anytime, day or night",
    icon: Phone,
    color: "bg-red-50 dark:bg-red-950",
    iconColor: "text-red-600 dark:text-red-400"
  },
  {
    title: "Crisis Chat",
    description: "Text-based support for those who prefer writing",
    icon: MessageSquare,
    color: "bg-blue-50 dark:bg-blue-950",
    iconColor: "text-blue-600 dark:text-blue-400"
  },
  {
    title: "Emergency Response",
    description: "Rapid response team for urgent situations",
    icon: Clock,
    color: "bg-amber-50 dark:bg-amber-950",
    iconColor: "text-amber-600 dark:text-amber-400"
  },
  {
    title: "Safe Space",
    description: "Secure environment for immediate support",
    icon: Shield,
    color: "bg-emerald-50 dark:bg-emerald-950",
    iconColor: "text-emerald-600 dark:text-emerald-400"
  }
];

type Message = {
  text: string;
  sender: 'user' | 'bot';
};

const initialMessages: Message[] = [
  { text: "Hello! I'm here to help. How are you feeling today?", sender: 'bot' }
];

export default function CrisisPage() {
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { text: newMessage, sender: 'user' }]);

    // Simulate bot response
    setTimeout(() => {
      const botResponses = [
        "I understand how you're feeling. Would you like to talk more about it?",
        "You're not alone in this. I'm here to listen and help.",
        "Thank you for sharing. How can I support you right now?",
        "That sounds challenging. Let's work through this together."
      ];
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      setMessages(prev => [...prev, { text: randomResponse, sender: 'bot' }]);
    }, 1000);

    setNewMessage('');
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
          
          <div className="bg-red-100 dark:bg-red-900 p-4 rounded-lg mb-6">
            <h2 className="text-lg font-semibold text-red-800 dark:text-red-200">
              If you're in immediate danger, call emergency services: 911
            </h2>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Crisis Support
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            Immediate support and resources for those in crisis. You're not alone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {crisisServices.map((service) => (
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
                  onClick={() => setShowChat(true)}
                >
                  Learn More
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {showChat && (
          <Card className="p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Crisis Support Chat</h2>
            <div className="h-96 flex flex-col">
              <div className="flex-1 overflow-y-auto mb-4 space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${
                        message.sender === 'user'
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-100 dark:bg-gray-800'
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex space-x-2">
                <Input
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type your message..."
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <Button onClick={handleSendMessage}>
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        )}
      </div>
    </main>
  );
}