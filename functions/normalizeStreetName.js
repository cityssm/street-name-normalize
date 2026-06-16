import { normalizeStreetNamePieces } from './normalizeStreetNamePieces.js';
/**
 * Normalizes a street name by classifying each piece of the street name as a 'name', 'suffix', or 'type',
 * applying substitutions, and setting the proper casing.
 * @param unnormalizedStreetName The street name to normalize.
 * @param userOptionsOrOutputCase User options or output case for normalization.
 * @returns The normalized street name.
 */
export default function normalizeStreetName(unnormalizedStreetName, userOptionsOrOutputCase) {
    const normalizedStreetNamePieces = normalizeStreetNamePieces(unnormalizedStreetName, userOptionsOrOutputCase);
    return normalizedStreetNamePieces.map((p) => p.piece).join(' ');
}
