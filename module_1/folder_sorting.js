let fs = require("fs");

let data = fs.readFileSync("./pdf.pdf" , "utf-8");
console.log(data + "");

fs.writeFileSync("pdf.pdf" , "i am pdf file");