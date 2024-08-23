const globals = require('globals');
const jest = require('eslint-plugin-jest');

module.exports = [
  
  require('@eslint/js')['configs']['recommended'],  
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: "commonjs",
      globals: {
        ...globals.jest,
        ...globals.node
      }
    },
    
    rules: {
      "prefer-const": "error"
    }
  },
  {
    files: ['test/*.test.js'],
    ...jest.configs['flat/all'],
    plugins: { jest },
    rules: {
      ...jest.configs['flat/all'].rules,
      "jest/prefer-importing-jest-globals": "off",
    },
  },
];