const{test,expect}=require('@playwright/test') 

test('Right Click',async({page})=>{

    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo/trigger-left-click.html')

    const button = await page.locator('.context-menu-one.btn.btn-neutral')

    //left mouse click

    await button.click({button:'left'})

    await page.waitForTimeout(5000)
})