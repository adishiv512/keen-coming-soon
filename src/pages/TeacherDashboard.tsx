
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ClassCard from '../components/Dashboard/ClassCard';

const TeacherDashboard = () => {
  // Mock data - in a real app, this would come from an API
  const classes = [
    { id: '1', name: 'Algebra Fundamentals', students: 24, subject: 'Math' },
    { id: '2', name: 'Pre-Algebra', students: 18, subject: 'Math' },
    { id: '3', name: 'Advanced Mathematics', students: 15, subject: 'Math' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-keen-dark text-white py-4">
        <div className="keen-container flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-bold">Keen</h1>
            <span className="bg-keen-light px-3 py-1 rounded-full text-sm">Teacher</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-white hover:bg-white/10">
              <span className="mr-2">👨‍🏫</span> Mr. Davis
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              Logout
            </Button>
          </div>
        </div>
      </header>
      
      <main className="keen-container py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2 text-keen-dark">Welcome, Mr. Davis!</h2>
          <p className="text-gray-600">Manage your classes and create AI avatars to assist your students.</p>
        </div>
        
        <Tabs defaultValue="classes" className="space-y-8">
          <TabsList className="bg-white border border-gray-200">
            <TabsTrigger value="classes">My Classes</TabsTrigger>
            <TabsTrigger value="avatars">AI Avatars</TabsTrigger>
            <TabsTrigger value="analytics">Student Analytics</TabsTrigger>
          </TabsList>
          
          <TabsContent value="classes" className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-keen-dark">Your Classes</h3>
              <Button className="bg-keen-dark hover:bg-keen-medium">
                Create New Class
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {classes.map((classItem) => (
                <ClassCard
                  key={classItem.id}
                  id={classItem.id}
                  name={classItem.name}
                  students={classItem.students}
                  subject={classItem.subject}
                  teacher=""
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="avatars" className="space-y-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-keen-dark">Your AI Avatars</h3>
              <Button className="bg-keen-dark hover:bg-keen-medium">
                Create New Avatar
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
                <div className="flex justify-center mb-4">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-b from-keen-medium to-keen-dark p-1">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                      <span className="text-keen-dark text-xl font-bold">MD</span>
                    </div>
                  </div>
                </div>
                <h4 className="text-center text-lg font-medium mb-1">Math Tutor</h4>
                <p className="text-center text-sm text-gray-500 mb-4">Created on May 10, 2023</p>
                <div className="flex justify-center">
                  <Button variant="outline" className="border-keen-dark text-keen-dark hover:bg-keen-dark hover:text-white">
                    Edit Avatar
                  </Button>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow border border-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl text-gray-400">+</span>
                  </div>
                  <p className="text-keen-dark font-medium">Create New Avatar</p>
                  <p className="text-sm text-gray-500 mt-1">Record video to create your AI tutor</p>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="analytics" className="space-y-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-keen-dark">Student Performance</h3>
              <Button variant="outline" className="border-keen-dark text-keen-dark hover:bg-keen-dark hover:text-white">
                Export Report
              </Button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
              <h4 className="font-medium mb-4">Class Performance Overview</h4>
              <div className="h-64 flex items-center justify-center bg-gray-50 rounded border border-gray-200">
                <p className="text-gray-500">Analytics data visualization will appear here</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default TeacherDashboard;
