const{test,expect}= require('@playwright/test');
// import{test,expect} from '@playwright/testS'

test('Locators',async({page})=>{

    await page.goto("https://demoblaze.com/");

    //click on login button
    //await page.locator('id="login2').click
    await page.click ('id=login2');


    //provide username loactor-css

    // await page.locator('#loginusername').fill("shwetas");
    await page.fill('#loginusername','SSPlaywrite');
    // await page.type('#loginusername','SSPlaywrite');

    //provide password loactor-css

    await page.fill('#loginpassword','SSPassword');

    //click on login button
    await page.click("button[onclick='logIn()']");

    //assertion-logout button is visible
    const logoutLink =page.locator('#logout2');
    await expect(logoutLink).toBeVisible();

})