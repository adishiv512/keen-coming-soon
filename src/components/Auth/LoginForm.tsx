
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState<'student' | 'teacher'>('student');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password, userType });
    // Authentication would be implemented here
  };

  return (
    <Card className="w-full max-w-md mx-auto shadow-lg">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center">Sign in to Keen</CardTitle>
        <CardDescription className="text-center">
          Enter your email and password to access your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="example@school.edu"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label>I am a:</Label>
            <div className="grid grid-cols-2 gap-4">
              <Button
                type="button"
                variant={userType === 'student' ? 'default' : 'outline'}
                className={userType === 'student' ? 'bg-keen-dark' : ''}
                onClick={() => setUserType('student')}
              >
                Student
              </Button>
              <Button
                type="button"
                variant={userType === 'teacher' ? 'default' : 'outline'}
                className={userType === 'teacher' ? 'bg-keen-dark' : ''}
                onClick={() => setUserType('teacher')}
              >
                Teacher
              </Button>
            </div>
          </div>
          
          <div className="pt-2">
            <Button type="submit" className="w-full bg-keen-dark hover:bg-keen-medium">
              Sign In
            </Button>
          </div>
        </form>
        
        <div className="mt-4 text-center text-sm">
          <Link to="/forgot-password" className="text-keen-medium hover:underline">
            Forgot password?
          </Link>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col space-y-2">
        <div className="text-center text-sm">
          Don't have an account?{' '}
          <Link to="/signup" className="text-keen-medium hover:underline">
            Create one
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default LoginForm;
