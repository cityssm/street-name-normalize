import type { NormalizeStreetNameOptions, StreetNamePart } from '../types.js';
/**
 * Normalizes the pieces of a street name by classifying each piece as a 'name', 'suffix', or 'type',
 * applying substitutions, and setting the proper casing.
 * @param unnormalizedStreetName The street name to normalize.
 * @param userOptions User options for normalization.
 * @returns An array of objects containing the normalized pieces of the street name and their types.
 */
export declare function normalizeStreetNamePieces(unnormalizedStreetName: string, userOptions: NormalizeStreetNameOptions): Array<{
    piece: string;
    type: StreetNamePart;
}>;
