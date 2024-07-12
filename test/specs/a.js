// ./test/specs/login.test.js
const assert = require('assert');

describe('Demo Web Shop', () => {
    it('should allow a user to log in with valid credentials', async () => {
        // Open the login page
        await browser.url('https://demowebshop.tricentis.com/');

        // Locate the email and password fields and the login button
        const emailInput = await $('#Email');
        const passwordInput = await $('#Password');
        const loginButton = await $('input[value="Log in"]');

        // Enter valid credentials
        await emailInput.setValue('testuser@test.com');
        await passwordInput.setValue('Test@123');

        // Click the login button
        await loginButton.click();

        // Verify successful login by checking for a specific element
        const logoutLink = await $('a=Log out');
        assert(await logoutLink.isDisplayed());

        // Optionally, you can take a screenshot of the result
        await browser.saveScreenshot('./screenshots/login-success.png');
    });
});
