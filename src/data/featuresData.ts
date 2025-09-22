export interface Feature {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly icon: string;
}

export const features: Feature[] = [
  {
    id: 'challenge-fitness',
    title: 'Challenge-Based Fitness',
    description: 'Take part in exciting fitness challenges with friends or other users to stay motivated and push your limits.',
    icon: "https://c.animaapp.com/mfqo4zaxsuDsQ0/assets/icon-3.svg"
  },
  {
    id: 'wearable-tracking',
    title: 'Wearable and AI-Backed Tracking',
    description: 'Use wearables and AI to effortlessly track your fitness activities and meals.',
    icon: "https://c.animaapp.com/mfqo4zaxsuDsQ0/assets/icon-4.svg"
  },
  {
    id: 'achievements-rewards',
    title: 'Achievements & Rewards',
    description: 'Earn badges and rewards for your accomplishments, making fitness more rewarding.',
    icon: "https://c.animaapp.com/mfqo4zaxsuDsQ0/assets/icon-5.svg"
  },
  {
    id: 'social-community',
    title: 'Vibrant Social Community',
    description: 'Engage with a supportive community that shares your passion for fitness.',
    icon: "https://c.animaapp.com/mfqo4zaxsuDsQ0/assets/icon-6.svg"
  }
] as const;
