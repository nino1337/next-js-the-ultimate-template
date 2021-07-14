module.exports = {
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    '<rootDir>/coverage/',
    '<rootDir>/out/',
  ],
  transform: {
    '.+\\.(css|styl|less|sass|svg|png|jpg|scss|ttf|woff|woff2)$':
      'jest-transform-stub',
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  testEnvironment: 'jsdom',
};
