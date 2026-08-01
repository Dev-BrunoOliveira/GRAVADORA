import React from "react";
import { Play, ArrowRight, ShieldCheck, Zap, Video } from "lucide-react";

interface HeroProps {
  onPlayFeatured: () => void;
  onOpenEstimator: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onPlayFeatured,
  onOpenEstimator,
}) => {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "84vh",
        paddingTop: "130px",
        paddingBottom: "60px",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background:
          "radial-gradient(circle at 50% 30%, rgba(255, 199, 0, 0.07) 0%, rgba(255, 69, 0, 0.03) 45%, var(--bg-primary) 85%)",
      }}
    >
      <div
        className="container"
        style={{ position: "relative", zIndex: 10, width: "100%" }}
      >
        <div
          style={{ maxWidth: "940px", margin: "0 auto", textAlign: "center" }}
        >
          {/* MAIN HEADLINE */}
          <h1
            className="font-display"
            style={{
              fontSize: "clamp(2.4rem, 6vw, 5rem)",
              fontWeight: 900,
              lineHeight: 1.08,
              letterSpacing: "-1px",
              marginBottom: "24px",
            }}
          >
            CRIAMOS CONEXÕES ATRAVÉS{" "}
            <span className="text-gradient-yellow">DO AUDIOVISUAL</span>
          </h1>

          {/* SUBTITLE */}
          <p
            style={{
              fontSize: "clamp(1rem, 1.8vw, 1.25rem)",
              color: "var(--text-muted)",
              maxWidth: "750px",
              margin: "0 auto 38px auto",
              fontWeight: 400,
              lineHeight: 1.6,
            }}
          >
            Somos a{" "}
            <strong style={{ color: "var(--text-main)" }}>GoudContent</strong>:
            produtora audiovisual focada em capturar a alta velocidade, estética
            urbana/outdoor e produtos esportivos para marcas de alta
            performance.
          </p>

          {/* CTA BUTTONS */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "16px",
              flexWrap: "wrap",
              marginBottom: "50px",
            }}
          >
            <button onClick={onPlayFeatured} className="btn-primary">
              <Play
                style={{ width: "18px", height: "18px", fill: "#FFFFFF" }}
              />
              Ver Showreel 2026
            </button>
            <button onClick={onOpenEstimator} className="btn-secondary">
              Simular Orçamento
              <ArrowRight style={{ width: "18px", height: "18px" }} />
            </button>
          </div>

          {/* FLOATING SPECS BADGES */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "14px",
              padding: "20px",
              borderRadius: "var(--radius-lg)",
              background: "var(--bg-card)",
              backdropFilter: "blur(16px)",
              border: "1px solid var(--border-subtle)",
            }}
          >
            <div style={specBadgeStyle}>
              <Zap
                style={{
                  width: "20px",
                  height: "20px",
                  color: "var(--accent-yellow)",
                  flexShrink: 0,
                }}
              />
              <div style={{ textAlign: "left" }}>
                <span
                  style={{
                    display: "block",
                    fontSize: "0.9rem",
                    fontWeight: 800,
                  }}
                >
                  240 FPS Super Slow
                </span>
                <span
                  style={{ fontSize: "0.73rem", color: "var(--text-muted)" }}
                >
                  Detalhamento ultra slow
                </span>
              </div>
            </div>

            <div style={specBadgeStyle}>
              <Video
                style={{
                  width: "20px",
                  height: "20px",
                  color: "var(--accent-orange)",
                  flexShrink: 0,
                }}
              />
              <div style={{ textAlign: "left" }}>
                <span
                  style={{
                    display: "block",
                    fontSize: "0.9rem",
                    fontWeight: 800,
                  }}
                >
                  Expereiência 4K Cinema
                </span>
                <span
                  style={{ fontSize: "0.73rem", color: "var(--text-muted)" }}
                >
                  Qualidade cinematográfica em cada frame
                </span>
              </div>
            </div>

            <div style={specBadgeStyle}>
              <ShieldCheck
                style={{
                  width: "20px",
                  height: "20px",
                  color: "var(--accent-yellow)",
                  flexShrink: 0,
                }}
              />
              <div style={{ textAlign: "left" }}>
                <span
                  style={{
                    display: "block",
                    fontSize: "0.9rem",
                    fontWeight: 800,
                  }}
                >
                  FPV Drone Tracking
                </span>
                <span
                  style={{ fontSize: "0.73rem", color: "var(--text-muted)" }}
                >
                  Captação até 140km/h
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const specBadgeStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "12px",
  padding: "12px 14px",
  borderRadius: "var(--radius-md)",
  backgroundColor: "var(--bg-surface)",
  border: "1px solid var(--border-subtle)",
};
