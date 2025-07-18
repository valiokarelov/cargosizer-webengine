import { TrailerSpecification } from '@/types/cargo';

export const TRAILER_SPECIFICATIONS: Record<string, TrailerSpecification> = {
  '53ft': {
    id: '53ft-dry-van',
    name: '53\' Dry Van',
    type: '53ft',
    dimensions: {
      length: 630, // 52.5 feet
      width: 102,  // 8.5 feet
      height: 110, // 9.16 feet
    },
    maxWeight: 80000, // pounds
    maxVolume: 3900,  // cubic feet
    doorHeight: 108,
    doorWidth: 100,
  },
  '48ft': {
    id: '48ft-dry-van',
    name: '48\' Dry Van',
    type: '48ft',
    dimensions: {
      length: 576, // 48 feet
      width: 102,  // 8.5 feet
      height: 110, // 9.16 feet
    },
    maxWeight: 80000, // pounds
    maxVolume: 3600,  // cubic feet
    doorHeight: 108,
    doorWidth: 100,
  },
  '40ft': {
    id: '40ft-container',
    name: '40\' Container',
    type: '40ft',
    dimensions: {
      length: 480, // 40 feet
      width: 96,   // 8 feet
      height: 102, // 8.5 feet
    },
    maxWeight: 67200, // pounds
    maxVolume: 2400,  // cubic feet
    doorHeight: 100,
    doorWidth: 94,
  },
};