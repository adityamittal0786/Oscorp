import React, { useState } from 'react';
import { Mail, Copy, Check, Send, ArrowUpRight, Github, Linkedin } from 'lucide-react';
import { TextMask } from '../components/TextMask';

export const ContactPage: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [draftCopied, setDraftCopied] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [subjectTopic, setSubjectTopic] = useState('Project Collaboration');
  const [message, setMessage] = useState('');

  const businessEmail = 'connect@oscorptech.me';

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(businessEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      // Fallback
    }
  };

  const constructMailtoUrl = () => {
    const subject = encodeURIComponent(
      `[Oscorp Inquiry] ${subjectTopic}${senderName ? ` - ${senderName}` : ''}`
    );
    const body = encodeURIComponent(
      `Hello Aditya & Oscorp team,\n\n${message || 'I would like to discuss a potential technical collaboration / project inquiry.'}\n\nBest regards,\n${senderName || 'Inquirer'}`
    );
    return `mailto:${businessEmail}?subject=${subject}&body=${body}`;
  };

  const handleCopyDraft = async () => {
    const draftText = `To: ${businessEmail}\nSubject: [Oscorp Inquiry] ${subjectTopic}\n\n${message || 'I would like to discuss a potential project inquiry.'}\n\nBest regards,\n${senderName || 'Inquirer'}`;
    try {
      await navigator.clipboard.writeText(draftText);
      setDraftCopied(true);
      setTimeout(() => setDraftCopied(false), 2400);
    } catch {
      // Fallback
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#F2F2F0] pt-32 pb-28 selection:bg-white/10 selection:text-white">
      <div className="w-full px-4 sm:px-6 lg:px-8 space-y-20">
        {/* =========================================================================
            HEADER — Minimal Typographic Composition
        ========================================================================= */}
        <div className="border-b border-white/[0.08] pb-12">
          <div className="flex items-center gap-3 text-[11px] font-mono tracking-[0.25em] text-[#858580] uppercase mb-4">
            <span>[ INQUIRY // COMMUNICATION ]</span>
            <span className="text-[#4d4e4b]">·</span>
            <span>DIRECT CHANNEL</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <TextMask
                as="h1"
                lines={["Start a", "Conversation"]}
                className="text-4xl sm:text-6xl font-bold tracking-tight text-[#F5F5F3] leading-none"
              />
              <p className="mt-4 text-base sm:text-lg text-[#A1A19C] max-w-2xl leading-relaxed">
                For technical discussions, systems collaboration, or general inquiries
                regarding Oscorp, connect with us directly.
              </p>
            </div>

            <div className="lg:col-span-4 lg:text-right font-mono text-xs text-[#6F706C]">
              <span>RESPONSE CADENCE: 24–48 HOURS</span>
              <br />
              <span>DIRECTLY MONITORED BY ADITYA MITTAL</span>
            </div>
          </div>
        </div>

        {/* =========================================================================
            TWO-COLUMN EDITORIAL INTERACTION
        ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Direct Address & Profiles */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 bg-[#080808] border border-white/[0.08] rounded-sm space-y-6">
              <span className="text-[10px] font-mono text-[#858580] uppercase tracking-widest block">
                PRIMARY BUSINESS EMAIL
              </span>

              <div className="space-y-1">
                <a
                  href={`mailto:${businessEmail}`}
                  className="font-mono text-xl sm:text-2xl font-bold text-white hover:underline transition-all block break-all"
                >
                  {businessEmail}
                </a>
                <p className="text-xs text-[#6F706C]">
                  Official communication channel for Oscorp Orchestrated System Corporation.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={`mailto:${businessEmail}?subject=Oscorp%20Project%20Discussion`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#F2F2F0] hover:bg-white text-[#050505] font-mono text-xs tracking-[0.16em] uppercase font-semibold rounded-sm transition-all hover:scale-[1.02]"
                >
                  <span>Launch Mail</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#121212] border border-white/[0.12] hover:border-white/40 text-xs font-mono text-[#F2F2F0] rounded-sm transition-all cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-white" />
                      <span>Copied Address</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#858580]" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Founder Professional Accounts */}
            <div className="p-8 bg-[#080808] border border-white/[0.08] rounded-sm space-y-4">
              <span className="text-[10px] font-mono text-[#858580] uppercase tracking-widest block">
                FOUNDER PROFESSIONAL ACCOUNTS
              </span>

              <div className="space-y-3 font-mono text-xs">
                <a
                  href="https://github.com/adityamittal0786"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 bg-[#040404] border border-white/[0.06] hover:border-white/20 transition-colors text-[#A1A19C] hover:text-white"
                >
                  <div className="flex items-center gap-2.5">
                    <Github className="w-4 h-4 text-white" />
                    <span>Aditya Mittal on GitHub</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#6F706C]" />
                </a>

                <a
                  href="https://www.linkedin.com/in/adityamittal2006/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 bg-[#040404] border border-white/[0.06] hover:border-white/20 transition-colors text-[#A1A19C] hover:text-white"
                >
                  <div className="flex items-center gap-2.5">
                    <Linkedin className="w-4 h-4 text-white" />
                    <span>Aditya Mittal on LinkedIn</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#6F706C]" />
                </a>
              </div>
            </div>

            <div className="text-[11px] font-mono text-[#6F706C] space-y-1">
              <div>Entity: Oscorp Orchestrated System Corporation</div>
              <div>Standing: Registered under India’s MSME framework</div>
            </div>
          </div>

          {/* Right Column: Structured Inquiry Composer */}
          <div className="lg:col-span-7 p-8 sm:p-10 bg-[#080808] border border-white/[0.08] rounded-sm space-y-6">
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
              <div>
                <span className="text-[10px] font-mono text-white/80 tracking-widest uppercase block">
                  INQUIRY COMPOSER
                </span>
                <h2 className="text-xl font-bold text-white mt-0.5">
                  Prepare Your Message
                </h2>
              </div>
              <span className="text-[10px] font-mono text-[#6F706C]">
                DISPATCH VIA SYSTEM EMAIL CLIENT
              </span>
            </div>

            <p className="text-xs text-[#A1A19C] leading-relaxed">
              Format your technical inquiry below. Launch your default mail app
              with the prepared parameters or copy the formatted text.
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-[11px] font-mono text-[#A1A19C] uppercase tracking-wider mb-1.5">
                  Your Name or Organization
                </label>
                <input
                  type="text"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder="e.g. Elena Vance / Systems Engineer"
                  className="w-full bg-[#040404] border border-white/[0.1] focus:border-white text-[#F2F2F0] text-xs px-4 py-3 rounded-sm outline-none font-mono transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono text-[#A1A19C] uppercase tracking-wider mb-1.5">
                  Discussion Topic
                </label>
                <select
                  value={subjectTopic}
                  onChange={(e) => setSubjectTopic(e.target.value)}
                  className="w-full bg-[#040404] border border-white/[0.1] focus:border-white text-[#F2F2F0] text-xs px-4 py-3 rounded-sm outline-none font-mono transition-colors"
                >
                  <option value="Project Collaboration">Project Collaboration</option>
                  <option value="Iris Engineering Feedback">Iris Engineering Feedback</option>
                  <option value="Technical Exploration">Technical Exploration</option>
                  <option value="General Communication">General Communication</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-mono text-[#A1A19C] uppercase tracking-wider mb-1.5">
                  Message Overview
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Outline your inquiry scope, technical questions, or project timeline..."
                  className="w-full bg-[#040404] border border-white/[0.1] focus:border-white text-[#F2F2F0] text-xs px-4 py-3 rounded-sm outline-none font-mono resize-none transition-colors"
                />
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={constructMailtoUrl()}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#F2F2F0] hover:bg-white text-[#050505] font-mono text-xs uppercase tracking-[0.16em] font-semibold rounded-sm transition-all cursor-pointer hover:scale-[1.02]"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Launch Mail Client</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyDraft}
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#121212] border border-white/[0.1] hover:border-white/40 text-[#F2F2F0] font-mono text-xs uppercase tracking-[0.16em] rounded-sm transition-all cursor-pointer"
                >
                  {draftCopied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-white" />
                      <span>Draft Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#858580]" />
                      <span>Copy Formatted Text</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
