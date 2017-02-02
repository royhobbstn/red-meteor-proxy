// Redbird


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


redbird.register('red-meteor.com/mlb', 'http://red-meteor.com:4000', {
  ssl: true
});

redbird.register('red-meteor.com/censusvectortiles', 'http://red-meteor.com:4001', {
  ssl: true
});
redbird.register('red-meteor.com/censusapi', 'http://red-meteor.com:4002', {
  ssl: true
});


redbird.register("red-meteor.com", "https://maputopia.com/portfolio", {
  ssl: true
});
