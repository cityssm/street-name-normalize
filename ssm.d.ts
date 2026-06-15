import type { NormalizeStreetNameOutputCase } from './types.js';
/**
 * Normalizes a street name by classifying each piece of the street name as a 'name', 'suffix', or 'type',
 * applying substitutions, and setting the proper casing.
 * @param unnormalizedStreetName The street name to normalize.
 * @param outputCase The output case for the normalized street name.
 * @returns The normalized street name.
 */
export default function normalizeSsmStreetName(unnormalizedStreetName: string, outputCase?: NormalizeStreetNameOutputCase): string;
export type { NormalizeStreetNameOptions, NormalizeStreetNameOutputCase } from './types.js';
