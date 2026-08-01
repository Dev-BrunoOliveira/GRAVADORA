import React from "react";
import { AGENCY_METRICS } from "../data/gearData";

export const MetricsMarquee: React.FC = () => {
  const marqueeItems = [
    "COBERTURA DE GRANDES EVENTOS",
    "MARCAS DE PERFORMANCE",
    "EVENTOS PRIVADOS",
    "FPV AERIAL TRACKING",
    "REAL TIME",
    "STORY MAKER",
    "PROFISSIONAIS QUALIFICADOS",
    "EQUIPAMENTOS DE PONTA",
  ];

  return (
    <section
      style={{
        backgroundColor: "var(--bg-primary)",
        overflow: "hidden",
        padding: "40px 0",
      }}
    >
      {/* INFINITE MARQUEE TICKER */}
      <div
        style={{
          background: "linear-gradient(90deg, #FFC700 0%, #FF4500 100%)",
          padding: "16px 0",
          transform: "rotate(-1deg)",
          margin: "20px 0 60px 0",
        }}
      >
        <div
          className="animate-marquee"
          style={{
            whiteSpace: "nowrap",
            display: "flex",
            alignItems: "center",
          }}
        >
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span
              key={index}
              className="font-display"
              style={{
                fontSize: "1.25rem",
                fontWeight: 900,
                color: "#000000",
                marginRight: "48px",
                letterSpacing: "2px",
                display: "inline-flex",
                alignItems: "center",
                gap: "16px",
              }}
            >
              <span>⚡</span> {item}
            </span>
          ))}
        </div>
      </div>

      {/* METRICS GRID */}
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "24px",
          }}
        >
          {AGENCY_METRICS.map((metric, idx) => (
            <div
              key={idx}
              className="glass-panel"
              style={{
                padding: "32px 24px",
                position: "relative",
                overflow: "hidden",
                borderRadius: "var(--radius-lg)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "-20px",
                  right: "-20px",
                  width: "90px",
                  height: "90px",
                  borderRadius: "50%",
                  background:
                    idx % 2 === 0
                      ? "rgba(255, 199, 0, 0.08)"
                      : "rgba(255, 69, 0, 0.08)",
                  filter: "blur(20px)",
                }}
              />
              <div
                className="font-display"
                style={{
                  fontSize: "3.2rem",
                  fontWeight: 900,
                  lineHeight: 1,
                  marginBottom: "8px",
                  color:
                    idx % 2 === 0
                      ? "var(--accent-yellow)"
                      : "var(--accent-orange)",
                }}
              >
                {metric.value}
                {metric.unit && (
                  <span
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: 700,
                      marginLeft: "4px",
                      color: "var(--text-muted)",
                    }}
                  >
                    {metric.unit}
                  </span>
                )}
              </div>
              <h3
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 800,
                  color: "var(--text-main)",
                  marginBottom: "8px",
                }}
              >
                {metric.label}
              </h3>
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "var(--text-muted)",
                  lineHeight: 1.5,
                }}
              >
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
