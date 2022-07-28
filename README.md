# MiniPortfolio
![Status](https://img.shields.io/badge/Status-Deployed-orange)
![Version](https://img.shields.io/badge/Version-1.0-blue)
![React](https://shields.io/badge/React-FrontEnd-green?logo=react&style=plastic)
![Redux](https://shields.io/badge/Redux-FrontEnd-green?logo=redux&style=plastic&logoColor=violet)
![CSS](https://shields.io/badge/CSS3-FrontEnd-green?logo=css3&style=plastic&logoColor=0096c8)

Sencillo portfolio, facil de configurar, orientado a personas que trabajan en sistemas. 
Este proyecto fue realizado por [Romero Federico](https://github.com/RomeroFederico).

## Ver Demo

[Mi Porfolio](https://romerofederico.github.io/Portfolio-Github-Pages/)

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

Ademas, se puede cambiar entre dos temas: Claro y Oscuro. Por ultimo, tiene acceso a los links de Linkedin y Github del usuario.

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
d) Para que luego puedas subirlo a internet, primero es necesario crear un repositorio en Github. Tener en cuenta que el nombre que elijas para el mismo se utilizara en la ruta al sitio web donde se alojara el portfolio.\
Luego de crearlo, es momento de asociarlo a este proyecto. Para esto puedes seguir las instruccion que proporciona Github en el reposotiorio vacio, o puedes copiar el siguiente codigo:
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
#### e) `links.js`
En esta archivo de configuracion se hara referencia al CV que se puede descargar en la seccion **ABOUT ME**. Para esto sera necesario agregar el archivo al directorio `./public/files`. Una vez hecho esto, preceder a editar los links.

```javascript
export const linkToLinkedin = "https://www.linkedin.com/in/USUARIO"; // Link al perfil de linkedin.
export const linkToGithub = 'https://github.com/USUARIO';            // Link al perfil de GitHub.

export const cv = './files/ARCHIVO.EXTENSION';  // Reemplazar 'ARCHIVO' y 'EXTENSION' con los propios del archivo subido.
```


### Publicar el portfolio:
Una vez editado a gusto el portfolio, es hora de publicarlo en internet.

a) Abir el archivo `package.json` ubicado en la carpeta raiz del proyecto y editar la siguiente linea:

```json
"homepage":"https://USUARIO-DE-GITHUB.github.io/NOMBRE-DEL-REPOSITORIO-REMOTO"
```

b) Guardar en el repositorio local y luego en el remoto los cambios realizados. En la carpeta raiz del proyecto, abrir la consola y ejecutar las siguientes lineas:
```bash
git add .
git commit -m 'DESCRIPCION DEL COMMIT.'
git push origin main
```

c) Para finalizar, ejecutar:
```bash
npm run deploy
```

d) Comprobar en la consola que el proceso se complete de manera exitosa. De ser asi, deberia haber un link al mismo que es el que colocamos en el paso a).

e) En caso de querer modificar el portfolio, repetir los pasos del b) al d).
