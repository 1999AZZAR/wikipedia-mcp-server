import request from 'supertest';
import { app, startServer } from '../server';

let httpServer: any;

beforeAll(async () => {
  httpServer = await startServer();
});

afterAll(async () => {
  await httpServer.close();
});

describe('REST endpoints', () => {
  test('GET /health returns status ok', async () => {
    const res = await request(app).get('/health');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ status: 'ok' });
  });

  test('GET /ready returns status ready', async () => {
    const res = await request(app).get('/ready');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ status: 'ready' });
  });

  test('GET /openapi.json returns spec', async () => {
    const res = await request(app).get('/openapi.json');
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('openapi');
  });
});

describe('GraphQL endpoint', () => {
  test('search query returns array', async () => {
    const res = await request(app)
      .post('/graphql')
      .send({ query: '{ search(q:\"Node\") { title snippet pageid } }' });
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body.data.search)).toBe(true);
  });
});
