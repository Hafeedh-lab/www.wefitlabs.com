import React from 'react';
import { galleryImages } from '../data/galleryData';

export function GallerySection() {
  return (
    <div className="relative content-center items-center bg-black box-border caret-transparent gap-x-5 flex flex-col shrink-0 h-min justify-start gap-y-5 w-full overflow-hidden pt-[50px] pb-4 px-5 md:gap-x-[53px] md:gap-y-[53px] md:pb-[57px] md:px-10">
      <div className="box-content caret-black block md:aspect-auto md:box-border md:caret-transparent md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
        <div className="static box-content caret-black block flex-row shrink justify-normal min-h-0 min-w-0 w-auto break-normal md:relative md:aspect-auto md:box-border md:caret-transparent md:flex md:flex-col md:shrink-0 md:justify-start md:min-h-[auto] md:min-w-[auto] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[700px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
          <h1 className="text-black text-[32px] font-bold box-content caret-black leading-[normal] min-h-0 min-w-0 text-start break-normal font-times md:text-white md:text-[35px] md:aspect-auto md:box-border md:caret-transparent md:leading-[42px] md:min-h-[auto] md:min-w-[auto] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-center md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-unbounded">Get Fit, Have Fun with Exciting Challenges!</h1>
        </div>
      </div>
      <div className="static [align-items:normal] box-content caret-black gap-x-[normal] block flex-row shrink h-auto justify-normal min-h-0 min-w-0 gap-y-[normal] w-auto md:relative md:content-center md:items-center md:aspect-auto md:box-border md:caret-transparent md:gap-x-0 md:flex md:flex-col md:shrink-0 md:h-min md:justify-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-0 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[1198px] md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
        <div className="static bg-none box-content caret-black shrink h-auto w-auto z-auto left-auto top-auto md:absolute md:aspect-auto md:bg-[linear-gradient(rgb(0,0,0)_0%,rgba(255,255,255,0)_100%)] md:box-border md:caret-transparent md:shrink-0 md:h-[189px] md:left-[calc(50%_-_563px)] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[1126px] md:z-[1] md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:top-0"></div>
        <div className="static [align-items:normal] box-content caret-black gap-x-[normal] block shrink h-auto justify-normal min-h-0 min-w-0 gap-y-[normal] w-auto md:relative md:content-center md:items-center md:aspect-auto md:box-border md:caret-transparent md:gap-x-[9px] md:flex md:shrink-0 md:h-[297px] md:justify-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-[9px] md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[1149px] md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
          {galleryImages.row1.map((image) => (
            <div key={image.id} className={image.className}>
              <div className="static box-content caret-black inset-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:inset-0">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="box-content caret-black h-auto object-fill align-middle w-auto md:aspect-[auto_393_/_465] md:box-border md:caret-transparent md:h-full md:object-cover md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]" 
                />
              </div>
            </div>
          ))}
        </div>
        <div className="static [align-items:normal] box-content caret-black gap-x-[normal] block shrink h-auto justify-normal min-h-0 min-w-0 gap-y-[normal] w-auto md:relative md:content-center md:items-center md:aspect-auto md:box-border md:caret-transparent md:gap-x-[9px] md:flex md:shrink-0 md:h-[297px] md:justify-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-[9px] md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[1149px] md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
          {galleryImages.row2.map((image) => (
            <div key={image.id} className={image.className}>
              <div className={image.wrapperClass || "static box-content caret-black inset-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:inset-0"}>
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className={image.imageClass} 
                />
              </div>
            </div>
          ))}
        </div>
        <div className="static bg-none box-content caret-black shrink h-auto w-auto z-auto left-auto bottom-auto md:absolute md:aspect-auto md:bg-[linear-gradient(359deg,rgb(0,0,0)_0%,rgba(255,255,255,0)_100%)] md:box-border md:caret-transparent md:shrink-0 md:h-[198px] md:left-[calc(50%_-_563px)] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[1126px] md:z-[1] md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:bottom-0"></div>
      </div>
    </div>
  );
}
