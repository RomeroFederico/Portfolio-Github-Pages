# MiniPortfolio
![Status](https://img.shields.io/badge/Status-Deployed-orange)
![Version](https://img.shields.io/badge/Version-1.0-blue)
![React](https://shields.io/badge/React-FrontEnd-green?logo=react&style=plastic)
![Redux](https://shields.io/badge/Redux-FrontEnd-green?logo=redux&style=plastic&logoColor=violet)
![CSS](https://shields.io/badge/CSS3-FrontEnd-green?logo=css3&style=plastic&logoColor=0096c8)

Sencillo portfolio, facil de configurar, orientado a personas que trabajan en sistemas. 
Este proyecto fue realizado por [Romero Federico](https://github.com/RomeroFederico).

## Indice

- Caracteristicas
- Configuracion 
  + Inicializacion del Repositorio
  + Personalizar
  + Publicar el Portfolio

## Caracteristicas

El portfolio cuenta con 4 (cuatro) secciones principales:

1. **Inicio:** Descripcion corta a traves de un texto animado.
2. **About Me:** Descripcion mas detallada, la cual incluye la opcion para poder descargar el CV cargado.
3. **Projects:** Presentacion de los proyectos realizados, con informacion de las tecnologias implementados e imagenes del mismo.
4. **Skills:** Lenguajes, tecnoligias y herramientos que maneja el usuario, incluyendo una descripcion de cada una.

## Configuracion
> **Importante:** Para poder continuar, va a ser necesario contar con:
>
> - [Node.js y NPM](https://nodejs.org/es/download/).
> - [Git](https://git-scm.com/downloads).
> - Cualquier editor de texto que sea de su confianza.
> - Una cuenta de Github.


### Inicializacion del Repositorio:

a) Copiar el repositorio. Para esto se debe abrir una consola, por ejemplo `GIT Bash`, ubicandose en la carpeta donde se desea inicializar el repositorio, y ejecutar el siguiente codigo:
```bash
git clone https://github.com/RomeroFederico/Portfolio-Github-Pages.git
```
b) Instalar las dependencias necesarias para poder ejecutar el proyecto. En la consola, ubicarse en la carpeta creada y ejecutar:
```bash
npm install
```
c) Ejecutar el proyecto para comenzar a editar y ver los resultados de manera local:
```bash
npm start
```
d) Para que luego puedas subirlo a internet, primero es necesario crear un repositorio en Github. Luego de crearlo, es momento de asociarlo a este proyecto. Para esto puedes seguir las instruccion que proporciona Github en el reposotiorio vacio, o puedes copiar el siguiente codigo:
```bash
git remote add origin LINK-DEL-REPOSITORIO-CREADO
git branch -M main
git push -u origin main
```


### Personalizar:
Para poder personalizar a gusto el portfolio, va a ser necesario editar los siguientes archivos ubicados en la carpeta `./src/configuration`.

#### a) `home.js`
```javascript
// Para editar la presentacion en la seccion Inicio.
export const presentation = {
  staticText: 'NAME',         // Mensaje estatico principal.
  preAnimatedText: "IM A",    // Mensaje estatico en la misma linea del texto animado.
  textToAnimate: [            // Texto a animar. Cada cadena representa una oracion a animar.
    'FRONT-END Developer',
    'BACK-END Developer',
    'FULL-STACK Developer'
  ]
};
```

#### b) `aboutMe.js`
```javascript
// Para editar la descripcion en la seccion About Me.
export const myInfo = {
  title: 'ABOUT ME',          // Titulo.
  subTitle: 'SUBTITLE',       // Subtitulo.
  description: [              // Cuerpo de la descripcion. Cada cadena representa un parrafo.
      'FIRST LINE',
      'SECOND LINE',
      'THIRD LINE'
    ]
};
```

#### c) `projects.js`

Para indicar los iconos de las herramientos utilizadas es necesario primero agregarlas al repositorio. Para eso guardar los iconos necesarios en la carpeta `./src/configuration/images/icons`, preferentemente en formato SVG o PNG con transparencia. Luego importamos cada icono.
```javascript
import nombreAUtilizar from './images/icons/NOMBRE-DEL-ICONO.EXTENSION';
import reduxIco from './images/icons/redux.svg';                            // Ejemplo.
```
De igual manera, para las imagenes del proyecto se debe hacer lo mismo, guardando los archivos necesarios en la carpeta `./src/configuration/images/screenshots`, preferentemente con la misma resolucion entre imagenes.
```javascript
import image from './images/screenshots/NOMBRE-DE-LA-IMAGEN.EXTENSION';
import dogs1 from './images/screenshots/dogs1.png';                         // Ejemplo.
```
Una vez teniendo ya todos los archivos cargados e importados de manera correcta, proceder a editar la lista de proyectos.
```javascript
export const projectList = [
  {
    images: [
      image1,                 // Agregar la o las variables con la que se asocio a cada una de las imagenes importadas.
      image2
    ],
    title: 'TITULO',          // Titulo del proyecto.
    details: 'DETALLES...',   // Detalles del proyecto.
    features: [               // Caracteristicas del proyecto. Cada cadena representa una nueva linea.
      'FIRST FEATURE',        // Se recomienda como maximo incluir cuatro lineas.
      'SECOND FEATURE',
      'THIRD FEATURE',
      'FOURTH FEATURE'
    ],
    icons: [                  // Agregar cada icono importado.
      {
        ico: firstIco,        // Variable asociada al icono importado.
        name: 'FIRST'         // Nombre que mostrara el tag al mover el cursor sobre el icono.
      },
      {                       // Repetir esta estructura por cada icono a agregar.
        ico: secondIco,
        name: 'Second'
      }
    ],
    linkToSite: 'LINK AL SITIO',            // Link al proyecto ya subido en internet.
    linkToRepository: 'LINK AL REPOSITORIO' // Link al repositorio.
  },                                        // En caso de no estar disponible alguno de estos, dejar como una cadena vacia ''.
  {
                              // Repetir esta estructura por cada proyecto a agregar.
  }
];
```

#### d) `stack.js`
Al igual que con los iconos de los proyectos, es necesario seguir los mismos pasos, importando los iconos a la carpeta `./src/configuration/images/icons`. Se pueden re-utilizar aquellos que ya se cargaron previamente.

Una vez hecho esto, preceder a editar la lista de skills.

```javascript
export const stack = [
  {
    category: 'CATEGORIA',    // Nombre de la categoria de la o las skills a agregar.
    color: 'GREEN',           // Color asociada a la categoria. Puede ser el nombre del color CSS o en HEX.
    items: [                  // Cada una de las skills ira aqui.
      {
        name: 'SKILL',        // Nombre de la skill
        icon: skillIco,       // Variable asociada al icono importado.
        description: '...',   // Descripcion de la skill.
        source: 'SOURCE',     // Fuente de la descripcion.
        viewMore: 'link',     // Link de la fuente.
        link: 'link'          // Link oficial de la skill.
      },
      {
                              // Repetir por cada skill de la categoria.
      }
    ],
  },
  {
                              // Repetir por cada categoria.
  }
];
```

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
