const{test,expect}=require('@playwright/test') 

test('Double Click',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    const buttonCopy = await page.locator("button[ondblclick='myFunction1()']")

    //Perform Double click

    await buttonCopy.dblclick()

   const field2 = await page.locator('#field2')
   await expect (field2).toHaveValue('Hello World!')

   await page.waitForTimeout(3000)
   
})