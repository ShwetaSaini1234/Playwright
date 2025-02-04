const{test,expect}=require('@playwright/test') 


test('Date Picker',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    // await page.fill('#datepicker','01/17/2025')

    // await page.waitForTimeout(3000)

    //Date Picker
    const month="May"
    const year="2022"
    const date ="15"

    await page.click('#datepicker')

    while(true)
    {
        const currentMonth = await page.locator('.ui-datepicker-month').textContent()
        const currentYear = await page.locator('.ui-datepicker-year').textContent()

        if(currentYear == year && currentMonth == month)
        {
            break;
        }

        await page.click("a[title='Prev']")

    }

    //1.Date selection using loop

    // const dates=await page.$$("//a[@class='ui-state-default']")

    // for(const dt of dates)
    // {
    //     if(await dt.textContent()==date)
    //     {
    //         await dt.click()
    //     }
    // }

    // await page.waitForTimeout(3000)

    //2.Date selection without using loop
    await page.click(`//a[@class='ui-state-default'][text()='${date}']`) //a[@class='ui-state-default'][normalize-space()='26']

    await page.waitForTimeout(3000)

})


