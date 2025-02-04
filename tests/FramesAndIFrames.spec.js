const{test,expect}=require('@playwright/test');

test('Frames',async({page})=>{


    await page.goto('https://ui.vision/demo/webtest/frames/');

    //Find out total no of frames
    const allFrames = await page.frames()
    console.log(allFrames.length); // this will give total number of Frames


    //By using Frame Object-using name or URL of the frame 

    //const frame = await page.frame('name');
    const frame = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
    await frame.fill("input[name='mytext1']",'Hello')

    

    //By using frame locator
    const frameLocator=await page.frameLocator("frame[src='frame_1.html']").locator("input[name='mytext1']")
    await frameLocator.fill("Hello")

    await page.waitForTimeout(5000);
})

