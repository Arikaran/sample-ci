var request = require('supertest') ;
var api = require('../index.js') ;


/*
describe('api', function()
{
	it('should return Hello world on GET /', function()
	{
		return request(api)
		.get('/')
		.send()
		.expect('Hello foobar') ;
	}) ;
}) ;
*/

describe('contacts', function()
{
	describe('GET /api/contacts', function()
	{
		it('should return the list of contacts', function()
		{
			return request(api)
			.get('/api/contacts')
			.send()
			.expect(200) ;
		}) ;
	}) ;
	
	describe('POST /api/contacts/:name', function()
	{
		it('should create a new contact', function()
		{
			return request(api)
			.post('/api/contacts/foo')
			.send()
			.expect(200) ;
		}) ;
		
		it('should not be authorized to create a new contact with an already reg', function()
		{
			return request(api)
			.post('/api/contacts/exists')
			.send()
			.expect(403) ;
		}) ;
	}) ;
	
	describe('PUT /api/contacts/:name/:new', function()
	{
		it('should update contacts with the same name', function()
		{
			return request(api)
			.put('/api/contacts/foo/bar')
			.send()
			.expect(200) ;
		}) ;
	}) ;
	
	describe('DELETE /api/contacts/:name', function()
	{
		it('should remove contacts with the same name', function()
		{
			return request(api)
			.delete('/api/contacts/foo')
			.send()
			.expect(200) ;
		}) ;
	}) ;
}) ;