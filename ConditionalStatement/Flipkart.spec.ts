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
    //await page.click("//a[text()='Lenovo 300 /1yr battery life, Ambidextrous,Ergonomic,10...']")

    //  const [newPage] = await Promise.all([
    //     context.waitForEvent("page"), // Correct event for new tab
    //     product.click()
    // ]);

    // await newPage.waitForLoadState();


    // await page.fill("//input[@placeholder='Enter Delivery Pincode']",'534126')
    // await page.click("//span[text()='Check']")


})


