import type { User } from '../types';

export const users: User[] = [
  {
    id: 'u1',
    name: 'Priya Patel',
    role: 'Product Manager',
    email: 'priya.patel@acme.com',
    status: 'active',
    lastActive: '2026-03-15T14:32:00Z',
  },
  {
    id: 'u2',
    name: 'James Chen',
    role: 'Senior Engineer',
    email: 'james.chen@acme.com',
    status: 'active',
    lastActive: '2026-03-15T13:10:00Z',
  },
  {
    id: 'u3',
    name: 'Sarah Mitchell',
    role: 'Design Lead',
    email: 'sarah.mitchell@acme.com',
    status: 'away',
    lastActive: '2026-03-15T10:00:00Z',
  },
  {
    id: 'u4',
    name: 'Marcus Johnson',
    role: 'Engineering Manager',
    email: 'marcus.johnson@acme.com',
    status: 'active',
    lastActive: '2026-03-15T12:45:00Z',
  },
  {
    id: 'u5',
    name: 'Elena Rodriguez',
    role: 'DevOps Engineer',
    email: 'elena.rodriguez@acme.com',
    status: 'offline',
    lastActive: '2026-03-14T16:55:00Z',
  },
  {
    id: 'u6',
    name: 'David Kim',
    role: 'Backend Engineer',
    email: 'david.kim@acme.com',
    status: 'active',
    lastActive: '2026-03-15T09:30:00Z',
  },
  {
    id: 'u7',
    name: 'Ava Thompson',
    role: 'Product Designer',
    email: 'ava.thompson@acme.com',
    status: 'active',
    lastActive: '2026-03-15T14:00:00Z',
  },
  {
    id: 'u8',
    name: 'Noah Wilson',
    role: 'Frontend Engineer',
    email: 'noah.wilson@acme.com',
    status: 'away',
    lastActive: '2026-03-15T11:20:00Z',
  },
];

export const getUserById = (id: string): User | undefined => {
  return users.find((user) => user.id === id);
};
