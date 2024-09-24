import express from 'express'
import RecipeController from '../controllers/RecipeController.js'; 
import { addRequestValidatore, deleteRequestValidatore, updateRequestValidatore } from '../middlewares/validatorRecipe.js';

// const app = express()
const router = express.Router()

router.get('/recipes', RecipeController.getAllRecipes )
router.get('/recipes/:id', RecipeController.getRecipeById )
router.post('/recipes', addRequestValidatore, RecipeController.createRecipes )
router.delete('/recipes/:id',deleteRequestValidatore, RecipeController.deleteRecipes)
router.put('/recipes/:id',updateRequestValidatore, RecipeController.updateRecipes)

export default router;