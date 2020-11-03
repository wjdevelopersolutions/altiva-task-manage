/**
 * path: /
 * @root_routes
 * Create by wjwebdevelopments on 20201102 06:53PM
 */

import express from 'express';
import { body } from 'express-validator/check';
const router = express.Router();

import { 
  obtenerPaginaDeInicio,
  obtenerNuevoProyecto,
  postearNuevoProyecto,
  obtenerProyectoDetalle,
  obtenerProyectoDetalleEditar,
  postearActualizarProyecto
} from '../controllers/index';

export const rutasRaiz = () =>
{

  router.get('/',obtenerPaginaDeInicio);
  router.get('/nuevo-proyecto', obtenerNuevoProyecto);
  router.post('/nuevo-proyecto', 
    [
      body('nombre', 'El nombre del proyecto es un campo obligatorio.').not().isEmpty().trim().escape()
    ],
    postearNuevoProyecto
  );
  router.get('/proyecto/:url', obtenerProyectoDetalle);
  router.get('/proyecto/editar/:id', obtenerProyectoDetalleEditar);
  router.post('/nuevo-proyecto/:id', 
    [
      body('nombre', 'El nombre del proyecto es un campo obligatorio.').not().isEmpty().trim().escape()
    ],
    postearActualizarProyecto
  );

  return router;
}