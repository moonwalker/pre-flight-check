const { merge } = require('lodash');
const { rules } = require('eslint-config-airbnb/rules/react');

const setRulesSeverity = (ruleNames, severity = 'warn') => ruleNames.reduce((agg, ruleName) => ({
  ...agg,
  [ruleName]: merge([], rules[ruleName], [severity])
}), {});

module.exports = {
  extends: ['airbnb', './eslint-base', 'prettier/react'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['jest'],
  env: {
    es6: true
  },
  rules: {
    // correctly validate react-router Link
    'jsx-a11y/anchor-is-valid': ['error', {
      components: ['Link'],
      specialLink: ['to'],
      aspects: ['noHref', 'invalidHref', 'preferButton']
    }],
    'jsx-a11y/label-has-for': 'off',

    // we do not enforce .jsx
    'react/jsx-filename-extension': 'off',

    // allow props spreading for html and BaseComponent(HOCs)
    'react/jsx-props-no-spreading': ['warn', {
      html: 'ignore',
      custom: 'enforce',
      exceptions: ['BaseComponent']
    }],

    // @TODO
    'react/react-in-jsx-scope': 'off',

    ...setRulesSeverity([
      // helpful, but not required
      'react/forbid-prop-types',
      'react/require-default-props',
      'react/prop-types',
      'react/jsx-fragments',
      'react/default-props-match-prop-types',

      // warn formatting rules
      'react/destructuring-assignment',
      'react/jsx-closing-tag-location',
      'react/jsx-curly-newline',
      'react/jsx-one-expression-per-line',
      'react/jsx-wrap-multilines',
      'react/sort-comp'
    ], 'warn')
  },
  settings: {
    'import/extensions': ['.js', '.jsx']
  }
};
