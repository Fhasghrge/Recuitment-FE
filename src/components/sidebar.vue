<template>
  <div class="leftbar">
    <div class="starlogo">
      <img src="../assets/LOGO1.png" />
    </div>
    <div class="opin">
      <div class="wrapp"><img src="../assets/icons/产品.svg"
             class="imga"><span class="dire">产品</span></div>
    </div>
    <div class="opin">
      <div class="wrapp"><img src="../assets/icons/前端.svg"
             class="imga"><span class="dire">前端</span></div>
    </div>
    <div class="opin">
      <div class="wrapp"><img src="../assets/icons/后台@1x.svg"
             class="imga"><span class="dire">后台</span></div>
    </div>
    <div class="opin">
      <div class="wrapp"><img src="../assets/icons/设计.svg"
             class="imga"><span class="dire">设计</span></div>
    </div>
    <div class="opin">
      <div class="wrapp"><img src="../assets/icons/DevOps.svg"
             class="imga"><span class="dire">运维</span></div>
    </div>
    <div class="opin">
      <div class="wrapp"><img src="../assets/icons/移动.svg"
             class="imga"><span class="dire">移动</span></div>
    </div>
    <div class="opin">
      <div class="wrapp"><img src="../assets/icons/运营.svg"
             class="imga"><span class="dire">运营</span></div>
    </div>
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
}
</style>
