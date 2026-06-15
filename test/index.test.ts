/* eslint-disable no-await-in-loop */

import * as assert from 'node:assert'
import { describe, it } from 'node:test'

import normalizeStreetName from '../index.js'

await describe('normalizeStreetName', async () => {
  const streetNameTests = {
    'Fifth Line Extension West': ['FIFTH LINE EXT  W'],
    'Highway 17 North': ['Hwy 17 N'],
    'Industrial Court': ['INDUSTRIAL CRT'],
    'Second Line West': ['2nd Line W']
  }

  for (const [properName, unnormalizedNames] of Object.entries(
    streetNameTests
  )) {
    await it(`Normalizes "${properName}"`, () => {
      for (const unnormalizedName of unnormalizedNames) {
        assert.strictEqual(
          normalizeStreetName(unnormalizedName, {
            outputCase: 'proper'
          }),
          properName
        )

        assert.strictEqual(
          normalizeStreetName(unnormalizedName, {
            outputCase: 'upper'
          }),
          properName.toUpperCase()
        )
      }
    })
  }
})
