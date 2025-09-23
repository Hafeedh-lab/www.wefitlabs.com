import React from 'react';
import {
  competitivePositions,
  marketSizing,
  revenueStreams,
  unitEconomics,
} from '../data/businessModelData';

export function BusinessModelSection() {
  return (
    <section
      id="model"
      className="relative flex w-full justify-center bg-black px-4 pb-24 md:px-10"
    >
      <div className="flex w-full max-w-[1100px] flex-col gap-10 rounded-[20px] border border-neutral-800 bg-zinc-950/60 p-10 backdrop-blur">
        <header className="flex flex-col gap-4 text-center md:text-left">
          <p className="font-unbounded text-sm uppercase tracking-[0.4em] text-emerald-400">Business Model &amp; Monetization</p>
          <h2 className="font-unbounded text-4xl text-white md:text-5xl">Diversified revenue with disciplined economics</h2>
          <p className="font-poppins text-lg text-zinc-200 md:max-w-3xl">
            Multiple monetization pillars convert engagement into durable revenue while maintaining best-in-class unit economics.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-4 rounded-[14px] border border-neutral-800/80 bg-black/60 p-6">
            <h3 className="font-unbounded text-xl text-white">Revenue Streams</h3>
            <div className="flex flex-col gap-4">
              {revenueStreams.map((stream) => (
                <div key={stream.id} className="rounded-lg border border-emerald-500/20 bg-zinc-900/70 p-4">
                  <p className="font-unbounded text-lg text-emerald-400">{stream.title}</p>
                  <p className="font-poppins text-sm text-zinc-200">{stream.description}</p>
                  <p className="font-poppins text-xs uppercase tracking-wide text-zinc-500">{stream.contribution}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 rounded-[14px] border border-neutral-800/80 bg-black/60 p-6">
            <h3 className="font-unbounded text-xl text-white">Unit Economics</h3>
            <div className="grid gap-3">
              {unitEconomics.map((item) => (
                <div key={item.id} className="flex items-center justify-between rounded-lg border border-neutral-800 bg-black/70 p-4">
                  <p className="font-poppins text-sm text-zinc-400">{item.metric}</p>
                  <p className="font-unbounded text-lg text-white">{item.value}</p>
                </div>
              ))}
            </div>
            <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4">
              <p className="font-poppins text-sm text-emerald-200">
                CAC payback already within 3.2 months; Series A proceeds extend growth levers without sacrificing efficiency.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-[1.1fr,0.9fr]">
          <div className="flex flex-col gap-4 rounded-[14px] border border-neutral-800/80 bg-black/60 p-6">
            <h3 className="font-unbounded text-xl text-white">Market Size</h3>
            <div className="grid gap-4 md:grid-cols-3">
              {marketSizing.map((slice) => (
                <div key={slice.id} className="flex flex-col gap-2 rounded-lg border border-neutral-800 bg-black/70 p-4 text-center">
                  <p className="font-poppins text-xs uppercase tracking-wide text-zinc-500">{slice.label}</p>
                  <p className="font-unbounded text-2xl text-white">{slice.value}</p>
                </div>
              ))}
            </div>
            <p className="font-poppins text-sm text-zinc-300">
              WeFit’s interoperable layer unlocks the $2.4B SOM underserved by hardware-centric incumbents.
            </p>
          </div>

          <div className="flex flex-col gap-4 rounded-[14px] border border-neutral-800/80 bg-black/60 p-6">
            <h3 className="font-unbounded text-xl text-white">Competitive Positioning</h3>
            <div className="flex flex-col gap-3">
              {competitivePositions.map((competitor) => (
                <div key={competitor.id} className="rounded-lg border border-neutral-800 bg-black/70 p-4">
                  <div className="flex items-center justify-between">
                    <p className="font-unbounded text-lg text-white">{competitor.name}</p>
                    <span className="font-poppins text-xs uppercase tracking-wide text-emerald-400">{competitor.id === 'wefit' ? 'WeFit' : 'Legacy'}</span>
                  </div>
                  <p className="font-poppins text-xs text-zinc-400">{competitor.focus}</p>
                  <p className="font-poppins text-sm text-zinc-200">{competitor.gap}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
