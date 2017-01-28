//redirect http to https

// http://heyrod.com/snippets/redirect-http-to-https-in-expressjs.html
var http = require('http');
var express = require('express');
var HTTP_PORT = 80;
var HTTPS_PORT = 443;

var app = express();
app.set('port', HTTP_PORT);


app.all('/*', function (req, res, next) {
  console.log(req.headers);
  if (/^http$/.test(req.protocol)) {
    console.log('path1');
    var host = req.headers.host.replace(/:[0-9]+$/g, ""); // strip the port # if any
    if ((HTTPS_PORT != null) && HTTPS_PORT !== 443) {
      console.log('path2');
      return res.redirect(301, "https://" + host + ":" + HTTPS_PORT + req.url);
    }
    else {
      return res.redirect(301, "https://" + host + req.url);
    }
  }
  else {
    return next();
  }
});


app.get('/test', function (req, res) {
  res.status(200).send("success");
});


http.createServer(app).listen(HTTP_PORT).on('listening', function () {
  return console.log("HTTP to HTTPS redirect app launched.");
});


// redbird


var sslobj = {
  port: 443,
  key: 'ssl/docker/privkey1.pem',
  cert: 'ssl/docker/fullchain1.pem',
  ca: 'ssl/docker/chain1.pem'
};


var redbird = require('redbird')({
  port: 443,
  xfwd: false,
  ssl: sslobj
});


// redbird.register('red-meteor.com/mlb', 'http://mlb:4000', {
//   ssl: true
// });

// redbird.register('red-meteor.com/censusVectorTiles', 'http://censusVectorTiles:4001', {
//   ssl: true
// });

// redbird.register('red-meteor.com/census-api', 'http://censusapi:4002', {
//   ssl: true
// });
