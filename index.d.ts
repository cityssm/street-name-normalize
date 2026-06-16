import type { NormalizeStreetNameOptions, NormalizeStreetNameOutputCase } from './types.js';
export declare const DEFAULT_NORMALIZE_STREET_NAME_OPTIONS: NormalizeStreetNameOptions;
export declare const SSM_NORMALIZE_STREET_NAME_OPTIONS: NormalizeStreetNameOptions;
/**
 * Normalizes a street name by classifying each piece of the street name as a 'name', 'suffix', or 'type',
 * applying substitutions, and setting the proper casing.
 * @param unnormalizedStreetName The street name to normalize.
 * @param userOptionsOrOutputCase User options or output case for normalization.
 * @returns The normalized street name.
 */
export default function normalizeStreetName(unnormalizedStreetName: string, userOptionsOrOutputCase?: NormalizeStreetNameOutputCase | Partial<NormalizeStreetNameOptions>): string;
/**
 * Normalizes a Sault Ste. Marie, ON street name by classifying each piece of the street name as a 'name', 'suffix', or 'type',
 * applying substitutions, and setting the proper casing.
 * @param unnormalizedStreetName The street name to normalize.
 * @param outputCase The output case for the normalized street name.
 * @returns The normalized street name.
 */
export declare function normalizeSsmStreetName(unnormalizedStreetName: string, outputCase?: NormalizeStreetNameOutputCase): string;
/**
 * Gets alternate spellings for a street name by generating all possible combinations of
 * the original and substituted pieces of the street name.
 * @param unnormalizedStreetName The street name to get alternate spellings for.
 * @param userOptionsOrOutputCase User options or output case for generating alternate spellings.
 * @returns An array of alternate spellings for the street name.
 */
export declare function getAlternateStreetNameSpellings(unnormalizedStreetName: string, userOptionsOrOutputCase?: NormalizeStreetNameOutputCase | Partial<NormalizeStreetNameOptions>): string[];
export type { NormalizeStreetNameOptions, NormalizeStreetNameOutputCase } from './types.js';
