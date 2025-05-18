
import React from 'react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />
      <main className="flex-1 keen-container py-16">
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-3xl font-bold mb-8">About</h1>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
