import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Send } from 'lucide-react';
import { getConversationById } from '../data/conversations';
import { Badge } from './Badge';

interface Props {
  conversationId: string;
}

const formatTime = (iso: string) =>
  new Date(iso).toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

const ConversationDetailView: React.FC<Props> = ({ conversationId }) => {
  const conversation = getConversationById(conversationId);

  if (!conversation) {
    return (
      <div className="rounded-xl bg-[#111827] border border-[#1F2937] p-10 text-center">
        <h3 className="text-sm font-semibold text-[#F9FAFB]">Conversation not found</h3>
        <p className="text-xs text-[#9CA3AF] mt-1 mb-4">It may have been archived or deleted.</p>
        <Link
          to="/conversations"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-[#06B6D4] hover:text-[#6366F1] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to conversations
        </Link>
      </div>
    );
  }

  const messages = conversation.messages ?? [];
  const participants = conversation.participants ?? [];

  return (
    <div className="space-y-4">
      <Link
        to="/conversations"
        className="inline-flex items-center gap-1.5 text-xs font-medium text-[#9CA3AF] hover:text-[#F9FAFB] transition-colors"
      >
        <ArrowLeft className="w-3.5 h-3.5" /> Back to conversations
      </Link>

      <div className="rounded-xl bg-[#111827] border border-[#1F2937] p-5 shadow-sm">
        <div className="flex items-start justify-between gap-3 mb-1">
          <h2 className="text-lg font-bold text-[#F9FAFB]">{conversation.title}</h2>
          <Badge variant={conversation.status === 'active' ? 'success' : 'neutral'}>
            {conversation.status}
          </Badge>
        </div>
        <p className="text-xs text-[#9CA3AF]">{participants.join(' · ')}</p>
      </div>

      <div className="rounded-xl bg-[#111827] border border-[#1F2937] shadow-sm">
        <div className="p-5 space-y-4 max-h-[480px] overflow-y-auto">
          {messages.map((m) => (
            <div key={m.id} className="flex gap-3">
              <img
                src={`https://i.pravatar.cc/40?u=${encodeURIComponent(m.sender ?? 'user')}`}
                alt={m.sender ?? 'Participant'}
                className="w-8 h-8 rounded-full shrink-0"
              />
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-semibold text-[#F9FAFB]">{m.sender}</span>
                  <span className="text-[11px] text-[#6B7280]">{formatTime(m.timestamp)}</span>
                </div>
                <p className="text-sm text-[#9CA3AF] mt-1 leading-relaxed">{m.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="border-t border-[#1F2937] p-3 flex items-center gap-2">
          <label htmlFor="reply-input" className="sr-only">Write a reply</label>
          <input
            id="reply-input"
            type="text"
            placeholder="Write a reply..."
            aria-label="Write a reply"
            className="flex-1 h-9 px-3 rounded-md bg-[#0A0F1E] border border-[#1F2937] text-sm text-[#F9FAFB] placeholder:text-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#06B6D4]/40 focus:border-[#06B6D4] transition-colors"
          />
          <button
            type="button"
            aria-label="Send reply"
            className="inline-flex items-center gap-1.5 h-9 px-3 rounded-md bg-[#06B6D4] text-white text-sm font-medium hover:bg-[#6366F1] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#06B6D4]/40 active:scale-[0.98]"
          >
            <Send className="w-3.5 h-3.5" /> Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConversationDetailView;
