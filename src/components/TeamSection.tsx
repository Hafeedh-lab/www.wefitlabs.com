import React from 'react';
import { advisoryBoard, foundingTeam } from '../data/teamData';

const LinkedInIcon = () => (
  <svg
    aria-hidden
    focusable="false"
    className="h-4 w-4 text-emerald-400"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zm-11 19H5V9h3v10zM6.5 7.5c-.97 0-1.75-.79-1.75-1.75S5.53 4 6.5 4s1.75.79 1.75 1.75S7.47 7.5 6.5 7.5zM20 19h-3v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.07 1.4-2.07 2.85V19h-3V9h2.88v1.37h.04c.4-.76 1.36-1.56 2.8-1.56 2.99 0 3.55 1.97 3.55 4.54V19z" />
  </svg>
);

const TeamGrid: React.FC<{ title: string; members: typeof foundingTeam }> = ({ title, members }) => (
  <div className="flex flex-col gap-4 rounded-[14px] border border-neutral-800/80 bg-black/60 p-6">
    <h3 className="font-unbounded text-xl text-white">{title}</h3>
    <div className="grid gap-4 md:grid-cols-3">
      {members.map((member) => (
        <div key={member.id} className="flex flex-col gap-3 rounded-lg border border-neutral-800 bg-black/70 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-unbounded text-lg text-white">{member.name}</p>
              <p className="font-poppins text-xs uppercase tracking-wide text-emerald-400">{member.title}</p>
            </div>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-emerald-500/40 bg-zinc-900/80 hover:border-emerald-400 hover:bg-zinc-900"
              aria-label={`${member.name} on LinkedIn`}
            >
              <LinkedInIcon />
            </a>
          </div>
          <p className="font-poppins text-sm text-zinc-300">{member.background}</p>
          <p className="font-poppins text-sm text-zinc-100">{member.achievements}</p>
        </div>
      ))}
    </div>
  </div>
);

export function TeamSection() {
  return (
    <section
      id="team"
      className="relative flex w-full justify-center bg-black px-4 pb-24 md:px-10"
    >
      <div className="flex w-full max-w-[1100px] flex-col gap-10 rounded-[20px] border border-neutral-800 bg-zinc-950/60 p-10 backdrop-blur">
        <header className="flex flex-col gap-4 text-center md:text-left">
          <p className="font-unbounded text-sm uppercase tracking-[0.4em] text-emerald-400">Team</p>
          <h2 className="font-unbounded text-4xl text-white md:text-5xl">Operators with proven fitness exits</h2>
          <p className="font-poppins text-lg text-zinc-200 md:max-w-3xl">
            The founding team blends product, growth, and sports science expertise backed by an advisory board of industry icons.
          </p>
        </header>

        <TeamGrid title="Founding Team" members={foundingTeam} />
        <TeamGrid title="Advisory Board" members={advisoryBoard} />
      </div>
    </section>
  );
}
