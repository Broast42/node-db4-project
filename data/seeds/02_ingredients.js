
exports.seed = async function(knex) {
  await knex("ingredients").insert([
    {name: "noodles"},
    {name: "sauce"},
    {name: "ground beef"},
    {name: "eggs"}
  ])
}
