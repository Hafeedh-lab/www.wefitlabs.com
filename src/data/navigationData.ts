export interface NavigationLink {
  readonly id: string;
  readonly text: string;
  readonly href: string;
}

export const navigationLinks: NavigationLink[] = [
  { id: 'home', text: 'Home', href: './#home' },
  { id: 'feature', text: 'Feature', href: './#feature' },
  { id: 'leaderboard', text: 'Leaderboard', href: './#leaderboard' },
  { id: 'faqs', text: 'FAQs', href: './#faqs' },
  { id: 'discord', text: 'Discord', href: "https://discord.com/invite/XeXBXY7VQV" }
] as const;
