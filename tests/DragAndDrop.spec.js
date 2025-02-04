const{test,expect}=require('@playwright/test') 

//There are two approaches for drag and drop

//1st Approach
test('Drag and Drop',async({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/')

const source = await page.locator("div[id='draggable'] p")
const target = await page.locator("//div[@id='droppable']")

// await source.hover()
// await page.mouse.down()

// await target.hover()
// await page.mouse.up();

// await page.waitForTimeout(3000);

//2nd Approach

await source.dragTo(target)
await page.waitForTimeout(3000);


})
