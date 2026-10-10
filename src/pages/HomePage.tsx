import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HeroMonolith } from '../components/HeroMonolith';
import { IrisSoftwareInterface } from '../components/IrisSoftwareInterface';
import { TextMask } from '../components/TextMask';
import {
  ArrowRight,
  ArrowUpRight,
  Cpu,
  Layers,
  ShieldCheck,
  Github,
  Linkedin,
  Mail,
  Copy,
  Check,
  Sparkles,
  Compass,
  Terminal,
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const [activeAxiom, setActiveAxiom] = useState<number>(0);
  const [emailCopied, setEmailCopied] = useState<boolean>(false);

  const axioms = [
    {
      num: '01',
      title: 'Build With Intent',
      thesis: 'Reject ungrounded novelty. Every line of code, interaction pattern, and architectural choice originates from a distinct functional purpose.',
      detail: 'We avoid decorative complexity. A system is defined not by how many features it boasts, but by how cleanly its internal components communicate.',
    },
    {
      num: '02',
      title: 'Engineer For Usefulness',
      thesis: 'Software must earn its place by tangibly aiding human leverage. A system is only as valuable as the real-world tasks it accelerates or clarifies.',
      detail: 'Moving beyond passive text-generation interfaces into contextual desktop actuation that actually executes verified computer workflows.',
    },
    {
      num: '03',
      title: 'Experiment. Measure. Refine.',
      thesis: 'We treat development as an empirical laboratory. Probe edge cases, measure resource constraints, and iterate relentlessly.',
      detail: 'Benchmarking acoustic transcription latency, local model memory footprints, and operating system permission boundaries on real machines.',
    },
  ];

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('connect@oscorptech.me');
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2400);
    } catch {
      // Fallback
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F3] selection:bg-white/10 selection:text-white">
      {/* =========================================================================
          HERO SECTION — Architectural Editorial Composition
      ========================================================================= */}
      <section className="relative pt-32 pb-24 border-b border-white/[0.08] overflow-hidden bg-grid-subtle">
        <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Asymmetric Header Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-4">
            <div className="lg:col-span-8 space-y-6">
              {/* Chapter Metadata */}
              <div className="flex items-center gap-3 text-[11px] font-mono tracking-[0.25em] text-[#8E8E8A] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <span>[ 00 / PROLOGUE ]</span>
                <span className="text-[#4d4e4b]">·</span>
                <span>INDEPENDENT TECHNOLOGY LABORATORY</span>
              </div>

              {/* Kinetic Typographic Statement of Intent */}
              <TextMask
                as="h1"
                lines={[
                  "We build systems that make",
                  "technology work smarter."
                ]}
                className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F5F5F3]"
              />

              {/* Controlled Supporting Paragraph */}
              <p className="text-base sm:text-lg text-[#A1A19C] max-w-xl leading-relaxed font-normal pt-1">
                Oscorp explores intelligent software, AI-powered systems,
                automation, and experimental engineering—turning ambitious ideas
                into practical technical work.
              </p>

              {/* Action Links */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  to="/projects"
                  className="group inline-flex items-center gap-3 px-6 py-3.5 text-xs font-mono tracking-[0.2em] uppercase font-semibold text-[#050505] bg-[#F5F5F3] hover:bg-white transition-all rounded-sm shadow-[0_0_24px_rgba(255,255,255,0.12)] hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Explore our work</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>

                <Link
                  to="/about"
                  className="group inline-flex items-center gap-2 px-6 py-3.5 text-xs font-mono tracking-[0.2em] uppercase text-[#F5F5F3] bg-[#0E0E0E] border border-white/[0.12] hover:border-white/40 hover:bg-[#161616] transition-all rounded-sm hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>About Oscorp</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#8E8E8A] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
                </Link>
              </div>
            </div>

            {/* Right Side: Editorial Meta Column */}
            <div className="lg:col-span-4 lg:text-right space-y-4 pt-2 hidden lg:block font-mono text-xs text-[#6F706C]">
              <div>
                <span className="text-white/80 block uppercase text-[10px] tracking-widest mb-1">
                  AFFILIATION &amp; STANDING
                </span>
                <p className="text-[#A1A19C]">Registered under India&apos;s MSME Framework</p>
              </div>
              <div className="pt-4 border-t border-white/[0.06]">
                <span className="text-white/80 block uppercase text-[10px] tracking-widest mb-1">
                  CURRENT RESEARCH FOCUS
                </span>
                <p className="text-[#A1A19C]">Multimodal Desktop Assistance &amp; System Automation</p>
              </div>
              <div className="pt-4 border-t border-white/[0.06]">
                <span className="text-white/80 block uppercase text-[10px] tracking-widest mb-1">
                  PRIMARY INITIATIVE
                </span>
                <p className="text-white font-semibold">PROJECT 001 — IRIS v4.0</p>
              </div>
            </div>
          </div>

          {/* Centerpiece Monolith Artwork */}
          <div className="mt-8">
            <HeroMonolith />
          </div>

          {/* Bottom Technical Strip */}
          <div className="pt-8 border-t border-white/[0.07] flex flex-wrap items-center justify-between gap-6 text-xs font-mono text-[#6F706C]">
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-white/50" />
              <span className="tracking-wider">OSCORP / ENGINEERING SYSTEMS</span>
            </div>
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-white/50" />
              <span className="tracking-wider">INDEPENDENT LAB</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-white/50" />
              <span className="tracking-wider text-[#F5F5F3]">FLAGSHIP: IRIS</span>
            </div>
            <div className="text-[11px] tracking-widest text-[#8E8E8A]">
              EST. 2026 · INDIA
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 02 — THE ENGINEERING AXIOMS (Editorial Monograph Spread)
          (Completely eliminates the repetitive 3-card grid)
      ========================================================================= */}
      <section className="py-28 border-b border-white/[0.07] bg-[#080808]">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          {/* Chapter Kicker */}
          <div className="flex items-center gap-3 text-[11px] font-mono tracking-[0.25em] text-[#858580] uppercase mb-12">
            <span>[ 01 // PERSPECTIVE ]</span>
            <span className="text-[#4d4e4b]">·</span>
            <span>FOUNDATIONAL AXIOMS</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Left Manifesto Column */}
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F2F2F0] leading-tight">
                Technology is only as powerful as the systems behind it.
              </h2>

              <p className="text-base text-[#A1A19C] leading-relaxed">
                We reject ungrounded AI novelty. True capability is not measured in
                prompt parlor tricks—it is forged in practical systems that operate
                reliably within human workflows.
              </p>

              <p className="text-sm text-[#6F706C] leading-relaxed">
                Oscorp operates as an independent laboratory. We do not invent
                hypothetical scale or hide behind marketing rhetoric. Our credibility
                originates directly in what we engineer, measure, and deploy.
              </p>

              <div className="pt-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.2em] uppercase text-[#F2F2F0] hover:text-white underline underline-offset-8 transition-colors"
                >
                  <span>Read our engineering monograph</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Column: Interactive Unboxed Axioms (NOT repetitive cards) */}
            <div className="lg:col-span-7 divide-y divide-white/[0.08] border-t border-b border-white/[0.08]">
              {axioms.map((ax, idx) => {
                const isSelected = activeAxiom === idx;
                return (
                  <div
                    key={ax.num}
                    onClick={() => setActiveAxiom(idx)}
                    className={`py-8 cursor-pointer transition-all duration-300 group ${
                      isSelected ? 'opacity-100' : 'opacity-60 hover:opacity-90'
                    }`}
                  >
                    <div className="flex items-baseline justify-between">
                      <div className="flex items-baseline gap-6">
                        <span className={`font-mono text-sm tracking-wider ${isSelected ? 'text-white font-bold' : 'text-[#6F706C]'}`}>
                          {ax.num}
                        </span>
                        <h3 className={`text-xl sm:text-2xl font-bold tracking-tight transition-colors ${isSelected ? 'text-white' : 'text-[#A1A19C] group-hover:text-white'}`}>
                          {ax.title}
                        </h3>
                      </div>
                      <span className="font-mono text-xs text-[#6F706C]">
                        {isSelected ? '— ACTIVE' : '+'}
                      </span>
                    </div>

                    <p className="mt-4 pl-12 text-sm text-[#A1A19C] leading-relaxed max-w-xl">
                      {ax.thesis}
                    </p>

                    {isSelected && (
                      <p className="mt-3 pl-12 text-xs font-mono text-[#6F706C] leading-relaxed max-w-xl border-l-2 border-white/30 ml-12 pl-4 animate-editorial-fade">
                        {ax.detail}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 03 — FLAGSHIP SHOWCASE: IRIS (Live Interactive Software Controller)
      ========================================================================= */}
      <section className="py-28 border-b border-white/[0.07] bg-[#050505] relative overflow-hidden">
        {/* Subtle Celestial Cyan Ambient Aura */}
        <div className="absolute right-0 top-1/3 -translate-y-1/2 w-[700px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.06)_0%,transparent_70%)] pointer-events-none" />

        <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          {/* Section Kicker & Header */}
          <div className="flex flex-wrap items-end justify-between gap-6 border-b border-white/[0.08] pb-8">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-3 text-[11px] font-mono tracking-[0.25em] text-cyan-400 uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span>[ 02 // FLAGSHIP SYSTEM ]</span>
                <span className="text-[#4d4e4b]">·</span>
                <span>PROJECT 001</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                Iris — Intelligent Desktop Assistant
              </h2>
              <p className="text-base text-[#A1A19C] leading-relaxed">
                Connecting conversational voice dialogue, dynamic model routing,
                and real-time screen perception with operating system control.
              </p>
            </div>

            <Link
              to="/projects/iris"
              className="inline-flex items-center gap-3 px-6 py-3.5 text-xs font-mono tracking-[0.2em] uppercase font-semibold text-[#050505] bg-cyan-400 hover:bg-cyan-300 transition-all rounded-sm shadow-[0_0_24px_rgba(34,211,238,0.25)] hover:scale-[1.02]"
            >
              <span>Explore Iris Case Study</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Live Software Emulator */}
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-[#6F706C]">
              <span>LIVE APPLICATION CONTROLLER (INTERACTIVE EMULATION)</span>
              <span className="text-cyan-400/80">[ CLICK THE CENTRAL CORE ORB TO TEST ACTIVATION ]</span>
            </div>
            <IrisSoftwareInterface />
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 04 — THE BUILDER: ADITYA MITTAL (First-Person Authenticity)
      ========================================================================= */}
      <section className="py-28 border-b border-white/[0.07] bg-[#080808]">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 text-[11px] font-mono tracking-[0.25em] text-[#858580] uppercase mb-12">
            <span>[ 03 // FOUNDER &amp; BUILDER ]</span>
            <span className="text-[#4d4e4b]">·</span>
            <span>DIRECT CRAFTSMANSHIP</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#F2F2F0]">
                Aditya Mittal
              </h2>

              <p className="text-lg text-white font-medium leading-relaxed italic font-serif">
                &quot;I founded Oscorp to build the systems I wanted to exist on my own
                desktop: intelligent, context-aware software that respects user
                control and accelerates computing.&quot;
              </p>

              <p className="text-base text-[#A1A19C] leading-relaxed">
                My work spans conversational desktop assistants, multimodal screen
                perception, and operating system automation. Rather than speculating
                about future artificial intelligence from the sidelines, my focus has
                always been learning through direct engineering: understanding the
                underlying low-level protocols, managing latency budgets, and shipping
                dependable software.
              </p>

              {/* Verified Professional Links */}
              <div className="pt-6 space-y-3">
                <span className="text-[10px] font-mono tracking-widest text-[#8E8E8A] uppercase block">
                  EXPLORE FOUNDER REPOSITORIES &amp; CONNECT
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  <a
                    href="https://github.com/adityamittal0786"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Aditya Mittal on GitHub — Explore my code and engineering projects"
                    className="p-4 bg-[#0B0B0B] border border-white/[0.1] hover:border-white/40 transition-all rounded-sm flex items-start justify-between group focus:outline-none focus-visible:ring-1 focus-visible:ring-white hover:-translate-y-0.5"
                  >
                    <div className="flex items-start gap-3">
                      <Github className="w-4 h-4 text-white shrink-0 mt-0.5" />
                      <div>
                        <span className="font-mono text-xs font-semibold text-[#F5F5F3] block">
                          GitHub
                        </span>
                        <p className="text-[11px] text-[#A1A19C] mt-0.5">
                          Explore my code and engineering projects.
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#6F706C] group-hover:text-white transition-colors shrink-0 ml-2" />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/adityamittal2006/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Aditya Mittal on LinkedIn — Connect with me professionally"
                    className="p-4 bg-[#0B0B0B] border border-white/[0.1] hover:border-white/40 transition-all rounded-sm flex items-start justify-between group focus:outline-none focus-visible:ring-1 focus-visible:ring-white hover:-translate-y-0.5"
                  >
                    <div className="flex items-start gap-3">
                      <Linkedin className="w-4 h-4 text-white shrink-0 mt-0.5" />
                      <div>
                        <span className="font-mono text-xs font-semibold text-[#F5F5F3] block">
                          LinkedIn
                        </span>
                        <p className="text-[11px] text-[#A1A19C] mt-0.5">
                          Connect with me professionally.
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#6F706C] group-hover:text-white transition-colors shrink-0 ml-2" />
                  </a>
                </div>

                <div className="pt-2">
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-[#A1A19C] hover:text-white underline underline-offset-8 transition-colors"
                  >
                    <span>Read complete monograph &amp; verified credentials</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column: Verified Credentials List */}
            <div className="lg:col-span-5 p-8 bg-[#040404] border border-white/[0.08] space-y-4 rounded-sm">
              <span className="text-[10px] font-mono tracking-widest text-[#858580] uppercase block">
                VERIFIED TECHNICAL CREDENTIALS
              </span>

              <div className="space-y-4 font-mono text-xs text-[#A1A19C] pt-2">
                <div className="border-b border-white/[0.06] pb-3">
                  <span className="text-white font-semibold block text-sm">
                    First Prize — Ideathon
                  </span>
                  <span className="text-[#6F706C] text-[11px]">Sharda University Agra</span>
                </div>

                <div className="border-b border-white/[0.06] pb-3">
                  <span className="text-white font-semibold block text-sm">
                    Copado AI Certification
                  </span>
                  <span className="text-[#6F706C] text-[11px]">Copado DevOps Testing</span>
                </div>

                <div className="border-b border-white/[0.06] pb-3">
                  <span className="text-white font-semibold block text-sm">
                    Oracle Professional Credentials
                  </span>
                  <span className="text-[#6F706C] text-[11px]">Oracle University</span>
                </div>

                <div>
                  <span className="text-white font-semibold block text-sm">
                    Top 400 Placement — PromptWars
                  </span>
                  <span className="text-[#6F706C] text-[11px]">Global Prompt Engineering Challenge</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 05 — DIRECT COMMUNICATION INVITATION
      ========================================================================= */}
      <section className="py-28 bg-[#050505]">
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="flex items-center justify-center gap-3 text-[11px] font-mono tracking-[0.25em] text-[#858580] uppercase">
            <span>[ 04 // EPILOGUE ]</span>
            <span className="text-[#4d4e4b]">·</span>
            <span>COMMUNICATION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#F2F2F0]">
            Have something worth building?
          </h2>

          <p className="text-base text-[#A1A19C] max-w-xl mx-auto leading-relaxed">
            For technical discussions, systems collaboration, or inquiries regarding
            Oscorp engineering, get in touch with us directly.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-6 py-3.5 text-xs font-mono tracking-[0.2em] uppercase font-semibold text-[#050505] bg-[#F2F2F0] hover:bg-white transition-all rounded-sm shadow-[0_0_24px_rgba(255,255,255,0.12)] hover:scale-[1.02]"
            >
              <span>Initiate Conversation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 text-xs font-mono tracking-[0.2em] uppercase text-[#F2F2F0] bg-[#101010] border border-white/[0.14] hover:border-white/40 transition-all rounded-sm hover:scale-[1.02] cursor-pointer"
            >
              {emailCopied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-white" />
                  <span>Copied Email</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#858580]" />
                  <span>connect@oscorptech.me</span>
                </>
              )}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
