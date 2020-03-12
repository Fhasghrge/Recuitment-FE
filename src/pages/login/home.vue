<template>
  <div class="mainall">
    <div class="main">
      <logo></logo>
      <!-- <login></login> -->
    </div>
    <div class="penotice">
      <img src="../../assets/logo.png" />
      <br />
      <span>请到pc端参加招新笔试</span>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import logo from '../../components/logo'
// import login from '../../components/login'
export default {
  name: 'home',
  data() {
    return {
      showflag: false
    }
  },
  components: {
    logo
    // login
  }
  // mounted () {
  //   var hrt = document.documentElement.clientHeight
  //   window.onload = function () {
  //     document.getElementById('app').style.height = hrt + 'px'
  //   }
  // }
}
</script>

<style>
html,
body {
  margin: 0;
  height: 100%;
  overflow: scroll;
}
body {
  background-image: url('../../assets/back.png');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
button,
input {
  outline: none;
  outline-color: rgba(255, 255, 255, 0);
}
button:hover {
  cursor: pointer;
}
#app {
  margin: 0;
}
ul {
  list-style-type: none;
}
@media (min-width: 751px) {
  .mainall {
    height: 100%;
    width: 90%;
    margin: 0 auto;
  }
  .main {
    justify-content: space-around;
    align-items: center;
    height: 100vh;
    position: relative;
    width: 47%;
  }
  .penotice {
    display: none;
  }
}

@media (max-width: 750px) {
  .main {
    /* width: 80%;
    text-align: center;
    margin: 0 auto;
    height: 100%; */
    display: none;
  }
  .penotice {
    width: 80vw;
    text-align: center;
    color: #ffffff;
    margin: 0 auto;
    height: 100vh;
  }
  .penotice img {
    position: absolute;
    top: 2vh;
    left: 5vw;
    width: 40vw;
  }
  .penotice span {
    text-align: center;
    line-height: 100vh;
    font-size: 25px;
  }
}
</style>
