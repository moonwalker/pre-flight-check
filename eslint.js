module.exports = {
  extends: ['airbnb', './eslint-base', 'plugin:react-hooks/recommended'],
  env: {
    es6: true,
    browser: true
  },
  rules: {
    // Support react-router Link
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to'],
        aspects: ['noHref', 'invalidHref', 'preferButton']
      }
    ],
    'jsx-a11y/label-has-for': 'off',

    // we do not enforce .jsx
    'react/jsx-filename-extension': 'off',

    // allow props spreading for html and BaseComponent(HOCs)
    'react/jsx-props-no-spreading': [
      'warn',
      {
        html: 'ignore',
        custom: 'enforce',
        exceptions: ['BaseComponent']
      }
    ],

    // Consistent arrow functions for functional components
    'react/function-component-definition': [
      'warn',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function'
      }
    ],

    'react/react-in-jsx-scope': 'off',

    // Supported rules, but not enforced
    'react/forbid-prop-types': 'warn',
    'react/require-default-props': 'warn',
    'react/prop-types': 'warn',
    'react/jsx-fragments': 'warn',
    'react/default-props-match-prop-types': 'warn',
    'react/jsx-no-constructed-context-values': 'warn',
    'react/no-unstable-nested-components': 'warn',
    'react/no-unused-class-component-methods': 'warn',

    // Supported formatting rules, but not enforced
    'react/destructuring-assignment': 'warn',
    'react/jsx-closing-tag-location': 'warn',
    'react/jsx-curly-newline': 'warn',
    'react/jsx-one-expression-per-line': 'warn',
    'react/jsx-wrap-multilines': 'warn',
    'react/jsx-no-useless-fragment': 'warn',
    'react/sort-comp': 'warn'
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
        // Disable prop-types on .ts files
        'react/prop-types': 'off',
        'react/forbid-prop-types': 'off',
        'react/require-default-props': 'off',
        'react/default-props-match-prop-types': 'off'
      }
    }
  ],
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts']
      }
    }
  }
};
