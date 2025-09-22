import React from 'react';
import { investorPartners, pressMentions } from '../data/investorData';

export function SocialProofSection() {
  return (
    <section id="social-proof" className="relative w-full bg-black text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 md:px-12 lg:px-16">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3">
            <p className="font-unbounded text-sm uppercase tracking-[0.4em] text-emerald-400">Social Proof</p>
            <h2 className="font-unbounded text-3xl leading-tight md:text-4xl">Trusted by operators, media, and strategic partners</h2>
          </div>
          <p className="max-w-xl font-poppins text-sm text-zinc-300 md:text-base">
            Coverage across tier-one publications and support from category insiders signal market confidence. Below is a live ticker of recent mentions.
          </p>
        </div>

        <div className="overflow-hidden rounded-full border border-emerald-900/60 bg-neutral-950/80 py-4">
          <div className="flex animate-[ticker_25s_linear_infinite] gap-10 whitespace-nowrap px-6 text-sm font-unbounded uppercase tracking-[0.4em] text-emerald-400">
            {pressMentions.concat(pressMentions).map((press) => (
              <span key={`${press.id}-${press.date}`} className="flex items-center gap-3">
                <span className="text-zinc-500">{press.date}</span>
                <span>{press.source}</span>
                <span className="text-zinc-400">{press.headline}</span>
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {investorPartners.map((partner) => (
            <div key={partner.id} className="flex h-24 items-center justify-center rounded-2xl border border-emerald-900/40 bg-neutral-950/70 p-4">
              <img src={partner.logo} alt={partner.name} className="max-h-10 w-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
