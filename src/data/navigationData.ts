export interface NavigationLink {
  readonly id: string;
  readonly text: string;
  readonly href: string;
}

export const navigationLinks: NavigationLink[] = [
  { id: 'home', text: 'Overview', href: './#home' },
  { id: 'market', text: 'Market', href: './#market' },
  { id: 'monetization', text: 'Monetization', href: './#monetization' },
  { id: 'highlights', text: 'Highlights', href: './#highlights' },
  { id: 'team', text: 'Team', href: './#team' },
  { id: 'financials', text: 'Financials', href: './#financials' },
  { id: 'resources', text: 'Resources', href: './#resources' },
  { id: 'social-proof', text: 'Social Proof', href: './#social-proof' },
  { id: 'discord', text: 'Community', href: 'https://discord.com/invite/XeXBXY7VQV' },
] as const;
