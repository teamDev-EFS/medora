import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  MessageSquare,
  BarChart3,
  Users as Users,
  Settings as Settings,
  Activity,
} from 'lucide-react';

const navItems = [
  { to: '/dashboard', label: 'LayoutDashboard', icon: LayoutDashboard },
  { to: '/conversations', label: 'Conversations', icon: MessageSquare },
  { to: '/analytics', label: 'Analytics', icon: BarChart3 },
  { to: '/users', label: 'Users', icon: Users },
  { to: '/settings', label: 'Settings', icon: Settings },
];

const Sidebar: React.FC = () => {
  return (
    <aside className="w-60 shrink-0 flex flex-col bg-[#111827] border-r border-[#1F2937]">
      <div className="h-16 flex items-center gap-2 px-5 border-b border-[#1F2937]">
        <div className="w-8 h-8 rounded-md bg-gradient-to-br from-[#06B6D4] to-[#6366F1] flex items-center justify-center">
          <Activity className="w-4 h-4 text-white" />
        </div>
        <span className="text-[#F9FAFB] font-semibold text-base tracking-tight">Medora</span>
      </div>
      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              [
                'flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors',
                isActive
                  ? 'bg-[#1F2937] text-[#F9FAFB]'
                  : 'text-[#9CA3AF] hover:text-[#F9FAFB] hover:bg-[#1F2937]/60',
              ].join(' ')
            }
          >
            <Icon className="w-4 h-4" />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
      <div className="p-3 border-t border-[#1F2937]">
        <div className="flex items-center gap-3 px-3 py-2 rounded-md bg-[#1F2937]/40">
          <img
            src="https://i.pravatar.cc/40?img=47"
            alt="Sarah Mitchell"
            className="w-8 h-8 rounded-full"
          />
          <div className="min-w-0">
            <div className="text-xs font-medium text-[#F9FAFB] truncate">Sarah Mitchell</div>
            <div className="text-[11px] text-[#6B7280] truncate">Design Lead</div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
