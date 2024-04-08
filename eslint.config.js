const react = require('eslint-plugin-react');

module.exports = [
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
      // TODO: Need to wait for Eslint 9 support
      // 'import/no-unresolved': 'warn',
      'no-param-reassign': 'warn',
      'no-multiple-empty-lines': 'warn',
      'padded-blocks': 'warn',
      'no-trailing-spaces': 'warn',
      'no-undef': 'warn',
      'comma-dangle': 'warn'
      /*
      // TODO: Need to wait for Eslint 9 support
      'import/extensions': [
        'warn',
        'ignorePackages',
        {
          js: 'never',
          jsx: 'never',
          ts: 'never',
          tsx: 'never'
        }
      ]*/
    }
  }
];
