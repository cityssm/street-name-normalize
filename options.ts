export type NormalizeStreetNameOutputCase = 'upper' | 'proper' | 'input'

export type StreetNamePart = 'name' | 'type' | 'suffix'

export interface NormalizeStreetNameOptions {
  outputCase?: NormalizeStreetNameOutputCase
  classifyStreetNamePieceOverrides?: Record<string, StreetNamePart>
  namePieceSubstitutions?: Record<string, string>
}

const DEFAULT_NAME_PIECE_ORDINAL_SUBSTITUTIONS: Record<string, string> = {
  '1st': 'First',
  '2nd': 'Second',
  '3rd': 'Third',
  '4th': 'Fourth',
  '5th': 'Fifth',
  '6th': 'Sixth',
  '7th': 'Seventh',
  '8th': 'Eighth',
  '9th': 'Ninth',
  '10th': 'Tenth'
}

const DEFAULT_NAME_PIECE_DIRECTION_SUBSTITUTIONS: Record<string, string> = {
  e: 'East',
  n: 'North',
  s: 'South',
  w: 'West'
}

const DEFAULT_NAME_PIECE_OTHER_SUBSTITUTIONS: Record<string, string> = {
  hwy: 'Highway',
  st: 'St.'
}

export const DEFAULT_NAME_PIECE_SUBSTITUTIONS = Object.assign(
  {},
  DEFAULT_NAME_PIECE_DIRECTION_SUBSTITUTIONS,
  DEFAULT_NAME_PIECE_ORDINAL_SUBSTITUTIONS,
  DEFAULT_NAME_PIECE_OTHER_SUBSTITUTIONS
)

export const DEFAULT_OPTIONS: NormalizeStreetNameOptions =
  Object.freeze<NormalizeStreetNameOptions>({
    outputCase: 'upper',
    classifyStreetNamePieceOverrides: {},
    namePieceSubstitutions: DEFAULT_NAME_PIECE_SUBSTITUTIONS
  })
