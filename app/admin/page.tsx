'use client';

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Users, Activity, Calendar, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link href="/login">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </Link>
          
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Admin Dashboard
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Monitor and manage user activities and system operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6">
            <div className="flex items-center mb-4">
              <Users className="h-6 w-6 text-blue-600 mr-2" />
              <h2 className="text-xl font-semibold">User Management</h2>
            </div>
            <div className="space-y-2">
              <p>Total Users: 150</p>
              <p>Active Sessions: 25</p>
              <p>New Registrations Today: 5</p>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center mb-4">
              <Activity className="h-6 w-6 text-green-600 mr-2" />
              <h2 className="text-xl font-semibold">Activity Monitoring</h2>
            </div>
            <div className="space-y-2">
              <p>Therapy Sessions Today: 30</p>
              <p>Support Group Meetings: 8</p>
              <p>Crisis Interventions: 3</p>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center mb-4">
              <Calendar className="h-6 w-6 text-purple-600 mr-2" />
              <h2 className="text-xl font-semibold">Appointment Overview</h2>
            </div>
            <div className="space-y-2">
              <p>Scheduled Appointments: 45</p>
              <p>Completed Today: 12</p>
              <p>Pending Confirmations: 8</p>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center mb-4">
              <MessageSquare className="h-6 w-6 text-red-600 mr-2" />
              <h2 className="text-xl font-semibold">Support Requests</h2>
            </div>
            <div className="space-y-2">
              <p>Open Tickets: 15</p>
              <p>Resolved Today: 10</p>
              <p>Urgent Cases: 2</p>
            </div>
          </Card>
        </div>

        <div className="mt-8">
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Recent User Activities</h2>
            <div className="space-y-4">
              <div className="border-b pb-2">
                <p className="font-medium">User completed mental health assessment</p>
                <p className="text-sm text-gray-600">2 minutes ago</p>
              </div>
              <div className="border-b pb-2">
                <p className="font-medium">New appointment scheduled</p>
                <p className="text-sm text-gray-600">15 minutes ago</p>
              </div>
              <div className="border-b pb-2">
                <p className="font-medium">Support group session ended</p>
                <p className="text-sm text-gray-600">1 hour ago</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
}