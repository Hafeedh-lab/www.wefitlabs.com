export interface NavigationLink {
  readonly id: string;
  readonly text: string;
  readonly href: string;
}

export const navigationLinks: NavigationLink[] = [
  { id: 'home', text: 'Overview', href: '#home' },
  { id: 'market', text: 'Traction', href: '#market' },
  { id: 'model', text: 'Business Model', href: '#model' },
  { id: 'team', text: 'Team', href: '#team' },
  { id: 'financials', text: 'Financials', href: '#financials' },
  { id: 'resources', text: 'Resources', href: '#resources' },
  { id: 'faqs', text: 'FAQs', href: '#faqs' },
  { id: 'discord', text: 'Discord', href: 'https://discord.com/invite/XeXBXY7VQV' }
] as const;
