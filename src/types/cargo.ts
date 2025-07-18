export interface Package {
  id: string;
  name: string;
  dimensions: {
    length: number; // inches
    width: number;  // inches
    height: number; // inches
  };
  weight: number; // pounds
  quantity: number;
  category?: PackageCategory;
  fragile?: boolean;
  stackable?: boolean;
  rotatable?: boolean;
}

export interface PlacedPackage extends Package {
  position: {
    x: number;
    y: number;
    z: number;
  };
  rotation?: {
    x: number;
    y: number;
    z: number;
  };
}

export interface TrailerSpecification {
  id: string;
  name: string;
  type: '53ft' | '48ft' | '40ft' | 'custom';
  dimensions: {
    length: number; // inches
    width: number;  // inches
    height: number; // inches
  };
  maxWeight: number; // pounds
  maxVolume: number; // cubic feet
  doorHeight?: number;
  doorWidth?: number;
}

export interface LoadedTrailer {
  id: string;
  specification: TrailerSpecification;
  packages: PlacedPackage[];
  utilization: {
    weight: number;
    volume: number;
    weightPercent: number;
    volumePercent: number;
  };
  loadingSequence?: PlacedPackage[];
}

export interface OptimizationResult {
  trailers: LoadedTrailer[];
  totalPackages: number;
  totalWeight: number;
  totalVolume: number;
  efficiency: number;
  warnings: string[];
  recommendations: string[];
}

export type PackageCategory = 
  | 'electronics'
  | 'furniture'
  | 'appliances'
  | 'textiles'
  | 'automotive'
  | 'industrial'
  | 'food'
  | 'other';

export type OptimizationAlgorithm = 
  | 'best-fit'
  | 'first-fit'
  | 'genetic'
  | 'weight-balanced';