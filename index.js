import { applyCase, classifyStreetNamePiece, normalizeStreetNamePiece } from './helpers.js';
import { streetNameSubstitutions } from './substitutions/streetNames.js';
export const DEFAULT_OPTIONS = Object.freeze({
    classifyStreetNamePieceOverrides: {},
    namePieceSubstitutions: streetNameSubstitutions,
    outputCase: 'upper'
});
/**
 * Normalizes a street name by classifying each piece of the street name as a 'name', 'suffix', or 'type',
 * applying substitutions, and setting the proper casing.
 * @param unnormalizedStreetName The street name to normalize.
 * @param userOptionsOrOutputCase User options or output case for normalization.
 * @returns The normalized street name.
 */
export default function normalizeStreetName(unnormalizedStreetName, userOptionsOrOutputCase = {}) {
    const userOptions = typeof userOptionsOrOutputCase === 'string'
        ? { outputCase: userOptionsOrOutputCase }
        : userOptionsOrOutputCase;
    const options = { ...DEFAULT_OPTIONS, ...userOptions };
    const unnormalizedStreetNamePieces = unnormalizedStreetName.split(' ');
    const normalizedStreetNamePieces = [];
    let currentStreetNamePieceType = '';
    for (const unnormalizedStreetNamePiece of unnormalizedStreetNamePieces) {
        // Skip empty pieces
        if (unnormalizedStreetNamePiece === '') {
            continue;
        }
        // Classify the street name piece
        currentStreetNamePieceType = Object.hasOwn(options.classifyStreetNamePieceOverrides, unnormalizedStreetNamePiece.toLowerCase())
            ? options.classifyStreetNamePieceOverrides[unnormalizedStreetNamePiece.toLowerCase()]
            : classifyStreetNamePiece(unnormalizedStreetNamePiece, currentStreetNamePieceType);
        // Normalize the street name piece
        let normalizedStreetNamePiece = normalizeStreetNamePiece(unnormalizedStreetNamePiece, currentStreetNamePieceType);
        // Apply any overrides
        if (currentStreetNamePieceType === 'name' &&
            Object.hasOwn(options.namePieceSubstitutions, normalizedStreetNamePiece.toLowerCase())) {
            normalizedStreetNamePiece =
                options.namePieceSubstitutions[normalizedStreetNamePiece.toLowerCase()];
        }
        // Set the proper casing
        normalizedStreetNamePiece = applyCase(normalizedStreetNamePiece, options.outputCase);
        // Save the result
        normalizedStreetNamePieces.push(normalizedStreetNamePiece);
    }
    return normalizedStreetNamePieces.join(' ');
}
