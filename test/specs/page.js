
import ex from "../genericUtility/ex.js";
describe("readutility",async()=>{
    it("readata",async()=>{
    //    await ex.readdata("./test/testdata/exceldata.xlsx","sheet1",2,2)
        console.log(await ex.readdata("./test/testdata/exceldata.xlsx","Sheet1",2,2));
}
)})

