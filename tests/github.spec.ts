import { test, expect, Page } from '@playwright/test';

test.describe('Wrote by codegen', () => {
  test('Go to github search playwright', async ({ page }) => {
    // Go to https://github.com/
    await page.goto('https://github.com/');
    // Click [placeholder="Search GitHub"]
    await page.locator('[placeholder="Search GitHub"]').click();
    // Fill [placeholder="Search GitHub"]
    await page.locator('[placeholder="Search GitHub"]').fill('playwright');
    // Press Enter
    await page.locator('[placeholder="Search GitHub"]').press('Enter');
    await expect(page).toHaveURL('https://github.com/search?q=playwright&type=');
    // Click text=microsoft/playwright Playwright is a framework for Web Testing and Automation. I >> em >> nth=0
    await page
      .locator(
        'text=microsoft/playwright Playwright is a framework for Web Testing and Automation. I >> em',
      )
      .first()
      .click();
    await expect(page).toHaveURL('https://github.com/microsoft/playwright');
  });
});
