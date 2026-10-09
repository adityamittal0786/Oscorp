import React, { useEffect, useRef, useState } from 'react';

interface TextMaskProps {
  lines: string[];
  className?: string;
  lineClassName?: string;
  delay?: number;
  stagger?: number;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'div';
}

/**
 * Typographic Line Reveal Component.
 * Wraps each line in an overflow-hidden mask and animates the inner element
 * vertically from translateY(105%) to translateY(0%) with bespoke easing.
 * Preserves accessibility via aria-label on the root element.
 */
export const TextMask: React.FC<TextMaskProps> = ({
  lines,
  className = '',
  lineClassName = '',
  delay = 100,
  stagger = 120,
  as: Component = 'div',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const fullText = lines.join(' ');

  return React.createElement(
    Component,
    {
      ref: elementRef,
      className: `block ${className}`,
      'aria-label': fullText,
    },
    lines.map((line, idx) =>
      React.createElement(
        'span',
        {
          key: idx,
          className: 'block overflow-hidden leading-[1.08] pb-[0.05em]',
          'aria-hidden': 'true',
        },
        React.createElement(
          'span',
          {
            className: `block transition-transform duration-[850ms] ${lineClassName}`,
            style: {
              transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
              transitionDelay: `${delay + idx * stagger}ms`,
              transform: isVisible ? 'translateY(0%)' : 'translateY(115%)',
            },
          },
          line
        )
      )
    )
  );
};
