class banking{
    get url(){
        return browser.url("http://49.249.28.218:8081/AppServer/Online_Banking_System/");

    }
    get slogin(){
        return browser.$('//a[@href="staff_login.php"]');
    }
    get usn(){
        return browser.$('//input[@class="customer_id"]');

    }
    get pwd(){
        return browser.$('//input[@class="password"]');

    }
    get btn(){
        return browser.$('//input[@class="login-btn"]');

    }

    async sign(uv,pv){
        await this.url();
        await this.slogin.click();
        await this.usn.setValue(uv);
        await this.pwd.setValue(pv);
        await this.btn.click();
    }
}
export default new banking();