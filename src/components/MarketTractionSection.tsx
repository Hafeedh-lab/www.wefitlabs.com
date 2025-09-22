import React from 'react';
import { tractionInsights, tractionMetrics } from '../data/investorData';
import { trackCTA } from '../utils/analytics';

export function MarketTractionSection() {
  return (
    <section id="market" className="relative w-full bg-black text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-20 md:px-12 lg:px-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="space-y-4">
            <p className="font-unbounded text-sm uppercase tracking-[0.4em] text-emerald-400">Market Traction Dashboard</p>
            <h2 className="font-unbounded text-3xl leading-tight md:text-5xl">Real usage momentum inside a $96B category</h2>
            <p className="max-w-2xl font-poppins text-base text-zinc-300 md:text-lg">
              Closed beta adoption proves WeFit’s thesis: social-first fitness delivers category-leading retention and ARPU. We are
              instrumented for full funnel analytics with data infrastructure ready for diligence.
            </p>
          </div>
          <button
            onClick={() => trackCTA('view_data_room', { surface: 'market_traction' })}
            className="inline-flex items-center justify-center rounded-full border border-emerald-400 px-6 py-3 font-unbounded text-sm uppercase tracking-wide text-emerald-300 transition hover:bg-emerald-500/20"
          >
            Open Live Metrics
          </button>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {tractionMetrics.map((metric) => (
            <div
              key={metric.id}
              className="relative overflow-hidden rounded-2xl border border-emerald-900/60 bg-neutral-950/70 p-6 shadow-[0_0_45px_rgba(16,185,129,0.15)] backdrop-blur"
            >
              <div className="flex items-center justify-between text-xs font-unbounded uppercase tracking-wider text-emerald-400/80">
                <span>{metric.label}</span>
                <span>{metric.delta}</span>
              </div>
              <p className="mt-4 font-unbounded text-4xl md:text-5xl">{metric.value}</p>
              <p className="mt-3 font-poppins text-sm text-zinc-300">{metric.supporting}</p>
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(65,184,131,0.25),_transparent_55%)]" />
            </div>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {tractionInsights.map((insight) => (
            <div
              key={insight.id}
              className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-zinc-900 bg-neutral-950/80 p-6 shadow-[0_0_35px_rgba(16,185,129,0.12)]"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-unbounded uppercase tracking-[0.3em] text-emerald-400/80">
                  <span>{insight.timeFrame}</span>
                  <span>{insight.value}</span>
                </div>
                <h3 className="mt-4 font-unbounded text-2xl">{insight.title}</h3>
                <p className="mt-3 font-poppins text-sm text-zinc-300">{insight.description}</p>
              </div>
              <div className="mt-8 h-24 w-full rounded-xl bg-[linear-gradient(120deg,rgba(16,185,129,0.35),rgba(17,17,17,0.4))] p-1">
                <div className="flex h-full w-full items-end justify-between rounded-lg bg-black/70 px-4 py-3">
                  {[...Array(7)].map((_, index) => (
                    <span
                      // eslint-disable-next-line react/no-array-index-key
                      key={index}
                      className="flex-1 rounded-t-full bg-emerald-400/70"
                      style={{ height: `${40 + index * 7}%` }}
                    />
                  ))}
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_60%_10%,rgba(65,184,131,0.15),transparent_60%)]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
