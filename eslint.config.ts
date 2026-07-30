import react from 'eslint-plugin-react';

export default [
  {
    languageOptions: {
      globals: {
        cy: true
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        ecmaVersion: 13,
        sourceType: 'module'
      }
    },
    plugins: {
      react
    },

    rules: {
      'react/jsx-filename-extension': 'warn',
      'no-use-before-define': 'warn',
      'no-param-reassign': 'warn',
      'no-multiple-empty-lines': 'warn',
      'padded-blocks': 'warn',
      'no-trailing-spaces': 'warn',
      'no-undef': 'warn',
      'comma-dangle': 'warn'
    }
  }
];
