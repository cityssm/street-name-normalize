import normalizeStreetName, { DEFAULT_OPTIONS } from './index.js';
import { streetNameSubstitutions } from './substitutions/streetNames.js';
const ssmClassifyStreetNamePieceOverrides = {
    garden: 'name',
    riv: 'name',
    river: 'name',
    rvr: 'name'
};
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
};
const SSM_OPTIONS = {
    ...DEFAULT_OPTIONS,
    classifyStreetNamePieceOverrides: ssmClassifyStreetNamePieceOverrides,
    namePieceSubstitutions: ssmStreetNameSubstitutions
};
/**
 * Normalizes a street name by classifying each piece of the street name as a 'name', 'suffix', or 'type',
 * applying substitutions, and setting the proper casing.
 * @param unnormalizedStreetName The street name to normalize.
 * @param outputCase The output case for the normalized street name.
 * @returns The normalized street name.
 */
export default function normalizeSsmStreetName(unnormalizedStreetName, outputCase) {
    return normalizeStreetName(unnormalizedStreetName, outputCase === undefined ? SSM_OPTIONS : { ...SSM_OPTIONS, outputCase });
}
