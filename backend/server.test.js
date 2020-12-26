// IMPORTANT: this is an example test that needs to be deleted in the future
const supertest = require('supertest');
const { app } = require('./app');

const request = supertest(app);

describe('Hello world tests', () => {
  it('/api/hello succesful get', async done => {
    const response = await request.get('/api/hello');

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Hello world');

    done();
  });
});
