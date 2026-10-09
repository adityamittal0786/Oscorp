import React from 'react';
import {
  Mic,
  Monitor,
  Mail,
  Camera,
  Globe,
  FileText,
  Settings,
  Sparkles,
  ArrowRight,
  CheckSquare,
  Search,
} from 'lucide-react';

export const ExactIrisPoster: React.FC = () => {
  const cards = [
    {
      title: 'VOICE COMMANDS',
      desc: 'Just speak. IRIS listens, understands and acts.',
      icon: Mic,
      color: 'bg-indigo-50 text-indigo-600',
    },
    {
      title: 'CONTROL YOUR PC',
      desc: 'Open apps, manage files, work faster — hands free.',
      icon: Monitor,
      color: 'bg-sky-50 text-sky-600',
    },
    {
      title: 'GMAIL AUTOMATION',
      desc: 'Read, reply and manage your emails automatically.',
      icon: Mail,
      color: 'bg-rose-50 text-rose-500',
    },
    {
      title: 'SEE YOU',
      desc: 'Use your webcam for real-time vision and interaction.',
      icon: Camera,
      color: 'bg-blue-50 text-blue-700',
    },
    {
      title: 'WEB & RESEARCH',
      desc: 'Search the web, get real-time information, instantly.',
      icon: Globe,
      color: 'bg-cyan-50 text-cyan-600',
    },
    {
      title: 'CREATE & WRITE',
      desc: 'Draft emails, notes, reports and more — just ask.',
      icon: FileText,
      color: 'bg-blue-50 text-blue-600',
    },
    {
      title: 'AUTOMATE TASKS',
      desc: 'Set routines, reminders and let IRIS handle the rest.',
      icon: Settings,
      color: 'bg-purple-50 text-purple-600',
    },
    {
      title: 'AND MUCH MORE...',
      desc: 'Because IRIS is built to grow with you.',
      icon: Sparkles,
      color: 'bg-amber-50 text-amber-500',
    },
  ];

  return (
    <div className="relative w-full max-w-2xl mx-auto rounded-2xl overflow-hidden bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0] text-[#0f172a] shadow-[0_25px_70px_rgba(0,0,0,0.85)] border border-white/20 select-none">
      {/* Top Header */}
      <div className="p-8 sm:p-10 pb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Sparkles className="w-8 h-8 text-sky-500 fill-sky-400" />
          </div>
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight font-sans text-slate-900 leading-none">
              IRIS
            </h2>
            <span className="text-[10px] font-sans font-semibold tracking-[0.25em] text-slate-500 uppercase">
              YOUR AI COMPANION
            </span>
          </div>
        </div>

        <div className="text-right text-[10px] font-mono tracking-widest text-slate-400 uppercase">
          MORE THAN JUST<br />AN ASSISTANT
        </div>
      </div>

      {/* Hero Headline & Subtitle */}
      <div className="px-8 sm:px-10 pt-2 pb-6 relative">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 leading-[1.08]">
              Your Life.<br />
              Simplified.<br />
              With <span className="bg-gradient-to-r from-sky-500 to-indigo-600 bg-clip-text text-transparent">IRIS.</span>
              <span className="text-indigo-500 ml-1">✦</span>
            </h1>

            <p className="mt-4 text-xs sm:text-sm text-slate-600 max-w-md leading-relaxed font-normal">
              IRIS is your personal AI companion designed to understand, assist and
              get things done — all from your PC.
            </p>

            <div className="mt-3 flex items-center gap-2 text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase">
              <span>LISTEN</span>
              <span>/</span>
              <span>THINK</span>
              <span>/</span>
              <span>ACT</span>
            </div>
          </div>

          {/* Handwritten Annotation */}
          <div className="hidden sm:block text-right pr-4 pt-2">
            <span className="font-serif italic text-2xl text-indigo-500 drop-shadow-sm rotate-[-8deg] inline-block font-semibold">
              Just<br />Talk. ↘
            </span>
          </div>
        </div>
      </div>

      {/* Laptop & Workspace Showcase Section */}
      <div className="px-6 sm:px-10 py-4 relative">
        {/* Desk Setting with Laptop Mockup */}
        <div className="relative bg-slate-900 rounded-xl p-4 sm:p-5 shadow-2xl border border-slate-800 text-white overflow-hidden">
          {/* Laptop Screen Content */}
          <div className="grid grid-cols-12 gap-3 items-center">
            {/* Left Nav */}
            <div className="col-span-3 border-r border-slate-800 pr-3 space-y-2 text-[10px] font-sans">
              <div className="font-bold text-xs text-sky-400 mb-2 flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> IRIS
              </div>
              <div className="px-2 py-1 bg-sky-950/80 text-sky-300 rounded font-medium">Home</div>
              <div className="px-2 py-1 text-slate-400 hover:text-white">Tasks</div>
              <div className="px-2 py-1 text-slate-400 hover:text-white">Web</div>
              <div className="px-2 py-1 text-slate-400 hover:text-white">Gmail</div>
              <div className="px-2 py-1 text-slate-400 hover:text-white">Camera</div>
              <div className="px-2 py-1 text-slate-400 hover:text-white">Settings</div>
            </div>

            {/* Center Greeting & Animated Eyes Orb */}
            <div className="col-span-5 text-center flex flex-col items-center justify-center py-2">
              <div className="text-[11px] text-slate-300 font-semibold leading-tight">
                Hello!<br />
                <span className="text-white font-bold">I&apos;m IRIS.</span>
              </div>
              <p className="text-[9px] text-slate-400 mt-0.5">
                How can I help you today?
              </p>

              {/* Glowing Orb with Robot Eyes */}
              <div className="my-3 relative w-16 h-16 rounded-full bg-gradient-to-tr from-sky-600 via-indigo-700 to-blue-900 flex items-center justify-center shadow-[0_0_25px_rgba(56,189,248,0.7)] border border-sky-300/40">
                {/* Cute White Robot Eyes */}
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-3 bg-white rounded-full shadow-[0_0_6px_#fff]" />
                  <div className="w-1.5 h-3 bg-white rounded-full shadow-[0_0_6px_#fff]" />
                </div>
              </div>

              {/* Mic Waveform */}
              <div className="flex items-center gap-1 text-sky-400 text-[10px]">
                <span>··|||</span>
                <Mic className="w-3 h-3" />
                <span>|||··</span>
              </div>
            </div>

            {/* Right Action Pills */}
            <div className="col-span-4 space-y-1.5 text-[9px] font-sans">
              <div className="p-1.5 bg-slate-800/90 rounded border border-slate-700/60 text-slate-200 flex items-center gap-1.5 shadow-sm">
                <Mail className="w-3 h-3 text-rose-400" /> Open my Gmail
              </div>
              <div className="p-1.5 bg-slate-800/90 rounded border border-slate-700/60 text-slate-200 flex items-center gap-1.5 shadow-sm">
                <Monitor className="w-3 h-3 text-sky-400" /> Control my PC
              </div>
              <div className="p-1.5 bg-slate-800/90 rounded border border-slate-700/60 text-slate-200 flex items-center gap-1.5 shadow-sm">
                <Search className="w-3 h-3 text-emerald-400" /> Search the web
              </div>
              <div className="p-1.5 bg-slate-800/90 rounded border border-slate-700/60 text-slate-200 flex items-center gap-1.5 shadow-sm">
                <Camera className="w-3 h-3 text-amber-400" /> Turn on my camera
              </div>
              <div className="p-1.5 bg-slate-800/90 rounded border border-slate-700/60 text-slate-200 flex items-center gap-1.5 shadow-sm">
                <CheckSquare className="w-3 h-3 text-indigo-400" /> Create a task
              </div>
            </div>
          </div>
        </div>

        {/* Desk Accessories Details (Coffee Mug & Notebook) */}
        <div className="mt-2 flex items-center justify-between text-[10px] font-mono text-slate-400 px-2">
          <span className="italic">☕ &quot;Good Ideas with IRIS ♡&quot;</span>
          <span className="italic">📓 &quot;Smarter Faster Easier :)&quot;</span>
        </div>
      </div>

      {/* Section Divider: WHAT CAN IRIS DO? */}
      <div className="px-8 sm:px-10 pt-6 pb-2">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono font-bold tracking-[0.2em] text-slate-800 uppercase">
            WHAT CAN IRIS DO?
          </span>
          <div className="flex-grow h-[1px] bg-slate-300" />
        </div>
      </div>

      {/* 8 Feature Cards Grid */}
      <div className="px-6 sm:px-10 py-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
        {cards.map((c, i) => {
          const Icon = c.icon;
          return (
            <div
              key={i}
              className="p-3.5 bg-white rounded-xl shadow-sm border border-slate-200/80 flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className={`w-7 h-7 rounded-lg ${c.color} flex items-center justify-center mb-2.5 shadow-sm`}>
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <h3 className="text-[11px] font-bold tracking-tight text-slate-900 leading-tight">
                  {c.title}
                </h3>
                <p className="mt-1 text-[9.5px] text-slate-500 leading-snug">
                  {c.desc}
                </p>
              </div>
              <div className="mt-2 w-4 h-[1.5px] bg-sky-400" />
            </div>
          );
        })}
      </div>

      {/* Bottom Script & 3-Step Pipeline Banner */}
      <div className="mt-6 px-8 sm:px-10 py-6 bg-gradient-to-r from-sky-100 via-indigo-50 to-blue-100 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="font-serif italic text-xl font-bold text-indigo-900 tracking-tight block">
            Smarter Together.
          </span>
          <span className="text-[9px] font-mono tracking-widest text-slate-500 uppercase mt-0.5 block">
            IDEAS TODAY. A SMARTER TOMORROW.
          </span>
        </div>

        {/* Pipeline: Talk -> Think -> Get It Done */}
        <div className="flex items-center gap-3 text-[11px] font-sans font-bold text-slate-800 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-200">
          <span className="flex items-center gap-1 text-sky-600">
            <Mic className="w-3 h-3" /> Talk
          </span>
          <ArrowRight className="w-3 h-3 text-slate-400" />
          <span className="flex items-center gap-1 text-indigo-600">
            <Sparkles className="w-3 h-3" /> Think
          </span>
          <ArrowRight className="w-3 h-3 text-slate-400" />
          <span className="flex items-center gap-1 text-emerald-600">
            <CheckSquare className="w-3 h-3" /> Get It Done
          </span>
        </div>
      </div>
    </div>
  );
};
