<template>
  <div class="be">
    <sidebar></sidebar>
    <topbar></topbar>
    <announce></announce>
    <router-view></router-view>
  </div>
</template>

<script>
import topbar from '../../components/topbar'
import sidebar from '../../components/sidebar'
import announce from '../../components/announce'

export default {
  name: 'adminindex',
  components: {
    topbar,
    sidebar,
    announce

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
