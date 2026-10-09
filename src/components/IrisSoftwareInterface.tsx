import React, { useState, useEffect, useRef } from 'react';
import {
  Shield,
  Clock,
  Wifi,
  Volume2,
  Eye,
  Cpu,
  ChevronDown,
  Power,
  Activity,
} from 'lucide-react';

/**
 * Native Interactive Recreation of the actual IRIS v4.0 desktop software
 * as verified from the user's supplied screenshots (image.png & Screenshot 2026-10-10 000838.png).
 * 
 * Features:
 * - Real clickable central Core Orb that transitions between:
 *   1. "SYSTEM OFFLINE — TAP CORE TO INITIATE" (graphite/dark sphere)
 *   2. "AWAITING VOCAL INPUT..." (radiant cyan-blue glowing orb with expanding wave aura)
 * - Live ticking local clock & system date
 * - Voice selector dropdown: Aoede (Breezy Fem), Kore (Clear Studio), Fenrir (Deep Warm)
 * - Interactive Screen Share toggle
 * - Dynamic animated Audio In / Audio Out waveform visualizers
 * - Network telemetry (Ping, Memory allocation)
 * - 3D mouse parallax tilt
 */
export const IrisSoftwareInterface: React.FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<string>('00:08:55');
  const [currentDate, setCurrentDate] = useState<string>('OCT 10, 2026');
  const [selectedVoice, setSelectedVoice] = useState<string>('Aoede (Breezy Fem)');
  const [voiceDropdownOpen, setVoiceDropdownOpen] = useState<boolean>(false);
  const [isScreenSharing, setIsScreenSharing] = useState<boolean>(false);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Live real clock updates
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}:${seconds}`);

      const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
      setCurrentDate(`${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  // 3D Mouse Parallax
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -12;
    setMouseOffset({ x, y });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  const toggleCore = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-6xl mx-auto rounded-lg overflow-hidden border border-cyan-950/40 bg-[#040608] shadow-[0_20px_60px_rgba(0,0,0,0.9)] select-none transition-transform duration-300 ease-out"
      style={{
        transform: `perspective(1200px) rotateX(${mouseOffset.y}deg) rotateY(${mouseOffset.x}deg)`,
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Top Application Header Bar */}
      <div className="bg-[#080c10] border-b border-cyan-950/40 px-4 py-2.5 flex items-center justify-between text-xs font-mono text-[#8e98a3]">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#1b232c]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#1b232c]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#1b232c]" />
          </div>
          <span className="ml-3 text-[11px] text-[#A6A6A3] tracking-wider uppercase font-semibold">
            IRIS DESKTOP CONTROLLER v4.0
          </span>
        </div>

        <div className="flex items-center gap-4 text-[11px]">
          <span className="flex items-center gap-1.5 text-cyan-400/80">
            <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-cyan-400 animate-ping' : 'bg-gray-600'}`} />
            {isActive ? 'KERNEL: ONLINE' : 'KERNEL: STANDBY'}
          </span>
          <span className="text-[#64748b]">NATIVE RUNTIME</span>
        </div>
      </div>

      {/* Main Software Viewport (Matching image.png & Screenshot 2026-10-10 000838.png) */}
      <div
        className={`relative w-full min-h-[580px] sm:min-h-[640px] p-6 sm:p-8 flex flex-col justify-between transition-colors duration-700 ${
          isActive
            ? 'bg-[radial-gradient(ellipse_at_center,#051e24_0%,#031015_45%,#02080c_100%)]'
            : 'bg-[radial-gradient(ellipse_at_center,#0b0e12_0%,#06080b_50%,#030406_100%)]'
        }`}
      >
        {/* Architectural Subtle Grid Overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: `linear-gradient(to right, ${isActive ? 'rgba(34,211,238,0.08)' : 'rgba(255,255,255,0.04)'} 1px, transparent 1px),
                              linear-gradient(to bottom, ${isActive ? 'rgba(34,211,238,0.08)' : 'rgba(255,255,255,0.04)'} 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
          }}
        />

        {/* Ambient Floating Dust Nodes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/5 w-1 h-1 rounded-full bg-cyan-400/40" />
          <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 rounded-full bg-cyan-300/30" />
          <div className="absolute bottom-1/3 left-1/3 w-1 h-1 rounded-full bg-white/20" />
          <div className="absolute bottom-1/4 right-1/6 w-1 h-1 rounded-full bg-cyan-400/30" />
        </div>

        {/* =========================================================================
            TOP ROW PANELS
        ========================================================================= */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
          {/* Top-Left: SYS.CORE & Control Cards */}
          <div className="md:col-span-4 space-y-2.5">
            {/* System Core Identifier Card */}
            <div className="p-3.5 bg-[#0a0f15] border border-white/[0.08] rounded-md shadow-lg">
              <div className="flex items-center gap-2 text-[10px] font-mono text-[#64748b] uppercase tracking-wider">
                <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                <span>SYS.CORE</span>
              </div>
              <div className="text-sm font-bold text-white tracking-wider mt-1 flex items-baseline gap-2">
                <span>IRIS</span>
                <span className="text-[11px] font-mono text-[#94a3b8] font-normal">v4.0</span>
              </div>
              <div className="w-8 h-[2px] bg-cyan-500/60 mt-1" />
            </div>

            {/* Connection Status Card */}
            <div className="p-3 bg-[#0a0f15] border border-white/[0.08] rounded-md shadow-lg">
              <div className="flex items-center gap-2 text-[10px] font-mono text-[#64748b] uppercase tracking-wider">
                <Wifi className="w-3 h-3 text-cyan-400" />
                <span>CONNECTION</span>
              </div>
              <div
                className={`text-xs font-mono font-semibold tracking-wider mt-1 ${
                  isActive ? 'text-cyan-400' : 'text-[#64748b]'
                }`}
              >
                {isActive ? 'LISTENING' : 'DISCONNECTED'}
              </div>
            </div>

            {/* Voice Model Selector Card */}
            <div className="relative p-3 bg-[#0a0f15] border border-white/[0.08] rounded-md shadow-lg">
              <div className="flex items-center gap-2 text-[10px] font-mono text-[#64748b] uppercase tracking-wider">
                <Volume2 className="w-3 h-3 text-cyan-400" />
                <span>VOICE</span>
              </div>
              <button
                type="button"
                onClick={() => setVoiceDropdownOpen(!voiceDropdownOpen)}
                className="mt-1 w-full flex items-center justify-between text-xs font-mono text-[#cbd5e1] hover:text-white transition-colors cursor-pointer"
              >
                <span>{selectedVoice}</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#64748b]" />
              </button>

              {voiceDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-[#0c1218] border border-cyan-900/60 rounded-md py-1 shadow-2xl z-30 font-mono text-xs text-[#cbd5e1]">
                  {['Aoede (Breezy Fem)', 'Kore (Clear Studio)', 'Fenrir (Deep Warm)'].map((voice) => (
                    <button
                      key={voice}
                      type="button"
                      onClick={() => {
                        setSelectedVoice(voice);
                        setVoiceDropdownOpen(false);
                      }}
                      className="w-full text-left px-3 py-1.5 hover:bg-cyan-950/80 hover:text-cyan-300 transition-colors cursor-pointer"
                    >
                      {voice}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Vision / Screen Share Toggle Card */}
            <div className="p-3 bg-[#0a0f15] border border-white/[0.08] rounded-md shadow-lg">
              <div className="flex items-center gap-2 text-[10px] font-mono text-[#64748b] uppercase tracking-wider">
                <Eye className="w-3 h-3 text-cyan-400" />
                <span>VISION</span>
              </div>
              <button
                type="button"
                onClick={() => setIsScreenSharing(!isScreenSharing)}
                className={`mt-1.5 text-xs font-mono font-medium tracking-wider flex items-center gap-2 px-2.5 py-1 rounded transition-colors cursor-pointer ${
                  isScreenSharing
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                    : 'text-[#94a3b8] hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${isScreenSharing ? 'bg-cyan-400 animate-pulse' : 'bg-gray-600'}`} />
                <span>{isScreenSharing ? 'SCREEN SHARING ACTIVE' : 'START SCREEN SHARE'}</span>
              </button>
            </div>
          </div>

          {/* Top-Center: System Shield Badge */}
          <div className="md:col-span-4 flex justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0a0f15] border border-cyan-900/40 rounded-full text-[10px] font-mono text-[#cbd5e1] shadow-lg">
              <Shield className="w-3.5 h-3.5 text-cyan-400" />
              <span className="font-semibold text-white tracking-wider">IRIS SYSTEM SHIELD</span>
              <span className="px-1.5 py-0.5 rounded text-[8px] bg-cyan-950 text-cyan-300 border border-cyan-800/40">
                OPEN
              </span>
            </div>
          </div>

          {/* Top-Right: Clock & Network Telemetry */}
          <div className="md:col-span-4 flex flex-col md:items-end space-y-2.5">
            {/* Local Time Card */}
            <div className="p-3.5 bg-[#0a0f15] border border-white/[0.08] rounded-md shadow-lg md:text-right min-w-[160px]">
              <div className="flex items-center md:justify-end gap-1.5 text-[10px] font-mono text-[#64748b] uppercase tracking-wider">
                <Clock className="w-3 h-3 text-cyan-400" />
                <span>LOCAL TIME</span>
              </div>
              <div className="font-mono text-xl font-bold text-white tracking-widest mt-1">
                {currentTime}
              </div>
              <div className="font-mono text-[10px] text-[#94a3b8] mt-0.5 tracking-wider">
                {currentDate}
              </div>
            </div>

            {/* Network Ping & Mem Card */}
            <div className="p-3 bg-[#0a0f15] border border-white/[0.08] rounded-md shadow-lg md:text-right min-w-[160px] font-mono text-xs">
              <div className="flex items-center md:justify-end gap-1.5 text-[10px] text-[#64748b] uppercase tracking-wider mb-1">
                <Activity className="w-3 h-3 text-cyan-400" />
                <span>NETWORK</span>
              </div>
              <div className="flex items-center justify-between md:justify-end md:gap-4 text-[#cbd5e1]">
                <span className="text-[10px] text-[#64748b]">PING</span>
                <span className={isActive ? 'text-cyan-400' : 'text-[#64748b]'}>
                  {isActive ? '29ms' : '0ms'}
                </span>
              </div>
              <div className="flex items-center justify-between md:justify-end md:gap-4 text-[#cbd5e1] mt-0.5">
                <span className="text-[10px] text-[#64748b]">MEM</span>
                <span className={isActive ? 'text-cyan-400' : 'text-[#64748b]'}>
                  {isActive ? '345MB' : '128MB'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            CENTERPIECE — THE INTERACTIVE IRIS CORE ORB
        ========================================================================= */}
        <div className="relative z-10 my-auto py-8 flex flex-col items-center justify-center">
          <div className="relative flex items-center justify-center">
            {/* Outer Concentric Guide Rings */}
            <div
              className={`absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full border transition-all duration-700 pointer-events-none ${
                isActive
                  ? 'border-cyan-500/20 scale-105 shadow-[0_0_80px_rgba(34,211,238,0.15)]'
                  : 'border-white/[0.04]'
              }`}
            />
            <div
              className={`absolute w-56 h-56 sm:w-72 sm:h-72 rounded-full border transition-all duration-700 pointer-events-none ${
                isActive
                  ? 'border-cyan-500/30 scale-100 shadow-[0_0_50px_rgba(34,211,238,0.2)]'
                  : 'border-white/[0.06]'
              }`}
            />
            <div
              className={`absolute w-44 h-44 sm:w-56 sm:h-56 rounded-full border transition-all duration-700 pointer-events-none ${
                isActive ? 'border-cyan-400/40 animate-pulse' : 'border-white/[0.08]'
              }`}
            />

            {/* Orbiting Satellite Indicator Node */}
            <div
              className={`absolute -left-12 sm:-left-16 w-3 h-3 rounded-full border flex items-center justify-center transition-all duration-700 ${
                isActive
                  ? 'border-cyan-400 bg-cyan-950/80 shadow-[0_0_12px_rgba(34,211,238,0.8)]'
                  : 'border-white/20 bg-[#080d12]'
              }`}
            >
              <div className={`w-1 h-1 rounded-full ${isActive ? 'bg-cyan-400' : 'bg-gray-500'}`} />
            </div>

            {/* The Central Clickable Core Orb */}
            <button
              type="button"
              onClick={toggleCore}
              aria-label={isActive ? 'Deactivate Iris Core' : 'Activate Iris Core'}
              className="relative group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-full cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95"
            >
              {isActive ? (
                /* Active Glowing Cyan/Electric-Blue Core */
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full flex items-center justify-center">
                  {/* Atmospheric Glow Aura */}
                  <div className="absolute inset-0 rounded-full bg-cyan-400 blur-2xl opacity-60 animate-pulse" />
                  <div className="absolute -inset-4 rounded-full bg-cyan-500 blur-3xl opacity-30" />

                  {/* High-fidelity Cyan Orb */}
                  <div
                    className="relative w-full h-full rounded-full shadow-[inset_-8px_-8px_20px_rgba(2,132,199,0.9),inset_8px_8px_24px_rgba(255,255,255,0.9),0_0_40px_rgba(34,211,238,0.8)]"
                    style={{
                      background: 'radial-gradient(circle at 35% 35%, #e0f2fe 0%, #38bdf8 35%, #0284c7 70%, #0369a1 100%)',
                    }}
                  >
                    {/* Gloss specular highlight */}
                    <div className="absolute top-4 left-6 w-8 h-5 rounded-full bg-white/70 blur-[1px] rotate-[-25deg]" />
                  </div>
                </div>
              ) : (
                /* Offline Metallic Dark Core */
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full flex items-center justify-center">
                  <div
                    className="relative w-full h-full rounded-full shadow-[inset_-6px_-6px_16px_rgba(0,0,0,0.9),inset_6px_6px_18px_rgba(255,255,255,0.25),0_0_20px_rgba(0,0,0,0.8)]"
                    style={{
                      background: 'radial-gradient(circle at 35% 35%, #334155 0%, #1e293b 45%, #0f172a 80%, #020617 100%)',
                    }}
                  >
                    {/* Gloss highlight */}
                    <div className="absolute top-4 left-6 w-7 h-4 rounded-full bg-white/30 blur-[1px] rotate-[-25deg]" />
                  </div>
                </div>
              )}
            </button>
          </div>

          {/* Core State Prompt Label */}
          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={toggleCore}
              className={`font-mono text-xs sm:text-sm tracking-[0.28em] uppercase transition-all duration-300 font-semibold cursor-pointer ${
                isActive
                  ? 'text-cyan-300 drop-shadow-[0_0_12px_rgba(34,211,238,0.6)] animate-pulse'
                  : 'text-[#64748b] hover:text-white'
              }`}
            >
              {isActive ? '— AWAITING VOCAL INPUT... —' : 'SYSTEM OFFLINE — TAP CORE TO INITIATE'}
            </button>
            <div className="text-[10px] font-mono text-[#475569] tracking-wider mt-1.5">
              [ Click core to simulate speech toggle ]
            </div>
          </div>
        </div>

        {/* =========================================================================
            BOTTOM AUDIO TELEMETRY BARS
        ========================================================================= */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
          {/* Bottom-Left: Audio In Waveform Meter */}
          <div className="md:col-span-6 p-3 bg-[#0a0f15] border border-white/[0.08] rounded-md shadow-lg max-w-xs">
            <div className="flex items-center gap-2 text-[10px] font-mono text-[#64748b] uppercase tracking-wider mb-2">
              <Volume2 className="w-3 h-3 text-cyan-400" />
              <span>AUDIO IN</span>
            </div>
            {/* Visualizer bars */}
            <div className="flex items-end gap-1 h-5">
              {[6, 12, 18, 10, 22, 16, 26, 14, 20, 8, 24, 12, 16, 10, 14, 6].map((h, i) => (
                <div
                  key={i}
                  className={`w-1 rounded-sm transition-all duration-200 ${
                    isActive ? 'bg-cyan-400' : 'bg-gray-700'
                  }`}
                  style={{
                    height: isActive ? `${Math.min(22, (h * (1 + ((i % 3) * 0.2))))}px` : '4px',
                    opacity: isActive ? 0.7 + (i % 3) * 0.15 : 0.4,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Bottom-Right: Audio Out Waveform Meter */}
          <div className="md:col-span-6 flex md:justify-end">
            <div className="p-3 bg-[#0a0f15] border border-white/[0.08] rounded-md shadow-lg max-w-xs w-full">
              <div className="flex items-center justify-between text-[10px] font-mono text-[#64748b] uppercase tracking-wider mb-2">
                <span>AUDIO OUT</span>
                <span className="text-cyan-400">NEURAL SYNTH</span>
              </div>
              {/* Visualizer bars */}
              <div className="flex items-end justify-between gap-1 h-5">
                {[4, 8, 14, 20, 12, 24, 16, 8, 14, 18, 10, 6, 12, 8, 4].map((h, i) => (
                  <div
                    key={i}
                    className={`w-1 rounded-sm transition-all duration-300 ${
                      isActive ? 'bg-cyan-300' : 'bg-gray-700'
                    }`}
                    style={{
                      height: isActive ? `${Math.min(20, h)}px` : '3px',
                      opacity: isActive ? 0.8 : 0.3,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interface Demonstration Footer Note */}
      <div className="bg-[#080c10] border-t border-cyan-950/40 px-6 py-2.5 flex flex-wrap items-center justify-between text-[11px] font-mono text-[#64748b]">
        <div className="flex items-center gap-2">
          <Power className="w-3.5 h-3.5 text-cyan-400" />
          <span>REAL APPLICATION EMULATION BASED ON IRIS v4.0 PRODUCTION BUILDS</span>
        </div>
        <div className="text-cyan-400/80">
          OSCORP SYSTEMS · ADITYA MITTAL
        </div>
      </div>
    </div>
  );
};
