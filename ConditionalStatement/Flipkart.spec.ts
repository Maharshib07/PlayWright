import { test, Browser, Locator, expect} from "@playwright/test";
import { chromium, firefox, webkit } from "@playwright/test";

test.only("booking a phone", async () => {
    const browser = await chromium.launch({headless:false, slowMo:900})
    // const browsers = await firefox.launch()
    // const browserr = await webkit.launch()
    const context = await browser.newContext()
    const page = await context.newPage()

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
    let product = page.locator("//a[text()='Lenovo 300 /1yr battery life, Ambidextrous,Ergonomic,10...']")
    await product.scrollIntoViewIfNeeded()
    
    //await page.waitForTimeout(4000);
  const [newTab] = await Promise.all([
    page.waitForEvent('popup'),
    page.click("//a[text()='Lenovo 300 /1yr battery life, Ambidextrous,Ergonomic,10...']") // Opens product in a new tab
  ]);

  // Step 4: Wait for new tab to load
  await newTab.waitForLoadState('domcontentloaded');

// Interact with elements in the new tab
await newTab.locator('//input[@placeholder="Enter Delivery Pincode"]').click();
await newTab.fill("//input[@placeholder='Enter Delivery Pincode']", '534126');
await newTab.click("//span[text()='Check']");

});

test ('ssss',async () => {
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


//   // Step 6: Click "Check"
//   await newTab.click("//span[text()='Check']");

 
});