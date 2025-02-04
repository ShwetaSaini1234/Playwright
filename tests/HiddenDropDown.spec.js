const{test,expect}=require('@playwright/test');


test('test', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();

    await page.locator("//span[normalize-space()='PIM']").click();

    await page.locator("//div[6]//div[1]//div[2]//div[1]//div[1]//div[2]//i[1]").click();

    await page.waitForTimeout(5000)


    const options =await page.$$("//div[@role='listbox']//span")

    for(const option of options)

    {
        const title = await option.textContent();
        console.log(title);

        if(title.includes('Finance Manager'))
        {
            await option.click()
            break;
        }

    }
    
  });