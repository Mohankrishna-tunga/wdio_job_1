class shoppingwp
{
    get url(){
        return browser.url("http://106.51.90.215/Build/Online_Book_Shop_System/");
    }
    get signup(){
        return browser.$('//div[@class="collapse navbar-collapse"]//child::button[@id="register_button"]')
    }
    get username(){
        return  browser.$('//input[@placeholder="Username" and @name="register_username"]');
    }
    get password(){
        return browser.$('//input[@placeholder="Password" and @name="register_password"]');
    }
    get button(){
        return browser.$('//button[@value="register"]');
    }

    async sign(userval,passval){
        await this.url;
        await this.signup;
        await this.username.setValue(userval);
        await this.password.setValue(passval);
        await this.button.click();

    }
}
export default new shoppingwp();