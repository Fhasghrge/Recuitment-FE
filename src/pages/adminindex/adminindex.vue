<template>
  <div class="be">
    <sidebar></sidebar>
    <topbar></topbar>
    <router-view :key="key"></router-view>
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
  },
  computed: {
    key () {
      return this.$route.path + Math.random()
    }
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
