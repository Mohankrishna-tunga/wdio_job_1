describe("booking",async()=>
{
    it("the flight tickets",async()=>{
        await browser.url("https://blazedemo.com/");
     
     const d1=(await browser.$("//select[@name='fromPort']"));
        await d1.click();
        await d1.selectByIndex(2);
    const  d2=await browser.$("//select[@name='toPort']");

        await d2.click();
        await d2.selectByIndex(2);

        (await browser.$('//input[@type="submit"]')).click();

        await browser.pause(3000);

        (await browser.$("(//input[@type='submit'])[3]")).click();

        await browser.pause(3000);

        (await browser.$("//input[@id='inputName']")).setValue("mouneesh");

        (await browser.$("//input[@id='address']")).setValue("btmlayout");

        (await browser.$("//input[@id='city']")).setValue("bengaluru");

        (await browser.$("//input[@id='state']")).setValue("karanataka");
        
        (await browser.$("//input[@id='zipCode']")).setValue("510031");
            
        (await browser.$("//input[@id='creditCardNumber']")).setValue("510031221133");
      
        (await browser.$("//input[@id='creditCardYear']")).setValue("2023");

        (await browser.$("//input[@id='nameOnCard']")).setValue("mouneesh tunga");
        
        (await browser.$("//input[@value='Purchase Flight']")).click();

        await browser.pause(3000);

      







    })
})