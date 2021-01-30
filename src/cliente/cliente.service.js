import { bookshelf } from '../db';
import clienteModel from './cliente.model';

const salvar = async (cliente) =>
  bookshelf.transaction(async (transacao) => {
    try {
      const clienteCriada = await clienteModel
        .forge({
          cliente_id: cliente.cliente_id,
        })
        .save(cliente, { transacting: transacao });
      return clienteCriada;
    } catch (error) {
      throw error;
    }
  });

module.exports = {
  salvar,
};
