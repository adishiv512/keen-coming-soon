
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface ClassCardProps {
  id: string;
  name: string;
  teacher: string;
  subject: string;
  students?: number;
  avatarUrl?: string;
}

const ClassCard: React.FC<ClassCardProps> = ({
  id,
  name,
  teacher,
  subject,
  students,
  avatarUrl
}) => {
  const isTeacher = students !== undefined;
  
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-24 bg-gradient-to-r from-keen-dark to-keen-medium relative">
        <div className="absolute inset-0 opacity-70 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="absolute top-4 left-4 text-white font-bold text-lg">{subject}</div>
      </div>
      <CardHeader className="pt-4 pb-2">
        <CardTitle className="text-lg">{name}</CardTitle>
      </CardHeader>
      <CardContent className="pb-2">
        <p className="text-sm text-gray-500">
          {isTeacher ? `${students} students enrolled` : `Teacher: ${teacher}`}
        </p>
      </CardContent>
      <CardFooter>
        <Link to={`/class/${id}`} className="w-full">
          <Button variant="outline" className="w-full border-keen-dark text-keen-dark hover:bg-keen-dark hover:text-white">
            {isTeacher ? "Manage Class" : "Enter Class"}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ClassCard;
