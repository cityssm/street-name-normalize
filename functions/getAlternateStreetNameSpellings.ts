import cartesianProduct from 'just-cartesian-product'

import { applyCase } from '../helpers.js'
import {
  streetNameSubstitutions,
  streetNameSuffixSubstitutions
} from '../substitutions/streetNames.js'
import { streetNameTypes } from '../substitutions/streetNameTypes.js'
import type { NormalizeStreetNameOptions } from '../types.js'

import { normalizeStreetNamePieces } from './normalizeStreetNamePieces.js'

/**
 * Gets alternate spellings for a street name by generating all possible combinations of
 * the original and substituted pieces of the street name.
 * @param unnormalizedStreetName The street name to get alternate spellings for.
 * @param userOptions User options for generating alternate spellings.
 * @returns An array of alternate spellings for the street name.
 */
export default function getAlternateStreetNameSpellings(
  unnormalizedStreetName: string,
  userOptions: NormalizeStreetNameOptions
): string[] {
  const normalizedStreetNamePieces = normalizeStreetNamePieces(
    unnormalizedStreetName,
    userOptions
  )

  const alternativeStreetNameSpellings: string[][] = []

  for (const { piece, type } of normalizedStreetNamePieces) {
    const lowerCasePiece = piece.toLowerCase()

    const pieceAlternatives: string[] = [lowerCasePiece]

    let substitutions: Record<string, string> = {}

    switch (type) {
      case 'name': {
        substitutions = {
          ...streetNameSubstitutions,
          ...userOptions.namePieceSubstitutions
        }
        break
      }
      case 'suffix': {
        substitutions = streetNameSuffixSubstitutions
        break
      }
      case 'type': {
        substitutions = streetNameTypes
        break
      }
    }

    for (const [unnormalizedPiece, normalizedPiece] of Object.entries(
      substitutions
    )) {
      if (
        normalizedPiece.toLowerCase() === lowerCasePiece &&
        !pieceAlternatives.includes(unnormalizedPiece)
      ) {
        pieceAlternatives.push(unnormalizedPiece)
      }
    }

    alternativeStreetNameSpellings.push(pieceAlternatives)
  }

  return cartesianProduct(alternativeStreetNameSpellings).map(
    (alternativeStreetNamePieces) =>
      applyCase(alternativeStreetNamePieces.join(' '), userOptions.outputCase)
  )
}
