
import React from 'react';
import FeatureCard from './FeatureCard';
import { BookOpen, MessageCircle, Users, GraduationCap } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section className="py-16 bg-black">
      <div className="keen-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<BookOpen className="h-6 w-6 text-white" />}
            title="Learn"
            description=""
          />
          
          <FeatureCard
            icon={<MessageCircle className="h-6 w-6 text-white" />}
            title="Chat"
            description=""
          />
          
          <FeatureCard
            icon={<Users className="h-6 w-6 text-white" />}
            title="Connect"
            description=""
          />
          
          <FeatureCard
            icon={<GraduationCap className="h-6 w-6 text-white" />}
            title="Grow"
            description=""
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
