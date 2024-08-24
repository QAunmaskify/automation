import globals from "globals";
import eslintJs from "@eslint/js";
import mocha from "eslint-plugin-mocha";

export default [
  eslintJs.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: "module",
      globals: {
        ...globals.mocha,
        ...globals.chai,
        ...globals.node,
      },
    },

    rules: {
      "prefer-const": "error",
    },
  },
  {
    files: ["test/*.test.js"],
    plugins: { mocha },
    rules: {
      ...mocha.configs.recommended.rules,
      // "jest/prefer-importing-jest-globals": "off",
    },
  },
];
