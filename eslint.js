module.exports = {
  extends: [
    'airbnb',
    './eslint-base'
  ],
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
    'jest/globals': true
  },
  rules: {
    // correctly validate react-router Link
    'jsx-a11y/anchor-is-valid': ['error', {
      components: ['Link'],
      specialLink: ['to'],
      aspects: ['noHref', 'invalidHref', 'preferButton']
    }],
    'jsx-a11y/label-has-for': 'off',

    // helpful, but not required
    'react/default-props-match-prop-types': 'warn',
    // syntax enforcement, just warn
    'react/destructuring-assignment': 'warn',
    // syntax enforcement, just warn
    'react/jsx-curly-newline': 'warn',
    // we do not enforce .jsx
    'react/jsx-filename-extension': 'off',
    // helpful, but not required
    'react/jsx-props-no-spreading': ['warn', {
      html: 'ignore',
      custom: 'enforce',
      exceptions: ['BaseComponent']
    }],
    // helpful, but not required
    'react/jsx-fragments': 'warn',
    // helpful, but not required
    'react/prop-types': 'warn',
    // @TODO
    'react/react-in-jsx-scope': 'off',
    // helpful, but not required
    'react/require-default-props': 'warn',
    // syntax enforcement, just warn
    'react/sort-comp': 'warn',
  }
};
