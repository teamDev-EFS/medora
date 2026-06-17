import React from 'react';
import { useParams } from 'react-router-dom';
import ConversationDetailView from '../components/ConversationDetailView';

const ConversationDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <div>
      <ConversationDetailView conversationId={id!} />
    </div>
  );
};

export default ConversationDetail;
