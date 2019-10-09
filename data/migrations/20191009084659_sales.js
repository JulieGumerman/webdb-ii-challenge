
exports.up = function(knex) {
  return knex.schema.createTable("sales", tbl => {
      tbl.increments();
      tbl.text("sale status", 40);
      tbl.integer("car_id");
      tbl.foreign("car_id").references("cars.id")
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("sales");
};
