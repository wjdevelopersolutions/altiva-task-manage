import Sequelize from 'sequelize';
import slug from 'slug';
import { nanoid } from 'nanoid';

import db from '../config/database';

const Proyectos = db.define('Proyectos', {

  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nombre: Sequelize.STRING,
  url: Sequelize.STRING

}, {
  hooks: {
    beforeCreate(proyecto)
    {
       const url = slug(proyecto.nombre).toLowerCase();
       proyecto.url = `${url}-${nanoid(10)}`
    }
  }
});


export default Proyectos;

