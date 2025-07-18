// Re-export all types
export * from './cargo';

// Global types
export interface BaseEntity {
  id: string;
  createdAt?: Date;
  updatedAt?: Date;
}