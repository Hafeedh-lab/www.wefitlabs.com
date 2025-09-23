import React from 'react';
import {
  engagementHeatmap,
  growthTrajectory,
  revenueTrajectory,
  tractionMetrics,
} from '../data/marketMetricsData';

const valueToHeight = (value: number): string => `${Math.max(20, value)}%`;

export function MarketTractionSection() {
  return (
    <section
      id="market"
      className="relative flex w-full justify-center bg-black px-4 py-24 md:px-10"
    >
      <div className="relative flex w-full max-w-[1100px] flex-col gap-10 rounded-[20px] border border-neutral-800 bg-zinc-950/60 p-10 backdrop-blur">
        <header className="flex flex-col gap-4 text-center md:text-left">
          <p className="font-unbounded text-sm uppercase tracking-[0.4em] text-emerald-400">Market Traction Dashboard</p>
          <h2 className="font-unbounded text-4xl text-white md:text-5xl">Investor-grade visibility into product-market fit</h2>
          <p className="font-poppins text-lg text-zinc-200 md:max-w-3xl">
            Real-time dashboards reveal the engagement engine powering WeFit’s expansion across the $96B digital fitness economy.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-4">
          {tractionMetrics.map((metric) => (
            <div
              key={metric.id}
              className="flex flex-col gap-2 rounded-[14px] border border-emerald-500/40 bg-black/60 p-6 shadow-[0_0_35px_rgba(16,185,129,0.12)]"
            >
              <p className="font-poppins text-xs uppercase tracking-wide text-zinc-400">{metric.label}</p>
              <p className="font-unbounded text-3xl text-emerald-400">{metric.value}</p>
              {metric.helper && <p className="font-poppins text-sm text-zinc-300">{metric.helper}</p>}
            </div>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-4 rounded-[14px] border border-neutral-800/80 bg-black/60 p-6">
            <div className="flex items-center justify-between">
              <h3 className="font-unbounded text-xl text-white">Growth Velocity</h3>
              <span className="font-poppins text-xs uppercase text-emerald-400">QoQ</span>
            </div>
            <div className="flex h-48 items-end justify-between gap-3">
              {growthTrajectory.map((point) => (
                <div key={point.id} className="flex w-full flex-col items-center gap-2">
                  <div
                    className="w-full rounded-full bg-gradient-to-t from-emerald-500/20 via-emerald-500/60 to-emerald-400"
                    style={{ height: valueToHeight(point.value) }}
                  ></div>
                  <p className="font-poppins text-xs text-zinc-400">{point.label}</p>
                </div>
              ))}
            </div>
            <p className="font-poppins text-sm text-zinc-300">
              4.6x MAU growth since private beta with conversion outpacing plan by 18%.
            </p>
          </div>

          <div className="flex flex-col gap-4 rounded-[14px] border border-neutral-800/80 bg-black/60 p-6">
            <div className="flex items-center justify-between">
              <h3 className="font-unbounded text-xl text-white">Engagement Heatmap</h3>
              <span className="font-poppins text-xs uppercase text-emerald-400">Live Cohorts</span>
            </div>
            <div className="grid grid-cols-7 gap-2">
              {engagementHeatmap.map((cell) => (
                <span
                  key={cell.id}
                  className="h-8 w-full rounded-md border border-emerald-500/20"
                  style={{ backgroundColor: `rgba(16, 185, 129, ${cell.intensity / 120})` }}
                ></span>
              ))}
            </div>
            <p className="font-poppins text-sm text-zinc-300">
              Communities sustain {tractionMetrics[2].value} retention with peak engagement on challenge days.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 rounded-[14px] border border-neutral-800/80 bg-black/60 p-6">
          <div className="flex items-center justify-between">
            <h3 className="font-unbounded text-xl text-white">Revenue Trajectory</h3>
            <span className="font-poppins text-xs uppercase text-emerald-400">Actuals + Projections</span>
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            {revenueTrajectory.map((milestone) => (
              <div
                key={milestone.id}
                className="flex flex-col gap-1 rounded-lg border border-neutral-800 bg-black/70 p-4"
              >
                <p className="font-poppins text-xs uppercase tracking-wide text-zinc-400">{milestone.quarter}</p>
                <p className="font-unbounded text-2xl text-white">{milestone.revenue}</p>
                <span className="font-poppins text-xs text-emerald-400">
                  {milestone.status === 'actual' ? 'Actual' : 'Projected'}
                </span>
              </div>
            ))}
          </div>
          <p className="font-poppins text-sm text-zinc-300">
            Data infrastructure is ready for direct integration with investor dashboards for diligence.
          </p>
        </div>
      </div>
    </section>
  );
}
