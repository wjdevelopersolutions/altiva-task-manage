import { response, request } from 'express';
import { validationResult } from 'express-validator';
import Proyectos from '../models/proyectos';

export const obtenerPaginaDeInicio = async (req, res, next) =>
{

  const proyectos = await Proyectos.findAll();

  res.render('index', { 
    props: {
      title: 'incio',
      proyectos
    }
  });
}


export const obtenerNuevoProyecto = async (req, res, next) =>
{

  const proyectos = await Proyectos.findAll();

  res.render('nuevo-proyecto', { 
    props: {
      title: 'nuevo proyecto',
      proyectos
    }
  });
}

export const postearNuevoProyecto = async (req=request, res=response, next) =>
{
  const errors = validationResult(req);

  if ( !errors.isEmpty() ) {

    const proyectos = await Proyectos.findAll();

    return res.render('nuevo-proyecto',  { 
      props: {
        title: 'nuevo proyecto',
        errors: errors.array(),
        proyectos
      }
    });
  }

  // TODO: Guardar el proyecto en la base de datos y redireccionar a la pagina de inicio.
  const proyecto = await Proyectos.create({ nombre: req.body.nombre });
  console.log({ msg: 'Se ha creado el proyecto', proyecto: proyecto.dataValues});
  
  res.redirect('/');
}

export const obtenerProyectoDetalle = async (req=request, res=response, next) => 
{

  const [ proyectos, proyecto ] = await Promise.all([
    Proyectos.findAll(),
    Proyectos.findOne({
      where: {
        url: req.params.url
      }
    })   
  ]);

  res.render('proyecto-detalle', {
    props: {
      title: 'tareas del proyecto',
      proyectos,
      proyecto
    }
  });
}

export const obtenerProyectoDetalleEditar = async (req=request, res=response, next) => 
{

  const [ proyectos, proyecto ] = await Promise.all([
    Proyectos.findAll(),
    Proyectos.findOne({
      where: {
        id: req.params.id
      }
    })   
  ]);

  res.render('nuevo-proyecto', {
    props: {
      title: 'editar proyecto',
      proyectos,
      proyecto
    }
  });

}

export const postearActualizarProyecto = async (req=request, res=response, next) =>
{
  const errors = validationResult(req);

  if ( !errors.isEmpty() ) {

    const proyectos = await Proyectos.findAll();

    return res.render('nuevo-proyecto',  { 
      props: {
        title: 'nuevo proyecto',
        errors: errors.array(),
        proyectos
      }
    });
  }

  // TODO: Actualizar el proyecto en la base de datos y redireccionar a la pagina de inicio.
  const proyectoUdated = await Proyectos.update(
    { nombre: req.body.nombre},
    {
      where: {
        id: req.params.id
      }
    }
  );
  console.log({ msg: 'Se ha modificado satisfactoriamente el proyecto', proyecto: proyectoUdated.dataValues});
  
  res.redirect('/');
}