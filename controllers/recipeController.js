const db = require('../config/db')
const { validationResult } = require('express-validator');

// exports.createRecipe = (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() });
//     }
//     const { title, ingredient, type } = req.body;
//     db.query('INSERT INTO Recipe (title, ingredient, type) VALUES (?, ?, ?)', [title, ingredient, type], (err, results) => {
//         if (err) return res.status(500).json({ error: err.message });
//         res.status(201).json({ id: results.insertId });
//     });
// };

exports.createRecipe = (req, res) => {
    const { title, ingredient, type } = req.body;
    db.query('INSERT INTO Recipe (title, ingredient, type) VALUES (?, ?, ?)', [title, ingredient, type], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ id: results.insertId });
    });
};