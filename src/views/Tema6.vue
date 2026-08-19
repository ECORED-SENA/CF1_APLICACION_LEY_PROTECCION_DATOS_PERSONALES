<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 6
        h1 Responsables y encargados del tratamiento
      
      Separador
      //- Inicio Tema6.1
      .row
        #t_6_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 6.1 Responsable del tratamiento 

      Separador
      //- Inicio Tema6.2
      .row
        #t_6_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 6.2 Encargado del tratamiento 

      Separador
      //- Inicio Tema6.3
      .row
        #t_6_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 6.3 Gestión organizacional del tratamiento de datos


</template>

<script>
export default {
  name: 'Tema6',
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
