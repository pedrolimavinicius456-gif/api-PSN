import express from 'express'
import psnRoutes from './routes/psnRoutes.js'
import { globalErrorHandler } from './middlewares/error.middleware.js';

const app = express();

app.use(express.json());

app.use('/api/PSN', psnRoutes);

app.use(globalErrorHandler); // Middleware de tratamento de erros global

/*const meuLog = (req, res, next) => {
 const data = new Date().toISOString();
 console.log(`[${data}] ${req.method} em ${req.url}`);
 next(); // IMPORTANTE: Passa para o próximo middleware ou rota
};
app.use(meuLog); // Aplica globalmente
*/
export default app;