
import React from 'react';
import ChatInterface from '../components/Chat/ChatInterface';

const AIChat = () => {
  return (
    <div className="h-screen flex flex-col">
      <ChatInterface chatType="ai" recipientName="Math AI Tutor" />
    </div>
  );
};

export default AIChat;
