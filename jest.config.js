module.exports = {
  clearMocks: true,
  collectCoverage: false,
  coverageDirectory: 'coverage',

  coverageProvider: 'v8',
  roots: ['<rootDir>/src'],
  coveragePathIgnorePatterns: [
    '/node_modules/'
  ],
  transform: {
    '^.+\\.ts$': 'ts-jest'
  }
}
