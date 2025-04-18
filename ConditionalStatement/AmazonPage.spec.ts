import { test, expect } from '@playwright/test';
import path from 'path';

test('Amazonlogin', async ({ page }) => {
  await page.goto('https://www.amazon.com/');
  await page.getByRole('link', { name: 'Hello, sign in Account & Lists' }).click();
  await page.getByRole('textbox', { name: 'Email or mobile phone number' }).fill('maharshibadiganti@gmail.com');
  await page.getByRole('button', { name: 'Continue' }).click();
  
  await page.getByRole('textbox', { name: 'Password' }).fill('Maharshi08@#');
  await page.getByRole('button', { name: 'Sign in' }).click();
  
  await expect(page.getByRole('link', { name: 'Hello, Maharshi Account &' })).toBeVisible();
  await page.waitForTimeout(2000);
});

test('Search item', async ({ page }) => {
  await page .goto('https://www.amazon.in/');
  await page.locator("//input[@type='text']").fill('moto edge 50 fusion 5g');
  const now = new Date();
  const timestamp = now.toISOString().replace(/[:]/g, '-').slice(0, 19);
  await page.screenshot({path:'ScreenShots/Screenshot_${timestamp}.jpeg'});
  await page.locator("//input[@type='text']").press('Enter');
  await page.waitForTimeout(2000);
  })
  
