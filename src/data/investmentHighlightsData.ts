export interface HighlightCard {
  readonly id: string;
  readonly title: string;
  readonly description: string;
}

export const technologyMoats: HighlightCard[] = [
  {
    id: 'engine',
    title: 'Gamified Retention Engine',
    description: 'Patent-pending competitive scoring algorithm driving 3.2x session frequency.',
  },
  {
    id: 'ai',
    title: 'AI Personalization Layer',
    description: 'Adaptive training prescriptions blending wearable telemetry with social context.',
  },
];

export const strategicPartnerships: HighlightCard[] = [
  {
    id: 'nike',
    title: 'Global Apparel Leader',
    description: 'Co-developing limited edition drops tied to major challenges (launching Q3).',
  },
  {
    id: 'garmin',
    title: 'Wearable Integrations',
    description: 'Native sync with Garmin, Oura, and Apple Health unlocking 90% device coverage.',
  },
];

export const regulatoryAdvantages: HighlightCard[] = [
  {
    id: 'privacy',
    title: 'Privacy-First Architecture',
    description: 'SOC2 Type I complete; Type II in progress with zero PII incidents.',
  },
  {
    id: 'compliance',
    title: 'Global Compliance Readiness',
    description: 'GDPR, CCPA, and HIPAA-aligned data governance with automated audit trails.',
  },
];

export const scalabilityMetrics: HighlightCard[] = [
  {
    id: 'infrastructure',
    title: 'Elastic Infrastructure',
    description: 'Serverless core scales to 5M concurrent events with <150ms latency.',
  },
  {
    id: 'expansion',
    title: 'International Expansion',
    description: 'Localized beta live in 3 countries with 40% faster growth than US cohorts.',
  },
];
