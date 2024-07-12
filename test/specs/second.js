describe("yogesh yogi",async()=>{
    it("Avinashavi",async()=>{
        await browser.url("https://www.youtube.com/")
        await browser.maximizeWindow()
        await browser.pause(10000)

         await browser.$('//input[@id="search"]').setValue("koun ")
          await browser.$("#search-icon-legacy").click()
        await browser.pause(10000)
        await browser.back()
        await browser.minimizeWindow()
    })
})