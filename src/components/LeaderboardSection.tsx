import React from 'react';
import { leaderboardData } from '../data/leaderboardData';

export function LeaderboardSection() {
  return (
    <div className="relative content-center items-center bg-neutral-950 box-border caret-transparent gap-x-[15px] flex flex-col shrink-0 h-[920px] justify-start gap-y-[15px] w-[358px] pt-[26px] pb-[70px] md:h-[1156px] md:w-full after:accent-auto after:box-border after:caret-transparent after:text-black after:block after:text-xs after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-full after:border-emerald-950 after:border-b after:border-separate after:border-t after:border-solid after:left-0 after:top-0 after:font-sans_serif">
      <div className="relative content-center items-center box-border caret-transparent gap-x-2.5 flex shrink-0 h-[63px] justify-center gap-y-2.5 w-[322px] overflow-hidden md:h-min md:w-[966px]">
        <div className="relative content-center items-center box-border caret-transparent gap-x-2.5 flex basis-0 grow shrink-0 h-[66px] justify-center gap-y-2.5 w-px overflow-hidden md:h-[81px]">
          <div className="box-content caret-black block md:aspect-auto md:box-border md:caret-transparent md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <div className="static box-content caret-black block flex-row shrink justify-normal min-h-0 min-w-0 text-wrap md:relative md:aspect-auto md:box-border md:caret-transparent md:flex md:flex-col md:shrink-0 md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              <p className="text-black text-base font-normal box-content caret-black leading-[normal] min-h-0 min-w-0 text-start text-wrap font-times md:text-white md:text-[35px] md:font-bold md:aspect-auto md:box-border md:caret-transparent md:leading-[42px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-unbounded">Engagement leaders driving retention</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative content-center items-center box-border caret-transparent gap-x-0 flex shrink-0 h-[54px] justify-center gap-y-0 w-[322px] overflow-hidden md:h-[77px] md:w-[966px]">
        <div className="relative content-center items-center box-border caret-transparent gap-x-0 flex basis-0 grow-[0.5] shrink-0 h-full justify-center gap-y-0 w-px overflow-hidden pr-[15px] md:grow md:pr-0">
          <div className="box-content caret-black block md:aspect-auto md:box-border md:caret-transparent md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <div className="static box-content caret-black block flex-row shrink justify-normal min-h-0 min-w-0 text-wrap md:relative md:aspect-auto md:box-border md:caret-transparent md:flex md:flex-col md:shrink-0 md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              <p className="text-black text-base box-content caret-black leading-[normal] min-h-0 min-w-0 text-wrap font-times md:text-zinc-50 md:text-[15px] md:aspect-auto md:box-border md:caret-transparent md:leading-[18px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-unbounded">Engagement Rank</p>
            </div>
          </div>
        </div>
        <div className="relative content-center items-center box-border caret-transparent gap-x-2.5 flex basis-0 grow shrink-0 h-full justify-start gap-y-2.5 w-px overflow-hidden pl-0 md:pl-[50px]">
          <div className="box-content caret-black block md:aspect-auto md:box-border md:caret-transparent md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <div className="static box-content caret-black block flex-row shrink justify-normal min-h-0 min-w-0 text-wrap md:relative md:aspect-auto md:box-border md:caret-transparent md:flex md:flex-col md:shrink-0 md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              <p className="text-black text-base box-content caret-black leading-[normal] min-h-0 min-w-0 text-wrap font-times md:text-zinc-50 md:text-[15px] md:aspect-auto md:box-border md:caret-transparent md:leading-[18px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-unbounded">Power Member</p>
            </div>
          </div>
        </div>
        <div className="relative content-center items-center box-border caret-transparent gap-x-0 flex basis-0 grow-[0.8] shrink-0 h-full justify-center gap-y-0 w-px overflow-hidden md:grow">
          <div className="box-content caret-black block md:aspect-auto md:box-border md:caret-transparent md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <div className="static box-content caret-black block flex-row shrink justify-normal min-h-0 min-w-0 text-wrap md:relative md:aspect-auto md:box-border md:caret-transparent md:flex md:flex-col md:shrink-0 md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              <p className="text-black text-base box-content caret-black leading-[normal] min-h-0 min-w-0 text-wrap font-times md:text-zinc-50 md:text-[15px] md:aspect-auto md:box-border md:caret-transparent md:leading-[18px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-unbounded">XP (Retention Score)</p>
            </div>
          </div>
        </div>
      </div>
      {leaderboardData.map((player, index) => (
        <div key={player.id} className={index === 1 ? "relative content-center items-center bg-neutral-950 box-border caret-transparent gap-x-0 flex shrink-0 h-[58px] justify-center gap-y-0 w-[322px] overflow-hidden rounded-[5px] md:h-[74px] md:w-[966px] after:accent-auto after:box-border after:caret-transparent after:text-black after:block after:text-xs after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-full after:border after:border-gray-800 after:rounded-[5px] after:border-separate after:border-solid after:left-0 after:top-0 after:font-sans_serif" : "relative content-center items-center bg-black box-border caret-transparent gap-x-0 flex shrink-0 h-[58px] justify-center gap-y-0 w-[322px] overflow-hidden rounded-[5px] md:h-[74px] md:w-[966px] after:accent-auto after:box-border after:caret-transparent after:text-black after:block after:text-xs after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-full after:border after:border-gray-800 after:rounded-[5px] after:border-separate after:border-solid after:left-0 after:top-0 after:font-sans_serif"}>
          <div className={index === 1 ? "relative content-center items-center box-border caret-transparent gap-x-2.5 flex basis-0 grow-[0.5] shrink-0 h-full justify-center gap-y-2.5 w-px overflow-hidden pr-[15px] md:grow md:pr-0" : "relative content-center items-center box-border caret-transparent gap-x-0 flex basis-0 grow-[0.5] shrink-0 h-full justify-center gap-y-0 w-px overflow-hidden pr-[15px] md:gap-x-2.5 md:grow md:gap-y-2.5 md:pr-0"}>
            <div className="box-content caret-black block md:aspect-auto md:box-border md:caret-transparent md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              {player.rankIcon ? (
                <div className="static box-content caret-black shrink h-auto min-h-0 min-w-0 w-auto md:relative md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:h-[31px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[31px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  <div className="static box-content caret-black inset-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:inset-0">
                    <img src={player.rankIcon} alt="" className="box-content caret-black h-auto object-fill align-middle w-auto md:aspect-[auto_62_/_62] md:box-border md:caret-transparent md:h-full md:object-cover md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]" />
                  </div>
                </div>
              ) : (
                <div className={index === 8 ? "relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap" : "static box-content caret-black block flex-row shrink justify-normal min-h-0 min-w-0 text-wrap md:relative md:aspect-auto md:box-border md:caret-transparent md:flex md:flex-col md:shrink-0 md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"}>
                  <p className={index === 8 ? "text-zinc-50 text-sm box-border caret-transparent leading-[16.8px] text-nowrap font-unbounded" : "text-black text-base box-content caret-black leading-[normal] min-h-0 min-w-0 text-wrap font-times md:text-zinc-50 md:text-sm md:aspect-auto md:box-border md:caret-transparent md:leading-[16.8px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-unbounded"}>{player.rank}</p>
                </div>
              )}
            </div>
          </div>
          <div className="relative content-center items-center box-border caret-transparent gap-x-2.5 flex basis-0 grow shrink-0 h-full justify-start gap-y-2.5 w-px overflow-hidden pl-0 md:pl-[50px]">
            <div className="box-content caret-black block md:aspect-auto md:box-border md:caret-transparent md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              <div className={player.avatarClass}>
                <div className={player.avatarWrapperClass}>
                  <img 
                    sizes={player.avatarSizes} 
                    src={player.avatar} 
                    alt="user image according to there rank" 
                    className={player.avatarImageClass} 
                  />
                </div>
              </div>
              <div className="box-content caret-black block md:aspect-auto md:box-border md:caret-transparent md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                <div className="static box-content caret-black block flex-row shrink justify-normal min-h-0 min-w-0 text-wrap md:relative md:aspect-auto md:box-border md:caret-transparent md:flex md:flex-col md:shrink-0 md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  <p className="text-black text-base box-content caret-black leading-[normal] min-h-0 min-w-0 text-wrap font-times md:text-zinc-50 md:text-sm md:aspect-auto md:box-border md:caret-transparent md:leading-[16.8px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-unbounded">{player.name}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative content-center items-center box-border caret-transparent gap-x-2.5 flex basis-0 grow-[0.8] shrink-0 h-full justify-center gap-y-2.5 w-px overflow-hidden md:grow">
            <div className="box-content caret-black block md:aspect-auto md:box-border md:caret-transparent md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              <div className="static box-content caret-black block flex-row shrink justify-normal min-h-0 min-w-0 text-wrap md:relative md:aspect-auto md:box-border md:caret-transparent md:flex md:flex-col md:shrink-0 md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                <p className="text-black text-base box-content caret-black leading-[normal] min-h-0 min-w-0 text-wrap font-times md:text-zinc-50 md:text-sm md:aspect-auto md:box-border md:caret-transparent md:leading-[16.8px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-unbounded">{player.xp}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
