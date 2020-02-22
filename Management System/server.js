var http = require('http');
var fs = require('fs');

function onRequest(request, response){
  fs.readFile('./forms.html', null, function(error, data){
    if (error){
      response.writeHead(404);
      response.write('File not found!');
    } else {
      response.write(data);
    }
    response.end();
  });
  response.end();
}
