var express = require('express') ;
var api = express() ;
var DEFAULT_PORT = 3000 ;


// configure static server
api.use(express.static('public')) ;

require('./models')(api) ; // load models
require('./methods')(api) ; // load methods


/*
console.log('server started on port 3000') ;
api.listen(3000) ;
*/

var port = process.env.PORT || DEFAULT_PORT
console.log('server started port ' + port) ;
api.listen(port) ;


module.exports = api ;