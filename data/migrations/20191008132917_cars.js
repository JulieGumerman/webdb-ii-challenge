
exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
      tbl.increments();
      tbl.text("VIN", 20).unique().notNullable();
      tbl.text("make", 40).notNullable();
      tbl.text("model", 40).notNullable();
      tbl.text("mileage", 7).notNullable();
      tbl.text("transmission type", 40);
      tbl.text("status", 40);

  })
};

exports.down = function(knex) {
  
};
