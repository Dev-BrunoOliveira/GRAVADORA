export type CategoryType = 'all' | 'outdoor' | 'cycling' | 'gym' | 'ads' | 'events';

export interface VideoProject {
  id: string;
  title: string;
  client: string;
  category?: Exclude<CategoryType, 'all'>;
  categoryLabel?: string;
  thumbnailUrl: string;
  videoUrl: string;
  aspectRatio?: '9/16' | '16/9' | 'vertical' | 'horizontal' | string;
  orientation?: 'vertical' | 'horizontal';
  duration?: string;
  resolution?: string;
  fps?: string;
  gearUsed?: string[];
  description: string;
  featured?: boolean;
  metrics?: {
    views?: string;
    engagement?: string;
    productionDays?: string;
  };
}

export interface TechGearItem {
  id: string;
  name: string;
  category: string;
  badge: string;
  description: string;
  specs: string[];
  imageUrl: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  tag: string;
  icon: string;
  features: string[];
  sampleHighlight: string;
}

export interface MetricItem {
  label: string;
  value: string;
  unit?: string;
  description: string;
}

export interface EstimatorOption {
  id: string;
  name: string;
  priceMultiplier: number;
  description: string;
}
