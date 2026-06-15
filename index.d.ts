import type { NormalizeStreetNameOptions, NormalizeStreetNameOutputCase } from './types.js';
export declare const DEFAULT_OPTIONS: NormalizeStreetNameOptions;
/**
 * Normalizes a street name by classifying each piece of the street name as a 'name', 'suffix', or 'type',
 * applying substitutions, and setting the proper casing.
 * @param unnormalizedStreetName The street name to normalize.
 * @param userOptionsOrOutputCase User options or output case for normalization.
 * @returns The normalized street name.
 */
export default function normalizeStreetName(unnormalizedStreetName: string, userOptionsOrOutputCase?: NormalizeStreetNameOutputCase | Partial<NormalizeStreetNameOptions>): string;
export type { NormalizeStreetNameOptions, NormalizeStreetNameOutputCase } from './types.js';
