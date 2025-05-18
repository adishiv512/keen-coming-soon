
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="keen-container flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 space-y-6 animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            AI Education
          </h1>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/signup">
              <Button className="bg-black text-white border border-white/20 hover:bg-white/10 w-full sm:w-auto">
                Start
              </Button>
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md">
            <div className="keen-card bg-black/50 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
              <div className="avatar-container w-12 h-12 flex items-center justify-center mb-4">
                <div className="avatar-pulse"></div>
                <div className="w-10 h-10 rounded-full bg-black border border-white/50 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 z-[-1] w-full h-full rounded-2xl bg-white/5 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
