describe("youtubesearch", async () => {
    it("yo", async () => {
        await browser.url("https://www.amazon.in/");

        // await browser.$("//input[@id='twotabsearchtextbox']").addValue('Apple');
        // browser.pause(3000)
        // const s = await browser.$$("//div[@class='s-suggestion-container']//span");

        // await browser.pause(3000);

        // await s.forEach(x=>{console.log(x.getText())})


        await browser.$("#twotabsearchtextbox").setValue('Apple')

        await browser.pause(5000)

        const itemList = await browser.$$("//div[@class='autocomplete-results-container']//div/span[1]")

        await itemList.forEach(item => {
            console.log(item.getText())
        })
        


    })
})