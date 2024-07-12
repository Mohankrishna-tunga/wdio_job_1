describe('flipkart',async()=>{
    
    it('search',async()=>{
        await browser.url('https://www.flipkart.com/')
        await browser.maximizeWindow()
        await browser.pause(3000)
        await browser.$('.Pke_EE').setValue('mobiles')
        const yo=await browser.$('._2iLD__')
        await yo.click()
        await browser.pause(3000)
        await browser.back()
        await browser.minimizeWindow(
            
        )
        await browser.pause(3000)
    })
})