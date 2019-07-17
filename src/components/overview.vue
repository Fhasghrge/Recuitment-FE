<template>
  <div class="wrapper1">
    <div class="mainshow">
      <h2 class="headline1">公告</h2>
      <p class="content">"AntV 是蚂蚁金服全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、无限可能的数据可视化最佳实践。"</p>
      <div class="btn2"><button class="show1">查看答题情况</button><button class="show1">管理该方向题库</button></div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>

<style >
@media (min-width: 751px) {
  .wrapper1 {
    width: calc(100vw - 335px);
    height: calc(100vh - 140px);
    margin: 20px 55px 0 295px;
    display: flex;
    background-color: rgba(0, 0, 0, 0.8);
  }
  .headline1 {
    color: #e9e9e9;
    margin-left: 30px;
    font-family: PingFangSC-Regular;
    font-weight: 100;
  }
  .mainshow {
    width: 100%;
  }
  .content {
    height: 170px;
    color: #e9e9e9;
    font-family: PingFangSC-Regular;
    margin: 0 30px;
    font-size: 1.3rem;
  }
  .btn2 {
    width: 400px;
    margin: 0 auto;
  }
  .show1 {
    border: solid 3px #ffffff;
    opacity: 0.8;
    width: 400px;
    height: 64px;
    color: #e9e9e9;
    background-color: inherit;
    font-size: 1.3rem;
    margin: 15px auto;
  }
}
</style>
