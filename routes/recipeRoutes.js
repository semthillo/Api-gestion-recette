import express from "express";
import {
  createRecipe,
  getAllRecipes,
  updateRecipe,
  destroyRecipe,
} from "../controllers/recipeController.js";
import { body, param } from 'express-validator';
const router = express.Router();

const validate =   [
  body('title').isString().notEmpty().withMessage('Le titre est requis et doit être une chaîne de caractères'),
  body('ingredient').isString().notEmpty().withMessage('Les ingrédients sont requis et doivent être une chaîne de caractères'),
  body('type').isString().notEmpty().withMessage('Le type de recette est requis et doit être une chaîne de caractères'),
]
const validateId = param('id').isInt().withMessage("L'ID doit être un entier")

router.post("/recipes",validate, createRecipe);
router.get("/recipes", getAllRecipes);
router.put("/recipes/:id",validateId, validate,  updateRecipe);
router.delete("/recipes/:id", validateId, destroyRecipe);

export default router;
