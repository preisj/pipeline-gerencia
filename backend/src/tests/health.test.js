const request = require('supertest');
const app = require('../server'); // adapte se necessário

describe('Health Check', () => {
  it('should return OK', async () => {
    const res = await request(app).get('/health');
    expect(res.text).toBe('OK');
  });
});
