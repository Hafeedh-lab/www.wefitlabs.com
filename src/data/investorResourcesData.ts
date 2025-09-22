export interface InvestorResource {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly href: string;
  readonly fileType: 'pdf' | 'xlsx' | 'video';
}

export const investorResources: InvestorResource[] = [
  {
    id: 'pitch-deck',
    name: 'Investor Pitch Deck',
    description: 'Comprehensive snapshot of traction, product roadmap, and funding strategy.',
    href: '#',
    fileType: 'pdf',
  },
  {
    id: 'financial-model',
    name: 'Financial Model (3-Year)',
    description: 'Assumptions, revenue build, and sensitivity scenarios for WeFit growth plan.',
    href: '#',
    fileType: 'xlsx',
  },
  {
    id: 'market-report',
    name: 'Market Research Library',
    description: 'Primary and secondary research on the $96B global digital fitness landscape.',
    href: '#',
    fileType: 'pdf',
  },
  {
    id: 'demo-library',
    name: 'Product Demo Library',
    description: 'On-demand demos featuring social competitions, retention OS, and analytics.',
    href: '#',
    fileType: 'video',
  },
];
