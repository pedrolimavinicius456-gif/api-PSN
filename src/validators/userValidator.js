import { body } from "express-validator";
import { verificarErros } from "../middlewares/validatorMiddleware.js";
import { param } from "express-validator";

export const regrasValidarUser = [
    body('nome')
        .trim()
        .notEmpty().withMessage('O nome do usuário é obrigatório')
        .isLength({ min: 3 }).withMessage('O nome deve ter pelo menos 3 caracteres'),
    body('email')
        .trim()
        .isEmail().withMessage('O email é inválido')
        .notEmpty().withMessage('O email do usuário é obrigatório'),
    body('senha')
        .trim()
        .notEmpty().withMessage('A senha do usuário é obrigatória')
        .isLength({ min: 6 }).withMessage('A senha deve ter pelo menos 6 caracteres')
];

export const buscarUserPorIdValidation = [
    param('id')
        .isUUID().withMessage('O ID do usuário deve ser um UUID válido'),
    verificarErros
];