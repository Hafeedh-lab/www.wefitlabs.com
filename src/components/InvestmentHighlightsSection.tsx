import React from 'react';
import { competitiveHighlights } from '../data/investorData';

export function InvestmentHighlightsSection() {
  return (
    <section id="highlights" className="relative w-full bg-black text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-20 md:px-12 lg:px-16">
        <div className="max-w-3xl space-y-4">
          <p className="font-unbounded text-sm uppercase tracking-[0.4em] text-emerald-400">Investment Highlights</p>
          <h2 className="font-unbounded text-3xl leading-tight md:text-5xl">Defensible moat with scale-ready infrastructure</h2>
          <p className="font-poppins text-base text-zinc-300 md:text-lg">
            Proprietary technology, channel partnerships, and regulatory readiness position WeFit as an acquisition-ready platform
            with outsized retention. Each highlight below connects directly to due diligence data in our investor data room.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {competitiveHighlights.map((card) => (
            <article
              key={card.id}
              className="group relative overflow-hidden rounded-3xl border border-emerald-900/60 bg-neutral-950/75 p-6 shadow-[0_0_40px_rgba(16,185,129,0.15)] transition hover:border-emerald-400/90"
            >
              <header className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-unbounded text-sm uppercase tracking-[0.3em] text-emerald-500/80">{card.subtitle}</p>
                  <h3 className="mt-3 font-unbounded text-2xl">{card.title}</h3>
                </div>
                <span className="rounded-full border border-emerald-900/60 px-4 py-1 font-unbounded text-xs uppercase tracking-[0.4em] text-emerald-400">
                  moat
                </span>
              </header>
              <ul className="mt-5 space-y-3 font-poppins text-sm text-zinc-300">
                {card.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100" style={{ background: 'radial-gradient(circle at top right, rgba(65,184,131,0.18), transparent 60%)' }} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
