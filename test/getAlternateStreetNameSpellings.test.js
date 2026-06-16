/* eslint-disable no-console */
/* eslint-disable no-await-in-loop */
import assert from 'node:assert';
import { describe, it } from 'node:test';
import { getAlternateStreetNameSpellings } from '../index.js';
await describe('getAlternateStreetNameSpellings', async () => {
    const streetNameTests = [
        ['Foster Drive', 'FOSTER DR'],
        ['Highway 17 North', 'Hwy 17 N'],
        ['Industrial Court', 'INDUSTRIAL CRT'],
        ['Second Line West', '2nd Line W']
    ];
    for (const streetNames of streetNameTests) {
        for (const streetName of streetNames) {
            await it(`Gets alternative spellings for "${streetName}"`, () => {
                const alternativeSpellings = getAlternateStreetNameSpellings(streetName, 'upper');
                console.log(`Alternative spellings for "${streetName}":`, alternativeSpellings);
                for (const expectedAlternativeSpelling of streetNames) {
                    assert.ok(alternativeSpellings.includes(expectedAlternativeSpelling.toUpperCase()), `Expected "${expectedAlternativeSpelling}" to be included in alternative spellings for "${streetName}"`);
                }
            });
        }
    }
});
