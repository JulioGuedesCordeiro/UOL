const TABLE_PAIS = 'pais';

exports.up = async (db) => {
  await db.schema.createTable(TABLE_PAIS, (table) => {
    table.increments(`${TABLE_PAIS}_id`);

    table.string('nome', 100).notNullable();
    table.string('sigla', 10).notNullable().unique();

    table.timestamp('criado_em').notNullable().defaultTo(db.fn.now());
    table.timestamp('atualizado_em').notNullable().defaultTo(db.fn.now());
  });
};

exports.down = db => db.schema.dropTable(TABLE_PAIS);

exports.configuration = { transaction: true };