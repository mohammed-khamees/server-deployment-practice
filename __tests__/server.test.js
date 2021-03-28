'use strict';

const superTest = require('supertest');
const { app } = require('../server');
const request = superTest(app);

describe('Server', () => {
	it('valid routes', async () => {
		const response = await request.get('/data');
		expect(response.status).toEqual(200);
		expect(response.text).toEqual('Hello World');
	});

	it('errors routes', async () => {
		const response = await request.get('/err');
		expect(response.status).toEqual(500);
	});

	it('invalid routes', async () => {
		const response = await request.get('/asdasdasdas');
		expect(response.status).toEqual(404);
	});
});
