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
        backgroundColor: 'rgba(0, 0, 0, 0.94)',
        backdropFilter: 'blur(16px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '12px'
      }}
      onClick={onClose}
    >
      <div
        className={`modal-container ${isVertical ? 'modal-vertical' : 'modal-horizontal'}`}
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: isVertical ? '380px' : '900px',
          maxHeight: '85vh',
          backgroundColor: 'var(--bg-surface)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--border-active)',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.9)',
          overflow: 'hidden',
          display: isVertical ? 'flex' : 'grid',
          flexDirection: isVertical ? 'column' : undefined,
          gridTemplateColumns: isVertical ? undefined : 'minmax(0, 1.4fr) minmax(280px, 1fr)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            zIndex: 30,
            width: '34px',
            height: '34px',
            borderRadius: '50%',
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            color: '#FFFFFF',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s ease'
          }}
          title="Fechar Visualização"
        >
          <X style={{ width: '18px', height: '18px' }} />
        </button>

        {/* REAL VIDEO PLAYER */}
        <div
          className="modal-video-wrapper"
          style={{
            backgroundColor: '#000000',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            padding: isVertical ? '12px 12px 0 12px' : '0',
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
              width: isVertical ? 'auto' : '100%',
              maxWidth: '100%',
              height: 'auto',
              maxHeight: isVertical ? '36vh' : '50vh',
              aspectRatio: isVertical ? '9 / 16' : '16 / 9',
              objectFit: 'contain',
              borderRadius: isVertical ? '10px' : '16px 0 0 16px'
            }}
          />
        </div>

        {/* FICHA TÉCNICA */}
        <div
          className="modal-details-body"
          style={{
            padding: isVertical ? '14px 18px 18px 18px' : '24px',
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
              {project.categoryLabel && <span className="badge-tag" style={{ fontSize: '0.7rem', padding: '4px 10px' }}>{project.categoryLabel}</span>}
              {project.fps && <span className="badge-tag badge-orange" style={{ fontSize: '0.7rem', padding: '4px 10px' }}>{project.fps}</span>}
            </div>

            <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--accent-yellow)' }}>
              {project.client}
            </span>

            <h3 style={{ fontSize: '1.15rem', fontWeight: 900, color: 'var(--text-main)', lineHeight: 1.2, marginTop: '2px', marginBottom: '8px' }}>
              {project.title}
            </h3>

            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.4, marginBottom: '12px' }}>
              {project.description}
            </p>

            {/* GEAR LIST */}
            {project.gearUsed && project.gearUsed.length > 0 && (
              <div style={{ marginBottom: '12px' }}>
                <h4 style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-muted)', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Camera style={{ width: '13px', height: '13px', color: 'var(--accent-yellow)' }} />
                  Equipamentos:
                </h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  {project.gearUsed.map((gear, idx) => (
                    <li key={idx} style={{ fontSize: '0.78rem', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <CheckCircle2 style={{ width: '12px', height: '12px', color: 'var(--accent-yellow)' }} />
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
            style={{ width: '100%', justifyContent: 'center', marginTop: '10px', padding: '10px 16px', fontSize: '0.82rem' }}
          >
            <Sparkles style={{ width: '15px', height: '15px' }} />
            Quero um Vídeo Deste Nível
          </button>
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .modal-container {
            max-height: 82vh !important;
            border-radius: 16px !important;
          }
          .modal-horizontal {
            grid-template-columns: 1fr !important;
          }
          .modal-horizontal video {
            border-radius: 10px 10px 0 0 !important;
            max-height: 26vh !important;
          }
          .modal-vertical video {
            max-height: 30vh !important;
          }
          .modal-details-body {
            padding: 12px 14px 14px 14px !important;
          }
        }

        @media (max-width: 480px) {
          .modal-container {
            max-height: 80vh !important;
          }
          .modal-vertical video {
            max-height: 28vh !important;
          }
          .modal-horizontal video {
            max-height: 24vh !important;
          }
        }
      `}</style>
    </div>
  );
};
