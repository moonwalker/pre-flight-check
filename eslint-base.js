module.exports = {
  extends: ['airbnb-base', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    requireConfigFile: false
  },
  plugins: ['jest', 'prettier', '@typescript-eslint'],
  env: {
    node: true,
    'jest/globals': true
  },
  rules: {
    // Enforce syntax, but warn
    'arrow-body-style': 'warn',
    'arrow-parens': 'warn',
    'lines-between-class-members': 'warn',
    'max-len': 'warn',
    'no-extra-semi': 'warn',
    'prefer-destructuring': 'warn',
    'prettier/prettier': 'warn',
    'class-methods-use-this': 'warn',
    'default-param-last': 'warn',
    camelcase: 'warn',
    radix: 'warn',

    // Disabled rules
    'comma-dangle': 'off', // @TODO to reconsider
    'max-classes-per-file': 'off',
    'operator-linebreak': 'off',

    'import/prefer-default-export': 'off', // we prefer named exports
    'import/no-useless-path-segments': 'off',
    // Disable - coliding with prettier
    'implicit-arrow-linebreak': 'off',

    // do not require dependencies on story files
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true
      }
    ],

    'import/extensions': [
      'error',
      {
        ts: 'never',
        tsx: 'never',
        json: 'always'
      }
    ]
  }
};
