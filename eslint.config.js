import js from '@eslint/js';
import globals from 'globals';

import * as esImport from 'eslint-plugin-import';
import prettier from 'eslint-plugin-prettier'; // Ensure plugin is required
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tailwindcss from 'eslint-plugin-tailwindcss';
import esUnusedImport from 'eslint-plugin-unused-imports';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['dist', 'node_modules/', 'build/', 'public/','src/graphql/generated/graphql.ts'],
  },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier: prettier, // Correctly added Prettier plugin
      '@typescript-eslint': tseslint.plugin,
      import: esImport,
      tailwindcss: tailwindcss,
      'unused-imports': esUnusedImport,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          ignoreRestSiblings: true,
        },
      ],
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/semi': 'off',
      'import/default': 'off',
      'import/no-named-as-default-member': 'off',
      'import/no-named-as-default': 'off',
      'import/no-unresolved': 'warn',
      indent: 'off',
      'no-console': [
        'error',
        {
          allow: ['warn', 'error', 'info', 'debug'],
        },
      ],
      'no-irregular-whitespace': 'warn',
      'no-use-before-define': 'off',
      'no-underscore-dangle': ['warn'],
      'object-curly-spacing': ['error', 'always'],
      'prettier/prettier': [
        'error',
        {
          trailingComma: 'es5',
          printWidth: 120,
          semi: false,
          singleQuote: true,
          jsxSingleQuote: false,
          tabWidth: 2,
          useTabs: false,
          endOfLine: 'lf',
          bracketSpacing: true,
          plugins: ['prettier-plugin-tailwindcss'],
        },
      ],
      'react-refresh/only-export-components': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/display-name': 'off',
      'react/no-unescaped-entities': 'off',
      'react/prop-types': 'off',
      'tailwindcss/classnames-order': 'warn',
      'tailwindcss/no-custom-classname': 'off',
      'unused-imports/no-unused-imports': 'error',
      'import/no-unresolved':'off'
    },
    settings: {
      settings: {
        'import/resolver': {
          typescript: {
            alwaysTryTypes: true, // optional, if you're using types
            project: './tsconfig.json', // path to your tsconfig, adjust if needed
          },
        },
      },
    },
  }
);
