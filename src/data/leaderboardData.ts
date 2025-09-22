export interface LeaderboardPlayer {
  readonly id: string;
  readonly rank: string;
  readonly name: string;
  readonly xp: string;
  readonly avatar: string;
  readonly rankIcon?: string;
  readonly avatarClass: string;
  readonly avatarWrapperClass: string;
  readonly avatarImageClass: string;
  readonly avatarSizes?: string;
}

export const leaderboardData: LeaderboardPlayer[] = [
  {
    id: 'player-1',
    rank: '1',
    name: 'gqrager',
    xp: '58,255 XP',
    avatar: "https://c.animaapp.com/mfqo4zaxsuDsQ0/assets/UwOp6y6goPFziWMVbCyU23WVc.png",
    rankIcon: "https://c.animaapp.com/mfqo4zaxsuDsQ0/assets/It2D9twofa2q8GVlHYBUVdalME.png",
    avatarClass: "static box-content caret-black shrink h-auto min-h-0 min-w-0 w-auto rounded-none md:relative md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:h-[50px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[50px] md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[55px] after:md:accent-auto after:md:box-border after:md:caret-transparent after:md:text-black after:md:block after:md:text-xs after:md:not-italic after:md:normal-nums after:md:font-normal after:md:h-full after:md:tracking-[normal] after:md:leading-[normal] after:md:list-outside after:md:list-disc after:md:absolute after:md:text-start after:md:indent-[0px] after:md:normal-case after:md:visible after:md:w-full after:md:rounded-[55px] after:md:border-separate after:md:border-2 after:md:border-solid after:md:border-white after:md:left-0 after:md:top-0 after:md:font-sans_serif",
    avatarWrapperClass: "static box-content caret-black rounded-none inset-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[55px] md:inset-0",
    avatarImageClass: "box-content caret-black h-auto object-fill align-middle w-auto rounded-none md:aspect-[auto_1024_/_1024] md:box-border md:caret-transparent md:h-full md:object-cover md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[55px]",
    avatarSizes: '50px'
  },
  {
    id: 'player-2',
    rank: '2',
    name: 'Charles.pb',
    xp: '57,260 XP',
    avatar: "https://c.animaapp.com/mfqo4zaxsuDsQ0/assets/WqxfM6PvGzHEcKSlhx1wwyIspo.png",
    rankIcon: "https://c.animaapp.com/mfqo4zaxsuDsQ0/assets/iBRtzP3NhvMcRCLdl5WazVKFoI.png",
    avatarClass: "static box-content caret-black shrink h-auto min-h-0 min-w-0 w-auto rounded-none md:relative md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:h-[50px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[50px] md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[55px] after:md:accent-auto after:md:box-border after:md:caret-transparent after:md:text-black after:md:block after:md:text-xs after:md:not-italic after:md:normal-nums after:md:font-normal after:md:h-full after:md:tracking-[normal] after:md:leading-[normal] after:md:list-outside after:md:list-disc after:md:absolute after:md:text-start after:md:indent-[0px] after:md:normal-case after:md:visible after:md:w-full after:md:rounded-[55px] after:md:border-separate after:md:border-2 after:md:border-solid after:md:border-white after:md:left-0 after:md:top-0 after:md:font-sans_serif",
    avatarWrapperClass: "static box-content caret-black rounded-none inset-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[55px] md:inset-0",
    avatarImageClass: "box-content caret-black h-auto object-fill align-middle w-auto rounded-none md:aspect-[auto_915_/_915] md:box-border md:caret-transparent md:h-full md:object-cover md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[55px]",
    avatarSizes: '50px'
  },
  {
    id: 'player-3',
    rank: '3',
    name: 'robes.co',
    xp: '51,905 XP',
    avatar: "https://c.animaapp.com/mfqo4zaxsuDsQ0/assets/AyvoJ7QaxEtUjZlBPcChHttzyA.jpg",
    rankIcon: "https://c.animaapp.com/mfqo4zaxsuDsQ0/assets/TgZKuSVogVGMeR3JzBfZOarnA.png",
    avatarClass: "static box-content caret-black shrink h-auto min-h-0 min-w-0 w-auto rounded-none md:relative md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:h-[50px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[50px] md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[276px] after:md:accent-auto after:md:box-border after:md:caret-transparent after:md:text-black after:md:block after:md:text-xs after:md:not-italic after:md:normal-nums after:md:font-normal after:md:h-full after:md:tracking-[normal] after:md:leading-[normal] after:md:list-outside after:md:list-disc after:md:absolute after:md:text-start after:md:indent-[0px] after:md:normal-case after:md:visible after:md:w-full after:md:border after:md:rounded-[276px] after:md:border-separate after:md:border-solid after:md:border-white after:md:left-0 after:md:top-0 after:md:font-sans_serif",
    avatarWrapperClass: "static box-content caret-black rounded-none inset-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[276px] md:inset-0",
    avatarImageClass: "box-content caret-black h-auto object-fill align-middle w-auto rounded-none md:aspect-[auto_256_/_256] md:box-border md:caret-transparent md:h-full md:object-cover md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[276px]"
  },
  {
    id: 'player-4',
    rank: '4',
    name: 'rrrubioooo',
    xp: '47,140 XP',
    avatar: "https://c.animaapp.com/mfqo4zaxsuDsQ0/assets/vPyBHpcVX7PAZgZxAXETbttNfDE.jpg",
    avatarClass: "static box-content caret-black shrink h-auto min-h-0 min-w-0 w-auto rounded-none md:relative md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:h-[50px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[50px] md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[276px] after:md:accent-auto after:md:box-border after:md:caret-transparent after:md:text-black after:md:block after:md:text-xs after:md:not-italic after:md:normal-nums after:md:font-normal after:md:h-full after:md:tracking-[normal] after:md:leading-[normal] after:md:list-outside after:md:list-disc after:md:absolute after:md:text-start after:md:indent-[0px] after:md:normal-case after:md:visible after:md:w-full after:md:rounded-[276px] after:md:border-separate after:md:border-2 after:md:border-solid after:md:border-white after:md:left-0 after:md:top-0 after:md:font-sans_serif",
    avatarWrapperClass: "static box-content caret-black rounded-none inset-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[276px] md:inset-0",
    avatarImageClass: "box-content caret-black h-auto object-fill align-middle w-auto rounded-none md:aspect-[auto_256_/_256] md:box-border md:caret-transparent md:h-full md:object-cover md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[276px]"
  },
  {
    id: 'player-5',
    rank: '5',
    name: 'Noblesalad',
    xp: '37,180 XP',
    avatar: "https://c.animaapp.com/mfqo4zaxsuDsQ0/assets/aHXrajlIkwwsFlRVQr9uACT9rw.jpg",
    avatarClass: "static box-content caret-black shrink h-auto min-h-0 min-w-0 w-auto rounded-none md:relative md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:h-[50px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[50px] md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[276px] after:md:accent-auto after:md:box-border after:md:caret-transparent after:md:text-black after:md:block after:md:text-xs after:md:not-italic after:md:normal-nums after:md:font-normal after:md:h-full after:md:tracking-[normal] after:md:leading-[normal] after:md:list-outside after:md:list-disc after:md:absolute after:md:text-start after:md:indent-[0px] after:md:normal-case after:md:visible after:md:w-full after:md:rounded-[276px] after:md:border-separate after:md:border-2 after:md:border-solid after:md:border-white after:md:left-0 after:md:top-0 after:md:font-sans_serif",
    avatarWrapperClass: "static box-content caret-black rounded-none inset-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[276px] md:inset-0",
    avatarImageClass: "box-content caret-black h-auto object-fill align-middle w-auto rounded-none md:aspect-[auto_4000_/_3585] md:box-border md:caret-transparent md:h-full md:object-cover md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[276px]",
    avatarSizes: '50px'
  },
  {
    id: 'player-6',
    rank: '6',
    name: 'Masaraptaraptor',
    xp: '29,030 XP',
    avatar: "https://c.animaapp.com/mfqo4zaxsuDsQ0/assets/LTACNYM2iQTybJz7NufPDTXrIU.png",
    avatarClass: "static box-content caret-black shrink h-auto min-h-0 min-w-0 w-auto rounded-none md:relative md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:h-[50px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[50px] md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[276px] after:md:accent-auto after:md:box-border after:md:caret-transparent after:md:text-black after:md:block after:md:text-xs after:md:not-italic after:md:normal-nums after:md:font-normal after:md:h-full after:md:tracking-[normal] after:md:leading-[normal] after:md:list-outside after:md:list-disc after:md:absolute after:md:text-start after:md:indent-[0px] after:md:normal-case after:md:visible after:md:w-full after:md:rounded-[276px] after:md:border-separate after:md:border-2 after:md:border-solid after:md:border-white after:md:left-0 after:md:top-0 after:md:font-sans_serif",
    avatarWrapperClass: "static box-content caret-black rounded-none inset-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[276px] md:inset-0",
    avatarImageClass: "box-content caret-black h-auto object-fill align-middle w-auto rounded-none md:aspect-[auto_360_/_360] md:box-border md:caret-transparent md:h-full md:object-cover md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[276px]"
  },
  {
    id: 'player-7',
    rank: '7',
    name: 'sugoipoe',
    xp: '26,380 XP',
    avatar: "https://c.animaapp.com/mfqo4zaxsuDsQ0/assets/9IRWpdzpGRD5YcD57LEp9zSizBs.jpg",
    avatarClass: "static box-content caret-black shrink h-auto min-h-0 min-w-0 w-auto rounded-none md:relative md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:h-[50px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[50px] md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[276px] after:md:accent-auto after:md:box-border after:md:caret-transparent after:md:text-black after:md:block after:md:text-xs after:md:not-italic after:md:normal-nums after:md:font-normal after:md:h-full after:md:tracking-[normal] after:md:leading-[normal] after:md:list-outside after:md:list-disc after:md:absolute after:md:text-start after:md:indent-[0px] after:md:normal-case after:md:visible after:md:w-full after:md:rounded-[276px] after:md:border-separate after:md:border-2 after:md:border-solid after:md:border-white after:md:left-0 after:md:top-0 after:md:font-sans_serif",
    avatarWrapperClass: "static box-content caret-black rounded-none inset-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[276px] md:inset-0",
    avatarImageClass: "box-content caret-black h-auto object-fill align-middle w-auto rounded-none md:aspect-[auto_3236_/_3484] md:box-border md:caret-transparent md:h-full md:object-cover md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[276px]",
    avatarSizes: '50px'
  },
  {
    id: 'player-8',
    rank: '8',
    name: 'Suundubu',
    xp: '25,935 XP',
    avatar: "https://c.animaapp.com/mfqo4zaxsuDsQ0/assets/REA88lwTssOIWT9cLjroowp6nBg.png",
    avatarClass: "static box-content caret-black shrink h-auto min-h-0 min-w-0 w-auto rounded-none md:relative md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:h-[50px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[50px] md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[276px] after:md:accent-auto after:md:box-border after:md:caret-transparent after:md:text-black after:md:block after:md:text-xs after:md:not-italic after:md:normal-nums after:md:font-normal after:md:h-full after:md:tracking-[normal] after:md:leading-[normal] after:md:list-outside after:md:list-disc after:md:absolute after:md:text-start after:md:indent-[0px] after:md:normal-case after:md:visible after:md:w-full after:md:rounded-[276px] after:md:border-separate after:md:border-2 after:md:border-solid after:md:border-white after:md:left-0 after:md:top-0 after:md:font-sans_serif",
    avatarWrapperClass: "static box-content caret-black rounded-none inset-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[276px] md:inset-0",
    avatarImageClass: "box-content caret-black h-auto object-fill align-middle w-auto rounded-none md:aspect-[auto_595_/_595] md:box-border md:caret-transparent md:h-full md:object-cover md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[276px]",
    avatarSizes: '50px'
  },
  {
    id: 'player-9',
    rank: '9',
    name: 'lisbth_',
    xp: '10,650 XP',
    avatar: "https://c.animaapp.com/mfqo4zaxsuDsQ0/assets/a7QsMxCdqIYbbGR648cEGCsA7U.jpg",
    avatarClass: "static box-content caret-black shrink h-auto min-h-0 min-w-0 w-auto rounded-none md:relative md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:h-[50px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[50px] md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[276px] after:md:accent-auto after:md:box-border after:md:caret-transparent after:md:text-black after:md:block after:md:text-xs after:md:not-italic after:md:normal-nums after:md:font-normal after:md:h-full after:md:tracking-[normal] after:md:leading-[normal] after:md:list-outside after:md:list-disc after:md:absolute after:md:text-start after:md:indent-[0px] after:md:normal-case after:md:visible after:md:w-full after:md:rounded-[276px] after:md:border-separate after:md:border-2 after:md:border-solid after:md:border-white after:md:left-0 after:md:top-0 after:md:font-sans_serif",
    avatarWrapperClass: "static box-content caret-black rounded-none inset-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[276px] md:inset-0",
    avatarImageClass: "box-content caret-black h-auto object-fill align-middle w-auto rounded-none md:aspect-[auto_256_/_256] md:box-border md:caret-transparent md:h-full md:object-cover md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[276px]"
  },
  {
    id: 'player-10',
    rank: '10',
    name: 'Jingle.Jingle',
    xp: '10,530 XP',
    avatar: "https://c.animaapp.com/mfqo4zaxsuDsQ0/assets/tvAgFLfFdV64hgVIy9fYqRQDkk.png",
    avatarClass: "static box-content caret-black shrink h-auto min-h-0 min-w-0 w-auto rounded-none md:relative md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:h-[50px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[50px] md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[276px] after:md:accent-auto after:md:box-border after:md:caret-transparent after:md:text-black after:md:block after:md:text-xs after:md:not-italic after:md:normal-nums after:md:font-normal after:md:h-full after:md:tracking-[normal] after:md:leading-[normal] after:md:list-outside after:md:list-disc after:md:absolute after:md:text-start after:md:indent-[0px] after:md:normal-case after:md:visible after:md:w-full after:md:rounded-[276px] after:md:border-separate after:md:border-2 after:md:border-solid after:md:border-white after:md:left-0 after:md:top-0 after:md:font-sans_serif",
    avatarWrapperClass: "static box-content caret-black rounded-none inset-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[276px] md:inset-0",
    avatarImageClass: "box-content caret-black h-auto object-fill align-middle w-auto rounded-none md:aspect-[auto_256_/_256] md:box-border md:caret-transparent md:h-full md:object-cover md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[276px]"
  }
] as const;
