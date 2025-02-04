
const{test,expect}=require('@playwright/test');

test('Multi Select Dropdown',async({page})=>{

    await page.goto('URL')

    await page.locator('locator').click();


    //---option 1
    const options=await page.locator('ul>li label input')
    await expect(options).toHaveCount(11);

    //----option 2

    const option=await page.$$('ul>li label input')
    await expect(option.length).toBe(11);

    //----option 3 with loop

    const optionL=await page.$$('ul>li label')
    for(let option of optionL)
    {
        const value=await option.textContent();
        console.log("values:",value)//to print all values in console
        if(value.includes('Angular') || value.includes('Java'))
        {
            await option.click();
        }
    }

        await page.waitForTimeout(5000);

})
