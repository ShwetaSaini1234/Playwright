const{test,expect}=require('@playwright/test');

// test.skip('AlertsHandling', async({page})=>{

//     await page.goto('https://testautomationpractice.blogspot.com/');


//     //enabling dialog window handler

//     page.on('dialog',async dialog=>{
//         expect(dialog.type()).toContain('alert')
//         expect(dialog.message()).toContain('I am an alert box')
//         await dialog.accept();
//     })

//     await page.click('#alertBtn');
//     // await page.waitForTimeout(5000)

// });
 
// test('AlertsHandlingWithOkAndCancelButton', async({page})=>{

//     await page.goto('https://testautomationpractice.blogspot.com/');

    
    
//     //enabling dialog window handler

//     page.on('dialog',async dialog=>{
//         expect(dialog.type()).toContain('confirm') //what tpye of alert
//         expect(dialog.message()).toContain('Press a button')
//         await dialog.accept(); //close by using Ok button
//         //await dialog.dismiss(); // close by using cancel button
//     })

//     await page.click('#confirmBtn');
//     await expect(page.locator('#demo')).toHaveText("You pressed OK!");
//     // await page.waitForTimeout(5000)

// });

test('Prompt Handling With Input Box', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    //enabling dialog window handler

    page.on('dialog',async dialog=>{
        expect(dialog.type()).toContain('prompt') //what tpye of alert
        expect(dialog.message()).toContain('Please enter your name')
        expect(dialog.defaultValue()).toContain('Harry Potter')
        await dialog.accept('Lilly'); //close by using Ok button
        
    })

    await page.click('#promptBtn');
    await expect(page.locator('#demo')).toHaveText("Hello Lilly! How are you today?");
    // await page.waitForTimeout(5000)

})