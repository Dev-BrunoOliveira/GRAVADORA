import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MetricsMarquee } from './components/MetricsMarquee';
import { PortfolioShowcase } from './components/PortfolioShowcase';
import { KineticScrollSection } from './components/KineticScrollSection';
import { BudgetSlider } from './components/BudgetSlider';
import { ContactFooter } from './components/ContactFooter';
import { VideoModal } from './components/VideoModal';

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

  const handleOpenPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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

      {/* HERO SECTION */}
      <Hero
        onOpenPortfolio={handleOpenPortfolio}
        onOpenEstimator={handleOpenEstimator}
      />

      {/* METRICS & MARQUEE */}
      <MetricsMarquee />

      {/* PORTFOLIO SHOWCASE SECTION WITH VIDEOS */}
      <PortfolioShowcase onSelectProject={setSelectedProject} />

      {/* KINETIC SCROLL SECTION */}
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
