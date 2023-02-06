import streetType from 'street-suffix';
import { titleCase } from 'title-case';
import { isUpperCase } from 'is-upper-case';
const missingStreetNameTypes = {
    crt: 'Court',
    line: 'Line'
};
export function classifyStreetNamePiece(unnormalizedStreetNamePiece, previousStreetNamePart) {
    if (previousStreetNamePart === 'type' ||
        previousStreetNamePart === 'suffix') {
        return 'suffix';
    }
    if (previousStreetNamePart === '') {
        return 'name';
    }
    const hasTypeRecord = streetType.expand(unnormalizedStreetNamePiece) !== undefined ||
        streetType.abbreviate(unnormalizedStreetNamePiece) !== undefined;
    if (hasTypeRecord ||
        Object.keys(missingStreetNameTypes).includes(unnormalizedStreetNamePiece.toLowerCase())) {
        return 'type';
    }
    return 'name';
}
function normalizeStreetNameType(unnormalizedStreetNameType) {
    return (missingStreetNameTypes[unnormalizedStreetNameType.toLowerCase()] ??
        streetType.expand(unnormalizedStreetNameType) ??
        unnormalizedStreetNameType);
}
function normalizeStreetNameSuffix(unnormalizedStreetNameSuffix) {
    let normalizedSuffix = unnormalizedStreetNameSuffix;
    switch (unnormalizedStreetNameSuffix.toLowerCase()) {
        case 'n': {
            normalizedSuffix = 'North';
            break;
        }
        case 'e': {
            normalizedSuffix = 'East';
            break;
        }
        case 'ex':
        case 'ext': {
            normalizedSuffix = 'Extension';
            break;
        }
        case 's': {
            normalizedSuffix = 'South';
            break;
        }
        case 'w': {
            normalizedSuffix = 'West';
            break;
        }
    }
    return normalizedSuffix;
}
export function normalizeStreetNamePiece(unnormalizedStreetNamePiece, streetNamePart) {
    switch (streetNamePart) {
        case 'type': {
            return normalizeStreetNameType(unnormalizedStreetNamePiece);
        }
        case 'suffix': {
            return normalizeStreetNameSuffix(unnormalizedStreetNamePiece);
        }
    }
    return unnormalizedStreetNamePiece;
}
export function applyCase(normalizedStreetNamePiece, outputCase) {
    let casePiece = normalizedStreetNamePiece;
    switch (outputCase) {
        case 'upper': {
            casePiece = normalizedStreetNamePiece.toUpperCase();
            break;
        }
        case 'proper': {
            casePiece = titleCase(isUpperCase(normalizedStreetNamePiece)
                ? normalizedStreetNamePiece.toLowerCase()
                : normalizedStreetNamePiece);
            break;
        }
    }
    return casePiece;
}
