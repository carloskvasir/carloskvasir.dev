/* eslint-disable no-undef */
module.exports = {
  globals: {
    __PATH_PREFIX__: true
  },
  root: true, // Make sure eslint picks up the config at the root of the directory
  parserOptions: {
    ecmaVersion: 2020, // Use the latest ecmascript standard
    sourceType: 'module', // Allows using import/export statements
    ecmaFeatures: {
      jsx: true // Enable JSX since we're using React
    }
  },
  settings: {
    react: {
      version: 'detect' // Automatically detect the react version
    }
  },
  env: {
    browser: true, // Enables browser globals like window and document
    amd: true // Enables require() and define() as global variables as per the amd spec.
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended' // Make this the last element so prettier config overrides other formatting rules
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'react/no-unescaped-entities': 0,
    'prettier/prettier': ['error', {}, { usePrettierrc: true }] // Use our .prettierrc file as source
  }
};
