# mr-timeago
Small Angular.js directive that parses a timestamp into a human readable string

## Usage

```html
<time mr-timeago="object.date"></time>
```

with date being a UNIX timestamp (e.g. `1435305932121`) or a `new Date()` parse-able string.

## Output

- 0...60 seconds
- 1...60 minutes
- 1...24 hours
- 1...21 days
- 3...7 weeks
- 2...12 months
- 1...∞ years

## Feature requests

- Expand for multilang
