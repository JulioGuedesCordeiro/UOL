import { bookshelf } from '../../db';
import Pais from '../pais/pais.model';

const Estado = bookshelf.Model.extend(
  {
    tableName: 'estado',
    idAttribute: 'estado_id',
    hasTimestamps: ['criado_em', 'atualizado_em'],
    pais() {
      return this.belongsTo(Pais, 'pais_id');
    },
  },
  {
    async verificaExistenciaEstado(id) {
      return Estado.forge({ estado_id: id }).fetch({ require: false });
    },
    async listar() {
      return Estado.forge().fetchAll({ require: false });
    }
  },
);

export default Estado;
