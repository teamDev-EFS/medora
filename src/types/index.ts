export interface Message {
  id: string;
  sender: string;
  text: string;
  timestamp: string;
}

export interface Conversation {
  id: string;
  title: string;
  participants: string[];
  lastMessage: string;
  timestamp: string;
  status: 'active' | 'archived' | 'resolved';
  messages: Message[];
}

export interface User {
  id: string;
  name: string;
  role: string;
  email: string;
  status: 'active' | 'away' | 'offline';
  avatar?: string;
  lastActive: string;
}

export interface AnalyticsMetric {
  date: string;
  conversations: number;
  activeUsers: number;
  growth: number;
}

export interface Stat {
  label: string;
  value: string | number;
  change?: number;
  trend?: 'up' | 'down' | 'neutral';
}
