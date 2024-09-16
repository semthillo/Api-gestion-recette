import { check, validationResult, param } from 'express-validator';
import { StatusCodes } from 'http-status-codes';
import { checkRecipe, checkRecipeById } from '../controllers/recipeController.js';
const addRequestValidator = [
  check("title")
    .not()
    .isEmpty()
    .withMessage("Title is required!")
    .bail()
    .isString()
    .withMessage("Title can't be number!")
    .bail()
    .isLength({ min: 6 })
    .withMessage("Title must be at least 6 characters long!")
    .bail()
    .custom(async (value) => {
      const result = await checkRecipe(value)
      if (result !== 0) {
        throw new Error('This recipe is already exist!')
      }
      return true;
    }),
  check("ingredient")
    .not()
    .isEmpty()
    .withMessage("Ingredient is required!!")
    .bail()
    .isLength({ min: 6 })
    .withMessage("Ingredient must be at least 6 characters long!")
    .bail()
    .isString()
    .withMessage("Ingredient can't be number!")
    .bail(),
  check("type")
    .not()
    .isEmpty()
    .withMessage("Type is required!")
    .bail()
    .isLength({ min: 6 })
    .withMessage("Type must be at least 6 characters long")
    .bail()
    .isString()
    .withMessage("Type can't be number")
    .bail(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({ errors: errors.array() });
    next();
  },
];

const deleteRequestValidator = [
  param("id")
    .not()
    .isEmpty()
    .withMessage("Id is required!")
    .bail()
    .isInt()
    .withMessage("Id must be number!")
    .bail()
    .custom(async (value) => {
      const result = await checkRecipeById(value)
      if (result === 0) {
        throw new Error("Recipe not found!")
      }
      return true;
    }),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({ errors: errors.array() });
    next();
  },
];

const updateRequestValidator = [
  param("id")
    .not()
    .isEmpty()
    .withMessage("Id is required!")
    .bail()
    .isInt()
    .withMessage("Id must be number!")
    .bail()
    .custom(async (value) => {
      const result = await checkRecipeById(value)
      if (result === 0) {
        throw new Error("Recipe not found!")
      }
      return true;
    }),
  check("title")
    .not()
    .isEmpty()
    .withMessage("Title is required!")
    .bail()
    .isString()
    .withMessage("Title can't be number!")
    .bail()
    .isLength({ min: 6 })
    .withMessage("Title must be at least 6 characters long!")
    .bail()
    .custom(async (value) => {
      const result = await checkRecipe(value)
      if (result !== 0) {
        throw new Error('This recipe is already exist!')
      }
      return true;
    }),
  check("ingredient")
    .not()
    .isEmpty()
    .withMessage("Ingredient is required!!")
    .bail()
    .isLength({ min: 6 })
    .withMessage("Ingredient must be at least 6 characters long!")
    .bail()
    .isString()
    .withMessage("Ingredient can't be number!")
    .bail(),
  check("type")
    .not()
    .isEmpty()
    .withMessage("Type is required!")
    .bail()
    .isLength({ min: 6 })
    .withMessage("Type must be at least 6 characters long")
    .bail()
    .isString()
    .withMessage("Type can't be number")
    .bail(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({ errors: errors.array() });
    next();
  },
];
export { addRequestValidator, deleteRequestValidator, updateRequestValidator };