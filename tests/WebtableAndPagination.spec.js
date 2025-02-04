const{test,expect}=require('@playwright/test');
const { clear } = require('console');

test('Webtable',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    const pTable = await page.locator('#productTable') //complete table locator

    const headerOptions = await pTable.locator('thead tr th') // Available header options
    console.log('Heading Count:',await headerOptions.count())
    expect(await headerOptions.count()).toBe(4)

    const tableRows  = await pTable.locator('tbody tr') // Total no of rows available in one page
    console.log('No of rows in Table:', tableRows.count())
    expect(await tableRows.count()).toBe(5)

    //1.Select check box in particular row

    const matchedRow = tableRows.filter({

        has: page.locator('td'),
        hasText: 'Laptop'
    })
   
   //2.Select multiple checkbox by re-usable function

    await selectProductFromList(tableRows, page, 'Smartphone')
    await selectProductFromList(tableRows, page,'Tablet')
    await selectProductFromList(tableRows, page, 'Smartwatch')
    await selectProductFromList(tableRows, page, 'Wireless Earbuds' )

    await page.waitForTimeout(5000);


    //3.Read/Print all product details from first displayed page
    for(let i=0;i<await tableRows.count();i++ )
    {
        const row = tableRows.nth(i)
        const tds = row.locator('td')

        for(let j=0; j<await tds.count()-1;j++) // count is -1 because because we are not pritnting last column
        {
            console.log(await tds.nth(j).textContent()) // THis line will print all data from each row
        }
    }

    //4.Read/Print all product details from ALL page

        for(let i=0;i<await tableRows.count();i++ )
        {
        const row = tableRows.nth(i)
        const tds = row.locator('td')

        for(let j=0; j<await tds.count()-1;j++) // count is -1 because because we are not pritnting last column
        {
            console.log(await tds.nth(j).textContent()) // THis line will print all data from each row
        }

           await page.waitForTimeout(5000);
    }    

           await page.waitForTimeout(5000);
    
    
})

// 5.Creating re-usable function for selecting checkbox

async function selectProductFromList(tableRows, page, name) 
{
    const matchedRow = tableRows.filter({

        has: page.locator('td'),
        hasText: name
    })
    await matchedRow.locator("//input[@type='checkbox']").check();
    
}