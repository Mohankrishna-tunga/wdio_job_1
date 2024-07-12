// class amazonwp{//lclass name will be page name
//     // get welcm(){
//     //     return browser.url("https://www.amazon.in/")
//     // }
//     get searchtextfield(){//getter name will be the ele name
//         return $('#twotabsearchtextbox')

//     }
//     get dropdownlist(){
//         return $$("(//select[@id='searchDropdownBox']/option)"),.3w3w
//     }
//     async well(search){//well function is used to write the business logic
//         await this.searchtextfield(search);

//     }
// }
// export default new amazonwp()



class AmazonWP {
    // Class name will be the page name
    get welcm() {
        return browser.url("https://www.amazon.in/");
    }

    get searchtextfield() { // Getter name will be the element name
        return $('#twotabsearchtextbox');
    }

    get dropdownlist() {
        return $$("#searchDropdownBox option");
    }

    async searchForItem(search) { // Function to write the business logic
        await this.searchtextfield.setValue(search);
        await browser.keys('Enter'); // Simulate pressing 'Enter' key
    }
}

export default new AmazonWP();
