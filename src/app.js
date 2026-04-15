import express from 'express'
import psnRoutes from './routes/psnRoutes.js'

const app = express();

app.use(express.json());

app.use('/api/PSN', psnRoutes);

const meuLog = (req, res, next) => {
 const data = new Date().toISOString();
 console.log(`[${data}] ${req.method} em ${req.url}`);
 next(); // IMPORTANTE: Passa para o próximo middleware ou rota
};
app.use(meuLog); // Aplica globalmente

export default app;