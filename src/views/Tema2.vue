<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Auditor

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/tema2-1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El auditor es una persona con formación profesional y experiencia que está capacitada para llevar a cabo auditorías. Su función principal es revisar la evidencia objetiva y evaluar los resultados obtenidos durante la auditoría. El objetivo principal del auditor es verificar que los registros sean coherentes con las actividades realizadas en la organización, es decir, se encarga de reflejar la veracidad de los documentos, procesos y resultados de la empresa. Además, analiza el patrimonio y las obligaciones de la compañía.
          br
          br
          | El auditor también desempeña un papel importante al ofrecer #[b recomendaciones] para mejorar la calidad y eficiencia de los procesos de una organización, aumentar la productividad y reducir los costos. Esto puede incluir medidas como la reducción de gastos innecesarios o injustificados que puedan afectar los intereses de la organización. A continuación, se describen los aspectos que caracterizan al auditor en su labor.

    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Principios

    p.mb-5(data-aos="fade-down") Los principios del auditor son el conjunto de valores, creencias y normas que orientan la acción del profesional respecto a su obrar y proceder en las auditorías y se pueden resumir de la siguiente manera:
    
    .row.justify-content-center.align-items-center.mb-5
      .col-md-6(data-aos="fade-down-right")
        figure.px-md-5 
          img(src='@/assets/curso/temas/tema2/tema2-2.svg', alt='')
      .col-md-6(data-aos="fade-down-left")
        ul.lista-ul.mb-3.ms-4.mb-4(data-aos="fade-down-left")
          li 
            i.fas.fa-circle
            | Objetividad.
          li 
            i.fas.fa-circle
            | Independencia.
          li 
            i.fas.fa-circle
            | Responsabilidad.
          li 
            i.fas.fa-circle
            | Confidencialidad.
          li 
            i.fas.fa-circle
            | Observaciones de las disposiciones normativas.
          li 
            i.fas.fa-circle
            | Competencia y actualización profesional.
          li 
            i.fas.fa-circle
            | Difusión y colaboración.
          li 
            i.fas.fa-circle
            | Respeto entre colegas.
          li 
            i.fas.fa-circle
            | Conducta ética.
          li 
            i.fas.fa-circle
            | Integridad.

    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Perfil

    p.mb-5(data-aos="fade-down") En los procesos de auditoría, el perfil del auditor desempeña un papel importante, debido a que en este profesional recae la mayor responsabilidad del proceso, además, porque debe contar con la habilidad para recopilar las evidencias y proponer las acciones de mejora para incrementar el desempeño de la organización. Por lo tanto, él debe contar con las competencias generales que se mencionan a continuación:
    
    ul.lista-ul.mb-3.ms-4.mb-4(data-aos="fade-down-left")
      li 
        i.fas.fa-circle
        | Formación académica.
      li 
        i.fas.fa-circle
        | Formación complementaria.
      li 
        i.fas.fa-circle
        | Formación empírica.
      li 
        i.fas.fa-circle
        | Experiencia en el área.
        
    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.3 Competencias técnicas

    .bloque-texto-g.bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/tema2-3.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Estas son comúnmente llamadas competencias específicas y se refieren a todas las herramientas, habilidades y destrezas que la persona posee para desarrollar de manera óptima su trabajo, implicando el correcto desempeño de una función determinada que pudieron haber sido adquiridas a través del tiempo o durante su formación profesional y por experiencia laboral.
          br
          br
          | Las anteriores varían según el puesto de trabajo; es decir, estas habilidades no son las mismas para una persona que desarrolla un puesto gerencial a un cargo auxiliar, así como se ve reflejado a continuación:

    AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul mb-5" data-aos="fade-down-left")
      .row.align-items-center(titulo="Auxiliar")
        .col-md-8.col-12.mb-4.mb-md-0
          ul.lista-ul.mb-3.ms-4(data-aos="fade-down-left")
            li 
              i.fas.fa-circle
              | Conocimiento de informática básico (herramientas #[em Office]).
            li 
              i.fas.fa-circle
              | Título o formación específica según el puesto de trabajo.
            li 
              i.fas.fa-circle
              | Manejo de contabilidad básica.
            li 
              i.fas.fa-circle
              | Conocimientos en transcripción y taquigrafía.
            li 
              i.fas.fa-circle
              | Técnicas de redacción.
            li 
              i.fas.fa-circle
              | Conocimientos básicos sector.
            li 
              i.fas.fa-circle
              | Manejo de herramientas ofimáticas.
            li 
              i.fas.fa-circle
              | Experiencia de 2 años en áreas similares.
            li 
              i.fas.fa-circle
              | Manejo de herramientas digitales básicas.
        .col-md-3.col-10
          figure
            img(src='@/assets/curso/temas/tema2/tema2-4.svg', alt='')
      .row.align-items-center(titulo="Puesto gerencial")
        .col-md-8.col-12.mb-4.mb-md-0
          ul.lista-ul.mb-3.ms-4(data-aos="fade-down-left")
            li 
              i.fas.fa-circle
              | Título de maestría o doctorado terminados para un puesto de trabajo concreto según corresponda.
            li 
              i.fas.fa-circle
              | Maestría terminada y 15 años de experiencia en cargos similares.
            li 
              i.fas.fa-circle
              | Técnicas de elaboración de contenidos científicos e informes de alto nivel.
            li 
              i.fas.fa-circle
              | Conocimientos altos de regulación del sector a nivel nacional e internacional.
            li 
              i.fas.fa-circle
              | Manejo de herramientas digitales de comunicación.
            li 
              i.fas.fa-circle
              | Uso de #[em software] especializado para el sector y área de trabajo.
            li 
              i.fas.fa-circle
              | Dominio del idioma inglés, alemán o chino.
            li 
              i.fas.fa-circle
              | Experiencia de 15 años en el manejo de clientes a nivel internacional.
            li 
              i.fas.fa-circle
              | Conocimiento informático alto.
            li 
              i.fas.fa-circle
              | Liderazgo.
            li 
              i.fas.fa-circle
              | Trabajo en equipo.
            li 
              i.fas.fa-circle
              | Trabajo bajo presión.
        .col-md-3.col-10
          figure
            img(src='@/assets/curso/temas/tema2/tema2-5.svg', alt='')

    p.mb-5(data-aos="fade-down") Ahora bien, en la siguiente tabla se comparan las habilidades que requieren cuatro tipos de personas con diferentes tipos de posibilidades laborales, al analizarla, se verá cómo estas competencias técnicas son claves para poder funcionar de forma adecuadamente en una empresa.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-11(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido.mb-1
          p.titulo.pb-0.mb-0 #[b Tabla 5.] #[i Ejemplos de habilidades según el puesto de trabajo] 
        .tabla-b.color-acento-contenido
          table(style="min-width:auto")
            thead
              tr.text-center
                th.p-2(colspan="4" style="background-color:#01D8D1") Habilidades
              tr(style="background-color:#DFFFCC")
                th.p-2 Docente
                th.p-2 Gerente
                th.p-2 Deportista
                th.p-2 Conductor
            tbody
              tr
                td.p-2 Hablar en público.
                td.p-2 Motiva al equipo.
                td.p-2 Competitividad.
                td.p-2 Concentración.
              tr
                td.p-2 Servicial.
                td.p-2 Toma de decisiones.
                td.p-2 Dedicación.
                td.p-2 Conocimiento.
              tr
                td.p-2 Paciente.
                td.p-2 Liderazgo.
                td.p-2 Concentración.
                td.p-2 Precisión.
              tr
                td.p-2 Adaptación al cambio.
                td.p-2 Responsabilidad.
                td.p-2 Control.
                td.p-2 Juicio.
              tr
                td.p-2 Tolerante.
                td.p-2 Creatividad.
                td.p-2 Condición física.
                td.p-2 Servicio al cliente.

    p.mb-5(data-aos="fade-down") Así, las empresas buscan reclutar personal para cubrir los puestos disponibles, centrándose en la búsqueda de perfiles adecuados que posean las habilidades necesarias para desempeñar las actividades requeridas en cada puesto.

    Separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.4 Código de conducta

    .row.justify-content-center.align-items-center.mb-5
      .col-md-4(data-aos="fade-down-right")
        figure.px-md-5 
          img(src='@/assets/curso/temas/tema2/tema2-6.svg', alt='')
      .col-md-8(data-aos="fade-down-left")
        p En todas las empresas existen unas normas o reglamentos internos que rigen las actividades de las organizaciones, a estas normas se les llama código de conducta. Este documento se encuentra constituido por la declaración de principios y reglas de conducta que definen a los profesionales en el ejercicio de la auditoría y tiene como propósito promover una cultura de ética en su labor, busca generar confianza por medio del aseguramiento de los procesos de gestión y “rige la ética empresarial de la organización”.
        p En este código se incluyen:
        ul.lista-ul.mb-3.ms-4.mb-4(data-aos="fade-down-left")
          li 
            i.fas.fa-circle
            | Derechos fundamentales.
          li 
            i.fas.fa-circle
            | Derechos laborales.
          li 
            i.fas.fa-circle
            | Derechos medio ambientales.  
          li 
            i.fas.fa-circle
            | Prácticas anticorrupción y soborno.
    
    p.mb-4(data-aos="fade-down") El código de conducta también incluye pautas para regular las relaciones entre los empleados y la empresa, así como las posibles sanciones en caso de violación del código. Además, debe establecer claramente cómo deben manejarse los conflictos de interés, requiriendo que los empleados tomen decisiones siempre considerando el interés de la empresa por encima de los intereses personales.
    p.mb-4(data-aos="fade-down") Este código define el comportamiento esperado de todos los miembros de la organización, especificando las conductas permitidas y las prohibidas, así como las normativas que deben seguirse. Esto puede abarcar aspectos como la vestimenta, los permisos que los empleados deben solicitar y el uso adecuado de los recursos de la empresa.
    p.mb-5(data-aos="fade-down") Para asegurar el buen funcionamiento de la organización, el bienestar de los empleados y la comprensión de las normas internas, es esencial que todos los miembros de la organización, desde los directivos hasta los trabajadores, estén familiarizados con el reglamento interno de la empresa. Por esta razón, el código de conducta también puede incluir:

    ol.lista-ol--cuadro.lista-ol--separador.ms-3.ms-md-4.mb-5(data-aos="fade-down-left")
      li 
        .lista-ol--cuadro__vineta
          span 1
        | Prohibición de actividades que no sean acordes con el trabajo.
      li 
        .lista-ol--cuadro__vineta
          span 2
        | Confidencialidad.
      li 
        .lista-ol--cuadro__vineta
          span 3
        | Explicar el proceso de cómo se procede en caso de bajas.
      li 
        .lista-ol--cuadro__vineta
          span 4
        | Si existe un código de vestimenta y las acciones en caso de no cumplir con este ítem.
      li 
        .lista-ol--cuadro__vineta
          span 5
        | Conductas permitidas y no permitidas.

    p.mb-5(data-aos="fade-down") Por otro lado, es esencial tener en cuenta los principios que se basan en el objetivo principal de la empresa, el cual implica considerar la satisfacción del cliente, los proveedores y el bien común. Estos principios deben servir como guía para el funcionamiento adecuado de la organización y pueden incluir:

    ol.lista-ol--cuadro.lista-ol--separador.ms-3.ms-md-4.mb-5(data-aos="fade-down-left")
      li 
        .lista-ol--cuadro__vineta
          span 1
        | Respeto por las personas e igualdad de trato.
      li 
        .lista-ol--cuadro__vineta
          span 2
        | Respeto por los Derechos Humanos.
      li 
        .lista-ol--cuadro__vineta
          span 3
        | Transparencia.
      li 
        .lista-ol--cuadro__vineta
          span 4
        | Seguridad y medio ambiente.
      li 
        .lista-ol--cuadro__vineta
          span 5
        | Protección de la información.
      li 
        .lista-ol--cuadro__vineta
          span 6
        | Imagen corporativa.
      li 
        .lista-ol--cuadro__vineta
          span 7
        | Responsabilidad Social Corporativa.

</template>

<script>
export default {
  name: 'Tema2',
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
