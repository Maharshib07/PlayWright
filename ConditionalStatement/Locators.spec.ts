import { test, expect, Locator } from 'playwright/test';
import { webkit, chromium, firefox } from 'playwright';
import { time } from 'console';

test('Normal locators', async ({ browser }) => {

    await browser.newContext();
    const page = await browser.newPage();
    await page.goto('https://playwright.dev/docs/locators');
    await expect(page).toHaveTitle('Locators | Playwright');
});
test ('RohitShetty', async ({}) => {
   
    const browser = await chromium.launch({ headless: false, channel: 'chrome',slowMo: 100 });
    //await browser.newContext();
    const page = await browser.newPage();
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    await expect(page).toHaveTitle('Practice Page');
    
    // // Textbox locator
    //  const textbox = page.locator('#autocomplete');
    //  await textbox.fill('Rishi');
    //  await textbox.fill(''); // Clear the input by filling it with an empty string
    
    // //Radio button locator
    // const RadioButton = await page.locator("//input[@value='radio1']").click(); // by xpath
    // const RadioButton1= await page.locator(".radioButton").nth(2).check(); //by css class index number
    
    // //Select box locator
    // const select = page.locator("#dropdown-class-example"); //by css id
    // await select.selectOption({ value: 'option1' }); //by value
    // await select.selectOption({ label: 'Option2' }); //by text
    // await select.selectOption({ index: 3 }); //by index

    //Checkbox locator
     let checkbox = await page.locator("input[value='option1']").click(); //by css attribute value
     const checkbox1 = page.locator("[id='checkBoxOption2']"); //by css attribute value
    
     if(await checkbox1.isChecked() === false) 
        {
          await checkbox1.check();
          console.log(" now checkbox is checked ");
        }
    await page.waitForTimeout(2000);

});