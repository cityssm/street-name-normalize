# Street Name Normalize

[![npm (scoped)](https://img.shields.io/npm/v/@cityssm/street-name-normalize)](https://www.npmjs.com/package/@cityssm/street-name-normalize)
[![Maintainability](https://api.codeclimate.com/v1/badges/2eab5d8d0d0fe7d0ae41/maintainability)](https://codeclimate.com/github/cityssm/street-name-normalize/maintainability)
[![codecov](https://codecov.io/gh/cityssm/street-name-normalize/branch/main/graph/badge.svg?token=UX58MKB59P)](https://codecov.io/gh/cityssm/street-name-normalize)
[![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/cityssm/street-name-normalize/coverage.yml)](https://github.com/cityssm/street-name-normalize/actions/workflows/coverage.yml)

Takes street names with various abbreviations and attempts to expand them.

## Installation

```sh
npm install @cityssm/street-name-normalize
```

## Usage

```javascript
import normalizeStreetName, {
  getAlternateStreetNameSpellings,
  normalizeSsmStreetName
} from '@cityssm/street-name-normalize'

normalizeStreetName('1st Ave')
// => FIRST AVENUE

normalizeSsmStreetName('ST GEORGES AVE E')
// => ST. GEORGE'S AVENUE EAST

getAlternateStreetNameSpellings('Foster Dr')
// => [ 'FOSTER DRIVE', 'FOSTER DR', 'FOSTER DRIV', 'FOSTER DRV' ]
```

## Features

- Typescript support.
- Expands common street name type abbreviations.

## Related Projects

[**@cityssm/civic-address-format**](https://github.com/cityssm/civic-address-format)<br />
Formats a civic address from its pieces using Canada Post guidelines.
