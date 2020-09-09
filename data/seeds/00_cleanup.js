
exports.seed = async function(knex) {
  await knex("recipies_ingredients").truncate()
  await knex("instructions").truncate()
  await knex("ingredients").truncate()
  await knex("recipies").truncate()  
}
