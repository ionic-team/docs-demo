const js = require('@eslint/js');
const typescript = require('@typescript-eslint/eslint-plugin');
const typescriptParser = require('@typescript-eslint/parser');

module.exports = [
  js.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        // Browser globals
        document: 'readonly',
        window: 'readonly',
        console: 'readonly',
        setTimeout: 'readonly',
        CustomEvent: 'readonly',
        HTMLElement: 'readonly',
        MouseEvent: 'readonly',
        // Jest globals
        describe: 'readonly',
        it: 'readonly',
        expect: 'readonly',
        // Stencil globals
        h: 'readonly',
        HTMLIonModalElement: 'readonly',
        HTMLIonInfiniteScrollElement: 'readonly',
        HTMLIonProgressBarElement: 'readonly',
        HTMLIonRefresherElement: 'readonly',
        HTMLIonReorderGroupElement: 'readonly'
      }
    },
    plugins: {
      '@typescript-eslint': typescript,
    },
    rules: {
      ...typescript.configs.recommended.rules,
      // Allow both 'h' and '_template_' to be unused
      '@typescript-eslint/no-unused-vars': ['error', {
        'argsIgnorePattern': '^_',
        'varsIgnorePattern': '^(h|_template_)$'
      }],
      // Allow any type in certain cases
      '@typescript-eslint/no-explicit-any': 'off'
    },
  },
];
