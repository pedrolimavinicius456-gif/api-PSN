import express from 'express'
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './swagger.js';
import psnRoutes from './routes/psnRoutes.js'
//import meuLog from './middlewares/logMiddlewares.js'

const app = express();

app.use(express.json());

app.use('/api/PSN', psnRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


//app.use(meuLog);

export default app;
