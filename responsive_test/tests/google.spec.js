const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  //await page.setViewportSize({ width: 375, height: 667 }); // iPhone 6/7/8
  await page.goto('https://www.google.com');
  await page.locator('//textarea[@title="Search"]').fill('doraemon');
  await page.keyboard.press('Enter');
  await page.waitForTimeout(2000)
  // Set viewport size for tablet
  // await page.setViewportSize({ width: 1366, height: 768 }); // Typical desktop
  //  await page.goto('https://www.google.com');
  // await page.locator('//textarea[@title="Search"]').fill('doraemon');
  // await page.keyboard.press('Enter');
  // await page.waitForTimeout(2000)

  await page.setViewportSize({ width: 768, height: 1024 }); // iPad
  await page.goto('https://www.google.com');
  await page.locator('//textarea[@title="Searc"]').fill('doraemon')
  await page.keyboard.press('Enter');
  await page.waitForTimeout(2000)
   
});
