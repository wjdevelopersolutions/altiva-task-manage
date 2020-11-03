import express from 'express';
const router = express.Router();

import { obtenerPaginaDeInicio } from '../controllers/index';

export const rutasRaiz = () =>
{

  router.get('/',obtenerPaginaDeInicio);
  return router;
}