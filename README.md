# AI Agents MCP - Playwright Testing Project

A comprehensive Playwright testing project for AI Agents MCP, configured with TypeScript support and ready for end-to-end testing across multiple browsers and devices.

## Project Overview

This project provides a complete testing framework using Playwright with:
- **TypeScript support** for type-safe test code
- **Multi-browser testing** (Chromium, Firefox, WebKit)
- **Mobile device simulation** (Pixel 5, iPhone 12)
- **HTML reporting** for test results
- **Trace recording** for debugging failed tests
- **UI mode** for interactive test development

## Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

## Installation

1. Navigate to the project directory:
```bash
cd /Users/mila/Documents/GenAI/AIAgentsMCP
```

2. Install dependencies:
```bash
npm install
```

This will install Playwright and all required dependencies including browsers.

## Project Structure

```
.
├── tests/                      # Test files directory
│   ├── example.spec.ts        # Basic example tests
│   └── sample.spec.ts         # Advanced example tests
├── playwright.config.ts        # Playwright configuration
├── package.json                # Project dependencies
├── tsconfig.json               # TypeScript configuration
├── README.md                   # This file
└── .gitignore                  # Git ignore rules
```

## Available Commands

- **Run all tests:**
  ```bash
  npm test
  ```

- **Run tests in UI mode (interactive):**
  ```bash
  npm run test:ui
  ```

- **Run tests in debug mode:**
  ```bash
  npm run test:debug
  ```

- **Run tests with browser UI visible:**
  ```bash
  npm run test:headed
  ```

- **Run tests for specific browser:**
  ```bash
  npm run test:chromium
  npm run test:firefox
  npm run test:webkit
  ```

- **Generate tests using Codegen:**
  ```bash
  npm run test:codegen
  ```

- **View test traces:**
  ```bash
  npm run test:trace
  ```

## Writing Tests

Example test structure:

```typescript
import { test, expect } from '@playwright/test';

test('example test', async ({ page }) => {
  await page.goto('https://example.com');
  
  // Interact with elements
  await page.click('button');
  
  // Add assertions
  await expect(page).toHaveTitle('Expected Title');
});
```

## Configuration

### Browser Configurations
Edit `playwright.config.ts` to configure:
- Browsers and devices to test
- Test retries and workers
- Reporter settings
- Trace and screenshot options
- Web server configuration

### Base URL
To set a base URL for your application, uncomment and modify in `playwright.config.ts`:
```typescript
use: {
  baseURL: 'http://127.0.0.1:3000',
}
```

### Local Development Server
To run tests against a local dev server, uncomment and configure in `playwright.config.ts`:
```typescript
webServer: {
  command: 'npm run start',
  url: 'http://127.0.0.1:3000',
  reuseExistingServer: !process.env.CI,
},
```

## Test Reports

After running tests, view the HTML report:
```bash
npx playwright show-report
```

## Continuous Integration

The project is configured for CI environments with:
- Automatic retries on CI
- Single worker for CI to avoid flakiness
- HTML reporting

## Debugging Tests

### Using the Inspector
```bash
npm run test:debug
```

### Using VS Code Debugger
Add a breakpoint and use the VS Code debugger for step-by-step debugging.

### Viewing Traces
Traces are automatically recorded on first retry. View them with:
```bash
npx playwright show-trace trace.zip
```

## Resources

- [Playwright Documentation](https://playwright.dev)
- [Playwright API Reference](https://playwright.dev/docs/api/intro)
- [Best Practices](https://playwright.dev/docs/best-practices)
- [Debugging Guide](https://playwright.dev/docs/debug)

## License

MIT

## Getting Started

1. Install dependencies: `npm install`
2. Run example tests: `npm test`
3. View test report: `npx playwright show-report`
4. Start writing your own tests in the `tests/` directory
