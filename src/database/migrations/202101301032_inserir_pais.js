const paises = require('./data-source/pais');

const TABLE_PAIS = 'pais';

exports.up = async (db) => {
  await Promise.all(paises.dados.map((x) => {
    return db(TABLE_PAIS).insert({
      nome: x.pais,
      sigla: x.sigla,
    });
  }));
};
exports.down = async () => new Promise(resolve => resolve());