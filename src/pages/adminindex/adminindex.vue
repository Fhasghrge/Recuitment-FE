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
#app {
  margin: 0;
}
</style>
