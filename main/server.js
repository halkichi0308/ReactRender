var http = require('http');
var fs = require('fs');
var url = require('url');

var server = http.createServer();
server.on('request', doRequest);
server.listen(1234);

function doRequest(req, res){

  var path = url.parse(req.url);

  switch(path.pathname){

    case '/':
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.write('index.html!');
      res.write('React app is running on /node.');
      res.end();
      break;

    case '/node':
      fs.readFile('/main/html/index.html', 'UTF-8', doRead);
      function doRead(err, data){
        res.setHeader('Contet-Type', 'text/plain');
        res.write(data)
        res.end();
      }
      break;

      case '/dist/bundle.js':
        fs.readFile('/main/html/dist/bundle.js', 'UTF-8', doRead);
        function doRead(err, data){
          res.setHeader('Contet-Type', 'text/javascript');
          res.write(data)
          res.end();
        }
      break;

    default:
      res.writeHead(400, {'Content-Type': 'text/plain'});
      res.write('err ' + path.pathname + '.');
      res.end();
      break;
  }

}
