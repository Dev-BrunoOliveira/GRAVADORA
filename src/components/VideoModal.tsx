import React from 'react';
import type { VideoProject } from '../types';
import { X, Camera, Sparkles, CheckCircle2 } from 'lucide-react';

interface VideoModalProps {
  project: VideoProject | null;
  onClose: () => void;
  onOpenEstimator: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ project, onClose, onOpenEstimator }) => {
  if (!project) return null;

  const isVertical = project.aspectRatio === '9/16' || project.aspectRatio === 'vertical' || project.orientation === 'vertical';

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        backgroundColor: 'rgba(0, 0, 0, 0.96)',
        backdropFilter: 'blur(20px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px'
      }}
      onClick={onClose}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: isVertical ? '460px' : '1100px',
          maxHeight: '92vh',
          backgroundColor: 'var(--bg-surface)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--border-active)',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.9)',
          overflowY: 'auto',
          display: isVertical ? 'flex' : 'grid',
          flexDirection: isVertical ? 'column' : undefined,
          gridTemplateColumns: isVertical ? undefined : 'minmax(0, 2fr) minmax(300px, 1fr)',
          animation: 'floatSlow 0.3s ease-out'
        }}
        onClick={(e) => e.stopPropagation()}
        className={`modal-container ${isVertical ? 'modal-vertical' : 'modal-horizontal'}`}
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            zIndex: 20,
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            color: '#FFFFFF',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s ease'
          }}
          title="Fechar Visualização"
        >
          <X style={{ width: '22px', height: '22px' }} />
        </button>

        {/* LEFT/TOP COLUMN: REAL VIDEO PLAYER */}
        <div
          style={{
            backgroundColor: '#000000',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            padding: isVertical ? '16px 16px 0 16px' : '0',
            width: '100%',
            flexShrink: 0
          }}
        >
          <video
            src={project.videoUrl}
            controls
            autoPlay
            playsInline
            style={{
              width: '100%',
              height: isVertical ? 'auto' : '100%',
              maxHeight: isVertical ? '56vh' : '70vh',
              aspectRatio: isVertical ? '9 / 16' : undefined,
              objectFit: 'contain',
              borderRadius: isVertical ? '16px' : '0',
              boxShadow: isVertical ? '0 10px 30px rgba(0,0,0,0.8)' : 'none'
            }}
          />
        </div>

        {/* RIGHT/BOTTOM COLUMN: TECHNICAL FICHA TÉCNICA */}
        <div
          style={{
            padding: isVertical ? '20px 24px 24px 24px' : '32px',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderLeft: isVertical ? 'none' : '1px solid var(--border-subtle)',
            borderTop: isVertical ? '1px solid var(--border-subtle)' : 'none',
            flex: 1
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              {project.categoryLabel && <span className="badge-tag">{project.categoryLabel}</span>}
              {project.fps && <span className="badge-tag badge-orange">{project.fps}</span>}
            </div>

            <span style={{ fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--accent-yellow)' }}>
              {project.client}
            </span>

            <h3 style={{ fontSize: '1.4rem', fontWeight: 900, color: 'var(--text-main)', lineHeight: 1.2, marginTop: '4px', marginBottom: '12px' }}>
              {project.title}
            </h3>

            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '20px' }}>
              {project.description}
            </p>

            {/* GEAR LIST */}
            {project.gearUsed && project.gearUsed.length > 0 && (
              <div style={{ marginBottom: '20px' }}>
                <h4 style={{ fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-muted)', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Camera style={{ width: '14px', height: '14px', color: 'var(--accent-yellow)' }} />
                  Equipamentos Utilizados:
                </h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {project.gearUsed.map((gear, idx) => (
                    <li key={idx} style={{ fontSize: '0.85rem', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <CheckCircle2 style={{ width: '14px', height: '14px', color: 'var(--accent-yellow)' }} />
                      {gear}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* CTA */}
          <button
            onClick={() => {
              onClose();
              onOpenEstimator();
            }}
            className="btn-primary"
            style={{ width: '100%', justifyContent: 'center', marginTop: '16px' }}
          >
            <Sparkles style={{ width: '18px', height: '18px' }} />
            Quero um Vídeo Deste Nível
          </button>
        </div>

      </div>

      <style>{`
        @media (max-width: 840px) {
          .modal-horizontal {
            grid-template-columns: 1fr !important;
            max-height: 95vh !important;
          }
        }
      `}</style>
    </div>
  );
};
