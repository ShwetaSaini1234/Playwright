const{test,except}= require('@playwright/test')

test('Uplaod Files',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    const uplaodFile=await page.locator('#singleFileInput') //choose file locator

    await uplaodFile.setInputFiles('tests/UploadFile/ShwetaSainiresume.pdf') //path of upload folder

    await expect(uplaodFile).toHaveText('ShwetaSainiresume.pdf') //doesnt have direct loactor for text so assertion is getting failed
        
    await page.waitForTimeout(5000)


    // const uplaodFiles=await page.locator('#multipleFilesInput')
    // await uplaodFiles.setInputFiles(['tests/UploadFile/ShwetaSainiresume.pdf','tests/UploadFile/Indian Attire.png'])
    
    // await page.waitForTimeout(5000)
    
})