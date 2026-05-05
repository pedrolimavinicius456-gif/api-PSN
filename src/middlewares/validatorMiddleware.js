import { validationResult } from 'express-validator';
import app from '../app.js';

export const verificarErros = (req, res) => {
    const erros = validationResult(req);

    if(!erros.isEmpty()) {
        return res.status(400).json({
            sucesso: false,
            erros: erros.array()
        });
    }
    next();
};

const meuLog = (req, res, next) => {
    const data = new Date().toISOString();
    console.log(`[${data}] ${req.method} em ${req.url}`);
    next(); // IMPORTANTE: Passa para o próximo middleware ou rota
   };

app.use(meuLog); // Aplica globalmente