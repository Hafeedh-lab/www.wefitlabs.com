import React, { useMemo, useState } from 'react';
import { investorResources } from '../data/investorData';
import type { ResourceAsset } from '../data/investorData';
import { trackCTA, trackDocumentDownload, trackFormProgress, trackMeetingScheduled } from '../utils/analytics';

type LeadFormState = {
  readonly email: string;
  readonly name: string;
  readonly firm: string;
  readonly investorType: string;
};

const INITIAL_STATE: LeadFormState = {
  email: '',
  name: '',
  firm: '',
  investorType: '',
};

export function InvestorResourcesSection() {
  const [step, setStep] = useState(1);
  const [formState, setFormState] = useState<LeadFormState>(INITIAL_STATE);
  const [accessGranted, setAccessGranted] = useState(false);

  const resourcesByType = useMemo(() => {
    return investorResources.reduce<Record<string, ResourceAsset[]>>(
      (acc, resource) => {
        if (!acc[resource.type]) {
          acc[resource.type] = [];
        }
        acc[resource.type] = [...acc[resource.type], resource];
        return acc;
      },
      {},
    );
  }, []);

  const handleInputChange = (field: keyof LeadFormState) => (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormState((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const advanceStep = () => {
    const nextStep = step + 1;
    setStep(nextStep);
    trackFormProgress('investor_resource_center', nextStep, {
      ...formState,
    });
  };

  const handleStepOne = (event: React.FormEvent) => {
    event.preventDefault();
    if (!formState.email) {
      return;
    }
    trackFormProgress('investor_resource_center', step, { stage: 'email_capture', email: formState.email });
    advanceStep();
  };

  const handleStepTwo = (event: React.FormEvent) => {
    event.preventDefault();
    if (!formState.name || !formState.firm || !formState.investorType) {
      return;
    }
    trackFormProgress('investor_resource_center', step, {
      stage: 'qualification',
      ...formState,
    });
    setAccessGranted(true);
  };

  const resetForm = () => {
    setFormState(INITIAL_STATE);
    setStep(1);
    setAccessGranted(false);
  };

  return (
    <section id="resources" className="relative w-full bg-black text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-20 md:px-12 lg:px-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="space-y-4">
            <p className="font-unbounded text-sm uppercase tracking-[0.4em] text-emerald-400">Investor Resource Center</p>
            <h2 className="font-unbounded text-3xl leading-tight md:text-5xl">Curated diligence portal for sophisticated investors</h2>
            <p className="max-w-2xl font-poppins text-base text-zinc-300 md:text-lg">
              Access our gated data room, download the latest pitch materials, and schedule a live diligence session with the founding team.
              Progressive lead capture ensures you see the right assets based on your investor profile.
            </p>
          </div>
          <div className="flex flex-col items-start gap-4 md:items-end">
            <button
              onClick={() => {
                trackCTA('schedule_demo_top', { surface: 'investor_resource_center' });
                window.open('https://cal.com/wefit/investor-demo', '_blank');
                trackMeetingScheduled('cal_com_demo', { location: 'resource_header' });
              }}
              className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 font-unbounded text-sm uppercase tracking-[0.2em] text-black transition hover:bg-emerald-400"
            >
              Schedule Demo
            </button>
            <button
              onClick={resetForm}
              className="text-xs font-unbounded uppercase tracking-[0.4em] text-zinc-400 underline-offset-4 hover:text-emerald-300 hover:underline"
            >
              Reset Access
            </button>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div className="rounded-3xl border border-emerald-900/70 bg-neutral-950/80 p-8 shadow-[0_0_40px_rgba(16,185,129,0.12)]">
            <h3 className="font-unbounded text-xl text-emerald-300">Progressive Lead Capture</h3>
            {step === 1 && (
              <form onSubmit={handleStepOne} className="mt-6 space-y-4">
                <label className="block">
                  <span className="font-unbounded text-xs uppercase tracking-[0.4em] text-emerald-400">Work email</span>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={handleInputChange('email')}
                    className="mt-2 w-full rounded-full border border-emerald-900/60 bg-black/70 px-5 py-3 font-poppins text-sm text-white placeholder:text-zinc-500 focus:border-emerald-400 focus:outline-none"
                    placeholder="investor@fund.com"
                  />
                </label>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 font-unbounded text-sm uppercase tracking-[0.3em] text-black transition hover:bg-emerald-400"
                >
                  Unlock Next Step
                </button>
              </form>
            )}
            {step === 2 && !accessGranted && (
              <form onSubmit={handleStepTwo} className="mt-6 grid gap-4 md:grid-cols-2">
                <label className="md:col-span-2">
                  <span className="font-unbounded text-xs uppercase tracking-[0.4em] text-emerald-400">Full name</span>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={handleInputChange('name')}
                    className="mt-2 w-full rounded-full border border-emerald-900/60 bg-black/70 px-5 py-3 font-poppins text-sm text-white placeholder:text-zinc-500 focus:border-emerald-400 focus:outline-none"
                    placeholder="Jordan Malik"
                  />
                </label>
                <label>
                  <span className="font-unbounded text-xs uppercase tracking-[0.4em] text-emerald-400">Fund / Firm</span>
                  <input
                    type="text"
                    required
                    value={formState.firm}
                    onChange={handleInputChange('firm')}
                    className="mt-2 w-full rounded-full border border-emerald-900/60 bg-black/70 px-5 py-3 font-poppins text-sm text-white placeholder:text-zinc-500 focus:border-emerald-400 focus:outline-none"
                    placeholder="Horizon Ventures"
                  />
                </label>
                <label>
                  <span className="font-unbounded text-xs uppercase tracking-[0.4em] text-emerald-400">Investor type</span>
                  <select
                    required
                    value={formState.investorType}
                    onChange={handleInputChange('investorType')}
                    className="mt-2 w-full rounded-full border border-emerald-900/60 bg-black/70 px-5 py-3 font-poppins text-sm text-white focus:border-emerald-400 focus:outline-none"
                  >
                    <option value="" disabled>
                      Select profile
                    </option>
                    <option value="vc">Venture Capital</option>
                    <option value="strategic">Strategic / Corporate</option>
                    <option value="angel">Angel / Operator</option>
                    <option value="pe">Growth Equity / PE</option>
                  </select>
                </label>
                <div className="md:col-span-2 flex items-center justify-between">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 font-unbounded text-sm uppercase tracking-[0.3em] text-black transition hover:bg-emerald-400"
                  >
                    Grant Access
                  </button>
                  <span className="text-xs font-unbounded uppercase tracking-[0.3em] text-zinc-500">Step 2 of 2</span>
                </div>
              </form>
            )}
            {accessGranted && (
              <div className="mt-6 space-y-4">
                <p className="font-unbounded text-lg text-emerald-300">Access granted — downloads tracked</p>
                <p className="font-poppins text-sm text-zinc-300">
                  Each document download is logged to your investor profile. Reach out to <a href="mailto:invest@wefitlabs.com" className="text-emerald-400 underline-offset-4 hover:underline">invest@wefitlabs.com</a> for a data room walkthrough.
                </p>
              </div>
            )}
          </div>

          <div className="rounded-3xl border border-zinc-900 bg-neutral-950/70 p-8">
            <h3 className="font-unbounded text-xl text-emerald-300">Downloadable Assets</h3>
            <p className="mt-3 font-poppins text-sm text-zinc-300">Downloads are available once access is granted.</p>
            <div className="mt-6 space-y-4">
              {Object.entries(resourcesByType).map(([type, resources]) => (
                <div key={type} className="rounded-2xl border border-emerald-900/50 bg-black/70 p-4">
                  <p className="font-unbounded text-sm uppercase tracking-[0.4em] text-emerald-400">{type}</p>
                  <ul className="mt-3 space-y-3">
                    {resources.map((resource) => (
                      <li key={resource.id} className="flex items-center justify-between gap-4">
                        <div>
                          <p className="font-unbounded text-base text-white">{resource.title}</p>
                          <p className="font-poppins text-xs text-zinc-400">{resource.description}</p>
                        </div>
                        <button
                          type="button"
                          disabled={!accessGranted}
                          onClick={() => {
                            if (!accessGranted) {
                              return;
                            }
                            trackDocumentDownload(resource.title, { href: resource.href, investorType: formState.investorType });
                            window.open(resource.href, '_blank');
                          }}
                          className="inline-flex items-center justify-center rounded-full border border-emerald-500/60 px-4 py-2 font-unbounded text-xs uppercase tracking-[0.3em] text-emerald-300 transition hover:bg-emerald-500/10 disabled:border-zinc-700 disabled:text-zinc-500"
                        >
                          Download
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-emerald-900/50 bg-black/70 p-4">
              <p className="font-unbounded text-sm uppercase tracking-[0.3em] text-emerald-400">Demo Library</p>
              <p className="mt-2 font-poppins text-sm text-zinc-300">
                Watch segment-specific demos or request a bespoke walkthrough tailored to your diligence focus.
              </p>
              <button
                type="button"
                onClick={() => {
                  trackCTA('watch_demo_library', { surface: 'investor_resource_center' });
                  window.open('https://videos.wefitlabs.com/investor-demos', '_blank');
                }}
                className="mt-4 inline-flex items-center justify-center rounded-full bg-emerald-500 px-5 py-2 font-unbounded text-xs uppercase tracking-[0.3em] text-black transition hover:bg-emerald-400"
              >
                Open Demo Gallery
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
