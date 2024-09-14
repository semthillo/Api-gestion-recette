
import express from 'express';
import { createRecipe, getAllRecipes } from '../controllers/recipeController.js'; 

const router = express.Router();

router.post('/recipes', createRecipe);
router.get('/recipes', getAllRecipes);

export default router;

