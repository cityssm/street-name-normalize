import normalizeStreetName, { DEFAULT_OPTIONS } from './index.js'
import { streetNameSubstitutions } from './substitutions/streetNames.js'
import type {
  NormalizeStreetNameOptions,
  NormalizeStreetNameOutputCase
} from './types.js'

const ssmClassifyStreetNamePieceOverrides = {
  garden: 'name',
  riv: 'name',
  river: 'name',
  rvr: 'name'
} as const

const ssmStreetNameSubstitutions = {
  ...streetNameSubstitutions,
  allens: "Allen's",
  andrews: "Andrew's",
  ba: 'Bay',
  basils: "Basil's",
  beac: 'Beach',
  bishops: "Bishop's",
  carmens: "Carmen's",
  c: 'Chenes',
  ch: 'Chenes',
  emmanu: 'Emmanuel',
  georges: "George's",
  leighs: "Leigh's",
  marys: "Mary's",
  michaels: "Michael's",
  p: 'Park',
  "people's": 'Peoples',
  "peoples'": 'Peoples',
  pleasan: 'Pleasant',
  point: 'Pointe',
  pk: 'Park',
  riv: 'River',
  rive: 'River',
  rvr: 'River'
}

const SSM_OPTIONS: NormalizeStreetNameOptions = {
  ...DEFAULT_OPTIONS,
  classifyStreetNamePieceOverrides: ssmClassifyStreetNamePieceOverrides,
  namePieceSubstitutions: ssmStreetNameSubstitutions
}

export default function normalizeSsmStreetName(
  unnormalizedStreetName: string,
  outputCase?: NormalizeStreetNameOutputCase
): string {
  return normalizeStreetName(
    unnormalizedStreetName,
    outputCase === undefined ? SSM_OPTIONS : { ...SSM_OPTIONS, outputCase }
  )
}

export type {
  NormalizeStreetNameOptions,
  NormalizeStreetNameOutputCase
} from './types.js'
