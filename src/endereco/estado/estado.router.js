import express from 'express';
import controller from './estado.controller';

const api = express.Router();
api.get('/estados', controller.listar);
module.exports = api;
