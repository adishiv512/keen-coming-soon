
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
      "bg-secondary hover:bg-muted transition-all border border-muted p-6 rounded-xl",
      className
    )}>
      <div className="w-12 h-12 bg-keen-dark/20 rounded-full flex items-center justify-center text-keen-white mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-keen-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default FeatureCard;
