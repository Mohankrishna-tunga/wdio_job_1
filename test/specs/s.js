// ./test/specs/login.test.js
const assert = require('assert');

describe('Login Page', () => {
    it('should allow a user to log in with valid credentials', async () => {
        // Open the login page
        await browser.url('/login');

        // Locate the username and password fields and the login button
        const usernameInput = await $('#username');
        const passwordInput = await $('#password');
        const loginButton = await $('button[type="submit"]');

        // Enter valid credentials
        await usernameInput.setValue('tomsmith');
        await passwordInput.setValue('SuperSecretPassword!');

        // Click the login button
        await loginButton.click();

        // Verify successful login by checking for a specific element
        const flashMessage = await $('#flash');
        const flashMessageText = await flashMessage.getText();
        assert(flashMessageText.includes('You logged into a secure area!'));

        // Optionally, you can take a screenshot of the result
        await browser.saveScreenshot('./screenshots/login-success.png');
    });
});
