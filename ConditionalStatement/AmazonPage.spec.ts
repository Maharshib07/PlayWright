import { test, expect, chromium } from '@playwright/test';

test('Amazonlogin', async ({page}) => {
  await page.goto('https://www.amazon.com/');
  await page.getByRole('link', { name: 'Hello, sign in Account & Lists' }).click();
  await page.getByRole('textbox', { name: 'Email or mobile phone number' }).fill('maharshibadiganti@gmail.com');
  await page.getByRole('button', { name: 'Continue' }).click();
  
  await page.getByRole('textbox', { name: 'Password' }).fill('Maharshi08@#');
  await page.getByRole('button', { name: 'Sign in' }).click();
  
  await expect(page.getByRole('link', { name: 'Hello, Maharshi Account &' })).toBeVisible();
  await page.waitForTimeout(2000);
});

test('Search item', async ({page }) => {
  await page.goto('https://www.amazon.in/');
  await page.locator("//input[@type='text']").fill('moto edge 50 fusion 5g');

  await page.screenshot({path:'ScreenShots/Screenshot.jpeg'});

  await page.locator("//input[@type='text']").press('Enter');
  await page.waitForTimeout(2000);
  });


test ('booking a laptop',async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  // Step 1: Go to Amazon
  await page.goto('https://www.amazon.in');

  // Step 2: Search for a product
  await page.fill('#twotabsearchtextbox', 'laptop');
  await page.press('#twotabsearchtextbox', 'Enter');

  // Step 3: Click a product link that opens a new tab
  const [newTab] = await Promise.all([
    page.waitForEvent('popup'),
    page.locator('a[href*="/dp/"]').first().click() // Opens product in a new tab
  ]);

  // Step 4: Wait for new tab to load
  await newTab.waitForLoadState('domcontentloaded');

  // Step 5: Interact in the new tab — for example, enter a delivery pincode
  const pinInput = newTab.locator("//span/input[@id='add-to-cart-button']");
  await pinInput.nth(1).click();
  await expect(newTab.locator("//b[text()='Cart subtotal']")).toBeVisible()


//   // Step 6: Click "Check"
//   await newTab.click("//span[text()='Check']");

 
});
  