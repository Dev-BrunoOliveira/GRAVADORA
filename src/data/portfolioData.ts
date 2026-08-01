import type { VideoProject } from '../types';

export const PORTFOLIO_PROJECTS: VideoProject[] = [
  {
    id: 'goud-official-showreel',
    title: 'GoudContent Showreel: Movimento & Performance',
    client: 'GoudContent Sports Video House',
    category: 'outdoor',
    categoryLabel: 'Showreel Oficial',
    thumbnailUrl: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1200&q=80',
    videoUrl: '/run.mp4',
    duration: '1:30',
    resolution: '4K Cinema',
    fps: '240 FPS Slow-Mo',
    gearUsed: ['RED V-Raptor 8K', 'FPV CineWhoop Drone', 'Gimbal DJI RS3 Pro'],
    description: 'Filme institucional capturando a essência de velocidade, atletas de alta resistência e equipamentos esportivos em ação.',
    featured: true,
    metrics: {
      views: '2.5M+',
      engagement: '14.8%',
      productionDays: '3 dias'
    }
  }
];
