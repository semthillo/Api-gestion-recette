import express from 'express';
import { createRecipe } from '../controllers/recipeController.js'; // Importation nommée

const router = express.Router();

router.post('/recipes', createRecipe);

export default router;
