
// redbird


var redbird = require('redbird')({ port: 3500 });
redbird.register('www.red-meteor.com/mlb-map', 'http://0.0.0.0:4000');

