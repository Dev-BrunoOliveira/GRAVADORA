import React, { useState } from 'react';
import { ESTIMATOR_SPORTS, ESTIMATOR_STYLES } from '../data/servicesData';
import { Sparkles, Calculator, Send, Clock } from 'lucide-react';

interface ProjectEstimatorProps {
  onSendBriefing: (briefingSummary: string) => void;
}

export const ProjectEstimator: React.FC<ProjectEstimatorProps> = ({ onSendBriefing }) => {
  const [selectedSport, setSelectedSport] = useState(ESTIMATOR_SPORTS[0].id);
  const [selectedStyle, setSelectedStyle] = useState(ESTIMATOR_STYLES[0].id);
  const [includeDrone, setIncludeDrone] = useState(true);
  const [includeSlowMo, setIncludeSlowMo] = useState(true);
  const [needCasting, setNeedCasting] = useState(false);

  const sportObj = ESTIMATOR_SPORTS.find(s => s.id === selectedSport) || ESTIMATOR_SPORTS[0];
  const styleObj = ESTIMATOR_STYLES.find(s => s.id === selectedStyle) || ESTIMATOR_STYLES[0];

  // Base Calculation logic
  const basePrice = 6500;
  const droneCost = includeDrone ? 2500 : 0;
  const slowMoCost = includeSlowMo ? 1800 : 0;
  const castingCost = needCasting ? 3000 : 0;

  const totalEstimated = Math.round((basePrice * sportObj.priceMultiplier * styleObj.priceMultiplier) + droneCost + slowMoCost + castingCost);
  const minEstimate = Math.round(totalEstimated * 0.9);
  const maxEstimate = Math.round(totalEstimated * 1.15);

  const estimatedDays = Math.round(2 * sportObj.priceMultiplier * styleObj.priceMultiplier);

  const briefingText = `Projeto: ${sportObj.name} | Formato: ${styleObj.name} | Drone FPV: ${includeDrone ? 'Sim' : 'Não'} | 240fps SlowMo: ${includeSlowMo ? 'Sim' : 'Não'} | Casting Atletas: ${needCasting ? 'Sim' : 'Não'}`;

  return (
    <section id="simulador" style={{ padding: '100px 0', backgroundColor: 'var(--bg-surface)', position: 'relative' }}>
      <div className="container">
        
        {/* HEADER */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 60px auto' }}>
          <div className="badge-tag" style={{ marginBottom: '16px' }}>
            <Calculator style={{ width: '14px', height: '14px' }} />
            Simulador de Produção de Marcas Esportivas
          </div>
          <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 900, marginBottom: '16px' }}>
            ORCE SEU PROJETO EM <span className="text-gradient-yellow">TEMPO REAL</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
            Selecione as características do seu comercial ou evento esportivo para visualizar estimativa de prazo e diretrizes.
          </p>
        </div>

        {/* CALCULATOR MAIN BOX */}
        <div
          className="glass-panel estimator-grid"
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            padding: '40px',
            borderRadius: 'var(--radius-lg)',
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.5fr) minmax(320px, 1fr)',
            gap: '40px'
          }}
        >
          {/* LEFT: CONTROLS */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            
            {/* STEP 1: SPORT TERRAIN */}
            <div>
              <label style={labelStyle}>1. Modalidade Esportiva ou Cenário:</label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
                {ESTIMATOR_SPORTS.map((sport) => {
                  const isSelected = selectedSport === sport.id;
                  return (
                    <button
                      key={sport.id}
                      onClick={() => setSelectedSport(sport.id)}
                      style={{
                        padding: '14px 16px',
                        borderRadius: 'var(--radius-md)',
                        textAlign: 'left',
                        cursor: 'pointer',
                        backgroundColor: isSelected ? 'rgba(255, 199, 0, 0.14)' : 'rgba(0, 0, 0, 0.6)',
                        border: isSelected ? '1px solid var(--accent-yellow)' : '1px solid rgba(255, 255, 255, 0.08)',
                        color: isSelected ? '#FFFFFF' : 'var(--text-muted)',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <strong style={{ display: 'block', fontSize: '0.92rem', color: isSelected ? 'var(--accent-yellow)' : '#FFFFFF' }}>
                        {sport.name}
                      </strong>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', display: 'block', marginTop: '4px' }}>
                        {sport.description}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* STEP 2: FORMAT & STYLE */}
            <div>
              <label style={labelStyle}>2. Formato Audiovisual Desejado:</label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
                {ESTIMATOR_STYLES.map((style) => {
                  const isSelected = selectedStyle === style.id;
                  return (
                    <button
                      key={style.id}
                      onClick={() => setSelectedStyle(style.id)}
                      style={{
                        padding: '14px 16px',
                        borderRadius: 'var(--radius-md)',
                        textAlign: 'left',
                        cursor: 'pointer',
                        backgroundColor: isSelected ? 'rgba(255, 69, 0, 0.14)' : 'rgba(0, 0, 0, 0.6)',
                        border: isSelected ? '1px solid var(--accent-orange)' : '1px solid rgba(255, 255, 255, 0.08)',
                        color: isSelected ? '#FFFFFF' : 'var(--text-muted)',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <strong style={{ display: 'block', fontSize: '0.92rem', color: isSelected ? 'var(--accent-orange)' : '#FFFFFF' }}>
                        {style.name}
                      </strong>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', display: 'block', marginTop: '4px' }}>
                        {style.description}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* STEP 3: ADDONS */}
            <div>
              <label style={labelStyle}>3. Recursos Adicionais de Captação:</label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <label style={checkboxCardStyle}>
                  <input
                    type="checkbox"
                    checked={includeDrone}
                    onChange={(e) => setIncludeDrone(e.target.checked)}
                    style={{ width: '18px', height: '18px', accentColor: 'var(--accent-yellow)' }}
                  />
                  <div>
                    <strong style={{ fontSize: '0.9rem', color: '#FFFFFF', display: 'block' }}>Drone FPV Aéreo 140km/h</strong>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Perseguição aérea de alta velocidade (+ R$ 2.500)</span>
                  </div>
                </label>

                <label style={checkboxCardStyle}>
                  <input
                    type="checkbox"
                    checked={includeSlowMo}
                    onChange={(e) => setIncludeSlowMo(e.target.checked)}
                    style={{ width: '18px', height: '18px', accentColor: 'var(--accent-yellow)' }}
                  />
                  <div>
                    <strong style={{ fontSize: '0.9rem', color: '#FFFFFF', display: 'block' }}>Super Slow-Mo 240 FPS 4K RAW</strong>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Câmeras RED/Sony de ultra velocidade (+ R$ 1.800)</span>
                  </div>
                </label>

                <label style={checkboxCardStyle}>
                  <input
                    type="checkbox"
                    checked={needCasting}
                    onChange={(e) => setNeedCasting(e.target.checked)}
                    style={{ width: '18px', height: '18px', accentColor: 'var(--accent-yellow)' }}
                  />
                  <div>
                    <strong style={{ fontSize: '0.9rem', color: '#FFFFFF', display: 'block' }}>Casting de Atletas Profissionais</strong>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Seleção e contratação de atletas/modelos (+ R$ 3.000)</span>
                  </div>
                </label>
              </div>
            </div>

          </div>

          {/* RIGHT: ESTIMATE SUMMARY BOX */}
          <div
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.9)',
              border: '1px solid var(--border-active)',
              borderRadius: 'var(--radius-lg)',
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
                <Sparkles style={{ width: '20px', height: '20px', color: 'var(--accent-yellow)' }} />
                <span className="font-display" style={{ fontSize: '1.1rem', fontWeight: 800, color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Resumo Estimativo
                </span>
              </div>

              {/* ESTIMATED BUDGET RANGE */}
              <div style={{ marginBottom: '28px' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block' }}>
                  Investimento Estimado:
                </span>
                <div className="font-display" style={{ fontSize: '2.2rem', fontWeight: 900, color: 'var(--accent-yellow)', lineHeight: 1.2, marginTop: '4px' }}>
                  R$ {minEstimate.toLocaleString('pt-BR')} <span style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>- R$ {maxEstimate.toLocaleString('pt-BR')}</span>
                </div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', display: 'block', marginTop: '4px' }}>
                  *Valores aproximados para orçamento inicial de produção.
                </span>
              </div>

              {/* TIME ESTIMATE */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '16px', borderRadius: 'var(--radius-md)', backgroundColor: 'rgba(255, 255, 255, 0.04)', marginBottom: '24px' }}>
                <Clock style={{ width: '22px', height: '22px', color: 'var(--accent-orange)' }} />
                <div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', display: 'block' }}>Prazo Estimado de Entrega</span>
                  <strong style={{ fontSize: '1rem', color: '#FFFFFF' }}>{estimatedDays} a {estimatedDays + 3} dias úteis</strong>
                </div>
              </div>

              {/* INCLUDED ITEMS LIST */}
              <div style={{ marginBottom: '28px' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', display: 'block', marginBottom: '10px' }}>Incluso no Orçamento:</span>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <li style={checkItemStyle}>Captação Cinema 4K + Áudio Pro</li>
                  <li style={checkItemStyle}>Edição & Color Grading Esportivo</li>
                  <li style={checkItemStyle}>Licenciamento de Trilha Sonora Pro</li>
                  <li style={checkItemStyle}>Formatos 16:9 (TV/YouTube) e 9:16 (Reels)</li>
                </ul>
              </div>
            </div>

            {/* ACTION BUTTON */}
            <button
              onClick={() => onSendBriefing(briefingText)}
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <Send style={{ width: '18px', height: '18px', fill: '#000000' }} />
              Enviar Briefing Direto
            </button>
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 868px) {
          .estimator-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '0.95rem',
  fontWeight: 800,
  color: '#FFFFFF',
  marginBottom: '14px',
  fontFamily: 'var(--font-display)'
};

const checkboxCardStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '14px',
  padding: '14px 18px',
  borderRadius: 'var(--radius-md)',
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  border: '1px solid rgba(255, 255, 255, 0.08)',
  cursor: 'pointer'
};

const checkItemStyle: React.CSSProperties = {
  fontSize: '0.82rem',
  color: '#FFFFFF',
  display: 'flex',
  alignItems: 'center',
  gap: '8px'
};
