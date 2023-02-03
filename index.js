import { classifyStreetNamePiece, normalizeStreetNamePiece } from './helpers.js';
import { titleCase } from 'title-case';
import { isUpperCase } from 'is-upper-case';
export const DEFAULT_NAME_PIECE_SUBSTITUTIONS = {
    '1st': 'First',
    '2nd': 'Second',
    '3rd': 'Third',
    '4th': 'Fourth',
    '5th': 'Fifth',
    '6th': 'Sixth',
    e: 'East',
    hwy: 'Highway',
    n: 'North',
    s: 'South',
    st: 'St.',
    w: 'West'
};
export const DEFAULT_OPTIONS = Object.freeze({
    outputCase: 'upper',
    namePieceSubstitutions: DEFAULT_NAME_PIECE_SUBSTITUTIONS
});
export function normalizeStreetName(unnormalizedStreetName, userOptions = {}) {
    const options = Object.assign({}, DEFAULT_OPTIONS, userOptions);
    const unnormalizedStreetNamePieces = (unnormalizedStreetName ?? '').split(' ');
    const normalizedStreetNamePieces = [];
    let currentStreetNamePieceType = '';
    for (const unnormalizedStreetNamePiece of unnormalizedStreetNamePieces) {
        if (unnormalizedStreetNamePiece === '') {
            continue;
        }
        currentStreetNamePieceType = classifyStreetNamePiece(unnormalizedStreetNamePiece, currentStreetNamePieceType);
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
            case 'lower': {
                normalizedStreetNamePiece = normalizedStreetNamePiece.toLowerCase();
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
