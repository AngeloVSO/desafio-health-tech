exports.up = function (knex) {
  return knex.schema.createTable("accounts", (table) => {
    table.integer("conta").primary();
    table.float("saldo").notNull();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("accounts");
};
