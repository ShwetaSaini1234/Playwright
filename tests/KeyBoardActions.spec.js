const{test,expect}=require('@playwright/test') 

test('Key Board Action',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.locator('#field1').clear()

    await page.locator('#field1').fill('I am here')

    // keyboard control A

    await page.keyboard.press('Control+A')

    // keyboard action control C

    await page.keyboard.press('Control+C')

    // keyboard action Tab
     await page.keyboard.down('Tab')

    //keyboard action control locator('#field1')

    await page.keyboard.press('Control+V')

    await expect(await page.locator('#field2')).toHaveValue('I am here')

    await page.waitForTimeout(3000)

})