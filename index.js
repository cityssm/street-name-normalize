import hasOwn from 'object.hasown';
import { applyCase, classifyStreetNamePiece, normalizeStreetNamePiece } from './helpers.js';
import { DEFAULT_OPTIONS } from './options.js';
if (!Object.hasOwn) {
    Object.hasOwn = hasOwn;
}
export function normalizeStreetName(unnormalizedStreetName, userOptions = {}) {
    const options = Object.assign({}, DEFAULT_OPTIONS, userOptions);
    const unnormalizedStreetNamePieces = (unnormalizedStreetName ?? '').split(' ');
    const normalizedStreetNamePieces = [];
    let currentStreetNamePieceType = '';
    for (const unnormalizedStreetNamePiece of unnormalizedStreetNamePieces) {
        if (unnormalizedStreetNamePiece === '') {
            continue;
        }
        currentStreetNamePieceType = Object.hasOwn(options.classifyStreetNamePieceOverrides, unnormalizedStreetNamePiece.toLowerCase())
            ? options.classifyStreetNamePieceOverrides[unnormalizedStreetNamePiece.toLowerCase()]
            : classifyStreetNamePiece(unnormalizedStreetNamePiece, currentStreetNamePieceType);
        let normalizedStreetNamePiece = normalizeStreetNamePiece(unnormalizedStreetNamePiece, currentStreetNamePieceType);
        if (currentStreetNamePieceType === 'name' &&
            Object.hasOwn(options.namePieceSubstitutions, normalizedStreetNamePiece.toLowerCase())) {
            normalizedStreetNamePiece =
                options.namePieceSubstitutions[normalizedStreetNamePiece.toLowerCase()];
        }
        normalizedStreetNamePiece = applyCase(normalizedStreetNamePiece, options.outputCase);
        normalizedStreetNamePieces.push(normalizedStreetNamePiece);
    }
    return normalizedStreetNamePieces.join(' ');
}
export default normalizeStreetName;
