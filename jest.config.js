/** @format */

const nextJest = require("next/jest")

const createJestConfig = nextJest({
  dir: "./",
})

const customJestConfig = {
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  testPathIgnorePatterns: ["<rootDir>/templates/"],
  testEnvironment: "jest-environment-jsdom",
}

module.exports = createJestConfig(customJestConfig)
