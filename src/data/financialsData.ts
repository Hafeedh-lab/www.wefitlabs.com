export interface Projection {
  readonly id: string;
  readonly year: string;
  readonly revenue: string;
  readonly ebitda: string;
  readonly notes: string;
}

export interface FundingRound {
  readonly id: string;
  readonly round: string;
  readonly amount: string;
  readonly date: string;
  readonly lead: string;
}

export interface UseOfFundsItem {
  readonly id: string;
  readonly category: string;
  readonly allocation: string;
  readonly detail: string;
}

export interface ProfitabilityMilestone {
  readonly id: string;
  readonly stage: string;
  readonly timing: string;
  readonly dependency: string;
}

export const revenueProjections: Projection[] = [
  { id: 'fy24', year: 'FY24', revenue: '$2.1M', ebitda: '-$1.8M', notes: 'Beta monetization + partnerships' },
  { id: 'fy25', year: 'FY25', revenue: '$6.4M', ebitda: '-$0.6M', notes: 'Marketplace scale + enterprise pilots' },
  { id: 'fy26', year: 'FY26', revenue: '$13.2M', ebitda: '$1.4M', notes: 'Global launch + data licensing' },
];

export const fundingHistory: FundingRound[] = [
  { id: 'pre-seed', round: 'Pre-Seed', amount: '$1.5M', date: '2023', lead: 'Velocity Ventures' },
  { id: 'seed', round: 'Seed (current)', amount: '$4.0M', date: '2024', lead: 'Lead investor TBD' },
];

export const useOfFunds: UseOfFundsItem[] = [
  { id: 'product', category: 'Product & Engineering', allocation: '38%', detail: 'AI personalization, cross-platform roadmap' },
  { id: 'growth', category: 'Growth & Partnerships', allocation: '27%', detail: 'Strategic activations + ambassador network' },
  { id: 'operations', category: 'Operations', allocation: '20%', detail: 'Hiring key roles, compliance expansion' },
  { id: 'runway', category: 'Working Capital', allocation: '15%', detail: '18-month runway to Series A' },
];

export const profitabilityPath: ProfitabilityMilestone[] = [
  { id: 'scale', stage: 'Scale Marketplace GMV', timing: 'Q1 FY25', dependency: 'Expand supply via elite trainers' },
  { id: 'enterprise', stage: 'Enterprise Licensing', timing: 'Q3 FY25', dependency: 'Convert pilots in sports leagues' },
  { id: 'automation', stage: 'Operational Automation', timing: 'Q4 FY25', dependency: 'Deploy AI moderation + support' },
  { id: 'ebitda-positive', stage: 'EBITDA Positive', timing: 'Q2 FY26', dependency: 'Maintain 85% retention and 65% GM' },
];
