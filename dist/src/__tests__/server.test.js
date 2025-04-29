"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const server_1 = require("../server");
let httpServer;
beforeAll(async () => {
    httpServer = await (0, server_1.startServer)();
});
afterAll(async () => {
    await httpServer.close();
});
describe('REST endpoints', () => {
    test('GET /health returns status ok', async () => {
        const res = await (0, supertest_1.default)(server_1.app).get('/health');
        expect(res.status).toBe(200);
        expect(res.body).toEqual({ status: 'ok' });
    });
    test('GET /ready returns status ready', async () => {
        const res = await (0, supertest_1.default)(server_1.app).get('/ready');
        expect(res.status).toBe(200);
        expect(res.body).toEqual({ status: 'ready' });
    });
    test('GET /openapi.json returns spec', async () => {
        const res = await (0, supertest_1.default)(server_1.app).get('/openapi.json');
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('openapi');
    });
});
describe('GraphQL endpoint', () => {
    test('search query returns array', async () => {
        const res = await (0, supertest_1.default)(server_1.app)
            .post('/graphql')
            .send({ query: '{ search(q:\"Node\") { title snippet pageid } }' });
        expect(res.status).toBe(200);
        expect(Array.isArray(res.body.data.search)).toBe(true);
    });
});
