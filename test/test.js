import * as assert from 'node:assert';
import { normalizeStreetName } from '../index.js';
import { normalizeSsmStreetName } from '../ssm.js';
describe('normalizeStreetName', () => {
    const streetNameTests = {
        'Fifth Line Extension West': ['FIFTH LINE EXT  W'],
        'Highway 17 North': ['Hwy 17 N'],
        'Industrial Court': ['INDUSTRIAL CRT'],
        'Second Line West': ['2nd Line W']
    };
    for (const [properName, unnormalizedNames] of Object.entries(streetNameTests)) {
        it(`Normalizes "${properName}"`, () => {
            for (const unnormalizedName of unnormalizedNames) {
                assert.strictEqual(normalizeStreetName(unnormalizedName, {
                    outputCase: 'proper'
                }), properName);
                assert.strictEqual(normalizeStreetName(unnormalizedName, {
                    outputCase: 'upper'
                }), properName.toUpperCase());
            }
        });
    }
});
describe('normalizeSsmStreetName', () => {
    const streetNameTests = {
        "Allen's Side Road": ['allens side rd'],
        "Bishop's Court": ['bishops crt'],
        "Carmen's Way": ['carmens wy'],
        'Huntington Park': ['huntington pk'],
        'Industrial Park Crescent': ['industrial p cres'],
        "Leigh's Bay Road": ['leighs bay rd'],
        'Mount Pleasant Court': ['mount pleasan crt'],
        'Old Garden River Road': ['old garden riv rd', 'old garden rvr rd'],
        'Peoples Road': ["people's rd", "peoples' road"],
        'Pointe Des Chenes Crescent': ['point des ch cres', 'pointe des c cres'],
        "St. George's Avenue East": ['ST GEORGES AVE E', 'St.  Georges Av E'],
        'Victor Emmanuel Avenue': ['VICTOR EMMANU AVE']
    };
    for (const [properName, unnormalizedNames] of Object.entries(streetNameTests)) {
        it(`Normalizes "${properName}"`, () => {
            for (const unnormalizedName of unnormalizedNames) {
                assert.strictEqual(normalizeSsmStreetName(unnormalizedName, 'proper'), properName);
                assert.strictEqual(normalizeSsmStreetName(unnormalizedName, 'upper'), properName.toUpperCase());
            }
        });
    }
});
