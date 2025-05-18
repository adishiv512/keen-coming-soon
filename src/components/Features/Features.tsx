
import React from 'react';
import FeatureCard from './FeatureCard';
import { BookOpen, MessageCircle, Users, GraduationCap } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section className="py-16 bg-keen-black">
      <div className="keen-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold keen-heading mb-4">
            Modern learning
          </h2>
          <p className="text-lg text-gray-400 max-w-lg mx-auto">
            AI technology with personalized education.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<BookOpen className="h-6 w-6" />}
            title="AI Tutoring"
            description="Instant help from AI tutors."
          />
          
          <FeatureCard
            icon={<MessageCircle className="h-6 w-6" />}
            title="Live Chat"
            description="Connect with teachers and AI tutors."
          />
          
          <FeatureCard
            icon={<Users className="h-6 w-6" />}
            title="Virtual Classrooms"
            description="Interactive classes with personalized instruction."
          />
          
          <FeatureCard
            icon={<GraduationCap className="h-6 w-6" />}
            title="Custom AI Avatars"
            description="Create personalized AI avatars."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
