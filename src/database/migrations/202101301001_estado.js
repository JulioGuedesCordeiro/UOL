const TABLE_ESTADO = 'estado';

exports.up = async (db) => {
  await db.schema.createTable(TABLE_ESTADO, (table) => {
    table.increments(`${TABLE_ESTADO}_id`);

    table.string('nome', 100).notNullable();
    table.string('sigla', 10).notNullable().unique();
    table.integer('codigo_estado');

    table.integer('pais_id').unsigned().notNullable().references('pais_id').inTable('pais');
    table.timestamp('criado_em').notNullable().defaultTo(db.fn.now());
    table.timestamp('atualizado_em').notNullable().defaultTo(db.fn.now());
  });
};

exports.down = (db) => db.schema.dropTable(TABLE_ESTADO);

exports.configuration = { transaction: true };
