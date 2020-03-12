<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
</style>
<script>
export default {
  name: 'App',
  methods: {
    // 判断移动端还是pc端
    _isMobile () {
      let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
      return flag
    }
  },
  mounted: function () {
    if (this._isMobile()) {
      alert('请到pc端参加考试！')
      this.$router.replace('/home')
    }
  }
}
</script>
