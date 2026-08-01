import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MetricsMarquee } from './components/MetricsMarquee';
import { KineticScrollSection } from './components/KineticScrollSection';
import { BudgetSlider } from './components/BudgetSlider';
import { ContactFooter } from './components/ContactFooter';
import { VideoModal } from './components/VideoModal';

import { PORTFOLIO_PROJECTS } from './data/portfolioData';
import type { VideoProject } from './types';

export function App() {
  const [selectedProject, setSelectedProject] = useState<VideoProject | null>(null);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handlePlayFeatured = () => {
    const featured = PORTFOLIO_PROJECTS.find(p => p.featured) || PORTFOLIO_PROJECTS[0];
    setSelectedProject(featured);
  };

  const handleOpenEstimator = () => {
    const element = document.getElementById('orcamento-slider');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg-primary)', color: 'var(--text-main)', transition: 'background-color 0.3s ease' }}>
      {/* HEADER */}
      <Header
        onOpenEstimator={handleOpenEstimator}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* HERO SECTION WITH RUN.MP4 BACKGROUND */}
      <Hero
        onPlayFeatured={handlePlayFeatured}
        onOpenEstimator={handleOpenEstimator}
      />

      {/* METRICS & MARQUEE */}
      <MetricsMarquee />

      {/* KINETIC SCROLL SECTION (CONTROLADO PELO SCROLL DO USUÁRIO COM RUN.MP4) */}
      <KineticScrollSection />

      {/* SLIDER DE ORÇAMENTO COM DIRECIONAMENTO PARA WHATSAPP (+55 11 985187954) */}
      <BudgetSlider />

      {/* CONTATO & RODAPÉ */}
      <ContactFooter />

      {/* SHOWREEL VIDEO MODAL */}
      <VideoModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenEstimator={handleOpenEstimator}
      />
    </div>
  );
}

export default App;
