const express = require("express")
const db = require("./recipies_model")

const router = express.Router()

router.get("/", async (req, res, next) => {
    try{
        res.json({ message: "Welcome route is connected",})
    }catch(err){
        next(err)
    }
})

router.get("/recipes", async (req, res, next) => {
    try{
        const recipes = await db.getRecipes()
        res.json(recipes)
    }catch(err){
        next(err)
    }
})

router.get("/recipes/:id/shoppingList", async (req, res, next) => {
    try{
        const list = await db.getShoppingList(req.params.id)
        res.json(list)
    }catch(err){
        next(err)
    }
})

router.get("/recipes/:id/instructions", async (req, res, next) => {
    try{
        const result = await db.getInstrutions(req.params.id)
        res.json(result)
    }catch(err){
        next(err)
    }
})

router.get("/ingredients/:id/recipes", async (req, res, next) => {
    try{
        const result = await db.getRecipiesWithIngredient(req.params.id)
        res.json(result)
    }catch(err){
        next(err)
    }
})

module.exports = router