import React from 'react';
import { faqData } from '../data/faqData';

export function FAQSection() {
  return (
    <section
      id="faqs"
      className="relative flex flex-col items-center gap-12 bg-black px-6 py-16 text-white md:px-12 md:py-20"
    >
      <h2 className="text-center font-unbounded text-3xl font-semibold md:text-4xl">Frequently Asked Questions</h2>
      <div className="w-full max-w-4xl space-y-8">
        {faqData.map((faq) => (
          <article key={faq.id} className="space-y-4 border-b border-neutral-800 pb-8 last:border-none last:pb-0">
            <div className="flex items-start gap-6">
              <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full border border-emerald-500 font-unbounded text-lg text-emerald-400">
                +
              </span>
              <p className="font-unbounded text-lg leading-7 md:text-xl">{faq.question}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
