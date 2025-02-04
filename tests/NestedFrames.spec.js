const{test,expect}=require('@playwright/test');

test('NestedFramesOrInnerFrame',async({page})=>{

    await page.goto('https://ui.vision/demo/webtest/frames/');

    const frame = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})
    const childFrame =await frame.childFrames(); //This will return array of child frames
    await childFrame[0].locator("//div[@class='e2CuFe eU809d']").click();
    //await childFrame[0].locator("locator").check();




    //Below code needs to be checked again
    // const options = await childFrame[0].$$("//div[@jsname='wQNmvb']")
    // for (const option of options)
    // {
    //     const dropDownList = await option.textContent;
    //     console.log(dropDownList)

    //     if(dropDownList.includes('Yes'))
    //     {
    //         await option.click();
    //         break;
    //     }
    // }
    


    //await childFrame[0].locator("//span[normalize-space(text()) = 'Well, now I know :-)']").selectOption('Well, now I know :-)');




   // await page.waitForTimeout(5000);


})