const{test,expect}=require('@playwright/test') 

test('Mouse Hover',async({page})=>{

    await page.goto('https://demo.opencart.com/')

    const desktop = await page.locator("//a[normalize-space()='Desktops']")
    const pc = await page.locator("//a[normalize-space()='PC (0)']")

    //Mouse Hover

    await desktop.hover()
    await pc.hover()

    await page.waitForTimeout(5000)

})