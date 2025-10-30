
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
              <Link to="/interest">
                <Button className="bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-black font-semibold px-8 py-3">
                  Express Your Interest
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
