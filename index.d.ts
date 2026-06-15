import type { NormalizeStreetNameOptions, NormalizeStreetNameOutputCase } from './types.js';
export declare const DEFAULT_OPTIONS: NormalizeStreetNameOptions;
export default function normalizeStreetName(unnormalizedStreetName: string, userOptionsOrOutputCase?: NormalizeStreetNameOutputCase | Partial<NormalizeStreetNameOptions>): string;
export type { NormalizeStreetNameOptions, NormalizeStreetNameOutputCase } from './types.js';
