import React from 'react';
import { TECH_GEAR } from '../data/gearData';
import { Cpu } from 'lucide-react';

export const TechGear: React.FC = () => {
  return (
    <section id="equipamentos" style={{ padding: '100px 0', backgroundColor: 'var(--bg-primary)', position: 'relative' }}>
      <div className="container">
        
        {/* HEADER */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 60px auto' }}>
          <div className="badge-tag" style={{ marginBottom: '16px' }}>
            <Cpu style={{ width: '14px', height: '14px' }} />
            Estúdio & Arsenais Audiovisuais
          </div>
          <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 900, marginBottom: '16px' }}>
            TECNOLOGIA DE PONTA PARA <span className="text-gradient-yellow">CENAS DE ALTA VELOCIDADE</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
            Investimos em equipamentos projetados para suportar poeira, chuva, aceleração brusca e capturar imagens em ultra definição.
          </p>
        </div>

        {/* GEAR GRID */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px'
          }}
        >
          {TECH_GEAR.map((item) => (
            <div
              key={item.id}
              className="glass-panel"
              style={{
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {/* IMAGE HEADER */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '220px',
                  overflow: 'hidden'
                }}
              >
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: 'contrast(1.2) brightness(0.82)'
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, var(--bg-surface) 0%, transparent 100%)'
                  }}
                />
                <span
                  style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    padding: '6px 14px',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    backgroundColor: 'rgba(0, 0, 0, 0.9)',
                    color: 'var(--accent-yellow)',
                    border: '1px solid rgba(255, 199, 0, 0.5)',
                    backdropFilter: 'blur(8px)'
                  }}
                >
                  {item.badge}
                </span>
              </div>

              {/* DETAILS */}
              <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <span style={{ fontSize: '0.78rem', color: 'var(--accent-orange)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '6px' }}>
                    {item.category}
                  </span>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '10px' }}>
                    {item.name}
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '20px' }}>
                    {item.description}
                  </p>
                </div>

                {/* SPECS LIST */}
                <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '16px' }}>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {item.specs.map((spec, idx) => (
                      <li key={idx} style={{ fontSize: '0.82rem', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent-yellow)' }} />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
