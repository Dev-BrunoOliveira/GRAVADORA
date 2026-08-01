import React, { useRef, useEffect, useState } from "react";
import { Flame, Zap, Gauge } from "lucide-react";

export const KineticScrollSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [speedKmh, setSpeedKmh] = useState(12.4);

  const targetTimeRef = useRef(0);
  const animationFrameRef = useRef<number | null>(null);
  const isVideoUnlockedRef = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.pause();

    const unlockVideo = () => {
      if (isVideoUnlockedRef.current || !video) return;
      video
        .play()
        .then(() => {
          video.pause();
          isVideoUnlockedRef.current = true;
        })
        .catch(() => {});
    };

    const updateScrollProgress = () => {
      if (!containerRef.current || !video) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalHeight = rect.height - windowHeight;

      if (totalHeight <= 0) return;

      const currentScroll = Math.max(0, -rect.top);
      const progress = Math.min(1, Math.max(0, currentScroll / totalHeight));

      setScrollProgress(progress);
      setSpeedKmh(Number((12.4 + progress * 28.6).toFixed(1)));

      if (video.duration && !isNaN(video.duration)) {
        targetTimeRef.current = progress * video.duration;
      }
    };

    let lastSeekTime = 0;
    const smoothVideoSeek = () => {
      if (video && video.duration && !isNaN(video.duration)) {
        const targetTime = targetTimeRef.current;
        const diff = Math.abs(video.currentTime - targetTime);
        const now = performance.now();

        const isTouch =
          "ontouchstart" in window || navigator.maxTouchPoints > 0;
        const minSeekInterval = isTouch ? 32 : 16;

        if (
          diff > 0.02 &&
          !video.seeking &&
          now - lastSeekTime >= minSeekInterval
        ) {
          lastSeekTime = now;

          if (
            "fastSeek" in video &&
            typeof (video as any).fastSeek === "function"
          ) {
            try {
              (video as any).fastSeek(targetTime);
            } catch {
              video.currentTime = targetTime;
            }
          } else {
            video.currentTime = targetTime;
          }
        }
      }

      animationFrameRef.current = requestAnimationFrame(smoothVideoSeek);
    };

    const handleLoadedMetadata = () => {
      if (video && video.duration && !isNaN(video.duration)) {
        targetTimeRef.current = scrollProgress * video.duration;
      }
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);

    const onScroll = () => {
      unlockVideo();
      updateScrollProgress();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("touchmove", onScroll, { passive: true });
    window.addEventListener("touchstart", unlockVideo, {
      passive: true,
      once: true,
    });

    updateScrollProgress();
    animationFrameRef.current = requestAnimationFrame(smoothVideoSeek);

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("touchmove", onScroll);
      window.removeEventListener("touchstart", unlockVideo);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={containerRef}
      style={{
        position: "relative",
        height: "240vh",
        backgroundColor: "#000000",
        color: "#FFFFFF",
      }}
    >
      {/* STICKY FULLSCREEN VIDEO CANVAS */}
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          minHeight: "100dvh",
          width: "100%",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* VIDEO SCRUBBING BG - ABSOLUTE FULLSCREEN */}
        <video
          ref={videoRef}
          src="/run.mp4"
          muted
          playsInline
          // @ts-ignore
          webkit-playsinline="true"
          preload="auto"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: `contrast(${1 + scrollProgress * 0.25}) brightness(${0.9 - scrollProgress * 0.2})`,
            transform: `scale(${1 + scrollProgress * 0.12})`,
            transition: "transform 0.1s ease-out",
          }}
        />

        {/* CINEMATIC GRADIENT OVERLAYS */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.85) 90%)",
            pointerEvents: "none",
          }}
        />

        {/* HUD TELEMETRY OVERLAY */}
        <div
          style={{
            position: "absolute",
            top: "16px",
            left: "16px",
            right: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "8px",
            zIndex: 10,
            pointerEvents: "none",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span
              className="animate-rec"
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "var(--accent-orange)",
              }}
            />
            <span
              className="font-display"
              style={{
                fontSize: "0.72rem",
                fontWeight: 800,
                letterSpacing: "1px",
                color: "var(--accent-yellow)",
              }}
            >
              SCROLL REEL • RUN.MP4
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                fontSize: "0.75rem",
                color: "#FFFFFF",
                fontWeight: 700,
              }}
            >
              <Gauge
                style={{
                  width: "14px",
                  height: "14px",
                  color: "var(--accent-yellow)",
                }}
              />
              <span>{speedKmh} KM/H</span>
            </div>
            <div
              style={{
                fontSize: "0.72rem",
                color: "var(--text-muted)",
                fontFamily: "monospace",
              }}
            >
              F:{Math.floor(scrollProgress * 240)}/240
            </div>
          </div>
        </div>

        {/* DYNAMIC SCROLL TEXT CONTAINER - CENTERED ABSOLUTE OVERLAY */}
        <div
          style={{
            position: "relative",
            zIndex: 20,
            textAlign: "center",
            maxWidth: "780px",
            width: "100%",
            height: "280px",
            padding: "0 20px",
            boxSizing: "border-box",
            pointerEvents: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* STAGE 1: INITIAL SCROLL TEXT */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "0 16px",
              boxSizing: "border-box",
              opacity: scrollProgress < 0.35 ? 1 - scrollProgress * 2.8 : 0,
              transform: `translateY(${-scrollProgress * 60}px)`,
              transition: "opacity 0.2s ease, transform 0.2s ease",
            }}
          >
            <div
              className="badge-tag"
              style={{ marginBottom: "12px", display: "inline-flex" }}
            >
              <Flame style={{ width: "14px", height: "14px" }} />
              Scroll Interativo em Ação
            </div>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(1.5rem, 5.5vw, 3.2rem)",
                fontWeight: 900,
                lineHeight: 1.15,
                wordBreak: "break-word",
                overflowWrap: "break-word",
                marginBottom: "10px",
              }}
            >
              DESLIZE PARA{" "}
              <span className="text-gradient-yellow">CONTROLAR A CENA</span>
            </h2>
            <p
              style={{
                color: "var(--text-muted)",
                fontSize: "clamp(0.88rem, 2.8vw, 1.1rem)",
                lineHeight: 1.5,
              }}
            >
              O movimento da sua tela controla o tempo e a velocidade da
              gravação em tempo real.
            </p>
          </div>

          {/* STAGE 2: MID SCROLL TELEMETRY TEXT */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "0 16px",
              boxSizing: "border-box",
              opacity: scrollProgress >= 0.35 && scrollProgress < 0.7 ? 1 : 0,
              transform: `scale(${scrollProgress >= 0.35 && scrollProgress < 0.7 ? 1 : 0.9})`,
              transition: "all 0.3s ease",
            }}
          >
            <div
              className="badge-tag badge-orange"
              style={{ marginBottom: "12px", display: "inline-flex" }}
            >
              <Zap style={{ width: "14px", height: "14px" }} />
              240 FPS High Speed Action
            </div>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(1.5rem, 5.5vw, 3.2rem)",
                fontWeight: 900,
                lineHeight: 1.15,
                wordBreak: "break-word",
                overflowWrap: "break-word",
                marginBottom: "10px",
              }}
            >
              CAPTURA DE{" "}
              <span className="text-gradient-yellow">ALTO IMPACTO</span>
            </h2>
            <p
              style={{
                color: "#FFFFFF",
                fontSize: "clamp(0.88rem, 2.8vw, 1.1rem)",
                lineHeight: 1.5,
                fontWeight: 600,
              }}
            >
              Cada passada, textura e tensão muscular registrada em câmera ultra
              lenta.
            </p>
          </div>

          {/* STAGE 3: FINAL SCROLL CTA TEXT */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "0 16px",
              boxSizing: "border-box",
              opacity: scrollProgress >= 0.7 ? 1 : 0,
              transform: `translateY(${(1 - scrollProgress) * 40}px)`,
              transition: "all 0.3s ease",
            }}
          >
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(1.5rem, 5.5vw, 3.2rem)",
                fontWeight: 900,
                lineHeight: 1.15,
                wordBreak: "break-word",
                overflowWrap: "break-word",
                marginBottom: "10px",
              }}
            >
              PRONTO PARA{" "}
              <span className="text-gradient-yellow">GRAVAR SUA MARCA?</span>
            </h2>
            <p
              style={{
                color: "var(--text-muted)",
                fontSize: "clamp(0.88rem, 2.8vw, 1.1rem)",
                lineHeight: 1.5,
              }}
            >
              Simule o valor do seu investimento abaixo e receba atendimento
              direto via WhatsApp.
            </p>
          </div>
        </div>

        {/* BOTTOM PROGRESS BAR */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "4px",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            zIndex: 30,
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${scrollProgress * 100}%`,
              backgroundColor: "var(--accent-yellow)",
              transition: "width 0.1s linear",
            }}
          />
        </div>
      </div>
    </section>
  );
};
