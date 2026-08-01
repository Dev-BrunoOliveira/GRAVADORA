import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, Sun, Moon } from 'lucide-react';

interface HeaderProps {
  onOpenEstimator: () => void;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenEstimator, theme, onToggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.3s ease',
        padding: scrolled ? '12px 0' : '18px 0',
        backgroundColor: scrolled ? 'var(--bg-card)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-subtle)' : '1px solid transparent'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* LOGO */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '14px', textDecoration: 'none' }}>
          <img
            src="/logo.jpg"
            alt="GoudContent Logo Emblem"
            style={{
              height: '44px',
              width: 'auto',
              objectFit: 'contain',
              borderRadius: '8px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.0)'}
          />
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="font-display" style={{ fontSize: '1.45rem', fontWeight: 900, letterSpacing: '1px', color: 'var(--text-main)' }}>
                GOUD<span style={{ color: 'var(--accent-yellow)' }}>CONTENT</span>
              </span>
              <span
                className="animate-rec"
                style={{
                  width: '9px',
                  height: '9px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--accent-orange)',
                  display: 'inline-block'
                }}
                title="REC ACTIVE"
              />
            </div>
            <span style={{ fontSize: '0.68rem', letterSpacing: '2.5px', textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginTop: '-2px' }}>
              SPORTS VIDEO HOUSE
            </span>
          </div>
        </a>

        {/* DESKTOP NAV */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '36px' }} className="desktop-only">
          <a href="#orcamento-slider" style={navLinkStyle}>Simular Orçamento</a>
          <a href="#contato" style={navLinkStyle}>Contato</a>
        </nav>

        {/* HEADER ACTIONS: THEME TOGGLE + CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          
          {/* LIGHT / DARK THEME TOGGLE BUTTON */}
          <button
            onClick={onToggleTheme}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: 'var(--bg-surface-hover)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-main)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease'
            }}
            title={theme === 'dark' ? 'Ativar Modo Claro' : 'Ativar Modo Escuro'}
          >
            {theme === 'dark' ? (
              <Sun style={{ width: '20px', height: '20px', color: 'var(--accent-yellow)' }} />
            ) : (
              <Moon style={{ width: '20px', height: '20px', color: 'var(--accent-yellow)' }} />
            )}
          </button>

          <button onClick={onOpenEstimator} className="btn-primary desktop-only" style={{ padding: '10px 22px', fontSize: '0.82rem' }}>
            <Sparkles style={{ width: '16px', height: '16px' }} />
            Simular Orçamento
          </button>

          {/* MOBILE TOGGLE BUTTON */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-main)',
              cursor: 'pointer',
              display: 'none',
              padding: '8px'
            }}
            className="mobile-toggle"
          >
            {mobileMenuOpen ? <X style={{ width: '28px', height: '28px' }} /> : <Menu style={{ width: '28px', height: '28px' }} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            backgroundColor: 'var(--bg-card)',
            backdropFilter: 'blur(24px)',
            borderBottom: '1px solid var(--border-subtle)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '18px'
          }}
        >
          <a href="#orcamento-slider" onClick={() => setMobileMenuOpen(false)} style={mobileNavLinkStyle}>Simular Orçamento</a>
          <a href="#contato" onClick={() => setMobileMenuOpen(false)} style={mobileNavLinkStyle}>Contato & WhatsApp</a>
          
          <button onClick={() => { setMobileMenuOpen(false); onOpenEstimator(); }} className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '10px' }}>
            <Sparkles style={{ width: '16px', height: '16px' }} />
            Simular Orçamento
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 868px) {
          .desktop-only { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </header>
  );
};

const navLinkStyle: React.CSSProperties = {
  color: 'var(--text-muted)',
  textDecoration: 'none',
  fontSize: '0.9rem',
  fontWeight: 600,
  letterSpacing: '0.5px',
  transition: 'color 0.2s ease',
  fontFamily: 'var(--font-display)'
};

const mobileNavLinkStyle: React.CSSProperties = {
  color: 'var(--text-main)',
  textDecoration: 'none',
  fontSize: '1.1rem',
  fontWeight: 700,
  padding: '8px 0',
  borderBottom: '1px solid var(--border-subtle)'
};
