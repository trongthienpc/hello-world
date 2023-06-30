module.exports = {
  testEnvironment: "node",
  reporters: [
    "default",
    [
      "jest-junit",
      {
        outputDirectory: "test-results/junit",
        outputName: "junit.xml",
        classNameTemplate: "{classname} - {title}",
        titleTemplate: "{classname} - {title}",
        ancestorSeparator: " › ",
      },
    ],
  ],
  collectCoverage: true,
  coverageReporters: ["lcov", "text"],
  coverageDirectory: "coverage",
};
