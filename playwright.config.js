
/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',
  timeout: 40 * 1000,

  expect: {
    timeout: 40 * 1000
  },
  reporter: [
    ['html', { open: 'never' }],
  ],
  use: {
    baseURL: 'https://automationexercise.com',
    browserName: 'chromium',
    headless: true,
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },
});
module.exports = config
