import React from 'react';
import { fundingHistory, profitabilityPath, revenueProjections, useOfFunds } from '../data/financialsData';

export function FinancialsSection() {
  return (
    <section
      id="financials"
      className="relative flex w-full justify-center bg-black px-4 pb-24 md:px-10"
    >
      <div className="flex w-full max-w-[1100px] flex-col gap-10 rounded-[20px] border border-neutral-800 bg-zinc-950/60 p-10 backdrop-blur">
        <header className="flex flex-col gap-4 text-center md:text-left">
          <p className="font-unbounded text-sm uppercase tracking-[0.4em] text-emerald-400">Financials</p>
          <h2 className="font-unbounded text-4xl text-white md:text-5xl">Clear line of sight to profitability</h2>
          <p className="font-poppins text-lg text-zinc-200 md:max-w-3xl">
            Transparent forecasts, disciplined deployment of capital, and defined milestones to EBITDA positivity.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-3">
          {revenueProjections.map((projection) => (
            <div key={projection.id} className="flex flex-col gap-2 rounded-[14px] border border-neutral-800 bg-black/70 p-6">
              <p className="font-poppins text-xs uppercase tracking-wide text-zinc-500">{projection.year}</p>
              <p className="font-unbounded text-3xl text-white">{projection.revenue}</p>
              <p className="font-poppins text-sm text-emerald-400">EBITDA {projection.ebitda}</p>
              <p className="font-poppins text-sm text-zinc-300">{projection.notes}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-4 rounded-[14px] border border-neutral-800/80 bg-black/60 p-6">
            <h3 className="font-unbounded text-xl text-white">Funding History</h3>
            <div className="flex flex-col gap-3">
              {fundingHistory.map((round) => (
                <div key={round.id} className="flex items-center justify-between rounded-lg border border-neutral-800 bg-black/70 p-4">
                  <div>
                    <p className="font-unbounded text-lg text-white">{round.round}</p>
                    <p className="font-poppins text-xs uppercase tracking-wide text-zinc-500">{round.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-unbounded text-xl text-emerald-400">{round.amount}</p>
                    <p className="font-poppins text-xs text-zinc-400">Lead: {round.lead}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4">
              <p className="font-poppins text-sm text-emerald-200">
                Raising $4.0M Seed to accelerate enterprise licensing and international expansion.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 rounded-[14px] border border-neutral-800/80 bg-black/60 p-6">
            <h3 className="font-unbounded text-xl text-white">Use of Funds</h3>
            <div className="grid gap-3">
              {useOfFunds.map((item) => (
                <div key={item.id} className="flex items-center justify-between rounded-lg border border-neutral-800 bg-black/70 p-4">
                  <div>
                    <p className="font-unbounded text-lg text-white">{item.category}</p>
                    <p className="font-poppins text-xs uppercase tracking-wide text-zinc-500">{item.allocation}</p>
                  </div>
                  <p className="font-poppins text-sm text-zinc-300 text-right">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 rounded-[14px] border border-neutral-800/80 bg-black/60 p-6">
          <h3 className="font-unbounded text-xl text-white">Path to Profitability</h3>
          <div className="grid gap-3 md:grid-cols-4">
            {profitabilityPath.map((milestone) => (
              <div key={milestone.id} className="flex flex-col gap-2 rounded-lg border border-neutral-800 bg-black/70 p-4">
                <p className="font-poppins text-xs uppercase tracking-wide text-emerald-400">{milestone.timing}</p>
                <p className="font-unbounded text-lg text-white">{milestone.stage}</p>
                <p className="font-poppins text-sm text-zinc-300">{milestone.dependency}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
