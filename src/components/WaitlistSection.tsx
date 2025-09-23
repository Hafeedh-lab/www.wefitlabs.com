import React from 'react';
import { socialProofImages } from '../data/socialProofData';

export function WaitlistSection() {
  return (
    <div
      id="waitlist"
      className="relative content-center items-center bg-black box-border caret-transparent gap-x-2.5 flex shrink-0 h-min justify-center gap-y-2.5 w-full overflow-hidden"
    >
      <div className="box-content caret-black block md:aspect-auto md:box-border md:caret-transparent md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
        <div className="static box-content caret-black shrink max-w-none min-h-0 min-w-0 w-auto md:relative md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:max-w-[1200px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
          <header className="static [align-items:normal] bg-transparent box-content caret-black gap-x-[normal] block flex-row h-auto justify-normal max-w-none gap-y-[normal] w-auto p-0 md:relative md:content-center md:items-center md:aspect-auto md:bg-black md:box-border md:caret-transparent md:gap-x-5 md:flex md:flex-col md:h-min md:justify-start md:max-w-full md:overscroll-x-auto md:overscroll-y-auto md:gap-y-5 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:pt-10 md:pb-9 md:px-10 md:scroll-m-0 md:scroll-p-[auto]">
            <div className="static box-content caret-black block flex-row shrink justify-normal min-h-0 min-w-0 w-auto break-normal md:relative md:aspect-auto md:box-border md:caret-transparent md:flex md:flex-col md:shrink-0 md:justify-start md:min-h-[auto] md:min-w-[auto] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[684px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              <h1 className="text-black text-[32px] font-bold box-content caret-black leading-[normal] min-h-0 min-w-0 text-start break-normal font-times md:text-stone-50 md:text-[29px] md:aspect-auto md:box-border md:caret-transparent md:leading-[34.8px] md:min-h-[auto] md:min-w-[auto] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-center md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-unbounded">
                Join our waitlist to be notified when we launch as well as earn rewards!
              </h1>
            </div>
            <div className="static [align-items:normal] box-content caret-black gap-x-[normal] block shrink h-auto justify-normal min-h-0 min-w-0 gap-y-[normal] w-auto md:relative md:content-center md:items-center md:aspect-auto md:box-border md:caret-transparent md:gap-x-2.5 md:flex md:shrink-0 md:h-min md:justify-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-2.5 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              <div className="static box-content caret-black shrink min-h-0 min-w-0 w-auto md:relative md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[500px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                <div className="static [align-items:normal] box-content caret-black block h-auto justify-normal w-auto md:relative md:items-center md:aspect-auto md:box-border md:caret-transparent md:flex md:h-full md:justify-center md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  <form className="static box-content caret-black gap-x-[normal] block min-h-0 min-w-0 gap-y-[normal] w-auto md:relative md:aspect-auto md:box-border md:caret-transparent md:gap-x-0 md:flex md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-0 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                    <input 
                      type="email" 
                      name="email" 
                      placeholder="Enter your email address" 
                      defaultValue="" 
                      className="text-black text-[13.3333px] bg-white shadow-none box-content caret-black inline-block leading-[normal] min-h-0 min-w-0 w-auto px-0.5 py-px rounded-none font-arial md:appearance-none md:text-white md:text-[15px] md:aspect-auto md:bg-neutral-800 md:shadow-[rgb(65,185,131)_0px_0px_0px_0px_inset] md:box-border md:caret-transparent md:block md:leading-[18px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:pl-[15px] md:pr-[165px] md:py-[15px] md:scroll-m-0 md:scroll-p-[auto] md:rounded-[100px] md:font-unbounded" 
                    />
                    <div className="static box-content caret-black right-auto inset-y-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:right-1 md:inset-y-1">
                      <input 
                        type="submit" 
                        value="Join Waitlist" 
                        className="text-[13.3333px] font-normal bg-white box-content caret-black h-auto leading-[normal] text-start text-wrap w-auto z-auto px-0.5 py-px rounded-none font-arial md:appearance-none md:text-sm md:font-semibold md:aspect-auto md:bg-emerald-400 md:box-border md:caret-transparent md:h-full md:leading-[14px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-center md:decoration-auto md:underline-offset-auto md:text-nowrap md:w-[150px] md:z-[1] md:[mask-position:0%] md:bg-left-top md:px-3 md:py-0 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[96px] md:font-unbounded" 
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="static [align-items:normal] box-content caret-black gap-x-[normal] block shrink h-auto justify-normal min-h-0 min-w-0 gap-y-[normal] w-auto md:relative md:content-center md:items-center md:aspect-auto md:box-border md:caret-transparent md:gap-x-5 md:flex md:shrink-0 md:h-min md:justify-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-5 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-min md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              <div className="static box-content caret-black shrink h-auto min-h-0 min-w-0 w-auto md:relative md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:h-10 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[115px] md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                {socialProofImages.map((image) => (
                  <div key={image.id} className={image.className}>
                    <div className="static box-content caret-black rounded-none inset-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[100%] md:inset-0">
                      <img src={image.src} alt="" className="box-content caret-black h-auto object-fill align-middle w-auto rounded-none md:aspect-[auto_200_/_200] md:box-border md:caret-transparent md:h-full md:object-cover md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[100%]" />
                    </div>
                  </div>
                ))}
              </div>
              <div className="static box-content caret-black block flex-row shrink justify-normal min-h-0 min-w-0 text-wrap md:relative md:aspect-auto md:box-border md:caret-transparent md:flex md:flex-col md:shrink-0 md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                <p className="text-black text-base box-content caret-black leading-[normal] min-h-0 min-w-0 text-start text-wrap font-times md:text-white md:text-sm md:aspect-auto md:box-border md:caret-transparent md:leading-6 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-center md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-unbounded">Join 100 + Users who signed up!</p>
              </div>
            </div>
            <div className="static bg-transparent box-content caret-black shrink h-auto min-h-0 min-w-0 w-auto md:relative md:aspect-auto md:bg-neutral-800 md:box-border md:caret-transparent md:shrink-0 md:h-px md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"></div>
            <div className="static [align-items:normal] box-content caret-black block shrink h-auto justify-normal min-h-0 min-w-0 w-auto p-0 md:relative md:content-start md:items-start md:aspect-auto md:box-border md:caret-transparent md:flex md:shrink-0 md:h-min md:justify-between md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:px-5 md:py-2.5 md:scroll-m-0 md:scroll-p-[auto]">
              <div className="static box-content caret-black block basis-auto flex-row grow-0 shrink justify-normal min-h-0 min-w-0 w-auto break-normal md:relative md:aspect-auto md:box-border md:caret-transparent md:flex md:basis-0 md:flex-col md:grow md:shrink-0 md:justify-start md:min-h-[auto] md:min-w-[auto] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-px md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                <p className="text-black font-normal box-content caret-black leading-[normal] min-h-0 min-w-0 text-start break-normal font-times md:text-white md:font-light md:aspect-auto md:box-border md:caret-transparent md:leading-5 md:min-h-[auto] md:min-w-[auto] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-center md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-unbounded">
                  WeFit is a dynamic platform that makes fitness fun and engaging through exciting challenges and a supportive community. Compete with friends, track your progress , and earn rewards as you achieve your goals. Join WeFit today and transform your workout experience into a social adventure!
                </p>
              </div>
            </div>
          </header>
        </div>
      </div>
    </div>
  );
}
