import { test, Browser, Locator, expect} from "@playwright/test";
import { chromium, firefox, webkit } from "@playwright/test";

test("booking a phone", async () => {
    const browser = await chromium.launch({headless:false, slowMo:800})
    // const browsers = await firefox.launch()
    // const browserr = await webkit.launch() 
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto('https://www.flipkart.com/')
    await expect(page).toHaveURL('https://www.flipkart.com/')
    await page.hover("//div[@aria-label='Fashion']")
    await page.getByLabel('Fashion').click()
    await page.click("//div[@aria-label='Fashion']")
    await page.hover("//div[@aria-label='Electronics']")

})


