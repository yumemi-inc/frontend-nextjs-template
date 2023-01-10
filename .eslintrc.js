/** @format */

module.exports = {
  extends: ["@yumemi-inc/eslint-config-typescript-react", "eslint-config-prettier"],
  ignorePatterns: ["*.js", "*.mjs"],
  parserOptions: {
    sourceType: "module",
    project: "./tsconfig.json",
  },
}
