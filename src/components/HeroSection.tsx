import React from 'react';
import { trackCTA } from '../utils/analytics';

export function HeroSection() {
  return (
    <header
      id="home"
      className="relative flex min-h-[680px] w-full flex-col justify-center overflow-hidden bg-[linear-gradient(231deg,#06301d_0%,#000_26%)] text-white"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(65,184,131,0.25),transparent_55%)]" />
      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-12 px-6 py-24 md:grid-cols-[1.1fr_1fr] md:px-12 lg:px-16">
        <div className="flex flex-col gap-8">
          <div className="space-y-4">
            <span className="font-unbounded text-sm uppercase tracking-[0.4em] text-emerald-400">Investor Preview</span>
            <h1 className="font-unbounded text-4xl leading-tight md:text-6xl">
              $96B social fitness market. 400M+ app users. WeFit is the acquisition-ready platform connecting them.
            </h1>
            <p className="font-poppins text-base text-zinc-200 md:text-lg">
              With 10K+ early adopters and an 89% retention rate, WeFit transforms the fitness economy into a competitive social
              network. Our technology powers high frequency engagement, premium monetization, and strategic distribution channels.
            </p>
          </div>

          <div className="grid gap-4 text-sm font-unbounded uppercase tracking-[0.3em] text-emerald-400 md:grid-cols-2">
            <div className="rounded-3xl border border-emerald-500/50 bg-black/60 p-4">
              <p className="text-xs text-zinc-500">Market Opportunity</p>
              <p className="mt-2 text-2xl text-white">$96B TAM</p>
              <p className="text-xs text-zinc-400">400M+ global app users seeking social experiences</p>
            </div>
            <div className="rounded-3xl border border-emerald-500/50 bg-black/60 p-4">
              <p className="text-xs text-zinc-500">Traction Snapshot</p>
              <p className="mt-2 text-2xl text-white">10K Early Adopters</p>
              <p className="text-xs text-zinc-400">89% retention, 2.7 sessions per user/day</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => {
                trackCTA('download_pitch_deck', { surface: 'hero_primary_cta' });
                window.open('#download/pitch-deck', '_blank');
              }}
              className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-8 py-3 font-unbounded text-sm uppercase tracking-[0.3em] text-black transition hover:bg-emerald-400"
            >
              Download Pitch Deck
            </button>
            <button
              onClick={() => {
                trackCTA('schedule_demo', { surface: 'hero_secondary_cta' });
                window.open('https://cal.com/wefit/investor-demo', '_blank');
              }}
              className="inline-flex items-center justify-center rounded-full border border-emerald-500 px-8 py-3 font-unbounded text-sm uppercase tracking-[0.3em] text-emerald-300 transition hover:bg-emerald-500/10"
            >
              Schedule Demo
            </button>
          </div>
        </div>

        <div className="relative flex flex-col justify-end">
          <div className="relative overflow-hidden rounded-3xl border border-emerald-900/70 bg-black/60 shadow-[0_0_60px_rgba(16,185,129,0.2)]">
            <video
              src="https://framerusercontent.com/assets/gOt5QbbnrE4m0husE6UtM4ppzs.mp4"
              loop
              preload="auto"
              muted
              playsInline
              autoPlay
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-6">
              <div className="flex items-center justify-between text-xs font-unbounded uppercase tracking-[0.3em] text-emerald-300">
                <span>Investor-grade telemetry</span>
                <span>Realtime feed</span>
              </div>
              <div className="grid gap-3 md:grid-cols-2">
                <div className="rounded-2xl border border-emerald-900/60 bg-black/70 p-3">
                  <p className="font-unbounded text-sm text-white">MAU Growth</p>
                  <p className="font-poppins text-xs text-zinc-300">+34% QoQ with low acquisition spend</p>
                </div>
                <div className="rounded-2xl border border-emerald-900/60 bg-black/70 p-3">
                  <p className="font-unbounded text-sm text-white">Retention</p>
                  <p className="font-poppins text-xs text-zinc-300">89% at week 12 driven by social loops</p>
                </div>
              </div>
            </div>
          </div>
          <p className="mt-6 font-poppins text-sm text-zinc-400">
            Analytics instrumentation is live. Request access to the data room for raw dashboards and cohort exports.
          </p>
        </div>
      </div>
    </header>
  );
}
