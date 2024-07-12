import { Key } from 'webdriverio'//WE USED BROWSER METHOD HERE 
class facebook{
    get home(){
        return  browser.url("https://www.facebook.com/")
    }
    get email(){
        return browser.$('//div[@class="_6lux"]/input[@id="email"]')
    }
    get password(){
        return browser.$("//input[@id='pass']")
    }
    get  btn(){
        return browser.$('//button[@id="u_0_5_z2"]')
    }

async loginPage(){
    await this.home;
    await this.email.setValue("tmkr2012@gmail.com");
    await browser.pause(3000)
    await browser.keys([Key.Ctrl,'a']);
    await browser.pause(3000)
    await browser.keys([Key.Ctrl,'c']);
    await browser.pause(3000)
    await this.password.click();

    await browser.pause(3000)
    await browser.keys([Key.Ctrl,'v']);
    await browser.pause(5000);

}}
export default new facebook();