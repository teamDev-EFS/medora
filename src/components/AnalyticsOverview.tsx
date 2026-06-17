import React from 'react';
import { ArrowUpRight, ArrowDownRight, MessageSquare, Users, Clock, CheckCircle2 } from 'lucide-react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { stats, analyticsMetrics } from '../data/analytics';

const iconMap = [MessageSquare, Users, Clock, CheckCircle2];

const AnalyticsOverview: React.FC = () => {
  const chartData = analyticsMetrics.map((m) => ({
    date: new Date(m.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
    conversations: m.conversations,
    activeUsers: m.activeUsers,
  }));

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, idx) => {
          const Icon = iconMap[idx];
          const isUp = stat.trend === 'up';
          return (
            <div
              key={stat.label}
              className="rounded-xl bg-[#111827] border border-[#1F2937] p-5 shadow-sm hover:border-[#374151] transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-8 h-8 rounded-md bg-[#1F2937] flex items-center justify-center text-[#06B6D4]">
                  <Icon className="w-4 h-4" />
                </div>
                {stat.change !== undefined && (
                  <span
                    className={`inline-flex items-center gap-1 text-xs font-medium ${
                      isUp ? 'text-[#10B981]' : 'text-[#EF4444]'
                    }`}
                  >
                    {isUp ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                    {Math.abs(stat.change)}%
                  </span>
                )}
              </div>
              <div className="text-2xl font-bold text-[#F9FAFB] tracking-tight">{stat.value}</div>
              <div className="text-xs text-[#9CA3AF] mt-1">{stat.label}</div>
            </div>
          );
        })}
      </div>

      <div className="rounded-xl bg-[#111827] border border-[#1F2937] p-5 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-base font-semibold text-[#F9FAFB]">Activity Trend</h3>
            <p className="text-xs text-[#9CA3AF] mt-0.5">Conversations and active users — last 7 days</p>
          </div>
        </div>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
              <defs>
                <linearGradient id="convGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#06B6D4" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#06B6D4" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="userGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6366F1" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#6366F1" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#1F2937" />
              <XAxis dataKey="date" stroke="#6B7280" fontSize={11} tickLine={false} axisLine={false} />
              <YAxis stroke="#6B7280" fontSize={11} tickLine={false} axisLine={false} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#111827',
                  border: '1px solid #374151',
                  borderRadius: '8px',
                  fontSize: '12px',
                }}
                labelStyle={{ color: '#F9FAFB' }}
              />
              <Area
                type="monotone"
                dataKey="conversations"
                stroke="#06B6D4"
                strokeWidth={2}
                fill="url(#convGradient)"
              />
              <Area
                type="monotone"
                dataKey="activeUsers"
                stroke="#6366F1"
                strokeWidth={2}
                fill="url(#userGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsOverview;
