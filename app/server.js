const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet');

const server = http.createServer(function (req, res) {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  }

  else if (page == '/js/main.js') {
    fs.readFile('js/main.js', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/javascript' });
      res.write(data);
      res.end();
    });
  }
  else if (page == '/css/main.css') {
    fs.readFile('css/main.css', function (err, data) {
      res.write(data);
      res.end();
    });
  }
  else if (page == '/api/coinFlip') {
    let result = {}
    const coinFlipResult = Math.floor(Math.random() * 2)
    result.coinflipResult = coinFlipResult
    result.guess = params.face
    if (params.face == 'heads' && coinFlipResult == 0 || params.face == 'tails' && coinFlipResult == 1) {
      result.outcome ="you win"
    }
    else {
      result.outcome = "you lose"
    }

    res.write(JSON.stringify(result));
    res.end();
  }
  // else {
  // figlet('404!!', function (err, data) {
  //   if (err) {
  //     console.log('Something went wrong...');
  //     console.dir(err);
  //     return;
  //   }
  //   res.write(data);
  //   res.end();
  // });
  //   res.end();
  // }
});

server.listen(8000);