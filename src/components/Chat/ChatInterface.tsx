
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send } from 'lucide-react';
import ChatMessage, { MessageType } from './ChatMessage';

interface Message {
  id: string;
  text: string;
  sender: MessageType;
  timestamp: string;
  senderName?: string;
}

interface ChatInterfaceProps {
  chatType: 'ai' | 'teacher';
  recipientName?: string;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({
  chatType,
  recipientName = chatType === 'ai' ? 'AI Tutor' : 'Teacher'
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: chatType === 'ai' 
        ? "Hello! I'm your AI tutor. How can I help you with your math problems today?" 
        : `Hi there! I'm ${recipientName}. Feel free to ask any questions about the class.`,
      sender: chatType === 'ai' ? 'ai' : 'teacher',
      timestamp: '2:30 PM',
      senderName: recipientName
    }
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    
    const userMessage: Message = {
      id: `msg-${Date.now()}`,
      text: newMessage,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages([...messages, userMessage]);
    setNewMessage('');
    
    // Simulate response (in a real app, this would call an API)
    setTimeout(() => {
      const responseMessage: Message = {
        id: `msg-${Date.now() + 1}`,
        text: chatType === 'ai' 
          ? "I understand your question. Let me help you solve this step by step..." 
          : "Thanks for your question. Let me explain that concept in more detail.",
        sender: chatType === 'ai' ? 'ai' : 'teacher',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        senderName: recipientName
      };
      
      setMessages(prevMessages => [...prevMessages, responseMessage]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="bg-keen-dark text-white p-4">
        <h2 className="text-lg font-medium">Chat with {recipientName}</h2>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 bg-white">
        {messages.map((message) => (
          <ChatMessage
            key={message.id}
            message={message.text}
            sender={message.sender}
            timestamp={message.timestamp}
            senderName={message.senderName}
          />
        ))}
      </div>
      
      <div className="border-t border-gray-200 p-4 bg-white">
        <div className="flex items-center space-x-2">
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1"
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <Button 
            onClick={handleSendMessage}
            className="bg-keen-dark hover:bg-keen-medium"
          >
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
