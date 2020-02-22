var xlsx = require("xlsx");

var wb = xlsx.readFile("Pick List Generator 2.0.xlsx");

var ws = wb.Sheets["Contractor Orders"];

var data = xlsx.utils.sheet_to_json(ws);


/*
var newData = data.map(function(record){
  record.'Invoice Code' = "";
  record.Company = company;

});*/

console.log(data);
