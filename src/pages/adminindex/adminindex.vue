<template>
  <div class="be">
    <sidebar></sidebar>
    <topbar></topbar>
    <announce></announce>
    <overview></overview>
  </div>
</template>

<script>
import topbar from '../../components/topbar'
import sidebar from '../../components/sidebar'
import announce from '../../components/announce'
import overview from '../../components/overview'

export default {
  name: 'adminindex',
  components: {
    topbar,
    sidebar,
    overview,
    announce
  }
}
</script>

<style>
</style>
