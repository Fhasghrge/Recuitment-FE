<template>
  <div>
    <markbar></markbar>
    <div class="markques">
      <button class="markreturn">返回</button><span class="notice">离开前请一定记得点击：“保存阅卷”</span>
      <div class="markque">
        <question></question>
      </div>
    </div>
    <scorebar></scorebar>
  </div>
</template>

<script>
import markbar from '../../components/markbar.vue'
import question from '../../components/question.vue'
import scorebar from '../../components/scorebar.vue'
export default {
  name: 'answer',
  components: {
    markbar,
    question,
    scorebar
  }
}
</script>

<style>
#app {
  margin: 0;
}
@media only screen and (min-width: 751px) {
  .markques {
    width: 70%;
    margin: 0 auto 0 3rem;
    color: #ffffff;
    margin-bottom: 5rem;
  }

  .markque {
    padding: 1.6rem 5% 3rem 5%;
    color: #bfbfbf;
    background-color: rgba(25, 25, 25, 0.8);
  }
  .markreturn {
    width: 95px;
    height: 37px;
    border-radius: 3px;
    border: solid 1px #ffffff;
    background-color: inherit;
    font-family: PingFangSC-Semibold;
    font-size: 1.1rem;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #ffffff;
    margin: 1.3rem 2rem 1rem 2rem;
  }
  .notice {
    font-size: 1.2rem;
  }
}
</style>
