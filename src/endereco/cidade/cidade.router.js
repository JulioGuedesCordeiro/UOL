import express from 'express';
import controller from './cidade.controller';

const api = express.Router();
api.post('/cidade', controller.cadastrar);
api.get('/cidade/obter-por-nome/:nome', controller.obterPorNome);
api.get('/cidade/obter-por-estado/', controller.obterPorEstado);

module.exports = api;
