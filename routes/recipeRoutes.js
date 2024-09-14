const express = require('express')
const router = express.Router()
const recipesController = require('../controllers/recipeController')


router.post('/recipes', recipesController.createRecipe)


module.exports = router;