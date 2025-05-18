
import React from 'react';
import { User } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AvatarPlaceholderProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  speaking?: boolean;
  className?: string;
}

const AvatarPlaceholder: React.FC<AvatarPlaceholderProps> = ({ 
  size = 'md', 
  speaking = false,
  className
}) => {
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-24 h-24',
    xl: 'w-32 h-32'
  };
  
  return (
    <div className={cn(
      "relative rounded-full",
      sizeClasses[size],
      className
    )}>
      {speaking && (
        <div className="absolute inset-0 rounded-full bg-keen-accent/30 animate-pulse z-0"></div>
      )}
      <div className={cn(
        "absolute inset-0 rounded-full bg-gradient-to-b from-keen-medium to-keen-dark p-1 z-10",
        speaking ? "border border-keen-accent" : ""
      )}>
        <div className="h-full w-full rounded-full bg-white flex items-center justify-center">
          <User className="text-keen-dark" size={size === 'sm' ? 20 : size === 'md' ? 24 : size === 'lg' ? 32 : 40} />
        </div>
      </div>
    </div>
  );
};

export default AvatarPlaceholder;
