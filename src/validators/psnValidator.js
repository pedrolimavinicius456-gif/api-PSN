import { body } from 'express-validator'
import { verificarErros } from '../middlewares/validatorMiddleware';


export const regrasValidarJogo = [

    body('nome')
        .trim()
        .notEmpty().withMessage('O nome do Jogo é obrigatorio')
        .isLength({ min: 3}).withMessage('O nome deve ter pelo menos 3 caracteres'),

    body('criador')
        .trim()
        .notEmpty().withMessage('O nome do criador é obrigatorio')
        .isLength( {min: 2} ).withMessage('O nome do criador precisa de pelo menos 2 caracteres'),

    body('ano')
        .isnInt({ min: 0 }).withMessage('A idade deve ser um número positivo'),
        
    
    verificarErros
];