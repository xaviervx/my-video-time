export default {
  testEnvironment: 'jest-environment-jsdom',
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleDirectories: ['node_modules'],
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  collectCoverageFrom: ['src/(pages|components)/**'],
  coveragePathIgnorePatterns: ['<rootDir>/build/', '<rootDir>/node_modules/'],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  moduleNameMapper: {}, // Mock modules to dont test the real code
  modulePathIgnorePatterns: ['<rootDir>/build/', '<rootDir>/node_modules/', '<rootDir>/node_modules/react-hook-form'],
  watchPathIgnorePatterns: ['<rootDir>/build/', '<rootDir>/node_modules/'],
  testMatch: ['**/tests/**/*.test.(jsx|js|ts|tsx)'],
  setupFilesAfterEnv: ['<rootDir>/tests/setupTests.js']
};
