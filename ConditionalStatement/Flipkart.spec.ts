import { test, Locator, expect } from "@playwright/test";
//import { chromium, firefox, webkit } from "@playwright/test";

test.only("booking a phone", async ({ page }) => {
    //const browser = await chromium.launch({ headless: false, slowMo: 900 });
    //const browser = await firefox.launch()
    //const browser = await webkit.launch()
    //const context = await browser.newContext()
    //const page = await context.newPage()

    await page.goto('https://www.flipkart.com/')
    await expect(page).toHaveURL('https://www.flipkart.com/')
    //await page.hover("//div[@aria-label='Fashion']")
    //await page.getByLabel('Fashion').click()
    //await page.click("//div[@aria-label='Fashion']")
    //await page.hover("//div[@aria-label='Electronics']")
    // await page.locator("//input[@class='Pke_EE']").fill('Motorolo edge g50 pro')
    // await page.locator("//input[@class='Pke_EE']").clear()
    // await page.fill("//input[@class='Pke_EE']",'Motorola 60 pro')
    // await page.fill("//input[@class='Pke_EE']",'')
    await page.fill("//input[@class='Pke_EE']",'Mouse')
    await page.waitForTimeout(4000)
    await page.locator("//a/div[text()='mouse wireless']").click()
    let product = page.locator("//a[text()='Lenovo 130 Wireless Optical Mouse  with Bluetooth']")
    await product.scrollIntoViewIfNeeded()
    
    //await page.waitForTimeout(4000);
  const [newTab] = await Promise.all([
    page.waitForEvent('popup'),
    page.click("//a[text()='Lenovo 130 Wireless Optical Mouse  with Bluetooth']") // Opens product in a new tab
  ]);

  // Step 4: Wait for new tab to load
  await newTab.waitForLoadState('domcontentloaded');

// Interact with elements in the new tab
await newTab.locator('//input[@placeholder="Enter Delivery Pincode"]').click();
await newTab.fill("//input[@placeholder='Enter Delivery Pincode']", '534126');
await newTab.click("//span[contains(text(),'Check')]");
await expect(newTab.locator("//input[@value='534126']")).toHaveValue('534126')

});
