describe("changing the password",async()=>{
    it("yes",async()=>{
        await browser.url("https://message.bankofamerica.com/onlinebanking_demo/OLB_Simulator/");
        (await browser.$('#landing_sign')).click();
        (await browser.$("//a[@aria-labelledby='signInOpt3']")).click();
        (await browser.$("//select[@aria-label='Usernames']")).click();
    

    })
})