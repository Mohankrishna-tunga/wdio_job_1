import facebook from "../pageobjects/facebook.js";
import { Key } from 'webdriverio'

describe("just click",async()=>
  {
    it("click",async()=>{
      await facebook.loginPage()
    })
})