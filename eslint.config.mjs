import prettier from 'eslint-plugin-prettier';
import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: [
      'lib/_components/site-search/*',
      'node_modules/',
      '_site/',
      'coverage/',
    ],
  },
  ...compat.extends('eslint:recommended'),
  {
    plugins: {
      prettier,
    },
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      ecmaVersion: 'latest',
    },
    rules: {
      indent: ['error', 2],
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
        },
      ],
    },
  },
];
