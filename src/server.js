import 'dotenv/config';
import express from 'express';
import path from 'path';

/** Rutas */
import { rutasRaiz } from './routes/index';

/** Instanciar app express */
const app = express();


app.set('port', process.env.PORT || 3000);

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, './views'));

app.use(express.static(path.join(__dirname, './public')))

app.use(rutasRaiz());






export default app;


