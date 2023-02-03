# Street Name Normalize

Takes street names with various abbreviations and attempts to expand them.

## Installation

    npm install @cityssm/street-name-normalize

## Usage

```javascript
import { normalizeStreetName } from '@cityssm/street-name-normalize'

normalizeStreetName('St  Georges Av E')
// => ST. GEORGES AVENUE WEST
```

## Features

- Typescript support.
- Expands common street name type abbreviations.

## Need a Sault Ste. Marie, Ontario specific solution?

See the related cityssm/street-name-normalize-ssm project.
