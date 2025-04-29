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
    test('GET /search returns results array', async () => {
        const res = await (0, supertest_1.default)(server_1.app)
            .get('/search')
            .query({ q: 'Node', limit: 2 });
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('results');
        expect(Array.isArray(res.body.results)).toBe(true);
    });
    test('GET /search without q returns 400', async () => {
        const res = await (0, supertest_1.default)(server_1.app).get('/search');
        expect(res.status).toBe(400);
        expect(res.body).toHaveProperty('error');
    });
    test('GET /page/:title returns page data', async () => {
        const res = await (0, supertest_1.default)(server_1.app).get('/page/JavaScript');
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('page');
        expect(res.body.page).toHaveProperty('title');
        expect(res.body.page).toHaveProperty('text');
    });
    test('GET /page/:title invalid lang returns 400', async () => {
        const res = await (0, supertest_1.default)(server_1.app)
            .get('/page/JavaScript')
            .query({ lang: 'invalid' });
        expect(res.status).toBe(400);
        expect(res.body).toHaveProperty('error');
    });
    test('GET /pageid/:id returns page data', async () => {
        const res = await (0, supertest_1.default)(server_1.app).get('/pageid/21721040');
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('page');
        expect(res.body.page).toHaveProperty('pageid');
    });
    test('GET /pageid/:id invalid id returns 400', async () => {
        const res = await (0, supertest_1.default)(server_1.app).get('/pageid/abc');
        expect(res.status).toBe(400);
        expect(res.body).toHaveProperty('error');
    });
});
describe('GraphQL endpoint', () => {
    test('search query returns array', async () => {
        const res = await (0, supertest_1.default)(server_1.app)
            .post('/graphql')
            .send({ query: '{ search(q:"Node") { title snippet pageid } }' });
        expect(res.status).toBe(200);
        expect(Array.isArray(res.body.data.search)).toBe(true);
    });
    test('page query returns page object', async () => {
        const res = await (0, supertest_1.default)(server_1.app)
            .post('/graphql')
            .send({ query: '{ page(title:"JavaScript") { title text } }' });
        expect(res.status).toBe(200);
        expect(res.body.data.page).toHaveProperty('title');
        expect(typeof res.body.data.page.text).toBe('string');
    });
    test('pageById query returns page object', async () => {
        const res = await (0, supertest_1.default)(server_1.app)
            .post('/graphql')
            .send({ query: '{ pageById(id:21721040) { title text sections } }' });
        expect(res.status).toBe(200);
        expect(res.body.data.pageById).toHaveProperty('title');
        expect(Array.isArray(res.body.data.pageById.sections)).toBe(true);
    });
});
