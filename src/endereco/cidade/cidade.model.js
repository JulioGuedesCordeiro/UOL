import { bookshelf } from '../../db';
import Estado from '../estado/estado.model';

const Cidade = bookshelf.Model.extend(
  {
    tableName: 'cidade',
    idAttribute: 'cidade_id',
    hasTimestamps: ['criado_em', 'atualizado_em'],
    estado() {
      return this.belongsTo(Estado, 'estado_id');
    },
  },
  {
    async obterCidadePorNomeNoEstadoInformado(nomeCidade, estadoId) {
      const query = Cidade.query((cidade) => {
        cidade
          .join('estado', 'estado.estado_id', 'cidade.estado_id')
          .where('estado.estado_id', estadoId)
          .andWhere('cidade.nome', nomeCidade);
      });
      return query.fetch({ require: false });
    },

    async obterPorId(cidadeId) {
      return Cidade.forge({ cidade_id: cidadeId }).fetch({require: false });
    },

    async obterPorNome(nomeCidade) {
      return Cidade.forge({ nome: nomeCidade }).fetchAll({ withRelated: ['estado'], require: false });
    },

    async obterPorEstado(pagina = 0, quantidade = 10, estado = '') {
      const query = Cidade.query((cidade) => {
        cidade
          .join('estado', 'estado.estado_id', 'cidade.estado_id')
          .where('estado.nome', 'LIKE', `%${estado}%`)
          .orWhere('estado.sigla', 'LIKE', `%${estado}%`);
      });
      if (pagina) {
        return query.fetchPage({
          page: pagina,
          pageSize: quantidade,
          require: false,
        });
      }
      return query.fetchAll({ require: false });
    },
  },
);

export default Cidade;
