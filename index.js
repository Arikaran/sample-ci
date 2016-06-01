var express = require('express') ;
var api = express() ;
var DEFAULT_PORT = 3000 ;


api.get('/', function(req, res, next)
{
	res.send('Hello World') ;
}) ;

api.get('/contacts', function(req, res, next)
{
	res.end([]) ;
}) ;

api.get('/contacts/:name', function(req, res, next)
{
	res.end() ;
}) ;

api.post('/contacts/:name', function(req, res, next)
{
	if(req.params.name == 'exist')
		return res.status(403).send() ;
	
	res.end() ;
}) ;

api.put('/contacts/:name/:new', function(req, res, next)
{
	res.end() ;
}) ;

api.delete('/contacts/:name', function(req, res, next)
{
	res.end() ;
}) ;


/*
console.log('server started on port 3000') ;
api.listen(3000) ;
*/

var port = process.env.PORT || DEFAULT_PORT
console.log('server started port ' + port) ;
api.listen(port) ;


module.exports = api ;