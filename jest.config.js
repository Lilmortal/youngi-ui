module.exports = {
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "json"],
  modulePathIgnorePatterns: ["dist"],
  // Because Jest only knows how to read Javascript, we need to mock non Javascript files
  // to a Javascript file.
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy",
    "\\.(png|jpg|jpeg|svg)$": "<rootDir>/config/__mocks__/fileMock",
  },
  setupFilesAfterEnv: ["./config/setupTests.js"],
  globals: {
    "ts-jest": {
      // Next.js needs "jsx" to be preserve, thus we are overriding it to "React" only in test
      tsConfig: "tsconfig.test.json",
    },
  },
};
