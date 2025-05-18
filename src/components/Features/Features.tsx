
import React from 'react';
import FeatureCard from './FeatureCard';
import { BookOpen, MessageCircle, Users, Graduation } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="keen-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold keen-heading mb-4">
            Designed for modern learning
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Keen combines AI technology with personalized education to create a learning experience that adapts to each student's needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<BookOpen className="h-6 w-6" />}
            title="AI Tutoring"
            description="Get instant help from AI tutors that can explain concepts, solve problems, and answer questions."
          />
          
          <FeatureCard
            icon={<MessageCircle className="h-6 w-6" />}
            title="Live Chat"
            description="Connect with your teachers and AI tutors through voice or text chat for immediate support."
          />
          
          <FeatureCard
            icon={<Users className="h-6 w-6" />}
            title="Virtual Classrooms"
            description="Join interactive classes with your peers and receive personalized instruction."
          />
          
          <FeatureCard
            icon={<Graduation className="h-6 w-6" />}
            title="Custom AI Avatars"
            description="Teachers can create personalized AI avatars that match their teaching style."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
