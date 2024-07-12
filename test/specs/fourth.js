describe("flipkart",async()=>{
    it("yo",async()=>{
        await browser.url("https://demoapps.qspiders.com/")
        await browser.$("//p[@class='text-[#000000] font-semibold text-[0.9rem] mt-[0.6rem]' and  text()='UI Testing Concepts']").click();
        await browser.pause(5000);
        await browser.$("//section[text()='Dropdown']");
        const a="//select[@id='select1']";
        await browser.moveToElement(a).click;
        


    })
})