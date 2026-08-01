import React from 'react';
import { Quote, Star, Award } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      quote: 'A GoudContent capturou a essência do Trail Run de uma forma que nunca tínhamos visto. Os takes de drone FPV acompanhando nossos atletas a milímetros da mata fecharam o comercial mais assistido do ano na nossa linha Evadict Outdoor.',
      author: 'Lucas Mendes',
      role: 'Head de Marketing & Audiovisual',
      company: 'Evadict Outdoor Apparel',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      rating: 5
    },
    {
      quote: 'A velocidade de entrega e o nivel de câmeras (RED 8K + 240fps) foram o grande diferencial para a nossa campanha da linha aero de ciclismo. O engajamento no Instagram subiu mais de 300%.',
      author: 'Renata Albuquerque',
      role: 'Diretora de Marca Esportiva',
      company: 'Van Rysel Speed',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      rating: 5
    },
    {
      quote: 'Cobrir uma maratona noturna com 10.000 corredores é um desafio monstruoso. A equipe da GoudContent entregou o teaser oficial em menos de 12 horas com qualidade de cinema!',
      author: 'Carlos Eduardo',
      role: 'Organizador Geral',
      company: 'NightRun City Festival',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      rating: 5
    }
  ];

  return (
    <section id="depoimentos" style={{ padding: '100px 0', backgroundColor: 'var(--bg-primary)', position: 'relative' }}>
      <div className="container">
        
        {/* HEADER */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 60px auto' }}>
          <div className="badge-tag" style={{ marginBottom: '16px' }}>
            <Award style={{ width: '14px', height: '14px' }} />
            Confiança de Grandes Marcas
          </div>
          <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 900, marginBottom: '16px' }}>
            O QUE DIZEM NOSSOS <span className="text-gradient-yellow">PARCEIROS</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
            Resultados reais em termos de engajamento, conversão e impacto visual para marcas esportivas.
          </p>
        </div>

        {/* REVIEWS GRID */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px'
          }}
        >
          {reviews.map((rev, idx) => (
            <div
              key={idx}
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
              <Quote
                style={{
                  position: 'absolute',
                  top: '24px',
                  right: '24px',
                  width: '40px',
                  height: '40px',
                  color: 'rgba(255, 199, 0, 0.15)'
                }}
              />

              <div>
                {/* RATING STARS */}
                <div style={{ display: 'flex', gap: '4px', marginBottom: '20px' }}>
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} style={{ width: '16px', height: '16px', fill: 'var(--accent-yellow)', color: 'var(--accent-yellow)' }} />
                  ))}
                </div>

                <p style={{ fontSize: '0.95rem', color: '#F1F5F9', lineHeight: 1.6, fontStyle: 'italic', marginBottom: '28px' }}>
                  "{rev.quote}"
                </p>
              </div>

              {/* AUTHOR INFO */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '20px' }}>
                <img
                  src={rev.avatar}
                  alt={rev.author}
                  style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--accent-yellow)' }}
                />
                <div>
                  <strong style={{ display: 'block', fontSize: '0.95rem', color: '#FFFFFF' }}>{rev.author}</strong>
                  <span style={{ display: 'block', fontSize: '0.78rem', color: 'var(--accent-yellow)' }}>{rev.role}</span>
                  <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-dim)' }}>{rev.company}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
