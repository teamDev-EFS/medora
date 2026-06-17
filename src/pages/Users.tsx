import React from 'react';
import { users } from '../data/users';
import { Badge } from '../components/Badge';

const statusVariant = (status: string) => {
  if (status === 'active') return 'success';
  if (status === 'away') return 'warning';
  return 'neutral';
};

const formatRelative = (iso: string) => {
  const d = new Date(iso);
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
};

const Users: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold text-[#F9FAFB]">Users</h1>
        <p className="text-xs text-[#9CA3AF] mt-1">Manage team members and their access</p>
      </div>

      <div className="rounded-xl bg-[#111827] border border-[#1F2937] shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-[#0A0F1E] text-[11px] uppercase tracking-wider text-[#6B7280]">
            <tr>
              <th className="text-left font-medium px-5 py-3">Name</th>
              <th className="text-left font-medium px-5 py-3">Role</th>
              <th className="text-left font-medium px-5 py-3">Status</th>
              <th className="text-left font-medium px-5 py-3">Last active</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#1F2937]">
            {users.map((u) => (
              <tr key={u.id} className="hover:bg-[#1F2937]/40 transition-colors">
                <td className="px-5 py-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={`https://i.pravatar.cc/40?u=${u.id}`}
                      alt={u.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <div>
                      <div className="text-sm font-medium text-[#F9FAFB]">{u.name}</div>
                      <div className="text-xs text-[#6B7280]">{u.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-3 text-[#9CA3AF]">{u.role}</td>
                <td className="px-5 py-3">
                  <Badge variant={statusVariant(u.status) as any}>{u.status}</Badge>
                </td>
                <td className="px-5 py-3 text-[#9CA3AF] text-xs">{formatRelative(u.lastActive)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
