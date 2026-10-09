import React from 'react';

interface OscorpLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showWordmark?: boolean;
  showSubtitle?: boolean;
}

/**
 * Official Oscorp Symbol:
 * Precise circular geometry bisected by a 45-degree diagonal vector needle
 * that extends cleanly beyond the perimeter at top-right and bottom-left,
 * as provided in the official brand asset.
 */
export const OscorpSymbol: React.FC<{ size?: number; className?: string }> = ({
  size = 32,
  className = '',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 transition-transform duration-300 hover:scale-105 ${className}`}
      aria-hidden="true"
    >
      {/* Outer precision circular perimeter */}
      <circle
        cx="32"
        cy="32"
        r="20"
        stroke="#F5F5F3"
        strokeWidth="2.75"
        strokeLinecap="round"
      />

      {/* 
        Precision diagonal piercing needle (45 degrees):
        From bottom-left (13, 51) to top-right (51, 13)
        Extends beyond the r=20 perimeter (perimeter intersection is at ~17.85, 46.14 and 46.14, 17.85)
      */}
      <path
        d="M 11 53 L 53 11"
        stroke="#F5F5F3"
        strokeWidth="2.75"
        strokeLinecap="round"
      />

      {/* Subtle needle point highlights */}
      <circle cx="53" cy="11" r="1.25" fill="#F5F5F3" />
      <circle cx="11" cy="53" r="1.25" fill="#F5F5F3" />
    </svg>
  );
};

export const OscorpLogo: React.FC<OscorpLogoProps> = ({
  className = '',
  size = 'md',
  showWordmark = true,
  showSubtitle = true,
}) => {
  const symbolSizes = {
    sm: 26,
    md: 32,
    lg: 42,
    xl: 56,
  };

  const wordmarkSizes = {
    sm: 'text-sm tracking-[0.28em]',
    md: 'text-base tracking-[0.32em]',
    lg: 'text-xl tracking-[0.34em]',
    xl: 'text-2xl tracking-[0.36em]',
  };

  const subtitleSizes = {
    sm: 'text-[8.5px] tracking-[0.24em]',
    md: 'text-[9.5px] tracking-[0.26em]',
    lg: 'text-[11px] tracking-[0.28em]',
    xl: 'text-[13px] tracking-[0.3em]',
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <OscorpSymbol size={symbolSizes[size]} />

      {showWordmark && (
        <div className="flex flex-col">
          <div className="flex items-center font-sans font-bold text-[#F5F5F3] leading-none uppercase">
            <span className={wordmarkSizes[size]}>
              OSC
            </span>
            {/* Custom Slashed Ø glyph matching official brand */}
            <span className="relative inline-flex items-center justify-center mx-[0.08em]">
              <span className={wordmarkSizes[size]}>O</span>
              <span
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                aria-hidden="true"
              >
                <span className="w-[130%] h-[2px] bg-[#F5F5F3] -rotate-45 transform origin-center rounded-full" />
              </span>
            </span>
            <span className={wordmarkSizes[size]}>
              RP
            </span>
          </div>

          {showSubtitle && (
            <span
              className={`font-sans font-medium text-[#777773] uppercase mt-1 leading-tight ${subtitleSizes[size]}`}
            >
              ORCHESTRATED SYSTEM CORPORATION
            </span>
          )}
        </div>
      )}
    </div>
  );
};
