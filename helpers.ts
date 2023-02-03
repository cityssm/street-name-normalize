import streetType from 'street-suffix'

export type StreetNamePart = 'name' | 'type' | 'suffix'

const missingStreetNameTypes = {
  crt: 'Court',
  line: 'Line'
}

export function classifyStreetNamePiece(
  unnormalizedStreetNamePiece: string,
  previousStreetNamePart: StreetNamePart | ''
): StreetNamePart {
  // If 'type' or 'suffix', return 'suffix'
  if (
    previousStreetNamePart === 'type' ||
    previousStreetNamePart === 'suffix'
  ) {
    return 'suffix'
  }

  // If '', return 'name'
  if (previousStreetNamePart === '') {
    return 'name'
  }

  const hasTypeRecord =
    streetType.expand(unnormalizedStreetNamePiece) !== undefined ||
    streetType.abbreviate(unnormalizedStreetNamePiece) !== undefined

  if (
    hasTypeRecord ||
    Object.keys(missingStreetNameTypes).includes(
      unnormalizedStreetNamePiece.toLowerCase()
    )
  ) {
    return 'type'
  }

  return 'name'
}

function normalizeStreetNameType(unnormalizedStreetNameType: string): string {
  return (
    missingStreetNameTypes[unnormalizedStreetNameType.toLowerCase()] ??
    streetType.expand(unnormalizedStreetNameType) ??
    unnormalizedStreetNameType
  )
}

function normalizeStreetNameSuffix(
  unnormalizedStreetNameSuffix: string
): string {
  switch (unnormalizedStreetNameSuffix.toLowerCase()) {
    case 'n': {
      return 'North'
    }
    case 'e': {
      return 'East'
    }
    case 'ex':
    case 'ext': {
      return 'Extension'
    }
    case 's': {
      return 'South'
    }
    case 'w': {
      return 'West'
    }
  }

  return unnormalizedStreetNameSuffix
}

export function normalizeStreetNamePiece(
  unnormalizedStreetNamePiece: string,
  streetNamePart: StreetNamePart
): string {
  switch (streetNamePart) {
    case 'type': {
      return normalizeStreetNameType(unnormalizedStreetNamePiece)
    }
    case 'suffix': {
      return normalizeStreetNameSuffix(unnormalizedStreetNamePiece)
    }
  }

  return unnormalizedStreetNamePiece
}
