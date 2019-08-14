<template>
  <div class="mainall">
    <div class="main">
      <logo></logo>
      <login></login>
    </div>
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
  },
  mounted () {
    var hrt = document.documentElement.clientHeight
    window.onload = function () {
      document.getElementById('app').style.height = hrt + 'px'
    }
  }
}
</script>

<style>
html,
body {
  margin: 0;
  height: 100%;
}
body {
  background-image: url("../../assets/back.png");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
#app {
  margin: 0;
}
ul {
  list-style-type: none;
}
.mainall {
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
