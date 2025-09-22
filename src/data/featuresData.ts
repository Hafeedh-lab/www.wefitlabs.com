export interface Feature {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly icon: string;
}

export const features: Feature[] = [
  {
    id: 'challenge-fitness',
    title: 'Real-Time Competition Engine',
    description: 'Dynamic challenge graph increases session frequency by 2.7x and sustains 89% retention at week 12.',
    icon: "https://c.animaapp.com/mfqo4zaxsuDsQ0/assets/icon-3.svg"
  },
  {
    id: 'wearable-tracking',
    title: 'Wearable & AI Telemetry',
    description: 'Aggregates 2.4M daily datapoints across Apple Health, Google Fit, and proprietary AI scoring for underwriting-grade insights.',
    icon: "https://c.animaapp.com/mfqo4zaxsuDsQ0/assets/icon-4.svg"
  },
  {
    id: 'achievements-rewards',
    title: 'Monetized Progression Loops',
    description: 'Tiered rewards and marketplace unlocks deliver $14.80 ARPU with a 44% paid upsell attach rate.',
    icon: "https://c.animaapp.com/mfqo4zaxsuDsQ0/assets/icon-5.svg"
  },
  {
    id: 'social-community',
    title: 'Creator-Led Community Flywheel',
    description: '4K+ micro-creators syndicate content and sponsorships, reducing CAC to $28 through organic referrals.',
    icon: "https://c.animaapp.com/mfqo4zaxsuDsQ0/assets/icon-6.svg"
  }
] as const;
