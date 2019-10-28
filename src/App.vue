<template>
  <div id="app">
    <!-- <IndexPage /> -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import IndexPage from './views/IndexPage'

export default {
  name: 'app',
  components: {
    IndexPage
  }
}
</script>

<style>
html, body, #app {
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
</style>
