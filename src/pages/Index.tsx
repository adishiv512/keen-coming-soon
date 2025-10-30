
import React from 'react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Hero from '../components/Hero/Hero';
import Features from '../components/Features/Features';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        
        <section className="py-16 bg-black text-white">
          <div className="keen-container text-center">
            <div className="flex justify-center gap-4">
              <Link to="/signup">
                <Button className="bg-black border border-white/20 text-white hover:bg-white/10 px-8 py-2">
                  Join
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
