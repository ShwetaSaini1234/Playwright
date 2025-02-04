const {test,expect}=require('@playwright/test')

test('Handle CheckBoxes ',async({page})=>{
  
    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.locator("//input[@id='monday' and @type='checkbox']").check();
    await page.locator("//input[@id='thursday' and @type='checkbox']").check();

    
    //await page.check("//input[@id='monday' and @type='checkbox']");

   await expect(await page.locator("//input[@id='monday' and @type='checkbox']")).toBeChecked();
   await expect(await page.locator("//input[@id='monday' and @type='checkbox']").isChecked()).toBeTruthy();
   await expect(await page.locator("//input[@id='thursday' and @type='checkbox']")).toBeChecked();
   await expect(await page.locator("//input[@id='sunday' and @type='checkbox']")).not.toBeChecked();
   await expect(await page.locator("//input[@id='friday' and @type='checkbox']")).not.toBeChecked();

    //handle multiple checkboxes

    const checkboxes=[
                        "//input[@id='sunday' and @type='checkbox']",
                        "//input[@id='friday' and @type='checkbox']",
                        "//input[@id='saturday' and @type='checkbox']"

                     ];
        for (const checkbox of checkboxes)
        {

        await page.locator(checkbox).check();
        } 

        for (const checkbox of checkboxes)
        {
            
            if (await page.locator(checkbox).isChecked())
            {
             await page.locator(checkbox).uncheck();
            } 
        }



    await page.waitForTimeout(5000);

})
