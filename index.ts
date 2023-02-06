/* eslint-disable @typescript-eslint/indent */
import hasOwn from 'object.hasown'

import {
  applyCase,
  classifyStreetNamePiece,
  normalizeStreetNamePiece
} from './helpers.js'

import {
  DEFAULT_OPTIONS,
  type StreetNamePart,
  type NormalizeStreetNameOptions
} from './options.js'

// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
if (!Object.hasOwn) {
  Object.hasOwn = hasOwn
}

export function normalizeStreetName(
  unnormalizedStreetName: string,
  userOptions: NormalizeStreetNameOptions = {}
): string {
  const options = Object.assign({}, DEFAULT_OPTIONS, userOptions)

  const unnormalizedStreetNamePieces = (unnormalizedStreetName ?? '').split(' ')

  const normalizedStreetNamePieces: string[] = []
  let currentStreetNamePieceType: StreetNamePart | '' = ''

  for (const unnormalizedStreetNamePiece of unnormalizedStreetNamePieces) {
    // Skip empty pieces
    if (unnormalizedStreetNamePiece === '') {
      continue
    }

    // Classify the street name piece
    currentStreetNamePieceType = Object.hasOwn(
      options.classifyStreetNamePieceOverrides!,
      unnormalizedStreetNamePiece.toLowerCase()
    )
      ? options.classifyStreetNamePieceOverrides![
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
        options.namePieceSubstitutions!,
        normalizedStreetNamePiece.toLowerCase()
      )
    ) {
      normalizedStreetNamePiece =
        options.namePieceSubstitutions![normalizedStreetNamePiece.toLowerCase()]
    }

    // Set the proper casing
    normalizedStreetNamePiece = applyCase(
      normalizedStreetNamePiece,
      options.outputCase!
    )

    // Save the result
    normalizedStreetNamePieces.push(normalizedStreetNamePiece)
  }

  return normalizedStreetNamePieces.join(' ')
}

export default normalizeStreetName
