import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import CTA from './components/CTA';

const App = () => {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-black/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="text-lg font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-fuchsia-400 to-purple-500 bg-clip-text text-transparent">Geekz</span>
          </a>
          <nav className="hidden gap-6 text-sm font-medium sm:flex">
            <a href="#services" className="text-white/80 hover:text-white">Services</a>
            <a href="#" className="text-white/80 hover:text-white">Case Studies</a>
            <a href="#contact" className="text-white/80 hover:text-white">Contact</a>
          </nav>
          <a
            href="#contact"
            className="rounded-lg border border-fuchsia-400/30 bg-fuchsia-500/10 px-4 py-2 text-sm font-semibold text-fuchsia-200 hover:bg-fuchsia-500/20"
          >
            Work With Us
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <Services />
        <Process />
        <CTA />
      </main>

      <footer className="border-t border-white/5 bg-black/80 py-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-white/60">© {new Date().getFullYear()} Geekz. All rights reserved.</p>
            <div className="text-xs text-white/50">Built with care — Bold • Modern • Techy</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
