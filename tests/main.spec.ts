import { expect, test } from '@playwright/test';
test('form', async ({ page }) => {
 page.goto('http://localhost:5174/')
 await page.locator('#name').fill("Pang");
 await page.locator('#lastname').fill("007");
 await page.locator('#dog').click();
 await page.locator('.ant-select-item-option', {
  hasText: 'Alice',
}).click();
 await expect(page.getByRole('button', { name: 'Submit' }))
  .toBeEnabled();
  console.log("test pass")
});