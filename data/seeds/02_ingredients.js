
exports.seed = async function(knex) {
  await knex("ingredients").insert([
    {name: "noodles"},
    {name: "sauce"},
    {name: "eggs"},
    {name: "butter"}
  ])
}
