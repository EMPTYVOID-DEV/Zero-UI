/** @type { import("eslint").Linter.Config } */
module.exports = {
  plugins: ["jsdoc"],
  root: true,
  extends: [
    "plugin:jsdoc/recommended",
    "eslint:recommended",
    "plugin:svelte/recommended",
    "prettier",
  ],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020,
    extraFileExtensions: [".svelte"],
  },
  env: {
    browser: true,
    es2017: true,
    node: true,
  },
};
