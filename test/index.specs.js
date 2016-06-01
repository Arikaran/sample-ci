var request = require('supertest') ;
var api = require('../index.js') ;


describe('contacts', function()
{
	describe('GET /contacts', function()
	{
		it('should return the list of contacts', function()
		{
			return request(api)
			.get('/contacts')
			.send()
			.expect(200) ;
		}) ;
	}) ;
	
	describe('POST /contacts/:name', function()
	{
		it('should create a new contact', function()
		{
			return request(api)
			.post('/contacts/foo')
			.send()
			.expect(200) ;
		}) ;
		
		it('should not be authorized to create a new contact with an already reg', function()
		{
			return request(api)
			.post('/contacts/exists')
			.send()
			.expect(403) ;
		}) ;
	}) ;
	
	describe('PUT /contacts/:name/:new', function()
	{
		it('should update contacts with the same name', function()
		{
			return request(api)
			.put('/contacts/foo/bar')
			.send()
			.expect(200) ;
		}) ;
	}) ;
	
	describe('DELETE /contacts/:name', function()
	{
		it('should remove contacts with the same name', function()
		{
			return request(api)
			.delete('/contacts/foo')
			.send()
			.expect(200) ;
		}) ;
	}) ;
}) ;