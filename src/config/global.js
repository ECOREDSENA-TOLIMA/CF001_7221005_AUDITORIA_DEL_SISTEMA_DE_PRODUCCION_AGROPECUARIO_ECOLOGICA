export default {
  global: {
    componenteFormativo: 'Generalidades de auditoría',
    descripcionCurso:
      'En este componente formativo se desarrollarán temas referentes a los conceptos generales de: qué es una auditoría, qué es un auditor, aspectos relacionados con las unidades productivas, fuentes de información, normatividad para la producción primaria y el sello ecológico. Esta información le será útil para desarrollar y entender los procesos en una auditoría.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
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
        titulo: 'Auditoría',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Tipos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Procedimientos y técnicas',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Instrumentos',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Métodos',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Criterios',
            hash: 't_1_6',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Auditor',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Principios',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Perfil',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Competencias técnicas',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Código de conducta',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Unidad productiva',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Conceptos',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Tipología',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Características y componentes',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Métodos de producción',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Recursos',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Fuentes de información',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Generalidades',
            hash: 't_4_1',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Normativa',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Sello alimento ecológico',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Reglamento para la producción primaria',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo:
              'Procedimientos sistema de control de productos agropecuarios ecológicos',
            hash: 't_5_3',
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_01_7221005.zip',
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
  complementario: [
    {
      tema: '5.1. Sello alimento ecológico.',
      referencia:
        'SUCO Solidarité Unión Coopération. (s. f.). ¿Cómo reconocer un producto agroecológico? [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=cbjee3WnCps',
    },
  ],
  glosario: [
    {
      termino: 'Alimentos ecológicos',
      significado:
        'alimentos que se han desarrollado mediante el uso de tecnologías agroecológicas, teniendo en cuenta los parámetros de diversificación de especies y promoviendo la mejora de los componentes del suelo, mediante el control biológico de enfermedades y plagas sin utilizar productos químicos, por lo tanto, son alimentos que pretenden cuidar el medio ambiente y la salud humana. ',
    },
    {
      termino: 'Auditoría',
      significado:
        'proceso que evalúa el cumplimiento de normas y directrices estipuladas según un diseño planeado, donde se revisan aspectos como la calidad de los materiales, el personal calificado, fuentes de financiación, cadena de comercialización del producto, la administración, revisión de documentos, desde el inicio hasta la obtención del producto final. ',
    },
    {
      termino: 'Código de conducta',
      significado:
        'normas o reglamentos internos que rigen las actividades de las organizaciones.',
    },
    {
      termino: 'Competencia técnica',
      significado:
        'todas las herramientas, habilidades y destrezas que la persona necesita para desarrollar de manera óptima su trabajo, implicando el correcto desempeño de una función determinada.',
    },
    {
      termino: 'Fuentes de información',
      significado:
        'instrumentos utilizados para la búsqueda, conocimiento y acceso a diferentes tipos de información ya que la difusión de la misma a través de internet adquiere una importancia estratégica la cual es decisiva en la construcción de sociedades desarrolladas.',
    },
    {
      termino: 'Unidad productiva',
      significado:
        'conjunto de personas que deciden formar una organización, empresa, asociación, para ofrecer un producto, bien o servicio para desarrollar una actividad que genere ingresos con una mínima inversión inicial y bajo costo operativo.',
    },
  ],
  referencias: [
    {
      referencia:
        'Dirección de Gestión y Desempeño institucional. (s.f.). Guía de auditoría interna basada en riesgos para entidades públicas. Dirección de Gestión y Desempeño Institucional. ',
      link:
        'https://www.funcionpublica.gov.co/documents/28587410/34299967/Gu%C3%ADa+de+auditor%C3%ADa+interna+basada+en+riesgos+para+entidades+p%C3%BAblicas+-+Versi%C3%B3n+4.pdf/c8a7b1a4-20ea-ee36-734c-2404229103ed?t=1633729954346',
    },
    {
      referencia:
        'ISO-Organización Internacional de Normalización. (2018). Norma internacional ISO 19011. ISO. ',
      link:
        'https://www.cecep.edu.co/documentos/calidad/norma-iso-19011-2018.pdf',
    },
    {
      referencia:
        'Ministerio de Agricultura y Desarrollo Rural. (2004). Resolución 148 de 2004. Por la cual se crea el Sello de Alimento Ecológico y se reglamenta su otorgamiento y uso. ',
      link:
        'https://www.minagricultura.gov.co/tramites-servicios/Documents/Resolucion_Ministerial_No_%20148_del_15_de_marzo_de_2004_SELLO_ECOLOGICO.pdf',
    },
    {
      referencia:
        'Ministerio de Salud. (2005). Resolución 5109 de 2005. Por la cual se establece el reglamento técnico sobre los requisitos de rotulado o etiquetado que deben cumplir los alimentos envasados y materias primas de alimentos para consumo humano. ',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/Resolucion%205109%20de%202005.pdf',
    },
    {
      referencia:
        'Ministerio de Agricultura y Desarrollo Rural. (2006). Resolución 0187 de 2006. Por la cual se adopta el Reglamento para la producción primaria, procesamiento, empacado, etiquetado, almacenamiento, certificación, importación, comercialización, y se establece el Sistema de Control de Productos Agropecuarios Ecológicos. ',
      link:
        'https://www.minagricultura.gov.co/tramites-servicios/Documents/Resolucion_187_de_2006.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de línea de producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Víctor Julián Ardila',
          cargo: 'Experto Temático',
          centro: 'Regional Tolima - Centro Agropecuario La Granja',
        },
        {
          nombre: 'Diana Carolina Sánchez Rodríguez',
          cargo: 'Experto Temático',
          centro: 'Regional Tolima - Centro Agropecuario La Granja',
        },
        {
          nombre: 'Ana Vela Rodríguez Velásquez',
          cargo: 'Diseñadora Instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Asesor Metodológico',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo Desarrollo Curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'José Gabriel Ortiz Abella',
          cargo: 'Corrector de estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Sergio Augusto Ardila Ortiz',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Asesor Metodológico',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Luis Fernando Botero Mendoza',
          cargo: 'Diseñador Web',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oscar Daniel Espitia Marín',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboarde Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Produccióon Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oscar Daniel Espitia Marín',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
