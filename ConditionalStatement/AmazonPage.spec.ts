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

  await page.screenshot({path:'ScreenShots/Screenshot.jpeg'});

  await page.locator("//input[@type='text']").press('Enter');
  await page.waitForTimeout(2000);
  });


test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  
 
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('Motorolo edge 50 ultra');
 
  await page.getByRole('button', { name: 'Go', exact: true }).click();
  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('link', { name: 'Sponsored Ad - Xiaomi 15 (' }).click()
  ]);
  await page1.getByRole('button', { name: 'Add to Cart', exact: true }).click();
  await page1.locator('div').filter({ hasText: 'Added to cart Not added Added' }).nth(3).click();

});
  