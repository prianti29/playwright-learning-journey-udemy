const { test, expect } = require("@playwright/test");

test("Browser Context Playwright Test", async ({ browser }) => {
     const context = await browser.newContext();
     const page = await context.newPage();
     await page.goto("https://google.com");
});

test("Login with Correct Credentials", async ({ page }) => {
     await page.goto("/login");
     //get title
     console.log(await page.title());
     await expect(page).toHaveTitle("Automation Exercise - Signup / Login");
     //css , xpath
     const email = page.locator("//input[@data-qa='login-email']");
     const password = page.locator('input[name="password"]');

     await email.fill("test1@sharklasers.com");
     await password.fill("123456789");

     await page.getByRole('button', { name: 'Login' }).click();

     await expect(page).toHaveTitle("Automation Exercise");
});


test("Login with InCorrect Credentials", async ({ page }) => {
     await page.goto("/login");
     //get title
     console.log(await page.title());
     await expect(page).toHaveTitle("Automation Exercise - Signup / Login");
     //css , xpath
     const email = page.locator("//input[@data-qa='login-email']");
     const password = page.locator('input[name="password"]');

     await email.fill("test1@sharklasers.com");
     await password.fill("12345678910");

     await page.getByRole('button', { name: 'Login' }).click();

     await expect(page.getByText('Your email or password is incorrect!', { exact: true })).toBeVisible();
});