<template>
  <HeaderNav/>
  <router-view></router-view>
</template>

<script>
import HeaderNav from './components/HeaderNav.vue'
export default {
  name: 'App',
  components: {
    HeaderNav
  }
}
</script>

<style>
*{
  margin: 0 auto;
  padding:0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
