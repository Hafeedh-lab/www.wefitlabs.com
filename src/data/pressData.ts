export interface PressMention {
  readonly id: string;
  readonly outlet: string;
  readonly quote: string;
  readonly date: string;
}

export interface LogoItem {
  readonly id: string;
  readonly name: string;
  readonly logo: string;
}

export interface AwardItem {
  readonly id: string;
  readonly name: string;
  readonly year: string;
}

export interface PartnershipUpdate {
  readonly id: string;
  readonly partner: string;
  readonly detail: string;
  readonly timeframe: string;
}

export const pressMentions: PressMention[] = [
  {
    id: 'techcrunch',
    outlet: 'TechCrunch',
    quote: '“WeFit is building the competitive layer the fitness industry has been chasing for a decade.”',
    date: 'Jan 2025',
  },
  {
    id: 'fastcompany',
    outlet: 'Fast Company',
    quote: '“The blend of data, community, and game mechanics is WeFit’s unfair advantage.”',
    date: 'Mar 2025',
  },
  {
    id: 'forbes',
    outlet: 'Forbes',
    quote: '“Investors are circling WeFit for its category-defining retention metrics.”',
    date: 'Apr 2025',
  },
];

export const investorLogos: LogoItem[] = [
  { id: 'velocity', name: 'Velocity Ventures', logo: 'https://c.animaapp.com/mfqo4zaxsuDsQ0/assets/icon-3.svg' },
  { id: 'nextplay', name: 'NextPlay Capital', logo: 'https://c.animaapp.com/mfqo4zaxsuDsQ0/assets/icon-4.svg' },
  { id: 'peak', name: 'Peak Performance Fund', logo: 'https://c.animaapp.com/mfqo4zaxsuDsQ0/assets/icon-5.svg' },
];

export const industryAwards: AwardItem[] = [
  { id: 'sxsw', name: 'SXSW Innovation Finalist', year: '2024' },
  { id: 'ces', name: 'CES Sports Tech Award', year: '2025' },
  { id: 'webby', name: 'Webby Honoree – Fitness & Wellness', year: '2025' },
];

export const partnershipUpdates: PartnershipUpdate[] = [
  { id: 'mls', partner: 'MLS Next', detail: 'Pilot launching across 6 academies', timeframe: 'Summer 2025' },
  { id: 'nike', partner: 'Nike Labs', detail: 'Co-branded competition drop', timeframe: 'Fall 2025' },
  { id: 'lifetime', partner: 'Life Time', detail: 'Club network integration', timeframe: 'In diligence' },
];
