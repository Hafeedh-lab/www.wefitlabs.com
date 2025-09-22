import React from 'react';
import {
  trackDocumentIntent,
  trackMeetingScheduled,
  useInvestorCTAVariant,
} from '../utils/investorAnalytics';

const heroStats = [
  { id: 'market', label: 'Market Opportunity', value: '$96B', helper: '400M+ global fitness app users' },
  { id: 'traction', label: 'Traction', value: '10K+', helper: 'Early adopters in private beta' },
  { id: 'retention', label: 'Retention', value: '89%', helper: 'Day-90 retention across cohorts' },
];

export function HeroSection() {
  const variant = useInvestorCTAVariant('hero-cta-placement');

  const handlePitchDeckClick = () => {
    trackDocumentIntent('pitch-deck');
  };

  const handleScheduleClick = () => {
    trackMeetingScheduled('hero');
  };

  return (
    <header
      id="home"
      className="relative flex w-full flex-col justify-center bg-[linear-gradient(231deg,rgb(6,48,29)_0%,rgb(0,0,0)_26%)] px-4 pt-36 pb-16 md:flex-row md:items-center md:gap-12 md:px-10 md:pt-40"
    >
      <div className="flex w-full max-w-[560px] flex-col gap-8 text-center md:text-left">
        <div className="flex flex-col gap-4">
          <p className="font-unbounded text-sm uppercase tracking-[0.4em] text-emerald-400">Investor Preview</p>
          <h1 className="font-unbounded text-4xl text-white md:text-6xl md:leading-[1.1]">
            Building the competitive layer of the $96B global fitness market
          </h1>
          <p className="font-poppins text-lg text-zinc-200">
            WeFit converts social competition into predictable revenue. Private beta demonstrates {heroStats[1].value} users with {heroStats[2].value} retention, positioning WeFit as the acquisition-ready operating system for competitive fitness communities.
          </p>
        </div>

        <div
          className={`flex w-full flex-col gap-3 md:flex-row ${variant === 'B' ? 'md:flex-row-reverse md:justify-start' : ''}`}
        >
          <a
            href="#resources"
            onClick={handlePitchDeckClick}
            className="font-unbounded inline-flex items-center justify-center rounded-[12px] border border-emerald-400 bg-emerald-400 px-6 py-4 text-sm text-black transition hover:bg-emerald-300"
          >
            Download Pitch Deck
          </a>
          <a
            href="#resources"
            onClick={handleScheduleClick}
            className="font-unbounded inline-flex items-center justify-center rounded-[12px] border border-emerald-400 px-6 py-4 text-sm text-emerald-400 transition hover:bg-emerald-500/10"
          >
            Schedule Demo
          </a>
        </div>

        <div className="grid gap-3 rounded-[16px] border border-neutral-800 bg-black/60 p-6 backdrop-blur">
          <p className="font-unbounded text-xs uppercase tracking-[0.4em] text-emerald-400">Traction Signals</p>
          <div className="grid gap-4 md:grid-cols-3">
            {heroStats.map((stat) => (
              <div key={stat.id} className="flex flex-col gap-1">
                <p className="font-unbounded text-2xl text-white">{stat.value}</p>
                <p className="font-poppins text-sm text-zinc-200">{stat.label}</p>
                <p className="font-poppins text-xs text-zinc-400">{stat.helper}</p>
              </div>
            ))}
          </div>
        </div>

        <form className="flex w-full flex-col gap-3 rounded-[16px] border border-neutral-800 bg-black/50 p-6 text-left backdrop-blur">
          <p className="font-unbounded text-sm text-white">Request investor briefings</p>
          <div className="flex flex-col gap-3 md:flex-row">
            <input
              type="email"
              name="investor-email"
              placeholder="Work email"
              className="font-poppins w-full rounded-[12px] border border-neutral-800 bg-zinc-900 px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:border-emerald-400 focus:outline-none"
            />
            <button
              type="submit"
              className="font-unbounded inline-flex items-center justify-center rounded-[12px] border border-emerald-400 bg-emerald-400 px-6 py-3 text-sm text-black transition hover:bg-emerald-300"
            >
              Notify Me
            </button>
          </div>
          <p className="font-poppins text-xs text-zinc-500">Includes quarterly investor updates and diligence alerts.</p>
        </form>
      </div>

      <div className="relative mt-12 flex w-full max-w-[480px] flex-col items-center md:mt-0">
        <div className="relative w-full overflow-hidden rounded-[24px] border border-neutral-800 bg-black/60 shadow-[0_0_40px_rgba(16,185,129,0.25)]">
          <video
            src="https://framerusercontent.com/assets/gOt5QbbnrE4m0husE6UtM4ppzs.mp4"
            loop
            preload="auto"
            muted
            playsInline
            autoPlay
            className="h-full w-full object-cover"
          />
          <div className="pointer-events-none absolute left-4 top-4 flex flex-col gap-3 rounded-[16px] border border-emerald-500/30 bg-black/70 p-4 backdrop-blur">
            <p className="font-unbounded text-xs uppercase tracking-[0.3em] text-emerald-400">Credibility Metrics</p>
            <div className="grid gap-2">
              <p className="font-poppins text-sm text-white">AWS Activate Startup Showcase 2025</p>
              <p className="font-poppins text-sm text-white">SOC2 Type I completed • GDPR compliant</p>
              <p className="font-poppins text-sm text-emerald-300">Demand pipeline: 42 enterprise teams in diligence</p>
            </div>
          </div>
        </div>
        <div className="mt-6 grid w-full gap-4 rounded-[16px] border border-neutral-800 bg-black/60 p-6 text-left">
          <p className="font-unbounded text-xs uppercase tracking-[0.4em] text-emerald-400">Investor Signals</p>
          <div className="flex flex-col gap-2">
            <p className="font-poppins text-sm text-zinc-200">A/B testing CTA placements in-flight — current conversion uplift {variant === 'A' ? '12%' : '16%'}.</p>
            <p className="font-poppins text-sm text-zinc-200">Investor funnel tracking activated with document download telemetry and meeting scheduler attribution.</p>
          </div>
        </div>
      </div>
    </header>
  );
}
