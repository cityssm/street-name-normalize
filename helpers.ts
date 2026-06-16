import { titleCase } from 'title-case'

import { streetNameSuffixSubstitutions } from './substitutions/streetNames.js'
import { streetNameTypes } from './substitutions/streetNameTypes.js'
import type { NormalizeStreetNameOutputCase, StreetNamePart } from './types.js'

/**
 * Classifies a piece of a street name as a 'name', 'suffix', or 'type' based on the previous piece of the street name and substitutions.
 * @param unnormalizedStreetNamePiece The piece of the street name to classify.
 * @param previousStreetNamePart The previous street name piece type.
 * @returns The street name piece type ('name', 'suffix', or 'type').
 */
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

  if (
    Object.hasOwn(streetNameTypes, unnormalizedStreetNamePiece.toLowerCase())
  ) {
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
    streetNameSuffixSubstitutions[
      // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
      unnormalizedStreetNameSuffix.toLowerCase() as Lowercase<string>
    ] ?? unnormalizedStreetNameSuffix
  )
}

/**
 * Normalizes a street name piece by applying substitutions based on the piece type.
 * @param unnormalizedStreetNamePiece The piece of the street name to normalize.
 * @param streetNamePart The street name piece type ('name', 'suffix', or 'type').
 * @returns The normalized street name piece.
 */
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

/**
 * Applies the specified case to a normalized street name piece.
 * @param normalizedStreetNamePiece The normalized street name piece to apply the case to.
 * @param outputCase The output case to apply ('input', 'proper', or 'upper').
 * @returns The normalized street name piece with the specified case applied.
 */
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
