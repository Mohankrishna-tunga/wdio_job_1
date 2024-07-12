import  excel  from "exceljs";
//to create one workbook inside the excel
// const book=new excel.Workbook()//since thisis storre inside book we have to give extension to the book
// book.xlsx.readFile("./test/testdata/exceldata.xlsx")
// const sheet=book.getWorksheet("Sheet1")
// let data=sheet.getRow(1).getCell(1).toString()//converts everything into string
class exceluti{
   async readdata(filepath,sname,rno,cno)
   {
    const book=new excel.Workbook();
    await book.xlsx.readFile(filepath)
    const sheet=book.getWorksheet(sname);
    let row= await sheet.getRow(rno);
    let data=row.getCell(cno).toString();
    return data;
   }
}
export default new exceluti();