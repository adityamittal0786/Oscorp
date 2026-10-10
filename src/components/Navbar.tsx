import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { OscorpLogo } from './OscorpLogo';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Overview', path: '/' },
    { label: 'Projects', path: '/projects' },
    { label: 'Iris System', path: '/projects/iris' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050505] border-b border-white/[0.08] py-3.5 shadow-[0_12px_36px_rgba(0,0,0,0.95)]'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Official Brand Logo */}
        <Link
          to="/"
          className="group focus:outline-none focus-visible:ring-1 focus-visible:ring-white/40 rounded transition-opacity"
          aria-label="Oscorp Orchestrated System Corporation Home"
        >
          <OscorpLogo size="sm" showSubtitle={true} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive =
              link.path === '/'
                ? location.pathname === '/'
                : location.pathname.startsWith(link.path);

            return (
              <NavLink
                key={link.path}
                to={link.path}
                className={`text-[11px] font-mono tracking-[0.22em] uppercase transition-all py-1 relative focus:outline-none focus-visible:ring-1 focus-visible:ring-white/40 ${
                  isActive
                    ? 'text-[#F5F5F3] font-semibold'
                    : 'text-[#8E8E8A] hover:text-[#F5F5F3]'
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-white transition-all" />
                )}
              </NavLink>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-4">
          <Link
            to="/contact"
            className="group relative inline-flex items-center gap-2 px-4 py-2 text-[11px] font-mono tracking-[0.2em] uppercase text-[#F5F5F3] bg-[#0E0E0E] border border-white/[0.12] hover:border-white/40 hover:bg-[#161616] transition-all duration-200 rounded-sm focus:outline-none focus-visible:ring-1 focus-visible:ring-white"
          >
            <span>Inquire</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#8E8E8A] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            className="p-2 text-[#A1A19C] hover:text-[#F5F5F3] focus:outline-none focus-visible:ring-1 focus-visible:ring-white/40 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer - Solid black surface, zero glassmorphism */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#070707] border-b border-white/[0.1] px-6 py-6 mt-2 space-y-4 shadow-[0_20px_50px_rgba(0,0,0,0.98)]">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const isActive =
                link.path === '/'
                  ? location.pathname === '/'
                  : location.pathname.startsWith(link.path);

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-xs font-mono tracking-[0.2em] uppercase py-2 transition-colors border-b border-white/[0.04] ${
                    isActive
                      ? 'text-[#F5F5F3] font-semibold'
                      : 'text-[#8E8E8A] hover:text-[#F5F5F3]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="pt-2">
            <Link
              to="/contact"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-mono uppercase tracking-[0.2em] text-[#050505] bg-[#F5F5F3] hover:bg-white font-semibold transition-colors rounded-sm"
            >
              <span>Get in touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
