import banking from "../pageobjects/banking.js";
import fs from "fs"
const a =fs.readFileSync("./test/testdata/bank.json");
const data=JSON.parse(a);

describe("banking",async()=>{
    let aun=data.username;
    let apd=data.password
    
    it("b",async()=>{
      
    })
})