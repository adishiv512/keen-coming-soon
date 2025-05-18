
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
      "bg-black hover:bg-black/70 transition-all border border-white/10 p-6 rounded-xl",
      className
    )}>
      <div className="w-12 h-12 bg-black/50 rounded-full flex items-center justify-center text-white mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
      {description && <p className="text-white/60">{description}</p>}
    </div>
  );
};

export default FeatureCard;
