import React, { useState, useEffect } from 'react';
import { PORTFOLIO_PROJECTS } from '../data/portfolioData';
import type { VideoProject } from '../types';
import { Play, Clock, Layers, ChevronDown, ChevronUp } from 'lucide-react';

interface PortfolioShowcaseProps {
  onSelectProject: (project: VideoProject) => void;
}

export const PortfolioShowcase: React.FC<PortfolioShowcaseProps> = ({ onSelectProject }) => {
  const [isMobile, setIsMobile] = useState<boolean>(() =>
    typeof window !== 'undefined' ? window.innerWidth <= 768 : false
  );
  const [showAllMobile, setShowAllMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const visibleProjects = isMobile && !showAllMobile
    ? PORTFOLIO_PROJECTS.slice(0, 3)
    : PORTFOLIO_PROJECTS;

  return (
    <section id="portfolio" style={{ padding: '100px 0', backgroundColor: 'var(--bg-primary)', position: 'relative' }}>
      <div className="container">
        
        {/* SECTION HEADER */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 50px auto' }}>
          <div className="badge-tag" style={{ marginBottom: '16px' }}>
            <Layers style={{ width: '14px', height: '14px' }} />
            Portfólio Gravadora GoudContent
          </div>
          <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 900, marginBottom: '16px' }}>
            UM POUCO <span className="text-gradient-yellow">DA NOSSA TRAJETÓRIA</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
            aqui você encontra uma seleção de projetos que refletem nossa paixão pelo audiovisual e nosso compromisso com a excelência em cada produção.
          </p>
        </div>

        {/* PROJECTS GRID */}
        <div className="portfolio-grid">
          {visibleProjects.map((project) => {
            const isVertical = project.aspectRatio === '9/16' || project.aspectRatio === 'vertical' || project.orientation === 'vertical';
            return (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className={`glass-panel ${isVertical ? 'portfolio-card-vertical' : 'portfolio-card-horizontal'}`}
                style={{
                  cursor: 'pointer',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative'
                }}
              >
                {/* THUMBNAIL CONTAINER WITH HOVER EFFECT */}
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: isVertical ? '9 / 16' : '16 / 9',
                    overflow: 'hidden'
                  }}
                >
                  <img
                    src={project.thumbnailUrl}
                    alt={project.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                      filter: 'brightness(0.88)'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.0)'}
                  />

                  {/* OVERLAY GRADIENT */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.2) 60%, rgba(0, 0, 0, 0.5) 100%)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      padding: '16px'
                    }}
                  >
                    {/* TOP BADGES */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', flexWrap: 'wrap' }}>
                      <span className="badge-tag" style={{ backgroundColor: 'rgba(0, 0, 0, 0.85)', backdropFilter: 'blur(8px)' }}>
                        {project.categoryLabel || (isVertical ? '📱 9:16 Mobile' : '🎬 16:9 Cinema')}
                      </span>
                      {project.duration && (
                        <span
                          style={{
                            padding: '4px 10px',
                            borderRadius: 'var(--radius-full)',
                            fontSize: '0.72rem',
                            fontWeight: 800,
                            backgroundColor: 'rgba(255, 69, 0, 0.9)',
                            color: '#FFFFFF',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px'
                          }}
                        >
                          <Clock style={{ width: '12px', height: '12px' }} />
                          {project.duration}
                        </span>
                      )}
                    </div>

                    {/* CENTER PLAY BUTTON WITHOUT GLOW */}
                    <div
                      style={{
                        alignSelf: 'center',
                        width: '56px',
                        height: '56px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--accent-yellow)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 14px rgba(0, 0, 0, 0.4)',
                        transition: 'transform 0.3s ease'
                      }}
                    >
                      <Play style={{ width: '22px', height: '22px', fill: '#000000', color: '#000000', marginLeft: '3px' }} />
                    </div>

                    {/* BOTTOM TECH TAGS */}
                    {(project.resolution || project.fps) && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        {project.resolution && (
                          <span style={{ fontSize: '0.72rem', fontWeight: 800, padding: '3px 8px', borderRadius: '4px', backgroundColor: 'rgba(255, 255, 255, 0.15)', color: '#FFFFFF' }}>
                            {project.resolution}
                          </span>
                        )}
                        {project.fps && (
                          <span style={{ fontSize: '0.72rem', fontWeight: 800, padding: '3px 8px', borderRadius: '4px', backgroundColor: 'rgba(255, 199, 0, 0.25)', color: 'var(--accent-yellow)' }}>
                            {project.fps}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>

              {/* CARD DETAILS */}
              <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <span style={{ fontSize: '0.78rem', fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--accent-yellow)', display: 'block', marginBottom: '6px' }}>
                    {project.client}
                  </span>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-main)', lineHeight: 1.3, marginBottom: '10px' }}>
                    {project.title}
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                    {project.description}
                  </p>
                </div>
              </div>

              </div>
            );
          })}
        </div>

        {/* MOBILE SHOW MORE / SHOW LESS BUTTON */}
        {isMobile && PORTFOLIO_PROJECTS.length > 3 && (
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '36px' }}>
            <button
              onClick={() => setShowAllMobile((prev) => !prev)}
              className="btn-secondary"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '14px 28px',
                borderRadius: 'var(--radius-full)',
                border: '1px solid var(--accent-yellow)',
                color: 'var(--accent-yellow)',
                background: 'rgba(255, 199, 0, 0.08)',
                cursor: 'pointer',
                fontSize: '0.9rem',
                fontWeight: 700,
                transition: 'all 0.3s ease',
                width: 'auto'
              }}
            >
              <span>{showAllMobile ? 'Ver menos projetos' : 'Ver mais projetos'}</span>
              {showAllMobile ? (
                <ChevronUp style={{ width: '18px', height: '18px' }} />
              ) : (
                <ChevronDown style={{ width: '18px', height: '18px' }} />
              )}
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
