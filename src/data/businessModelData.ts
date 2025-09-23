export interface RevenueStream {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly contribution: string;
}

export interface UnitEconomicsRow {
  readonly id: string;
  readonly metric: string;
  readonly value: string;
}

export interface MarketSlice {
  readonly id: string;
  readonly label: string;
  readonly value: string;
}

export interface CompetitorPosition {
  readonly id: string;
  readonly name: string;
  readonly focus: string;
  readonly gap: string;
}

export const revenueStreams: RevenueStream[] = [
  {
    id: 'subscription',
    title: 'Premium Subscription',
    description: 'Personalized programming, AI coaching, and invite-only competition tiers.',
    contribution: '42% of projected FY26 revenue',
  },
  {
    id: 'brand-partnerships',
    title: 'Brand Partnerships',
    description: 'Performance-based activations with athletic apparel, nutrition, and equipment partners.',
    contribution: '28% with 6 signed LOIs',
  },
  {
    id: 'marketplace',
    title: 'Marketplace Fees',
    description: 'In-app marketplace for trainers and micro-communities with 12% transaction fee.',
    contribution: '18% with 35% monthly GMV growth',
  },
  {
    id: 'data',
    title: 'Insights Licensing',
    description: 'Aggregated training insights and anonymized trend data for enterprise partners.',
    contribution: '12% via annual licensing contracts',
  },
];

export const unitEconomics: UnitEconomicsRow[] = [
  { id: 'cac', metric: 'Blended CAC', value: '$32 (paid) / $11 (organic)' },
  { id: 'ltv', metric: 'LTV (36 mo.)', value: '$312 per subscriber' },
  { id: 'payback', metric: 'Payback Period', value: '3.2 months' },
  { id: 'gross-margin', metric: 'Gross Margin', value: '68%' },
];

export const marketSizing: MarketSlice[] = [
  { id: 'tam', label: 'TAM', value: '$96B global digital fitness' },
  { id: 'sam', label: 'SAM', value: '$18B connected fitness enthusiasts' },
  { id: 'som', label: 'SOM', value: '$2.4B social competition seekers' },
];

export const competitivePositions: CompetitorPosition[] = [
  {
    id: 'strava',
    name: 'Strava',
    focus: 'Endurance tracking & social feed',
    gap: 'No competitive gaming layer or team economy',
  },
  {
    id: 'peloton',
    name: 'Peloton',
    focus: 'Hardware-centric subscription',
    gap: 'Closed ecosystem; limited community interoperability',
  },
  {
    id: 'whoop',
    name: 'Whoop',
    focus: 'Wearable insights & recovery',
    gap: 'Lacks competitive loops and social monetization',
  },
  {
    id: 'wefit',
    name: 'WeFit',
    focus: 'Competitive social fitness operating system',
    gap: 'Interoperable with 30+ wearables; gamified retention engine',
  },
];
