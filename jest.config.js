const config = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^.+\\.s?css$": "<rootDir>/test-utils/css-stub.js"
  },
  setupFilesAfterEnv: ["<rootDir>/test-utils/setup.js"]
};

if (process.env.USE_COVERAGE) {
  Object.assign(config, {
    collectCoverage: true,
    coveragePathIgnorePatterns: ["/node_modules/", "index.ts", "/test-utils/"]
  });
}

module.exports = config;
