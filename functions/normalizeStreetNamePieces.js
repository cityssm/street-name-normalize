import { applyCase, classifyStreetNamePiece, normalizeStreetNamePiece } from '../helpers.js';
/**
 * Normalizes the pieces of a street name by classifying each piece as a 'name', 'suffix', or 'type',
 * applying substitutions, and setting the proper casing.
 * @param unnormalizedStreetName The street name to normalize.
 * @param userOptions User options for normalization.
 * @returns An array of objects containing the normalized pieces of the street name and their types.
 */
export function normalizeStreetNamePieces(unnormalizedStreetName, userOptions) {
    const unnormalizedStreetNamePieces = unnormalizedStreetName.split(' ');
    const normalizedStreetNamePieces = [];
    let currentStreetNamePieceType = '';
    for (const unnormalizedStreetNamePiece of unnormalizedStreetNamePieces) {
        // Skip empty pieces
        if (unnormalizedStreetNamePiece === '') {
            continue;
        }
        // Classify the street name piece
        currentStreetNamePieceType = Object.hasOwn(userOptions.classifyStreetNamePieceOverrides, unnormalizedStreetNamePiece.toLowerCase())
            ? userOptions.classifyStreetNamePieceOverrides[unnormalizedStreetNamePiece.toLowerCase()]
            : classifyStreetNamePiece(unnormalizedStreetNamePiece, currentStreetNamePieceType);
        // Normalize the street name piece
        let normalizedStreetNamePiece = normalizeStreetNamePiece(unnormalizedStreetNamePiece, currentStreetNamePieceType);
        // Apply any overrides
        if (currentStreetNamePieceType === 'name' &&
            Object.hasOwn(userOptions.namePieceSubstitutions, normalizedStreetNamePiece.toLowerCase())) {
            normalizedStreetNamePiece =
                userOptions.namePieceSubstitutions[normalizedStreetNamePiece.toLowerCase()];
        }
        // Set the proper casing
        normalizedStreetNamePiece = applyCase(normalizedStreetNamePiece, userOptions.outputCase);
        // Save the result
        normalizedStreetNamePieces.push({
            piece: normalizedStreetNamePiece,
            type: currentStreetNamePieceType
        });
    }
    return normalizedStreetNamePieces;
}
