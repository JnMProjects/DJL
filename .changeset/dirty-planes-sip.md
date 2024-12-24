---
"@jackatdjl/djl-ui": patch
---

### Fixing a Problem incurring when importing components from my package

#### Description

This change fixes an issue where importing components from the `@jackatdjl/djl-ui` package would result in errors. The problem was caused by missing default exports in the package's `exports` field.

#### Changes

- Added default exports to the `exports` field in `package.json` to ensure that components can be imported correctly.
