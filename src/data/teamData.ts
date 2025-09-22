export interface TeamMember {
  readonly id: string;
  readonly name: string;
  readonly title: string;
  readonly background: string;
  readonly achievements: string;
  readonly linkedin: string;
}

export const foundingTeam: TeamMember[] = [
  {
    id: 'ceo',
    name: 'Jordan Matthews',
    title: 'Founder & CEO',
    background: 'Former Nike digital innovation lead; scaled consumer fitness tech to 5M users.',
    achievements: 'Built and exited Trainlytics (acquired by Under Armour).',
    linkedin: 'https://www.linkedin.com/in/jordan-matthews/',
  },
  {
    id: 'cto',
    name: 'Priya Desai',
    title: 'Co-Founder & CTO',
    background: 'Ex-Unity engineering director specializing in real-time multiplayer systems.',
    achievements: 'Holds 3 patents in real-time telemetry streaming.',
    linkedin: 'https://www.linkedin.com/in/priya-desai/',
  },
  {
    id: 'coo',
    name: 'Ethan Ross',
    title: 'COO',
    background: 'Former ClassPass expansion lead; launched 20+ markets globally.',
    achievements: 'Scaled marketplace supply-side to $60M ARR.',
    linkedin: 'https://www.linkedin.com/in/ethan-ross/',
  },
];

export const advisoryBoard: TeamMember[] = [
  {
    id: 'advisor-1',
    name: 'Dr. Amina Clarke',
    title: 'Sports Science Advisor',
    background: 'Director of Performance Science, USA Track & Field.',
    achievements: 'Author of 40+ peer-reviewed studies on high-performance training.',
    linkedin: 'https://www.linkedin.com/in/amina-clarke/',
  },
  {
    id: 'advisor-2',
    name: 'Luca Romano',
    title: 'Product Strategy Advisor',
    background: 'Former VP Product, Strava; Angel investor in connected fitness.',
    achievements: 'Led Strava to 110M community milestone.',
    linkedin: 'https://www.linkedin.com/in/luca-romano/',
  },
  {
    id: 'advisor-3',
    name: 'Grace Ito',
    title: 'Capital Markets Advisor',
    background: 'Partner at Velocity Ventures; focus on digital health & sports tech.',
    achievements: 'Supported 6 portfolio exits > $150M.',
    linkedin: 'https://www.linkedin.com/in/grace-ito/',
  },
];
