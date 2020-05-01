const db = require("../data/config")

function getRecipes(){
    return db("recipies")
}

function getShoppingList(id){
    return db("recipies_ingredients as ri")
        .join("recipies as r", "ri.recipie_id", "r.id")
        .join("ingredients as i", "ri.ingredient_id", "i.id")
        .where("r.id", id)
        .select("i.name as ingredients", "ri.quantity", "ri.measurement")
}

function getInstrutions(id){
    return db("instructions as i")
        .join("recipies as r", "i.recipie_id", "r.id")
        .where("r.id", id)
        .select("i.step", "i.details")
}

function getRecipiesWithIngredient(id){
    return db("recipies_ingredients as ri")
        .join("recipies as r", "ri.recipie_id", "r.id")
        .join("ingredients as i", "ri.ingredient_id", "i.id")
        .where("i.id", id)
        .select("r.name")
}
module.exports ={
    getRecipes,
    getShoppingList,
    getInstrutions,
    getRecipiesWithIngredient,
}