
exports.seed = async function(knex) {
  await knex("instructions").insert([
    {step: 1, details: "Put water in a pot and bring to a boil", recipie_id: 1},
    {step: 2, details: "Place noodles in boilng water", recipie_id: 1},
    {step: 3, details: "Put sauce in seperate pot on low heat untill warm", recipie_id: 1},
    {step: 4, details: "When noodles are soft drain noodels into strainer", recipie_id: 1 },
    {step: 5, details: "Put noodels back into empty pot, add sauce, and stir", recipie_id: 1},
    {step: 6, details: "Plate and serve.", recipie_id: 1},
    {step: 1, details: "Crack egg's into bowl and whisk", recipie_id: 2},
    {step: 2, details: "Place pan on stove and set to medium heat", recipie_id: 2},
    {step: 3, details: "When pan is hot pour whisked eggs into pan.", recipie_id: 2},
    {step: 4, details: "Cook and stir until well done", recipie_id: 2},
    {step: 5, details: "Plate and serve.", recipie_id: 2},
    {step: 1, details: "Put water in a pot and bring to a boil", recipie_id: 3},
    {step: 2, details: "Place noodles in boilng water", recipie_id: 3},
    {step: 3, details: "When noodles are soft drain noodels into strainer", recipie_id: 3 },
    {step: 4, details: "Put noodels back into empty pot, add butter, and stir", recipie_id: 3},
    {step: 5, details: "Put in a bowl and serve.", recipie_id: 3},
  ])
};
