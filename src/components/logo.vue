<template>
  <div class="part1">
    <img src="../assets/LOGO1.png"
         class="logo" />
    <img src="../assets/font.png"
         class="p1" />
    <h2 class="p2">2019年秋季招新答题系统</h2>
  </div>
</template>

<script>
export default {
  name: 'logo'
}
</script>

<style>
@media (min-width: 751px) {
  .part1 {
    width: 48%;
    text-align: center;
    margin-top: -9%;
    margin-left: -9%;
  }

  .part1 .logo {
    width: 70%;
    opacity: 0.9;
    display: inline-block;
  }

  .p1 {
    width: 50%;
    margin: 1.3rem auto;
  }

  .p2 {
    font-family: PingFangSC-Semibold;
    font-size: 2rem;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 2.1px;
    color: #ffffff;
    text-align: center;
    margin: 10px auto;
  }
}

@media (max-width: 750px) {
  .part1 {
    width: 90%;
    text-align: center;
    margin: 0 auto;
    padding-top: 12%;
  }

  .logo {
    width: 90%;
    opacity: 0.9;
    display: inline-block;
  }

  .p1 {
    width: 70%;
    margin: 0.5rem auto;
  }

  .p2 {
    font-family: PingFangSC-Semibold;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 4px;
    color: #ffffff;
    text-align: center;
  }
}
</style>
