export interface MetricCard {
  readonly id: string;
  readonly label: string;
  readonly value: string;
  readonly delta: string;
  readonly supporting: string;
}

export interface ChartInsight {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly value: string;
  readonly timeFrame: string;
}

export interface RevenueStream {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly mix: string;
}

export interface MarketSizingRow {
  readonly id: string;
  readonly label: string;
  readonly value: string;
  readonly share: string;
}

export interface HighlightCard {
  readonly id: string;
  readonly title: string;
  readonly subtitle: string;
  readonly bullets: readonly string[];
}

export interface TeamMember {
  readonly id: string;
  readonly name: string;
  readonly title: string;
  readonly bio: string;
  readonly linkedIn: string;
}

export interface FinancialProjection {
  readonly id: string;
  readonly year: string;
  readonly revenue: string;
  readonly ebitda: string;
  readonly notes: string;
}

export interface FundingMilestone {
  readonly id: string;
  readonly round: string;
  readonly amount: string;
  readonly investors: string;
}

export interface UseOfFundsAllocation {
  readonly id: string;
  readonly category: string;
  readonly percentage: string;
  readonly narrative: string;
}

export interface ResourceAsset {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly type: 'deck' | 'financials' | 'market' | 'demo';
  readonly href: string;
}

export interface PressMention {
  readonly id: string;
  readonly source: string;
  readonly headline: string;
  readonly date: string;
}

export interface PartnerLogo {
  readonly id: string;
  readonly name: string;
  readonly logo: string;
}

export const tractionMetrics: readonly MetricCard[] = [
  {
    id: 'mau',
    label: 'Monthly Active Users',
    value: '10,240',
    delta: '+34% QoQ',
    supporting: 'High intent cohort sourced from closed beta',
  },
  {
    id: 'dau',
    label: 'Daily Active Users',
    value: '4,380',
    delta: '43% DAU/MAU',
    supporting: 'Consistent 2.7 sessions per user per day',
  },
  {
    id: 'retention',
    label: '89% Retention',
    value: 'Week 12 Cohort',
    delta: '+12 pts vs category avg',
    supporting: 'Gamified loops & social graph drive habit formation',
  },
  {
    id: 'arpu',
    label: 'ARPU',
    value: '$14.80',
    delta: '+27% MoM',
    supporting: 'Hybrid subscription & marketplace take-rate',
  },
] as const;

export const tractionInsights: readonly ChartInsight[] = [
  {
    id: 'engagement_heatmap',
    title: 'Engagement Density',
    description: 'Peak activity occurs between 6-9AM local time with cross-cohort stickiness on weekends.',
    value: '182 avg touchpoints',
    timeFrame: 'Trailing 30 days',
  },
  {
    id: 'revenue_curve',
    title: 'Revenue Trajectory',
    description: 'Projected to $28M ARR by FY27 based on current conversion and upsell funnels.',
    value: '$28M ARR',
    timeFrame: 'FY27 forecast',
  },
  {
    id: 'network_effect',
    title: 'Network Expansion',
    description: 'Each new community lead invites 11.4 members on average within 14 days.',
    value: '11.4 invites',
    timeFrame: 'Beta cohort analysis',
  },
] as const;

export const revenueStreams: readonly RevenueStream[] = [
  {
    id: 'subscription',
    title: 'Premium Subscriptions',
    description: 'Tiered memberships unlocking AI coaching, competitive leagues, and exclusive content.',
    mix: '41% of Year 1 revenue',
  },
  {
    id: 'marketplace',
    title: 'Marketplace Take Rate',
    description: '8% blended take from challenges, brand activations, and creator-led programs.',
    mix: '33% of Year 1 revenue',
  },
  {
    id: 'data',
    title: 'Data Partnerships',
    description: 'Aggregated wellness insights for insurers, employers, and OEM partners.',
    mix: '26% of Year 1 revenue',
  },
] as const;

export const unitEconomics: readonly HighlightCard[] = [
  {
    id: 'cac_payback',
    title: '4.2 Month CAC Payback',
    subtitle: 'Efficient acquisition flywheel',
    bullets: [
      'Organic waitlist converts at 32% to paid tiers',
      'Influencer referral CAC is $28 vs $57 paid social',
    ],
  },
  {
    id: 'ltv',
    title: '$312 Blended LTV',
    subtitle: '89% retention at 12 weeks',
    bullets: [
      'Upsell path from freemium to pro has 44% attach',
      'Add-on revenue from marketplace repeats every 17 days',
    ],
  },
] as const;

