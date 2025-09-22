export interface GalleryImage {
  readonly id: string;
  readonly src: string;
  readonly alt: string;
  readonly className: string;
  readonly wrapperClass?: string;
  readonly imageClass?: string;
}

export interface GalleryData {
  readonly row1: GalleryImage[];
  readonly row2: GalleryImage[];
}

export const galleryImages: GalleryData = {
  row1: [
    {
      id: 'gallery-1',
      src: "https://c.animaapp.com/mfqo4zaxsuDsQ0/assets/Sy6lEdF11IuVcygjLkeR2c11b8.jpg",
      alt: 'Gallery image of wefit team',
      className: "static box-content caret-black shrink h-auto min-h-0 min-w-0 transform-none w-auto md:relative md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:h-[232px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:rotate-[-5.699994716814071deg] md:w-[196px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
    },
    {
      id: 'gallery-2',
      src: "https://c.animaapp.com/mfqo4zaxsuDsQ0/assets/CALqVTNYo4sUQa0PT0ykykOHwg.jpg",
      alt: 'Gallery image of wefit team',
      className: "static box-content caret-black shrink h-auto min-h-0 min-w-0 transform-none w-auto md:relative md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:h-[197px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:rotate-[-5.699994716814071deg] md:w-[196px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
    },
    {
      id: 'gallery-3',
      src: "https://c.animaapp.com/mfqo4zaxsuDsQ0/assets/PvRBMJODGJlz2qq04mIKyLTwzU.jpg",
      alt: 'Gallery image of wefit team',
      className: "static box-content caret-black shrink h-auto min-h-0 min-w-0 transform-none w-auto md:relative md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:h-[170px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:rotate-[-5.699994716814071deg] md:w-[196px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
    },
    {
      id: 'gallery-4',
      src: "https://c.animaapp.com/mfqo4zaxsuDsQ0/assets/0aAtIvBKM4Upx2ktE2XQODSMTY.jpg",
      alt: 'Gallery image of wefit team',
      className: "static box-content caret-black shrink h-auto min-h-0 min-w-0 transform-none w-auto md:relative md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:h-[247px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:rotate-[-5.699994716814071deg] md:w-[196px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
    }
  ],
  row2: [
    {
      id: 'gallery-5',
      src: "https://c.animaapp.com/mfqo4zaxsuDsQ0/assets/ayWko0wzBrLJnFvi34Tt8qBz9qY.jpg",
      alt: 'Gallery image of wefit team',
      className: "static box-content caret-black shrink h-auto min-h-0 min-w-0 transform-none w-auto md:relative md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:h-[232px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:rotate-[-5.699994716814071deg] md:w-[196px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
    },
    {
      id: 'gallery-6',
      src: "https://c.animaapp.com/mfqo4zaxsuDsQ0/assets/uvm6VmW4CkT8XDytl3WyRCKkfw8.jpg",
      alt: 'Gallery image of wefit team',
      className: "static box-content caret-black shrink h-auto min-h-0 min-w-0 transform-none w-auto rounded-none md:relative md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:h-[197px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:rotate-[-5.699994716814071deg] md:w-[196px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[10px]",
      wrapperClass: "static box-content caret-black rounded-none inset-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[10px] md:inset-0",
      imageClass: "box-content caret-black h-auto object-fill align-middle w-auto rounded-none md:aspect-[auto_393_/_341] md:box-border md:caret-transparent md:h-full md:object-cover md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[10px]"
    },
    {
      id: 'gallery-7',
      src: "https://c.animaapp.com/mfqo4zaxsuDsQ0/assets/z87vyEbBe6p0k9V64ctZkXxpHEk.jpg",
      alt: 'Gallery image of wefit team',
      className: "static box-content caret-black shrink h-auto min-h-0 min-w-0 transform-none w-auto rounded-none md:relative md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:h-[170px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:rotate-[-5.699994716814071deg] md:w-[196px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[10px]",
      wrapperClass: "static box-content caret-black rounded-none inset-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[10px] md:inset-0",
      imageClass: "box-content caret-black h-auto object-fill align-middle w-auto rounded-none md:aspect-[auto_393_/_395] md:box-border md:caret-transparent md:h-full md:object-cover md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[10px]"
    },
    {
      id: 'gallery-8',
      src: "https://c.animaapp.com/mfqo4zaxsuDsQ0/assets/pVuRyU36swIrdloG49k6oq8lBA.jpg",
      alt: 'Gallery image of wefit team',
      className: "static box-content caret-black shrink h-auto min-h-0 min-w-0 transform-none w-auto md:relative md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:h-[247px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:rotate-[-5.699994716814071deg] md:w-[196px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
    }
  ]
} as const;
