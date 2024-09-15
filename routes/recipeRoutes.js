import express from "express";
import {
  createRecipe,
  getAllRecipes,
  updateRecipe,
} from "../controllers/recipeController.js";

const router = express.Router();

router.post("/recipes", createRecipe);
router.get("/recipes", getAllRecipes);
router.put("/recipes/:id", updateRecipe);

export default router;
