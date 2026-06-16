import { streetNameSubstitutions } from './streetNames.js';
export const ssmClassifyStreetNamePieceOverrides = {
    garden: 'name',
    riv: 'name',
    river: 'name',
    rvr: 'name'
};
export const ssmStreetNameSubstitutions = {
    ...streetNameSubstitutions,
    allens: "Allen's",
    andrews: "Andrew's",
    ba: 'Bay',
    basils: "Basil's",
    beac: 'Beach',
    bishops: "Bishop's",
    c: 'Chenes',
    carmens: "Carmen's",
    ch: 'Chenes',
    emmanu: 'Emmanuel',
    georges: "George's",
    leighs: "Leigh's",
    marys: "Mary's",
    michaels: "Michael's",
    p: 'Park',
    "people's": 'Peoples',
    "peoples'": 'Peoples',
    pk: 'Park',
    pleasan: 'Pleasant',
    point: 'Pointe',
    riv: 'River',
    rive: 'River',
    rvr: 'River'
};
