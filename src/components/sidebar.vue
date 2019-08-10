<template>
  <div class="leftbar">
    <div class="starlogo">
      <img @click="$router.push({ path: '/adminindex/overview?groups=0' })"
           src="../assets/LOGO1.png" />
    </div>
    <div class="opin">
      <div class="wrapp"><img src="../assets/icons/产品.svg"
             class="imga">
        <router-link to="/adminindex/overview?groups=1"
                     class="dire">产品</router-link>
      </div>
    </div>
    <div class="opin">
      <div class="wrapp"><img src="../assets/icons/前端.svg"
             class="imga">
        <router-link to="/adminindex/overview?groups=5"
                     class="dire">前端</router-link>
      </div>
    </div>
    <div class="opin">
      <div class="wrapp"><img src="../assets/icons/后台@1x.svg"
             class="imga">
        <router-link to="/adminindex/overview?groups=6"
                     class="dire">后台</router-link>
      </div>
    </div>
    <div class="opin">
      <div class="wrapp"><img src="../assets/icons/设计.svg"
             class="imga">
        <router-link to="/adminindex/overview?groups=2"
                     class="dire">设计</router-link>
      </div>
    </div>
    <div class="opin">
      <div class="wrapp"><img src="../assets/icons/DevOps.svg"
             class="imga">
        <router-link to="/adminindex/overview?groups=7"
                     class="dire">DevOps</router-link>
      </div>
    </div>
    <div class="opin">
      <div class="wrapp"><img src="../assets/安卓@3x.svg"
             class="imga">
        <router-link to="/adminindex/overview?groups=3"
                     class="dire">安卓</router-link>
      </div>
    </div>
    <div class="opin">
      <div class="wrapp"><img src="../assets/IOS@3x.svg"
             class="imga">
        <router-link to="/adminindex/overview?groups=4"
                     class="dire">IOS</router-link>
      </div>
    </div>
    <!-- <div class="opin">
      <div class="wrapp"><img src="../assets/icons/运营.svg"
             class="imga"><span class="dire"
              @click="toProduct">运营</span></div>
    </div> -->
  </div>
</template>
<script>
export default {

}
</script>

<style>
@media (min-width: 751px) {
  .leftbar {
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);
    width: 265px;
    padding-top: 50px;
    position: fixed;
    left: 0;
    top: 0;
  }
  .starlogo {
    margin: 0 auto;
    width: 160px;
    margin-bottom: 34px;
  }
  .starlogo:hover {
    cursor: pointer;
  }
  .starlogo > img {
    width: 160px;
  }
  .opin {
    height: 48px;
    width: 100%;
    margin: 10px auto;
  }
  .wrapp {
    width: 50%;
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
  }
  .imga {
    width: 28px;
    height: 28px;
  }
  .dire {
    color: #ffffff;
    line-height: 28px;
    font-size: 25px;
    font-family: PingFangSC-Regular;
  }
  .opin .dire:hover {
    cursor: pointer;
  }
}
</style>
