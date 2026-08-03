import React, { useState } from 'react';
import { MessageSquare, CheckCircle2, ArrowRight, SlidersHorizontal } from 'lucide-react';

export const BudgetSlider: React.FC = () => {
  const [budget, setBudget] = useState<number>(25000);

  const getScopeDetails = (amount: number) => {
    if (amount <= 10000) {
      return {
        title: 'Pack Reels & Redes Sociais',
        deliverables: [
          '3 a 5 Vídeos Curtos (9:16) em 4K 60fps',
          'Edição Dinâmica para Instagram & TikTok',
          'Color Grading Esportivo Básico',
          'Entrega em até 3 dias úteis'
        ],
        idealFor: 'Marcas de vestuário e atletas para presença digital constante.'
      };
    } else if (amount <= 30000) {
      return {
        title: 'Comercial Hero + Pack Social Media',
        deliverables: [
          '1 Filme Principal Hero (60s em 16:9)',
          '4 Cortes para Reels/Stories (9:16)',
          'Captação em Ultra Câmera Lenta (120 FPS)',
          'Trilha Sonora Profissional Licenciada',
          'Entrega em 5 a 7 dias úteis'
        ],
        idealFor: 'Lançamento de tênis, roupas técnicas e equipamentos esportivos.'
      };
    } else if (amount <= 80000) {
      return {
        title: 'Produção Cinema 6K + Drone FPV a 140km/h',
        deliverables: [
          'Filme Comercial Cinema 4K/6K (90s)',
          'Captação Aérea com Drone FPV de Alta Velocidade',
          'Super Slow-Mo 240 FPS (Sensores RED/Sony)',
          'Pack com 10 Vídeos Adaptados para Redes',
          'Casting de Atletas e Direção de Cena'
        ],
        idealFor: 'Campanhas de marca em nível nacional e esportes radicais.'
      };
    } else if (amount <= 200000) {
      return {
        title: 'Campanha Nacional Multi-Plataforma',
        deliverables: [
          'Filme Comercial Master Cinema 8K RAW (120s)',
          '15+ Recortes Multi-Formato (16:9, 9:16, 1:1, 4:5)',
          'Equipe de Multi-Câmeras e Drones FPV Simultâneos',
          'Sound Design Imersivo & Foley de Alta Precisão',
          'Locações Exclusivas e Casting Profissional'
        ],
        idealFor: 'Grandes veiculações em TV, Cinema, Out of Home e Redes Globais.'
      };
    } else {
      return {
        title: 'Super Produção Internacional / Documentário de Marca',
        deliverables: [
          'Documentário ou Série Comercial Completa em 8K RAW',
          'Gravações em Múltiplos Estados ou Países com Logística Completa',
          'Equipe de Cinema Completa, Pilotos FPV e Atletas Olímpicos/Pro',
          'Color Grading de Nível Hollywoodiano e Sound Design Imersivo',
          'Direitos Totais de Imagem Ilimitados e Entregáveis Customizados'
        ],
        idealFor: 'Grandes corporações, patrocinadores oficiais de maratonas e ligas globais.'
      };
    }
  };

  const scope = getScopeDetails(budget);
  const whatsappUrl = `https://wa.me/5511985187954?text=Olá!%20Simulei%20um%20orçamento%20de%20R$%20${budget.toLocaleString('pt-BR')}%20no%20site%20da%20GoudContent%20e%20gostaria%20de%20iniciar%20o%20projeto.`;

  return (
    <section id="orcamento-slider" style={{ padding: '80px 0', backgroundColor: 'var(--bg-surface)', position: 'relative' }}>
      <div className="container">
        
        {/* HEADER */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px auto' }}>
          <div className="badge-tag" style={{ marginBottom: '16px' }}>
            <SlidersHorizontal style={{ width: '14px', height: '14px' }} />
            Simulador de Orçamento Direto
          </div>
          <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 900, marginBottom: '16px' }}>
            QUANTO VOCÊ QUER <span className="text-gradient-yellow">INVESTIR?</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
            Deslize o controle abaixo para selecionar o valor desejado (até R$ 500.000) e veja instantaneamente o escopo ideal para a sua produção.
          </p>
        </div>

        {/* SLIDER CONTAINER CARD */}
        <div
          className="glass-panel"
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            padding: '40px',
            borderRadius: 'var(--radius-lg)'
          }}
        >
          {/* VALUE DISPLAY */}
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1.5px', display: 'block', marginBottom: '8px' }}>
              Valor Escolhido:
            </span>
            <div className="font-display" style={{ fontSize: 'clamp(2.8rem, 6vw, 4.2rem)', fontWeight: 900, color: 'var(--accent-yellow)', lineHeight: 1 }}>
              R$ {budget.toLocaleString('pt-BR')}
            </div>
          </div>

          {/* RANGE SLIDER INPUT UP TO 500,000 */}
          <div style={{ marginBottom: '40px', padding: '0 10px' }}>
            <input
              type="range"
              min={5000}
              max={500000}
              step={5000}
              value={budget}
              onChange={(e) => setBudget(Number(e.target.value))}
              style={{
                width: '100%',
                height: '10px',
                borderRadius: '5px',
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                outline: 'none',
                accentColor: 'var(--accent-yellow)',
                cursor: 'pointer'
              }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '12px', fontSize: '0.82rem', color: 'var(--text-dim)', fontWeight: 700 }}>
              <span>R$ 5.000 (Mínimo)</span>
              <span>R$ 250.000</span>
              <span>R$ 500.000 (Super Produção)</span>
            </div>
          </div>

          {/* SCOPE DETAILS RESULT */}
          <div
            style={{
              backgroundColor: 'var(--bg-primary)',
              border: '1px solid var(--border-active)',
              borderRadius: 'var(--radius-md)',
              padding: '32px',
              marginBottom: '32px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '16px' }}>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 900, color: 'var(--text-main)' }}>
                {scope.title}
              </h3>
              <span className="badge-tag badge-orange">
                Escopo Ideal
              </span>
            </div>

            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', marginBottom: '24px', fontStyle: 'italic' }}>
              💡 {scope.idealFor}
            </p>

            <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '20px', marginBottom: '24px' }}>
              <strong style={{ display: 'block', fontSize: '0.88rem', color: 'var(--text-main)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                O que está incluso neste orçamento:
              </strong>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px' }}>
                {scope.deliverables.map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.88rem', color: 'var(--text-main)' }}>
                    <CheckCircle2 style={{ width: '16px', height: '16px', color: 'var(--accent-yellow)', flexShrink: 0 }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* DIRECT WHATSAPP CONVERSION BUTTON */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <MessageSquare style={{ width: '18px', height: '18px', fill: '#FFFFFF', flexShrink: 0 }} />
              <span>Fechar Orçamento no WhatsApp</span>
              <ArrowRight style={{ width: '18px', height: '18px', flexShrink: 0 }} />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
