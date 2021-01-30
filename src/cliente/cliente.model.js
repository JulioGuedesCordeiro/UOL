import { bookshelf } from '../db';
import Cidade from '../endereco/cidade/cidade.model';

const Cliente = bookshelf.Model.extend(
  {
    tableName: 'cliente',
    idAttribute: 'cliente_id',
    hasTimestamps: ['criado_em', 'atualizado_em'],
    cidade() {
      return this.belongsTo(Cidade, 'cidade_id');
    },
  },
  {
    async obterPorNome(nomeCliente) {
      const query = Cliente.query((cliente) => {
        cliente.where('nome', 'LIKE', `%${nomeCliente}%`).andWhere('status', 'ATIVO');
      });
      return query.fetchAll({ withRelated: ['cidade'], require: false });
    },
    async obterPorId(clienteId) {
      const query = Cliente.query((cliente) => {
        cliente.where('cliente_id', clienteId).andWhere('status', 'ATIVO');
      });
      return query.fetch({ withRelated: ['cidade'], require: false });
    },
  },
);

export default Cliente;
