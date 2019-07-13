<template>
  <div id="app">
    <div class="background">
    </div>
    <router-view />
  </div>
</template>

<style>
body {
  /*background-image: url(../src/assets/back.png);*/
  background-repeat: no-repeat;
  background-size: 100% 100%;
  margin: 0;
}
  .background {
    background-image: url(../src/assets/back.png);
    height: 100vh;
    width: 100vw;
    position: fixed;
    z-index: -100;
  }
</style>
