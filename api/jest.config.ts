import type { Config } from 'jest'

const customJestConfig: Config = {
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testMatch: ['<rootDir>/test/**/*.test.ts}'],
  testPathIgnorePatterns: ['/node_modules/'],

  transform: {
    '^.+\\.(ts)$': '@swc/jest',
  },
  collectCoverage: true,
  coverageDirectory: 'coverage',
  moduleFileExtensions: ['ts', 'js'],
}

export default customJestConfig
