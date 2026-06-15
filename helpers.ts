import { titleCase } from 'title-case'

import { streetNameSuffixSubstitutions } from './substitutions/streetNames.js'
import { streetNameTypes } from './substitutions/streetNameTypes.js'
import type { NormalizeStreetNameOutputCase, StreetNamePart } from './types.js'

export function classifyStreetNamePiece(
  unnormalizedStreetNamePiece: string,
  previousStreetNamePart: '' | StreetNamePart
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

  if (Object.hasOwn(streetNameTypes, unnormalizedStreetNamePiece.toLowerCase())) {
    return 'type'
  }

  return 'name'
}

function normalizeStreetNameType(unnormalizedStreetNameType: string): string {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return (
    streetNameTypes[unnormalizedStreetNameType.toLowerCase()] ??
    unnormalizedStreetNameType
  )
}

function normalizeStreetNameSuffix(
  unnormalizedStreetNameSuffix: string
): string {
  return (
    streetNameSuffixSubstitutions[unnormalizedStreetNameSuffix.toLowerCase()] ??
    unnormalizedStreetNameSuffix
  )
}

export function normalizeStreetNamePiece(
  unnormalizedStreetNamePiece: string,
  streetNamePart: StreetNamePart
): string {
  switch (streetNamePart) {
    case 'name': {
      return unnormalizedStreetNamePiece
    }
    case 'suffix': {
      return normalizeStreetNameSuffix(unnormalizedStreetNamePiece)
    }
    case 'type': {
      return normalizeStreetNameType(unnormalizedStreetNamePiece)
    }
  }
}

export function applyCase(
  normalizedStreetNamePiece: string,
  outputCase: NormalizeStreetNameOutputCase
): string {
  let casePiece = normalizedStreetNamePiece

  switch (outputCase) {
    case 'input': {
      casePiece = normalizedStreetNamePiece
      break
    }
    case 'proper': {
      casePiece = titleCase(
        isUpperCase(normalizedStreetNamePiece)
          ? normalizedStreetNamePiece.toLowerCase()
          : normalizedStreetNamePiece
      )
      break
    }
    case 'upper': {
      casePiece = normalizedStreetNamePiece.toUpperCase()
      break
    }
  }

  return casePiece
}

function isUpperCase(string_: string): boolean {
  return string_ === string_.toUpperCase()
}
