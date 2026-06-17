import React from 'react';
import { Search, Bell, UserCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Topbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between h-16 px-6 bg-[#111827]/80 backdrop-blur border-b border-[#1F2937]">
      <div className="flex items-center gap-3 flex-1 max-w-md">
        <div className="relative w-full">
          <label htmlFor="global-search" className="sr-only">Search conversations and users</label>
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280]" aria-hidden="true" />
          <input
            id="global-search"
            type="text"
            placeholder="Search conversations, users..."
            aria-label="Search conversations and users"
            className="w-full h-9 pl-9 pr-3 rounded-md bg-[#0A0F1E] border border-[#1F2937] text-sm text-[#F9FAFB] placeholder:text-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#06B6D4]/40 focus:border-[#06B6D4] transition-colors"
          />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button
          type="button"
          className="relative w-9 h-9 flex items-center justify-center rounded-md text-[#9CA3AF] hover:text-[#F9FAFB] hover:bg-[#1F2937] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#06B6D4]/40"
          aria-label="Notifications"
        >
          <Bell className="w-4 h-4" />
          <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-[#EF4444]" aria-hidden="true" />
        </button>
        <Link
          to="/profile"
          className="flex items-center gap-2 px-2 py-1.5 rounded-md text-[#9CA3AF] hover:text-[#F9FAFB] hover:bg-[#1F2937] transition-colors"
        >
          <UserCircle className="w-5 h-5" aria-hidden="true" />
          <span className="hidden md:inline text-sm font-medium">UserRound</span>
        </Link>
      </div>
    </header>
  );
};

export default Topbar;
