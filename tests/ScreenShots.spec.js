const { expect } = require("@playwright/test")


test('Screenshot1',async({page})=>{//this will take the screenshot of visible page

await page.goto('url')
await page.screenshot({path:"tests/screenshot/"+Date.now()+'HomePage.png'})

//Folder Location:'tests/screenshot/'
//Time Stamp:Date.now()
//The name screenshot will be saved:'HomePage.png'

})

test('Screenshot2',async({page})=>{// this will take full screenshot
await page.goto('url')
await page.screenshot({path:"tests/screenshot/"+Date.now()+'FullPage.png',fullPage:true})

})

test('Element Screenshot',async({page})=>{// this will take full screenshot
    await page.goto('url')
    await page.locator('locator').screenshot({path:"tests/screenshot/"+Date.now()+'FullPage.png',fullPage:true})
    
    })
