import React from 'react';
import { advisoryBoard, leadershipTeam } from '../data/investorData';

export function TeamSection() {
  return (
    <section id="team" className="relative w-full bg-black text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-20 md:px-12 lg:px-16">
        <div className="max-w-3xl space-y-4">
          <p className="font-unbounded text-sm uppercase tracking-[0.4em] text-emerald-400">Leadership &amp; Advisors</p>
          <h2 className="font-unbounded text-3xl leading-tight md:text-5xl">Operators with exits and enterprise scale experience</h2>
          <p className="font-poppins text-base text-zinc-300 md:text-lg">
            WeFit is led by seasoned builders who have scaled consumer platforms, wellness ecosystems, and revenue teams to tens of
            millions of users. Our advisory network includes investors and operators who have delivered meaningful exits.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {leadershipTeam.map((member) => (
            <article
              key={member.id}
              className="relative overflow-hidden rounded-3xl border border-emerald-900/60 bg-neutral-950/80 p-6 shadow-[0_0_40px_rgba(16,185,129,0.12)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-unbounded text-2xl">{member.name}</h3>
                  <p className="font-unbounded text-sm uppercase tracking-[0.3em] text-emerald-500/80">{member.title}</p>
                </div>
                <a
                  href={member.linkedIn}
                  className="rounded-full border border-emerald-500/60 px-4 py-1 font-unbounded text-xs uppercase tracking-[0.4em] text-emerald-300 transition hover:bg-emerald-500/10"
                >
                  LinkedIn
                </a>
              </div>
              <p className="mt-4 font-poppins text-sm text-zinc-300">{member.bio}</p>
            </article>
          ))}
        </div>

        <div className="rounded-3xl border border-zinc-900 bg-neutral-950/70 p-6">
          <h3 className="font-unbounded text-xl text-emerald-300">Advisory Board</h3>
          <div className="mt-5 grid gap-6 md:grid-cols-3">
            {advisoryBoard.map((advisor) => (
              <div key={advisor.id} className="rounded-2xl border border-emerald-900/50 bg-black/70 p-4">
                <p className="font-unbounded text-lg text-white">{advisor.name}</p>
                <p className="font-unbounded text-xs uppercase tracking-[0.3em] text-emerald-500/80">{advisor.title}</p>
                <p className="mt-3 font-poppins text-sm text-zinc-300">{advisor.bio}</p>
                <a
                  href={advisor.linkedIn}
                  className="mt-4 inline-flex items-center text-xs font-unbounded uppercase tracking-[0.3em] text-emerald-400 underline-offset-4 hover:underline"
                >
                  View Profile
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
