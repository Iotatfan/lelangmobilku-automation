const { defineConfig } = require('@playwright/test');
const { defineBddConfig } = require('playwright-bdd');
require('dotenv').config();

const testDir = defineBddConfig({
  features: 'features/*.feature',
  steps: 'steps/*.js',
  importTestFrom: 'fixtures/fixtures.js',
});

module.exports = defineConfig({
  testDir,
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
      use: { browserName: 'chromium' },
    },
  ],
});
