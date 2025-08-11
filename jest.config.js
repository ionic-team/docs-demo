const { createJestStencilPreset } = require('jest-stencil-runner');

module.exports = createJestStencilPreset({
  rootDir: __dirname,
  // Add any additional Jest configuration here
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
  ],
  testMatch: [
    '**/__tests__/**/*.(ts|tsx|js)',
    '**/*.(test|spec).(ts|tsx|js)'
  ]
});
