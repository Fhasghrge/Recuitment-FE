<template>
  <div class="main">
    <logo></logo>
    <login></login>
  </div>
</template>

<script>
// @ is an alias to /src
import logo from '../../components/logo'
import login from '../../components/login'
export default {
  name: 'home',
  components: {
    logo,
    login
  }
}
</script>

<style scoped>
html,
body {
  height: 100vh;
}
ul {
  list-style-type: none;
}
#app {
  height: 100vh;
  width: 90%;
  margin: 0 auto;
}
@media (min-width: 751px) {
  .main {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100vh;
    margin: 0 auto;
  }
}

@media (max-width: 750px) {
  .main {
    width: 80%;
    text-align: center;
    margin: 0 auto;
    height: 100vh;
  }
}
</style>
