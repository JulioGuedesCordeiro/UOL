const cidades = require('./data-source/cidades.js');

const TABELA_CIDADE = 'cidade';
const TABELA_ESTADO = 'estado';
exports.up = async (knex) => {
  await Promise.all(cidades.dados.map(async (dado) => {
    const estado = await knex(TABELA_ESTADO).where('sigla', 'LIKE', `%${dado.uf}%`).select('*');
    await knex(TABELA_CIDADE).insert({
      nome: dado.cidade,
      codigo_cidade: dado.codigo_cidade,
      estado_id: estado[0].estado_id
    });
  }));
};

exports.down = async () => new Promise(resolve => resolve());