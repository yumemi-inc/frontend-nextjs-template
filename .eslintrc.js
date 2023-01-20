/** @format */

module.exports = {
  extends: ["@yumemi-inc/eslint-config-typescript-react", "eslint-config-prettier", "plugin:storybook/recommended"],
  ignorePatterns: ["*.js", "*.mjs"],
  parserOptions: {
    sourceType: "module",
    project: "./tsconfig.json"
  }
};