import reactIco from './images/icons/react.svg';
import reduxIco from './images/icons/redux.svg';
import angularIco from './images/icons/angular.svg';
import html5Ico from './images/icons/html5.svg';
import javascriptIco from './images/icons/javascript.svg';
import nodejsIco from './images/icons/nodejs.svg';
import sequelizeIco from './images/icons/sequelize.svg';
import expressIco from './images/icons/expressjs.svg';
import cssIco from './images/icons/css.svg';
import phpIco from './images/icons/php.svg';
import psqlIco from './images/icons/psql.svg';
import mysqlIco from './images/icons/mysql.svg';
import cIco from './images/icons/c.svg';
import csharpIco from './images/icons/csharp.svg';
import gitIco from './images/icons/git.svg';
import githubIco from './images/icons/github.svg';
import figmaIco from './images/icons/figma.svg';

export const stack = [
  
  {
    category: 'Front-End',
    color: 'GREEN',
    items: [
      {
        name: 'React',
        icon: reactIco,
        description: 'React (también llamada React.js o ReactJS) es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página.',
        source: 'Wikipedia',
        viewMore: 'https://es.wikipedia.org/wiki/React',
        link: 'https://reactjs.org/'
      },
      {
        name: 'Redux',
        icon: reduxIco,
        description: 'Redux es una librería JavaScript de código abierto para el manejo del estado de las aplicaciones. Es comúnmente usada con otras librerías como React o Angular para la construcción de Interfaces de Usuario.',
        source: 'Wikipedia',
        viewMore: 'https://es.wikipedia.org/wiki/Redux_(JavaScript)',
        link: 'https://redux.js.org/'
      },
      {
        name: 'Angular',
        icon: angularIco,
        description: 'Angular (comúnmente llamado Angular 2+ o Angular 2) es un framework para aplicaciones web desarrollado en TypeScript, de código abierto, mantenido por Google, que se utiliza para crear y mantener aplicaciones web de una sola página.',
        source: 'Wikipedia',
        viewMore: 'https://es.wikipedia.org/wiki/Angular_(framework)',
        link: 'https://angular.io/'
      },
      {
        name: 'HTML5',
        icon: html5Ico,
        description: 'HTML 5 (HyperText Markup Language, versión 5) es la quinta revisión importante del lenguaje básico de la World Wide Web, HTML.',
        source: 'Wikipedia',
        viewMore: 'https://es.wikipedia.org/wiki/HTML5',
        link: 'https://html.spec.whatwg.org/multipage/'
      },
      {
        name: 'CSS3',
        icon: cssIco,
        description: 'CSS (siglas en inglés de Cascading Style Sheets), en español «Hojas de estilo en cascada», es un lenguaje de diseño gráfico para definir y crear la presentación de un documento estructurado escrito en un lenguaje de marcado.',
        source: 'Wikipedia',
        viewMore: 'https://es.wikipedia.org/wiki/CSS',
        link: 'https://www.w3.org/Style/CSS/'
      },
      {
        name: 'JavaScript',
        icon: javascriptIco,
        description: 'JavaScript (abreviado comúnmente JS) es un lenguaje de programación interpretado, dialecto del estándar ECMAScript. Se define como orientado a objetos, basado en prototipos, imperativo, débilmente tipado y dinámico.',
        source: 'Wikipedia',
        viewMore: 'https://es.wikipedia.org/wiki/JavaScript',
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
      },
    ]
  },
  {
    category: 'Back-End',
    color: 'ORANGE',
    items: [
      {
        name: 'Node.js',
        icon: nodejsIco,
        description: 'Node.js es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor (pero no limitándose a ello) basado en el lenguaje de programación JavaScript, asíncrono, con E/S de datos en una arquitectura orientada a eventos y basado en el motor V8 de Google.',
        source: 'Wikipedia',
        viewMore: 'https://es.wikipedia.org/wiki/Node.js',
        link: 'https://nodejs.org/en/'
      },
      {
        name: 'Sequelize',
        icon: sequelizeIco,
        description: 'Sequelize es una heramienta ORM basada en promesas de Node.js de facil uso, para Postgres, MySQL, MariaDB, SQLite, DB2, Microsoft SQL Server, Snowflake, e IBM.',
        source: 'Sequelize',
        viewMore: 'https://github.com/sequelize/sequelize',
        link: 'https://sequelize.org/'
      },
      {
        name: 'Express',
        icon: expressIco,
        description: 'Express es una infraestructura de aplicaciones web Node.js mínima y flexible que proporciona un conjunto sólido de características para las aplicaciones web y móviles. Posee miles de métodos de programa de utilidad HTTP y middleware a su disposición para la creación de una API sólida, rápida y sencilla.',
        source: 'Wikipedia',
        viewMore: 'https://expressjs.com/es/',
        link: 'https://expressjs.com/'
      },
      {
        name: 'PHP',
        icon: phpIco,
        description: 'PHP es un lenguaje de programación de uso general que se adapta especialmente al desarrollo web.',
        source: 'Wikipedia',
        viewMore: 'https://es.wikipedia.org/wiki/PHP',
        link: 'https://www.php.net/'
      }
    ]
  },
  {
    category: 'Bases de Datos',
    color: 'CRIMSON',
    items: [
      {
        name: 'PostgreSQL',
        icon: psqlIco,
        description: 'PostgreSQL, también llamado Postgres, es un sistema de gestión de bases de datos relacional orientado a objetos y de código abierto, publicado bajo la licencia PostgreSQL, similar a la BSD o la MIT.',
        source: 'Wikipedia',
        viewMore: 'https://es.wikipedia.org/wiki/PostgreSQL',
        link: 'https://www.postgresql.org/'
      },
      {
        name: 'MySQL',
        icon: mysqlIco,
        description: 'MySQL es un sistema de gestión de bases de datos relacional desarrollado bajo licencia dual: Licencia pública general/Licencia comercial por Oracle Corporation y está considerada como la base de datos de código abierto más popular del mundo.',
        source: 'Wikipedia',
        viewMore: 'https://es.wikipedia.org/wiki/MySQL',
        link: 'https://www.mysql.com/'
      },
    ]
  },
  {
    category: 'Otros Lenguajes',
    color: 'DarkSlateBlue',
    items: [
      {
        name: 'C',
        icon: cIco,
        description: 'C es un lenguaje de programación de propósito general orientado a la implementación de sistemas operativos, concretamente Unix. C es apreciado por la eficiencia del código que produce y es el lenguaje de programación más popular para crear softwares de sistemas y aplicaciones.',
        source: 'Wikipedia',
        viewMore: 'https://es.wikipedia.org/wiki/C_(lenguaje_de_programaci%C3%B3n)',
        link: 'https://www.open-std.org/jtc1/sc22/wg14/'
      },
      {
        name: 'C Sharp',
        icon: csharpIco,
        description: '"C#" (pronunciado ci sharp en inglés) es un lenguaje de programación multiparadigma desarrollado y estandarizado por la empresa Microsoft como parte de su plataforma .NET.',
        source: 'Wikipedia',
        viewMore: 'https://es.wikipedia.org/wiki/C_Sharp',
        link: 'https://docs.microsoft.com/en-us/dotnet/csharp/'
      },
    ]
  },
  {
    category: 'Herramientas',
    color: 'DarkMagenta',
    items: [
      {
        name: 'Git',
        icon: gitIco,
        description: 'Git es un software de control de versiones diseñado por Linus Torvalds, pensando en la eficiencia, la confiabilidad y compatibilidad del mantenimiento de versiones de aplicaciones cuando estas tienen un gran número de archivos de código fuente.',
        source: 'Wikipedia',
        viewMore: 'https://es.wikipedia.org/wiki/Git',
        link: 'https://git-scm.com/'
      },
      {
        name: 'GitHub',
        icon: githubIco,
        description: 'GitHub es una forja (plataforma de desarrollo colaborativo) para alojar proyectos utilizando el sistema de control de versiones Git. Se utiliza principalmente para la creación de código fuente de programas de ordenador.',
        source: 'Wikipedia',
        viewMore: 'https://es.wikipedia.org/wiki/GitHub',
        link: 'https://github.com/'
      },
      {
        name: 'Figma',
        icon: figmaIco,
        description: 'Figma es un editor de gráficos vectorial y una herramienta de generación de prototipos.',
        source: 'Wikipedia',
        viewMore: 'https://es.wikipedia.org/wiki/Figma',
        link: 'https://www.figma.com/'
      }
    ]
  }
]