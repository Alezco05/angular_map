import express from 'express';
import indexRoutes from './routes/routes';


const app = express();


//Settings
app.set('port', process.env.PORT || 3800);

//Routes
app.use('/api', indexRoutes);

export default app;