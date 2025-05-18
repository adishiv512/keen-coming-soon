
import React from 'react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Hero from '../components/Hero/Hero';
import Features from '../components/Features/Features';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        
        {/* Testimonial Section */}
        <section className="py-16 bg-white">
          <div className="keen-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold keen-heading mb-4">
                Loved by students and teachers
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                See what our users are saying about their experience with Keen.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="keen-card">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-keen-medium text-white flex items-center justify-center mr-3">
                    <span className="font-bold">S</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Sarah Johnson</h4>
                    <p className="text-sm text-gray-500">8th Grade Student</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "The AI tutor helped me understand algebra when I was struggling. It's like having a personal teacher available 24/7!"
                </p>
              </div>
              
              <div className="keen-card">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-keen-dark text-white flex items-center justify-center mr-3">
                    <span className="font-bold">M</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Mr. Davis</h4>
                    <p className="text-sm text-gray-500">Math Teacher</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "Creating my AI avatar was surprisingly easy. My students can now get help even when I'm not available to answer questions."
                </p>
              </div>
              
              <div className="keen-card">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-keen-medium text-white flex items-center justify-center mr-3">
                    <span className="font-bold">J</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Jack Williams</h4>
                    <p className="text-sm text-gray-500">Parent</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "My daughter's confidence in math has improved so much since using Keen. The personalized approach really makes a difference."
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-keen-dark text-white">
          <div className="keen-container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to transform your learning experience?
            </h2>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-8">
              Join thousands of students and teachers already using Keen to enhance education with AI.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-white text-keen-dark hover:bg-keen-gray hover:text-keen-dark px-8 py-2 text-lg">
                Get Started
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-2 text-lg">
                Learn More
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

const Button = ({ children, className, variant }: any) => {
  return (
    <button
      className={`rounded-md font-medium ${
        variant === 'outline'
          ? 'bg-transparent border border-current'
          : ''
      } ${className}`}
    >
      {children}
    </button>
  );
};

export default Index;
