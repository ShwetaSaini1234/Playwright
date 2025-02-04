const{test,expect}= require('@playwright/test');

test('BuildIn-Locators',async({page})=>{

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

//Any element having alt attribute, eg:image
const companyLogo = await page.getByAltText('company-branding')
await expect(companyLogo).toBeVisible();

// Input box having palceholder attribute is available

await page.getByPlaceholder('Username').fill('Admin');
await page.getByPlaceholder('Password').fill('admin123');

//To lacate by explict and implicit accessibility attribute
await page.getByRole('button',{type:'submit'}).click();

//To locate by Text content
//await expect(await page.getByText('Robert Teste')).toBeVisible();

const adminOnPage = await page.locator("//p[@class='oxd-userdropdown-name']").textContent()
await expect(await page.getByText(adminOnPage)).toBeVisible();

//Locate the element by label with input box tag name-rarely mentioned in the HTML


})