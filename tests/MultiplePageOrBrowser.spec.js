const{ test, expect, chromium }=require('@playwright/test');

test.skip('Handle Pages/Windows', async ()=>{

    const browser = await chromium.launch();
    const context=await browser.newContext()

    //Creating pages using context
    const page1=await context.newPage()
    const page2=await context.newPage()

    //to check how many pages are created using context
    const allPages=context.pages()
    console.log("No of pages created", allPages.lenght)

    //page 1 is checking the first page
    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await expect(page1).toHaveTitle("OrangeHRM")

    //Validation of second page on different tab
    await page2.goto('https://www.orangehrm.com/')
    await expect(page2).toHaveTitle("Human Resources Management Software | OrangeHRM")
})

test('Handle tabs with one window',async ()=>{

    const browser = await chromium.launch();
    const context=await browser.newContext()

    //Creating pages using context
    const page1=await context.newPage()

    //page 1 is checking the first page
    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await expect(page1).toHaveTitle("OrangeHRM")
    
    const pagePromise=context.waitForEvent('page') //Before clicking the the below link page will open the enmpty tab
    await page1.locator("//a[normalize-space()='OrangeHRM, Inc']").click();

    const newPage=await pagePromise;

    await expect(newPage).toHaveTitle("Human Resources Management Software | OrangeHRM")
})


