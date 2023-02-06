import { DEFAULT_NAME_PIECE_SUBSTITUTIONS, DEFAULT_OPTIONS } from './options.js';
import { normalizeStreetName } from './index.js';
const SSM_CLASSIFY_STREET_NAME_PIECE_OVERRIDES = {
    garden: 'name',
    riv: 'name',
    river: 'name',
    rvr: 'name'
};
const SSM_NAME_PIECE_SUBTITUTIONS = Object.assign({
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
}, DEFAULT_NAME_PIECE_SUBSTITUTIONS);
const SSM_OPTIONS = Object.assign({}, DEFAULT_OPTIONS, {
    namePieceSubstitutions: SSM_NAME_PIECE_SUBTITUTIONS,
    classifyStreetNamePieceOverrides: SSM_CLASSIFY_STREET_NAME_PIECE_OVERRIDES
});
export function normalizeSsmStreetName(unnormalizedStreetName, outputCase) {
    return normalizeStreetName(unnormalizedStreetName, outputCase === undefined
        ? SSM_OPTIONS
        : Object.assign({}, SSM_OPTIONS, { outputCase }));
}
export default normalizeSsmStreetName;
