
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-keen-dark to-keen-medium text-white py-20">
      <div className="keen-container flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0">
        <div className="md:w-1/2 space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Learn with <span className="text-keen-accent">AI-powered</span> education
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-lg">
            Personalized learning with AI avatars that understand how you learn. Connect with teachers and get help exactly when you need it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/signup">
              <Button className="bg-white text-keen-dark hover:bg-keen-gray hover:text-keen-dark w-full sm:w-auto">
                Get Started
              </Button>
            </Link>
            <Link to="/demo">
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 w-full sm:w-auto">
                Watch Demo
              </Button>
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md">
            <div className="keen-card bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <div className="avatar-container w-12 h-12 flex items-center justify-center">
                  <div className="avatar-pulse"></div>
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                    <span className="text-keen-dark font-bold text-lg">A</span>
                  </div>
                </div>
                <div className="text-sm font-medium text-white">AI Tutor</div>
              </div>
              <div className="space-y-3">
                <div className="bg-white/20 rounded-lg p-3 animate-pulse-subtle">
                  <p className="text-sm">How do I solve for x in the equation 2x + 5 = 13?</p>
                </div>
                <div className="bg-keen-light rounded-lg p-3">
                  <p className="text-sm">To solve for x, we need to isolate it. First, subtract 5 from both sides:</p>
                  <p className="text-sm font-semibold mt-1">2x + 5 - 5 = 13 - 5</p>
                  <p className="text-sm font-semibold">2x = 8</p>
                  <p className="text-sm mt-1">Then divide both sides by 2:</p>
                  <p className="text-sm font-semibold">x = 4</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 z-[-1] w-full h-full rounded-2xl bg-keen-accent/20 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
