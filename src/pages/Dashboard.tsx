import React from 'react';
import AnalyticsOverview from '../components/AnalyticsOverview';
import ConversationList from '../components/ConversationList';

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col gap-8">
      <AnalyticsOverview />
      <div>
        <h2 className="text-lg font-bold mb-4">Recent Conversations</h2>
        <ConversationList limit={5} />
      </div>
    </div>
  );
};

export default Dashboard;
