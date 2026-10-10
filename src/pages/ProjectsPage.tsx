import React from 'react';
import { Link } from 'react-router-dom';
import { TextMask } from '../components/TextMask';
import {
  ArrowRight,
  ArrowUpRight,
  Mic,
  Eye,
  Cpu,
  Terminal,
  Activity,
  Compass,
  Layers,
} from 'lucide-react';

export const ProjectsPage: React.FC = () => {
  const subsystems = [
    {
      code: 'SUB-01',
      title: 'Conversational Voice Engine',
      status: 'IN DEVELOPMENT',
      summary: 'Bidirectional audio interface exploring Whisper for voice recognition and low-latency neural text-to-speech synthesis.',
    },
    {
      code: 'SUB-02',
      title: 'Multimodal Screen Perception',
      status: 'IN DEVELOPMENT',
      summary: 'Grounding conversational reasoning directly in active desktop display buffers using Gemini visual capabilities via API.',
    },
    {
      code: 'SUB-03',
      title: 'Hybrid Inference Orchestration',
      status: 'IN DEVELOPMENT',
      summary: 'Dynamic task routing balancing lightweight local SLM inference with frontier multimodal cloud models based on task complexity.',
    },
    {
      code: 'SUB-04',
      title: 'Sandboxed System Actuation',
      status: 'EXPLORING',
      summary: 'Carrying out authorized computer tasks—launching developer apps, toggling preferences, and executing user-confirmed automations.',
    },
  ];

  const horizons = [
    {
      track: 'TRACK A // PERCEPTION',
      title: 'Low-Bandwidth Screen Frame Diffing',
      desc: 'Investigating client-side frame delta encoding to ingest visual display changes efficiently without saturating network bandwidth or token context limits.',
    },
    {
      track: 'TRACK B // SECURITY',
      title: 'Deterministic Action Sandboxes',
      desc: 'Architecting strict permission rings so automated computer interactions remain fully verified, sandboxed, and reversible by the human operator.',
    },
    {
      track: 'TRACK C // RUNTIMES',
      title: 'Quantized Edge Model Execution',
      desc: 'Profiling compact local language models on consumer hardware to preserve offline speed and privacy for routine desktop commands.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-[#F2F2F0] pt-32 pb-28 selection:bg-white/10 selection:text-white">
      <div className="w-full px-4 sm:px-6 lg:px-8 space-y-24">
        {/* =========================================================================
            HEADER — Asymmetrical Monograph Intro
        ========================================================================= */}
        <div className="border-b border-white/[0.08] pb-12">
          <div className="flex items-center gap-3 text-[11px] font-mono tracking-[0.25em] text-[#858580] uppercase mb-4">
            <span>[ REPOSITORY // 2026 ]</span>
            <span className="text-[#4d4e4b]">·</span>
            <span>ENGINEERING SYSTEMS INDEX</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <TextMask
                as="h1"
                lines={["Projects & Systems", "Repository"]}
                className="text-4xl sm:text-6xl font-bold tracking-tight text-[#F5F5F3] leading-none"
              />
              <p className="mt-4 text-base sm:text-lg text-[#A1A19C] max-w-2xl leading-relaxed">
                Practical exploration of intelligent software, conversational speech
                interfaces, multimodal screen context, and desktop operating systems.
                We prioritize genuine engineering over fabricated product catalogs.
              </p>
            </div>

            <div className="lg:col-span-4 lg:text-right font-mono text-xs text-[#6F706C]">
              <span>ACTIVE INITIATIVES: 01 (IRIS v4.0)</span>
              <br />
              <span>RESEARCH HORIZONS: 03 TRACKS</span>
            </div>
          </div>
        </div>

        {/* =========================================================================
            FEATURED MONUMENTAL EXHIBITION: IRIS v4.0
        ========================================================================= */}
        <div className="space-y-8">
          <div className="flex items-center justify-between text-xs font-mono text-[#6F706C]">
            <span className="text-cyan-400 font-semibold">[ PRIMARY FLAGSHIP INITIATIVE ]</span>
            <span>OSCORP / PROJECT 001</span>
          </div>

          <div className="p-8 sm:p-14 bg-[#080d12] border border-cyan-950/60 rounded-sm space-y-12 shadow-[0_20px_50px_rgba(0,0,0,0.85)]">
            {/* Top Title Bar */}
            <div className="flex flex-wrap items-baseline justify-between gap-6 border-b border-cyan-950/60 pb-8">
              <div>
                <span className="text-[11px] font-mono text-[#64748b] uppercase tracking-widest block mb-1">
                  CATEGORY: INTELLIGENT DESKTOP ASSISTANT
                </span>
                <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
                  Iris <span className="text-lg font-mono text-cyan-400/90 font-normal">v4.0</span>
                </h2>
              </div>

              <div className="flex items-center gap-2.5 px-3.5 py-1.5 bg-[#040608] border border-cyan-900/60 text-xs font-mono text-cyan-400 rounded-sm">
                <Activity className="w-3.5 h-3.5 animate-pulse" />
                <span>STATUS: ACTIVE DEVELOPMENT</span>
              </div>
            </div>

            {/* Editorial Presentation */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-6 space-y-6 text-sm sm:text-base text-[#A1A19C] leading-relaxed">
                <p>
                  Iris explores a more natural way to interact with a computer
                  through conversational interfaces, model integrations, screen
                  understanding, and computer-control capabilities.
                </p>
                <p>
                  The project brings together speech and language interaction,
                  external and local model integrations, visual context, and tools
                  for carrying out computer tasks. Its goal is to make a desktop
                  assistant more useful than a conventional question-and-answer
                  interface by connecting understanding with practical actions.
                </p>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <Link
                    to="/projects/iris"
                    className="inline-flex items-center gap-3 px-6 py-3.5 text-xs font-mono tracking-[0.2em] uppercase font-semibold text-[#050505] bg-cyan-400 hover:bg-cyan-300 transition-all rounded-sm shadow-[0_0_24px_rgba(34,211,238,0.25)] hover:scale-[1.02]"
                  >
                    <span>Launch Iris Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    to="/projects/iris"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400/90 hover:text-cyan-300 transition-colors"
                  >
                    <span>Inspect 3D Architecture</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Subsystems Breakdown (Unboxed Editorial List) */}
              <div className="lg:col-span-6 divide-y divide-cyan-950/60 border-t border-b border-cyan-950/60 font-mono text-xs">
                {subsystems.map((sub) => (
                  <div key={sub.code} className="py-4 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-cyan-400 font-semibold">{sub.code} // {sub.title}</span>
                      <span className="text-[10px] text-[#64748b]">{sub.status}</span>
                    </div>
                    <p className="text-[11px] text-[#94a3b8] font-sans leading-relaxed pt-0.5">
                      {sub.summary}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            RESEARCH HORIZONS (No Phantom Products)
        ========================================================================= */}
        <div className="pt-8 border-t border-white/[0.08] space-y-10">
          <div className="flex items-center justify-between text-xs font-mono text-[#6F706C]">
            <span className="uppercase tracking-widest text-[#858580]">[ RESEARCH HORIZONS // ACTIVE INVESTIGATION ]</span>
            <span>GROUNDED LAB OBJECTIVES</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {horizons.map((h, i) => (
              <div
                key={i}
                className="p-8 bg-[#080808] border border-white/[0.07] hover:border-white/20 transition-all rounded-sm space-y-3"
              >
                <span className="text-[10px] font-mono text-[#858580] uppercase tracking-wider block">
                  {h.track}
                </span>
                <h3 className="text-base font-bold text-[#F2F2F0] tracking-tight">
                  {h.title}
                </h3>
                <p className="text-xs text-[#A1A19C] leading-relaxed">
                  {h.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
