var xlsx = require("xlsx");

var wb = xlsx.readFile("Pick List Generator 2.0.xlsx");

var ws = wb.Sheets["Order Form"];

var data = xlsx.utils.sheet_to_json(ws);

/*
var newData = data.map(function(record){

});*/

console.log(data);
