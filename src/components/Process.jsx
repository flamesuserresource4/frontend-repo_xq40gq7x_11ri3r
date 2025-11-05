import React from 'react';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    title: 'Discovery',
    detail: 'We map your goals, tech stack, culture, and delivery constraints.'
  },
  {
    title: 'Curation',
    detail: 'Talent screening and team design aligned to your outcomes.'
  },
  {
    title: 'Onboarding',
    detail: 'Rapid kickoff with clear operating cadence and tooling.'
  },
  {
    title: 'Performance',
    detail: 'Continuous improvement with metrics, feedback, and governance.'
  },
];

const Process = () => {
  return (
    <section className="relative w-full bg-black py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(147,51,234,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-extrabold sm:text-4xl">How We Deliver</h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-fuchsia-100/80">
          A simple, high‑signal engagement model that gets you to value faster.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.title} className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-600 text-white shadow-lg">
                <span className="text-sm font-bold">{i + 1}</span>
              </div>
              <h3 className="text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-fuchsia-100/80">{s.detail}</p>
              {i < steps.length - 1 && (
                <div className="mt-4 hidden items-center text-fuchsia-300 md:flex">
                  <ArrowRight className="h-4 w-4" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
