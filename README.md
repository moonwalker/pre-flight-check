# pre-flight-check

[![npmjs](https://img.shields.io/npm/v/@moonwalker/pre-flight-check.svg)](https://www.npmjs.com/package/@moonwalker/pre-flight-check)
[![renovatebot](https://badges.renovateapi.com/github/moonwalker/pre-flight-check)](https://renovatebot.com/dashboard#github/moonwalker/pre-flight-check)
[![ci](https://github.com/moonwalker/pre-flight-check/workflows/ci/badge.svg)](https://github.com/moonwalker/pre-flight-check/actions?query=workflow%3Aci)

Linting, formatting and tooling for :moon: :walking:

## Install

```shell
npm install --dev @moonwalker/pre-flight-check
```

## Configuration

### Eslint

```js
// eslint config (eslint.config.js)
module.exports = {
  extends: ['@moonwalker/pre-flight-check/eslint']
}
```

or for `node`:

```js
// eslint config (eslint.config.js)
module.exports = {
  extends: ['@moonwalker/pre-flight-check/eslint-base']
}
```

### Stylelint

```js
// stylelint.config.js
module.exports = {
  extends: '@moonwalker/pre-flight-check/stylelint'
};
```

### Prettier

```js
// prettier.config.js
module.exports = require('@moonwalker/pre-flight-check/prettier');
```

### Husky

```js
// .huskyrc.js
module.exports = require('@moonwalker/pre-flight-check/husky');
```

### lint-staged
```js
// lint-staged.config.js
module.exports = require('@moonwalker/pre-flight-check/lint-staged');
```
