import express from 'express';
import controller from './cliente.controller';

const api = express.Router();
api.post('/cliente', controller.cadastrar);
api.patch('/cliente/:id', controller.editar);
api.delete('/cliente/:id', controller.deletar);
api.get('/cliente/obter-por-nome/:nome', controller.obterPorNome);
api.get('/cliente/obter-por-id/:id', controller.obterPorId);
module.exports = api;
