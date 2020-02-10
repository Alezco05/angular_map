import express from 'express';
import router from './routes/routes';


const engine = require('ejs-mate');
const path = require('path');
const app = express();

//Settings
app.set('port', process.env.PORT || 3800);
//View
app.engine('ejs',engine);
app.set('vi ew engine','ejs');
app.set('views',path.join(__dirname,'view'));

//Static Files
app.use(express.static(path.join(__dirname,'public')))

//Routes
app.use('/', router);
export default app;