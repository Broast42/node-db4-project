
exports.up = async function(knex) {
    await knex.schema.createTable("recipies", (table) => {
        table.increments("id")
        table.text("name").notNull().unique()
    })
    
    await knex.schema.createTable("ingredients", (table) => {
        table.increments("id")
        table.text("name").notNull().unique()
    })

    await knex.schema.createTable("instructions", (table) => {
        table.increments("id")
        table.text("details").notNull()
        table.integer("step").notNull()
        table.integer("recipie_id")
            .references("id")
            .inTable("recipies")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
    })

    await knex.schema.createTable("recipies_ingredients", (table) => {
        table.integer("recipie_id")
            .references("id")
            .inTable("recipies")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
        table.integer("ingredient_id")
            .references("id")
            .inTable("ingredients")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
        table.float("quantity").notNull()
        table.text("measurement").notNull()
        table.primary(["recipie_id", "ingredient_id"])
    })

    
  
}

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("recipies_ingredients")
    await knex.schema.dropTableIfExists("instructions")
    await knex.schema.dropTableIfExists("ingredients")
    await knex.schema.dropTableIfExists("recipies")
}
