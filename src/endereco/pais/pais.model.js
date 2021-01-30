import { bookshelf } from '../../db';

const Pais = bookshelf.Model.extend(
  {
    tableName: 'pais',
    idAttribute: 'pais_id',
    hasTimestamps: ['criado_em', 'atualizado_em'],
  },
  {},
);

export default Pais;
