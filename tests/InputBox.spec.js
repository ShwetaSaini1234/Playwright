const{test,expect}= require('@playwright/test')

test('InputBox Handling ',async({page})=>{
  
    await page.goto('https://testautomationpractice.blogspot.com/');

    //await page.fill('#name','Rose');

    await expect(await page.locator('#name')).toBeVisible();
    await expect(await page.locator('#name')).toBeEmpty();
    await expect(await page.locator('#name')).toBeEnabled();
    await expect(await page.locator('#name')).toBeEditable();


    await page.locator('#name').fill('Rose');
    
    await page.waitForTimeout(5000);
})