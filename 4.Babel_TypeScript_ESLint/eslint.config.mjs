import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.ts'],
    rules: {
      semi: ['error', 'never'],
      quotes: ['error', 'single'],
      camelcase: ["error", {properties: "always"}]
    }
  }
);