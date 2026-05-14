import express from 'express'
import psnRoutes from './routes/psnRoutes.js'
import userRoutes from './routes/userRoutes.js'
import { globalErrorHandler } from './middlewares/error.middleware.js';
import path from 'path';
import { fileURLToPath } from 'url';
import db from './config/database.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());

app.use('/api/PSN', psnRoutes);
app.use('/api/users', userRoutes);
app.use(globalErrorHandler); // Middleware de tratamento de erros global

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get('/jogos-view', async (req, res, next) => {
    await db.read();

    res.render('jogos', { jogos: db.data.PSN });
});
export default app;