export const marketSizing: readonly MarketSizingRow[] = [
  { id: 'tam', label: 'Total Addressable Market (TAM)', value: '$96B', share: 'Global digital fitness spend' },
  { id: 'sam', label: 'Serviceable Available Market (SAM)', value: '$18B', share: 'English-speaking social fitness users' },
  { id: 'som', label: 'Serviceable Obtainable Market (SOM)', value: '$1.1B', share: 'Targeted Gen Z & Millennial urban cohorts' },
] as const;

export const competitiveHighlights: readonly HighlightCard[] = [
  {
    id: 'moats',
    title: 'Technology Moats',
    subtitle: 'Real-time competition engine',
    bullets: [
      'Proprietary scoring algorithm ingesting 2.4M data points daily',
      'AI-generated challenge templates localized in 14 regions',
    ],
  },
  {
    id: 'partnerships',
    title: 'Strategic Partnerships',
    subtitle: 'Distribution acceleration',
    bullets: [
      'Under LOI with two Fortune 500 wellness platforms',
      'Exclusive beta with wearables OEM representing 12M devices',
    ],
  },
  {
    id: 'regulatory',
    title: 'Regulatory Advantages',
    subtitle: 'Compliance-first infrastructure',
    bullets: [
      'HIPAA-aligned data lake & SOC 2 roadmap underway',
      'Pre-certified integrations with Apple HealthKit & Google Fit',
    ],
  },
  {
    id: 'scalability',
    title: 'Scalability Metrics',
    subtitle: 'Lean ops, high leverage',
    bullets: [
      'Unit economics break even at 70K paying users',
      'Cloud-native architecture scales 10x with <$3K incremental cost',
    ],
  },
] as const;

export const leadershipTeam: readonly TeamMember[] = [
  {
    id: 'ceo',
    name: 'Maya Chen',
    title: 'Founder & CEO',
    bio: 'Former Peloton product lead with a prior exit to Nike; operator across scaled consumer platforms.',
    linkedIn: 'https://www.linkedin.com/in/mayachen',
  },
  {
    id: 'cto',
    name: 'Jordan Malik',
    title: 'CTO',
    bio: 'Ex-Unity engineering director building real-time multiplayer systems powering 30M MAU games.',
    linkedIn: 'https://www.linkedin.com/in/jordanmalik',
  },
  {
    id: 'cgo',
    name: 'Amelia Ortiz',
    title: 'Chief Growth Officer',
    bio: 'Scaled ClassPass B2B partnerships to 15 countries; angel investor in 8 fitness tech startups.',
    linkedIn: 'https://www.linkedin.com/in/ameliaortiz',
  },
  {
    id: 'advisor',
    name: 'Dr. Luis Harper',
    title: 'Scientific Advisor',
    bio: 'Former WHO wellness researcher and advisor to Apple Fitness+ on behavioral health standards.',
    linkedIn: 'https://www.linkedin.com/in/luis-harper',
  },
] as const;

export const advisoryBoard: readonly TeamMember[] = [
  {
    id: 'advisor1',
    name: 'Priya Desai',
    title: 'Partner, Horizon Ventures',
    bio: 'Led Series B investments in Calm & Tonal with two portfolio exits.',
    linkedIn: 'https://www.linkedin.com/in/priyadesai',
  },
  {
    id: 'advisor2',
    name: 'Marcus Ellison',
    title: 'Former VP Partnerships, Strava',
    bio: 'Built global partnerships team driving 4x revenue expansion.',
    linkedIn: 'https://www.linkedin.com/in/marcus-ellison',
  },
  {
    id: 'advisor3',
    name: 'Dr. Alana Brooks',
    title: 'Sports Medicine Innovator',
    bio: 'Sold performance analytics startup to WHOOP; advisor to NBA teams.',
    linkedIn: 'https://www.linkedin.com/in/alana-brooks',
  },
] as const;

export const financialProjections: readonly FinancialProjection[] = [
  { id: 'fy25', year: 'FY25', revenue: '$4.6M', ebitda: '-$1.2M', notes: 'Seed capital focused on product hardening and cohort growth.' },
  { id: 'fy26', year: 'FY26', revenue: '$12.4M', ebitda: '$0.8M', notes: 'Marketplace scale unlocks positive unit economics.' },
  { id: 'fy27', year: 'FY27', revenue: '$28.0M', ebitda: '$6.3M', notes: 'Enterprise channels drive margin expansion to 22%.' },
] as const;

