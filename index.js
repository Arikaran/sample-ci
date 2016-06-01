var express = require('express') ;
var api = express() ;
var DEFAULT_PORT = 3000 ;


api.get('/', function(req, res, next)
{
	res.send('Hello World') ;
}) ;

api.get('/contacts', function(req, res, next)
{
	res.send([]) ;
}) ;

api.get('/contacts/:name', function(req, res, next)
{
	res.send() ;
}) ;

api.post('/contacts/:name', function(req, res, next)
{
	if(req.params.name == 'exists')
		return res.status(403).send() ;
	res.send() ;
}) ;

api.put('/contacts/:name/:new', function(req, res, next)
{
	res.send() ;
}) ;

api.delete('/contacts/:name', function(req, res, next)
{
	res.send() ;
}) ;


/*
console.log('server started on port 3000') ;
api.listen(3000) ;
*/

var port = process.env.PORT || DEFAULT_PORT
console.log('server started port ' + port) ;
api.listen(port) ;


module.exports = api ;