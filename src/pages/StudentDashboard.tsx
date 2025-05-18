
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ClassCard from '../components/Dashboard/ClassCard';
import MathProblem from '../components/Math/MathProblem';

const StudentDashboard = () => {
  // Mock data - in a real app, this would come from an API
  const classes = [
    { id: '1', name: 'Algebra Fundamentals', teacher: 'Mrs. Smith', subject: 'Math' },
    { id: '2', name: 'Pre-Algebra', teacher: 'Mr. Johnson', subject: 'Math' },
    { id: '3', name: 'Science Basics', teacher: 'Dr. Williams', subject: 'Science' },
  ];
  
  const recentProblems = [
    {
      id: '1',
      question: 'Solve for x: 3x + 5 = 20',
      solution: 'First, subtract 5 from both sides: 3x = 15. Then, divide both sides by 3: x = 5.',
      answer: '5',
      explanation: 'We isolate the variable by performing inverse operations.'
    },
    {
      id: '2',
      question: 'If a rectangle has a length of 8 units and a width of 6 units, what is its area?',
      solution: 'Area = length × width = 8 × 6 = 48 square units',
      answer: '48',
      explanation: 'The area of a rectangle is calculated by multiplying its length by its width.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-keen-dark text-white py-4">
        <div className="keen-container flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-bold">Keen</h1>
            <span className="bg-keen-medium px-3 py-1 rounded-full text-sm">Student</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-white hover:bg-white/10">
              <span className="mr-2">👋</span> Alex Johnson
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              Logout
            </Button>
          </div>
        </div>
      </header>
      
      <main className="keen-container py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2 text-keen-dark">Welcome back, Alex!</h2>
          <p className="text-gray-600">Ready to continue learning? Here's what's happening in your classes.</p>
        </div>
        
        <Tabs defaultValue="classes" className="space-y-8">
          <TabsList className="bg-white border border-gray-200">
            <TabsTrigger value="classes">My Classes</TabsTrigger>
            <TabsTrigger value="problems">Practice Problems</TabsTrigger>
            <TabsTrigger value="chat">AI Tutor</TabsTrigger>
          </TabsList>
          
          <TabsContent value="classes" className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-keen-dark">Your Classes</h3>
              <Button variant="outline" className="border-keen-dark text-keen-dark hover:bg-keen-dark hover:text-white">
                Join New Class
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {classes.map((classItem) => (
                <ClassCard
                  key={classItem.id}
                  id={classItem.id}
                  name={classItem.name}
                  teacher={classItem.teacher}
                  subject={classItem.subject}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="problems" className="space-y-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-keen-dark">Math Practice</h3>
              <Button className="bg-keen-dark hover:bg-keen-medium">
                New Problem Set
              </Button>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              {recentProblems.map((problem) => (
                <MathProblem
                  key={problem.id}
                  id={problem.id}
                  question={problem.question}
                  solution={problem.solution}
                  answer={problem.answer}
                  explanation={problem.explanation}
                />
              ))}
            </div>
            
            <div className="text-center pt-4">
              <Link to="/problems">
                <Button variant="link" className="text-keen-medium">
                  View All Practice Problems
                </Button>
              </Link>
            </div>
          </TabsContent>
          
          <TabsContent value="chat" className="space-y-6">
            <div className="bg-white shadow rounded-lg overflow-hidden" style={{ height: '500px' }}>
              <iframe 
                title="AI Tutor Chat"
                src="/ai-chat"
                className="w-full h-full border-none"
              />
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default StudentDashboard;
