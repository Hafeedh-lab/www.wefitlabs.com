import React from 'react';
import wflImagePrimary from '../data/wfl 1.avif';
import wflImageSecondary from '../data/wfl 2.avif';

export function TrackingSection() {
  const sectionRef = React.useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    let animationFrame = 0;

    const updateProgress = () => {
      animationFrame = 0;
      if (!sectionRef.current) {
        return;
      }

      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      const totalScrollableDistance = rect.height + viewportHeight;
      const distanceIntoView = viewportHeight - rect.top;
      const rawProgress = distanceIntoView / totalScrollableDistance;
      const clampedProgress = Math.max(0, Math.min(1, rawProgress));

      setProgress((previous) => {
        if (Math.abs(previous - clampedProgress) < 0.01) {
          return previous;
        }
        return clampedProgress;
      });
    };

    const handleScroll = () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
      animationFrame = requestAnimationFrame(updateProgress);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const primaryImageStyle = React.useMemo<React.CSSProperties>(() => {
    const translateY = 80 - progress * 80;
    const scale = 0.9 + progress * 0.1;
    const rotation = -6 + progress * 6;
    const opacity = Math.min(1, 0.25 + progress * 0.75);

    return {
      transform: `translate3d(-50%, ${translateY}px, 0) scale(${scale}) rotate(${rotation}deg)`,
      opacity,
    };
  }, [progress]);

  const secondaryImageStyle = React.useMemo<React.CSSProperties>(() => {
    const translateY = 160 - progress * 160;
    const scale = 0.75 + progress * 0.25;
    const rotation = 8 - progress * 8;
    const opacity = Math.min(1, Math.max(0, progress - 0.1) * 1.2);

    return {
      transform: `translate3d(-50%, ${translateY}px, 0) scale(${scale}) rotate(${rotation}deg)`,
      opacity,
    };
  }, [progress]);

  return (
    <section
      ref={sectionRef}
      className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-black py-16 text-white md:py-20"
    >
      <div className="flex w-full max-w-6xl flex-col items-center gap-16 px-6 md:flex-row md:items-start md:justify-between md:gap-20 md:px-10">
        <div className="flex w-full max-w-xl flex-col gap-5 text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">Track, Compete, &amp; Achieve</p>
          <h2 className="text-3xl font-bold text-white md:text-4xl">Track Your Progress With ease</h2>
          <p className="text-base text-emerald-50/80">
            Simply fitness tracking by integrating wearable devices and apps. Using AI, record workouts and meals. Whether walking,
            running, or working out, you can effortlessly stay on top of your fitness goals.
          </p>
          <div>
            <a
              href="./"
              className="inline-flex items-center justify-center rounded-md bg-emerald-400 px-6 py-3 text-sm font-semibold text-black shadow-[0_20px_40px_-20px_rgba(16,185,129,0.8)] transition-colors hover:bg-emerald-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-200"
            >
              Join Waitlist
            </a>
          </div>
        </div>
        <div className="relative flex w-full max-w-[420px] items-center justify-center md:w-1/2 md:justify-end">
          <div className="relative h-[520px] w-full">
            <div
              className="absolute left-1/2 top-0 h-full w-full max-w-[420px] overflow-hidden rounded-[28px] bg-gradient-to-br from-emerald-500/20 via-emerald-400/10 to-transparent shadow-[0_40px_120px_-60px_rgba(16,185,129,0.6)] backdrop-blur-sm transition-[transform,opacity] duration-500 ease-out will-change-transform"
              style={primaryImageStyle}
            >
              <img src={wflImagePrimary} alt="Wefit Labs progress tracking interface" className="h-full w-full object-cover" />
            </div>
            <div
              className="absolute left-1/2 top-0 h-full w-full max-w-[360px] overflow-hidden rounded-[28px] bg-gradient-to-br from-emerald-400/30 via-emerald-300/10 to-transparent shadow-[0_40px_120px_-60px_rgba(20,184,166,0.6)] backdrop-blur-sm transition-[transform,opacity] duration-500 ease-out will-change-transform"
              style={secondaryImageStyle}
            >
              <img src={wflImageSecondary} alt="Wefit Labs challenge tracking interface" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
