import { test, expect, Locator } from 'playwright/test';
import { webkit, chromium, firefox } from 'playwright';
import { time } from 'console';

test('Normal locators', async ({ browser }) => {

    await browser.newContext();
    const page = await browser.newPage();
    await page.goto('https://playwright.dev/docs/locators');
    await expect(page).toHaveTitle('Locators | Playwright');
});
test('RohitShetty', async ({ }) => {

    const browser = await chromium.launch({ headless: false, channel: 'chrome', slowMo: 100 });
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

    // //Checkbox locator
    //  let checkbox = await page.locator("input[value='option1']").click(); //by css attribute value
    //  const checkbox1 = page.locator("[id='checkBoxOption2']"); //by css attribute value

    //  if(await checkbox1.isChecked() === false) 
    //     {
    //       await checkbox1.check();
    //       console.log(" now checkbox is checked ");
    //     }

    // //hover to element
    // const hower = page.locator('button#mousehover'); // by CSS button id selector
    // await hower.evaluate((element) => element.scrollIntoView({ behavior: 'smooth', block: 'center' })); // scroll into view with smooth behavior
    // await page.waitForTimeout(2000); // wait for 2 seconds
    // await hower.hover(); // hover to element
    // await expect(page.getByText('Top')).toBeVisible(); // check if the element is visible after hover

    // //hidden element
    // const hidden = page.locator('input#displayed-text'); // Replace 'selector-for-hidden-element' with the actual selector
    // await hidden.waitFor({ state: 'visible' }) // wait for the element to be visible/hidden
    // await hidden.fill('Rishi'); // fill the input with text
    // await hidden.fill('');
    // await page.locator('input#hide-textbox').click(); // click the button to hide the input
    // await hidden.waitFor({ state: 'hidden' }) // wait for the element to be hidden

    //alert box
    const alrt = page.getByPlaceholder('Enter Your Name'); // by placeholder
    // await alrt.evaluate((element) => element.scrollIntoView({ behavior: 'smooth', block: 'center' }));
    // await page.waitForTimeout(2000); // wait for 2 seconds
     await alrt.fill('Maharshi'); // fill the input with text
     let alt = page.locator("input[value='Alert']").click();
        await page.on('dialog', async (dialog) => {
            console.log(dialog.message()); // log the alert message
            await dialog.accept() // accept the alert
        });
    
    await page.waitForTimeout(2000);

});