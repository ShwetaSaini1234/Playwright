const{test,expect}=require('@playwright/test');

test('Multi Select Dropdown',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.selectOption('#colors',['Red','Blue',])
    //await page.locator('#colors').selectOption('Blue');

    //----------Assertions
    //1.Check number of options in js array
    const options=await page.$$('#colors option');
    console.log('Number of options available:', options.length);
    await expect(options.length).toBe(7);

    // 2.check no of options in dropdown
    const option=page.locator('#colors option')
    await expect(option).toHaveCount(7);

    //3-check the presence of value in dropdown

    const optionInList=await page.locator('#colors').textContent();
    await expect(optionInList.includes('Blue')).toBeTruthy();
    
})