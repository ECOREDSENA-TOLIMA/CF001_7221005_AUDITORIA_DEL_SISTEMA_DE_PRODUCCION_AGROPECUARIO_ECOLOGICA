<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Fuentes de información

    .row.justify-content-center.align-items-center.mb-5
      .col-md-7(data-aos="fade-down-right")
        .cajon.color-secundario.p-4.p-md-5
          p Las fuentes de información son instrumentos utilizados para la búsqueda, conocimiento y acceso a diferentes tipos de información, ya que la difusión de la misma a través de internet adquiere una importancia estratégica, la cual es decisiva en la construcción de sociedades desarrolladas. 
          p Estas fuentes tienen como objetivo principal, facilitar la identificación y localización de documentos informativos que sean necesarios para el objeto de estudio. 
      .col-md-5(data-aos="fade-down-left")
        figure
          img(src='@/assets/curso/temas/tema4/tema4-1.png', alt='')

    p.mb-4(data-aos="fade-down") Por lo anterior, cuando se realiza una revisión literaria debe hacerse de manera selectiva y dinámica, esto debido a que constantemente están surgiendo nuevas publicaciones en los distintos temas con respecto a un tópico específico. 
    p.mb-5(data-aos="fade-down") Una fuente de información es un recurso que puede proporcionar datos y que serán utilizados en la construcción de hechos junto con las bases para el conocimiento. 

    Separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.1 Generalidades

    p.mb-5(data-aos="fade-down") Dependiendo del grado o el nivel de la información que se proporciona, bien sea por la institución o el autor que la respalda, se pueden categorizar las fuentes de información de la siguiente manera:
    
    .row.justify-content-center.mb-5
      .col-md-4(data-aos="fade-down-right")
        img(src='@/assets/curso/temas/tema4/tema4-2.svg', alt='')
        div.mt-4
          h4 Primaria 
          p Es original, por lo que es llamada de primera mano, la cual ha sido el resultado de conceptos, ideas, teorías y resultados de diferentes investigaciones. 
          p Allí es donde se obtiene la información directa previa a ser interpretada o analizada por otra persona o entidad.
          p Dentro de las principales fuentes de información primaria se encuentran: libros, monografías, publicaciones de periódicos, documentos oficiales o informes que provengan de instituciones privadas o públicas, al igual que tesis y trabajos que hayan sido presentados en seminarios o en conferencias, los videos documentales y los foros de investigación.

      .col-md-4(data-aos="fade-down")
        img(src='@/assets/curso/temas/tema4/tema4-3.svg', alt='')
        div.mt-4
          h4 Secundaria
          p Estas fuentes proporcionan información que ha sido recopilada y analizada por alguien más que no estuvo directamente involucrado en el evento o investigación original. Ejemplos de fuentes secundarias son libros, artículos de revistas, informes de investigación y análisis de datos.
      .col-md-4(data-aos="fade-down-left")
        img(src='@/assets/curso/temas/tema4/tema4-4.svg', alt='')
        div.mt-4
          h4 Terciarias
          p Estas fuentes son resúmenes o recopilaciones de fuentes primarias y secundarias. No contienen información original, sino que ofrecen una visión general o una síntesis de la información disponible. Ejemplos de fuentes terciarias son enciclopedias, resúmenes, reseñas y algunos sitios web. 

    p.mb-5(data-aos="fade-down") Es fundamental reconocer la importancia de la interacción entre diferentes fuentes de información al llevar a cabo una investigación o auditoría en cualquier sector económico. La colaboración entre profesionales especializados y la recopilación de datos de alta calidad académica son elementos clave para garantizar la eficacia y la precisión de cualquier proceso de auditoría. En la siguiente figura se podrá encontrar cómo se conectan estas fuentes de información en el contexto de una auditoría.

    .row.justify-content-center.mb-5
      .col-12.col-md-11.col-lg-9(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 1. </b> <i>Fuentes de información</i>
        figure 
          img(src='@/assets/curso/temas/tema4/fig-1.png', alt='En la figura 1 se muestran los diferentes tipos de fuentes de información: primarias, secundarias y terciarias según sus características.')



</template>

<script>
export default {
  name: 'Tema4',
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
