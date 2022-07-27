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

import tech1 from './images/screenshots/tech1.png';
import tech2 from './images/screenshots/tech2.png';
import tech3 from './images/screenshots/tech3.png';
import tech4 from './images/screenshots/tech4.png';
import tech5 from './images/screenshots/tech5.png';
import tech6 from './images/screenshots/tech6.png';
import tech7 from './images/screenshots/tech7.png';
import tech8 from './images/screenshots/tech8.png';

import sendgrid from './images/icons/sendgrid.svg';
import mapbox from './images/icons/mapbox.svg';
import material_ui from './images/icons/material-ui.svg';
import cloudinary from './images/icons/cloudinary.svg';

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
    linkToSite: 'https://henry-dogs.vercel.app/',
    linkToRepository: 'https://github.com/RomeroFederico/PI-DOGS'
  },
  {
    images: [
      tech1,
      tech2,
      tech3,
      tech4,
      tech5,
      tech6,
      tech7,
      tech8
    ],
    title: 'TechMarket',
    details: 'Proyecto Final hecho para el Bootcamp de Henry (Full Stack Web Developer)',
    features: [
      'E-Commerce con orientación a la venta de productos de computación.',
      'Carrito de compras, favoritos, pasarela de pagos con mercado pago, jerarquia de usuarios, etc.',
      'Encargado de: diseñar el prototipo, implementación de la tienda, y la visualización y administracion de los productos y de las ordenes de compras.',
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
        ico: material_ui,
        name: 'MaterialUI'
      },
      {
        ico: cloudinary,
        name: 'Cloudinary'
      },
      {
        ico: mapbox,
        name: 'Mapbox'
      },
      {
        ico: sendgrid,
        name: 'SendGrid'
      },
    ],
    linkToSite: 'https://techmarketfront.vercel.app/',
    linkToRepository: 'https://github.com/gpitrella/PF-FrontEnd'
  }
]