import { sign } from "crypto";
import shoppingwp from "../pageobjects/shoppingwp.js";
import fs from "fs";
const data=fs.readFileSync("./test/testdata/avi.json");
const credentials=json.parse(data);//CONVERTS JSON OBJECT TO JS OBJECT

describe("ecom",async()=>{
    let avd=credentials.userval;
    let avp=credentials.passval;
    it("e",async()=>{
        await shoppingwp.sign(avd,avp);
    })
})