exports.seed = function(knex) {
  return knex('accounts').del()
    .then(function () {
      return knex('accounts').insert([
        {conta: 54678, saldo: 1000} 
      ]);
    });
};
