import express from 'express';
import {
  addRequestValidatore,
  deleteRequestValidatore,
  updateRequestValidatore,
} from '../middlewares/validatorRecipe.js';
import RecipeController from '../controllers/RecipeController.js';

const router = express.Router();

router.get('/recipes', RecipeController.getAllRecipes);
router.get('/recipes/:id', RecipeController.getRecipeById);
router.post('/recipes', addRequestValidatore, RecipeController.createRecipes);
router.delete(
  '/recipes/:id',
  deleteRequestValidatore,
  RecipeController.deleteRecipes
);
router.put(
  '/recipes/:id',
  updateRequestValidatore,
  RecipeController.updateRecipes
);

export default router;
