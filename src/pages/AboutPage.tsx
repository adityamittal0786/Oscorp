import React from 'react';
import { Link } from 'react-router-dom';
import { TextMask } from '../components/TextMask';
import {
  Github,
  Linkedin,
  ArrowUpRight,
  ArrowRight,
  Cpu,
  Layers,
  Sparkles,
  Terminal,
  Trophy,
  Shield,
  CheckCircle2,
  Award,
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const verifiedInterests = [
    {
      title: 'Intelligent Desktop Assistants',
      desc: 'Exploring conversational human-computer interaction, voice dialogue cadence, and OS-level execution.',
    },
    {
      title: 'Multimodal AI & Screen Perception',
      desc: 'Grounding conversational reasoning directly in live desktop visual context via Gemini multimodal APIs.',
    },
    {
      title: 'Edge Inference & Model Quantization',
      desc: 'Investigating small, fast local language models for private on-device syntactic command routing.',
    },
    {
      title: 'Developer Tooling & System Automation',
      desc: 'Eliminating repetitive developer toil through sandboxed operating system automation.',
    },
  ];

  const credentials = [
    {
      title: 'First Prize — Regional Ideathon',
      organization: 'Sharda University Agra',
      category: 'HACKATHON & INNOVATION',
      desc: 'Awarded first place for conceptualizing and pitching a high-impact technical systems solution.',
    },
    {
      title: 'Copado AI Certification',
      organization: 'Copado DevOps / Robotic Testing',
      category: 'INDUSTRY CERTIFICATION',
      desc: 'Certified competence in automated AI-assisted test architecture and continuous deployment workflows.',
    },
    {
      title: 'Oracle Professional Credentials',
      organization: 'Oracle University',
      category: 'ENTERPRISE DATABASE & CLOUD',
      desc: 'Verified professional qualification in enterprise database fundamentals and relational cloud infrastructure.',
    },
    {
      title: 'Top 400 Placement — PromptWars Challenge',
      organization: 'PromptWars Virtual Challenge',
      category: 'GLOBAL MODEL STEERING',
      desc: 'Ranked in the top 400 globally in generative model context steering and prompt optimization tasks.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-[#F2F2F0] pt-32 pb-28 selection:bg-white/10 selection:text-white">
      <div className="w-full px-4 sm:px-6 lg:px-8 space-y-24">
        {/* =========================================================================
            HEADER — Monograph Overview
        ========================================================================= */}
        <div className="border-b border-white/[0.08] pb-12">
          <div className="flex items-center gap-3 text-[11px] font-mono tracking-[0.25em] text-[#858580] uppercase mb-4">
            <span>[ ABOUT // LAB PROFILE ]</span>
            <span className="text-[#4d4e4b]">·</span>
            <span>OSCORP ORCHESTRATED SYSTEM CORPORATION</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <TextMask
                as="h1"
                lines={["Independent", "Engineering"]}
                className="text-4xl sm:text-6xl font-bold tracking-tight text-[#F5F5F3] leading-none"
              />
              <p className="mt-4 text-base sm:text-lg text-[#A1A19C] max-w-2xl leading-relaxed">
                Oscorp Orchestrated System Corporation is an independent technology
                company exploring intelligent software, AI-powered systems,
                automation, developer tools, and experimental engineering.
              </p>
            </div>

            <div className="lg:col-span-4 lg:text-right font-mono text-xs text-[#6F706C]">
              <span>STATUS: EARLY-STAGE INDEPENDENT ENTITY</span>
              <br />
              <span>REGISTRATION: INDIA MSME FRAMEWORK</span>
            </div>
          </div>
        </div>

        {/* =========================================================================
            SECTION 1: THE PHILOSOPHY OF SYSTEMS
        ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-[11px] font-mono tracking-widest text-[#858580] uppercase block">
              OPERATIONAL THESIS
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-[#F2F2F0] leading-snug">
              Connected capabilities over isolated tools.
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-6 text-sm sm:text-base text-[#A1A19C] leading-relaxed">
            <p>
              We approach technology as a system of connected capabilities:
              useful interfaces, intelligent reasoning, carefully designed
              workflows, and software that helps people accomplish more. Our
              work begins with practical problems and develops through
              experimentation, iteration, and rigorous engineering.
            </p>
            <p>
              Rather than pretending to be an established multinational or inflating
              scale through fabricated adoption metrics, our credibility is forged
              directly in the craftsmanship of what we build. We are officially
              registered under India’s MSME framework as an independent technical
              laboratory.
            </p>
            <div className="pt-2 text-xs font-mono text-[#6F706C] space-y-1">
              <div>Corporate Entity: Oscorp Orchestrated System Corporation</div>
              <div>Digital HQ: oscorptech.me</div>
              <div>Official Communication: connect@oscorptech.me</div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            SECTION 2: THE FOUNDER — FIRST-PERSON VOICE
        ========================================================================= */}
        <div className="pt-12 border-t border-white/[0.08] space-y-12">
          <div className="flex items-center gap-3 text-[11px] font-mono tracking-[0.25em] text-[#858580] uppercase">
            <span>[ THE BUILDER ]</span>
            <span className="text-[#4d4e4b]">·</span>
            <span>FOUNDER STATEMENT</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Left Column: Personal Statement */}
            <div className="lg:col-span-7 space-y-6 text-[#A1A19C] text-base leading-relaxed">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#F2F2F0]">
                Aditya Mittal
              </h2>

              <p className="text-lg text-white font-serif italic leading-relaxed">
                &quot;I founded Oscorp to pursue a hands-on approach to engineering.
                My focus has always been learning through building: understanding
                the underlying low-level systems, working through technical
                constraints, and improving ideas through iteration.&quot;
              </p>

              <p>
                From experimenting with intelligent desktop assistants to exploring
                the intersection of speech recognition, multimodal screen awareness,
                and host operating system automation, the goal is always the same:
                creating software that provides genuine utility without bloated
                bureaucracy or hollow marketing claims.
              </p>

              {/* Personal Verified Profiles */}
              <div className="pt-4 space-y-3">
                <span className="text-xs font-mono text-[#858580] uppercase tracking-wider block">
                  MY VERIFIED PROFILES &amp; REPOSITORIES
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a
                    href="https://github.com/adityamittal0786"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Aditya Mittal on GitHub"
                    className="p-5 bg-[#080808] border border-white/[0.1] hover:border-white/40 transition-all rounded-sm flex items-start justify-between group focus:outline-none focus-visible:ring-1 focus-visible:ring-white hover:-translate-y-0.5"
                  >
                    <div className="flex items-start gap-3">
                      <Github className="w-5 h-5 text-white shrink-0 mt-0.5" />
                      <div>
                        <span className="font-mono text-sm font-semibold text-[#F2F2F0] block">
                          GitHub
                        </span>
                        <p className="text-xs text-[#A1A19C] mt-0.5">
                          Explore my code and engineering projects.
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#6F706C] group-hover:text-white transition-colors shrink-0 ml-2" />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/adityamittal2006/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Aditya Mittal on LinkedIn"
                    className="p-5 bg-[#080808] border border-white/[0.1] hover:border-white/40 transition-all rounded-sm flex items-start justify-between group focus:outline-none focus-visible:ring-1 focus-visible:ring-white hover:-translate-y-0.5"
                  >
                    <div className="flex items-start gap-3">
                      <Linkedin className="w-5 h-5 text-white shrink-0 mt-0.5" />
                      <div>
                        <span className="font-mono text-sm font-semibold text-[#F2F2F0] block">
                          LinkedIn
                        </span>
                        <p className="text-xs text-[#A1A19C] mt-0.5">
                          Connect with me professionally.
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#6F706C] group-hover:text-white transition-colors shrink-0 ml-2" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Focus Areas */}
            <div className="lg:col-span-5 p-8 bg-[#080808] border border-white/[0.08] rounded-sm space-y-6">
              <span className="text-[10px] font-mono tracking-widest text-[#858580] uppercase block">
                CORE TECHNICAL FOCUS AREAS
              </span>

              <div className="space-y-4 font-mono text-xs text-[#A1A19C]">
                {verifiedInterests.map((item, idx) => (
                  <div key={idx} className="border-b border-white/[0.06] pb-3 last:border-b-0">
                    <span className="text-white font-semibold block text-xs">
                      {item.title}
                    </span>
                    <p className="text-[#6F706C] font-sans text-[11px] leading-relaxed mt-1">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            SECTION 3: VERIFIED CREDENTIALS
        ========================================================================= */}
        <div className="pt-12 border-t border-white/[0.08] space-y-8">
          <div className="flex items-center justify-between text-xs font-mono text-[#6F706C]">
            <span className="uppercase tracking-widest text-[#858580]">[ VERIFIED CREDENTIALS &amp; RECOGNITION ]</span>
            <span>GROUNDED PERSONAL HONORS</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {credentials.map((item, idx) => (
              <div
                key={idx}
                className="p-8 bg-[#080808] border border-white/[0.08] rounded-sm flex flex-col justify-between space-y-4 hover:border-white/20 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono tracking-widest text-white uppercase font-semibold">
                      {item.category}
                    </span>
                    <span className="text-[10px] font-mono text-[#6F706C]">0{idx + 1}</span>
                  </div>

                  <h3 className="text-base font-bold text-[#F2F2F0]">
                    {item.title}
                  </h3>
                  <div className="text-xs font-mono text-[#A1A19C] mt-0.5 mb-2">
                    {item.organization}
                  </div>
                  <p className="text-xs text-[#6F706C] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/[0.06] text-[11px] font-mono text-[#6F706C] flex items-center justify-between">
                  <span>RECIPIENT: ADITYA MITTAL</span>
                  <span className="text-white font-medium">VERIFIED</span>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 bg-[#080808] border border-white/[0.06] text-xs font-mono text-[#6F706C] rounded-sm">
            Note: These credentials reflect verified personal achievements of founder
            Aditya Mittal. Oscorp presents them transparently without conflating
            personal recognition with corporate claims.
          </div>
        </div>

        {/* Closing Contact Prompt */}
        <div className="pt-12 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white">Have a technical proposal?</h3>
            <p className="text-xs text-[#A1A19C] mt-1">Get in touch directly for engineering collaborations.</p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-mono uppercase tracking-[0.2em] font-semibold text-[#050505] bg-[#F2F2F0] hover:bg-white rounded-sm transition-all"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};
