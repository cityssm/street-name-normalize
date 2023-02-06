import hasOwn from 'object.hasown';
import { titleCase } from 'title-case';
import { isUpperCase } from 'is-upper-case';
import { classifyStreetNamePiece, normalizeStreetNamePiece } from './helpers.js';
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
        switch (options.outputCase) {
            case 'upper': {
                normalizedStreetNamePiece = normalizedStreetNamePiece.toUpperCase();
                break;
            }
            case 'proper': {
                normalizedStreetNamePiece = titleCase(isUpperCase(normalizedStreetNamePiece)
                    ? normalizedStreetNamePiece.toLowerCase()
                    : normalizedStreetNamePiece);
                break;
            }
        }
        normalizedStreetNamePieces.push(normalizedStreetNamePiece);
    }
    return normalizedStreetNamePieces.join(' ');
}
export default normalizeStreetName;
