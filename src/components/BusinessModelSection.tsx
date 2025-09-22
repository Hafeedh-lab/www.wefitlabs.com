import React from 'react';
import { marketSizing, revenueStreams, unitEconomics } from '../data/investorData';

export function BusinessModelSection() {
  return (
    <section id="monetization" className="relative w-full bg-black text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-14 px-6 py-20 md:px-12 lg:px-16">
        <div className="max-w-3xl space-y-4">
          <p className="font-unbounded text-sm uppercase tracking-[0.4em] text-emerald-400">Business Model &amp; Monetization</p>
          <h2 className="font-unbounded text-3xl leading-tight md:text-5xl">Multiple revenue streams with disciplined unit economics</h2>
          <p className="font-poppins text-base text-zinc-300 md:text-lg">
            Our blended monetization stack compounds ARPU via premium subscriptions, a high-frequency marketplace, and data partnerships.
            TAM/SAM/SOM analysis validates a clear path to $1B+ obtainable market share.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {revenueStreams.map((stream) => (
            <article
              key={stream.id}
              className="rounded-3xl border border-emerald-900/60 bg-neutral-950/70 p-6 shadow-[0_0_40px_rgba(16,185,129,0.18)] transition hover:border-emerald-500/80"
            >
              <div className="flex items-center justify-between text-xs font-unbounded uppercase tracking-[0.3em] text-emerald-400/80">
                <span>{stream.mix}</span>
              </div>
              <h3 className="mt-4 font-unbounded text-2xl">{stream.title}</h3>
              <p className="mt-3 font-poppins text-sm text-zinc-300">{stream.description}</p>
            </article>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-[2fr_3fr]">
          <div className="space-y-5 rounded-3xl border border-zinc-900 bg-neutral-950/80 p-6">
            <h3 className="font-unbounded text-xl text-white">Unit Economics Snapshot</h3>
            <div className="space-y-5">
              {unitEconomics.map((unit) => (
                <div key={unit.id} className="rounded-2xl border border-emerald-900/60 bg-black/70 p-5">
                  <p className="font-unbounded text-lg text-emerald-300">{unit.title}</p>
                  <p className="font-unbounded text-sm uppercase tracking-[0.2em] text-emerald-500/80">{unit.subtitle}</p>
                  <ul className="mt-3 space-y-2 font-poppins text-sm text-zinc-300">
                    {unit.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-emerald-400" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-emerald-900/60 bg-neutral-950/80">
            <header className="border-b border-emerald-900/60 px-6 py-5">
              <p className="font-unbounded text-lg text-emerald-300">Market Size Analysis</p>
              <p className="font-poppins text-sm text-zinc-400">Validated through third-party research &amp; proprietary cohort modeling.</p>
            </header>
            <div className="divide-y divide-zinc-900/80">
              {marketSizing.map((row) => (
                <div key={row.id} className="flex flex-col gap-2 px-6 py-5 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="font-unbounded text-base text-white">{row.label}</p>
                    <p className="font-poppins text-sm text-zinc-400">{row.share}</p>
                  </div>
                  <p className="font-unbounded text-3xl text-emerald-300">{row.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
