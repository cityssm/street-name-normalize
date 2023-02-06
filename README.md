# Street Name Normalize

[![npm (scoped)](https://img.shields.io/npm/v/@cityssm/street-name-normalize)](https://www.npmjs.com/package/@cityssm/street-name-normalize)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/ff591668134a4102ae2e7b034c93fb7a)](https://www.codacy.com/gh/cityssm/street-name-normalize/dashboard?utm_source=github.com&utm_medium=referral&utm_content=cityssm/street-name-normalize&utm_campaign=Badge_Grade)
[![Maintainability](https://api.codeclimate.com/v1/badges/2eab5d8d0d0fe7d0ae41/maintainability)](https://codeclimate.com/github/cityssm/street-name-normalize/maintainability)
[![codecov](https://codecov.io/gh/cityssm/street-name-normalize/branch/main/graph/badge.svg?token=UX58MKB59P)](https://codecov.io/gh/cityssm/street-name-normalize)
[![Snyk Vulnerabilities for GitHub Repo](https://img.shields.io/snyk/vulnerabilities/github/cityssm/street-name-normalize)](https://app.snyk.io/org/cityssm/project/717cf762-bf86-4eb1-bf19-cc409324f98a)
[![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/cityssm/street-name-normalize/coverage.yml)](https://github.com/cityssm/street-name-normalize/actions/workflows/coverage.yml)

Takes street names with various abbreviations and attempts to expand them.

## Installation

    npm install @cityssm/street-name-normalize

## Usage

```javascript
import { normalizeStreetName } from '@cityssm/street-name-normalize'

// Sault Ste. Marie, Ontario specific settings
import { normalizeSsmStreetName } from '@cityssm/street-name-normalize/ssm.js'

normalizeStreetName('1st Ave')
// => FIRST AVENUE

normalizeSsmStreetName('ST GEORGES AVE E')
// => ST. GEORGE'S AVENUE EAST
```

## Features

- Typescript support.
- Expands common street name type abbreviations.
