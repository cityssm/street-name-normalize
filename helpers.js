import { titleCase } from 'title-case';
import { streetNameSuffixSubstitutions } from './substitutions/streetNames.js';
import { streetNameTypes } from './substitutions/streetNameTypes.js';
export function classifyStreetNamePiece(unnormalizedStreetNamePiece, previousStreetNamePart) {
    // If 'type' or 'suffix', return 'suffix'
    if (previousStreetNamePart === 'type' ||
        previousStreetNamePart === 'suffix') {
        return 'suffix';
    }
    // If '', return 'name'
    if (previousStreetNamePart === '') {
        return 'name';
    }
    if (Object.hasOwn(streetNameTypes, unnormalizedStreetNamePiece.toLowerCase())) {
        return 'type';
    }
    return 'name';
}
function normalizeStreetNameType(unnormalizedStreetNameType) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return (streetNameTypes[unnormalizedStreetNameType.toLowerCase()] ??
        unnormalizedStreetNameType);
}
function normalizeStreetNameSuffix(unnormalizedStreetNameSuffix) {
    return (streetNameSuffixSubstitutions[unnormalizedStreetNameSuffix.toLowerCase()] ??
        unnormalizedStreetNameSuffix);
}
export function normalizeStreetNamePiece(unnormalizedStreetNamePiece, streetNamePart) {
    switch (streetNamePart) {
        case 'name': {
            return unnormalizedStreetNamePiece;
        }
        case 'suffix': {
            return normalizeStreetNameSuffix(unnormalizedStreetNamePiece);
        }
        case 'type': {
            return normalizeStreetNameType(unnormalizedStreetNamePiece);
        }
    }
}
export function applyCase(normalizedStreetNamePiece, outputCase) {
    let casePiece = normalizedStreetNamePiece;
    switch (outputCase) {
        case 'input': {
            casePiece = normalizedStreetNamePiece;
            break;
        }
        case 'proper': {
            casePiece = titleCase(isUpperCase(normalizedStreetNamePiece)
                ? normalizedStreetNamePiece.toLowerCase()
                : normalizedStreetNamePiece);
            break;
        }
        case 'upper': {
            casePiece = normalizedStreetNamePiece.toUpperCase();
            break;
        }
    }
    return casePiece;
}
function isUpperCase(string_) {
    return string_ === string_.toUpperCase();
}
