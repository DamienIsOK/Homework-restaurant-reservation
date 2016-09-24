var http = require('http');
var fs = require('fs');
var url = require('url');

// Set our port to 80
var PORT = 8080;




var server = http.createServer(handleRequest);


//We need a function which handles requests and send response
function handleRequest(req, res) {

  // Capturing the url the request is made to.
  var url_parts = url.parse(req.url);

  // When we visit different urls, the switch statement call on different functions.    
  switch (url_parts.pathname) {
    case '/':
      display_root(url_parts.pathname, req, res);
      break;
    case '/reserve':
      reserve (url_parts.pathname, req, res);
      break;
    case '/tables':
      tables (url_parts.pathname, req, res);
      break;
    default:

      display_404(url_parts.pathname, req, res);
  };
};

function display_root(url, req, res) {

  fs.readFile("index.html", function(err, data){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data);
  });
  
}

// When we visit the 'http://localhost:8080/portfolio' path, this function is run.
function reserve(url, req, res) {
  fs.readFile("reserve.html", function(err, data){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data);
  });
}

function tables(url, req, res) {
  fs.readFile("tables.html", function(err, data){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data);
  });
}



// When we visit any path that is not specifically defined, this function is run.
function display_404(url, req, res) {
  res.writeHead(404, {
    'Content-Type': 'text/html'
  });
  res.write("<h1>404 Not Found </h1>");
  res.end("The page you were looking for: " + url + " can not be found ");
}

// Starts our server.
server.listen(PORT, function(){
  console.log("Server is listening on PORT: " + PORT);
});
