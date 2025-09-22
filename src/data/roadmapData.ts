export interface RoadmapDate {
  readonly id: string;
  readonly text: string;
  readonly className: string;
}

export interface RoadmapMilestone {
  readonly id: string;
  readonly text: string;
  readonly className: string;
}

export interface RoadmapData {
  readonly dates: RoadmapDate[];
  readonly milestones: RoadmapMilestone[];
}

export const roadmapData: RoadmapData = {
  dates: [
    { id: 'date-1', text: 'Oct 2024', className: "text-base box-content caret-black leading-[normal] min-h-0 min-w-0 text-start break-normal font-times md:aspect-auto md:box-border md:caret-transparent md:leading-6 md:min-h-[auto] md:min-w-[auto] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-center md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-unbounded" },
    { id: 'date-2', text: 'Jan/Feb 2025', className: "text-black text-base box-content caret-black leading-[normal] min-h-0 min-w-0 text-start break-normal font-times md:text-white md:aspect-auto md:box-border md:caret-transparent md:leading-6 md:min-h-[auto] md:min-w-[auto] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-center md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-unbounded" },
    { id: 'date-3', text: 'Summer 2025', className: "text-black text-base box-content caret-black leading-[normal] min-h-0 min-w-0 text-start break-normal font-times md:text-white md:aspect-auto md:box-border md:caret-transparent md:leading-6 md:min-h-[auto] md:min-w-[auto] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-center md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-unbounded" }
  ],
  milestones: [
    { id: 'milestone-1', text: 'Pre Alpha Launch(Discord)', className: "static box-content caret-black block flex-row shrink h-auto justify-normal min-h-0 min-w-0 w-auto break-normal md:relative md:aspect-auto md:box-border md:caret-transparent md:flex md:flex-col md:shrink-0 md:h-full md:justify-start md:min-h-[auto] md:min-w-[auto] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[158px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]" },
    { id: 'milestone-2', text: 'MVP Launch iOS(Alpha)', className: "static box-content caret-black block flex-row shrink justify-normal min-h-0 min-w-0 w-auto break-normal md:relative md:aspect-auto md:box-border md:caret-transparent md:flex md:flex-col md:shrink-0 md:justify-start md:min-h-[auto] md:min-w-[auto] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[158px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]" },
    { id: 'milestone-3', text: 'iOS & App Store Launch', className: "static box-content caret-black block flex-row shrink justify-normal min-h-0 min-w-0 w-auto break-normal md:relative md:aspect-auto md:box-border md:caret-transparent md:flex md:flex-col md:shrink-0 md:justify-start md:min-h-[auto] md:min-w-[auto] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[158px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]" }
  ]
} as const;
