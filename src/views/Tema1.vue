<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Auditoría

    .row.justify-content-center.align-items-center.mb-5
      .col-md-3(data-aos="fade-down-right")
        figure 
          img(src='@/assets/curso/temas/tema1/tema1-1.svg', alt='')
      .col-md-9(data-aos="fade-down-left")
        p En la actualidad la aplicación de las auditorías ha sido de gran importancia, porque de allí se determinan los lineamientos y las actividades que deben tener en cuenta las organizaciones para evaluar el desempeño en su planeación, coordinación y ejecución.
        p Aunque existen diversas clases de auditorías, estas dependerán de la naturaleza y la clase de organización a la que se le aplicarán; sin embargo, tienen en común una primera parte que es el conocimiento de la entidad objeto de esta, la planeación, la ejecución, la comunicación de resultados y al final una autoevaluación de la auditoría para medir el desempeño de la actividad de la misma.
        p.mb-0 En este apartado se hablarán de las generalidades de las auditorías, conceptos, tipos, auditores, principios y perfil del auditor, métodos, procedimientos, técnicas y se definirá qué es una competencia técnica.

    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Concepto

    p.mb-5(data-aos="fade-down") De manera general se puede decir que una auditoría es un proceso que evalúa el cumplimiento de normas y directrices estipuladas según un diseño planeado, donde se revisan aspectos como los que se encuentran a continuación:
    
    .row.justify-content-center.align-items-center.mb-5
      .col-md-9(data-aos="fade-down-right")
        ul.lista-ul.mb-3.ms-3
          li 
            i.fas.fa-check
            | Verificar que la organización cumple con todas las leyes y regulaciones aplicables a su actividad.
          li 
            i.fas.fa-check
            | Evaluar si se siguen adecuadamente las políticas, procedimientos y prácticas internas de la organización.
          li 
            i.fas.fa-check
            | Analizar la calidad de los productos o servicios ofrecidos y si cumplen con los estándares establecidos.
          li 
            i.fas.fa-check
            | Determinar si los procesos internos son eficientes y si se gestionan los recursos de manera óptima.
          li 
            i.fas.fa-check
            | Asegurarse de que se mantenga la seguridad de la información y la protección de datos sensibles.
          li 
            i.fas.fa-check
            | Evaluar el estado financiero de la organización y la precisión de los informes financieros.
          li 
            i.fas.fa-check
            | Verificar si la organización está alcanzando sus metas y objetivos estratégicos.
          li 
            i.fas.fa-check
            | Examinar las prácticas de responsabilidad social y ambiental de la organización.
      .col-md-3(data-aos="fade-down-left")
        figure 
          img(src='@/assets/curso/temas/tema1/tema1-2.svg', alt='')
  

    p.mb-4(data-aos="fade-down") Estas evaluaciones son realizadas por profesionales debidamente capacitados, a quienes se les conoce como auditores. Junto con su equipo, los auditores elaboran un plan de auditoría en el que describen paso a paso las actividades a realizar y los detalles acordados para llevar a cabo la auditoría.
    p.mb-5(data-aos="fade-down") La auditoría se utiliza como una herramienta efectiva para proporcionar información sobre la organización y, de esta manera, mejorar sus procesos y su desempeño. El éxito de una auditoría depende en gran medida de la aplicación de los siete principios establecidos en la Norma ISO 19011 (ISO, 2018). A continuación, se describen estos principios:

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul" data-aos="fade-down")
      .row(titulo="Integridad")
        .col-md-6.mb-4.mb-md-0
          p Los auditores deben ser personas idóneas, honestas y responsables en su trabajo, desempeñando de manera imparcial las actividades.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/tema1-3.png', alt='')
      .row(titulo="Presentación imparcial")
        .col-md-6.mb-4.mb-md-0
          p Es deber de los auditores informar cualquier hallazgo con la verdad y exactitud.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/tema1-4.png', alt='')
      .row(titulo="Debido cuidado profesional")
        .col-md-6.mb-4.mb-md-0
          p Se refiere a la aplicación del buen juicio a lo largo de toda la auditoría.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/tema1-5.png', alt='')
      .row(titulo="Confidencialidad")
        .col-md-6.mb-4.mb-md-0
          p La información colectada en la auditoría no se puede divulgar ni usar para fines personales o del cliente.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/tema1-6.png', alt='')
      .row(titulo="Independencia")
        .col-md-6.mb-4.mb-md-0
          p Es importante, especialmente, en el momento de generar las conclusiones de las auditorías,  estas deben ser libres de sesgo o conflicto de intereses, manteniendo siempre la objetividad.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/tema1-7.png', alt='')
      .row(titulo="Enfoque basado en evidencia")
        .col-md-6.mb-4.mb-md-0
          p La información de la organización debería ser verificable, a esto se le conoce como evidencia. 
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/tema1-8.png', alt='')
      .row(titulo="Enfoque basado en riesgos")
        .col-md-6.mb-4.mb-md-0
          p Siempre se deben considerar los riesgos y oportunidades.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/tema1-9.png', alt='')

    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Tipos

    p.mb-5(data-aos="fade-down") 

    .bloque-texto-d.color-primario.p-4.mb-5(data-aos="fade-left") 
      .bloque-texto-d__texto.mb-2
        i.fas.fa-quote-left
        p.text-regular En la literatura se pueden encontrar diversas clasificaciones dependiendo del área donde se realizará en la organización; sin embargo, todas estas se pueden enmarcar en dos grandes grupos: auditoría interna y auditoría externa.
        i.fas.fa-quote-right
      .bloque-texto-d__autor 
        .h5.mb-0 - (ISO, 2018)

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-11(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido.mb-1
          p.titulo.pb-0.mb-0 #[b Tabla 1.] #[i Tipos de auditoría] 
        .tabla-b.color-acento-contenido
          table(style="min-width:auto")
            thead
              tr.cabecera-a.text-center
                th(colspan="3") Tipos de auditoría
            tbody
              tr.text-center
                th(style="background-color:#B3E5FC") Auditoría interna
                th(colspan="2" style="background-color:#FFF9C4") Auditoría externa
              tr.text-center
                th(style="background-color:#D0EFFD") De primera parte
                th(style="background-color:#EBFFDF") De segunda parte 
                th(style="background-color:#EBFFDF") De tercera parte
              tr
                td.p-2 Es la que se realiza al interior de la organización para mejorar sus procesos.
                td.p-2 Organizaciones que se dedican a realizar auditorías a otras empresas y a otras partes interesadas ajenas a las compañías para mejorar sus procesos.
                td.p-2 Realizadas por otras organizaciones externas con fines a obtención de certificaciones legales o reglamentarias. 

    p.mb-5(data-aos="fade-down") Dentro de estos dos grandes grupos se pueden describir los siguientes subtipos:
    
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-11(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido.mb-1
          p.titulo.pb-0.mb-0 #[b Tabla 2.] #[i Subtipos de auditorías] 
        .tabla-b.color-acento-contenido
          table(style="min-width:auto")
            thead
              tr.cabecera-a.text-center
                th(style="width:30%") Subtipo
                th Descripción
            tbody
              tr
                th.text-center Auditoría financiera
                td.p-2 Esta se encarga de revisar lo relacionado con las finanzas de la empresa como los registros de caja y estados de cuenta, implica un análisis a las solicitudes e inversiones con lo cual se busca que el dinero tenga un retorno. Este tipo de auditoría permite garantizar un control de las finanzas para asegurar el manejo financiero de la organización.
              tr
                th.text-center Auditoría fiscal y tributaria
                td.p-2 Esta permite garantizar la normativa dentro del marco legal colombiano para garantizar que la organización no está realizando algún delito.
              tr
                th.text-center Auditoría operativa
                td.p-2 Esta evalúa el funcionamiento de la empresa de manera rutinaria, es decir mira los procesos que tiene la organización para generar soluciones orientadas a una mayor eficiencia, economía y eficacia en el manejo y uso de los recursos.
              tr
                th.text-center Auditoría de sistemas
                td.p-2 Esta revisa los programas tecnológicos que tienen las organizaciones para mejorar la productividad y el rendimiento para organizar la información.
              tr
                th.text-center Auditoría ambiental
                td.p-2 Esta revisa los procesos y las actividades de las organizaciones que podrían tener un impacto sobre el medio ambiente, por lo que tiene en cuenta si la empresa cumple con la normatividad ambiental.
              tr
                th.text-center Auditoría de calidad
                td.p-2 La cual permite evaluar si los procesos y actividades de la empresa van acordes a los objetivos y metas para obtener un ciclo de mejora continua dentro de la organización.

    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Procedimientos y técnicas
    
    p.mb-4(data-aos="fade-down") El auditor y su equipo utilizan un conjunto de técnicas de investigación, conocidas como procedimientos, durante la realización de evaluaciones en una organización, es decir, durante las auditorías. Estos procedimientos son la principal fuente de información para la elaboración del informe de auditoría y las acciones de mejora que se llevarán a cabo dentro de la empresa.
    p.mb-5(data-aos="fade-down") La elección del momento en que se aplican los procedimientos se conoce como oportunidad y desempeña un papel crucial en el éxito de la auditoría. Por ejemplo, en algunos casos, puede no ser conveniente realizar una auditoría al momento del examen de los estados financieros; en otros casos, es más útil llevar a cabo la auditoría en una fecha anterior o posterior. Al determinar la oportunidad de realizar esta actividad, es esencial tener en cuenta las siguientes características:
    //- .justify-content-center.align-items-center
    .row.mb-5(data-aos="fade-down")
      .col-md-6.col-xl.mb-4.mb-xl-0.d-flex.align-items-stretch
        .tarjeta-numerada.color-primario.p-4
          .tarjeta-numerada__numero
            .h2 1
          p.text-center 
            b Deben tener formalidad
          p.mb-0.text-center El auditor debe velar por el trato respetuoso entre su equipo de trabajo y el de la organización, además, debe realizar las actividades enmarcadas en aspectos como: la puntualidad, el cuidado profesional, la confidencialidad, la independencia y el enfoque basado en la evidencia desde su inicio hasta la finalización de la auditoría.

      .col-md-6.col-xl.mb-4.mb-xl-0.d-flex.align-items-stretch
        .tarjeta-numerada.color-secundario.p-4
          .tarjeta-numerada__numero
            .h2 2
          p.text-center 
            b Deben tener capacidad de adaptación
          p.mb-0.text-center Los procedimientos deben ser flexibles a la compañía, o que se puedan aplicar a diversos ámbitos. 

      .col-md-6.col-xl.mb-4.mb-xl-0.d-flex.align-items-stretch
        .tarjeta-numerada.color-acento-contenido.p-4
          .tarjeta-numerada__numero
            .h2 3
          p.text-center 
            b Deben tener cierto grado de especificación
          p.mb-0.text-center Que se adecúen a los requerimientos de la organización. 

      .col-md-6.col-xl.mb-4.mb-xl-0.d-flex.align-items-stretch
        .tarjeta-numerada.color-acento-botones.p-4
          .tarjeta-numerada__numero
            .h2 4
          p.text-center 
            b Deben tener regulación
          p.mb-0.text-center Aunque son procedimientos flexibles que se deben adecuar a las organizaciones, también tienen que ceñirse a normatividad y legislación vigente por lo que deben tener un proceso amplio. 

    p.mb-5(data-aos="fade-down") Asimismo, cuando el equipo de auditoría se encuentra en la empresa, debe recopilar información, para lo cual puede emplear cualquiera de las siguientes técnicas:

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4" data-aos="flip-down")
      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/tema1-10.svg' alt='')
        h4.text-center Indagación
        p.text-center Entrevistas directas con las personas de la organización.
      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/tema1-11.svg' alt='')
        h4.text-center Encuestas
        p.text-center Aplicación de encuestas a personal interno o externo relacionado con la organización.
      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/tema1-12.svg' alt='')
        h4.text-center Observación directa
        p.text-center Evaluación presencial de las instalaciones, procedimientos y las actividades que desarrolla la organización.
      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/tema1-13.svg' alt='')
        h4.text-center Revisión selectiva
        p.text-center Elección de las actividades y procedimientos a auditar.
      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/tema1-14.svg' alt='')
        h4.text-center Cálculos
        p.text-center Revisión de las cuentas o saldos que maneja la organización.
      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/tema1-15.svg' alt='')
        h4.text-center Confirmación
        p.text-center Ratificación de la autenticidad de la información por parte del equipo auditor.

    Separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.4 Instrumentos

    p.mb-4(data-aos="fade-down") Son todas aquellas herramientas que el auditor y su equipo de trabajo pueden utilizar para evidenciar los resultados, procesos y hallazgos en los diversos tipos de auditorías que se pueden realizar; es decir, es la manera cómo se presenta la información o los resultados. 
    p.mb-5(data-aos="fade-down") Los instrumentos se encuentran diseñados de acuerdo con los requerimientos de la organización, enfocados en determinar la calidad, la eficiencia y el cumplimiento de la normatividad legal, que garantiza una atención al usuario segura o una oferta de producto, bien o servicio confiable. En la siguiente tabla se muestran algunos de los ejemplos de instrumentos:

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-9.col-md-10(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido.mb-1
          p.titulo.pb-0.mb-0 #[b Tabla 3.] #[i Instrumentos de auditoría] 
        .tabla-b.color-acento-contenido
          table(style="min-width:auto")
            thead
              tr.cabecera-a.text-center
                th(colspan="2") Instrumentos en la auditoría
            tbody
              tr
                td.p-2(style="width:50%") Diagrama de flujo.
                td.p-2 Videos.
              tr
                td.p-2 Diagrama de organización.
                td.p-2 Cuestionarios.
              tr
                td.p-2 Carta de actividades.
                td.p-2 Tablas de datos.
              tr
                td.p-2 Diagrama lineal de responsabilidades.
                td.p-2 Hojas de verificación.
              tr
                td.p-2 Análisis de muestras ambientales.
                td.p-2 Histogramas.
              tr
                td.p-2 Pruebas de verificación.
                td.p-2 Diagramas de dispersión.
              tr
                td.p-2 Formatos.
                td.p-2 Estado de flujos de efectivo.
              tr
                td.p-2 Listas.
                td.p-2 Balances.
              tr
                td.p-2 Gráficos.
                td.p-2 Indicadores.
              tr
                td.p-2 Mapas.
                td.p-2 

    Separador
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.5 Métodos

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tema1-16.png')})`}"
      )
      .bloque-texto-g__texto.p-4.p-md-5
        p.mb-0 En la literatura existe una gran variedad de métodos para realizar las auditorías; sin embargo, la elección dependerá de los objetivos de la auditoría, del alcance y los criterios definidos, así como, del tiempo que se requiere, la ubicación, los recursos. También es recomendable aplicar o combinar varios métodos para optimizar la eficiencia y eficacia del proceso de auditoría y resultados.

    p.mb-4(data-aos="fade-down") La Norma Técnica Colombiana ISO 19011:2018, establece directrices para la auditoría de sistemas de gestión, ofrece orientación aplicable a organizaciones de todos los tamaños y tipos, así como a auditorías de diversos alcances y escalas. Esta norma también aborda los distintos tipos de auditorías, tanto internas como externas. Es importante destacar que la norma puede ser de utilidad en auditorías externas con propósitos distintos a la certificación de sistemas de gestión.
    p.mb-5(data-aos="fade-down") A continuación, se muestra un ejemplo de métodos dependiendo del grado de interacción humana y si la auditoría se realiza presencial o a distancia: 

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-11(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido.mb-1
          p.titulo.pb-0.mb-0 #[b Tabla 4.] #[i Tipos de auditoría] 
        .tabla-b.color-acento-contenido
          table(style="min-width:auto")
            caption Nota. Tomada de ISO (2018).
            thead
              tr.text-center
                th(rowspan="2" style="background-color:#B3E5FC") Grado de interacción entre el auditor y el auditado
                th(colspan="2" style="background-color:#01D8D1") Ubicación del auditor
              tr.text-center(style="background-color:#FFF9C4")
                th #[em In situ]
                th A distancia
            tbody
              tr
                td.p-2.text-center Interacción humana
                td.p-2 
                  ul.lista-ul.mb-3.ms-3
                    li 
                      i.lista-ul__vineta
                      | Realizar entrevistas.
                    li 
                      i.lista-ul__vineta
                      | Completar listas de verificación y cuestionarios con la participación del auditado.
                    li 
                      i.lista-ul__vineta
                      | Revisar los documentos con la participación del auditado.
                    li 
                      i.lista-ul__vineta
                      | Muestrear.
                td.p-2
                  p A través de los medios de comunicación interactivos: 
                  ul.lista-ul.mb-3.ms-3
                    li 
                      i.lista-ul__vineta
                      | Realizar entrevistas.
                    li 
                      i.lista-ul__vineta
                      | Observar el trabajo realizado con una guía a distancia.
                    li 
                      i.lista-ul__vineta
                      | Completar listas de verificación y cuestionarios.
                    li 
                      i.lista-ul__vineta
                      | Revisar los documentos con la participación del auditado.
              tr
                td.p-2.text-center Sin interacción humana
                td.p-2 
                  ul.lista-ul.mb-3.ms-3
                    li 
                      i.lista-ul__vineta
                      | Revisar los documentos (registros, análisis de datos).
                    li 
                      i.lista-ul__vineta
                      | Observar el trabajo desempeñado.
                    li 
                      i.lista-ul__vineta
                      | Realizar visitas al sitio.
                    li 
                      i.lista-ul__vineta
                      | Completar listas de verificación.
                    li 
                      i.lista-ul__vineta
                      | Muestrear (por ejemplo, productos).
                td.p-2
                  ul.lista-ul.mb-3.ms-3
                    li 
                      i.lista-ul__vineta
                      | Revisar los documentos (registros, análisis de datos).
                    li 
                      i.lista-ul__vineta
                      | Observar el trabajo desempeñado a través de medios de vigilancia, considerando los requisitos sociales y legales.
                    li 
                      i.lista-ul__vineta
                      | Analizar los datos.

    p.mb-5(data-aos="fade-down") Como se mencionó anteriormente, la elección de los métodos dependerá, principalmente, del objetivo de la auditoría; sin embargo, se pueden aplicar los métodos a cualquier tipo de auditoría de los que se mencionan en a continuación: 

    TabsA.color-acento-botones.mb-5(data-aos="fade-down-right")
      .tarjeta.tarjeta--azul.p-4(titulo="Conocimiento de la organización")
        h4 Conocimiento de la organización
        p Para conocer la organización, es conveniente realizar una reunión con el cliente para exponer el objetivo de la auditoría, conocer la misión y la visión, su plan estratégico y explicar las generalidades del proceso.
      .tarjeta.tarjeta--azul.p-4(titulo="Planificación")
        h4 Planificación
        p Se definen las actividades, los recursos, los plazos necesarios y el alcance esperado de la auditoría. Se deberá incluir también el plan para la obtención de la evidencia, los procedimientos y los instrumentos.
      .tarjeta.tarjeta--azul.p-4(titulo="Evaluación del riesgo")
        h4 Evaluación del riesgo
        p Los riesgos pueden surgir por diversas razones, tales como cambios en los ambientes laborales, la incorporación de nuevo personal, la implementación de sistemas de información nuevos o reorganizados, un crecimiento empresarial acelerado, la adopción de nuevas tecnologías, la introducción de nuevas líneas de productos o actividades, la reestructuración de la entidad, la presión para entregar resultados en plazos más cortos, consideraciones de liquidez, un alto volumen de transacciones, y el clima laboral, entre otros factores.
      .tarjeta.tarjeta--azul.p-4(titulo="Pruebas de auditoría")
        h4 Pruebas de auditoría
        p Utilizadas para emitir el juicio profesional por parte del auditor, estas pruebas pueden ser físicas, documentales, orales o analíticas.
      .tarjeta.tarjeta--azul.p-4(titulo="Conclusiones y presentación del informe")
        h4 Conclusiones y presentación del informe
        p Las conclusiones deben responder el alcance y los objetivos de la auditoría, para finalmente presentar el informe de resultados de la auditoría. En este informe se plasman unas recomendaciones y compromisos.

    Separador
    #t_1_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.6 Criterios

    .row.justify-content-center.align-items-center.mb-5
      .col-md-4.col-lg-3.col-12(data-aos="fade-down-right")
        figure 
          img(src='@/assets/curso/temas/tema1/tema1-17.svg', alt='')
      .col-md-8.col-lg-9.col-12(data-aos="fade-down-left")
        p En el contexto de una auditoría, los criterios se refieren a directrices, políticas, prácticas, procedimientos o requisitos que se derivan de leyes, normativas o resoluciones. Estos criterios son utilizados por el auditor y su equipo para comparar y contrastar la información (evidencia) recopilada durante la auditoría. Los criterios se emplean como puntos de referencia para determinar si existe conformidad o no conformidad con los estándares establecidos.
        p Los criterios de auditoría más utilizados son:
        ul.lista-ul.mb-3.ms-3
          li 
            i.lista-ul__vineta
            | Normas o resoluciones.
          li 
            i.lista-ul__vineta
            | Normas organizacionales específicas.
          li 
            i.lista-ul__vineta
            | Requerimientos legislativos regulados.
          li 
            i.lista-ul__vineta
            | Requisitos definidos.
          li 
            i.lista-ul__vineta
            | Políticas y requisitos especificados por las partes interesadas pertinentes.
          li 
            i.lista-ul__vineta
            | Procesos del sistema de calidad definidos por la organización.
          li 
            i.lista-ul__vineta
            | Códigos de conducta, entre otros elementos.

    p.mb-4(data-aos="fade-down") Estos criterios son determinados por el marco normativo y operativo que regula y orienta las diversas áreas que son evaluadas durante la auditoría, basándose en fundamentos legales. Los criterios pueden obtenerse de diversas fuentes, que incluyen:
    
    ul.lista-ul.mb-3.ms-4.mb-4(data-aos="fade-down-left")
      li 
        i.fas.fa-circle
        | Leyes, reglamentos, instructivos y otras normativas que regulan la entidad.
      li 
        i.fas.fa-circle
        | Manuales operativos y de procedimientos utilizados por la entidad.
      li 
        i.fas.fa-circle
        | Literatura relacionada, que puede incluir libros, tesis, guías y folletos.
      li 
        i.fas.fa-circle
        | Planes de gobierno a nivel local o nacional. 

    p.mb-5(data-aos="fade-down") Cuando el auditor líder o el equipo de auditores identifican la ausencia de criterios o la falta de criterios explícitos, tienen la capacidad de aplicar su juicio y conocimiento profesional para desarrollarlos, adaptándolos a las características particulares del caso en cuestión. Esto permite que los criterios sean creados según la necesidad y puedan aplicarse de manera adecuada en el contexto específico de la auditoría.



</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
