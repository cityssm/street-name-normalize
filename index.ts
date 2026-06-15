import {
  applyCase,
  classifyStreetNamePiece,
  normalizeStreetNamePiece
} from './helpers.js'
import { streetNameSubstitutions } from './substitutions/streetNames.js'
import type {
  NormalizeStreetNameOptions,
  NormalizeStreetNameOutputCase,
  StreetNamePart
} from './types.js'

export const DEFAULT_OPTIONS: NormalizeStreetNameOptions =
  Object.freeze<NormalizeStreetNameOptions>({
    classifyStreetNamePieceOverrides: {},
    namePieceSubstitutions: streetNameSubstitutions,
    outputCase: 'upper'
  })

export default function normalizeStreetName(
  unnormalizedStreetName: string,
  userOptionsOrOutputCase:
    | NormalizeStreetNameOutputCase
    | Partial<NormalizeStreetNameOptions> = {}
): string {
  const userOptions =
    typeof userOptionsOrOutputCase === 'string'
      ? { outputCase: userOptionsOrOutputCase }
      : userOptionsOrOutputCase

  const options = { ...DEFAULT_OPTIONS, ...userOptions }

  const unnormalizedStreetNamePieces = unnormalizedStreetName.split(' ')

  const normalizedStreetNamePieces: string[] = []
  let currentStreetNamePieceType: '' | StreetNamePart = ''

  for (const unnormalizedStreetNamePiece of unnormalizedStreetNamePieces) {
    // Skip empty pieces
    if (unnormalizedStreetNamePiece === '') {
      continue
    }

    // Classify the street name piece

    currentStreetNamePieceType = Object.hasOwn(
      options.classifyStreetNamePieceOverrides,
      unnormalizedStreetNamePiece.toLowerCase()
    )
      ? options.classifyStreetNamePieceOverrides[
          unnormalizedStreetNamePiece.toLowerCase()
        ]
      : classifyStreetNamePiece(
          unnormalizedStreetNamePiece,
          currentStreetNamePieceType
        )

    // Normalize the street name piece
    let normalizedStreetNamePiece = normalizeStreetNamePiece(
      unnormalizedStreetNamePiece,
      currentStreetNamePieceType
    )

    // Apply any overrides
    if (
      currentStreetNamePieceType === 'name' &&
      Object.hasOwn(
        options.namePieceSubstitutions,
        normalizedStreetNamePiece.toLowerCase()
      )
    ) {
      normalizedStreetNamePiece =
        options.namePieceSubstitutions[normalizedStreetNamePiece.toLowerCase()]
    }

    // Set the proper casing
    normalizedStreetNamePiece = applyCase(
      normalizedStreetNamePiece,
      options.outputCase
    )

    // Save the result
    normalizedStreetNamePieces.push(normalizedStreetNamePiece)
  }

  return normalizedStreetNamePieces.join(' ')
}

export type {
  NormalizeStreetNameOptions,
  NormalizeStreetNameOutputCase
} from './types.js'
