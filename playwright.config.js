const { defineConfig } = require('@playwright/test');
const { defineBddConfig } = require('playwright-bdd');
require('dotenv').config();

const bddTestDir = defineBddConfig({
  features: 'features/*.feature',
  steps: 'steps/*.js',
  importTestFrom: 'fixtures/fixtures.js',
});

module.exports = defineConfig({
  reporter: 'html',
  use: {
    baseURL: process.env.BASE_URL || 'https://example.com',
    httpCredentials: {
      username: process.env.HTTP_AUTH_USER || '',
      password: process.env.HTTP_AUTH_PASS || '',
    },
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      testDir: bddTestDir,
      grepInvert: /@authenticated/,
      use: { browserName: 'chromium' },
    },
    {
      name: 'authenticated-chromium',
      testDir: bddTestDir,
      grep: /@authenticated/,
      use: {
        browserName: 'chromium',
      },
    },
  ],
});
