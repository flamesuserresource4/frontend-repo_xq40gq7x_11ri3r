import React, { useState } from 'react';

const CTA = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    alert(`Thanks! We'll reach out to ${email} shortly.`);
    setEmail('');
  };

  return (
    <section id="contact" className="relative w-full bg-black py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-fuchsia-600/10 via-transparent to-fuchsia-600/10" />
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="overflow-hidden rounded-3xl border border-fuchsia-400/20 bg-gradient-to-br from-fuchsia-500/10 to-purple-600/10 p-8 shadow-xl">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="text-2xl font-extrabold sm:text-3xl">Let’s build your next high‑impact team</h3>
            <p className="mt-2 text-fuchsia-100/80">
              Share your work email and our experts will follow up with a tailored plan within 24 hours.
            </p>
            <form onSubmit={handleSubmit} className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="w-full flex-1 rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-fuchsia-200/50 outline-none ring-fuchsia-400/30 focus:ring"
              />
              <button
                type="submit"
                className="w-full rounded-xl bg-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/30 transition hover:bg-fuchsia-400 sm:w-auto"
              >
                Request Intro
              </button>
            </form>
            <p className="mt-3 text-xs text-fuchsia-100/60">No spam. No noise. Just outcomes.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
