
import React from 'react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, className }) => {
  return (
    <div className={cn(
      "keen-card hover:shadow-lg transition-shadow border border-keen-gray p-6 rounded-xl",
      className
    )}>
      <div className="w-12 h-12 bg-keen-light/20 rounded-full flex items-center justify-center text-keen-dark mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-keen-dark mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
