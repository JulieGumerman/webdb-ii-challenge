
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN: "4273894728", make: "Honda", model: "Civic", mileage: "184637", status: "used"},
        {VIN: "73482923", make: "Toyota", model: "Highlander", mileage: "342678", status: "like new"},
        {VIN: "47328789", make: "Honda", model: "Accord", mileage: "153278"}
      ]);
    });
};
