import React from 'react';
import { investorResources } from '../data/investorResourcesData';
import {
  trackDocumentDownload,
  trackLeadCapture,
  trackMeetingScheduled,
} from '../utils/investorAnalytics';

const buttonBase =
  'font-unbounded inline-flex items-center justify-center rounded-[8px] border border-emerald-400 px-4 py-3 text-sm transition-colors duration-200';

type InvestorStage = 'Pre-Seed' | 'Seed' | 'Series A+';

type InvestorType = 'VC' | 'Strategic' | 'Angel' | 'Family Office';

export function InvestorResourcesSection() {
  const [step, setStep] = React.useState<1 | 2>(1);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [accessGranted, setAccessGranted] = React.useState(false);
  const [stage, setStage] = React.useState<InvestorStage>('Seed');
  const [investorType, setInvestorType] = React.useState<InvestorType>('VC');
  const [formValues, setFormValues] = React.useState({
    name: '',
    email: '',
    firm: '',
    focus: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleStepOne = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formValues.email || !formValues.name) {
      return;
    }
    setStep(2);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formValues.email) {
      return;
    }
    setIsSubmitting(true);
    const delay = typeof window !== 'undefined' ? window.setTimeout.bind(window) : setTimeout;
    delay(() => {
      trackLeadCapture('investor-resource-center', investorType, stage);
      setAccessGranted(true);
      setIsSubmitting(false);
    }, 500);
  };

  const handleDownload = (resourceId: string) => {
    if (!accessGranted) {
      return;
    }
    trackDocumentDownload(resourceId);
  };

  const handleSchedule = () => {
    trackMeetingScheduled('cal.com');
  };

  return (
    <section
      id="resources"
      className="relative flex w-full justify-center bg-black px-4 pb-24 md:px-10"
    >
      <div className="flex w-full max-w-[1100px] flex-col gap-10 rounded-[20px] border border-neutral-800 bg-zinc-950/60 p-10 backdrop-blur">
        <header className="flex flex-col gap-4 text-center md:text-left">
          <p className="font-unbounded text-sm uppercase tracking-[0.4em] text-emerald-400">Investor Resource Center</p>
          <h2 className="font-unbounded text-4xl text-white md:text-5xl">Due diligence ready in one destination</h2>
          <p className="font-poppins text-lg text-zinc-200 md:max-w-3xl">
            Gain access to our pitch materials, financial model, market research, and demo library. Complete the progressive lead capture to unlock downloads.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-[0.9fr,1.1fr]">
          <div className="flex flex-col gap-4 rounded-[14px] border border-neutral-800/80 bg-black/60 p-6">
            <h3 className="font-unbounded text-xl text-white">Request Access</h3>
            <p className="font-poppins text-sm text-zinc-300">
              Step {step} of 2 — we personalize follow-ups based on your role and check size.
            </p>
            {step === 1 ? (
              <form className="flex flex-col gap-4" onSubmit={handleStepOne}>
                <input
                  name="name"
                  value={formValues.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="font-poppins rounded-[10px] border border-neutral-800 bg-zinc-900 px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:border-emerald-400 focus:outline-none"
                  required
                />
                <input
                  name="email"
                  type="email"
                  value={formValues.email}
                  onChange={handleChange}
                  placeholder="Work email"
                  className="font-poppins rounded-[10px] border border-neutral-800 bg-zinc-900 px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:border-emerald-400 focus:outline-none"
                  required
                />
                <input
                  name="firm"
                  value={formValues.firm}
                  onChange={handleChange}
                  placeholder="Firm / Fund"
                  className="font-poppins rounded-[10px] border border-neutral-800 bg-zinc-900 px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:border-emerald-400 focus:outline-none"
                />
                <button type="submit" className={`${buttonBase} bg-emerald-400 text-black hover:bg-emerald-300`}>
                  Continue
                </button>
              </form>
            ) : (
              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <div className="grid gap-4 md:grid-cols-2">
                  <label className="flex flex-col gap-2">
                    <span className="font-poppins text-xs uppercase tracking-wide text-zinc-400">Investor Type</span>
                    <select
                      value={investorType}
                      onChange={(event) => setInvestorType(event.target.value as InvestorType)}
                      className="font-poppins rounded-[10px] border border-neutral-800 bg-zinc-900 px-4 py-3 text-sm text-white focus:border-emerald-400 focus:outline-none"
                    >
                      <option value="VC">Venture Capital</option>
                      <option value="Strategic">Strategic / Corporate</option>
                      <option value="Angel">Angel Investor</option>
                      <option value="Family Office">Family Office</option>
                    </select>
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="font-poppins text-xs uppercase tracking-wide text-zinc-400">Target Stage</span>
                    <select
                      value={stage}
                      onChange={(event) => setStage(event.target.value as InvestorStage)}
                      className="font-poppins rounded-[10px] border border-neutral-800 bg-zinc-900 px-4 py-3 text-sm text-white focus:border-emerald-400 focus:outline-none"
                    >
                      <option value="Pre-Seed">Pre-Seed</option>
                      <option value="Seed">Seed</option>
                      <option value="Series A+">Series A+</option>
                    </select>
                  </label>
                </div>
                <label className="flex flex-col gap-2">
                  <span className="font-poppins text-xs uppercase tracking-wide text-zinc-400">Focus Areas</span>
                  <textarea
                    name="focus"
                    value={formValues.focus}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Sports tech, digital health, gaming, etc."
                    className="font-poppins rounded-[10px] border border-neutral-800 bg-zinc-900 px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:border-emerald-400 focus:outline-none"
                  />
                </label>
                <button
                  type="submit"
                  className={`${buttonBase} ${isSubmitting ? 'cursor-wait bg-emerald-500/40 text-emerald-200' : 'bg-emerald-400 text-black hover:bg-emerald-300'}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Granting Access…' : 'Unlock Resources'}
                </button>
                {accessGranted && (
                  <p className="font-poppins text-sm text-emerald-200">
                    Access granted — downloads are now enabled. A member of our team will reach out within 24 hours.
                  </p>
                )}
              </form>
            )}
          </div>

          <div className="flex flex-col gap-6">
            <div className="grid gap-4 md:grid-cols-2">
              {investorResources.map((resource) => (
                <div key={resource.id} className="flex h-full flex-col justify-between gap-3 rounded-[14px] border border-neutral-800 bg-black/70 p-5">
                  <div className="flex flex-col gap-2">
                    <span className="font-poppins text-xs uppercase tracking-wide text-zinc-500">{resource.fileType.toUpperCase()}</span>
                    <p className="font-unbounded text-lg text-white">{resource.name}</p>
                    <p className="font-poppins text-sm text-zinc-300">{resource.description}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleDownload(resource.id)}
                    className={`${buttonBase} ${accessGranted ? 'bg-emerald-400 text-black hover:bg-emerald-300' : 'bg-transparent text-emerald-400 hover:bg-emerald-500/10'}`}
                    disabled={!accessGranted}
                  >
                    {accessGranted ? 'Download' : 'Unlock to Download'}
                  </button>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4 rounded-[14px] border border-neutral-800/80 bg-black/60 p-6">
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="font-unbounded text-xl text-white">Schedule a live diligence demo</p>
                  <p className="font-poppins text-sm text-zinc-300">30-minute walkthrough tailored to your investment thesis.</p>
                </div>
                <a
                  href="https://cal.com/wefit/investor-demo"
                  target="_blank"
                  rel="noreferrer"
                  onClick={handleSchedule}
                  className={`${buttonBase} bg-emerald-400 text-black hover:bg-emerald-300`}
                >
                  Book via Cal.com
                </a>
              </div>
              <div className="h-[280px] w-full overflow-hidden rounded-[12px] border border-neutral-800 bg-black/80">
                <iframe
                  title="WeFit Investor Demo Scheduler"
                  src="https://cal.com/wefit/investor-demo?embed=true"
                  className="h-full w-full"
                  loading="lazy"
                  allow="camera; microphone; autoplay; encrypted-media"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
