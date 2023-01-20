// jest.config.js

module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!**/studio/**',
    '!**/.next/**',
    '!**/.vercel/**',
    '!**/lib/**',
    '!**/e2e/**',
    '!**/tests-examples/**',
    '!**/coverage/**',
  ],
  moduleNameMapper: {
    /* Handle CSS imports (with CSS modules)
    https://jestjs.io/docs/webpack#mocking-css-modules */
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',

    // Handle CSS imports (without CSS modules)
    '^.+\\.(css|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',

    /* Handle image imports
    https://jestjs.io/docs/webpack#handling-static-assets */
    '^.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$':
      '<rootDir>/__mocks__/fileMock.js',
  },
  testPathIgnorePatterns: [
    '<rootDir>/e2e/',
    '<rootDir>/tests-examples/',
    '<rootDir>/coverage/',
    '<rootDir>/node_modules/',
    '<rootDir>/.next/',
    '<rootDir>/.vercel/',
    '<rootDir>/studio/.sanity/',
    '<rootDir>/studio/dist/',
    '<rootDir>/studio/node_modules/',
  ],
  coverageThreshold: {
    global: {
      statements: 2.04,
      branches: 0,
      functions: 2.7,
      lines: 2.04,
    },
  },
  testEnvironment: 'jsdom',
  transform: {
    /* Use babel-jest to transpile tests with the next/babel preset
    https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object */
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  coverageReporters: ['lcov', 'text-summary'],
  transformIgnorePatterns: [
    '<rootDir>/(.next|.vercel|coverage|node_modules|playwright)/',
  ],
};
