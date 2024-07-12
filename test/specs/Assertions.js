describe("",async()=>{
    it("",async()=>{
        await browser.url("https://www.amazon.in/");
        // await expect(browser).toHaveUrl("www.amazon.in");//FAILURE
        ///await expect(browser).toHaveUrlContainingl("www.amazon.in");//PASSES
        //await expect(browser).toHaveTitle("amazon");
        await  expect(browser).toHaveTitle("Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in");
        // await expect(browser).$()
    })
})