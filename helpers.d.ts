import type { NormalizeStreetNameOutputCase, StreetNamePart } from './types.js';
/**
 * Classifies a piece of a street name as a 'name', 'suffix', or 'type' based on the previous piece of the street name and substitutions.
 * @param unnormalizedStreetNamePiece The piece of the street name to classify.
 * @param previousStreetNamePart The previous street name piece type.
 * @returns The street name piece type ('name', 'suffix', or 'type').
 */
export declare function classifyStreetNamePiece(unnormalizedStreetNamePiece: string, previousStreetNamePart: '' | StreetNamePart): StreetNamePart;
/**
 * Normalizes a street name piece by applying substitutions based on the piece type.
 * @param unnormalizedStreetNamePiece The piece of the street name to normalize.
 * @param streetNamePart The street name piece type ('name', 'suffix', or 'type').
 * @returns The normalized street name piece.
 */
export declare function normalizeStreetNamePiece(unnormalizedStreetNamePiece: string, streetNamePart: StreetNamePart): string;
/**
 * Applies the specified case to a normalized street name piece.
 * @param normalizedStreetNamePiece The normalized street name piece to apply the case to.
 * @param outputCase The output case to apply ('input', 'proper', or 'upper').
 * @returns The normalized street name piece with the specified case applied.
 */
export declare function applyCase(normalizedStreetNamePiece: string, outputCase: NormalizeStreetNameOutputCase): string;
