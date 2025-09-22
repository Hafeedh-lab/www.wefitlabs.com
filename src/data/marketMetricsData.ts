export interface MetricCard {
  readonly id: string;
  readonly label: string;
  readonly value: string;
  readonly helper?: string;
}

export interface GrowthPoint {
  readonly id: string;
  readonly label: string;
  readonly value: number;
}

export interface HeatmapCell {
  readonly id: string;
  readonly intensity: number;
}

export interface RevenueMilestone {
  readonly id: string;
  readonly quarter: string;
  readonly revenue: string;
  readonly status: 'actual' | 'projected';
}

export const tractionMetrics: MetricCard[] = [
  { id: 'mau', label: 'Monthly Active Users', value: '68K', helper: '+24% QoQ' },
  { id: 'dau', label: 'Daily Active Users', value: '12.5K', helper: '3.6 sessions / user' },
  { id: 'retention', label: 'Retention', value: '89%', helper: '90-day cohort' },
  { id: 'arpu', label: 'ARPU', value: '$14.80', helper: 'Blended subscription + ads' },
];

export const growthTrajectory: GrowthPoint[] = [
  { id: 'q1', label: 'Q1', value: 18 },
  { id: 'q2', label: 'Q2', value: 32 },
  { id: 'q3', label: 'Q3', value: 47 },
  { id: 'q4', label: 'Q4', value: 65 },
  { id: 'q5', label: 'Q1*', value: 84 },
];

export const engagementHeatmap: HeatmapCell[] = [
  { id: 'cell-0', intensity: 25 },
  { id: 'cell-1', intensity: 40 },
  { id: 'cell-2', intensity: 68 },
  { id: 'cell-3', intensity: 78 },
  { id: 'cell-4', intensity: 90 },
  { id: 'cell-5', intensity: 62 },
  { id: 'cell-6', intensity: 33 },
  { id: 'cell-7', intensity: 55 },
  { id: 'cell-8', intensity: 71 },
  { id: 'cell-9', intensity: 83 },
  { id: 'cell-10', intensity: 64 },
  { id: 'cell-11', intensity: 48 },
  { id: 'cell-12', intensity: 30 },
  { id: 'cell-13', intensity: 52 },
  { id: 'cell-14', intensity: 75 },
  { id: 'cell-15', intensity: 88 },
  { id: 'cell-16', intensity: 93 },
  { id: 'cell-17', intensity: 70 },
  { id: 'cell-18', intensity: 57 },
  { id: 'cell-19', intensity: 42 },
  { id: 'cell-20', intensity: 28 },
];

export const revenueTrajectory: RevenueMilestone[] = [
  { id: 'fy23', quarter: 'FY23', revenue: '$0.8M', status: 'actual' },
  { id: 'fy24', quarter: 'FY24', revenue: '$2.1M', status: 'actual' },
  { id: 'fy25', quarter: 'FY25', revenue: '$6.4M', status: 'projected' },
  { id: 'fy26', quarter: 'FY26', revenue: '$13.2M', status: 'projected' },
];
