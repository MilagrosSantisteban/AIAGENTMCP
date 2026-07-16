import { test, expect } from '@playwright/test';

test.describe('Example Test Suite', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the Playwright documentation
    await page.goto('https://playwright.dev');
  });

  test('should verify page title contains Playwright', async ({ page }) => {
    const title = await page.title();
    expect(title).toContain('Playwright');
  });

  test('should find and click the Get Started link', async ({ page }) => {
    const getStartedLink = page.getByRole('link', { name: 'Get started' });
    await expect(getStartedLink).toBeVisible();
    await getStartedLink.click();
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  });

  test('should verify page URL', async ({ page }) => {
    expect(page.url()).toBe('https://playwright.dev/');
  });
});
