
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BookOpen, User } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-keen-dark text-white py-4">
      <div className="keen-container flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <BookOpen className="h-6 w-6" />
          <Link to="/" className="text-xl font-bold">Keen</Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/about" className="hover:text-keen-accent">About</Link>
          <Link to="/features" className="hover:text-keen-accent">Features</Link>
          <Link to="/pricing" className="hover:text-keen-accent">Pricing</Link>
          <Link to="/login">
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-keen-dark">
              <User className="mr-2 h-4 w-4" />
              Log In
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
