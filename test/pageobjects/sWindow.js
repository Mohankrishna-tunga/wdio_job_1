class sWindow
{
    get  bbtn(){
        return browser.$('//a[@class="block w-[100%] h-full"]/div/main/div/figure[@class="w-[4rem] h-[4rem] bg-[#f9c2c2] flex justify-center items-center rounded"]');

    }
    get web(){
        return browser.$('//section[text()="Popups"]')
    }
    get bw(){
        return browser.$('//section[text()="Browser Windows"]')  
    }
    get bwbtn(){
        return browser.$('//a[text()="Open in new window"]');
    }

    async swiwindow(){
        await browser.url("https://demoapps.qspiders.com/");
        await browser.pause(2000);
        await this.bbtn.click();
        await browser.pause(2000);
        await this.web.click();
        await browser.pause(2000);
        await this.bw.click();
        await browser.pause(2000);
        await this.bwbtn.click();
        await browser.pause(3000);
        await browser.switchWindow("DemoApps ");//we can give in switch window like url and title and partial url and partial title
        await browser.pause(3000);
    }
}
export default new sWindow();