import RecipeModel from '../models/RecipeModel.js';

class RecipeController {
  static async getAllRecipes(_req, res) {
    try {
      const result = await RecipeModel.getAllRecipes();
      res.status(200).json(result);
    } catch (error) {
      throw error;
    }
  }
  static async getRecipeById(req, res) {
    try {
      const { id } = req.params;
      const result = await RecipeModel.getRecipeById(id);
      res.status(200).json(result);
    } catch (error) {
      throw error;
    }
  }

  static async createRecipes(req, res, next) {
    try {
      const { title, ingredient, type } = req.body;
      await RecipeModel.createRecipes(title, ingredient, type);
      res.status(200).send('Recipe is created successfuly');
    } catch (error) {
      throw error;
    }
    next();
  }
  static async deleteRecipes(req, res, next) {
    try {
      const { id } = req.params;
      await RecipeModel.deleteRecipes(id);
      res.status(200).send('Recipe is deleted successfuly');
    } catch (error) {
      throw error;
    }
    next();
  }
  static async updateRecipes(req, res, next) {
    try {
      const { id } = req.params;
      const { title, ingredient, type } = req.body;
      await RecipeModel.updateRecipes(id, title, ingredient, type);
      res.status(200).send('Recipe is updated successfuly');
    } catch (error) {
      throw error;
    }
    next();
  }
}
export default RecipeController;
