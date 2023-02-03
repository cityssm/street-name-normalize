import * as assert from 'node:assert'
import { normalizeStreetName } from '../index.js'

describe('normalizeStreetName', () => {
  it("Normalizes 'St. Georges Avenue East'", () => {
    const properName = 'St. Georges Avenue East'

    const unnormalizedNames = ['ST GEORGES AVE E', 'St.  Georges Av E']

    for (const unnormalizedName of unnormalizedNames) {
      assert.strictEqual(
        normalizeStreetName(unnormalizedName, {
          outputCase: 'upper'
        }),
        properName.toUpperCase()
      )
      
      assert.strictEqual(
        normalizeStreetName(unnormalizedName, {
          outputCase: 'proper'
        }),
        properName
      )
    }
  })
  
  it("Normalizes 'Second Line West'", () => {
    const properName = 'Second Line West'

    const unnormalizedNames = ['2nd Line W']

    for (const unnormalizedName of unnormalizedNames) {
      assert.strictEqual(
        normalizeStreetName(unnormalizedName, {
          outputCase: 'lower'
        }),
        properName.toLowerCase()
      )
      
      assert.strictEqual(
        normalizeStreetName(unnormalizedName, {
          outputCase: 'proper'
        }),
        properName
      )
    }
  })  

  it("Normalizes 'Highway 17 North'", () => {
    const properName = 'Highway 17 North'

    const unnormalizedNames = ['Hwy 17 N']

    for (const unnormalizedName of unnormalizedNames) {
      assert.strictEqual(
        normalizeStreetName(unnormalizedName, {
          outputCase: 'lower'
        }),
        properName.toLowerCase()
      )
      
      assert.strictEqual(
        normalizeStreetName(unnormalizedName, {
          outputCase: 'proper'
        }),
        properName
      )
    }
  })

  it("Normalizes 'Industrial Court'", () => {
    const properName = 'Industrial Court'

    const unnormalizedNames = ['INDUSTRIAL CRT']

    for (const unnormalizedName of unnormalizedNames) {
      assert.strictEqual(
        normalizeStreetName(unnormalizedName, {
          outputCase: 'upper'
        }),
        properName.toUpperCase()
      )
      
      assert.strictEqual(
        normalizeStreetName(unnormalizedName, {
          outputCase: 'proper'
        }),
        properName
      )
    }
  })

  it("Normalizes 'Fifth Line Extension West'", () => {
    const properName = 'Fifth Line Extension West'

    const unnormalizedNames = ['FIFTH LINE EXT  W']

    for (const unnormalizedName of unnormalizedNames) {
      assert.strictEqual(
        normalizeStreetName(unnormalizedName, {
          outputCase: 'upper'
        }),
        properName.toUpperCase()
      )
      
      assert.strictEqual(
        normalizeStreetName(unnormalizedName, {
          outputCase: 'proper'
        }),
        properName
      )
    }
  })
})
