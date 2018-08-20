const ignoredPaths = [
  '<rootDir>/node_modules/',
  '<rootDir>/dist',
  '<rootDir>/scripts',
  '<rootDir>/repl/',
  '<rootDir>/flow-typed/',
  '<rootDir>/test/',
];

module.exports = {
  displayName: 'test',
  testEnvironment: '<rootDir>/test/environment/mongodb',
  testPathIgnorePatterns: ignoredPaths,
  coverageReporters: ['lcov', 'html'],
  collectCoverageFrom: ['src/**/*.js', '!**/*.spec.js'],
  setupTestFrameworkScriptFile: '<rootDir>/test/setupTestFramework.js',
  globalSetup: '<rootDir>/test/setup.js',
  globalTeardown: '<rootDir>/test/teardown.js',
  resetModules: false,
  reporters: [
    'default',
    [
      'jest-junit',
      {
        suiteName: 'GraphQL Dataloader Boilerplate Tests',
        output: './test-results/jest/results.xml',
      },
    ],
  ],
};
