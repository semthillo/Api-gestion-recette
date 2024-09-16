import express from "express";
import {
  createRecipe,
  getAllRecipes,
  updateRecipe,
  destroyRecipe,
} from "../controllers/recipeController.js";
import { addRequestValidator, deleteRequestValidator, updateRequestValidator } from "../middlewares/validatorRecipe.js";
const router = express.Router();

router.post("/recipes",addRequestValidator, createRecipe);
router.get("/recipes", getAllRecipes);
router.put("/recipes/:id",updateRequestValidator,  updateRecipe);
router.delete("/recipes/:id", deleteRequestValidator, destroyRecipe);

export default router;
