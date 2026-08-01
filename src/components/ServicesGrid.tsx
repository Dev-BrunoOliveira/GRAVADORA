import React from 'react';
import { SERVICES_LIST } from '../data/servicesData';
import { Film, Zap, Activity, Trophy, CheckCircle2, ArrowRight } from 'lucide-react';

interface ServicesGridProps {
  onOpenEstimator: () => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onOpenEstimator }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Film': return <Film style={{ width: '28px', height: '28px', color: 'var(--accent-yellow)' }} />;
      case 'Zap': return <Zap style={{ width: '28px', height: '28px', color: 'var(--accent-orange)' }} />;
      case 'Activity': return <Activity style={{ width: '28px', height: '28px', color: 'var(--accent-yellow)' }} />;
      default: return <Trophy style={{ width: '28px', height: '28px', color: 'var(--accent-orange)' }} />;
    }
  };

  return (
    <section id="servicos" style={{ padding: '100px 0', backgroundColor: 'var(--bg-surface)', position: 'relative' }}>
      <div className="container">
        
        {/* HEADER */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 60px auto' }}>
          <div className="badge-tag badge-orange" style={{ marginBottom: '16px' }}>
            Serviços & Especialidades
          </div>
          <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 900, marginBottom: '16px' }}>
            TECNOLOGIA AUDVISUAL PARA <span className="text-gradient-orange">MARCAS ESPORTIVAS</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
            Do roteiro cinematográfico à entrega otimizada para comerciais de TV e redes sociais.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px'
          }}
        >
          {SERVICES_LIST.map((service) => (
            <div
              key={service.id}
              className="glass-panel"
              style={{
                padding: '36px 28px',
                borderRadius: 'var(--radius-lg)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}
            >
              <div>
                {/* ICON & TAG */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                  <div
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'rgba(0, 0, 0, 0.9)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 8px 20px rgba(0,0,0,0.6)'
                    }}
                  >
                    {getIcon(service.icon)}
                  </div>
                  <span className="badge-tag">{service.tag}</span>
                </div>

                {/* TITLE & DESCRIPTION */}
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '12px' }}>
                  {service.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '24px' }}>
                  {service.description}
                </p>

                {/* FEATURES LIST */}
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
                  {service.features.map((feature, idx) => (
                    <li key={idx} style={{ fontSize: '0.85rem', color: 'var(--text-main)', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <CheckCircle2 style={{ width: '16px', height: '16px', color: 'var(--accent-yellow)', flexShrink: 0, marginTop: '2px' }} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* ACTION FOOTER */}
              <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '20px' }}>
                <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-dim)', marginBottom: '12px', fontStyle: 'italic' }}>
                  ⭐ {service.sampleHighlight}
                </span>
                <button
                  onClick={onOpenEstimator}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--accent-yellow)',
                    fontWeight: 800,
                    fontSize: '0.88rem',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: 0
                  }}
                >
                  Solicitar Orçamento Deste Formato
                  <ArrowRight style={{ width: '16px', height: '16px' }} />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
