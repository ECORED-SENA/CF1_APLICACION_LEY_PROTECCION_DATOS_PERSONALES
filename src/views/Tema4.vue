<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 4
        h1 Categorías especiales de datos personales

      Separador
      //- Inicio Tema4.1
      .row
        #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.1 Clasificación de los datos personales 

      Separador
      //- Inicio Tema4.2
      .row
        #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.2 Datos sensibles 

      Separador
      //- Inicio Tema4.3
      .row
        #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.3 Datos de niños, niñas y adolescentes
          
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
