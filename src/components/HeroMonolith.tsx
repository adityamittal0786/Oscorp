import React, { useRef, useState, useEffect } from 'react';
import { OscorpSymbol } from './OscorpLogo';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

export const HeroMonolith: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [telemetry, setTelemetry] = useState({ x: 0, y: 0 });

  // Spring physics for smooth buttery tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 180, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-12, 12]);
  const lightShiftX = useTransform(smoothX, [-0.5, 0.5], [-20, 20]);
  const lightShiftY = useTransform(smoothY, [-0.5, 0.5], [-20, 20]);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
    setTelemetry({
      x: Math.round(x * 100),
      y: Math.round(y * 100),
    });
  };

  const handlePointerLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
    setTelemetry({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={handlePointerLeave}
      className="relative w-full max-w-[760px] aspect-square mx-auto flex items-center justify-center select-none overflow-hidden my-6 perspective-1000 cursor-crosshair"
      aria-hidden="true"
    >
      {/* Background Ambient Depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_75%)] pointer-events-none" />

      {/* 3D Motion Container with Spring Physics */}
      <motion.div
        className="relative w-full h-full flex items-center justify-center preserve-3d"
        style={{
          rotateX,
          rotateY,
        }}
      >
        {/* Continuous 1px Vertical Bisecting Axis with Calibration Ticks */}
        <div
          className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-transparent via-white/35 to-transparent pointer-events-none z-10"
          style={{ transform: 'translateZ(12px)' }}
        >
          {/* Axis Ticks */}
          <div className="absolute top-1/4 -left-1 w-2 h-[1px] bg-white/40" />
          <div className="absolute top-3/4 -left-1 w-2 h-[1px] bg-white/40" />
        </div>

        {/* 
          Main Celestial Eclipse Monolith
          Recreating the official brand artwork:
          A pitch-black sphere with atmospheric silver-white rim crescent along top and right edge.
        */}
        <div
          className="relative w-[290px] sm:w-[380px] md:w-[440px] h-[290px] sm:h-[380px] md:h-[440px] rounded-full shadow-[0_0_100px_rgba(0,0,0,0.95)] transition-shadow duration-500"
          style={{
            transform: 'translateZ(25px)',
            background:
              'radial-gradient(circle at 74% 26%, #222325 0%, #0d0e0f 45%, #050505 85%)',
          }}
        >
          {/* Rim light crescent highlight on upper-right curvature */}
          <motion.div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              boxShadow: `inset -5px 9px 26px rgba(255, 255, 255, 0.45), inset -1px 2px 4px rgba(255, 255, 255, 0.85)`,
            }}
          />

          {/* Outer fine elliptical alignment guide arc */}
          <svg
            className="absolute -inset-10 w-[calc(100%+80px)] h-[calc(100%+80px)] pointer-events-none"
            viewBox="0 0 500 500"
          >
            {/* Fine coordinate guide arc */}
            <path
              d="M 120 400 A 220 220 0 1 1 400 120"
              fill="none"
              stroke="rgba(255, 255, 255, 0.16)"
              strokeWidth="1"
            />
            {/* Upper-right celestial guide node */}
            <circle cx="380" cy="130" r="3" fill="#FFFFFF" />
            <circle cx="380" cy="130" r="7" fill="rgba(255, 255, 255, 0.2)" />

            {/* Lower-left guide node */}
            <circle cx="160" cy="390" r="3" fill="#FFFFFF" />
            <circle cx="160" cy="390" r="7" fill="rgba(255, 255, 255, 0.2)" />
          </svg>

          {/* Centerpiece Wordmark Overlay in the Sphere */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none"
            style={{ transform: 'translateZ(35px)' }}
          >
            {/* Slashed Wordmark */}
            <div className="flex items-center font-sans font-bold text-white text-3xl sm:text-4xl md:text-5xl tracking-[0.38em] uppercase drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
              <span>OSC</span>
              <span className="relative inline-flex items-center justify-center mx-[0.06em]">
                <span>O</span>
                <span className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="w-[135%] h-[3px] bg-white -rotate-45 transform origin-center rounded-full shadow-[0_0_10px_rgba(255,255,255,0.9)]" />
                </span>
              </span>
              <span>RP</span>
            </div>

            <div className="font-sans text-[9px] sm:text-[10px] md:text-[11px] tracking-[0.34em] text-[#A6A6A3] uppercase mt-3 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] font-medium">
              ORCHESTRATED SYSTEM CORPORATION
            </div>

            {/* Live Telemetry Node */}
            <div className="mt-3 font-mono text-[9px] tracking-widest text-white/40 uppercase">
              [ REF: {telemetry.x >= 0 ? `+${telemetry.x}` : telemetry.x}° · {telemetry.y >= 0 ? `+${telemetry.y}` : telemetry.y}° ]
            </div>
          </div>
        </div>

        {/* 
          Official Corner Typography Elements (Matching Master Image) 
        */}

        {/* Top Left Callout */}
        <div
          className="absolute top-6 left-6 text-left font-sans text-[10px] sm:text-[11px] tracking-[0.25em] text-[#777773] uppercase leading-relaxed hidden sm:block"
          style={{ transform: 'translateZ(18px)' }}
        >
          <div>IDEAS</div>
          <div>AUTOMATION</div>
          <div>IMPACT</div>
          <div className="w-4 h-[1px] bg-white/20 mt-2" />
        </div>

        {/* Top Right Callout */}
        <div
          className="absolute top-6 right-6 text-right font-sans text-[10px] sm:text-[11px] tracking-[0.22em] text-[#777773] uppercase leading-relaxed hidden sm:block"
          style={{ transform: 'translateZ(18px)' }}
        >
          <div>BUILDING</div>
          <div>THE NEXT ERA</div>
          <div>OF INTELLIGENT</div>
          <div>SYSTEMS</div>
          <div className="w-4 h-[1px] bg-white/20 mt-2 ml-auto" />
        </div>

        {/* Bottom Center Statement */}
        <div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center font-sans text-[10px] sm:text-[11px] tracking-[0.26em] text-[#A6A6A3] uppercase leading-relaxed"
          style={{ transform: 'translateZ(18px)' }}
        >
          <div>SMARTER TOOLS.</div>
          <div>SIMPLER LIVES.</div>
          <div>A BRIGHTER TOMORROW.</div>
          <div className="w-6 h-[1px] bg-white/30 mx-auto mt-2" />
        </div>

        {/* Bottom Left Official Emblem with Label */}
        <div
          className="absolute bottom-6 left-6 flex items-center gap-2.5 hidden sm:flex text-left"
          style={{ transform: 'translateZ(18px)' }}
        >
          <OscorpSymbol size={26} />
          <div className="border-l border-white/20 pl-2 text-[8px] font-sans tracking-[0.22em] text-[#777773] uppercase leading-tight">
            <div>OSCORP</div>
            <div>ORCHESTRATED SYSTEM</div>
            <div>CORPORATION</div>
          </div>
        </div>

        {/* Bottom Right Founding & Origin */}
        <div
          className="absolute bottom-6 right-6 text-right font-sans text-[9px] sm:text-[10px] tracking-[0.24em] text-[#777773] uppercase leading-tight hidden sm:block"
          style={{ transform: 'translateZ(18px)' }}
        >
          <div>EST. 2026</div>
          <div className="text-[#A6A6A3]">INDIA</div>
        </div>
      </motion.div>
    </div>
  );
};
