import React from 'react';
import {
  industryAwards,
  investorLogos,
  partnershipUpdates,
  pressMentions,
} from '../data/pressData';

export function SocialProofEnhancedSection() {
  return (
    <section
      id="social-proof"
      className="relative flex w-full justify-center bg-black px-4 pb-24 md:px-10"
    >
      <div className="flex w-full max-w-[1100px] flex-col gap-10 rounded-[20px] border border-neutral-800 bg-zinc-950/60 p-10 backdrop-blur">
        <header className="flex flex-col gap-4 text-center md:text-left">
          <p className="font-unbounded text-sm uppercase tracking-[0.4em] text-emerald-400">Social Proof</p>
          <h2 className="font-unbounded text-4xl text-white md:text-5xl">Recognized momentum from media and partners</h2>
          <p className="font-poppins text-lg text-zinc-200 md:max-w-3xl">
            From top-tier press to strategic partners, WeFit is validated as the operating system for competitive fitness communities.
          </p>
        </header>

        <div className="flex flex-col gap-4 rounded-[14px] border border-neutral-800/80 bg-black/60 p-6">
          <div className="flex items-center justify-between">
            <p className="font-unbounded text-xl text-white">Press Mention Ticker</p>
            <span className="font-poppins text-xs uppercase tracking-wide text-emerald-400">Updated Monthly</span>
          </div>
          <div className="flex gap-6 overflow-x-auto py-2">
            {[...pressMentions, ...pressMentions].map((mention, index) => (
              <div
                key={`${mention.id}-${index}`}
                className="min-w-[280px] rounded-lg border border-neutral-800 bg-black/70 p-4"
              >
                <p className="font-poppins text-xs uppercase tracking-wide text-zinc-500">{mention.date}</p>
                <p className="font-unbounded text-lg text-white">{mention.outlet}</p>
                <p className="font-poppins text-sm text-zinc-300">{mention.quote}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-4 rounded-[14px] border border-neutral-800/80 bg-black/60 p-6">
            <p className="font-unbounded text-xl text-white">Investors &amp; Advisors</p>
            <div className="grid gap-4 md:grid-cols-3">
              {investorLogos.map((logo) => (
                <div key={logo.id} className="flex flex-col items-center gap-2 rounded-lg border border-neutral-800 bg-black/70 p-4">
                  <img src={logo.logo} alt={`${logo.name} logo`} className="h-10 w-auto" />
                  <p className="font-poppins text-xs uppercase tracking-wide text-zinc-400 text-center">{logo.name}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 rounded-[14px] border border-neutral-800/80 bg-black/60 p-6">
            <p className="font-unbounded text-xl text-white">Industry Awards</p>
            <div className="grid gap-3">
              {industryAwards.map((award) => (
                <div key={award.id} className="flex items-center justify-between rounded-lg border border-neutral-800 bg-black/70 p-4">
                  <p className="font-unbounded text-lg text-white">{award.name}</p>
                  <span className="font-poppins text-xs uppercase tracking-wide text-emerald-400">{award.year}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 rounded-[14px] border border-neutral-800/80 bg-black/60 p-6">
          <p className="font-unbounded text-xl text-white">Partnership Announcements</p>
          <div className="grid gap-4 md:grid-cols-3">
            {partnershipUpdates.map((update) => (
              <div key={update.id} className="rounded-lg border border-neutral-800 bg-black/70 p-4">
                <p className="font-poppins text-xs uppercase tracking-wide text-zinc-500">{update.timeframe}</p>
                <p className="font-unbounded text-lg text-white">{update.partner}</p>
                <p className="font-poppins text-sm text-zinc-300">{update.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
