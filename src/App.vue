<template lang='pug'>
#app
  MainPage
</template>

<script>
import MainPage from './pages/MainPage'
export default {
  name: 'App',
  components: {
    MainPage
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  margin: 0;
  padding: 0;
}
</style>
