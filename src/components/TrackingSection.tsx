import React, { useEffect, useRef, useState } from 'react';
import trackingDashboard from '../data/wfl 1.avif';
import trackingQuest from '../data/wfl 2.avif';

export function TrackingSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-black py-16 md:py-20"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-16 px-6 md:flex-row md:items-start md:justify-between md:gap-20">
        <div className="flex max-w-xl flex-col gap-6 text-left">
          <span className="font-unbounded text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300/80">
            Track, Compete, & Achieve
          </span>
          <h2 className="font-unbounded text-3xl font-bold leading-tight text-white md:text-[2.5rem]">
            Track Your Progress With Ease
          </h2>
          <p className="font-unbounded text-sm leading-6 text-white/70">
            Simplify fitness tracking by integrating wearable devices and apps. Using AI, record workouts and meals. Whether walking,
            running, or working out, you can effortlessly stay on top of your fitness goals.
          </p>
          <a
            href="./"
            className="relative mt-2 inline-flex items-center gap-2 overflow-hidden rounded-md bg-emerald-400 px-5 py-3 font-unbounded text-sm font-semibold text-black transition hover:bg-emerald-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-200"
          >
            Join Waitlist
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-black/10 text-black">→</span>
          </a>
        </div>

        <div className="relative flex w-full max-w-md justify-center md:max-w-xl">
          <div
            className={`relative w-full overflow-hidden rounded-[28px] border border-white/5 bg-emerald-500/10 p-6 shadow-[0_35px_80px_rgba(0,0,0,0.45)] transition-all duration-700 ease-out ${
              hasAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <img
              src={trackingDashboard}
              alt="Dashboard view of the Wefit app"
              className="h-full w-full rounded-[20px] object-cover"
              loading="lazy"
            />
          </div>

          <div
            className={`absolute bottom-[-15%] right-[6%] w-40 overflow-hidden rounded-[22px] border border-white/10 bg-black/85 p-3 shadow-[0_25px_60px_rgba(0,0,0,0.55)] backdrop-blur transition-all duration-700 ease-out sm:w-48 md:right-[12%] md:w-56 ${
              hasAnimated ? 'translate-y-0 scale-100 opacity-100 md:translate-y-[-18%]' : 'translate-y-12 scale-90 opacity-0'
            }`}
          >
            <img
              src={trackingQuest}
              alt="Quest view of the Wefit app"
              className="w-full rounded-[16px] object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

