<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5 A continuación, se describe el tema principal del componente formativo Generalidades de la auditoría, teniendo en cuenta que es un proceso fundamental en el mundo empresarial, financiero, tecnológico y agrícola, que se encarga de examinar y evaluar la información operativa de una organización. Su objetivo principal es verificar la precisión y confiabilidad de los registros y asegurar el cumplimiento de normativas y políticas internas. Los auditores, profesionales especializados, analizan estados financieros, transacciones y procedimientos para detectar posibles errores, fraudes o irregularidades. Además, brindan recomendaciones para mejorar la eficiencia y la transparencia. Es una herramienta esencial para la toma de decisiones informadas y la rendición de cuentas.
    //- p.mb-5 A continuación, se muestra un mapa conceptual con los elementos más importantes desarrollados en este componente.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.png", alt="En la síntesis del componente formativo se muestran cada uno de los temas desarrollados: auditoría, auditor, unidad productiva, fuentes de información y normatividad cada uno con sus características fundamentales.")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
