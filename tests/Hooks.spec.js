const{test,expect}=require('@playwright/test')

let page;

test.beforeEach(async({browser})=>{
    page=await browser.newPage();

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    //Login
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button',{type:'submit'}).click();

});
    test.afterEach(async()=>{

        await page.locator('.oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon').click();
        await page.locator("//a[normalize-space()='Logout']").click();


})

test('Hooks',async()=>
{

    //Action after login
    const text=await page.locator("//h6[normalize-space()='Buzz']")
    await expect(text).toHaveText('Dashboard')
    
    //Second action after login

    await page.locator("//span[normalize-space()='Admin']").click()
    
})