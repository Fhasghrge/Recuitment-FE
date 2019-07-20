<template>
  <div class="sub">
    <p class="ddl">
      距离答题结束还有
      <br />
      <span class="lasttime">20d 01:12:13</span>
    </p>
    <button class="btn1">保存答卷</button>
    <span class="autosave">已自动保存</span>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@media only screen and (min-width: 751px) {
  .sub {
    position: fixed;
    right: 0;
    top: 27vh;
    color: #ffffff;
    text-align: center;
    background-color: rgba(22, 22, 22, 0.91);
    height: 37%;
    width: 13%;
  }
  .ddl {
    margin: 2rem auto 3rem auto;
  }
  .lasttime {
    display: inline-block;
    margin-top: 0.4rem;
  }
  .btn1 {
    border: solid 2px #ffffff;
    background-color: inherit;
    font-size: 1rem;
    color: #ffffff;
    width: 80%;
    height: 40px;
  }
  .autosave {
    color: #579eda;
    font-size: 1rem;
    font-family: PingFangSC-Regular;
    margin-top: 2rem;
    display: inline-block;
  }
}

@media only screen and (max-width: 750px) {
  .sub {
    text-align: center;
  }
  .ddl {
    display: none;
  }
  .autosave {
    display: none;
  }
  .btn1 {
    color: #ffffff;
    border: solid 1px rgba(255, 255, 255, 0.8);
    background-color: inherit;
    font-size: 1rem;
    width: 36%;
    height: 35px;
  }
}
</style>
