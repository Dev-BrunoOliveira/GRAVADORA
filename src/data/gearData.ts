import type { TechGearItem, MetricItem } from '../types';

export const TECH_GEAR: TechGearItem[] = [
  {
    id: 'red-v-raptor',
    name: 'RED V-Raptor 8K VV',
    category: 'Cinema Camera',
    badge: '8K 120FPS / RAW',
    description: 'Sensor Full-Frame ultra sensível com alcance dinâmico de 17+ stops. Ideal para capturar os menores detalhes de suor, movimento muscular e paisagens extremas.',
    specs: ['8K RAW até 120fps', '4K RAW até 240fps', 'Global Shutter sem rolling Distortion'],
    imageUrl: 'https://images.unsplash.com/photo-1512790182412-b19e6d61b397?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'fpv-drone-cinema',
    name: 'Custom FPV CineWhoop 5" & 7"',
    category: 'Drone de Ação',
    badge: '140 km/h FPV Aerial',
    description: 'Drones customizados montados para perseguir atletas de alta velocidade (ciclistas, maratonistas, downhill) a milímetros de distância com estabilização Giroflow.',
    specs: ['Velocidade máxima de 140km/h', 'Transmissão digital HD com zero latência', 'Resistente a vento forte e chuva leve'],
    imageUrl: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sony-fx6-fx3',
    name: 'Sony FX6 & FX3 Cinema Line',
    category: 'Run & Gun Rig',
    badge: 'Dual Native ISO / 4K 120p',
    description: 'Rigs ágeis de cinema para gravações dinâmicas em movimento. Desempenho absurdo em baixa luz para corridas noturnas e eventos sob iluminação técnica.',
    specs: ['Autofocus em tempo real com acompanhamento de olhos', 'Filtro ND Variável Eletrônico', 'Perfil S-Cine-tone & S-Log3'],
    imageUrl: 'https://images.unsplash.com/photo-1585856467700-de50660fdb3e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'pursuit-car-rig',
    name: 'DJI RS3 Pro + Car Mount Pursuit',
    category: 'Estabilização de Alta Velocidade',
    badge: 'Gimbal 4.5kg Payload',
    description: 'Sistema de ventosas magnéticas industriais acopladas em veículos e motos de filmagem para acompanhar ciclistas e atletas em asfalto ou terra.',
    specs: ['Motores de torque elevado Focus & Zoom', 'Transmissão sem fio DJI Transmission', 'Zero vibração em terrenos irregulares'],
    imageUrl: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80'
  }
];

export const AGENCY_METRICS: MetricItem[] = [
  {
    label: 'Quilômetros Captação',
    value: '150k+',
    unit: 'km',
    description: 'Percorridos em montanhas, pistas e estúdios gravando esportes.'
  },
  {
    label: 'Taxa de FPS Máxima',
    value: '240',
    unit: 'fps',
    description: 'Super Câmera Lenta em 4K nativo para análise dramática de cena.'
  },
  {
    label: 'Campanhas Gravadas',
    value: '85+',
    unit: 'projetos',
    description: 'Para grandes marcas de vestuário e equipamentos esportivos.'
  },
  {
    label: 'Alcance de Visualizações',
    value: '25M+',
    unit: 'views',
    description: 'Gerados nas redes sociais e comerciais de TV dos nossos clientes.'
  }
];
