import { bookshelf } from '../../db';
import cidadeModel from './cidade.model';

const salvar = async (cidade) =>
  bookshelf.transaction(async (transacao) => {
    try {
      const cidadeCriada = await cidadeModel
        .forge({
          cidade_id: cidade.cidade_id,
        })
        .save(cidade, { transacting: transacao });
      return cidadeCriada;
    } catch (error) {
      throw error;
    }
  });

module.exports = {
  salvar,
};
