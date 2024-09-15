import db from "../config/db.js";
import { body, validationResult } from "express-validator";

export const createRecipe = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

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
};
export const getAllRecipes = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const [results] = await db.query("SELECT * FROM recipes");
    console.table(results);
    res.status(200).json(results);
  } catch (err) {
    console.error("Error listing recipe:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const updateRecipe = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { id } = req.params;
  const { title, ingredient, type } = req.body;

  try {
    const [results] = await db.query(
      "UPDATE recipes SET title = ?, ingredient= ?, type = ? WHERE  id = ?",
      [title, ingredient, type, id]
    );

    if (results.affectedRows === 0) {
      return res.status(400).json({ errors: "recipe not found" });
    }

    res.status(200).json({ message: "recipe has been updated successfully" });
  } catch (err) {
    console.error("Error update recipe:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const destroyRecipe = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { id } = req.params;

  try {
    const [results] = await db.query("DELETE FROM recipes WHERE  id = ?", [id]);

    if (results.affectedRows === 0) {
      return res.status(400).json({ errors: "recipe not found" });
    }

    res.status(200).json({ message: "recipe has been deleted successfully" });
  } catch (err) {
    console.error("Error delete recipe:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
