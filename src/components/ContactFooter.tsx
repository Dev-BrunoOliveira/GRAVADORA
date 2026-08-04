import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, CheckCircle2, MessageSquare, Radio } from 'lucide-react';

export const ContactFooter: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappDirectUrl = "https://wa.me/5511985187954?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20audiovisual%20com%20a%20GoudContent";

  return (
    <footer id="contato" style={{ backgroundColor: 'var(--bg-surface)', paddingTop: '80px', paddingBottom: '40px', position: 'relative', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        
        {/* MAIN CONTACT GRID */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.2fr)',
            gap: '50px',
            marginBottom: '60px'
          }}
          className="contact-grid"
        >
          {/* LEFT: BRAND INFO & AVAILABILITY */}
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '8px 18px',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'rgba(255, 199, 0, 0.12)',
                border: '1px solid rgba(255, 199, 0, 0.35)',
                color: 'var(--accent-yellow)',
                fontSize: '0.82rem',
                fontWeight: 800,
                marginBottom: '24px'
              }}
            >
              <Radio className="animate-rec" style={{ width: '16px', height: '16px', color: 'var(--accent-orange)' }} />
              DISPONÍVEL PARA GRAVAÇÕES
            </div>

            <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '20px' }}>
              VAMOS GRAVAR SEU <span className="text-gradient-yellow">PROJETO?</span>
            </h2>

            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '32px' }}>
              Fale diretamente com nossa produção para comerciais, coberturas esportivas ou reels de alta conversão.
            </p>

            {/* DIRECT CONTACT INFO */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '32px' }}>
              <div style={contactItemStyle}>
                <div style={contactIconBoxStyle}>
                  <Phone style={{ width: '20px', height: '20px', color: 'var(--accent-orange)' }} />
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', display: 'block' }}>WhatsApp Direto</span>
                  <strong style={{ fontSize: '1.1rem', color: '#FFFFFF' }}>+55 11 985187954</strong>
                </div>
              </div>

              <div style={contactItemStyle}>
                <div style={contactIconBoxStyle}>
                  <Mail style={{ width: '20px', height: '20px', color: 'var(--accent-yellow)' }} />
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', display: 'block' }}>Email Comercial</span>
                  <strong style={{ fontSize: '1rem', color: '#FFFFFF' }}>contato@goudcontent.com.br</strong>
                </div>
              </div>

              <div style={contactItemStyle}>
                <div style={contactIconBoxStyle}>
                  <MapPin style={{ width: '20px', height: '20px', color: 'var(--accent-yellow)' }} />
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', display: 'block' }}>Localização</span>
                  <strong style={{ fontSize: '1rem', color: '#FFFFFF' }}>São Paulo / SP - Atendimento Brasil</strong>
                </div>
              </div>
            </div>

            {/* QUICK WHATSAPP BUTTON */}
            <a
              href={whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}
            >
              <MessageSquare style={{ width: '18px', height: '18px', fill: '#FFFFFF', flexShrink: 0 }} />
              <span>Chamar no WhatsApp</span>
            </a>
          </div>

          {/* RIGHT: SIMPLE BRIEFING FORM */}
          <div
            className="glass-panel"
            style={{
              padding: '36px',
              borderRadius: 'var(--radius-lg)'
            }}
          >
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '30px 10px' }}>
                <CheckCircle2 style={{ width: '56px', height: '56px', color: 'var(--accent-yellow)', margin: '0 auto 16px auto' }} />
                <h3 className="font-display" style={{ fontSize: '1.6rem', fontWeight: 900, color: '#FFFFFF', marginBottom: '12px' }}>
                  MENSAGEM ENVIADA!
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '20px' }}>
                  Recebemos suas informações. Entraremos em contato via WhatsApp em breve.
                </p>
                <button onClick={() => setSubmitted(false)} className="btn-secondary">
                  Enviar Outra Mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <h3 className="font-display" style={{ fontSize: '1.3rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '4px' }}>
                  CONTATO RÁPIDO
                </h3>

                <div>
                  <label style={inputLabelStyle}>Nome / Empresa *</label>
                  <input
                    type="text"
                    required
                    placeholder="Seu nome ou marca"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label style={inputLabelStyle}>WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder="(11) 98518-7954"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label style={inputLabelStyle}>Ideia do Projeto *</label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Descreva brevemente o vídeo que precisa..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{ ...inputStyle, resize: 'vertical' }}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '6px' }}>
                  <Send style={{ width: '18px', height: '18px', fill: '#FFFFFF' }} />
                  Enviar Solicitação
                </button>
              </form>
            )}
          </div>

        </div>

        {/* BOTTOM BRAND FOOTER */}
        <div
          style={{
            borderTop: '1px solid var(--border-subtle)',
            paddingTop: '28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <img
              src="/logo.jpg"
              alt="GoudContent Logo"
              style={{
                height: '36px',
                width: 'auto',
                borderRadius: '6px',
                border: '1px solid rgba(255, 199, 0, 0.3)'
              }}
            />
            <span className="font-display" style={{ fontSize: '1.1rem', fontWeight: 900, color: 'var(--text-main)' }}>
              GOUD<span style={{ color: 'var(--accent-yellow)' }}>CONTENT</span>
            </span>
          </div>

          <p style={{ fontSize: '0.82rem', color: 'var(--text-dim)' }}>
            © {new Date().getFullYear()} GoudContent Produtora. Todos os direitos reservados.
          </p>


        </div>

      </div>

      <style>{`
        @media (max-width: 868px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
};

const contactItemStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '16px'
};

const contactIconBoxStyle: React.CSSProperties = {
  width: '44px',
  height: '44px',
  borderRadius: 'var(--radius-md)',
  backgroundColor: 'var(--bg-primary)',
  border: '1px solid var(--border-subtle)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

const inputLabelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '0.82rem',
  fontWeight: 700,
  color: 'var(--text-muted)',
  marginBottom: '6px',
  fontFamily: 'var(--font-display)'
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '12px 16px',
  borderRadius: 'var(--radius-md)',
  backgroundColor: 'var(--bg-primary)',
  border: '1px solid var(--border-subtle)',
  color: 'var(--text-main)',
  fontSize: '0.9rem',
  outline: 'none',
  fontFamily: 'var(--font-main)'
};

const socialIconStyle: React.CSSProperties = {
  width: '38px',
  height: '38px',
  borderRadius: '50%',
  backgroundColor: 'var(--bg-card)',
  border: '1px solid var(--border-subtle)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'var(--text-main)',
  textDecoration: 'none',
  transition: 'all 0.2s ease'
};
