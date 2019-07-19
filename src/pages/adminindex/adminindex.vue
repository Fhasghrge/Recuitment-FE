<template>
  <div class="be">
    <sidebar></sidebar>
    <topbar></topbar>
    <announce></announce>
    <router-view></router-view>
  </div>
</template>

<script>
import topbar from '../../components/topbar.vue'
import sidebar from '../../components/sidebar.vue'
import announce from '../../components/announce.vue'

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
