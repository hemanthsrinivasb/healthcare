'use client';

import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from 'next/navigation';
import { Brain } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [credentials, setCredentials] = useState({ email: '', password: '', confirmPassword: '' });
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isLogin && credentials.password !== credentials.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    // Simple admin check - in production, use proper authentication
    if (credentials.email === 'admin@mindfulcare.com' && credentials.password === 'admin123') {
      router.push('/admin');
    } else {
      // For regular users
      router.push('/');
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="w-full max-w-md p-8">
          <motion.div 
            className="flex items-center justify-center mb-8"
            whileHover={{ scale: 1.05 }}
          >
            <Brain className="h-12 w-12 text-blue-600 dark:text-blue-400" />
            <h1 className="text-3xl font-bold ml-2">MindfulCare</h1>
          </motion.div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <Input
                type="email"
                value={credentials.email}
                onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                required
                className="transition-all duration-200 focus:scale-[1.02]"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <Input
                type="password"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                required
                className="transition-all duration-200 focus:scale-[1.02]"
              />
            </div>

            {!isLogin && (
              <div>
                <label className="block text-sm font-medium mb-2">Confirm Password</label>
                <Input
                  type="password"
                  value={credentials.confirmPassword}
                  onChange={(e) => setCredentials({ ...credentials, confirmPassword: e.target.value })}
                  required
                  className="transition-all duration-200 focus:scale-[1.02]"
                />
              </div>
            )}
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button type="submit" className="w-full">
                {isLogin ? 'Login' : 'Sign Up'}
              </Button>
            </motion.div>

            <p className="text-center text-sm text-gray-600 dark:text-gray-400">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                {isLogin ? 'Sign Up' : 'Login'}
              </button>
            </p>
          </form>
        </Card>
      </motion.div>
    </main>
  );
}