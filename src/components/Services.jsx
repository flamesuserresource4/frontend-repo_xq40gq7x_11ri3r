import React from 'react';
import { Cpu, Users, Shield } from 'lucide-react';

const services = [
  {
    icon: Cpu,
    title: 'Hybrid IT Outsourcing',
    desc: 'On‑demand engineering squads, SRE, DevOps, and cloud specialists embedded with your teams to accelerate delivery.',
  },
  {
    icon: Users,
    title: 'IT Talent Headhunting',
    desc: 'Executive search and niche technologists sourced globally. We match culture, capability, and outcomes.',
  },
  {
    icon: Shield,
    title: 'Managed Teams',
    desc: 'Fully managed delivery pods with SLAs, agile governance, and transparent reporting to de‑risk critical initiatives.',
  },
];

const Services = () => {
  return (
    <section id="services" className="relative w-full bg-black py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(217,70,239,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-extrabold sm:text-4xl">What We Do</h2>
            <p className="mt-2 max-w-xl text-fuchsia-100/80">
              Purpose‑built solutions that scale with your roadmap and deliver measurable impact.
            </p>
          </div>
          <a
            href="#contact"
            className="rounded-lg border border-fuchsia-400/30 bg-fuchsia-500/10 px-4 py-2 text-sm font-semibold text-fuchsia-200 hover:bg-fuchsia-500/20"
          >
            Get a Proposal
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 shadow-lg transition hover:translate-y-[-2px] hover:shadow-fuchsia-500/20"
            >
              <div className="inline-flex rounded-xl bg-fuchsia-500/15 p-3 text-fuchsia-300 ring-1 ring-inset ring-fuchsia-500/20">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-bold">{title}</h3>
              <p className="mt-2 text-sm text-fuchsia-100/80">{desc}</p>
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-fuchsia-500/10 blur-3xl transition duration-300 group-hover:bg-fuchsia-500/20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
