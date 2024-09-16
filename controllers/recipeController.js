import db from "../config/db.js";

export const checkRecipe = async (title)=>{
  try{
  const [results] = await db.query("SELECT * FROM recipes WHERE title =?",[title]);
  return results.length
 }catch(error){
    throw error;
    
 }
}
export const checkRecipeById = async (id)=>{
  try{
  const [results] = await db.query("SELECT * FROM recipes WHERE id =?",[id]);
  return results.length
 }catch(error){
    throw error;
    
 }
}
export const createRecipe = async (req, res, next) => {

  const { title, ingredient, type } = req.body;

  try {
    const [results] = await db.query(
      "INSERT INTO recipes (title, ingredient, type) VALUES (?, ?, ?)",
      [title, ingredient, type]
    );
    res.status(200).json({ id: results.insertId });
  } catch (err) {
    console.error("Error inserting recipe:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
  next()
};
export const getAllRecipes = async (_req, res, next) => {

  try {
    const [results] = await db.query("SELECT * FROM recipes");
    console.table(results);
    res.status(200).json(results);
  } catch (err) {
    console.error("Error listing recipe:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
  next()
};

export const updateRecipe = async (req, res, next) => {

  const { id } = req.params;
  const { title, ingredient, type } = req.body;

  try {
    const [results] = await db.query(
      "UPDATE recipes SET title = ?, ingredient= ?, type = ? WHERE  id = ?",
      [title, ingredient, type, id]
    );
    res.status(200).json({ message: "recipe has been updated successfully" });
  } catch (err) {
    console.error("Error update recipe:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
  next()
};

export const destroyRecipe = async (req, res, next) => {
  const { id } = req.params;

  try { 
    const [results] = await db.query("DELETE FROM recipes WHERE  id = ?", [id]);
    res.status(200).json({ message: "recipe has been deleted successfully" });
  } catch (err) {
    console.error("Error delete recipe:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
  next()
};
