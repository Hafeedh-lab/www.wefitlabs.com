export interface FAQ {
  readonly id: string;
  readonly question: string;
}

export const faqData: FAQ[] = [
  { id: 'faq-1', question: 'What is WeFit?' },
  { id: 'faq-2', question: 'How do I use WeFit Now?' },
  { id: 'faq-3', question: 'How do I earn XP?' },
  { id: 'faq-4', question: 'When will WeFit officially launch?' }
] as const;
