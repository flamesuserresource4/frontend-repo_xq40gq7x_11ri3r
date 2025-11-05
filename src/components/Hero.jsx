import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/yji5KWXyD-xKVkWj/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlays to enhance contrast without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.15),transparent_60%)]" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <span className="mb-4 inline-flex items-center rounded-full border border-fuchsia-400/30 bg-fuchsia-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-fuchsia-300 backdrop-blur-sm">
          Geekz • B2B Tech Talent
        </span>
        <h1 className="max-w-4xl bg-gradient-to-br from-white via-fuchsia-200 to-fuchsia-400 bg-clip-text text-4xl font-extrabold leading-tight text-transparent sm:text-5xl md:text-6xl">
          Hybrid IT Outsourcing & Elite IT Talent Headhunting
        </h1>
        <p className="mt-4 max-w-2xl text-base text-fuchsia-100/80 sm:text-lg">
          We build high‑impact teams and on‑demand capabilities for ambitious enterprises. Bold, modern, and built for speed.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#services"
            className="rounded-xl bg-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/30 transition hover:bg-fuchsia-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-300"
          >
            Explore Services
          </a>
          <a
            href="#contact"
            className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-fuchsia-300"
          >
            Speak to an Expert
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
