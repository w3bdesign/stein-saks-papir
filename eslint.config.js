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
      'no-undef': 'warn',
      //'import/no-unresolved': 'warn',
      'no-param-reassign': 'warn',
      'no-multiple-empty-lines': 'warn',
      'padded-blocks': 'warn',
      'no-trailing-spaces': 'warn',
      'no-undef': 'warn',
      'comma-dangle': 'warn'
      /*'import/extensions': [
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
