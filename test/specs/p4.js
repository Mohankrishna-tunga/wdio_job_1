describe("banking automation", async () => {
    it("testing", async () => {
        // Open the demo banking website
        await browser.url("https://message.bankofamerica.com/onlinebanking_demo/OLB_Simulator/");
        
        // Sign in
        await (await browser.$("//button[@id='landing_sign']")).click();
        await (await browser.$("//a[@class='go-btn' and @aria-labelledby='signInOpt1']")).click();
        await (await browser.$("//input[@id='username']")).setValue('yourUsername'); // Set your username
        await (await browser.$("//input[@id='passcode']")).setValue('yourPasscode'); // Set your passcode
        await (await browser.$("//a[@class='link button']")).click();

        // Account number and SSN
        await (await browser.$("//input[@id='accountNumber']")).setValue('yourAccountNumber'); // Set account number
        await (await browser.$("//input[@id='socialSecurityNumber']")).setValue('yourSSN'); // Set SSN
        await (await browser.$("//strong[text()='Continue']")).click();
        await (await browser.$("//strong[text()='Send Code']")).click();

        // Authorization code
        await (await browser.$("//input[@id='authorizationCode']")).setValue('yourAuthCode'); // Set authorization code
        
        // Select checkbox and continue
        await (await browser.$("(//input[@class='form-check-input'])[2]")).click();
        await (await browser.$("//strong[text()='Continue']")).click();
      
        // Select other checkboxes and continue
        await (await browser.$("(//input[@class='form-check-input'])[1]")).click();
        await (await browser.$("(//input[@class='form-check-input'])[2]")).click();
        await (await browser.$("//strong[text()='Continue']")).click();
      
        // Navigate to 'Pay & Transfer'
        await (await browser.$("//span[text()='Pay & Transfer']")).click();
        await (await browser.$("//a[text()='Make a transfer']")).click();

        // Select accounts for transfer
        await (await browser.$("(//span[@class='boa-dropdown-toggle'])[1]")).click();
        await (await browser.$("(//div[@class='boa-dropdown-menu-item'])[3]")).click();
        await (await browser.$("(//span[@class='boa-dropdown-toggle'])[2]")).click();
        await (await browser.$("(//div[@class='boa-dropdown-menu-item'])[2]")).click();

        // Set transfer amount and confirm
        await (await browser.$("//input[@id='payAmount']")).setValue('yourAmount'); // Set transfer amount
        await (await browser.$("(//span[@role='button'])[3]")).click();
        await (await browser.$("(//div[@class='boa-dropdown-single-line-menu-item'])[1]")).click();
        await (await browser.$("//button[text()='Next']")).click();

        // Finalize the transfer
        await (await browser.$("//a[text()='Transfer']")).click();
        await (await browser.$("//a[text()='Make Another Transfer']")).click();
    });
});
