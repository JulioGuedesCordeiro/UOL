const TABLE_CLIENTE = 'cliente';

exports.up = async (db) => {
  await db.schema.createTable(TABLE_CLIENTE, (table) => {
    table.increments(`${TABLE_CLIENTE}_id`);
    table.string('nome', 250).notNullable();
    table.enu('sexo', ['MASCULINO', 'FEMININO', 'OUTRO']).notNullable().defaultTo('FEMININO');
    table.enu('status', ['DELETADO', 'ATIVO']).notNullable().defaultTo('ATIVO');
    table.datetime('data_nascimento');
    table.integer('idade');
    table.integer('cidade_id').unsigned().references('cidade_id').inTable('cidade');
    table.timestamp('criado_em').notNullable().defaultTo(db.fn.now());
    table.timestamp('atualizado_em').notNullable().defaultTo(db.fn.now());
  });
};

exports.down = (db) => db.schema.dropTable(TABLE_CLIENTE);

exports.configuration = { transaction: true };
