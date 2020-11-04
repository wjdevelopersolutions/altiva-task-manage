import 'dotenv/config';
import express from 'express';
import colors from 'colors';
import path from 'path';

/**
 * Database connection
 * @MySQL
 */
import db from './config/database';
import './models/proyectos'; 

db.sync()
         .then(() => console.log(`Database running on port ${colors.green('3306')}`))
         .catch(console.log);

/** Rutas */
import { rutasRaiz } from './routes/index';

/** Helpers */
import helpers from './helpers';

/** Instanciar app express */
const app = express();

app.set('port', process.env.PORT || 3000);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, './views'));

app.use(express.static(path.join(__dirname, './public')))
app.use(express.static(path.join(__dirname, '../node_modules')))

app.use((req, res, next) => {
  res.locals.var_dump = helpers.var_dump;
  next();
})

app.use(rutasRaiz());






export default app;


