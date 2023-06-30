module.exports = {
  //   preset: "ts-jest",
  //   testEnvironment: "node",
  reporters: [
    "default",
    [
      "jest-junit",
      {
        suiteName: "Jest Tests",
        outputDirectory: "./test-results/jest",
        outputName: "junit.xml",
      },
    ],
  ],
  //   testMatch: ["**/__tests__/**/*.test.js"],
};
