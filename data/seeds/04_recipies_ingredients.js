
exports.seed = async function(knex) {
  await knex("recipies_ingredients").insert([
    {recipie_id: 1, ingredient_id: 1, quantity: 1, measurement: "box"},
    {recipie_id: 1, ingredient_id: 2, quantity: 1, measurement: "jar"},
    {recipie_id: 2, ingredient_id:3, quantity: 2, measurement: "n/a"}
  ])
}
