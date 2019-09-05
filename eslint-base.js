module.exports = {
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  plugins: ['jest'],
  env: {
    'jest/globals': true
  },
  rules: {
    // syntax enforcement, just warn
    'arrow-parens': 'warn',
    // syntax enforcement, just warn
    camelcase: 'warn',
    // we don't use comma dangle (yet)
    'comma-dangle': 'off',
    // not used - coliding with prettier
    'implicit-arrow-linebreak': 'off',
    // syntax enforcement, just warn
    'lines-between-class-members': 'warn',
    // syntax enforcement, just warn
    'max-len': 'warn',
    // syntax enforcement, just warn
    'no-extra-semi': 'warn',
    // not used
    'operator-linebreak': 'off',
    // syntax enforcement, just warn
    'prefer-destructuring': 'warn',
    // syntax enforcement, just warn
    'radix': 'warn',

    // we use named exports
    'import/prefer-default-export': 'off',
    // preffer './sub-dir' instead of 'sub-dir'
    'import/no-useless-path-segments': 'off',
    // do not require dependencies on story files
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: true
    }],
  }
};
