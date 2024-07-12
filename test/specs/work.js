// import amazonwp from "../pageobjects/amazonwp.js/index.js";

// describe("yo",async()=>{
//     it(         
//         "yoyo",async()=>{
//             await amazonwp.welcm
//             await browser.pause(2000)
//             await amazonwp.searchtextfield("phones")
//             await amazonwp.dropdownlist.map(ele=>console.log(ele.getText()));
//         }
//     )
// })

import amazonwp from "../pageobjects/amazonwp.js";

describe("Amazon Search Test", () => {
    it("should search for phones and print dropdown options", async () => {
        await amazonwp.welcm;
        await browser.pause(2000);
        await amazonwp.searchForItem("phones");
        const dropdownItems = await amazonwp.dropdownlist;
        for (const ele of dropdownItems) {
            console.log(await ele.getText());
        }
    });
});
