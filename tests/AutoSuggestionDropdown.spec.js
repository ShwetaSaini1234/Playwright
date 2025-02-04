const{test,expect}=require('@playwright/test')

test ('AutosuggestionDropDown',async({page})=>{

        await page.goto('https://www.trivago.com/')
        await page.locator('#input-auto-complete').fill("Gatlinburg");


        await waitForSelector("//li[@class='_1dRr6B']")
        const options=await page.$$("//li[@class='_1dRr6B']")

        for(const option of options)
        {
                const listName = await option.textContent()
                if(listName.includes('Gatlinburg'))
                {
                        await option.click()
                        break;
                }
        }

        await page.waitForTimeout(5000);

        
        
})