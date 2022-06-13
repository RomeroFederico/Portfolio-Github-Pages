import reactIco from './images/icons/react.svg';
import reduxIco from './images/icons/redux.svg';
import nodejsIco from './images/icons/nodejs.svg';
import sequelizeIco from './images/icons/sequelize.svg';
import cssIco from './images/icons/css.svg';
import svgIco from './images/icons/svg.svg';

import dogs1 from './images/screenshots/dogs1.png';
import dogs2 from './images/screenshots/dogs2.png';
import dogs3 from './images/screenshots/dogs3.png';
import dogs4 from './images/screenshots/dogs4.png';

export const projectList = [
  {
    images: [
      dogs1,
      dogs2,
      dogs3,
      dogs4
    ],
    title: 'Henry Dogs',
    details: 'Proyecto Integrador hecho para el Bootcamp de Henry (Full Stack Web Developer)',
    features: [
      'Single Page Application basada en React, controlando el estado global a traves de Redux.',
      'Manejo de APIs y Bases de Datos a traves del Backend utilizando Node.js, Express y Sequelize.',
      'Paginacion, filtrados, ordenamientos de datos y formularios controlados por Javascript.',
      'Manejo de estilos CSS e implementacion de imagenes SVG, incluyendo animaciones.'
    ],
    icons: [
      {
        ico: reactIco,
        name: 'React'
      },
      {
        ico: reduxIco,
        name: 'Redux'
      },
      {
        ico: nodejsIco,
        name: 'Node.js'
      },
      {
        ico: sequelizeIco,
        name: 'Sequelize'
      },
      {
        ico: cssIco,
        name: 'CSS'
      },
      {
        ico: svgIco,
        name: 'SVG'
      }
    ],
    linkToSite: '',
    linkToRepository: 'https://github.com/RomeroFederico/PI-DOGS'
  }
]