# Playwright Automation Learning Journey 🚀

This repository is dedicated to learning and practicing end-to-end (E2E) testing using **Playwright**. It contains basic test scripts for web automation, specifically focusing on login workflows and browser context handling.

## 🛠️ Tech Stack

- **Framework:** [Playwright](https://playwright.dev/)
- **Language:** JavaScript
- **Test Runner:** Playwright Test

## 📂 Project Structure

- `tests/`: Contains the test specification files.
  - `basic.spec.js`: Basic login and browser context tests.
- `playwright.config.js`: Configuration for Playwright (browser, timeouts, reporters).
- `package.json`: Project dependencies and scripts.

## 🚀 Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/prianti29/playwright-learning-journey-udemy.git
   cd playwright-learning-journey-udemy
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

## 🧪 Running Tests

- **Run all tests:**
  ```bash
  npx playwright test
  ```

- **Run tests in headed mode:**
  ```bash
  npx playwright test --headed
  ```

- **Run a specific test file:**
  ```bash
  npx playwright test tests/basic.spec.js
  ```

- **Show HTML report:**
  ```bash
  npx playwright show-report
  ```

## 📝 Features Covered

- Browser Context and Page management.
- Locating elements using Xpath, CSS, and Playwright Roles.
- Handling login scenarios (Success & Failure).
- Basic assertions using `expect`.

---
*Happy Testing!* 🎭
