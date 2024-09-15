import express from "express";
import {
  createRecipe,
  getAllRecipes,
  updateRecipe,
  destroyRecipe,
} from "../controllers/recipeController.js";

const router = express.Router();

router.post("/recipes", createRecipe);
router.get("/recipes", getAllRecipes);
router.put("/recipes/:id", updateRecipe);
router.delete("/recipes/:id", destroyRecipe);

export default router;
