const{test,expect}=require('@playwright/test');
const exp = require('constants');

test('Handle Dropdown', async({page})=>
{

await page.goto('https://testautomationpractice.blogspot.com/');
// await page.locator('#country').selectOption('Germany'); //passing country
//await page.locator('#country').selectOption({label:'Germany'}); //lable-visible text
//await page.locator('#country').selectOption({value:'germany'}); //By passing Index value
//await page.locator('#country').selectOption({index:2}); //By using Index-Index values can be changed 

// await page.selectOption('#country','Germany');//By directly calling select options

//-----If there is not any select tag in html than select option in dropdown using Loop

const options = await page.$$('#country option') //This will have all option countries in an array

for(const option of options)
{
   let values=await option.textContent();
   if(values.includes('India'))
   {
    await page.selectOption('#country', values)
    break;
   }
}

// await page.waitForTimeout(5000);

//-----------Assertions-------------//

//------check no of options in drop down

// const countries = await page.locator('#country option')
// await expect(countries).toHaveCount(10);

//-------check no of options in the dropdown

// const countries = await page.$$('#country option') //it will return options as an array
// console.log("Number of options:", countries.length); //it will return total no of options
// await expect(countries.length).toBe(10); //Available options should be 10

//------check presence of value in the dropdown

// const contents=await page.locator('#country').textContent() //it will return all the countries in the form of String
// console.log(contents)
// await expect(contents.includes('India')).toBeTruthy();

//-----check above by looping

// const options = await page.$$('#country option') //This will have all option countries in an array
// let status=false;

// for(const option of options)
// {
//    // console.log(await option.textContent());

//    let values=await option.textContent();
//    if(values.includes('India'))
//    {
//     status=true;
//     break;
//    }
// }
// expect(status).toBeTruthy();


// await page.waitForTimeout(5000);

})