export const fundingHistory: readonly FundingMilestone[] = [
  { id: 'preseed', round: 'Pre-Seed (2023)', amount: '$1.5M', investors: 'Backed by Operators Collective & Techstars Sports' },
  { id: 'seed', round: 'Seed (2024)', amount: '$3.8M', investors: 'Led by Horizon Ventures with participation from notable angels' },
] as const;

export const currentRaise: FundingMilestone = {
  id: 'series_a',
  round: 'Series A (Current)',
  amount: '$8M target',
  investors: 'Allocating lead & strategic co-investor; 60% soft-circled',
};

export const useOfFunds: readonly UseOfFundsAllocation[] = [
  { id: 'product', category: 'Product & Engineering', percentage: '38%', narrative: 'Accelerate AI personalization & data infrastructure.' },
  { id: 'growth', category: 'Growth & Partnerships', percentage: '32%', narrative: 'Scale distribution channels and strategic alliances.' },
  { id: 'marketplace', category: 'Marketplace Expansion', percentage: '18%', narrative: 'Launch creator economy tools & commerce integrations.' },
  { id: 'operations', category: 'Operations & Compliance', percentage: '12%', narrative: 'Support global expansion and regulatory readiness.' },
] as const;

export const profitabilityTimeline: readonly HighlightCard[] = [
  {
    id: 'milestone1',
    title: 'Q4 FY25',
    subtitle: 'Net revenue inflection',
    bullets: ['Marketplace take rate increases to 10%', 'Enterprise wellness pilots convert to annual contracts'],
  },
  {
    id: 'milestone2',
    title: 'Q2 FY26',
    subtitle: 'Contribution margin positive',
    bullets: ['Automated onboarding reduces support cost by 43%', 'Paid marketing capped at 25% of revenue'],
  },
  {
    id: 'milestone3',
    title: 'Q1 FY27',
    subtitle: 'Full profitability',
    bullets: ['$28M ARR with 22% EBITDA', 'Working capital neutral with subscription prepay'],
  },
] as const;

export const investorResources: readonly ResourceAsset[] = [
  {
    id: 'pitch_deck',
    title: 'Investor Pitch Deck',
    description: 'Overview of market thesis, traction, and Series A terms.',
    type: 'deck',
    href: '#download/pitch-deck',
  },
  {
    id: 'financial_model',
    title: 'Financial Model (3-Year)',
    description: 'Detailed revenue build, expense drivers, and sensitivity analysis.',
    type: 'financials',
    href: '#download/financial-model',
  },
  {
    id: 'market_report',
    title: 'Market Research Compendium',
    description: 'Aggregated research on Gen Z fitness adoption & competitive landscape.',
    type: 'market',
    href: '#download/market-research',
  },
  {
    id: 'demo_library',
    title: 'Product Demo Library',
    description: 'Investor-focused walkthroughs across mobile, web, and API experiences.',
    type: 'demo',
    href: '#download/demo-library',
  },
] as const;

export const pressMentions: readonly PressMention[] = [
  { id: 'press1', source: 'TechCrunch', headline: 'WeFit reimagines social fitness for the post-gym era', date: 'Jan 2025' },
  { id: 'press2', source: 'Fast Company', headline: 'The competitive layer powering WeFit’s 89% retention', date: 'Feb 2025' },
  { id: 'press3', source: 'Bloomberg', headline: 'Investors eye WeFit’s network effects in $96B market', date: 'Mar 2025' },
  { id: 'press4', source: 'Vogue Business', headline: 'Wellness, gaming, and culture converge on WeFit', date: 'Mar 2025' },
] as const;

export const investorPartners: readonly PartnerLogo[] = [
  {
    id: 'horizon',
    name: 'Horizon Ventures',
    logo: 'https://c.animaapp.com/mfqo4zaxsuDsQ0/assets/icon-horizon.svg',
  },
  {
    id: 'operators',
    name: 'Operators Collective',
    logo: 'https://c.animaapp.com/mfqo4zaxsuDsQ0/assets/icon-operators.svg',
  },
  {
    id: 'techstars',
    name: 'Techstars Sports',
    logo: 'https://c.animaapp.com/mfqo4zaxsuDsQ0/assets/icon-techstars.svg',
  },
  {
    id: 'wearable',
    name: 'Wearable OEM Partner',
    logo: 'https://c.animaapp.com/mfqo4zaxsuDsQ0/assets/icon-wearable.svg',
  },
] as const;
