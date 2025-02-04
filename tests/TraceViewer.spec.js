//Playwright Trace Viewer is a GUI tool that lets you explore
//recorded Playwright traces of your tests meaning you can go
//back and forward through each action of your test and visually 
//see what was happening during each action


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
