import type { Conversation } from '../types';

export const conversations: Conversation[] = [
  {
    id: 'c1',
    title: 'Q2 Product Planning',
    participants: ['Sarah Mitchell', 'James Chen'],
    lastMessage: "Let's finalize the roadmap for Q2.",
    timestamp: '2026-03-15T14:32:00Z',
    status: 'active',
    messages: [
      {
        id: 'm1',
        sender: 'Sarah Mitchell',
        text: 'Hey team, I have drafted the Q2 roadmap. Let me know your thoughts.',
        timestamp: '2026-03-15T09:12:00Z',
      },
      {
        id: 'm2',
        sender: 'James Chen',
        text: 'Thanks Sarah. I will review the engineering estimates today.',
        timestamp: '2026-03-15T11:45:00Z',
      },
      {
        id: 'm3',
        sender: 'Sarah Mitchell',
        text: "Let's finalize the roadmap for Q2.",
        timestamp: '2026-03-15T14:32:00Z',
      },
    ],
  },
  {
    id: 'c2',
    title: 'Customer Onboarding Flow',
    participants: ['Priya Patel', 'Marcus Johnson'],
    lastMessage: 'The new wizard reduced drop-off by 18%.',
    timestamp: '2026-03-15T13:10:00Z',
    status: 'active',
    messages: [
      {
        id: 'm4',
        sender: 'Priya Patel',
        text: 'Can we revisit the onboarding steps? Feedback shows confusion at step 3.',
        timestamp: '2026-03-15T10:00:00Z',
      },
      {
        id: 'm5',
        sender: 'Marcus Johnson',
        text: 'The new wizard reduced drop-off by 18%.',
        timestamp: '2026-03-15T13:10:00Z',
      },
    ],
  },
  {
    id: 'c3',
    title: 'Infrastructure Scaling',
    participants: ['Elena Rodriguez', 'David Kim'],
    lastMessage: 'Auto-scaling policies are now live in production.',
    timestamp: '2026-03-14T16:55:00Z',
    status: 'resolved',
    messages: [
      {
        id: 'm6',
        sender: 'Elena Rodriguez',
        text: 'We need to prepare the cluster for the upcoming traffic spike.',
        timestamp: '2026-03-14T14:20:00Z',
      },
      {
        id: 'm7',
        sender: 'David Kim',
        text: 'Auto-scaling policies are now live in production.',
        timestamp: '2026-03-14T16:55:00Z',
      },
    ],
  },
  {
    id: 'c4',
    title: 'Design System Updates',
    participants: ['Ava Thompson', 'Noah Wilson'],
    lastMessage: 'Tokens are synced with Figma variables.',
    timestamp: '2026-03-14T09:22:00Z',
    status: 'active',
    messages: [
      {
        id: 'm8',
        sender: 'Ava Thompson',
        text: 'I have updated the color tokens to match the new brand palette.',
        timestamp: '2026-03-14T08:30:00Z',
      },
      {
        id: 'm9',
        sender: 'Noah Wilson',
        text: 'Tokens are synced with Figma variables.',
        timestamp: '2026-03-14T09:22:00Z',
      },
    ],
  },
  {
    id: 'c5',
    title: 'Security Audit Findings',
    participants: ['Liam Brown', 'Olivia Davis'],
    lastMessage: 'All critical findings have been remediated.',
    timestamp: '2026-03-13T17:40:00Z',
    status: 'archived',
    messages: [
      {
        id: 'm10',
        sender: 'Liam Brown',
        text: 'The external audit flagged three critical items.',
        timestamp: '2026-03-13T15:00:00Z',
      },
      {
        id: 'm11',
        sender: 'Olivia Davis',
        text: 'All critical findings have been remediated.',
        timestamp: '2026-03-13T17:40:00Z',
      },
    ],
  },
  {
    id: 'c6',
    title: 'Mobile App Beta Feedback',
    participants: ['Sophia Martinez', 'William Anderson'],
    lastMessage: 'Crash rate dropped to 0.4% in the latest build.',
    timestamp: '2026-03-13T11:15:00Z',
    status: 'active',
    messages: [
      {
        id: 'm12',
        sender: 'Sophia Martinez',
        text: 'Beta users reported two recurring crashes on Android.',
        timestamp: '2026-03-13T09:45:00Z',
      },
      {
        id: 'm13',
        sender: 'William Anderson',
        text: 'Crash rate dropped to 0.4% in the latest build.',
        timestamp: '2026-03-13T11:15:00Z',
      },
    ],
  },
];

export const getConversationById = (id: string): Conversation | undefined => {
  return conversations.find((conversation) => conversation.id === id);
};
