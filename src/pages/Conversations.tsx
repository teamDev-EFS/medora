import React from 'react';
import ConversationList from '../components/ConversationList';

const Conversations: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl font-bold mb-6">All Conversations</h1>
      <ConversationList />
    </div>
  );
};

export default Conversations;
