import React, { useState } from 'react';
import { Bell, Lock, Globe, Palette } from 'lucide-react';

const Settings: React.FC = () => {
  const [notifications, setNotifications] = useState(true);
  const [emailDigest, setEmailDigest] = useState(false);
  const [twoFactor, setTwoFactor] = useState(true);

  const sections = [
    {
      icon: Bell,
      title: 'Notifications',
      description: 'Configure how you receive updates',
      items: [
        { label: 'In-app notifications', value: notifications, set: setNotifications },
        { label: 'Daily email digest', value: emailDigest, set: setEmailDigest },
      ],
    },
    {
      icon: Lock,
      title: 'Security',
      description: 'Protect your account',
      items: [{ label: 'Two-factor authentication', value: twoFactor, set: setTwoFactor }],
    },
  ];

  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h1 className="text-xl font-bold text-[#F9FAFB]">Settings</h1>
        <p className="text-xs text-[#9CA3AF] mt-1">Manage your workspace preferences</p>
      </div>

      {sections.map((section) => {
        const Icon = section.icon;
        return (
          <div
            key={section.title}
            className="rounded-xl bg-[#111827] border border-[#1F2937] p-5 shadow-sm"
          >
            <div className="flex items-start gap-3 mb-4">
              <div className="w-8 h-8 rounded-md bg-[#1F2937] flex items-center justify-center text-[#06B6D4]">
                <Icon className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[#F9FAFB]">{section.title}</h3>
                <p className="text-xs text-[#9CA3AF]">{section.description}</p>
              </div>
            </div>
            <div className="space-y-3">
              {section.items.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between py-2 border-t border-[#1F2937] first:border-t-0"
                >
                  <span className="text-sm text-[#F9FAFB]">{item.label}</span>
                  <button
                    onClick={() => item.set(!item.value)}
                    className={`relative w-10 h-5 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#06B6D4]/40 ${
                      item.value ? 'bg-[#06B6D4]' : 'bg-[#374151]'
                    }`}
                    aria-pressed={item.value}
                  >
                    <span
                      className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-transform ${
                        item.value ? 'translate-x-5' : 'translate-x-0.5'
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
        );
      })}

      <div className="rounded-xl bg-[#111827] border border-[#1F2937] p-5 shadow-sm">
        <div className="flex items-start gap-3 mb-4">
          <div className="w-8 h-8 rounded-md bg-[#1F2937] flex items-center justify-center text-[#06B6D4]">
            <Palette className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-[#F9FAFB]">Appearance</h3>
            <p className="text-xs text-[#9CA3AF]">Customize the look and feel</p>
          </div>
        </div>
        <div className="flex gap-2">
          {['Dark', 'Light', 'System'].map((theme, i) => (
            <button
              key={theme}
              className={`flex-1 h-9 rounded-md text-sm font-medium border transition-colors ${
                i === 0
                  ? 'bg-[#06B6D4]/10 border-[#06B6D4]/40 text-[#06B6D4]'
                  : 'bg-[#0A0F1E] border-[#1F2937] text-[#9CA3AF] hover:text-[#F9FAFB] hover:border-[#374151]'
              }`}
            >
              {theme}
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-xl bg-[#111827] border border-[#1F2937] p-5 shadow-sm">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-md bg-[#1F2937] flex items-center justify-center text-[#06B6D4]">
            <Globe className="w-4 h-4" />
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-[#F9FAFB]">Workspace</h3>
            <p className="text-xs text-[#9CA3AF] mb-3">Acme Corp · 47 members</p>
            <button className="text-xs font-medium text-[#06B6D4] hover:text-[#6366F1] transition-colors">
              Manage workspace →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
