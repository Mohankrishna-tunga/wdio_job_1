describe("demo",async()=>{
    it("webshop",async()=>{
            await browser.url("https://demowebshop.tricentis.com/");
        
            await browser.pause(4000);
            
            (await browser.$("//a[text()='Register']")).click();
            (await browser.$("//input[@id='FirstName']")).addValue("tunga");
            (await browser.$("//input[@id='LastName']")).addValue("mouneesh");
            (await browser.$("//input[@id='Email']")).addValue("mouneesht@gmail.com");
            (await browser.$("//input[@id='Password']")).setValue("sadapasu@2012");
            (await browser.$("//input[@id='ConfirmPassword']")).setValue("sadapasu@2012");
            (await browser.$("//input[@id='register-button']")).click();

            await browser.pause(3000);
            await browser.navigateTo("https://demowebshop.tricentis.com/");

            (await browser.$("//a[text()='Log in']")).click();
            
            (await browser.$("//input[@id='Email']")).addValue("mouneesht@gmail.com");
            
            (await browser.$("//input[@id='Password']")).setValue("sadapasu@2012");
            (await browser.$("//input[@class='button-1 login-button']")).click();

            

             await browser.$( "(//a[@href='/books' ])[1]").click();
         const ele1=    await browser.$("(//a[@href='/books' ])[1]").click();
      //   await ele1.waitForClickable({ timeout :3000 })
             await browser.scroll(0,500);
             await browser.pause(3000)
             await browser.$("(//input[@type='button' and @class='button-2 product-box-add-to-cart-button'])[3]").click();
  
             await browser.pause(4000);

            
             (await browser.$("//span[text()='Shopping cart']")).click();
             const dropdown = await $("//select[@id='CountryId']"); 
             await dropdown.click();
               await dropdown.selectByVisibleText('India');
             (await browser.$("//input[@id='termsofservice']")).click();
             (await browser.$("//button[@id='checkout']")).click();
            await browser.pause(3000);
            
            (await browser.$("//input[@id='Email']")).setValue('mouneesht@gmail.com');
            (await browser.$("//input[@id='Password']")).setValue('sadapasu@2012');
            (await browser.$("//input[@type='submit' and @class='button-1 login-button']")).click();
            
            // await browser.pause(4000);

            // const drop = await $("//select[@id='CountryId']"); 
            //  await drop.click();
            //    await drop.selectByVisibleText('India');
            
               
            (await browser.$('//input[@id="termsofservice"]')).click();
            (await browser.$("//button[@id='checkout']")).click();
        
            // const dc= await $("//select[@id='CountryId']");
            // await dc.click();
            // await dc.selectByVisibleText('India');
            
            (await browser.$("//input[@id='BillingNewAddress_City']")).setValue('bengaluru');
            (await browser.$("//input[@id='BillingNewAddress_Address1']")).setValue('btm');
            (await browser.$("//input[@id='BillingNewAddress_ZipPostalCode']")).setValue('560031');
            (await browser.$("//input[@id='BillingNewAddress_PhoneNumber']")).setValue('6301633034');
            (await browser.$("(//input[@class='button-1 new-address-next-step-button' and @title='Continue'])[1]")).click();
            (await browser.$("//input[@onclick='Shipping.save()']")).click();
            (await browser.$("//input[@onclick='ShippingMethod.save()']")).click();
            (await browser.$("//input[@onclick='PaymentMethod.save()']")).click();
            (await browser.$('//input[@onclick="PaymentInfo.save()"]')).click();
            (await browser.$('//input[@onclick="ConfirmOrder.save()"]')).click();
            
            (await browser.$("//a[text()='Click here for order details.']")).click();
            await browser.pause(3000);

            (await browser.$("//a[@class='ico-logout']")).click();
            


            

    //         await browser.$("//select[@id='products-viewmode']").click()
    //         const ele = await browser.$("//select[@id='products-viewmode']")
    //         await ele.selectByIndex(2);
    //                            await ele.waitForClickable({ timeout :3000 })
    //                     await browser.pause(3000)
   

                 
     })
})