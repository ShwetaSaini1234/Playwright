
const{test,expect}=require('@playwright/test');

test('InputBox Handling ',async({page})=>{
  
    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.locator("label[for='male']").check(); //select male radio button
    // await page.check('#male'); //Another approach
    await expect (await page.locator("label[for='male']")).toBeChecked();
    await expect (await page.locator("label[for='male']").isChecked()).toBeTruthy();
    await expect (await page.locator("label[for='female']")).not.toBeChecked();
    //await expect (await page.locator("label[for='female']").isChecked()).toBeFalsy();
    await page.waitForTimeout(5000);

})
