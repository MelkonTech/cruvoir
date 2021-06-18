module.exports = {
  coveragePathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],

  globals: {
    'ts-jest': {
      babelConfig: true,
      tsConfig   : 'jest.tsconfig.json',
    },
  },

  moduleFileExtensions: ['ts', 'tsx', 'js'],

  moduleNameMapper: {
    '\\.(css|less)$'                                                              : '<rootDir>/config/style-mock.js',
    '^[./a-zA-Z0-9$_-]+\\.(jpg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm)$': '<rootDir>/config/file-stub.js',
  },

  setupFiles            : ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],

  transform: {
    '.*'               : 'babel-jest',
    '\\.(gql|graphql)$': '<rootDir>/config/graphql.js',
    '^.+\\.tsx?$'      : 'ts-jest',
  },
}
