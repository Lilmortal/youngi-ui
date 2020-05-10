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
};
