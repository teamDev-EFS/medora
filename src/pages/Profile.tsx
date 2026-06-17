import React from 'react';
import { Mail, Briefcase, MapPin, Calendar } from 'lucide-react';
import { Badge } from '../components/Badge';

const UserRound: React.FC = () => {
  const profile = {
    name: 'Sarah Mitchell',
    role: 'Design Lead',
    email: 'sarah.mitchell@acme.com',
    location: 'San Francisco, CA',
    joined: 'March 2023',
    avatar: 'https://i.pravatar.cc/160?img=47',
    bio: 'Leading product design at Acme Corp. Previously at Linear and Figma. Passionate about systems thinking and craft.',
    stats: [
      { label: 'Conversations', value: '247' },
      { label: 'Resolved', value: '94%' },
      { label: 'Avg. response', value: '1m 12s' },
    ],
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="rounded-xl bg-[#111827] border border-[#1F2937] p-6 shadow-sm">
        <div className="flex items-start gap-5">
          <img
            src={profile.avatar}
            alt={profile.name}
            className="w-20 h-20 rounded-full border-2 border-[#1F2937]"
          />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h1 className="text-xl font-bold text-[#F9FAFB]">{profile.name}</h1>
              <Badge variant="success">Active</Badge>
            </div>
            <p className="text-sm text-[#9CA3AF] mb-3">{profile.role}</p>
            <p className="text-sm text-[#9CA3AF] leading-relaxed">{profile.bio}</p>
          </div>
          <button className="h-9 px-4 rounded-md bg-[#06B6D4] text-white text-sm font-medium hover:bg-[#6366F1] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#06B6D4]/40 active:scale-[0.98]">
            Edit profile
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {profile.stats.map((s) => (
          <div
            key={s.label}
            className="rounded-xl bg-[#111827] border border-[#1F2937] p-5 shadow-sm"
          >
            <div className="text-2xl font-bold text-[#F9FAFB]">{s.value}</div>
            <div className="text-xs text-[#9CA3AF] mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="rounded-xl bg-[#111827] border border-[#1F2937] p-5 shadow-sm">
        <h3 className="text-sm font-semibold text-[#F9FAFB] mb-4">Details</h3>
        <dl className="space-y-3 text-sm">
          <div className="flex items-center gap-3">
            <Mail className="w-4 h-4 text-[#6B7280]" />
            <dt className="text-[#6B7280] w-24">Mail</dt>
            <dd className="text-[#F9FAFB]">{profile.email}</dd>
          </div>
          <div className="flex items-center gap-3">
            <Briefcase className="w-4 h-4 text-[#6B7280]" />
            <dt className="text-[#6B7280] w-24">Role</dt>
            <dd className="text-[#F9FAFB]">{profile.role}</dd>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-4 h-4 text-[#6B7280]" />
            <dt className="text-[#6B7280] w-24">Location</dt>
            <dd className="text-[#F9FAFB]">{profile.location}</dd>
          </div>
          <div className="flex items-center gap-3">
            <Calendar className="w-4 h-4 text-[#6B7280]" />
            <dt className="text-[#6B7280] w-24">Joined</dt>
            <dd className="text-[#F9FAFB]">{profile.joined}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default UserRound;
