/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  projects: [
    {
      preset: "ts-jest",
      // tsconfig.jsonのpathsと合わせる
      moduleNameMapper: { "^@/(.*)$": "<rootDir>/src/$1" },
      testEnvironment: "node",
      testMatch: ["<rootDir>/src/**/*.test.ts"],
    },
  ],
};
