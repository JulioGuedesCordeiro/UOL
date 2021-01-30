const estados = require('./data-source/estados');

const TABLE = 'estado';
const PAIS_ID = 1;

exports.up = async (db) => {
  await Promise.all(estados.dados.map(x => db(TABLE).insert({
    nome: x.estado,
    sigla: x.uf,
    codigo_estado: x.codigo_estado,
    pais_id: PAIS_ID,
  })));
};

exports.down = async () => new Promise(resolve => resolve());