const request = require('supertest');
const app = require('../src/app');
const data = require('../src/data/users');

const prefix = process.env.ENV_PREFIX || '';

beforeEach(() => {
  data.reset();
});

describe('Users API', () => {
  test('GET /users - should return all users', async () => {
    const res = await request(app).get(`${prefix}/users`);
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  test('GET /users/:id - should return a specific user', async () => {
    const res = await request(app).get(`${prefix}/users/1`);
    expect(res.statusCode).toBe(200);
    expect(res.body.name).toBe('Alice');
  });

  test('GET /users/:id - 404 for nonexistent user', async () => {
    const res = await request(app).get(`${prefix}/users/999`);
    expect(res.statusCode).toBe(404);
  });

  test('POST /users - should create a new user', async () => {
    const res = await request(app).post(`${prefix}/users`).send({ name: 'Charlie', email: 'charlie@mail.com' });
    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe('Charlie');
  });

  test('PUT /users/:id - should update user', async () => {
    const res = await request(app).put(`${prefix}/users/1`).send({ name: 'Alice Updated' });
    expect(res.statusCode).toBe(200);
    expect(res.body.name).toBe('Alice Updated');
  });

  test('DELETE /users/:id - should delete user', async () => {
    const res = await request(app).delete(`${prefix}/users/1`);
    expect(res.statusCode).toBe(204);
  });

  test('DELETE /users/:id - 404 if user does not exist', async () => {
    const res = await request(app).delete(`${prefix}/users/999`);
    expect(res.statusCode).toBe(404);
  });

  // E mais testes para edge cases e dados inválidos
});
