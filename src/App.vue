<template>
  <div id="app">
    <MainFooter />
  </div>
</template>

<script>
import MainFooter from '@/components/MainFooter'

  export default {
    name: 'App',
    components: {
      MainFooter
    }
  }
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
</style>