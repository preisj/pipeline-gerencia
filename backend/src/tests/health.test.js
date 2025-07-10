
const request = require('supertest');
const app = require('../../app');

describe('Health Check', () => {
  it('should return OK', async () => {
    const res = await request(app).get('/health');
    expect(res.text).toBe('OK');
  });
});
