
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
    browserName: 'chromium',
    headless: false,
    // viewport: {
    //   width: 1920,
    //   height: 1080
    // },
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */

  },
});
module.exports = config
