import express from 'express';

const app = express();


//Settings
app.set('port', process.env.PORT || 3800);


export default app;