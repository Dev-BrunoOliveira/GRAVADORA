import type { ServiceItem, EstimatorOption } from '../types';

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'commercial-campaigns',
    title: 'Campanhas de Lançamento de Produtos',
    description: 'Filmes institucionais e comerciais focados em alta estética para lançamento de novos tênis, roupas técnicas e equipamentos esportivos.',
    tag: 'Estética & Conversão',
    icon: 'Film',
    features: [
      'Direção de cena e casting de atletas reais',
      'Roteiro dinâmico focado em emoção e superação',
      'Color grading cinematográfico estilo cinema outdoor',
      'Entregáveis em múltiplos formatos (16:9 TV, 9:16 Reels/TikTok)'
    ],
    sampleHighlight: 'Utilizado por grandes marcas de vestuário e calçados.'
  },
  {
    id: 'fpv-action-tracking',
    title: 'Captação Aérea FPV de Alta Velocidade',
    description: 'Imersão total com drones FPV perseguindo ciclistas, carros de apoio e maratonistas em ângulos impossíveis para câmeras convencionais.',
    tag: 'Movimento Sem Limites',
    icon: 'Zap',
    features: [
      'Pilotos certificados com mais de 500h de voo extremo',
      'Gravação interna RAW de alta taxa de bits',
      'Manobras contínuas de 360 graus e aproximação ultra-próxima',
      'Estabilização de alto padrão Giroflow/ReelSteady'
    ],
    sampleHighlight: 'Ideal para ciclismo, MTB downhill, corridas e esportes aquáticos.'
  },
  {
    id: 'high-speed-motion',
    title: 'Cinematografia Ultra Câmera Lenta (120/240 FPS)',
    description: 'Destaque cada detalhe técnico da performance física: o impacto da passada no solo, gotas de água, tensão muscular e fluidez do tecido.',
    tag: 'Detalhamento Técnico',
    icon: 'Activity',
    features: [
      'Gravação nativa em 4K 120fps e 240fps sem interpolação',
      'Iluminação contínua Flicker-Free de alta potência',
      'Design de som imersivo (Foley de corrida, respiração, passos)',
      'Análise em câmera lenta estilo transmissão esportiva'
    ],
    sampleHighlight: 'Perfeito para comerciais de alta precisão e vestuário esportivo.'
  },
  {
    id: 'event-coverage-doc',
    title: 'Documentários de Provas & Coberturas',
    description: 'Registro épico de maratonas, triathlons, desafios de montanha e eventos da comunidade com storytelling envolvente.',
    tag: 'Storytelling Real',
    icon: 'Trophy',
    features: [
      'Equipe móvel distribuída em pontos estratégicos do percurso',
      'Edição rápida (Same-Day Edit) para redes sociais durante o evento',
      'Captação de áudio direto e depoimentos em tempo real',
      'Mini documentário oficial pós-evento em 4K'
    ],
    sampleHighlight: 'Para organizadores de provas, festivais ao ar livre e maratonas.'
  }
];

export const ESTIMATOR_SPORTS: EstimatorOption[] = [
  { id: 'outdoor', name: 'Trilha / Trail Run / Montanha', priceMultiplier: 1.3, description: 'Exige logística de montanha e equipamento portátil' },
  { id: 'cycling', name: 'Ciclismo / Asfalto / MTB', priceMultiplier: 1.4, description: 'Requer car-pursuit e tracking FPV' },
  { id: 'gym', name: 'Crossfit / Academia / Estúdio', priceMultiplier: 1.0, description: 'Set controlado com iluminação técnica RGB' },
  { id: 'city-run', name: 'Corrida Urbana / Maratona', priceMultiplier: 1.2, description: 'Permissões de via pública e cobertura rápida' },
];

export const ESTIMATOR_STYLES: EstimatorOption[] = [
  { id: 'hero-commercial', name: 'Comercial de Impacto (Filme Principal 60s)', priceMultiplier: 1.5, description: 'Roteiro completo, color grading e sound design avançado' },
  { id: 'social-pack', name: 'Pack de Reels/TikTok (5 a 10 vídeos 9:16)', priceMultiplier: 1.2, description: 'Cortes dinâmicos focados em redes sociais' },
  { id: 'fpv-special', name: 'Voo FPV Exclusivo + Master Cut', priceMultiplier: 1.3, description: 'Captação aérea acrobática de alta precisão' },
  { id: 'full-doc', name: 'Documentário de Marca / Atleta', priceMultiplier: 1.8, description: 'Entrevistas, arquivo e narrativa de superação' },
];
