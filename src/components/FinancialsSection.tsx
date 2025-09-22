import React from 'react';
import {
  currentRaise,
  financialProjections,
  fundingHistory,
  profitabilityTimeline,
  useOfFunds,
} from '../data/investorData';

export function FinancialsSection() {
  return (
    <section id="financials" className="relative w-full bg-black text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-20 md:px-12 lg:px-16">
        <div className="max-w-3xl space-y-4">
          <p className="font-unbounded text-sm uppercase tracking-[0.4em] text-emerald-400">Financial Outlook</p>
          <h2 className="font-unbounded text-3xl leading-tight md:text-5xl">Clear path to profitability with disciplined capital deployment</h2>
          <p className="font-poppins text-base text-zinc-300 md:text-lg">
            WeFit is raising a Series A to accelerate monetization levers and platform scale. Detailed models and diligence-ready
            financials are available in the investor resource center.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <div className="rounded-3xl border border-emerald-900/60 bg-neutral-950/80 p-6">
            <h3 className="font-unbounded text-xl text-emerald-300">Revenue Projections</h3>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {financialProjections.map((projection) => (
                <div key={projection.id} className="rounded-2xl border border-zinc-900 bg-black/70 p-4">
                  <p className="font-unbounded text-sm uppercase tracking-[0.3em] text-emerald-400/80">{projection.year}</p>
                  <p className="mt-3 font-unbounded text-2xl">{projection.revenue}</p>
                  <p className="font-unbounded text-xs uppercase tracking-[0.3em] text-emerald-500/80">EBITDA {projection.ebitda}</p>
                  <p className="mt-3 font-poppins text-sm text-zinc-300">{projection.notes}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 h-40 w-full rounded-xl border border-emerald-900/60 bg-gradient-to-r from-emerald-500/20 to-black p-3">
              <div className="flex h-full items-end justify-between gap-3 rounded-lg bg-black/80 px-4 py-3">
                {financialProjections.map((projection, index) => (
                  <div key={projection.id} className="flex flex-1 flex-col items-center">
                    <div
                      className="w-full rounded-t-full bg-emerald-400/80"
                      style={{ height: `${45 + index * 20}%` }}
                    />
                    <p className="mt-2 font-unbounded text-xs uppercase tracking-[0.3em] text-emerald-400/80">{projection.year}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-3xl border border-zinc-900 bg-neutral-950/75 p-6">
              <h3 className="font-unbounded text-xl text-emerald-300">Funding History</h3>
              <div className="mt-4 space-y-4">
                {[...fundingHistory, currentRaise].map((milestone) => (
                  <div key={milestone.id} className="rounded-2xl border border-emerald-900/50 bg-black/70 p-4">
                    <div className="flex items-center justify-between">
                      <p className="font-unbounded text-sm uppercase tracking-[0.3em] text-emerald-500/80">{milestone.round}</p>
                      <p className="font-unbounded text-lg text-white">{milestone.amount}</p>
                    </div>
                    <p className="mt-2 font-poppins text-sm text-zinc-300">{milestone.investors}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-zinc-900 bg-neutral-950/75 p-6">
              <h3 className="font-unbounded text-xl text-emerald-300">Use of Funds</h3>
              <ul className="mt-4 space-y-3 font-poppins text-sm text-zinc-300">
                {useOfFunds.map((allocation) => (
                  <li key={allocation.id} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-12 rounded-full bg-emerald-400/70" />
                    <div>
                      <p className="font-unbounded text-base text-white">{allocation.category}</p>
                      <p className="font-unbounded text-xs uppercase tracking-[0.3em] text-emerald-500/80">{allocation.percentage}</p>
                      <p className="font-poppins text-sm text-zinc-400">{allocation.narrative}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-emerald-900/60 bg-neutral-950/80 p-6">
          <h3 className="font-unbounded text-xl text-emerald-300">Path to Profitability</h3>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {profitabilityTimeline.map((milestone) => (
              <div key={milestone.id} className="rounded-2xl border border-zinc-900 bg-black/70 p-5">
                <p className="font-unbounded text-lg text-white">{milestone.title}</p>
                <p className="font-unbounded text-xs uppercase tracking-[0.3em] text-emerald-500/80">{milestone.subtitle}</p>
                <ul className="mt-3 space-y-2 font-poppins text-sm text-zinc-300">
                  {milestone.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
