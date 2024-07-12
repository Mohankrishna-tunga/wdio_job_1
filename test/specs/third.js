describe("myntra",async()=>
{
    it("searching something",async()=>{
        await browser.url("https://www.myntra.com/");
        await browser.$("//input[@class='desktop-searchBar']").setValue("ruosh");
        
        await browser.$("//span[@class='myntraweb-sprite desktop-iconSearch sprites-search']").click();
        await browser.pause(10000);    
        await browser.$("//li[@class='pagination-next']").click();
        await browser.pause(15000);    
        await browser.$("//li[@class='pagination-next']").click();
        await browser.pause(15000);    
     
        (await browser.$("//li[@class='pagination-next']")).click();
        await browser.pause(15000);
        await browser.$("//a[@href='formal-shoes/ruosh/ruosh-men-tan-brown-soild-leather-formal-shoes/20655708/buy']").click();

    })})