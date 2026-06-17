import type { AnalyticsMetric, Stat } from '../types';

export const analyticsMetrics: AnalyticsMetric[] = [
  { date: '2026-03-09', conversations: 98, activeUsers: 2100, growth: 12.4 },
  { date: '2026-03-10', conversations: 106, activeUsers: 2180, growth: 14.2 },
  { date: '2026-03-11', conversations: 112, activeUsers: 2250, growth: 18.6 },
  { date: '2026-03-12', conversations: 108, activeUsers: 2310, growth: 16.1 },
  { date: '2026-03-13', conversations: 118, activeUsers: 2350, growth: 21.3 },
  { date: '2026-03-14', conversations: 121, activeUsers: 2380, growth: 22.7 },
  { date: '2026-03-15', conversations: 124, activeUsers: 2400, growth: 24.8 },
];

export const stats: Stat[] = [
  { label: 'Total Conversations', value: '787', change: 18.2, trend: 'up' },
  { label: 'Active Users', value: '2,400', change: 12.5, trend: 'up' },
  { label: 'Avg. Response Time', value: '1m 24s', change: -8.4, trend: 'down' },
  { label: 'Resolution Rate', value: '94.2%', change: 3.1, trend: 'up' },
];

export const getLatestMetric = (): AnalyticsMetric => {
  return analyticsMetrics[analyticsMetrics.length - 1];
};
