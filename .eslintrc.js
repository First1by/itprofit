module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: ['standard', 'eslint:recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint', // Для TypeScript.
  ],

  ignorePatterns: ['.eslintrc.js'],
  rules: {
    quotes: ['error', 'single'], // Использовать двойные кавычки.
    semi: ['error', 'always'], // Всегда добавлять точку с запятой в конце утверждения.
    indent: ['error', 2], // Отступ — это два пробела.
    'prefer-regex-literals': ['off', { disallowRedundantWrapping: true }],
    'no-unused-vars': ['warn', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
    'comma-dangle': ['error', 'always-multiline'],
  },
};
