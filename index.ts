import {
  classifyStreetNamePiece,
  normalizeStreetNamePiece,
  StreetNamePart
} from './helpers.js'

import { titleCase } from 'title-case'
import { isUpperCase } from 'is-upper-case'

import hasOwn from "object.hasown"

if (!Object.hasOwn) {
	Object.hasOwn = hasOwn;
}

export interface NormalizeStreetNameOptions {
  outputCase?: 'upper' | 'lower' | 'proper' | 'input'
  namePieceSubstitutions?: Record<string, string>
}

export const DEFAULT_NAME_PIECE_SUBSTITUTIONS: Record<string, string> = {
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
}

export const DEFAULT_OPTIONS: NormalizeStreetNameOptions = Object.freeze({
  outputCase: 'upper',
  namePieceSubstitutions: DEFAULT_NAME_PIECE_SUBSTITUTIONS
} as NormalizeStreetNameOptions)

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

    currentStreetNamePieceType = classifyStreetNamePiece(
      unnormalizedStreetNamePiece,
      currentStreetNamePieceType
    )

    let normalizedStreetNamePiece = normalizeStreetNamePiece(
      unnormalizedStreetNamePiece,
      currentStreetNamePieceType
    )

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

    switch (options.outputCase) {
      case 'upper': {
        normalizedStreetNamePiece = normalizedStreetNamePiece.toUpperCase()
        break
      }
      case 'lower': {
        normalizedStreetNamePiece = normalizedStreetNamePiece.toLowerCase()
        break
      }
      case 'proper': {
        normalizedStreetNamePiece = titleCase(
          isUpperCase(normalizedStreetNamePiece)
            ? normalizedStreetNamePiece.toLowerCase()
            : normalizedStreetNamePiece
        )
        break
      }
    }

    normalizedStreetNamePieces.push(normalizedStreetNamePiece)
  }

  return normalizedStreetNamePieces.join(' ')
}

export default normalizeStreetName
