const _ordinalSubstitutions: Record<Lowercase<string>, string> = {
  '1st': 'First',
  '2nd': 'Second',
  '3rd': 'Third',
  '4th': 'Fourth',
  '5th': 'Fifth',
  '6th': 'Sixth',
  '7th': 'Seventh',
  '8th': 'Eighth',
  '9th': 'Ninth',

  '10th': 'Tenth',
  '11th': 'Eleventh',
  '12th': 'Twelfth',
  '13th': 'Thirteenth',
  '14th': 'Fourteenth',
  '15th': 'Fifteenth',
  '16th': 'Sixteenth',
  '17th': 'Seventeenth',
  '18th': 'Eighteenth',
  '19th': 'Nineteenth',
  '20th': 'Twentieth'
} as const

const _directionSubstitutions: Record<Lowercase<string>, string> = {
  e: 'East',
  n: 'North',
  s: 'South',
  w: 'West'
}

const _otherSubstitutions: Record<Lowercase<string>, string> = {
  hwy: 'Highway',
  st: 'St.'
}

export const streetNameSubstitutions = {
  ..._directionSubstitutions,
  ..._ordinalSubstitutions,
  ..._otherSubstitutions
}

export const streetNameSuffixSubstitutions: Record<
  Lowercase<string>,
  string
> = {
  ..._directionSubstitutions,
  ex: 'Extension',
  ext: 'Extension'
}
