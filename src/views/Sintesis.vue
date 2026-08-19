<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      .row.mb-5
        .col-12.ps-3(style="border-left: 10px solid #39A900;") 
          h3.mb-1 Elaboración de alimento balanceado para aves de corral 
          p.mb-0 
            | Síntesis:             
            | elaboración de alimento balanceado para aves de corral 
      p.mt-5 A continuación, se presenta una síntesis de la temática estudiada en el componente formativo.

      .row.justify-content-center
        .col-lg-10.mb-5.bgs.p-4.brad
          figure
            img(src="@/assets/curso/sintesis.svg", alt="Síntesis sobre elaboración de alimento balanceado para aves de corral organizado en siete áreas: unidades de medida, equipos, herramientas y áreas de trabajo, insumos, limpieza, higiene y desinfección, seguridad y salud en el trabajo, empacado, rotulado y almacenamiento, y manejo de residuos; incluye categorías relacionadas con medición, selección y manejo de equipos, recepción y conservación de insumos, procedimientos sanitarios, bioseguridad, protección personal, empacado, trazabilidad, conservación, control de plagas, clasificación de residuos y disposición final.")
        .col-auto
          a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/bullets/icono-pdf.svg")
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
