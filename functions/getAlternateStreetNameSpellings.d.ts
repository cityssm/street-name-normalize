import type { NormalizeStreetNameOptions } from '../types.js';
/**
 * Gets alternate spellings for a street name by generating all possible combinations of
 * the original and substituted pieces of the street name.
 * @param unnormalizedStreetName The street name to get alternate spellings for.
 * @param userOptions User options for generating alternate spellings.
 * @returns An array of alternate spellings for the street name.
 */
export default function getAlternateStreetNameSpellings(unnormalizedStreetName: string, userOptions: NormalizeStreetNameOptions): string[];
