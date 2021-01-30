const TABLE_CIDADE = 'cidade';

exports.up = async (db) => {
  await db.schema.createTable(TABLE_CIDADE, (table) => {
    table.increments(`${TABLE_CIDADE}_id`);
    table.string('nome', 100).notNullable();
    table.integer('codigo_cidade', 7);
    table.integer('estado_id').unsigned().notNullable().references('estado_id').inTable('estado');
    table.timestamp('criado_em').notNullable().defaultTo(db.fn.now());
    table.timestamp('atualizado_em').notNullable().defaultTo(db.fn.now());
  });
};

exports.down = (db) => db.schema.dropTable(TABLE_CIDADE);

exports.configuration = { transaction: true };
