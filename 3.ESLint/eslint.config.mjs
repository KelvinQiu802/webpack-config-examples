import js from '@eslint/js';

export default [
  js.configs.recommended,
  {
    rules: {
      semi: ['error', 'never'],
      quotes: ['error', 'single'],
      camelcase: ['error', { properties: 'always' }],
    },
  },
];
