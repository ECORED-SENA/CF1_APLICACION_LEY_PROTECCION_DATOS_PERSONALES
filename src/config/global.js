export default {
  global: {
    Name: 'Protección y tratamiento de datos personales',
    Description:
      'Este componente formativo desarrolla los aspectos fundamentales de la protección de datos personales en Colombia. Aborda los principios, derechos, deberes y mecanismos de control establecidos en la Ley 1581 de 2012, así como su aplicación en las organizaciones para garantizar el tratamiento adecuado de la información y prevenir riesgos legales.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.svg',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Fundamentos de la protección de datos personales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto de protección de datos personales  ',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Evolución de la protección de datos ',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Importancia organizacional de la protección de datos ',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Ley 1581 de 2012s',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: ' Generalidades de la Ley 1581 ',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Ámbito de aplicación ',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Definiciones fundamentales ',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Principios rectores para el tratamiento de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Principios relacionados con la legalidad ',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Principios relacionados con la calidad de la información ',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo:
              'Principios relacionados con la protección de la información ',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Categorías especiales de datos personales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Clasificación de los datos personales ',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Datos sensibles ',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Datos de niños, niñas y adolescentes',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo:
          'Derechos y condiciones de legalidad para el tratamiento de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Derechos de los titulares ',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Autorización para el tratamiento de datos',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Condiciones de legalidad ',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Responsables y encargados del tratamiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Responsable del tratamiento ',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Encargado del tratamiento ',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Gestión organizacional del tratamiento de datos',
            hash: 't_6_3',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Vigilancia, control y sanciones',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Autoridades de control',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Régimen sancionatorio',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo: 'Gestión del riesgo legal ',
            hash: 't_7_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Acceso restringido',
      significado:
        'Principio que establece que los datos personales solo pueden ser consultados por personas autorizadas y para las finalidades permitidas.',
    },
    {
      termino: 'Base de datos',
      significado:
        'Conjunto organizado de datos personales que es objeto de tratamiento.',
    },
    {
      termino: 'Confidencialidad',
      significado:
        'Obligación de proteger la información y evitar que sea conocida o utilizada por personas no autorizadas.',
    },
    {
      termino: 'Dato personal',
      significado:
        'Información vinculada o asociada a una persona natural identificada o identificable.',
    },
    {
      termino: 'Finalidad',
      significado:
        'Propósito específico, legítimo e informado para el cual se recopilan y utilizan los datos personales.',
    },
    {
      termino: 'Habeas data',
      significado:
        'Derecho fundamental que permite conocer, actualizar, rectificar y controlar la información personal que reposa en bases de datos.',
    },
    {
      termino: 'Ley 1581 de 2012',
      significado:
        'Norma colombiana que establece el régimen general de protección de datos personales y regula su tratamiento.',
    },
    {
      termino: 'Protección de datos personales',
      significado:
        'Conjunto de principios, normas, procedimientos y medidas orientados a garantizar un tratamiento legal, seguro y responsable de la información personal.',
    },
    {
      termino: 'Titular',
      significado:
        'Persona natural a quien pertenecen los datos personales objeto de tratamiento.',
    },
    {
      termino: 'Veracidad',
      significado:
        'Principio que exige que los datos personales sean exactos, completos, verificables y actualizados.',
    },
  ],
  referencias: [
    {
      referencia:
        'Congreso de la República de Colombia. (2012). Ley 1581 de 2012. Por la cual se dictan disposiciones generales para la protección de datos personales. Función Pública.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=49981',
    },
    {
      referencia:
        'Constitución Política de Colombia. (1991). Constitución Política de Colombia. Artículo 15. Constitución Colombia.',
      link: 'https://www.constitucioncolombia.com/titulo-2/capitulo-1/articulo-15',
    },
    {
      referencia:
        'RISKS International. (2024, 25 de julio). Protección de datos personales en Colombia: Derechos, clasificación y normativas.',
      link: 'https://www.risksint.com/proteccion-de-datos/proteccion-de-datos-personales-en-colombia-derechos-clasificacion-y-normativas/',
    },
    {
      referencia:
        'Superintendencia de Industria y Comercio. (2023). Protección de datos personales.',
      link: 'https://www.sic.gov.co/proteccion-de-datos-personales',
    },
    {
      referencia:
        'Universidad Nacional Abierta y a Distancia. (2025, 27 de enero). Lo que debes saber sobre el tratamiento y protección de datos personales. Noticias UNAD.',
      link: 'https://noticias.unad.edu.co/index.php/noticias-unad/lo-que-debes-saber-sobre-el-tratamiento-y-proteccion-de-datos-personales?filter_tag%5B0%5D=208',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06  <br> Responsable Ecosistema Virtual de Recursos Educativos Digitales  ',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez',
          cargo: 'Responsable de línea de producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Eliana Audrey Manchola Pérez ',
          cargo: 'Experto temático ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila ',
        },
        {
          nombre: 'Paola Alexandra Moya ',
          cargo: 'Evaluadora instruccional ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Fredy Fabian Ortiz Segura',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Henry Alvarez Astudillo',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta ',
          cargo: 'Intérprete lenguaje de señas  ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura ',
          cargo: 'Intérprete lenguaje de señas ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania ',
          cargo: 'Animador y productor audiovisual ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada ',
          cargo: 'Animador y productor audiovisual ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Maria Carolina Tamayo Lopez ',
          cargo: 'Locución ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos ',
          cargo: 'Locución ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Ricardo Oliveros Zambrano ',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Aixa Natalia Sendoya Fernández ',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez ',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa ',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
