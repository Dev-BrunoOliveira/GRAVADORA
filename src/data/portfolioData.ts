import type { VideoProject } from '../types';

export const PORTFOLIO_PROJECTS: VideoProject[] = [
  {
    id: 'video-look-1',
    title: 'Look Film #1',
    client: 'GoudContent',
    aspectRatio: '9/16', // Formato vertical mobile (9:16)
    thumbnailUrl: '/LeblonJames.jfif',
    videoUrl: '/look.MOV',
    description: 'Produção audiovisual mobile em formato vertical (9:16), pronta para exibição.',
    featured: true,
  },
  {
    id: 'video-look-2',
    title: 'Look Film #2',
    client: 'GoudContent',
    aspectRatio: '9/16', // Formato vertical mobile (9:16)
    thumbnailUrl: '/LeblonJames.jfif',
    videoUrl: '/look.MOV',
    description: 'Produção audiovisual mobile em formato vertical (9:16), pronta para exibição.',
  },
  {
    id: 'video-showreel-run',
    title: 'GoudContent Showreel',
    client: 'GoudContent Produtora',
    aspectRatio: '16/9', // Formato horizontal (16:9)
    thumbnailUrl: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1200&q=80',
    videoUrl: '/run.mp4',
    description: 'Filme institucional capturando a essência de velocidade e movimento.',
  },
  {
    id: 'video-showreel-run',
    title: 'GoudContent Showreel',
    client: 'GoudContent Produtora',
    aspectRatio: '16/9', // Formato horizontal (16:9)
    thumbnailUrl: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1200&q=80',
    videoUrl: '/run.mp4',
    description: 'Filme institucional capturando a essência de velocidade e movimento.',
  },
  {
    id: 'video-showreel-run',
    title: 'GoudContent Showreel',
    client: 'GoudContent Produtora',
    aspectRatio: '16/9', // Formato horizontal (16:9)
    thumbnailUrl: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1200&q=80',
    videoUrl: '/run.mp4',
    description: 'Filme institucional capturando a essência de velocidade e movimento.',
  }
];
