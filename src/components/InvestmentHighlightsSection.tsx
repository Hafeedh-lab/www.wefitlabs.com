import React from 'react';
import {
  regulatoryAdvantages,
  scalabilityMetrics,
  strategicPartnerships,
  technologyMoats,
} from '../data/investmentHighlightsData';

const SectionBlock: React.FC<{ title: string; items: { id: string; title: string; description: string }[] }> = ({
  title,
  items,
}) => (
  <div className="flex flex-col gap-4 rounded-[14px] border border-neutral-800/80 bg-black/60 p-6">
    <h3 className="font-unbounded text-xl text-white">{title}</h3>
    <div className="grid gap-3">
      {items.map((item) => (
        <div key={item.id} className="rounded-lg border border-emerald-500/20 bg-zinc-900/70 p-4">
          <p className="font-unbounded text-lg text-emerald-400">{item.title}</p>
          <p className="font-poppins text-sm text-zinc-200">{item.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export function InvestmentHighlightsSection() {
  return (
    <section
      id="highlights"
      className="relative flex w-full justify-center bg-black px-4 pb-24 md:px-10"
    >
      <div className="flex w-full max-w-[1100px] flex-col gap-10 rounded-[20px] border border-neutral-800 bg-zinc-950/60 p-10 backdrop-blur">
        <header className="flex flex-col gap-4 text-center md:text-left">
          <p className="font-unbounded text-sm uppercase tracking-[0.4em] text-emerald-400">Investment Highlights</p>
          <h2 className="font-unbounded text-4xl text-white md:text-5xl">Defensible moats with strategic acceleration</h2>
          <p className="font-poppins text-lg text-zinc-200 md:max-w-3xl">
            Technology, partnerships, and regulatory readiness combine to create a category-leading acquisition opportunity.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          <SectionBlock title="Technology Moats" items={technologyMoats} />
          <SectionBlock title="Strategic Partnerships" items={strategicPartnerships} />
          <SectionBlock title="Regulatory Advantages" items={regulatoryAdvantages} />
          <SectionBlock title="Scalability Metrics" items={scalabilityMetrics} />
        </div>
      </div>
    </section>
  );
}
