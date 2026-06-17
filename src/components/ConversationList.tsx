import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, ChevronRight } from 'lucide-react';
import { conversations } from '../data/conversations';
import { Badge } from './Badge';

interface ConversationListProps {
  limit?: number;
}

const statusVariant = (status: string) => {
  if (status === 'active') return 'success';
  if (status === 'resolved') return 'info';
  return 'neutral';
};

const formatTime = (iso: string) => {
  const d = new Date(iso);
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
};

const ConversationList: React.FC<ConversationListProps> = ({ limit }) => {
  const items = limit ? conversations.slice(0, limit) : conversations;

  if (items.length === 0) {
    return (
      <div className="rounded-xl bg-[#111827] border border-dashed border-[#1F2937] p-10 text-center">
        <MessageSquare className="w-8 h-8 text-[#6B7280] mx-auto mb-3" />
        <h3 className="text-sm font-semibold text-[#F9FAFB]">No conversations yet</h3>
        <p className="text-xs text-[#9CA3AF] mt-1">Start a new conversation to see it here.</p>
      </div>
    );
  }

  return (
    <div className="rounded-xl bg-[#111827] border border-[#1F2937] overflow-hidden shadow-sm">
      <ul className="divide-y divide-[#1F2937]">
        {items.map((c) => (
          <li key={c.id}>
            <Link
              to={`/conversations/${c.id}`}
              className="flex items-center justify-between gap-4 px-5 py-4 hover:bg-[#1F2937]/40 transition-colors group"
            >
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="text-sm font-semibold text-[#F9FAFB] truncate">{c.title}</h4>
                  <Badge variant={statusVariant(c.status) as any}>{c.status}</Badge>
                </div>
                <p className="text-xs text-[#9CA3AF] truncate">{c.lastMessage}</p>
                <div className="text-[11px] text-[#6B7280] mt-1">
                  {c.participants.join(', ')} · {formatTime(c.timestamp)}
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-[#6B7280] group-hover:text-[#F9FAFB] group-hover:translate-x-0.5 transition-all" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConversationList;
