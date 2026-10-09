import React from 'react';
import { Link } from 'react-router-dom';
import { OscorpLogo } from './OscorpLogo';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] border-t border-white/[0.08] text-[#A1A19C] text-xs font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <Link to="/" className="inline-block hover:opacity-90 transition-opacity">
              <OscorpLogo size="md" showSubtitle={true} />
            </Link>

            <p className="text-xs text-[#A1A19C] max-w-sm leading-relaxed mt-2 font-sans">
              Oscorp Orchestrated System Corporation is an independent technology
              company exploring intelligent software, AI-powered systems,
              automation, and experimental engineering.
            </p>

            <div className="text-[11px] text-[#6F706C] space-y-1 pt-1 font-mono">
              <div>Standing: Registered under India’s MSME framework</div>
              <div>Network: oscorptech.me · connect@oscorptech.me</div>
            </div>
          </div>

          {/* Multi-Page Navigation */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-[#F2F2F0] uppercase tracking-[0.2em] text-[11px] font-semibold block">
              SYSTEM SECTIONS
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="hover:text-[#F2F2F0] transition-colors">
                  Overview
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-[#F2F2F0] transition-colors">
                  Projects &amp; Engineering
                </Link>
              </li>
              <li>
                <Link to="/projects/iris" className="hover:text-[#F2F2F0] transition-colors">
                  Flagship Case Study: Iris v4.0
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#F2F2F0] transition-colors">
                  About Oscorp &amp; Founder
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#F2F2F0] transition-colors">
                  Inquiries &amp; Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Founder Social & Connection */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-[#F2F2F0] uppercase tracking-[0.2em] text-[11px] font-semibold block">
              FOUNDER PROFILES
            </span>

            <p className="text-xs text-[#6F706C] leading-relaxed font-sans">
              Personal verified professional profiles for Aditya Mittal:
            </p>

            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://github.com/adityamittal0786"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Aditya Mittal on GitHub"
                className="w-9 h-9 rounded-sm bg-[#101010] border border-white/[0.1] flex items-center justify-center text-[#A1A19C] hover:text-[#F2F2F0] hover:border-white/40 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-white"
                title="Aditya Mittal on GitHub"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href="https://www.linkedin.com/in/adityamittal2006/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Aditya Mittal on LinkedIn"
                className="w-9 h-9 rounded-sm bg-[#101010] border border-white/[0.1] flex items-center justify-center text-[#A1A19C] hover:text-[#F2F2F0] hover:border-white/40 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-white"
                title="Aditya Mittal on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href="mailto:connect@oscorptech.me"
                aria-label="Email Oscorp"
                className="w-9 h-9 rounded-sm bg-[#101010] border border-white/[0.1] flex items-center justify-center text-[#A1A19C] hover:text-[#F2F2F0] hover:border-white/40 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-white"
                title="Email Oscorp"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2 text-[11px] text-[#6F706C]">
              EST. 2026 · INDIA
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="mt-16 pt-8 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-4 text-[11px] text-[#6F706C]">
          <div>
            © {currentYear} Oscorp Orchestrated System Corporation. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>CONNECT@OSCORPTECH.ME</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 hover:text-[#F2F2F0] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-white rounded cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
