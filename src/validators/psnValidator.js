import {body, validationResult } from 'express-validator'

export const regrasValidarJogo = [

    body('nome')
        .trim()
        .notEmpty().withMessage('O nome do Jogo é obrigatorio')
        .isLength({ min: 3}).withMessage('O nome deve ter pelo menos 3 caracteres'),

    body('criador')
        .trim()
        .notEmpty().withMessage('O nome do criador é obrigatorio')
        .isLength( {min: 2} ).withMessage('O nome do criador precisa de pelo menos 2 caracteres'),

        (req, res, next) => {
            const erros = validationResult(req);
            if(!erros.isEmpty()) {
                return res.status(400).json({ erros: erros.array()});
            }
            next();
        }
];