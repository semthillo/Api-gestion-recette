import db from '../config/db.js';
class RecipeModel {
  static async checkRecipes(title) {
    try {
      const [results] = await db.query(
        'SELECT * FROM recipes WHERE title = ?',
        [title]
      );
      return results.length;
    } catch (error) {
      throw error;
    }
  }
  static async checkRecipeById(id) {
    try {
      const [results] = await db.query('SELECT * FROM recipes WHERE id = ?', [
        id,
      ]);
      return results.length;
    } catch (error) {
      throw error;
    }
  }
  static async getRecipeById(id) {
    try {
      const [results] = await db.query('SELECT * FROM recipes WHERE id = ?', [
        id,
      ]);
      return results;
    } catch (error) {
      throw error;
    }
  }

  static async getAllRecipes() {
    try {
      const [results] = await db.query('SELECT * FROM recipes');
      return results;
    } catch (error) {
      throw error;
    }
  }
  static async createRecipes(title, ingredient, type) {
    try {
      const [result] = await db.query(
        'INSERT INTO recipes(title, ingredient, type) VALUES (?, ?, ?)',
        [title, ingredient, type]
      );
      return result.insertId;
    } catch (error) {
      throw error;
    }
  }
  static async deleteRecipes(id) {
    try {
      const [result] = await db.query('DELETE FROM recipes WHERE id =?', [id]);
      return result.affectedRows;
    } catch (error) {
      throw error;
    }
  }

  static async updateRecipes(id, title, ingredient, type) {
    try {
      const [result] = await db.query(
        'UPDATE recipes SET title=?, ingredient=?, type=? WHERE id=?',
        [title, ingredient, type, id]
      );

      return result.affectedRows;
    } catch (error) {
      throw error;
    }
  }
}
export default RecipeModel;
