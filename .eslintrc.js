module.exports = {
  root: true,
  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaVersion: 2022,
    sourceType: 'module'
  },
  env: {
    node: true
  },
  extends: ['eslint:recommended', 'eslint-config-prettier'],
  plugins: [],
  globals: {},
  ignorePatterns: ['**/#current-cloud-backend/*', '**/.temp/*', '**/.eslintrc.js', '**/.postcssrc.js', '**/cdk.out/*'],

  // add your custom rules here
  rules: {
    'no-restricted-globals': 'off',
    'no-alert': 'off',
    'no-nested-ternary': 'off',
    'comma-dangle': ['error', 'never'],
    'class-methods-use-this': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'implicit-arrow-linebreak': 'off',
    'import/prefer-default-export': 'off',
    'no-shadow': ['error', { allow: ['done'] }],
    'import/no-extraneous-dependencies': 'off',
    'array-callback-return': 'off',
    'no-undef': 'warn',
    'no-unused-vars': 'warn',
    'no-underscore-dangle': 'warn',
    'prefer-promise-reject-errors': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'func-names': 'off',

    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'max-len': ['error', { code: 200, ignoreStrings: true, ignoreUrls: true }],
    'linebreak-style': 0,
    'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],
    'no-param-reassign': 0
  }
}
