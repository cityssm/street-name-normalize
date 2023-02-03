import streetType from 'street-suffix';
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
    switch (unnormalizedStreetNameSuffix.toLowerCase()) {
        case 'n': {
            return 'North';
        }
        case 'e': {
            return 'East';
        }
        case 'ex':
        case 'ext': {
            return 'Extension';
        }
        case 's': {
            return 'South';
        }
        case 'w': {
            return 'West';
        }
    }
    return unnormalizedStreetNameSuffix;
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
