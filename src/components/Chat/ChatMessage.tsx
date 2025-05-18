
import React from 'react';
import { cn } from '@/lib/utils';
import AvatarPlaceholder from '../AIAvatar/AvatarPlaceholder';

export type MessageType = 'ai' | 'user' | 'teacher';

interface ChatMessageProps {
  message: string;
  sender: MessageType;
  timestamp: string;
  senderName?: string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({
  message,
  sender,
  timestamp,
  senderName
}) => {
  const isFromUser = sender === 'user';
  
  return (
    <div className={cn(
      "flex gap-3 mb-4",
      isFromUser ? "justify-end" : "justify-start"
    )}>
      {!isFromUser && (
        <AvatarPlaceholder 
          size="sm" 
          className={cn(
            "self-end mb-1",
            sender === 'ai' ? "border-2 border-keen-medium" : ""
          )}
        />
      )}
      
      <div className={cn(
        "max-w-[80%]",
        isFromUser ? "order-1" : "order-2"
      )}>
        <div className="flex items-center mb-1">
          {!isFromUser && (
            <span className="text-sm font-medium text-gray-700 mr-2">
              {sender === 'ai' ? 'AI Tutor' : senderName || 'Teacher'}
            </span>
          )}
          <span className="text-xs text-gray-400">{timestamp}</span>
        </div>
        
        <div className={cn(
          "p-3 rounded-xl",
          isFromUser 
            ? "bg-keen-dark text-white rounded-br-none" 
            : sender === 'ai' 
              ? "bg-keen-medium text-white rounded-bl-none"
              : "bg-gray-100 text-gray-800 rounded-bl-none"
        )}>
          <p className="text-sm">{message}</p>
        </div>
      </div>
      
      {isFromUser && (
        <div className="self-end mb-1">
          <div className="w-8 h-8 rounded-full bg-keen-light flex items-center justify-center">
            <span className="text-white font-medium text-sm">You</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
