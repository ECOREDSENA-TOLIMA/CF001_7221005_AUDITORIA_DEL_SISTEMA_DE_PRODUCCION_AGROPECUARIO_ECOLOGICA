<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-4(data-aos="fade-down") El siglo XXI ha traído consigo una serie de cambios que están dejando una huella profunda en la sociedad actual y que, sin duda, tendrán un impacto significativo en las generaciones futuras. Las noticias con frecuencia informan sobre crisis y hambrunas resultantes de esta situación, exacerbadas por el aumento de los precios de los productos químicos utilizados en la agricultura, especialmente aquellos producidos en regiones afectadas por conflictos, como la guerra en Rusia y Ucrania, dos de los principales productores mundiales de estos insumos.
    p.mb-5(data-aos="fade-down") Es imperativo que miremos hacia formas de producción agropecuaria más sostenibles y respetuosas con el medio ambiente, capaces de satisfacer las crecientes demandas de alimentos de alta calidad que nuestra sociedad necesita tanto en el presente como en el futuro. Por esta razón, los invitamos a ver el siguiente video, que introduce la temática central de este componente formativo:
    
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/" title="Generalidades de auditoría" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Generalidades de auditoría


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
