import express from 'express';
const api = express.Router();

api.use(require('../src/endereco/cidade/cidade.router'));
api.use(require('../src/endereco/estado/estado.router'));
api.use(require('../src/cliente/cliente.router'));

module.exports = api;