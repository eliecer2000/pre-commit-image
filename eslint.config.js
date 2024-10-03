const eslintPluginImport = require('eslint-plugin-import')
const eslintPluginPromise = require('eslint-plugin-promise')
const eslintPluginPrettier = require('eslint-plugin-prettier') // Importa el plugin de Prettier

module.exports = [
  {
    files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
    ignores: ['eslint.config.js'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        // Define variables globales aquí si es necesario
      }
    },
    plugins: {
      import: eslintPluginImport, // Plugin de import/export
      promise: eslintPluginPromise, // Plugin para promesas
      prettier: eslintPluginPrettier // Plugin para integrar Prettier
    },
    rules: {
      // Usa Prettier como una regla de ESLint
      'prettier/prettier': 'error',

      // Reglas personalizadas de ESLint
      eqeqeq: 'error', // Enforce === y !==
      'no-var': 'error', // Prohibir uso de var
      'prefer-const': 'error', // Usar const siempre que sea posible
      'arrow-body-style': ['error', 'as-needed'], // Simplifica funciones de flecha si no requieren llaves
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }], // Ignora args que empiezan con "_"

      // Reglas de import/export
      'import/order': ['error', { 'newlines-between': 'always' }],
      'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
      'import/no-unresolved': 'error',

      // Reglas para promesas
      'promise/always-return': 'error',
      'promise/no-nesting': 'warn',
      'promise/no-promise-in-callback': 'warn'
    }
  }
]
