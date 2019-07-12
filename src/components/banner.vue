<template>
  <div class="bar">
    <div class="left">
      <img src="../assets/LOGO1.png" />
    </div>
    <div class="exit">
      <img src="../assets/route.png" />
    </div>
    <div class="middle">
      <h2>前端组答题</h2>
    </div>
    <user></user>
    <img src="../assets/icon.svg" class="icon1" />
  </div>
</template>

<script>
import user from './user'
export default {
  name: 'banner',
  components: {
    user
  }
}
</script>

<style>
@media only screen and (min-width: 751px) {
  .bar {
    display: flex;
    justify-content: space-between;
    background-color: rgba(0, 0, 0, 0.3);
    padding: 0 5%;
    padding-top: 2%;
    color: #ffffff;
  }

  .icon1 {
    display: none;
  }
  .exit {
    display: none;
  }
  .left {
    width: 160px;
  }
  .left > img {
    width: 160px;
  }

  .middle {
    font-size: 1.5rem;
    text-align: center;
    height: 5rem;
  }

  .middle > h2 {
    margin: 0 auto;
    margin-top: 2%;
  }
}

@media only screen and (max-width: 750px) {
  .left {
    display: none;
  }

  .exit {
    width: 40px;
    position: relative;
  }

  .exit > img {
    width: 13px;
    position: absolute;
    right: 0;
    bottom: 9px;
  }
  .bar {
    display: flex;
    justify-content: space-between;
    padding: 0 2%;
    padding-top: 2%;
    color: #ffffff;
  }

  .middle {
    font-size: 1rem;
    height: 1rem;
    margin: 0 auto;
  }

  .middle > h2 {
    margin: 0 auto;
    margin-top: 5px;
  }

  .icon1 {
    width: 40px;
    height: 40px;
    margin-bottom: 5px;
  }

  .exit {
    transform-origin: center center;
    transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    -o-transform: rotate(180deg);
    transition: transform 0.2s;
    -moz-transition: -moz-transform 0.2s;
    -moz-transition: -moz-transform 0.2s;
    -o-transition: -o-transform 0.2s;
    -ms-transition: -ms-transform 0.2s;
  }
}
</style>
