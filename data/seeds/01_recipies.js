
exports.seed = async function(knex) {
  await knex("recipies").insert([
    {name: "Spaghetti"},
    {name: "Scrambled Eggs"},
    {name: "Buttered Noodels"}
  ])
}
