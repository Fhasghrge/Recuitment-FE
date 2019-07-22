<template>
  <div class="be">
    <sidebar></sidebar>
    <topbar></topbar>
    <router-view></router-view>
  </div>
</template>

<script>
import topbar from '../../components/topbar'
import sidebar from '../../components/sidebar'

export default {
  name: 'adminindex',
  components: {
    topbar,
    sidebar
  }
}
</script>

<style>
html {
  margin: 0;
  min-height: 100vh;
}
body {
  background-image: url("../../assets/back.png");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  margin: 0;
  min-height: 100vh;
}
#app {
  margin: 0;
}
</style>
