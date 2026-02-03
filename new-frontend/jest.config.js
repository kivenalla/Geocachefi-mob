module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',

  setupFiles: ['<rootDir>/jest.setup.js'],
  setupFilesAfterEnv: ['@testing-library/jest-dom'],

  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.jest.json'
    }
  },

  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.(gif|png|jpg|jpeg|svg)$": "<rootDir>/__mocks__/fileMock.js",
    "^@/(.*)$": "<rootDir>/src/$1",
  },

  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest', // TypeScript files
    '^.+\\.js$': 'babel-jest',   // JS files (including react-leaflet)
  },

  transformIgnorePatterns: [
    "node_modules/(?!(react-leaflet|@react-leaflet)/)"
  ],
};
